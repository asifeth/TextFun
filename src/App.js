import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from 'react'
import Alert from "./components/Alert";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
const showAlert =(message, type)=>
{
setAlert({
  msg: message,
  type: type
})

setTimeout(() => {
setAlert(null)
}, 1500);


}


const toggleMode=()=>
{
if(mode==='light')
{
  setMode('dark');
  document.body.style.backgroundColor='#0f3040';
  showAlert("Dark Mode has been enabled.", "success");
  setInterval(() =>{
    document.title="Having fun?"
  }, 3500);
  setInterval(()=>{
    document.title="Install Textfun";
  }, 2000);

}

else
{

  setMode('light');
  document.body.style.backgroundColor='white';
  showAlert("Light Mode has been enabled.", "success");
}
}

  return (
    <>
    
      <Navbar title="TextFun" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <Textform showAlert={showAlert} heading="Enter Text to Analyze" mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}
export default App;
