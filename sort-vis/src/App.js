import logo from './logo.svg';
import './App.css';
import SortToolbar from './navbar.js';
import VisWindow from './viswindow.js';

function App() {
  return (
    <div className="App">
      <SortToolbar />
	  <VisWindow />
    </div>
  );
}

export default App;
