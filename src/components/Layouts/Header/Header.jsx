
import { Navbar } from '../../UI/Navbar/Navbar';
import './Header.css'
import {SocialMedia} from '../socialMedia/socialMedia'

export const Header = () => {
  return (
    <header className='header-page'>
      <img src="/imgs/Face.jpeg" className="imgFace" alt="" />
      <Navbar />
      <img src="/imgs/logoSena.png" className="imgSenaVerde" alt="" />
      <SocialMedia />
    </header>
    
  )
}
