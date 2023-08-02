import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

function App() {
  const [darkMode, setDarkMode] = useState('light');
  const [textLabel, setTextLabel] = useState('Enable dark mode');
  const [alert, setAlert] = useState(null);
  const setAl = (message, type) => {
    console.log('Alert');
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (darkMode === 'light') {
      setDarkMode('dark');
      setTextLabel('Enable light Mode');
      document.body.style.backgroundColor = '#9dadbd';
      setAl('Dark mode has been enabled', 'success');
      document.title = 'TextUtils!-DarkMode';
    } else {
      setDarkMode('light');
      setTextLabel('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtils!';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={darkMode} toggleMode={toggleMode} label={textLabel} />
      <Alert alert={alert}></Alert>
      <div className="container">
        <TextForm heading="Type Text to Analyze"></TextForm>
      </div>
    </>
  );
}

export default App;
