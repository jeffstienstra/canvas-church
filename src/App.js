import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Story from './components/Story';
import Believe from './components/Believe';
import Community from './components/Community';
import Sundays from './components/Sundays';
import Navigation from './components/Navigation';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <div className='relative top-0'>
      <Navigation />
    </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/story' element={<Story/>}/>
        <Route path='/believe' element={<Believe/>}/>
        <Route path='/community' element={<Community/>}/>
        <Route path='/sundays' element={<Sundays/>}/>
      </Routes>
    </>
  );
}

export default App;
