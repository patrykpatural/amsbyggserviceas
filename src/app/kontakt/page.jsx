import Link from 'next/link'

function ContactCTA() {
  return (
    <section className="contact">
      <div className="cta-box">
        <div className="cta-grid">
          <div>
            <p className="eyebrow">Zbuduj swój wymarzony dom!</p>
            <h2 className="cta-title">Zaprojektuj swój dom z nami. Skontaktuj się z nami już dziś!</h2>
            <p>
                Masz pytania? Chcesz poznać realny koszt projektu? Wypełnij formularz
                i odezwiemy się z konkretną odpowiedzią i fachowym doradztwem.
            </p>
          </div>
          <form>
            <div className="field-grid">
                <label>Imię<input type="text" placeholder="Twoje imię" /></label>
                <label>Telefon<input type="tel" placeholder="+48 600 000 000" /></label>
            </div>
            <label>E-mail<input type="email" placeholder="mail@przyklad.pl" /></label>
            <label>Lokalizacja<input type="text" placeholder="np. Kraków / woj. małopolskie" /></label>
            <label>Treść wiadomości<textarea rows="4" placeholder="Opisz swój wymarzony projekt domu..."></textarea></label>
            <a className="btn btn-primary" href="kontakt.html">Wyślij zapytanie</a>
          </form>
        </div>
      </div>
    </section>
  )
}

export default function Kontakt() {
  return (
    <main id="top" className="container">
      <ContactCTA />
    </main>
  )
}