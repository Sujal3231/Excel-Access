"use client"; // Required for interactive elements like Bootstrap Nav

import 'src/app/globals.css';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import Link from "next/link";

function NavbarComponent() {
  return (
    <div className="homepage_header__LssAN">
      <Navbar collapseOnSelect expand="lg" className="homepage_navbar__yeUfC w-100 navbar navbar-expand-lg navbar-light bg-blue">
        <Container>
          {/* Logo */}
          <Link href="/" className="navbar-brand">
            <Image
              src="/ExcelAccessExpert.svg"
              alt="logo"
              width={240}
              height={23}
              className="img-fluid"
              style={{ color: "transparent" }}
              priority
            />
          </Link>

          {/* Toggler */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            aria-label="Toggle navigation"
            className="navbar-toggler collapsed"
          >
            <span className="navbar-toggler-icon" />
          </Navbar.Toggle>

          {/* Nav Links */}
          <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse collapse">
            <div className="mx-auto navbar-nav">
              <Nav.Link href="#home" className="homepage_customNavlink__dNtDw mx-2 nav-link">
                Home
              </Nav.Link>
              <Nav.Link href="#services" className="homepage_customNavlink__dNtDw mx-2 nav-link">
                Services
              </Nav.Link>
              <Nav.Link href="#why-us" className="homepage_customNavlink__dNtDw mx-2 nav-link">
                Why Us
              </Nav.Link>
              <Nav.Link href="#faq" className="homepage_customNavlink__dNtDw mx-2 nav-link">
                FAQ
              </Nav.Link>
            </div>

            {/* Icons + Contact Button */}
            <div className="ms-0 ms-lg-3 navbar-nav">
              <Image
                src="/mail.png"
                alt="mail icon"
                width={44}
                height={44}
                className="mb-3 mb-lg-0 me-0 me-lg-3"
              />
              <Image
                src="/phone.png"
                alt="contact icon"
                width={44}
                height={44}
                className="mx-0 mx-lg-3 mb-3 mb-lg-0 d-block d-lg-none"
              />
              <Link href="contact-us">
                <button type="button" className="homepage_headerButton__WOB7D btn btn-primary">
                  Contact Us
                </button>
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
