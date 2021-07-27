"""
server.py
Stripe Sample.
Python 3.6 or newer required.
"""

import stripe
import json
import os

from flask import Flask, render_template, jsonify, request, send_from_directory, redirect
from dotenv import load_dotenv, find_dotenv




# Stripe API keys
os.environ['STRIPE_PUBLISHABLE_KEY']="pk_test_51JFRvcL4xiXSfGC907gwT9Wibtwu5AvfVa2yhE3hzjYth9v8g8Vi577OerRwYr8PFKI0uH3kzwDRlSnMvTV7nEqc00FTm3o2X9"
os.environ['STRIPE_SECRET_KEY']="sk_test_51JFRvcL4xiXSfGC9Rq0odEdbt1Wxm8J8xY6Par2fZl98OgMl3Eu9DrexM9SDvwWXhq4KKU3lwXHkYPsLuPIms5Jk00eo3SREaM"

# Required to run webhook
# See README on how to use the Stripe CLI to setup
os.environ['STRIPE_WEBHOOK_SECRET']="whsec_1234"

os.environ['STATIC_DIR']="client/html"

# Create a Price on Stripe using the Dashboard or API
os.environ['PRICE']="price_1JFg1oL4xiXSfGC9h1dbaFKP"
os.environ['DOMAIN']="http://localhost:4242"

# When using the React client
# DOMAIN=http://localhost:3000

# Supported payment methods for the store.
# Some payment methods support only a subset of currencies.

os.environ['PAYMENT_METHOD_TYPES']="card"


# Requires CURRENCY=usd
# PAYMENT_METHOD_TYPES="card,ideal"


# Requires CURRENCY=myr
# PAYMENT_METHOD_TYPES="card,fpx"






# Setup Stripe python client library.
load_dotenv(find_dotenv())

# Ensure environment variables are set.
price = os.getenv('PRICE')
if price is None or price == 'price_12345' or price == '':
    print('You must set a Price ID in .env. Please see the README.')
    exit(0)

# For sample support and debugging, not required for production:
stripe.set_app_info(
    'stripe-samples/checkout-one-time-payments',
    version='0.0.1',
    url='https://github.com/stripe-samples/checkout-one-time-payments')

stripe.api_version = '2020-08-27'
stripe.api_key = os.getenv('STRIPE_SECRET_KEY')

static_dir = str(os.path.abspath(os.path.join(
    __file__, "..", os.getenv("STATIC_DIR"))))
app = Flask(__name__, static_folder=static_dir,
            static_url_path="", template_folder=static_dir)


@app.route('/', methods=['GET'])
def get_example():
    return render_template('index.html')


@app.route('/config', methods=['GET'])
def get_publishable_key():
    price = stripe.Price.retrieve(os.getenv('PRICE'))
    return jsonify({
      'publicKey': os.getenv('STRIPE_PUBLISHABLE_KEY'),
      'unitAmount': price['unit_amount'],
      'currency': price['currency']
    })

# Fetch the Checkout Session to display the JSON result on the success page
@app.route('/checkout-session', methods=['GET'])
def get_checkout_session():
    id = request.args.get('sessionId')
    checkout_session = stripe.checkout.Session.retrieve(id)
    return jsonify(checkout_session)


@app.route('/create-checkout-session', methods=['POST'])
def create_checkout_session():
    quantity = request.form.get('quantity', 1)
    domain_url = os.getenv('DOMAIN')

    try:
        # Create new Checkout Session for the order
        # Other optional params include:
        # [billing_address_collection] - to display billing address details on the page
        # [customer] - if you have an existing Stripe Customer ID
        # [payment_intent_data] - lets capture the payment later
        # [customer_email] - lets you prefill the email input in the form
        # For full details see https:#stripe.com/docs/api/checkout/sessions/create

        # ?session_id={CHECKOUT_SESSION_ID} means the redirect will have the session ID set as a query param
        checkout_session = stripe.checkout.Session.create(
            success_url=domain_url + '/success.html?session_id={CHECKOUT_SESSION_ID}',
            cancel_url=domain_url + '/canceled.html',
            payment_method_types= os.getenv('PAYMENT_METHOD_TYPES').split(','),
            mode='payment',
            line_items=[{
                'price': os.getenv('PRICE'),
                'quantity': quantity,
            }]
        )
        return redirect(checkout_session.url, code=303)
    except Exception as e:
        return jsonify(error=str(e)), 403


@app.route('/webhook', methods=['POST'])
def webhook_received():
    # You can use webhooks to receive information about asynchronous payment events.
    # For more about our webhook events check out https://stripe.com/docs/webhooks.
    webhook_secret = os.getenv('STRIPE_WEBHOOK_SECRET')
    request_data = json.loads(request.data)

    if webhook_secret:
        # Retrieve the event by verifying the signature using the raw body and secret if webhook signing is configured.
        signature = request.headers.get('stripe-signature')
        try:
            event = stripe.Webhook.construct_event(
                payload=request.data, sig_header=signature, secret=webhook_secret)
            data = event['data']
        except Exception as e:
            return e
        # Get the type of webhook event sent - used to check the status of PaymentIntents.
        event_type = event['type']
    else:
        data = request_data['data']
        event_type = request_data['type']
    data_object = data['object']

    print('event ' + event_type)

    if event_type == 'checkout.session.completed':
        print('🔔 Payment succeeded!')

    return jsonify({'status': 'success'})

if __name__ == '__main__':
    app.run(port=4242, debug=True)