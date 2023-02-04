import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,
  Switch,
Routes,
Route,
Link} from "react-router-dom"
import Login from "./components/Login.js"
import Timetable from "./components/Timetable.js"
import Home from "./components/Home.js"
import Participants from './components/Participants';
import Navbar_component from './components/navbar';

function App() {
  return (
    <>
    <Navbar_component/>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/participants/:uid" element={<Participants/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/timetable/:uid" element={<Timetable/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
