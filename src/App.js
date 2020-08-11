import React, { useState } from 'react';
import './App.css';

function App() {

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    
    const sendMessage = () => {
      setMessages([...messages, input])
    }

    
  return (
    <div className="App">
     <h1>Hello clever programmers</h1>


    <input value={input} onChange={event => setInput(event.target.value)}/>
    <button onClick={sendMessage}>Send Message</button>

    
    </div>
  );
}

export default App;
