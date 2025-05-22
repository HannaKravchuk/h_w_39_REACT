import './App.css';
import Counter from './components/StatefulComponent';
import ClassCounter from './components/ClassComponent';

function App() {
  return (
    <div className="App">
      <h1>Stateful vs Stateless Сomponents</h1>
      <div className="components-container">
        <Counter />
      </div>
    </div>
  );
}

export default App;