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
    en: {
      eyebrow: "PWA · INVENTORY MANAGEMENT",
      title: "Sõmbo — Inventory & point of sale",
      summary: "A business management app that keeps working, even without an internet connection.",
      details: [
        "A commercial management PWA designed to work online and offline.",
        "Offline-first architecture using IndexedDB for local data and Supabase for synchronization.",
        "Interface built with React, Vite, and Tailwind CSS.",
      ],
      tags: ["React", "Vite", "IndexedDB", "Supabase"],
    },
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
    en: {
      eyebrow: "WEB TOOL · TELECOM",
      title: "Mobile operator identification",
      summary: "A web tool for identifying and checking mobile operator numbers in Burkina Faso.",
      details: [
        "A tool for recognizing mobile numbers from operators in Burkina Faso.",
        "The demo mockup displays an example identified as ONATEL.",
        "React interface connected to a Supabase database.",
      ],
      tags: ["React", "Supabase", "Responsive"],
    },
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
    en: {
      eyebrow: "ENERGY · NETWORKS · IOT",
      summary: "A technical proposal for a connected, decentralized solar microgrid.",
      details: [
        "Technical proposal for a decentralized solar microgrid.",
        "Proposed architecture: ESP32 microcontrollers, MQTT communication, and mobile wallet connectivity.",
      ],
      tags: ["ESP32", "MQTT", "Solar energy", "Mobile payments"],
    },
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
    en: {
      eyebrow: "WEB APPLICATION · PLATFORM",
      title: "Micro-jobs platform",
      summary: "A cross-platform utility app connecting local workers with short-term jobs.",
      details: [
        "Architecture and development of an application designed to connect local workers.",
        "Built with React and Supabase, with Vercel for deployment.",
      ],
      tags: ["React", "Supabase", "Vercel", "Cross-platform"],
    },
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
    en: {
      eyebrow: "GRAPHIC DESIGN · COMMUNICATION",
      summary: "Marketing materials and promotional A4 flyers for Doro Vintage Store.",
      details: [
        "Created marketing materials and promotional flyers for Doro Vintage Store.",
        "A4 layouts designed in Photopea, with layer management and attention to design requirements.",
      ],
      tags: ["Photopea", "A4 flyer", "Graphic composition"],
    },
    tags: ["Photopea", "Flyer A4", "Composition graphique"],
    art: "doro",
  },
];

const filters = [
  { id: "all", label: "Tous", en: "All" },
  { id: "web", label: "Applications web", en: "Web apps" },
  { id: "tools", label: "Outils", en: "Tools" },
  { id: "network", label: "Réseaux & énergie", en: "Networks & energy" },
  { id: "design", label: "Design graphique", en: "Graphic design" },
];

