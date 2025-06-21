import logo from './logo.svg';
import './App.css';
import LoginWithPrimitiveState from './LoginWithPrimitiveState';
import LoginWithObject from './LoginWithObject';

function App() {
  return (
    <div>
      <h3>React Login Page Examples</h3>
      <LoginWithPrimitiveState></LoginWithPrimitiveState>
      <hr/>
      <LoginWithObject></LoginWithObject>
    </div>
  );
}

export default App;
