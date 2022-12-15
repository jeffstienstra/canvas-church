import NavBar from './components/NavBar'
import Home from './components/Home';
import About from './components/About';
import MainNav from './components/MainNav';

function App() {
  return (
    <div>
      <MainNav />
      {/* <NavBar /> */}
      <Home />
      <About />
    </div>
  );
}

export default App;