const translations = {
  fr: {
    pageTitle: "Anicet Ouédraogo — Développeur web & administrateur réseaux",
    home: "Anicet Ouédraogo, accueil",
    about: "À propos",
    projects: "Projets",
    journey: "Parcours",
    contact: "Me contacter",
    lightMode: "Mode clair",
    darkMode: "Mode sombre",
    closeMenu: "Fermer le menu",
    openMenu: "Ouvrir le menu",
    switchLanguage: "Switch to English",
    student: "Étudiant en génie informatique · Ouagadougou",
    heroTitle: "Développeur Web",
    heroTitleAccent: "& Passionné de Réseaux, Sécurité & IA.",
    heroDescription: "Étudiant en Génie Informatique à Ouagadougou, je conçois des applications web tout en développant mes compétences en réseaux, cybersécurité et intelligence artificielle.",
    viewProjects: "Voir mes projets",
    french: "Français",
    english: "Anglais",
    scroll: "Défiler pour explorer",
    aboutKicker: "QUI SUIS-JE",
    aboutTitle: "L’informatique, du code jusqu’aux réseaux.",
    aboutDescription: "Je suis Anicet Ouédraogo, étudiant en Licence de Génie Informatique à l’Université Aube Nouvelle. Je m’intéresse au développement web, aux réseaux, aux systèmes et à la cybersécurité, que je continue d’apprendre. J’aime comprendre les problèmes et construire des solutions concrètes.",
    aboutLink: "En savoir plus sur mon parcours",
    valueWeb: "Développement web & PWA",
    valueNetwork: "Réseaux & systèmes",
    valueSupport: "Support informatique",
    valuesNote: "Apprendre. Construire. Partager.",
    selected: "SÉLECTION",
    projectsTitle: "Projets sélectionnés",
    projectsIntro: "Des idées transformées en outils utiles, avec une attention particulière à l’expérience et au contexte d’utilisation.",
    filterProjects: "Filtrer les projets",
    noProjects: "Aucun projet dans cette catégorie pour le moment",
    noProjectsDescription: "Choisissez une autre catégorie pour découvrir les projets disponibles.",
    projectsFootnote: "Les dépôts et démos dédiés à chaque projet seront ajoutés dès leur publication. En attendant, retrouvez mes dépôts publics sur",
    toolbox: "BOÎTE À OUTILS",
    skillsTitle: "Compétences techniques",
    skillsIntro: "Les technologies et outils que j’utilise pour développer et administrer des solutions informatiques.",
    skillWeb: "Développement web",
    skillProgramming: "Langages & programmation",
    skillDatabases: "Bases de données & modélisation",
    skillSystems: "Systèmes & réseaux",
    skillCyber: "Cybersécurité — en apprentissage",
    skillTools: "Outils & support matériel",
    skillsCyberDetails: "Cisco Networking Academy · Notions de sécurité Fortinet · Sensibilisation aux bonnes pratiques",
    skillsToolsDetails: "Git · VS Code · Vercel · Photopea · Maintenance, assemblage et dépannage de postes",
    journeyKicker: "PARCOURS",
    journeyTitle: "Formation & expérience",
    journeyIntro: "Un parcours entre études en génie informatique, pratique professionnelle et formations spécialisées.",
    current: "EN COURS",
    experienceDate: "JUIL. 2026",
    may2026: "MAI 2026",
    june2026: "JUIN 2026",
    license: "Licence en Génie Informatique",
    university: "Université Aube Nouvelle · Ouagadougou",
    cyberCafe: "Cybercafé · Ouagadougou",
    jobTitle: "Secrétaire informatique / Agent polyvalent",
    jobDetails: "Assistance informatique, reprographie, gestion documentaire et maintenance de premier niveau.",
    networkingAcademy: "Cisco Networking Academy · CCNA",
    networkingStudies: "Notions fondamentales des réseaux · Cybersécurité",
    ongoing: "EN CONTINU",
    selfLearning: "Curiosité & autoformation",
    extraLearning: "Sensibilisation à l’IA · Bases de la sécurité Fortinet",
    daily: "AU QUOTIDIEN",
    languages: "Langues parlées",
    fluent: "Courant",
    nativeLanguage: "Langue maternelle",
    practiced: "Pratiqué",
    contactKicker: "CONTACT",
    opportunity: "Un projet, une opportunité ?",
    contactTitle: "Parlons de votre prochain projet.",
    contactIntro: "Écrivez-moi via le formulaire ou contactez-moi directement par e-mail ou WhatsApp.",
    whatsapp: "Écrire sur WhatsApp",
    name: "Nom",
    namePlaceholder: "Votre nom",
    emailLabel: "Adresse e-mail",
    emailPlaceholder: "vous@exemple.com",
    subject: "Objet",
    subjectPlaceholder: "Le sujet de votre message",
    message: "Message",
    messagePlaceholder: "Décrivez votre demande…",
    send: "Envoyer le message",
    sending: "Envoi en cours…",
    sent: "Merci ! Votre message a bien été envoyé.",
    sendError: "L’envoi n’a pas abouti. Vérifiez la connexion et l’activation de Forms → Form detection sur Netlify, puis réessayez ou contactez-moi par e-mail.",
    honeypot: "Ne pas remplir ce champ",
    github: "GITHUB",
    linkedin: "LINKEDIN",
    linkedinLabel: "Retrouvons-nous",
    footerText: "Conçu avec soin à Ouagadougou.",
    backToTop: "Retour en haut",
    copyright: "© {year} Anicet Ouédraogo",
    projectRepo: "Voir mes dépôts GitHub",
    demoSoon: "Démo en ligne à venir",
    projectGithubLabel: "Voir le profil GitHub d’Anicet pour le projet {title}",
    hideDetails: "Masquer les détails",
    showDetails: "Détails du projet",
    operatorNetwork: "RÉSEAU BF",
    mobileOperator: "OPÉRATEUR MOBILE",
    identificationExample: "EXEMPLE D’IDENTIFICATION",
    identifiedOperator: "OPÉRATEUR IDENTIFIÉ",
    overview: "Vue d’ensemble",
    itemsInStock: "articles en stock",
    syncActive: "Synchronisation active",
    solarDiagram: "Schéma illustratif d'un micro-réseau solaire",
    microJobs: "MICRO-TRAVAUX",
    codeProfile: "PROFIL.JS",
    codePassion: "solutions utiles",
    languagesAria: "Langues parlées",
    solarMicrogrid: "MICRO-RÉSEAU SOLAIRE",
    solar: "SOLAIRE",
    uses: "USAGES",
    wallet: "PORTEFEUILLE",
    technicalConcept: "CONCEPT TECHNIQUE / MAI 2026",
    localPlatform: "PLATEFORME LOCALE",
    opportunities: "Opportunités près de vous",
    eventAssistant: "Assistant événementiel",
    occasionalMission: "Mission ponctuelle · Ouagadougou",
    localDelivery: "Livraison de proximité",
    flexibleMission: "Mission flexible · Disponible",
    vintageSelection: "SÉLECTION VINTAGE · OUAGADOUGOU",
    posterStyle: "STYLE",
    posterTimeless: "INTEMPOREL",
    posterFind: "TROUVEZ",
    posterPiece: "VOTRE PIÈCE",
    posterMarketing: "SUPPORT MARKETING / JUIN 2026",
    graphicA4: "A4 GRAPHIC",
  },
  en: {
    pageTitle: "Anicet Ouedraogo — Web Developer & Networks Enthusiast",
    home: "Anicet Ouedraogo, home",
    about: "About",
    projects: "Projects",
    journey: "Experience",
    contact: "Contact me",
    lightMode: "Light mode",
    darkMode: "Dark mode",
    closeMenu: "Close menu",
    openMenu: "Open menu",
    switchLanguage: "Passer en français",
    student: "Computer Science student · Ouagadougou",
    heroTitle: "Web Developer",
    heroTitleAccent: "& Passionate About Networks, Security & AI.",
    heroDescription: "Computer Science student in Ouagadougou, I build web applications while developing my skills in networking, cybersecurity, and artificial intelligence.",
    viewProjects: "View my projects",
    french: "French",
    english: "English",
    scroll: "Scroll to explore",
    aboutKicker: "ABOUT ME",
    aboutTitle: "From software development to networks.",
    aboutDescription: "I’m Anicet Ouedraogo, a Computer Science bachelor’s student at Université Aube Nouvelle. I’m interested in web development, networking, systems, and cybersecurity, which I’m continuously learning. I enjoy understanding problems and building practical solutions.",
    aboutLink: "Learn more about my background",
    valueWeb: "Web development & PWAs",
    valueNetwork: "Networks & systems",
    valueSupport: "IT support",
    valuesNote: "Learn. Build. Share.",
    selected: "SELECTED WORK",
    projectsTitle: "Selected projects",
    projectsIntro: "Ideas turned into useful tools, with a focus on user experience and real-world context.",
    filterProjects: "Filter projects",
    noProjects: "No projects in this category yet",
    noProjectsDescription: "Choose another category to explore the available projects.",
    projectsFootnote: "Project-specific repositories and demos will be added when they are published. In the meantime, explore my public repositories on",
    toolbox: "TOOLBOX",
    skillsTitle: "Technical skills",
    skillsIntro: "Technologies and tools I use to develop and manage IT solutions.",
    skillWeb: "Web development",
    skillProgramming: "Programming languages",
    skillDatabases: "Databases & data modeling",
    skillSystems: "Systems & networking",
    skillCyber: "Cybersecurity — currently learning",
    skillTools: "Tools & hardware support",
    skillsCyberDetails: "Cisco Networking Academy · Fortinet security fundamentals · Security awareness",
    skillsToolsDetails: "Git · VS Code · Vercel · Photopea · PC maintenance, assembly, and troubleshooting",
    journeyKicker: "BACKGROUND",
    journeyTitle: "Education & experience",
    journeyIntro: "A path combining computer science studies, hands-on professional experience, and specialized training.",
    current: "IN PROGRESS",
    experienceDate: "JULY 2026",
    may2026: "MAY 2026",
    june2026: "JUNE 2026",
    license: "BSc in Computer Science",
    university: "Université Aube Nouvelle · Ouagadougou",
    cyberCafe: "Cybercafé · Ouagadougou",
    jobTitle: "IT Secretary / General Assistant",
    jobDetails: "IT assistance, printing and reproduction, document management, and first-level maintenance.",
    networkingAcademy: "Cisco Networking Academy · CCNA",
    networkingStudies: "Networking fundamentals · Cybersecurity",
    ongoing: "ONGOING",
    selfLearning: "Curiosity & self-learning",
    extraLearning: "AI awareness · Fortinet security fundamentals",
    daily: "EVERYDAY",
    languages: "Languages",
    fluent: "Fluent",
    nativeLanguage: "Native",
    practiced: "Conversational",
    contactKicker: "CONTACT",
    opportunity: "Have a project or opportunity?",
    contactTitle: "Let’s talk about your next project.",
    contactIntro: "Send me a message using the form, or contact me directly by email or WhatsApp.",
    whatsapp: "Message me on WhatsApp",
    name: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email address",
    emailPlaceholder: "you@example.com",
    subject: "Subject",
    subjectPlaceholder: "Subject of your message",
    message: "Message",
    messagePlaceholder: "Tell me about your request…",
    send: "Send message",
    sending: "Sending…",
    sent: "Thank you! Your message has been sent.",
    sendError: "Your message could not be sent. Check your connection and Netlify Forms detection, then try again or email me directly.",
    honeypot: "Leave this field empty",
    github: "GITHUB",
    linkedin: "LINKEDIN",
    linkedinLabel: "Connect with me",
    footerText: "Made with care in Ouagadougou.",
    backToTop: "Back to top",
    copyright: "© {year} Anicet Ouedraogo",
    projectRepo: "View my GitHub repositories",
    demoSoon: "Live demo coming soon",
    projectGithubLabel: "View Anicet’s GitHub profile for the {title} project",
    hideDetails: "Hide project details",
    showDetails: "Project details",
    operatorNetwork: "BURKINA FASO NETWORK",
    mobileOperator: "MOBILE OPERATOR",
    identificationExample: "IDENTIFICATION EXAMPLE",
    identifiedOperator: "IDENTIFIED OPERATOR",
    overview: "Overview",
    itemsInStock: "items in stock",
    syncActive: "Sync active",
    solarDiagram: "Illustrative solar microgrid diagram",
    microJobs: "MICRO-JOBS",
    codeProfile: "PROFILE.JS",
    codePassion: "useful solutions",
    languagesAria: "Languages spoken",
    solarMicrogrid: "SOLAR MICROGRID",
    solar: "SOLAR",
    uses: "USAGE",
    wallet: "MOBILE WALLET",
    technicalConcept: "TECHNICAL CONCEPT / MAY 2026",
    localPlatform: "LOCAL PLATFORM",
    opportunities: "Opportunities near you",
    eventAssistant: "Event assistant",
    occasionalMission: "One-time gig · Ouagadougou",
    localDelivery: "Local delivery",
    flexibleMission: "Flexible gig · Available",
    vintageSelection: "VINTAGE SELECTION · OUAGADOUGOU",
    posterStyle: "STYLE",
    posterTimeless: "TIMELESS",
    posterFind: "FIND",
    posterPiece: "YOUR PIECE",
    posterMarketing: "MARKETING MATERIAL / JUNE 2026",
    graphicA4: "A4 GRAPHIC",
  },
};

