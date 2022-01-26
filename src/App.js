import logo from './logo.svg';
import './App.css';
import Gnblist from './Gnblist'
import Gnbmenu from './Gnbmenu'

function App() {
  return (
    <header id="hd">
      <div class="container">
        <h1><a href=""><img src="./img/logo.svg" alt="" /></a></h1>
        <Gnbmenu></Gnbmenu>
      </div>
    </header>

  );
}

export default App;
