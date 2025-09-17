'use client';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Image from 'next/image';
import 'src/app/globals.css';

function Footer() {
  return (
    <footer className="homepage_footer__qHAFH">
      
        <div className="homepage_topSection__9ncIg">

          {/* Logo */}
          <div className="homepage_logo__SGDFd">
            <Image
              src="/ExcelAccessExpert.svg"
              alt="footer logo"
              width={240}
              height={23}
              className="img-fluid"
              style={{ color: 'transparent' }}
            />
          </div>

          {/* Nav Links */}
          <nav className="homepage_nav__dpKFq">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#why-us">Why Us</a>
            <a href="#faq">FAQ</a>
          </nav>

          {/* Social Icons */}
          <div className="homepage_socialIcons___RHKq">
            <a href="#">
              <Image
                src="/facebook.svg"
                alt="facebook"
                width={25}
                height={25}
                style={{ color: 'transparent' }}
              />
            </a>
            <a href="#">
              <Image
                src="/linkedin.svg"
                alt="linkedin"
                width={25}
                height={25}
                style={{ color: 'transparent' }}
              />
            </a>
            <a href="#">
              <Image
                src="/whatsapp.svg"
                alt="whatsapp"
                width={25}
                height={25}
                style={{ color: 'transparent' }}
              />
            </a>
          </div>
        </div>

        <div className="homepage_bottomSection__qcltp" style={{ minHeight:"62px"}}>
          {/* Policy Links */}
          <div className="homepage_links__JOKQq">
            <a href="#">Privacy &amp; Policy</a>
            <a href="#">Terms &amp; Conditions</a>
          </div>

          {/* Copyright */}
          <p className="m-0">Copyright © {new Date().getFullYear()}. All rights reserved.</p>
        </div>
    
    </footer>
  );
}

export default Footer;