function createTranslator(language) {
  return (key) => translations[language][key];
}

function translateProjectPeriod(period, t) {
  if (period === "MAI 2026") return t("may2026");
  if (period === "JUIN 2026") return t("june2026");
  if (period === "JUIL. 2026") return t("experienceDate");
  return period;
}

function Brand({ footer = false, t }) {
  return (
    <a className={`brand ${footer ? "footer-brand" : ""}`} href="#accueil" aria-label={t ? t("home") : "Anicet Ouédraogo, accueil"}>
      <span className="brand-mark">AO</span>
      <span className="brand-name">Anicet<span>.</span></span>
    </a>
  );
}

function Navbar({ dark, onToggleTheme, language, onToggleLanguage, t }) {
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
      <Brand t={t} />
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="navigation"
        aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
        onClick={toggleMenu}
      >
        <span /><span />
      </button>
      <nav className={`navigation ${menuOpen ? "is-open" : ""}`} id="navigation" aria-label={language === "fr" ? "Navigation principale" : "Main navigation"}>
        <a href="#apropos" onClick={closeMenu}>{t("about")}</a>
        <a href="#projets" onClick={closeMenu}>{t("projects")}</a>
        <a href="#parcours" onClick={closeMenu}>{t("journey")}</a>
        <button className="language-toggle" type="button" onClick={onToggleLanguage} aria-label={t("switchLanguage")} lang={language === "fr" ? "en" : "fr"}>
          <span aria-hidden="true">{language === "fr" ? "EN" : "FR"}</span>
        </button>
        <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={`${language === "fr" ? "Activer" : "Enable"} ${dark ? t("lightMode") : t("darkMode")}`}>
          <span aria-hidden="true">{dark ? "☼" : "☾"}</span>
          <span className="theme-toggle-label">{dark ? t("lightMode") : t("darkMode")}</span>
        </button>
        <a className="nav-contact" href="#contact" onClick={closeMenu}>{t("contact")} <span aria-hidden="true">↗</span></a>
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

function SomboArt({ t }) {
  return (
    <div className="project-art sombo-art">
      <div className="art-topline"><span>SÕMBO</span><span>01 — 02</span></div>
      <div className="dashboard-card">
        <div className="dashboard-heading"><span>{t("overview")}</span><span className="dashboard-dots">•••</span></div>
        <div className="dashboard-total">124 <small>{t("itemsInStock")}</small></div>
        <div className="bar-chart" aria-hidden="true">{Array.from({ length: 12 }, (_, index) => <i key={index} />)}</div>
        <div className="dashboard-footer"><span>{t("syncActive")}</span><span className="sync-dot" /></div>
      </div>
      <span className="art-caption">OFFLINE-FIRST / 2026</span>
    </div>
  );
}

function TelecomArt({ t }) {
  return (
    <div className="project-art telecom-art">
      <div className="art-topline"><span>{t("operatorNetwork")}</span><span>{t("mobileOperator")}</span></div>
      <div className="phone-check">
        <span className="phone-label">{t("identificationExample")}</span>
        <div className="phone-number"><span>+226</span> 70 12 34 56 <b>⌕</b></div>
        <div className="operator-result">
          <span className="operator-mark">✓</span>
          <span><small>{t("identifiedOperator")}</small><strong>ONATEL</strong></span>
          <span className="result-signal">●●●</span>
        </div>
      </div>
      <span className="art-caption">ONATEL / 2026</span>
    </div>
  );
}

function GridArt({ t }) {
  return (
    <div className="project-art grid-art">
      <div className="art-topline"><span>FASO-GRID</span><span>{t("solarMicrogrid")}</span></div>
      <div className="grid-diagram" aria-label={t("solarDiagram")}>
        <div className="grid-node grid-solar"><span>☼</span><small>{t("solar")}</small></div>
        <span className="grid-line grid-line-a" /><span className="grid-line grid-line-b" />
        <div className="grid-node grid-hub"><span>ESP32</span><small>MQTT</small></div>
        <span className="grid-line grid-line-c" /><span className="grid-line grid-line-d" />
        <div className="grid-node grid-home"><span>⌂</span><small>{t("uses")}</small></div>
        <div className="grid-node grid-wallet"><span>FCFA</span><small>{t("wallet")}</small></div>
      </div>
      <span className="art-caption">{t("technicalConcept")}</span>
    </div>
  );
}

function MicroWorkArt({ t }) {
  return (
    <div className="project-art microwork-art">
      <div className="art-topline"><span>{t("microJobs")}</span><span>{t("localPlatform")}</span></div>
      <div className="work-board">
        <div className="work-board-heading"><span>{t("opportunities")}</span><span>⌕</span></div>
        <div className="work-listing"><span className="work-icon">✳</span><span><b>{t("eventAssistant")}</b><small>{t("occasionalMission")}</small></span><span className="work-arrow">↗</span></div>
        <div className="work-listing"><span className="work-icon">⌂</span><span><b>{t("localDelivery")}</b><small>{t("flexibleMission")}</small></span><span className="work-arrow">↗</span></div>
      </div>
      <span className="art-caption">MISE EN RELATION / JUIL. 2026</span>
    </div>
  );
}

function DoroArt({ t }) {
  return (
    <div className="project-art doro-art">
      <div className="art-topline"><span>DORO VINTAGE STORE</span><span>{t("graphicA4")}</span></div>
      <div className="doro-poster">
        <span className="poster-small">{t("vintageSelection")}</span>
        <span className="poster-title">{t("posterStyle")}<br />{t("posterTimeless")}</span>
        <span className="poster-line" />
        <span className="poster-callout">{t("posterFind")}<br />{t("posterPiece")}</span>
      </div>
      <span className="art-caption">{t("posterMarketing")}</span>
    </div>
  );
}

function ProjectCard({ project, language, t }) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const artComponents = {
    sombo: <SomboArt t={t} />,
    telecom: <TelecomArt t={t} />,
    grid: <GridArt t={t} />,
    micro: <MicroWorkArt t={t} />,
    doro: <DoroArt t={t} />,
  };
  const detailsId = `project-details-${project.id}`;
  const content = language === "en" ? { ...project, ...project.en } : project;

  return (
    <article className="project-card">
      {artComponents[project.art]}
      <div className="project-info">
        <div>
          <p className="project-type">{content.eyebrow}<span className="project-period">{translateProjectPeriod(project.period, t)}</span></p>
          <h3>{content.title}</h3>
          <p className="project-summary">{content.summary}</p>
        </div>
        <a className="project-arrow" href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label={t("projectGithubLabel").replace("{title}", content.title)}>↗</a>
      </div>
      <div className="tag-list">{content.tags.map((tag) => <SkillBadge key={tag}>{tag}</SkillBadge>)}</div>
      <div className="project-links">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">{t("projectRepo")} ↗</a>
        <span>{t("demoSoon")}</span>
      </div>
      <button className="project-details-toggle" type="button" aria-expanded={detailsOpen} aria-controls={detailsId} onClick={() => setDetailsOpen((open) => !open)}>
        {detailsOpen ? t("hideDetails") : t("showDetails")}<span aria-hidden="true">{detailsOpen ? "−" : "+"}</span>
      </button>
      {detailsOpen && (
        <ul className="project-details" id={detailsId}>
          {content.details.map((detail) => <li key={detail}>{detail}</li>)}
        </ul>
      )}
    </article>
  );
}

