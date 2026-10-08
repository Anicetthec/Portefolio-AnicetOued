import { useEffect, useState } from "react";

const githubUrl = "https://github.com/Anicetthec";
const linkedinUrl = "https://www.linkedin.com/in/anicet-ouedraogo-920182366/";

const projects = [
  {
    id: "sombo",
    category: "web",
    eyebrow: "APPLICATION PWA · GESTION",
    period: "2026",
    title: "Sõmbo — Stock & point de vente",
    summary: "Une application de gestion commerciale qui reste opérationnelle, même sans connexion Internet.",
    details: [
      "Conception d’une application PWA de gestion commerciale pensée pour fonctionner avec ou sans connexion.",
      "Architecture offline-first avec IndexedDB pour les données locales et Supabase pour leur synchronisation.",
      "Interface développée avec React, Vite et Tailwind CSS.",
    ],
    tags: ["React", "Vite", "IndexedDB", "Supabase"],
    art: "sombo",
  },
  {
    id: "telecom",
    category: "tools",
    eyebrow: "OUTIL WEB · TÉLÉCOM",
    period: "2026",
    title: "Identification des opérateurs",
    summary: "Un outil web pour reconnaître et vérifier les numéros des opérateurs mobiles au Burkina Faso.",
    details: [
      "Outil de reconnaissance des numéros mobiles des opérateurs du Burkina Faso.",
      "La maquette de démonstration affiche un exemple identifié comme ONATEL.",
      "Interface React connectée à une base de données Supabase.",
    ],
    tags: ["React", "Supabase", "Responsive"],
    art: "telecom",
  },
  {
    id: "faso-grid",
    category: "network",
    eyebrow: "ÉNERGIE · RÉSEAUX · IOT",
    period: "MAI 2026",
    title: "Faso-Grid — Internet of Energy",
    summary: "Proposition technique pour un micro-réseau solaire décentralisé connecté.",
    details: [
      "Conception d’une proposition technique autour d’un micro-réseau solaire décentralisé.",
      "Architecture envisagée : microcontrôleurs ESP32, communication MQTT et connexion à des portefeuilles mobiles.",
    ],
    tags: ["ESP32", "MQTT", "Énergie solaire", "Paiement mobile"],
    art: "grid",
  },
  {
    id: "micro-travaux",
    category: "web",
    eyebrow: "APPLICATION WEB · PLATEFORME",
    period: "JUIL. 2026",
    title: "Application de micro-travaux",
    summary: "Une application utilitaire multiplateforme pour mettre en relation des travailleurs locaux.",
    details: [
      "Architecture et développement d’une application destinée à connecter des travailleurs locaux.",
      "Application construite avec React et Supabase, avec Vercel pour le déploiement.",
    ],
    tags: ["React", "Supabase", "Vercel", "Multiplateforme"],
    art: "micro",
  },
  {
    id: "doro-vintage",
    category: "design",
    eyebrow: "DESIGN GRAPHIQUE · COMMUNICATION",
    period: "JUIN 2026",
    title: "Doro Vintage Store",
    summary: "Création de supports marketing et de flyers publicitaires au format A4.",
    details: [
      "Réalisation de supports marketing et de flyers publicitaires pour Doro Vintage Store.",
      "Mise en page au format A4 avec Photopea, gestion des calques et respect des contraintes de design.",
    ],
    tags: ["Photopea", "Flyer A4", "Composition graphique"],
    art: "doro",
  },
];

const filters = [
  { id: "all", label: "Tous" },
  { id: "web", label: "Applications web" },
  { id: "tools", label: "Outils" },
  { id: "network", label: "Réseaux & énergie" },
  { id: "design", label: "Design graphique" },
];

function Brand({ footer = false }) {
  return (
    <a className={`brand ${footer ? "footer-brand" : ""}`} href="#accueil" aria-label="Anicet Ouédraogo, accueil">
      <span className="brand-mark">AO</span>
      <span className="brand-name">Anicet<span>.</span></span>
    </a>
  );
}

