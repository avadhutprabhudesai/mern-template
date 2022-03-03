import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    console.log('Use Effect');
    fetch('/api/sample')
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div className="App">
      <h1>This is deployed on Netlify</h1>
    </div>
  );
}

export default App;
