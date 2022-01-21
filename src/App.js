
import './App.css';
import Carousel from './components/Carousel/Carousel';

function App() {
  return (
    <div>
      <h5 style={{textAlign: "center"}}>Carousel</h5>
      <Carousel infinite>
        <img src="/images/5792878.webp"/>
        <img src="/images/VzEtvB.jpg"/>
        <img src="/images/421006.webp"/>
        <h1 style={{background: "#206ebd"}}>Sample h1</h1>
        <img src="/images/beautiful_scenery_02_hd_picture_166319.jpg"/>
      </Carousel>
    </div>
  );
}

export default App;
