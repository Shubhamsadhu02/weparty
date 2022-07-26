import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './App.css';
import './Styles/global.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import ContactUs from './Components/ContactUs';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/ContactUs" element={<ContactUs />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