function App() {
  const [filter, setFilter] = useState("all");
  const [contactStatus, setContactStatus] = useState("idle");
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem("anicet-language") === "en" ? "en" : "fr";
    } catch {
      return "fr";
    }
  });
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem("anicet-theme") === "dark";
    } catch {
      return false;
    }
  });
  const t = createTranslator(language);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = translations[language].pageTitle;
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      language === "fr"
        ? "Portfolio d'Anicet Ouédraogo, développeur web et étudiant en génie informatique à Ouagadougou."
        : "Portfolio of Anicet Ouedraogo, web developer and computer science student in Ouagadougou.",
    );
    try {
      localStorage.setItem("anicet-language", language);
    } catch {
      // Language switching remains available when storage is disabled.
    }
  }, [language]);

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
    const form = event.currentTarget;
    setContactStatus("sending");

    const formData = new FormData(form);
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

      form.reset();
      setContactStatus("success");
    } catch (error) {
      console.error("Unable to submit the contact form.", error);
      setContactStatus("error");
    }
  }

  return (
    <>
      <a className="skip-link" href="#contenu">{language === "fr" ? "Aller au contenu" : "Skip to content"}</a>
      <Navbar
        dark={dark}
        onToggleTheme={() => setDark((value) => !value)}
        language={language}
        onToggleLanguage={() => setLanguage((value) => value === "fr" ? "en" : "fr")}
        t={t}
      />
      <main id="contenu">
        <section className="hero section-shell mx-auto" id="accueil" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> {t("student")}</p>
              <h1 id="hero-title">{t("heroTitle")}<br /><span>{t("heroTitleAccent")}</span></h1>
              <p className="hero-description">{t("heroDescription")}</p>
            <div className="hero-actions">
              <a className="button button-primary rounded-sm" href="#projets">{t("viewProjects")} <span aria-hidden="true">↓</span></a>
              <a className="button button-secondary rounded-sm" href="#contact">{t("contact")} <span aria-hidden="true">↗</span></a>
            </div>
            <div className="hero-location"><span className="location-icon" aria-hidden="true">⌖</span><span>Ouagadougou, Burkina Faso</span><span className="location-divider" /><span>{t("french")} · {t("english")}</span></div>
          </div>
          <div className="hero-visual" aria-label={language === "fr" ? "Portrait et extrait de code" : "Portrait and code snippet"}>
            <div className="portrait-frame">
              <img className="portrait-image" src="/assets/anicet.png" alt={language === "fr" ? "Portrait d'Anicet Ouédraogo" : "Portrait of Anicet Ouedraogo"} />
              <span className="portrait-index">ANICET OUÉDRAOGO</span>
            </div>
            <div className="code-card" aria-label="Extrait de code JavaScript">
              <div className="code-label"><i /> {t("codeProfile")}</div>
              <p><span className="code-key">const</span> anicet = {'{'}</p>
              <p>&nbsp; stack: <span className="code-string">"React, Supabase"</span>,</p>
              <p>&nbsp; passion: <span className="code-string">"{t("codePassion")}"</span></p>
              <p>{'}'}</p>
            </div>
          </div>
          <a className="scroll-cue" href="#apropos"><span /> {t("scroll")}</a>
        </section>

        <section className="intro section-shell mx-auto" id="apropos" aria-labelledby="about-title">
          <SectionKicker number="01">{t("aboutKicker")}</SectionKicker>
          <div className="intro-content">
            <h2 className="section-title" id="about-title">{t("aboutTitle")}</h2>
            <div className="intro-aside">
              <p>{t("aboutDescription")}</p>
              <a className="underlined-link" href="#parcours">{t("aboutLink")} <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="values-row">
            <div><span className="value-number">01</span><span>{t("valueWeb")}</span></div>
            <div><span className="value-number">02</span><span>{t("valueNetwork")}</span></div>
            <div><span className="value-number">03</span><span>{t("valueSupport")}</span></div>
            <div className="values-note">{t("valuesNote")}</div>
          </div>
        </section>

        <section className="projects-section" id="projets" aria-labelledby="projects-title">
          <div className="section-shell mx-auto">
            <div className="projects-heading">
              <div><SectionKicker number="02">{t("selected")}</SectionKicker><h2 className="section-title" id="projects-title">{t("projectsTitle")}</h2></div>
              <p>{t("projectsIntro")}</p>
            </div>
            <div className="project-filters" role="group" aria-label={t("filterProjects")}>
              {filters.map((item) => (
                <button className={`filter-button ${filter === item.id ? "is-active" : ""}`} type="button" key={item.id} onClick={() => setFilter(item.id)} aria-pressed={filter === item.id}>
                  {language === "fr" ? item.label : item.en}<span>{item.id === "all" ? projects.length : projects.filter((project) => project.category === item.id).length.toString().padStart(2, "0")}</span>
                </button>
              ))}
            </div>
            {visibleProjects.length > 0 ? (
              <div className="project-grid">{visibleProjects.map((project) => <ProjectCard project={project} key={project.id} language={language} t={t} />)}</div>
            ) : (
              <div className="empty-projects" role="status">
                <span className="empty-projects-mark">⌁</span>
                <div><h3>{t("noProjects")}</h3><p>{t("noProjectsDescription")}</p></div>
              </div>
            )}
            <p className="project-footnote">{t("projectsFootnote")} <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub ↗</a>.</p>
          </div>
        </section>

        <section className="skills-section section-shell mx-auto" aria-labelledby="skills-title">
          <SectionKicker number="03">{t("toolbox")}</SectionKicker>
          <div className="skills-layout">
            <div><h2 className="section-title" id="skills-title">{t("skillsTitle")}</h2><p className="skills-lead">{t("skillsIntro")}</p></div>
            <div className="skills-list">
              <div className="skill-row"><span className="skill-index">01</span><div><h3>{t("skillWeb")}</h3><p>React · Vite · JavaScript · HTML · CSS · Tailwind CSS · Supabase</p></div><span className="skill-plus">↗</span></div>
              <div className="skill-row"><span className="skill-index">02</span><div><h3>{t("skillProgramming")}</h3><p>C · Python (lambda, map, filter) · JavaScript</p></div><span className="skill-plus">↗</span></div>
              <div className="skill-row"><span className="skill-index">03</span><div><h3>{t("skillDatabases")}</h3><p>Supabase · Microsoft Access · Merise (MCD, MLD, MCT)</p></div><span className="skill-plus">↗</span></div>
              <div className="skill-row"><span className="skill-index">04</span><div><h3>{t("skillSystems")}</h3><p>Debian Linux (dual-boot) · Windows · Cisco Packet Tracer · GNS3 · Wireshark · CCNA {language === "fr" ? "en cours" : "in progress"}</p></div><span className="skill-plus">↗</span></div>
              <div className="skill-row"><span className="skill-index">05</span><div><h3>{t("skillCyber")}</h3><p>{t("skillsCyberDetails")}</p></div><span className="skill-plus">↗</span></div>
              <div className="skill-row"><span className="skill-index">06</span><div><h3>{t("skillTools")}</h3><p>{t("skillsToolsDetails")}</p></div><span className="skill-plus">↗</span></div>
            </div>
          </div>
        </section>

        <section className="journey-section" id="parcours" aria-labelledby="journey-title">
          <div className="section-shell mx-auto">
            <SectionKicker number="04">{t("journeyKicker")}</SectionKicker>
            <div className="journey-layout">
              <div><h2 className="section-title" id="journey-title">{t("journeyTitle")}</h2><p className="journey-intro">{t("journeyIntro")}</p></div>
              <div className="timeline">
                <article className="timeline-item"><span className="timeline-date">{t("current")}</span><div><h3>{t("license")}</h3><p>{t("university")}</p></div><span className="timeline-marker" /></article>
                <article className="timeline-item"><span className="timeline-date">{t("experienceDate")}</span><div><h3>{t("jobTitle")}</h3><p>{t("cyberCafe")}</p><p className="timeline-detail">{t("jobDetails")}</p></div><span className="timeline-marker" /></article>
                <article className="timeline-item"><span className="timeline-date">{t("current")}</span><div><h3>{t("networkingAcademy")}</h3><p>{t("networkingStudies")}</p></div><span className="timeline-marker" /></article>
                <article className="timeline-item"><span className="timeline-date">{t("ongoing")}</span><div><h3>{t("selfLearning")}</h3><p>{t("extraLearning")}</p></div><span className="timeline-marker" /></article>
              </div>
            </div>
          </div>
        </section>

        <section className="languages section-shell mx-auto" aria-label={t("languagesAria")}>
          <SectionKicker number="05">{t("daily")}</SectionKicker>
          <div className="language-content">
            <h2 className="section-title">{t("languages")}</h2>
            <div className="language-list"><span><b>{t("french")}</b> {t("fluent")}</span><span><b>{t("english")}</b> B1</span><span><b>Mooré</b> {t("nativeLanguage")}</span><span><b>Dioula</b> {t("practiced")}</span></div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="section-shell mx-auto contact-shell">
            <SectionKicker number="06">{t("contactKicker")}</SectionKicker>
            <div className="contact-layout">
              <div className="contact-main">
                <p className="eyebrow"><span className="status-dot" /> {t("opportunity")}</p>
                <h2 id="contact-title">{t("contactTitle")}</h2>
                <p className="contact-description">{t("contactIntro")}</p>
                <div className="contact-actions">
                  <a className="contact-email" href="mailto:anicetouedrogo940@gmail.com">anicetouedrogo940@gmail.com <span aria-hidden="true">↗</span></a>
                  <a className="whatsapp-link" href="https://wa.me/qr/O3XT7G4GRZ4FI1?s=r" target="_blank" rel="noopener noreferrer">
                    <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.33.16 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 0 0 5.75 1.47h.01c6.56 0 11.9-5.34 11.9-11.9a11.82 11.82 0 0 0-3.44-8.44ZM12.06 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.22-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.52-5.26c0-5.47 4.45-9.92 9.91-9.92a9.85 9.85 0 0 1 7.02 2.91A9.84 9.84 0 0 1 22 11.9c0 5.47-4.46 9.91-9.94 9.91Zm5.45-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.88-.78-1.48-1.75-1.65-2.05-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.66-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.62.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" /></svg>
                    {t("whatsapp")} <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>

              <form className="contact-form" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleContactSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                <p className="form-honeypot" aria-hidden="true">
                  <label>{t("honeypot")}<input name="bot-field" tabIndex="-1" autoComplete="off" /></label>
                </p>
                <div className="form-row">
                  <label htmlFor="contact-name">{t("name")}</label>
                  <input id="contact-name" name="name" type="text" autoComplete="name" placeholder={t("namePlaceholder")} required />
                </div>
                <div className="form-row">
                  <label htmlFor="contact-email">{t("emailLabel")}</label>
                  <input id="contact-email" name="email" type="email" autoComplete="email" placeholder={t("emailPlaceholder")} required />
                </div>
                <div className="form-row">
                  <label htmlFor="contact-subject">{t("subject")}</label>
                  <input id="contact-subject" name="subject" type="text" placeholder={t("subjectPlaceholder")} required />
                </div>
                <div className="form-row">
                  <label htmlFor="contact-message">{t("message")}</label>
                  <textarea id="contact-message" name="message" rows="5" placeholder={t("messagePlaceholder")} required />
                </div>
                <button className="contact-submit" type="submit" disabled={contactStatus === "sending"}>
                  {contactStatus === "sending" ? t("sending") : t("send")} <span aria-hidden="true">↗</span>
                </button>
                <p className={`form-status ${contactStatus}`} role={contactStatus === "error" ? "alert" : "status"} aria-live="polite">
                  {contactStatus === "success" && t("sent")}
                  {contactStatus === "error" && t("sendError")}
                </p>
              </form>
            </div>
            <div className="contact-bottom">
              <a href="tel:+22664005290"><span className="contact-label">{language === "fr" ? "TÉLÉPHONE" : "PHONE"}</span><span>+226 64 00 52 90 ↗</span></a>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer"><span className="contact-label">GITHUB</span><span>github.com/Anicetthec ↗</span></a>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer"><span className="contact-label">{t("linkedin")}</span><span>{t("linkedinLabel")} ↗</span></a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer section-shell mx-auto">
        <Brand footer t={t} />
        <p>{t("footerText")}</p>
        <a className="back-to-top" href="#accueil">{t("backToTop")} ↑</a>
        <span className="copyright">{t("copyright").replace("{year}", String(new Date().getFullYear()))}</span>
      </footer>
    </>
  );
}

export default App;