function Navbar({ dark, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
    document.body.classList.remove("menu-open");
  }

  function toggleMenu() {
    setMenuOpen((open) => {
      document.body.classList.toggle("menu-open", !open);
      return !open;
    });
  }

  return (
    <header className="site-header">
      <Brand />
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="navigation"
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={toggleMenu}
      >
        <span /><span />
      </button>
      <nav className={`navigation ${menuOpen ? "is-open" : ""}`} id="navigation" aria-label="Navigation principale">
        <a href="#apropos" onClick={closeMenu}>À propos</a>
        <a href="#projets" onClick={closeMenu}>Projets</a>
        <a href="#parcours" onClick={closeMenu}>Parcours</a>
        <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={`Activer le mode ${dark ? "clair" : "sombre"}`}>
          <span aria-hidden="true">{dark ? "☼" : "☾"}</span>
          <span className="theme-toggle-label">{dark ? "Mode clair" : "Mode sombre"}</span>
        </button>
        <a className="nav-contact" href="#contact" onClick={closeMenu}>Me contacter <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  );
}

function SectionKicker({ number, children }) {
  return <div className="section-kicker"><span>{number}</span> / {children}</div>;
}

function SkillBadge({ children }) {
  return <span className="skill-badge rounded-sm px-2 py-1">{children}</span>;
}

function SomboArt() {
  return (
    <div className="project-art sombo-art">
      <div className="art-topline"><span>SÕMBO</span><span>01 — 02</span></div>
      <div className="dashboard-card">
        <div className="dashboard-heading"><span>Vue d’ensemble</span><span className="dashboard-dots">•••</span></div>
        <div className="dashboard-total">124 <small>articles en stock</small></div>
        <div className="bar-chart" aria-hidden="true">{Array.from({ length: 12 }, (_, index) => <i key={index} />)}</div>
        <div className="dashboard-footer"><span>Synchronisation active</span><span className="sync-dot" /></div>
      </div>
      <span className="art-caption">OFFLINE-FIRST / 2026</span>
    </div>
  );
}

function TelecomArt() {
  return (
    <div className="project-art telecom-art">
      <div className="art-topline"><span>RÉSEAU BF</span><span>OPÉRATEUR MOBILE</span></div>
      <div className="phone-check">
        <span className="phone-label">EXEMPLE D’IDENTIFICATION</span>
        <div className="phone-number"><span>+226</span> 70 12 34 56 <b>⌕</b></div>
        <div className="operator-result">
          <span className="operator-mark">✓</span>
          <span><small>OPÉRATEUR IDENTIFIÉ</small><strong>ONATEL</strong></span>
          <span className="result-signal">●●●</span>
        </div>
      </div>
      <span className="art-caption">ONATEL / 2026</span>
    </div>
  );
}

function GridArt() {
  return (
    <div className="project-art grid-art">
      <div className="art-topline"><span>FASO-GRID</span><span>MICRO-RÉSEAU SOLAIRE</span></div>
      <div className="grid-diagram" aria-label="Schéma illustratif d'un micro-réseau solaire">
        <div className="grid-node grid-solar"><span>☼</span><small>SOLAIRE</small></div>
        <span className="grid-line grid-line-a" /><span className="grid-line grid-line-b" />
        <div className="grid-node grid-hub"><span>ESP32</span><small>MQTT</small></div>
        <span className="grid-line grid-line-c" /><span className="grid-line grid-line-d" />
        <div className="grid-node grid-home"><span>⌂</span><small>USAGES</small></div>
        <div className="grid-node grid-wallet"><span>FCFA</span><small>PORTEFEUILLE</small></div>
      </div>
      <span className="art-caption">CONCEPT TECHNIQUE / MAI 2026</span>
    </div>
  );
}

