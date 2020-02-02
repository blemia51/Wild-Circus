import React from 'react'
const QRCode = require('qrcode.react');


function Qrticket(props) {
  
  return (
    <div>
       <QRCode value = {props.nickname + ' you have '+ props.tickets + ' tickets  for the tour in ' + props.city}/>

    </div>
  )
}

export default Qrticket
