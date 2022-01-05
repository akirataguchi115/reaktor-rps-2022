import './App.css';
import { useState, useEffect } from 'react';

const axios = require('axios');

function App() {
  const [result, setResult] = useState('');

  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/https://bad-api-assignment.reaktor.com/rps/history', {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      const playerA = response.data.data[0].playerA.name;
      console.log(response.data.data[0].playerA.name);
      setResult(playerA);
    });
  }, []);
  return (
    <div className="App">
      {result}
    </div>
  );
}

export default App;
