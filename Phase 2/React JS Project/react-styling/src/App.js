import logo from './logo.svg';
import './App.css';
import InlineCSSComponent from './InlineCSSComponent';
import ExternalCSSComponent from './ExternalCSSComponent';

function App() {
  return (
    <div>
      <h2>React with Styling</h2>
      {/* <InlineCSSComponent></InlineCSSComponent> */}
      <ExternalCSSComponent></ExternalCSSComponent>
    </div>
  );
}

export default App;
