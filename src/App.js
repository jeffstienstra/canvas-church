import Home from './components/Home';
import About from './components/About';
import Story from './components/Story';
import Believe from './components/Believe';
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
        <Route path='/story' element={<Story/>}/>
        <Route path='/believe' element={<Believe/>}/>
        <Route path='/community' element={<Community/>}/>
        <Route path='/sundays' element={<Sundays/>}/>
      </Routes>
    </>
  );
}

export default App;
