import './Footer.css'
import logo from "../../assets/SempoStudio-Iconogramma.png";

const Footer = () => {  
  return (
    <div className='footer'>
      <p>www.sempo-studio.com</p>
        <img src={logo} alt="" className='logo'/>
        <p>SEMPO STUDIO - 2026</p>
    </div>
  )
}

export default Footer
