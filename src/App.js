import {Routes, Route} from 'react-router-dom'

import About from './components/About';
import Believe from './components/Believe';
import Community from './components/Community';
import Contact from './components/Contact';
import Home from './components/Home';
import LiveStream from './components/LiveStream';
import Navigation from './components/Navigation';
import Story from './components/Story';
import Sundays from './components/Sundays';

function App() {
  return (
    <>
    <div className='relative top-0'>
      <Navigation />
    </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/believe' element={<Believe/>}/>
        <Route path='/community' element={<Community/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/liveStream' element={<LiveStream/>}/>
        <Route path='/story' element={<Story/>}/>
        <Route path='/sundays' element={<Sundays/>}/>
      </Routes>
    </>
  );
}

export default App;
