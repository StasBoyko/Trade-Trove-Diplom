import React from 'react';
import classes from '../UI/component.css'
import { Link } from 'react-router-dom';
import instagramImage from '../../assets/static/Instagram.jpg';
import facebookImage from '../../assets/static/Facebook.png';
import YouTube from '../../assets/static/YouTube.png';
import Support from '../../assets/static/Support.png';
import Fq from '../../assets/static/FQ.png';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footerLinks">
        <p style={{textAlign:'left'}}>&copy; 2024 Мій сайт електронної торгівлі Trade Trove. Усі права захищені.</p>
        <a href="#" className="footerLink">Інстаграм<img src={instagramImage} className='footerLinksImg'/></a>
        <a href="#" className="footerLink">Фейсбук<img src={facebookImage} className='footerLinksImg'/></a>
        <a href="#" className="footerLink">Ютуб<img src={YouTube} className='footerLinksImg'/></a>
        <a href="#" className="footerLink">Підтримка<img src={Support} className='footerLinksImg'/></a>
        <a className="footerLink"><Link to="/FAQ">Часті питання</Link><img src={Fq} className='footerLinksImg'/></a>
      </div>
      
    </footer>
  );
};

export default Footer;
