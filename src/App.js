
import './App.css';
import Carousel from './components/Carousel/Carousel';

function App() {
  return (
    <div>
      <h5 style={{textAlign: "center"}}>Carousel</h5>
      <Carousel>
        <img src="https://wallpaperaccess.com/full/5792878.jpg" />
        <img src="https://wallpaperaccess.com/full/421006.jpg" />
        <h1 style={{background: "#206ebd"}}>Sample h1</h1>
        <img src="https://images.all-free-download.com/images/graphicthumb/beautiful_scenery_02_hd_picture_166319.jpg" />
      </Carousel>
    </div>
  );
}

export default App;
