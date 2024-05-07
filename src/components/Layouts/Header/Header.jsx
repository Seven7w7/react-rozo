
import { Navbar } from '../../UI/Navbar/Navbar';
import './Header.css'
import {SocialMedia} from '../socialMedia/socialMedia'

export const Header = () => {
  return (
    <header className='header-page'>
      <img src="public/imgs/Face.jpeg" className="imgFace" alt="" />
      <Navbar />
      <img src="public/imgs/sena.png" className="imgSenaVerde" alt="" />
      <SocialMedia />
    </header>
    
  )
}
