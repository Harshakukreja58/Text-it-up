import React, { useState } from 'react'

function Alert(props) {
    const[mode,setMode]=useState('light');  //weather dark mode is enabled or not
    const[alert,setAlert] = useState(null);
    

  return (
    <div style ={{height: '50px'}}>
   { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{props.alert.type}</strong>: {props.alert.msg}
    </div>}
</div>
  )
}

export default Alert
