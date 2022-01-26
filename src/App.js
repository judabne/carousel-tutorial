
import './App.css';
import Carousel from './components/Carousel/Carousel';

function App() {
  return (
    <div>
      <h5 style={{ textAlign: "center" }}>Carousel</h5>
      <Carousel infinite timer={2000} stopOnManual>
        <img src="https://c4.wallpaperflare.com/wallpaper/290/826/480/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg" alt="" />
        {/* <img src="https://c4.wallpaperflare.com/wallpaper/414/668/941/for-desktop-nature-scenes-beautiful-scenery-1920x1080-wallpaper-preview.jpg" alt="" />
        <img src="https://c4.wallpaperflare.com/wallpaper/849/138/463/nature-high-resolution-wallpaper-preview.jpg" alt="" />
        <h1 style={{ background: "#206ebd" }}>Sample h1</h1>
        <img src="https://c4.wallpaperflare.com/wallpaper/611/154/459/widescreen-high-resolution-nature-hd-1920x1080-wallpaper-preview.jpg" alt="" />
        <img src="https://c4.wallpaperflare.com/wallpaper/388/898/571/hd-images-nature-pc-1920x1080-wallpaper-preview.jpg" alt="" />
        <img src="https://c4.wallpaperflare.com/wallpaper/314/778/449/1920x1080-px-los-angeles-anime-sailor-moon-hd-art-wallpaper-preview.jpg" alt="" />
        <img src="https://c4.wallpaperflare.com/wallpaper/636/592/951/beach-1920x1080-high-definition-wallpaper-preview.jpg" alt="" />
        <img src="https://c4.wallpaperflare.com/wallpaper/1019/745/82/1920x1080-px-bit-city-pixel-art-wallpaper-preview.jpg" alt="" />
        <img src="https://wallpapercave.com/wp/wp2419380.jpg" alt="" />
        <img src="https://www.w3schools.com/css/img_5terre_wide.jpg" alt="" /> */}
      </Carousel>
    </div>
  );
}

export default App;
