import CustomNav from './components/customnav/CustomNav';
import Hero from './components/Hero/Hero.js'; // También para agregar el Hero
import Catalogo from './components/catalogo/catalogo.js';
import Footer from './components/Footer/footer.js';

function App() {
  return (
    <div className="App">
      <CustomNav />
      <Hero />
      <Catalogo />
      <Footer  />
    </div>
  );
}

export default App;