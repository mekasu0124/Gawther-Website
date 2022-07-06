import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
// import Forums from './pages/forums/forum_landing';
import Login from './pages/login';
import Support from './pages/support';
import Signup from './pages/signup';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/support" element={<Support />} />
        <Route path="/login" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        {/*
        <Route path="/forums" element={<Forums />} />
        */}
      </Routes>
    </div>
  );
}

export default App;
