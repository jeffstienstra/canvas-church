import NavBar from './components/NavBar'
import Home from './components/Home';
import About from './components/About';
import Community from './components/Community';
import Sundays from './components/Sundays';
import MainNav from './components/MainNav';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <MainNav />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/community' element={<Community/>}/>
        <Route path='/sundays' element={<Sundays/>}/>
        {/* <Route path='/' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<Home/>}/> */}
      </Routes>
    </>
  );
}

export default App;
