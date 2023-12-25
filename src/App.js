import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import React, {useState} from 'react';
import Alert from "./Components/Alert";
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";


function App() {
  const[mode, setMode] = useState('light'); //weather dark mode is enabled or not
const[alert,setAlert]=useState('null');

const showAlert= (message, type) =>{
  setAlert({
    msg: message, 
    type:type
  })
  setTimeout(() =>{
setAlert(null);
  }, 1500);
}

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode Enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode Enabled", "success");
    }
  }
  return (
    <>
    <Router>
      <Navbar title="Text it Up" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
 <div className="container my-3" >
      <Switch>
      <Route excat path="/about">
        <About mode={mode} />
      </Route>
      <Route excat path="/">
      <TextForm showAlert={showAlert} heading="Text it up- Word editor and character counter " mode={mode  } /> 
      </Route>
    </Switch>
    </div>
  </Router>
    </>
  );
}

export default App;
