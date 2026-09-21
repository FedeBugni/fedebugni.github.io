import './Footer.css'
import logo from "../../assets/SempoStudio-Iconogramma-white.png";
import LazyImage from "../LazyImage/LazyImage.jsx";

const Footer = () => {  
  return (
    <div className='footer'>
      <p>www.sempo-studio.com</p>
        <LazyImage src={logo} alt="" className='footer-logo'/>
        <p>SEMPO STUDIO - 2026</p>
    </div>
  )
}

export default Footer
