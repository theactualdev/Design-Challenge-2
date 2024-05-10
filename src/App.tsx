import './App.css';
import firstHeaderImage from './assets/header-image-one.svg';
import secondHeaderImage from './assets/header-image-two.svg';
import firstGalleryImage from './assets/gallery-image-one.svg';
import secondGalleryImage from './assets/gallery-image-two.svg';
import thirdGalleryImage from './assets/gallery-image-three.svg';

let gallery = [firstGalleryImage, secondGalleryImage, thirdGalleryImage];

function App() {
  return (
    <>
    <div className="head-wrapper flex justify-around">
      <div className="content">
        <h1 className='mb-6 font-bold'>Discover the beauty around the world</h1>
        <p className='mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu.</p>
        <button className='bg-textBlack rounded-2xl py-4 px-8 text-white'>Get Started</button>
      </div>
      <div className="images flex h-screen w-1/2 justify-around items-center relative">
        <img src={firstHeaderImage} alt=""/>
        <img src={secondHeaderImage} alt=""/>
      </div>
    </div>
    <div className="gallery-wrapper flex justify-between mx-24">
      {gallery.map((image, index) => (
        <div className="card">
          <p className='text-3xl opacity-30'>0{index + 1}</p>
          <img key={index} src={image} alt=""/>
        </div>
      ))}
    </div>
    </>
  )
}

export default App
