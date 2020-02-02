import React from 'react'
const QRCode = require('qrcode.react');


function Qrticket(props) {
  console.log(props.ticket)
  return (
    <div>
       <QRCode value={props.city}/>

    </div>
  )
}

export default Qrticket