function MicroWorkArt() {
  return (
    <div className="project-art microwork-art">
      <div className="art-topline"><span>MICRO-TRAVAUX</span><span>PLATEFORME LOCALE</span></div>
      <div className="work-board">
        <div className="work-board-heading"><span>Opportunités près de vous</span><span>⌕</span></div>
        <div className="work-listing"><span className="work-icon">✳</span><span><b>Assistant événementiel</b><small>Mission ponctuelle · Ouagadougou</small></span><span className="work-arrow">↗</span></div>
        <div className="work-listing"><span className="work-icon">⌂</span><span><b>Livraison de proximité</b><small>Mission flexible · Disponible</small></span><span className="work-arrow">↗</span></div>
      </div>
      <span className="art-caption">MISE EN RELATION / JUIL. 2026</span>
    </div>
  );
}

function DoroArt() {
  return (
    <div className="project-art doro-art">
      <div className="art-topline"><span>DORO VINTAGE STORE</span><span>VISUEL A4</span></div>
      <div className="doro-poster">
        <span className="poster-small">SÉLECTION VINTAGE · OUAGADOUGOU</span>
        <span className="poster-title">STYLE<br />INTEMPOREL</span>
        <span className="poster-line" />
        <span className="poster-callout">TROUVEZ<br />VOTRE PIÈCE</span>
      </div>
      <span className="art-caption">SUPPORT MARKETING / JUIN 2026</span>
    </div>
  );
}

function ProjectCard({ project }) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const artComponents = {
    sombo: <SomboArt />,
    telecom: <TelecomArt />,
    grid: <GridArt />,
    micro: <MicroWorkArt />,
    doro: <DoroArt />,
  };
  const detailsId = `project-details-${project.id}`;

  return (
    <article className="project-card">
      {artComponents[project.art]}
      <div className="project-info">
        <div>
          <p className="project-type">{project.eyebrow}<span className="project-period">{project.period}</span></p>
          <h3>{project.title}</h3>
          <p className="project-summary">{project.summary}</p>
        </div>
        <a className="project-arrow" href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`Voir le profil GitHub d'Anicet pour le projet ${project.title}`}>↗</a>
      </div>
      <div className="tag-list">{project.tags.map((tag) => <SkillBadge key={tag}>{tag}</SkillBadge>)}</div>
      <div className="project-links">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">Voir mes dépôts GitHub ↗</a>
        <span aria-label="Démo en ligne à venir">Démo en ligne à venir</span>
      </div>
      <button className="project-details-toggle" type="button" aria-expanded={detailsOpen} aria-controls={detailsId} onClick={() => setDetailsOpen((open) => !open)}>
        {detailsOpen ? "Masquer les détails" : "Détails du projet"}<span aria-hidden="true">{detailsOpen ? "−" : "+"}</span>
      </button>
      {detailsOpen && (
        <ul className="project-details" id={detailsId}>
          {project.details.map((detail) => <li key={detail}>{detail}</li>)}
        </ul>
      )}
    </article>
  );
}

