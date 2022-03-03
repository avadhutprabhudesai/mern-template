import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log('Use Effect');
    fetch('/api/sample')
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <h1>This is deployed on Heroku</h1>
    </div>
  );
}

export default App;
