"use client";

import 'src/app/globals.css';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from '../../components/footer';
import ContactUs from '../../components/Contactus';

export default function ContactPage() {
  return (
    <>
      {/* Inline Navbar */}
      <div className="homepage_header__LssAN">
        <Navbar collapseOnSelect expand="lg" className="homepage_navbar__yeUfC w-100 navbar navbar-expand-lg navbar-light bg-blue">
          <Container>
            {/* Logo only */}
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
          </Container>
        </Navbar>
      </div>

      {/* Main Content */}
      <main>
        <ContactUs />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
