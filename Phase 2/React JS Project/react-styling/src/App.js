import logo from './logo.svg';
import './App.css';
import InlineCSSComponent from './InlineCSSComponent';
import ExternalCSSComponent from './ExternalCSSComponent';
import BootstrapComponent from './BootstrapComponent';

function App() {
  return (
    <div>
      <h2>React with Styling</h2>
      {/* <InlineCSSComponent></InlineCSSComponent> */}
      {/* <ExternalCSSComponent></ExternalCSSComponent> */}
      <BootstrapComponent></BootstrapComponent>
    </div>
  );
}

export default App;
