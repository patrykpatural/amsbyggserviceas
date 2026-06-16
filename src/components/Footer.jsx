import Link from 'next/link'
import Image from 'next/image'

const navItems = [
  { href: '/', label: 'Strona główna' },
  { href: '/Projektowanie domu', label: 'Projektowanie domu' },
  { href: '/Opinie klientów', label: 'Opinie klientów' },
  { href: '/kontakt', label: 'Kontakt' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="footer-logo-wrap">
            <Image
              src="/img/logo.png"
              alt="AMS BYGGSERVICE AS logo"
              width={56}
              height={56}
              className="brand-logo"
            />
            <span className="footer-company-name">AMS BYGGSERVICE AS</span>
          </Link>

          <p className="footer-motto">
            Skandynawska jakość budowania, nowoczesne domy na lata.
          </p>

          <div className="footer-socials">
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              YouTube
            </a>
          </div>
        </div>

        <div className="footer-nav">
          <h3>Nawigacja</h3>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-company">
          <h3>Dane firmy</h3>
          <ul>
            <li>AMS BYGGSERVICE AS</li>
            <li>Org. nr: 132 643 276</li>
            <li>Adres: ul. Przykładowa 1, 98-400 Wieruszów</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Kontakt</h3>
          <ul>
            <li>
              <a href="tel:+47 925 36 941">📞 +47 925 36 941</a>
            </li>
            <li>
              <a href="mailto:kontakt@amsbyggservice.pl">
                📧 kontakt@amsbyggservice.pl
              </a>
            </li>
            <li>Pn–Pt: 8:00–16:00</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {year} AMS BYGGSERVICE AS. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  )
}