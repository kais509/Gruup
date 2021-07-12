import React from 'react';
import "./Form.css";
import { Widget, PopupButton} from '@typeform/embed-react'





function Form() {
  return (
    <div className="App">
      <h1 className= 'headerTag'> Complete your profile</h1>

      <div className="App-spacer" />
      <div className="App-container">
        <PopupButton color="#2F4A6A" className = "button" id="gSbPwlh1" style={{ padding: 12, fontSize: 16}}  size={80}>
          Continue
        </PopupButton>
      </div>
      <div className="App-spacer" />
      <div className="App-container">

      </div>
      <div className="App-spacer" />
      {/* <div className="App-container">
        <Widget
          id="gSbPwlh1"
          style={{ margin: '0 auto', width: 800, height: 600 }}
          onReady={handleOnReady}
          enableSandbox
        />
      </div> */}
    </div>
  )
}

export default Form;