function App() {
  const [filter, setFilter] = useState("all");
  const [contactStatus, setContactStatus] = useState("idle");
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem("anicet-theme") === "dark";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    document.body.classList.toggle("dark-theme", dark);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", dark ? "#111827" : "#f5f7fb");
    try {
      localStorage.setItem("anicet-theme", dark ? "dark" : "light");
    } catch {
      // Theme switching remains available when storage is disabled.
    }
  }, [dark]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;
    document.documentElement.classList.add("js-ready");
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    const elements = document.querySelectorAll(".intro-content, .values-row, .skills-layout, .journey-layout, .language-content, .contact-main");
    elements.forEach((element) => {
      element.classList.add("reveal");
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  const visibleProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter);

  async function handleContactSubmit(event) {
    event.preventDefault();
    setContactStatus("sending");

    const formData = new FormData(event.currentTarget);
    formData.set("form-name", "contact");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (!response.ok) {
        throw new Error(`La soumission du formulaire a échoué (${response.status}).`);
      }

      event.currentTarget.reset();
      setContactStatus("success");
    } catch (error) {
      console.error("Impossible d’envoyer le formulaire de contact.", error);
      setContactStatus("error");
    }
  }

  return (
    <>
      <a className="skip-link" href="#contenu">Aller au contenu</a>
      <Navbar dark={dark} onToggleTheme={() => setDark((value) => !value)} />
      <main id="contenu">
        <section className="hero section-shell mx-auto" id="accueil" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Étudiant en génie informatique · Ouagadougou</p>
              <h1 id="hero-title">Développeur web<br /><span> & administrateur réseaux.</span></h1>
              <p className="hero-description">Je conçois des applications web modernes et m’intéresse aux réseaux et aux systèmes. Je cherche à créer des solutions fiables, accessibles et adaptées aux besoins réels.</p>
            <div className="hero-actions">
              <a className="button button-primary rounded-sm" href="#projets">Voir mes projets <span aria-hidden="true">↓</span></a>
              <a className="button button-secondary rounded-sm" href="#contact">Me contacter <span aria-hidden="true">↗</span></a>
            </div>
            <div className="hero-location"><span className="location-icon" aria-hidden="true">⌖</span><span>Ouagadougou, Burkina Faso</span><span className="location-divider" /><span>Français · English</span></div>
          </div>
          <div className="hero-visual" aria-label="Portrait et extrait de code">
            <div className="portrait-frame">
              <img className="portrait-image" src="/assets/anicet.png" alt="Portrait d'Anicet Ouédraogo" />
              <span className="portrait-index">ANICET OUÉDRAOGO</span>
            </div>
            <div className="code-card" aria-label="Extrait de code JavaScript">
              <div className="code-label"><i /> PROFIL.JS</div>
              <p><span className="code-key">const</span> anicet = {'{'}</p>
              <p>&nbsp; stack: <span className="code-string">"React, Supabase"</span>,</p>
              <p>&nbsp; passion: <span className="code-string">"solutions utiles"</span></p>
              <p>{'}'}</p>
            </div>
          </div>
          <a className="scroll-cue" href="#apropos"><span /> Défiler pour explorer</a>
        </section>

        <section className="intro section-shell mx-auto" id="apropos" aria-labelledby="about-title">
          <SectionKicker number="01">QUI SUIS-JE</SectionKicker>
          <div className="intro-content">
            <h2 className="section-title" id="about-title">L’informatique, du code<br />jusqu’aux réseaux.</h2>
            <div className="intro-aside">
              <p>Je suis <strong>Anicet Ouédraogo</strong>, étudiant en Licence de Génie Informatique à l’Université Aube Nouvelle. Du développement d’applications web à l’administration des réseaux, j’aime comprendre les problèmes et construire des solutions concrètes.</p>
              <a className="underlined-link" href="#parcours">En savoir plus sur mon parcours <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="values-row">
            <div><span className="value-number">01</span><span>Développement<br />web & PWA</span></div>
            <div><span className="value-number">02</span><span>Réseaux<br />& systèmes</span></div>
            <div><span className="value-number">03</span><span>Support<br />informatique</span></div>
            <div className="values-note">Apprendre.<br />Construire. Partager.</div>
          </div>
        </section>

        <section className="projects-section" id="projets" aria-labelledby="projects-title">
          <div className="section-shell mx-auto">
            <div className="projects-heading">
              <div><SectionKicker number="02">SÉLECTION</SectionKicker><h2 className="section-title" id="projects-title">Projets sélectionnés</h2></div>
              <p>Des idées transformées en outils utiles, avec une attention particulière à l’expérience et au contexte d’utilisation.</p>
            </div>
            <div className="project-filters" role="group" aria-label="Filtrer les projets">
              {filters.map((item) => (
                <button className={`filter-button ${filter === item.id ? "is-active" : ""}`} type="button" key={item.id} onClick={() => setFilter(item.id)} aria-pressed={filter === item.id}>
                  {item.label}<span>{item.id === "all" ? projects.length : projects.filter((project) => project.category === item.id).length.toString().padStart(2, "0")}</span>
                </button>
              ))}
            </div>
            {visibleProjects.length > 0 ? (
              <div className="project-grid">{visibleProjects.map((project) => <ProjectCard project={project} key={project.id} />)}</div>
            ) : (
              <div className="empty-projects" role="status">
                <span className="empty-projects-mark">⌁</span>
                <div><h3>Aucun projet dans cette catégorie pour le moment</h3><p>Choisissez une autre catégorie pour découvrir les projets disponibles.</p></div>
              </div>
            )}
            <p className="project-footnote">Les dépôts et démos dédiés à chaque projet seront ajoutés dès leur publication. En attendant, retrouvez mes dépôts publics sur <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub ↗</a>.</p>
          </div>
        </section>

        <section className="skills-section section-shell mx-auto" aria-labelledby="skills-title">
          <SectionKicker number="03">BOÎTE À OUTILS</SectionKicker>
          <div className="skills-layout">
            <div><h2 className="section-title" id="skills-title">Compétences<br />techniques</h2><p className="skills-lead">Les technologies et outils que j’utilise pour développer et administrer des solutions informatiques.</p></div>
            <div className="skills-list">
              <div className="skill-row"><span className="skill-index">01</span><div><h3>Développement web</h3><p>React · Vite · JavaScript · HTML · CSS · Tailwind CSS · Supabase</p></div><span className="skill-plus">↗</span></div>
              <div className="skill-row"><span className="skill-index">02</span><div><h3>Langages & programmation</h3><p>C · Python (lambda, map, filter) · JavaScript</p></div><span className="skill-plus">↗</span></div>
              <div className="skill-row"><span className="skill-index">03</span><div><h3>Bases de données & modélisation</h3><p>Supabase · Microsoft Access · Merise (MCD, MLD, MCT)</p></div><span className="skill-plus">↗</span></div>
              <div className="skill-row"><span className="skill-index">04</span><div><h3>Systèmes & réseaux</h3><p>Debian Linux (dual-boot) · Windows · Cisco Packet Tracer · GNS3 · Wireshark · CCNA en cours</p></div><span className="skill-plus">↗</span></div>
              <div className="skill-row"><span className="skill-index">05</span><div><h3>Outils, matériel & sécurité</h3><p>Git · VS Code · Vercel · Photopea · Maintenance et dépannage · Fortinet (notions) · Aircrack-ng</p></div><span className="skill-plus">↗</span></div>
            </div>
          </div>
        </section>

        <section className="journey-section" id="parcours" aria-labelledby="journey-title">
          <div className="section-shell mx-auto">
            <SectionKicker number="04">PARCOURS</SectionKicker>
            <div className="journey-layout">
              <div><h2 className="section-title" id="journey-title">Formation & expérience</h2><p className="journey-intro">Un parcours entre études en génie informatique, pratique professionnelle et formations spécialisées.</p></div>
              <div className="timeline">
                <article className="timeline-item"><span className="timeline-date">EN COURS</span><div><h3>Licence en Génie Informatique</h3><p>Université Aube Nouvelle · Ouagadougou</p></div><span className="timeline-marker" /></article>
                <article className="timeline-item"><span className="timeline-date">JUIL. 2026</span><div><h3>Secrétaire informatique / Agent polyvalent</h3><p>Cybercafé · Ouagadougou</p><p className="timeline-detail">Assistance informatique, reprographie, gestion documentaire et maintenance de premier niveau.</p></div><span className="timeline-marker" /></article>
                <article className="timeline-item"><span className="timeline-date">EN COURS</span><div><h3>Cisco Networking Academy · CCNA</h3><p>Notions fondamentales des réseaux · Cybersécurité</p></div><span className="timeline-marker" /></article>
                <article className="timeline-item"><span className="timeline-date">EN CONTINU</span><div><h3>Curiosité & autoformation</h3><p>Sensibilisation à l’IA · Bases de la sécurité Fortinet</p></div><span className="timeline-marker" /></article>
              </div>
            </div>
          </div>
        </section>

        <section className="languages section-shell mx-auto" aria-label="Langues parlées">
          <SectionKicker number="05">AU QUOTIDIEN</SectionKicker>
          <div className="language-content">
            <h2 className="section-title">Langues parlées</h2>
            <div className="language-list"><span><b>Français</b> Courant</span><span><b>Anglais</b> B1</span><span><b>Mooré</b> Langue maternelle</span><span><b>Dioula</b> Pratiqué</span></div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="section-shell mx-auto contact-shell">
            <SectionKicker number="06">CONTACT</SectionKicker>
            <div className="contact-layout">
              <div className="contact-main">
                <p className="eyebrow"><span className="status-dot" /> Un projet, une opportunité ?</p>
                <h2 id="contact-title">Parlons de votre<br /><span className="contact-accent">prochain projet.</span></h2>
                <p className="contact-description">Écrivez-moi via le formulaire ou contactez-moi directement par e-mail ou WhatsApp.</p>
                <div className="contact-actions">
                  <a className="contact-email" href="mailto:anicetouedrogo940@gmail.com">anicetouedrogo940@gmail.com <span aria-hidden="true">↗</span></a>
                  <a className="whatsapp-link" href="https://wa.me/qr/O3XT7G4GRZ4FI1?s=r" target="_blank" rel="noopener noreferrer">
                    <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.33.16 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 0 0 5.75 1.47h.01c6.56 0 11.9-5.34 11.9-11.9a11.82 11.82 0 0 0-3.44-8.44ZM12.06 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.22-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.52-5.26c0-5.47 4.45-9.92 9.91-9.92a9.85 9.85 0 0 1 7.02 2.91A9.84 9.84 0 0 1 22 11.9c0 5.47-4.46 9.91-9.94 9.91Zm5.45-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.88-.78-1.48-1.75-1.65-2.05-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.66-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.62.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" /></svg>
                    Écrire sur WhatsApp <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>

              <form className="contact-form" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleContactSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                <p className="form-honeypot" aria-hidden="true">
                  <label>Ne pas remplir ce champ<input name="bot-field" tabIndex="-1" autoComplete="off" /></label>
                </p>
                <div className="form-row">
                  <label htmlFor="contact-name">Nom</label>
                  <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Votre nom" required />
                </div>
                <div className="form-row">
                  <label htmlFor="contact-email">Adresse e-mail</label>
                  <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="vous@exemple.com" required />
                </div>
                <div className="form-row">
                  <label htmlFor="contact-subject">Objet</label>
                  <input id="contact-subject" name="subject" type="text" placeholder="Le sujet de votre message" required />
                </div>
                <div className="form-row">
                  <label htmlFor="contact-message">Message</label>
                  <textarea id="contact-message" name="message" rows="5" placeholder="Décrivez votre demande…" required />
                </div>
                <button className="contact-submit" type="submit" disabled={contactStatus === "sending"}>
                  {contactStatus === "sending" ? "Envoi en cours…" : "Envoyer le message"} <span aria-hidden="true">↗</span>
                </button>
                <p className={`form-status ${contactStatus}`} role={contactStatus === "error" ? "alert" : "status"} aria-live="polite">
                  {contactStatus === "success" && "Merci ! Votre message a bien été envoyé."}
                  {contactStatus === "error" && "L’envoi a échoué. Réessayez ou contactez-moi directement par e-mail."}
                </p>
              </form>
            </div>
            <div className="contact-bottom">
              <a href="tel:+22664005290"><span className="contact-label">TÉLÉPHONE</span><span>+226 64 00 52 90 ↗</span></a>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer"><span className="contact-label">GITHUB</span><span>github.com/Anicetthec ↗</span></a>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer"><span className="contact-label">LINKEDIN</span><span>Retrouvons-nous ↗</span></a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer section-shell mx-auto">
        <Brand footer />
        <p>Conçu avec soin à Ouagadougou.</p>
        <a className="back-to-top" href="#accueil">Retour en haut ↑</a>
        <span className="copyright">© {new Date().getFullYear()} Anicet Ouédraogo</span>
      </footer>
    </>
  );
}

export default App;
