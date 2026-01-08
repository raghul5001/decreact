import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Login from './Pages/Login';
import Landingpage from './Pages/Landingpage';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/loginpage' element={<Login/>}/>
          <Route path='/landingpage' element={<Landingpage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;