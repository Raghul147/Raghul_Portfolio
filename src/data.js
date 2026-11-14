export const profile = {
  name: 'Raghul P',
  role: 'Associate Software Engineer · Freelance Full-Stack Developer',
  tagline:
    'I build fast, reliable web and mobile products, from real-time chat platforms to e-commerce storefronts. Currently an Associate Software Engineer at Stavtar and open to freelance projects.',
  phone: '7406038715',
  phoneIntl: '917406038715',
  email: 'raghulpise2024@gmail.com',
  github: 'https://github.com/Raghul147',
  linkedin: 'https://www.linkedin.com/in/raghul-p-7980aa272/',
  location: 'India',
  photo: '/raghul.jpg',

};

export const stats = [
  { value: '2+', label: 'Years building software' },
  { value: '8', label: 'Projects shipped' },
  { value: '1', label: 'Freelance product live' },
];

export const skills = [
  { group: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3 / SCSS'] },
  { group: 'Mobile', items: ['React Native', 'Expo', 'Android (Java)'] },
  { group: 'Backend', items: ['Python / FastAPI', 'Go', 'Node.js / Express', 'PHP', 'REST APIs', 'WebSockets'] },
  { group: 'Data & Cloud', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLite', 'AWS S3', 'Docker'] },
  { group: 'Core', items: ['Java', 'C / C++', 'Data Structures & Algorithms', 'Git & GitHub', 'OOP'] },
];

export const experience = [
  {
    period: '2024 — Present',
    title: 'Associate Software Engineer',
    org: 'Stavtar',
    type: 'Full-time',
    points: [
      'Building and maintaining production software as part of the engineering team.',
      'Working across the stack on features, bug fixes and code reviews.',
    ],
  },
  {
    period: 'Freelance',
    title: 'Full-Stack Developer, Flexible Dieting',
    org: 'Freelance client',
    type: 'Part-time',
    points: [
      'Designed and built a coaching platform end to end: React web portal, React Native app, FastAPI REST API and Go WebSocket gateway.',
      'Delivered real-time WhatsApp-style chat, media sharing up to 300 MB, admin dashboards and client progress tracking.',
    ],
  },
  {
    period: 'Aug 2023',
    title: 'Full Stack Web Development Intern',
    org: 'Prinston Smart Engineers',
    type: 'Internship',
    points: ['Built web apps with HTML, CSS, JavaScript, React, Node.js, MongoDB and Python.'],
  },
  {
    period: 'Jan 2023',
    title: 'Java Development Intern',
    org: 'InternPe',
    type: 'Internship',
    points: ['Designed and developed Java-based applications and backend logic.'],
  },
  {
    period: '2020 — 2024',
    title: 'B.E. Information Science & Engineering',
    org: 'The Oxford College of Engineering',
    type: 'Education',
    points: ['Foundation in DSA, databases, OOP and software engineering.'],
  },
];

export const services = [
  { icon: '⚛️', title: 'Web Applications', text: 'Responsive React and TypeScript apps, from dashboards and admin portals to customer-facing sites.' },
  { icon: '📱', title: 'Mobile Apps', text: 'Cross-platform iOS and Android apps with React Native and Expo, plus native Android in Java.' },
  { icon: '🔌', title: 'APIs & Backends', text: 'REST APIs and real-time services in FastAPI, Go or Node.js, backed by PostgreSQL, MongoDB and Redis.' },
  { icon: '🛒', title: 'E-commerce & Landing Pages', text: 'Fast storefronts and marketing pages that look good and convert.' },
];

const img = (folder, files, captions = []) =>
  files.map((f, i) => ({ src: `/projects/${folder}/${f}`, caption: captions[i] || '' }));

export const projects = [
  {
    id: 'flexible-dieting',
    title: 'Flexible Dieting: Coaching Platform',
    category: 'Full-Stack',
    featured: true,
    badge: 'Freelance',
    year: 'Freelance',
    summary:
      'A real-time coaching platform where nutrition coaches chat with clients, track progress and manage teams. It includes a web portal for coaches and admins and a mobile app for clients.',
    highlights: [
      'WhatsApp-style real-time chat over a Go WebSocket gateway with read receipts, voice notes and media up to 300 MB on AWS S3',
      'Admin portal with overview, coach groups, staff management, broadcast lists and a drag-and-drop form builder',
      'Client tracking: weight trend charts, body measurements and progress photo galleries',
      'React Native (Expo) client app with OTP sign-in, chat and stories',
    ],
    stack: ['React 19', 'TypeScript', 'Tailwind', 'React Native', 'Expo', 'FastAPI', 'Go', 'PostgreSQL', 'Redis', 'AWS S3', 'Docker'],
    device: 'desktop',
    images: [
      ...img('flexible-dieting', ['coach-chat.png', 'admin-overview.png', 'coach-groups.png', 'reports.png', 'portal-login.png'], [
        'Coach workspace: real-time client chat',
        'Admin portal overview',
        'Coach groups & client mapping',
        'Reports',
        'Coach / admin portal login',
      ]),
    ],
    mobileImages: img('flexible-dieting', ['mobile-splash.png', 'mobile-otp.png', 'mobile-chats.png', 'mobile-login.png'], [
      'Mobile app: splash', 'Mobile app: OTP verification', 'Mobile app: client chats', 'Mobile app: login',
    ]),
    links: {},
  },
  {
    id: 'tv-shows',
    title: 'TV Shows Explorer',
    category: 'Frontend',
    year: '2023',
    summary:
      'A React app that searches TV shows from the TVMaze API, with a detail page for each show and a ticket booking form.',
    highlights: [
      'Live search against the TVMaze REST API',
      'Detail page with genres, circular rating meter, status, runtime and schedule',
      'Booking form whose state persists in localStorage',
    ],
    stack: ['React 18', 'React Router', 'Bootstrap', 'SCSS', 'REST API'],
    device: 'desktop',
    images: img('tv-shows', ['1.png', '2.png', '3.png'], ['Show grid with search', 'Show details & rating', 'Ticket booking form']),
    links: { github: 'https://github.com/Raghul147/TV-Shows' },
  },
  {
    id: 'railway',
    title: 'Online Railway Reservation System',
    category: 'Full-Stack',
    year: '2023',
    summary:
      'A ticket booking system where passengers search trains, book and cancel tickets, check out and print e-tickets. Admins manage trains and employees.',
    highlights: [
      'Train search, booking, cancellation and e-ticket printing',
      'Passenger profiles with avatar and password management',
      'Separate employee/admin panel backed by MySQL',
    ],
    stack: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'HTML/CSS'],
    device: 'desktop',
    images: img('railway', ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png']),
    links: { github: 'https://github.com/Raghul147/Online-Railway-Reservation-System' },
  },
  {
    id: 'anime-store',
    title: 'Yami Store: Anime Clothing E-commerce',
    category: 'Frontend',
    year: '2023',
    summary:
      'A responsive storefront for anime merchandise, with a hero section, product catalogue, about page and contact page.',
    highlights: ['Product grid of anime t-shirts with prices', 'Responsive Bootstrap layout', 'Clean, brand-driven typography'],
    stack: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
    device: 'desktop',
    images: img('anime-store', ['1.png', '2.png', '3.png', '4.png']),
    links: { github: 'https://github.com/Raghul147/Anime-Cloths-Store' },
  },
  {
    id: 'e-bill',
    title: 'GST E-Billing Android App',
    category: 'Mobile',
    year: '2023',
    summary:
      'An Android app for small businesses to create GST invoices, manage customers and items, and export bills as PDFs.',
    highlights: [
      'Instant invoice calculations for items, quantity, tax and total',
      'Unique bill numbers and choice of GST tax slabs',
      'PDF invoice generation, with data stored in SQLite through a ContentProvider',
    ],
    stack: ['Java', 'Android SDK', 'SQLite', 'PDF generation'],
    device: 'mobile',
    images: img('e-bill', ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png']),
    links: { github: 'https://github.com/Raghul147/E-Bill-Application' },
  },
  {
    id: 'todo',
    title: 'MERN To-Do List',
    category: 'Full-Stack',
    year: '2023',
    summary:
      'A full-stack task manager. The React frontend talks to an Express REST API that stores tasks in MongoDB.',
    highlights: ['Create, complete and delete tasks', 'Express + Mongoose REST endpoints', 'Gradient UI with an add-task popup'],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Mongoose'],
    device: 'desktop',
    images: img('todo', ['1.png', '2.png'], ['Task list', 'Add task popup']),
    links: { github: 'https://github.com/Raghul147/TO-DO-LIST' },
  },
  {
    id: 'library',
    title: 'Library Management System',
    category: 'Systems',
    year: '2023',
    summary:
      'A console Library Management System in C++ that uses object-oriented design and file-based primary indexing to manage students, librarians, books and issues.',
    highlights: [
      'Role-based menus for Admin, Student and Librarian',
      'Primary-index files for fast record search and delete',
      'Book registration, issue tracking and 15-day return reminders',
    ],
    stack: ['C++', 'OOP', 'File Handling', 'Indexing'],
    device: 'terminal',
    images: img('library', ['1.png', '2.png'], ['Admin & student menus', 'Records, index list & book issue']),
    links: { github: 'https://github.com/Raghul147/Library-Management-System-using-c-code' },
  },
  {
    id: 'old-portfolio',
    title: 'Personal Portfolio v1',
    category: 'Frontend',
    year: '2023',
    summary:
      'My first portfolio site, introducing my education, internships and projects. Its contact form submits to Google Sheets.',
    highlights: ['Typed.js and ScrollReveal animations', 'Sticky header with active-section tracking', 'Contact form wired to Google Sheets'],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'jQuery'],
    device: 'desktop',
    images: img('old-portfolio', ['1.png', '2.png', '3.png'], ['Hero', 'Education & internships', 'Projects']),
    links: { github: 'https://github.com/Raghul147/-My-Portfolio-Website' },
  },
];
