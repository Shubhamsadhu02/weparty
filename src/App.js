import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './App.css';

import './Styles/global.css'
import Home from './Components/Home';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
