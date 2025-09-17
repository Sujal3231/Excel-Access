'use client';

import 'src/app/globals.css';

export default function Clients() {
    const clientLogos = [
        '/nike.png',
        '/spotify.png',
        '/google.png',
        '/amazon.png',
        '/apple.png',
        '/airbnb.png'
    ];

    return (
        <div className='1' style={{ paddingTop: '4%', paddingBottom:'5%', background: 'linear-gradient(180deg, #F2F3F5 0%, rgba(242, 243, 245, 0) 100%)' }}>
            <div className="container">
                {/* Title */}
                <div className="homepage_happyClientsTitle__cgHLS" style={{ textAlign: 'center' }}>
                    <span style={{
                        display: 'inline-block',
                        fontFamily: 'Montserrat-Bold',
                        fontWeight: 500,
                        fontSize: '42px',
                        color: '#272d36'
                    }}>
                        Some of Our Happy Clients
                    </span>
                </div>

                {/* Logos Section */}
                <section className="homepage_logoSection__O7Jen">
                    <div className="homepage_logoWrapper__v1IJv">
                        {clientLogos.map((logo, index) => (
                            <div key={index} className="homepage_logoItem__DhfcU">
                                <img src={logo} alt={`Client ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
}
