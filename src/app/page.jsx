import Link from 'next/link'

// =============================================
// DANE — edytujesz tutaj, reszta się generuje
// =============================================

const features = [
  {
    icon: '❄️',
    title: 'Rachunki niższe o 60%',
    text: 'Wysoka izolacja termiczna, domy pasywne i ciepły mikroklimat przez cały rok.',
  },
  {
    icon: '🧱',
    title: 'Budowa w 90 dni',
    text: 'Prefabrykacja w fabryce pozwala na montaż konstrukcji w kilka dni, niezależnie od pogody.',
  },
  {
    icon: '🌲',
    title: 'Drewno C24 z certyfikatem',
    text: 'Suszone komorowo skandynawskie drewno świerkowe, odporne na ogień i szkodniki.',
  },
  {
    icon: '🛡️',
    title: 'Trwałość na pokolenia',
    text: 'Norweska technologia sprawdzona w skrajnych warunkach klimatycznych i długim użytkowaniu.',
  },
]

const projects = [
  {
    name: 'Fjord 120',
    area: '120 m²',
    price: '420 000 zł',
    image: '/img/dom1.jpg',
    alt: 'Wizualizacja projektu Fjord 120',
  },
  {
    name: 'Aurora 145',
    area: '145 m²',
    price: '510 000 zł',
    image: '/img/dom1.jpg',
    alt: 'Dom z dużymi oknami Aurora 145',
  },
  {
    name: 'Skarp 98',
    area: '98 m²',
    price: '360 000 zł',
    image: '/img/dom1.jpg',
    alt: 'Nowoczesna elewacja Skarp 98',
  },
  {
    name: 'Luna 165',
    area: '165 m²',
    price: '590 000 zł',
    image: '/img/dom1.jpg',
    alt: 'Dom na działce Luna 165',
  },
]

const steps = [
  {
    title: 'Wybór projektu i formalności',
    text: 'Adaptacja, pozwolenia i dopasowanie domu do działki w jednym miejscu.',
  },
  {
    title: 'Prefabrykacja w fabryce',
    text: 'Precyzyjne elementy z certyfikowanego drewna, gotowe do montażu w krótkim czasie.',
  },
  {
    title: 'Montaż na działce',
    text: 'Ściany, dach i konstrukcja stawiane w zaledwie kilka dni, bez chaosu i opóźnień.',
  },
  {
    title: 'Wykończenie i klucze',
    text: 'Dom gotowy do zamieszkania z pełnym wsparciem na każdym etapie współpracy.',
  },
]

const testimonials = [
  {
    quote: 'W domu jest niesamowicie ciepło, a ekipa postawiła ściany w 4 dni. Polecam!',
    author: 'Janusz i Maria spod Warszawy',
  },
]

const buildHighlights = [
  '4 dni montażu',
  '100% kontrola jakości',
  'Certyfikowane drewno',
  'Nowoczesna termoizolacja',
]

// =============================================
// MNIEJSZE KOMPONENTY SEKCJI
// =============================================

function SectionHeader({ eyebrow, title }) {
  return (
    <div className="section-title">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Skandynawski standard budownictwa</p>
          <h1>Nowoczesne domy norweskie.</h1>
          <p className="lead">
            Budujemy całoroczne domy energooszczędne w skandynawskim standardzie.
            Przenieś się na swoje w jeden sezon.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/projekty">
              Zobacz gotowe projekty
            </Link>
            <Link className="btn btn-secondary" href="/technologia">
              Poznaj technologię
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  return (
    <section id="technologia">
      <SectionHeader
        eyebrow="Dlaczego to działa"
        title="Przełamywanie obiekcji i technologia"
      />
      <div className="grid-4">
        {features.map((feature) => (
          <article className="card" key={feature.title}>
            <div className="icon-badge">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function ProjectsSection() {
  return (
    <section id="projekty">
      <SectionHeader
        eyebrow="Flagowe projekty"
        title="Gotowe domy, które robią wrażenie"
      />
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <img src={project.image} alt={project.alt} />
            <div className="project-overlay">
              <span className="project-tag">{project.name}</span>
              <strong>
                {project.area} · Cena od {project.price}
              </strong>
            </div>
          </article>
        ))}
      </div>
      <p className="project-link">
        <Link className="btn btn-secondary" href="/realizacje">
          Zobacz katalog wszystkich projektów
        </Link>
      </p>
    </section>
  )
}

function ProcessSection() {
  return (
    <section>
      <SectionHeader
        eyebrow="Jak to działa"
        title="Proces krok po kroku"
      />
      <div className="timeline">
        {steps.map((step, index) => (
          <article className="step" key={step.title}>
            <div className="step-num">{index + 1}</div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function SocialProofSection() {
  return (
    <section id="realizacje">
      <SectionHeader
        eyebrow="Social proof"
        title="Realizacje i zaufanie klientów"
      />
      <div className="proof-grid">

        {/* Opinie */}
        {testimonials.map((testimonial) => (
          <div className="quote-card" key={testimonial.author}>
            <blockquote>"{testimonial.quote}"</blockquote>
            <cite>{testimonial.author}</cite>
          </div>
        ))}

        {/* Relacje z budowy */}
        <div className="insta-card">
          <div>
            <span className="pill">📸 Relacje z budowy</span>
            <h3 className="insta-title">Na żywo z placu budowy</h3>
            <p className="insta-text">
              Wstawiamy codzienne aktualizacje, zdjęcia detali i proces montażu,
              by klient czuł się pewnie od pierwszego spotkania.
            </p>
          </div>
          <div className="mini-grid">
            {buildHighlights.map((highlight) => (
              <div className="mini-tile" key={highlight}>
                {highlight}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

function ContactCTA() {
  return (
    <section className="contact">
      <div className="cta-box">
        <div className="cta-grid">
          <div>
            <p className="eyebrow">Zamknij lejka sprzedażowego</p>
            <h2 className="cta-title">Zbudujmy Twój dom. Otrzymaj darmową wycenę w 48 godzin.</h2>
            <p>
                Masz pytania? Chcesz poznać realny koszt projektu? Wypełnij formularz
                i odezwiemy się z konkretną odpowiedzią.
            </p>
          </div>
          <form>
            <div className="field-grid">
                <label>Imię<input type="text" placeholder="Twoje imię" /></label>
                <label>Telefon<input type="tel" placeholder="+48 600 000 000" /></label>
            </div>
            <label>E-mail<input type="email" placeholder="mail@przyklad.pl" /></label>
            <label>Lokalizacja<input type="text" placeholder="np. Kraków / woj. małopolskie" /></label>
            <label>Treść wiadomości<textarea rows="4" placeholder="Opowiedz o swoim projekcie, działce i terminie"></textarea></label>
            <a className="btn btn-primary" href="kontakt.html">Wyślij zapytanie</a>
          </form>
        </div>
      </div>
    </section>
  )
}

// =============================================
// STRONA GŁÓWNA — składa wszystko razem
// =============================================

export default function HomePage() {
  return (
    <main id="top" className="container">
      <HeroSection />
      <FeaturesSection />
      <ProjectsSection />
      <ProcessSection />
      <SocialProofSection />
      <ContactCTA />
    </main>
  )
}