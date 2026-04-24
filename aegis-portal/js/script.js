/**
 * ============================================================
 * AEGIS JOB PORTAL — Main JavaScript v2
 * Enhancements: bookmarks, scroll-reveal, skeleton loading,
 * search suggestions, similar jobs, active filter chips,
 * company avatars, mobile bottom nav, scroll-to-top.
 * ============================================================
 */

/* ============================================================
   DATA — 12 job listings
   ============================================================ */
const JOBS_DATA = [
  {
    id: '1', title: 'Senior Software Engineer', company: 'Tech Solutions Inc.',
    location: 'Bengaluru, Karnataka', salary: '₹18L – ₹28L', type: 'Full-time',
    posted: '2 days ago', isNew: true, category: 'Engineering',
    description: 'We are looking for an experienced software engineer to join our growing team. You will work on cutting-edge technologies and lead important projects.',
    fullDescription: `We are seeking a talented Senior Software Engineer to join our dynamic team. In this role, you will be responsible for designing, developing, and maintaining high-quality software solutions that drive our business forward.

Key Responsibilities:
• Lead the design and development of complex software systems
• Mentor junior developers and conduct code reviews
• Collaborate with cross-functional teams to define and implement new features
• Optimize application performance and scalability
• Participate in architectural decisions and technical planning

Required Qualifications:
• 5+ years of experience in software development
• Strong proficiency in JavaScript, TypeScript, and React
• Experience with Node.js and cloud platforms (AWS/GCP)
• Excellent problem-solving and communication skills
• Bachelor's degree in Computer Science or related field

What We Offer:
• Competitive salary and equity package
• Comprehensive health, dental, and vision insurance
• Flexible work arrangements and remote options
• Professional development opportunities`,
    requirements: ['5+ years of software development experience','Strong knowledge of React and TypeScript','Experience with cloud platforms (AWS/GCP)','Excellent problem-solving skills',"Bachelor's degree in CS or related field"]
  },
  {
    id: '2', title: 'Product Manager', company: 'Innovate Labs',
    location: 'Mumbai, Maharashtra', salary: '₹15L – ₹22L', type: 'Full-time',
    posted: '1 week ago', category: 'Product',
    description: 'Join our product team to shape the future of our SaaS platform. Experience with B2B products and agile methodologies required.',
    fullDescription: `We are looking for an experienced Product Manager to lead the development and strategy of our flagship SaaS platform. You will work closely with engineering, design, and business teams to deliver exceptional products.

Key Responsibilities:
• Define product vision, strategy, and roadmap
• Gather and prioritize product requirements from stakeholders
• Work closely with engineering and design teams
• Analyze product metrics and user feedback
• Conduct market research and competitive analysis

Required Qualifications:
• 3+ years of product management experience
• Experience with B2B SaaS products
• Strong analytical and data-driven decision-making skills
• Excellent communication and leadership abilities

Benefits:
• Competitive compensation package
• Stock options
• Flexible PTO policy
• Modern office in Manhattan`,
    requirements: ['3+ years of product management experience','B2B SaaS experience required','Strong analytical skills','Agile methodology expertise']
  },
  {
    id: '3', title: 'UX/UI Designer', company: 'Creative Digital',
    location: 'Remote', salary: '₹12L – ₹18L', type: 'Full-time',
    posted: '3 days ago', isNew: true, category: 'Design',
    description: 'Design beautiful and intuitive user experiences for web and mobile applications. Portfolio required.',
    fullDescription: `We are seeking a talented UX/UI Designer to craft exceptional user experiences across web and mobile platforms.

Key Responsibilities:
• Create wireframes, prototypes, and high-fidelity mockups
• Conduct user research and usability testing
• Establish and maintain design systems and style guides
• Collaborate with developers to ensure design fidelity
• Iterate rapidly based on feedback and data

Required Qualifications:
• 3+ years of UX/UI design experience
• Proficiency in Figma, Sketch, or Adobe XD
• Strong portfolio demonstrating end-to-end design process
• Understanding of accessibility standards`,
    requirements: ['3+ years of UX/UI design experience','Proficiency in Figma or similar tools','Strong portfolio required','Accessibility standards knowledge']
  },
  {
    id: '4', title: 'Data Scientist', company: 'Analytics Pro',
    location: 'Hyderabad, Telangana', salary: '₹16L – ₹24L', type: 'Full-time',
    posted: '4 days ago', category: 'Data',
    description: 'Build machine learning models and extract insights from large datasets. Strong Python and SQL skills required.',
    fullDescription: `Analytics Pro is looking for a Data Scientist to help us turn data into actionable business insights.

Key Responsibilities:
• Build, train, and deploy machine learning models
• Analyze large, complex datasets to derive insights
• Partner with product and engineering teams to ship data products
• Develop dashboards and data visualizations
• Communicate findings to non-technical stakeholders

Required Qualifications:
• 3+ years of experience in data science or ML engineering
• Strong Python (pandas, scikit-learn, PyTorch) skills
• Proficiency in SQL and data warehousing concepts
• Cloud ML platform experience`,
    requirements: ['3+ years in data science / ML','Strong Python and SQL skills','ML framework experience','Cloud ML platform familiarity']
  },
  {
    id: '5', title: 'Frontend Developer', company: 'WebCraft Studios',
    location: 'Pune, Maharashtra', salary: '₹13L – ₹20L', type: 'Full-time',
    posted: '1 day ago', isNew: true, category: 'Engineering',
    description: 'Create responsive and performant web applications using React, TypeScript, and modern frontend technologies.',
    fullDescription: `WebCraft Studios is hiring a Frontend Developer to build polished, high-performance web applications.

Key Responsibilities:
• Build responsive, accessible web interfaces
• Write clean, maintainable React + TypeScript code
• Optimize performance using profiling tools
• Collaborate with designers on pixel-perfect implementations
• Write unit and integration tests

Required Qualifications:
• 3+ years of frontend development experience
• Strong React, TypeScript, and CSS skills
• Modern build tool experience (Vite, Webpack)
• Testing framework familiarity`,
    requirements: ['3+ years of frontend development','Strong React and TypeScript skills','CSS / Tailwind proficiency','Web performance optimization knowledge']
  },
  {
    id: '6', title: 'DevOps Engineer', company: 'Cloud Systems',
    location: 'Gurugram, Haryana', salary: '₹17L – ₹26L', type: 'Full-time',
    posted: '5 days ago', category: 'Engineering',
    description: 'Manage cloud infrastructure and CI/CD pipelines. Experience with AWS, Docker, and Kubernetes required.',
    fullDescription: `Cloud Systems is looking for a DevOps Engineer to build and maintain world-class infrastructure.

Key Responsibilities:
• Design and maintain scalable AWS cloud infrastructure
• Build and improve CI/CD pipelines
• Manage container orchestration with Kubernetes
• Implement monitoring, alerting, and incident response
• Automate infrastructure with Terraform

Required Qualifications:
• 4+ years of DevOps or SRE experience
• Strong AWS expertise
• Docker and Kubernetes proficiency
• Infrastructure-as-Code experience`,
    requirements: ['4+ years DevOps / SRE experience','Strong AWS expertise','Docker and Kubernetes','Terraform or CDK','CI/CD pipeline expertise']
  },
  {
    id: '7', title: 'Marketing Manager', company: 'Growth Marketing Co',
    location: 'Chennai, Tamil Nadu', salary: '₹12L – ₹18L', type: 'Full-time',
    posted: '1 week ago', category: 'Marketing',
    description: 'Lead marketing campaigns and drive customer acquisition. Experience with digital marketing and analytics required.',
    fullDescription: `Growth Marketing Co is seeking a Marketing Manager to lead our digital marketing efforts and drive customer acquisition across channels.

Key Responsibilities:
• Develop and execute integrated marketing campaigns
• Manage paid acquisition (Google Ads, Meta, LinkedIn)
• Own SEO and content marketing strategy
• Analyze campaign performance and optimize for ROI

Required Qualifications:
• 4+ years of digital marketing experience
• Proven track record in customer acquisition
• Proficiency in GA4, HubSpot
• Strong copywriting and communication skills`,
    requirements: ['4+ years digital marketing','Paid acquisition expertise','GA4 and HubSpot proficiency','Strong analytical mindset']
  },
  {
    id: '8', title: 'Mobile Developer', company: 'App Innovations',
    location: 'Remote', salary: '₹14L – ₹20L', type: 'Contract',
    posted: '3 days ago', category: 'Engineering',
    description: 'Develop native mobile applications for iOS and Android. Experience with Swift and Kotlin preferred.',
    fullDescription: `App Innovations is looking for a Mobile Developer on a contract basis to build cross-platform mobile apps.

Key Responsibilities:
• Develop and maintain iOS and Android applications
• Write clean, testable Swift and Kotlin code
• Integrate RESTful APIs and push notifications
• Collaborate with design team on UX flows

Required Qualifications:
• 3+ years of mobile development experience
• Proficiency in Swift and/or Kotlin
• React Native experience is a plus
• App Store / Google Play publishing experience`,
    requirements: ['3+ years mobile development','Swift and/or Kotlin proficiency','React Native (bonus)','App Store publishing experience']
  },
  {
    id: '9', title: 'Financial Analyst', company: 'Capital Partners LLC',
    location: 'Noida, Uttar Pradesh', salary: '₹13L – ₹19L', type: 'Full-time',
    posted: '2 days ago', isNew: true, category: 'Finance',
    description: 'Analyze financial data and prepare reports to guide strategic investment decisions. CFA or MBA preferred.',
    fullDescription: `Capital Partners LLC is seeking a detail-oriented Financial Analyst to support our investment team.

Key Responsibilities:
• Build and maintain complex financial models
• Analyze market trends and investment opportunities
• Prepare reports for senior leadership
• Monitor portfolio performance and reporting

Required Qualifications:
• 2–4 years of financial analysis experience
• Strong Excel and financial modelling skills
• Bloomberg / FactSet proficiency
• CFA candidate or MBA preferred`,
    requirements: ['2–4 years financial analysis','Advanced Excel modelling','Bloomberg / FactSet proficiency','CFA or MBA preferred']
  },
  {
    id: '10', title: 'HR Business Partner', company: 'PeopleFirst Group',
    location: 'Ahmedabad, Gujarat', salary: '₹10L – ₹16L', type: 'Full-time',
    posted: '6 days ago', category: 'HR',
    description: 'Partner with business leaders to drive HR strategy, talent management, and employee engagement initiatives.',
    fullDescription: `PeopleFirst Group is looking for a strategic HR Business Partner to align HR with business objectives.

Key Responsibilities:
• Act as advisor to business unit leaders
• Lead talent acquisition and retention strategies
• Drive performance management planning
• Handle employee relations

Required Qualifications:
• 4+ years HRBP experience
• Employment law knowledge
• HRIS platform experience (Workday)
• PHR or SHRM-CP preferred`,
    requirements: ['4+ years HRBP experience','Employment law knowledge','HRIS platform experience','Strong coaching skills']
  },
  {
    id: '11', title: 'Content Writer', company: 'MediaWave',
    location: 'Remote', salary: '₹6L – ₹10L', type: 'Part-time',
    posted: '2 days ago', category: 'Marketing',
    description: 'Create compelling long-form content, blog posts, and social media copy for B2B tech brands. SEO experience a plus.',
    fullDescription: `MediaWave is looking for a Content Writer to produce high-quality content for B2B tech clients.

Key Responsibilities:
• Write blog posts, whitepapers, case studies, and email campaigns
• Research industry topics and interview subject matter experts
• Optimize content for SEO
• Maintain editorial calendar

Required Qualifications:
• 2+ years of content writing experience
• Strong portfolio of published B2B content
• SEO best practices knowledge
• CMS platform familiarity`,
    requirements: ['2+ years content writing','Strong B2B writing portfolio','SEO knowledge','CMS familiarity (WordPress)']
  },
  {
    id: '12', title: 'Graduate Software Intern', company: 'StartupNest',
    location: 'Bengaluru, Karnataka', salary: '₹500/hr', type: 'Internship',
    posted: '1 day ago', isNew: true, category: 'Engineering',
    description: 'Join our fast-moving startup as a software intern. Work on real features, ship code, and learn from experienced engineers.',
    fullDescription: `StartupNest is offering a 3-month summer software internship for ambitious graduates.

Key Responsibilities:
• Build and ship product features under mentorship
• Participate in daily standups and sprint planning
• Write tested, reviewed code in Python / React
• Present your work at the end-of-term showcase

Requirements:
• Pursuing CS or related degree
• Basic Python and/or JavaScript knowledge
• Personal project portfolio or GitHub`,
    requirements: ['Pursuing CS or related degree','Basic Python / JavaScript','Curious and collaborative mindset','Personal project portfolio or GitHub']
  }
];

/* ============================================================
   COMPANY AVATAR COLOURS
   ============================================================ */
const AVATAR_COLORS = ['#2563eb','#7c3aed','#059669','#dc2626','#d97706','#0891b2','#db2777','#16a34a','#ea580c','#4f46e5','#0284c7','#65a30d'];
function getAvatarColor(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = str.charCodeAt(i) + ((h << 5) - h);
  return AVATAR_COLORS[Math.abs(h) % AVATAR_COLORS.length];
}
function companyAvatar(company) {
  const initials = company.split(' ').slice(0,2).map(w => w[0]).join('').toUpperCase();
  return `<div class="company-avatar" style="background:${getAvatarColor(company)}">${initials}</div>`;
}

/* ============================================================
   LOCAL STORAGE HELPERS
   ============================================================ */
function getApplications()       { return JSON.parse(localStorage.getItem('aegis_applications') || '[]'); }
function saveApplications(apps)  { localStorage.setItem('aegis_applications', JSON.stringify(apps)); }
function getPostedJobs()         { return JSON.parse(localStorage.getItem('aegis_posted_jobs')   || '[]'); }
function savePostedJob(job)      { const j = getPostedJobs(); j.push(job); localStorage.setItem('aegis_posted_jobs', JSON.stringify(j)); }
function getBookmarks()          { return JSON.parse(localStorage.getItem('aegis_bookmarks')     || '[]'); }
function saveBookmarks(ids)      { localStorage.setItem('aegis_bookmarks', JSON.stringify(ids)); }
function getUser()               { return JSON.parse(localStorage.getItem('aegis_user')          || 'null'); }
function setUser(user)           { localStorage.setItem('aegis_user', JSON.stringify(user)); }
function getAllJobs()             { return [...JOBS_DATA, ...getPostedJobs()]; }

function logout() {
  localStorage.removeItem('aegis_user');
  showToast('Logged out successfully.', 'info');
  setTimeout(() => { renderNav(); }, 100);
}

function toggleBookmark(id) {
  const ids = getBookmarks();
  const idx = ids.indexOf(id);
  if (idx === -1) { ids.push(id); showToast('Job saved to bookmarks.', 'success'); }
  else            { ids.splice(idx, 1); showToast('Bookmark removed.', 'info'); }
  saveBookmarks(ids);
  return ids.includes(id);
}

/* ============================================================
   TOAST NOTIFICATIONS
   ============================================================ */
function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) { container = document.createElement('div'); container.id = 'toast-container'; document.body.appendChild(container); }
  const icons = {
    success: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`,
    error:   `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
    info:    `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`
  };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `${icons[type] || ''} <span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => { toast.classList.add('fade-out'); setTimeout(() => toast.remove(), 320); }, 3500);
}

/* ============================================================
   SVG ICONS
   ============================================================ */
const Icons = {
  shield:    `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  menu:      `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  close:     `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  briefcase: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>`,
  mapPin:    `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  dollar:    `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  clock:     `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  bookmark:  `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>`,
  bookmarkF: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>`,
  search:    `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  arrowLeft: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
  arrowUp:   `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>`,
  file:      `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  home:      `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  calendar:  `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  user:      `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  building:  `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="9" width="18" height="13"/><path d="M8 22V12h8v10"/><path d="M21 9H3V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4z"/></svg>`,
  trending:  `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  users:     `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
};

/* ============================================================
   NAVIGATION
   ============================================================ */
function getPrefix() { return window.location.pathname.includes('/pages/') ? '../' : ''; }

function renderNav() {
  const prefix = getPrefix();
  const user   = getUser();
  const page   = document.body.dataset.page;
  const bmCount = getBookmarks().length;

  const links = [
    { href: `${prefix}index.html`,                 label: 'Home',            key: 'home' },
    { href: `${prefix}pages/jobs.html`,            label: 'Browse Jobs',     key: 'jobs' },
    { href: `${prefix}pages/my-applications.html`, label: 'My Applications', key: 'applications' }
  ];

  const navLinks   = links.map(l => `<a href="${l.href}" class="nav-link${page===l.key?' active':''}">${l.label}</a>`).join('');
  const mobileLinks = links.map(l => `<a href="${l.href}" class="nav-link${page===l.key?' active':''}">${l.label}</a>`).join('');
  const bmBadge    = bmCount > 0 ? `<span class="nav-badge">${bmCount}</span>` : '';

  const userDesktop = user
    ? `<span class="text-sm" style="font-weight:500;color:var(--muted-fg);max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Hi, ${user.name.split(' ')[0]}</span>
       <button class="btn btn-ghost btn-sm" onclick="logout()">Logout</button>`
    : `<a href="${prefix}pages/login.html" class="btn btn-outline btn-sm">Login</a>`;

  const userMobile = user
    ? `<button class="btn btn-ghost" onclick="logout()">Logout</button>`
    : `<a href="${prefix}pages/login.html" class="btn btn-outline">Login / Register</a>`;

  const root = document.getElementById('nav-root');
  if (!root) return;
  root.innerHTML = `
    <nav class="nav">
      <div class="container">
        <div class="nav-inner">
          <a href="${prefix}index.html" class="nav-logo">
            <span class="logo-icon">${Icons.shield}</span>Aegis Jobs
          </a>
          <div class="nav-links">${navLinks}</div>
          <div class="nav-actions">
            <a href="${prefix}pages/post-job.html" class="btn btn-primary btn-sm">Post a Job</a>
            <a href="${prefix}pages/jobs.html" class="btn btn-ghost btn-sm" style="position:relative" title="Saved jobs">
              ${Icons.bookmark}${bmBadge}
            </a>
            ${userDesktop}
          </div>
          <button class="nav-hamburger" id="hamburger-btn" aria-label="Toggle menu" aria-expanded="false">${Icons.menu}</button>
        </div>
        <div class="nav-mobile" id="nav-mobile">
          ${mobileLinks}
          <a href="${prefix}pages/post-job.html" class="btn btn-primary">Post a Job</a>
          ${userMobile}
        </div>
      </div>
    </nav>`;

  const btn = document.getElementById('hamburger-btn');
  const mob = document.getElementById('nav-mobile');
  if (btn && mob) {
    btn.addEventListener('click', () => {
      const open = mob.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
      btn.innerHTML = open ? Icons.close : Icons.menu;
    });
    document.addEventListener('click', (e) => {
      if (!btn.contains(e.target) && !mob.contains(e.target) && mob.classList.contains('open')) {
        mob.classList.remove('open');
        btn.innerHTML = Icons.menu;
      }
    });
  }
}

/* ============================================================
   FOOTER
   ============================================================ */
function renderFooter() {
  const prefix = getPrefix();
  const root   = document.getElementById('footer-root');
  if (!root) return;
  root.innerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="${prefix}index.html" class="nav-logo" style="color:#fff">
              <span class="logo-icon">${Icons.shield}</span>Aegis Jobs
            </a>
            <p>Aegis Jobs Private Limited — your trusted partner in finding the perfect career opportunity. We connect talented professionals with leading companies worldwide.</p>
          </div>
          <div class="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="${prefix}index.html">Home</a></li>
              <li><a href="${prefix}pages/jobs.html">Browse Jobs</a></li>
              <li><a href="${prefix}pages/post-job.html">Post a Job</a></li>
              <li><a href="${prefix}pages/my-applications.html">My Applications</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 Aegis Jobs Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>`;
}

/* ============================================================
   MOBILE BOTTOM NAV
   ============================================================ */
function renderMobileBottomNav() {
  const prefix = getPrefix();
  const page   = document.body.dataset.page;
  const nav    = document.createElement('nav');
  nav.className = 'mobile-bottom-nav';
  nav.innerHTML = `
    <div class="mobile-bottom-nav-inner">
      <a href="${prefix}index.html"                 class="mobile-nav-item${page==='home'        ?' active':''}"> ${Icons.home}     <span>Home</span></a>
      <a href="${prefix}pages/jobs.html"            class="mobile-nav-item${page==='jobs'        ?' active':''}"> ${Icons.search}   <span>Jobs</span></a>
      <a href="${prefix}pages/post-job.html"        class="mobile-nav-item${page==='post-job'    ?' active':''}"> ${Icons.building} <span>Post</span></a>
      <a href="${prefix}pages/my-applications.html" class="mobile-nav-item${page==='applications'?' active':''}"> ${Icons.file}     <span>Applied</span></a>
      <a href="${prefix}pages/login.html"           class="mobile-nav-item${page==='login'       ?' active':''}"> ${Icons.user}     <span>Account</span></a>
    </div>`;
  document.body.appendChild(nav);
}

/* ============================================================
   SCROLL-TO-TOP
   ============================================================ */
function initScrollToTop() {
  const btn = document.createElement('button');
  btn.id = 'scroll-top-btn';
  btn.title = 'Back to top';
  btn.innerHTML = Icons.arrowUp;
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  document.body.appendChild(btn);
  window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 380), { passive: true });
}

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal:not(.visible)');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}

/* ============================================================
   SKELETON LOADING
   ============================================================ */
function renderSkeletons(container, count = 4) {
  container.innerHTML = Array.from({ length: count }, () => `
    <div class="skeleton-card">
      <div style="display:flex;gap:14px;align-items:center;margin-bottom:12px;">
        <div class="skeleton" style="width:48px;height:48px;border-radius:8px;flex-shrink:0;"></div>
        <div style="flex:1;">
          <div class="skeleton skeleton-line wide" style="margin-bottom:8px;height:16px;"></div>
          <div class="skeleton skeleton-line med" style="height:13px;"></div>
        </div>
      </div>
      <div class="skeleton skeleton-line wide" style="margin-bottom:8px;"></div>
      <div class="skeleton skeleton-line med"></div>
      <div style="display:flex;justify-content:space-between;margin-top:12px;gap:8px;">
        <div class="skeleton" style="height:26px;border-radius:99px;width:80px;"></div>
        <div class="skeleton" style="height:34px;border-radius:8px;width:110px;"></div>
      </div>
    </div>`).join('');
}

/* ============================================================
   JOB CARD RENDERER
   ============================================================ */
function renderJobCard(job, prefix = '') {
  const saved = getBookmarks().includes(job.id);
  const typeClass = {'Full-time':'badge-primary','Part-time':'badge-parttime','Contract':'badge-contract','Internship':'badge-intern'}[job.type] || 'badge-primary';
  return `
    <div class="job-card reveal" data-job-id="${job.id}">
      <div class="job-card-header">
        <div class="job-card-header-inner">
          ${companyAvatar(job.company)}
          <div style="flex:1">
            <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:4px;">
              <span class="job-card-title">${job.title}</span>
              ${job.isNew ? '<span class="badge-new">New</span>' : ''}
            </div>
            <div class="job-card-meta">
              <span>${Icons.briefcase} ${job.company}</span>
              <span>${Icons.mapPin} ${job.location}</span>
              ${job.salary ? `<span> ${job.salary}</span>` : ''}
            </div>
          </div>
        </div>
        <button class="bookmark-btn${saved?' saved':''}" data-id="${job.id}" title="${saved?'Remove bookmark':'Save job'}" aria-label="Bookmark">
          ${saved ? Icons.bookmarkF : Icons.bookmark}
        </button>
      </div>
      <p class="job-card-desc">${job.description}</p>
      <div class="job-card-footer">
        <div class="job-card-badges">
          <span class="badge ${typeClass}">${job.type}</span>
          <span class="badge badge-muted">${Icons.clock} ${job.posted}</span>
        </div>
        <a href="${prefix}pages/job-detail.html?id=${job.id}" class="btn btn-primary btn-sm">View Details</a>
      </div>
    </div>`;
}

/* Bookmark click delegation */
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.bookmark-btn');
  if (!btn) return;
  const id   = btn.dataset.id;
  const saved = toggleBookmark(id);
  btn.classList.toggle('saved', saved);
  btn.innerHTML = saved ? Icons.bookmarkF : Icons.bookmark;
  renderNav();
});

/* ============================================================
   HOME PAGE
   ============================================================ */
function initHomePage() {
  // Hero search
  const form = document.getElementById('hero-search-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const q   = document.getElementById('hero-query').value.trim();
      const loc = document.getElementById('hero-location').value.trim();
      window.location.href = `pages/jobs.html?q=${encodeURIComponent(q)}&location=${encodeURIComponent(loc)}`;
    });
  }

  // Search suggestions
  const heroInput = document.getElementById('hero-query');
  const heroSugg  = document.getElementById('hero-suggestions');
  if (heroInput && heroSugg) {
    heroInput.addEventListener('input', () => {
      const val = heroInput.value.trim().toLowerCase();
      if (!val) { heroSugg.classList.remove('open'); return; }
      const matches = JOBS_DATA.filter(j => j.title.toLowerCase().includes(val) || j.company.toLowerCase().includes(val)).slice(0, 5);
      if (!matches.length) { heroSugg.classList.remove('open'); return; }
      heroSugg.innerHTML = matches.map(j => `
        <div class="suggestion-item" data-value="${j.title}">
          ${Icons.search}<span><strong>${j.title}</strong> at ${j.company}</span>
        </div>`).join('');
      heroSugg.classList.add('open');
    });
    heroSugg.addEventListener('click', (e) => {
      const item = e.target.closest('.suggestion-item');
      if (item) { heroInput.value = item.dataset.value; heroSugg.classList.remove('open'); }
    });
    document.addEventListener('click', (e) => {
      if (!heroInput.contains(e.target) && !heroSugg.contains(e.target)) heroSugg.classList.remove('open');
    });
  }

  // Featured jobs with skeleton
  const fc = document.getElementById('featured-jobs');
  if (fc) {
    renderSkeletons(fc, 3);
    setTimeout(() => {
      fc.innerHTML = JOBS_DATA.slice(0, 3).map(j => renderJobCard(j)).join('');
      initScrollReveal();
    }, 650);
  }
}

/* ============================================================
   JOBS LISTING PAGE
   ============================================================ */
function initJobsPage() {
  const allJobs = getAllJobs();
  const params  = new URLSearchParams(window.location.search);
  let query     = params.get('q')        || '';
  let location  = params.get('location') || 'all';
  let jobType   = 'all';

  const searchInput = document.getElementById('jobs-search');
  const locationSel = document.getElementById('jobs-location');
  const typeSel     = document.getElementById('jobs-type');
  const clearBtn    = document.getElementById('clear-filters');
  const container   = document.getElementById('jobs-list');
  const countEl     = document.getElementById('jobs-count');
  const chipsEl     = document.getElementById('active-filters');

  if (searchInput && query)                  searchInput.value = query;
  if (locationSel && location !== 'all')     locationSel.value = location;

  function applyFilters() {
    query    = searchInput ? searchInput.value.toLowerCase().trim() : '';
    location = locationSel ? locationSel.value : 'all';
    jobType  = typeSel     ? typeSel.value     : 'all';

    const filtered = allJobs.filter(job => {
      const ms = !query    || job.title.toLowerCase().includes(query)    || job.company.toLowerCase().includes(query) || job.location.toLowerCase().includes(query);
      const ml = !location || location === 'all' || job.location.includes(location);
      const mt = !jobType  || jobType  === 'all' || job.type === jobType;
      return ms && ml && mt;
    });

    renderActiveFilters();
    renderJobs(filtered);
  }

  function renderActiveFilters() {
    if (!chipsEl) return;
    const chips = [];
    if (query)              chips.push({ label: `"${query}"`, cb: () => { if (searchInput) searchInput.value=''; query=''; applyFilters(); }});
    if (location !== 'all') chips.push({ label: location,    cb: () => { if (locationSel) locationSel.value='all'; applyFilters(); }});
    if (jobType  !== 'all') chips.push({ label: jobType,     cb: () => { if (typeSel)     typeSel.value='all';     applyFilters(); }});
    chipsEl.innerHTML = chips.map((c,i) => `<span class="filter-chip" data-idx="${i}">${c.label} <span class="filter-chip-x">×</span></span>`).join('');
    chipsEl.querySelectorAll('.filter-chip').forEach((chip, i) => chip.addEventListener('click', () => chips[i].cb()));
  }

  function renderJobs(jobs) {
    if (countEl) countEl.textContent = `Showing ${jobs.length} of ${allJobs.length} jobs`;
    if (jobs.length === 0) {
      container.innerHTML = `
        <div class="jobs-empty">
          ${Icons.search}
          <h3>No jobs found</h3>
          <p>Try different keywords or clear some filters.</p>
          <button class="btn btn-outline" style="margin-top:16px" id="empty-clear-btn">Clear All Filters</button>
        </div>`;
      document.getElementById('empty-clear-btn')?.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        if (locationSel) locationSel.value = 'all';
        if (typeSel)     typeSel.value     = 'all';
        applyFilters();
      });
      return;
    }
    container.innerHTML = jobs.map(j => renderJobCard(j, '../')).join('');
    initScrollReveal();
  }

  renderSkeletons(container, 6);
  setTimeout(() => {
    applyFilters();
    if (searchInput)  searchInput.addEventListener('input',  applyFilters);
    if (locationSel)  locationSel.addEventListener('change', applyFilters);
    if (typeSel)      typeSel.addEventListener('change',     applyFilters);
    if (clearBtn)     clearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = ''; if (locationSel) locationSel.value = 'all'; if (typeSel) typeSel.value = 'all';
      applyFilters();
    });
  }, 500);

  document.addEventListener('change', (e) => {
    if (e.target.matches('[name="loc-panel"]')) { if (locationSel) { locationSel.value = e.target.value; applyFilters(); } }
  });
}

/* ============================================================
   JOB DETAIL PAGE
   ============================================================ */
function initJobDetailPage() {
  const params  = new URLSearchParams(window.location.search);
  const id      = params.get('id');
  const allJobs = getAllJobs();
  const job     = allJobs.find(j => j.id === id) || JOBS_DATA[0];

  const set = (sel, val) => { const el = document.querySelector(sel); if (el) el.textContent = val; };
  set('#job-title',         job.title);
  set('#job-company',       job.company);
  set('#job-location',      job.location);
  set('#job-salary',        job.salary || 'Not specified');
  set('#job-posted',        `Posted ${job.posted}`);
  set('#job-type',          job.type);
  set('#job-company-apply', job.company);

  const avatarEl = document.getElementById('job-company-avatar');
  if (avatarEl) avatarEl.innerHTML = companyAvatar(job.company);

  const descEl = document.getElementById('job-full-desc');
  if (descEl) descEl.textContent = job.fullDescription || job.description;

  const reqList = document.getElementById('job-requirements');
  if (reqList && job.requirements) {
    reqList.innerHTML = job.requirements.map(r => `<li><span class="req-dot"></span><span>${r}</span></li>`).join('');
  }

  // Apply buttons
  const apps = getApplications();
  const applied = apps.some(a => a.id === job.id);
  document.querySelectorAll('.apply-btn').forEach(btn => {
    if (applied) {
      btn.textContent = 'Applied ✓';
      btn.disabled = true;
      btn.classList.remove('btn-primary');
      btn.classList.add('btn-ghost');
    } else {
      btn.addEventListener('click', () => applyToJob(job));
    }
  });

  // Bookmark button
  const bmBtn = document.getElementById('detail-bookmark-btn');
  if (bmBtn) {
    const updateBmBtn = () => {
      const s = getBookmarks().includes(job.id);
      bmBtn.classList.toggle('saved', s);
      bmBtn.innerHTML = (s ? Icons.bookmarkF : Icons.bookmark) + `<span style="margin-left:6px">${s?'Saved':'Save Job'}</span>`;
    };
    updateBmBtn();
    bmBtn.addEventListener('click', () => { toggleBookmark(job.id); updateBmBtn(); renderNav(); });
  }

  // Similar jobs
  const simContainer = document.getElementById('similar-jobs');
  if (simContainer) {
    const similar = JOBS_DATA.filter(j => j.category === job.category && j.id !== job.id).slice(0, 3);
    if (similar.length) {
      simContainer.innerHTML = similar.map(j => `
        <a class="similar-job-item" href="job-detail.html?id=${j.id}">
          ${companyAvatar(j.company)}
          <div class="similar-job-item-info">
            <div class="similar-job-item-title">${j.title}</div>
            <div class="similar-job-item-sub">${j.company} · ${j.location}</div>
          </div>
          <span class="badge badge-muted">${j.type}</span>
        </a>`).join('');
    } else {
      document.getElementById('similar-section')?.remove();
    }
  }
}

function applyToJob(job) {
  const user = getUser();
  if (!user) { showToast('Please login to apply.', 'error'); setTimeout(() => window.location.href = 'login.html', 1300); return; }
  const apps = getApplications();
  if (apps.some(a => a.id === job.id)) { showToast('Already applied to this job.', 'error'); return; }
  apps.push({ id: job.id, title: job.title, company: job.company, location: job.location, salary: job.salary, type: job.type, appliedDate: new Date().toISOString(), status: 'Under Review' });
  saveApplications(apps);
  showToast('Application submitted! 🎉', 'success');
  document.querySelectorAll('.apply-btn').forEach(btn => { btn.textContent = 'Applied ✓'; btn.disabled = true; btn.classList.remove('btn-primary'); btn.classList.add('btn-ghost'); });
}

/* ============================================================
   LOGIN / REGISTER
   ============================================================ */
function initLoginPage() {
  const loginSection  = document.getElementById('login-section');
  const regSection    = document.getElementById('register-section');
  const titleEl       = document.getElementById('auth-title');
  const subtitleEl    = document.getElementById('auth-subtitle');

  function show(s) {
    const isLogin = s === 'login';
    if (loginSection) loginSection.style.display = isLogin ? 'block' : 'none';
    if (regSection)   regSection.style.display   = isLogin ? 'none'  : 'block';
    if (titleEl)      titleEl.textContent    = isLogin ? 'Welcome Back'                  : 'Create Account';
    if (subtitleEl)   subtitleEl.textContent = isLogin ? 'Sign in to access your account' : 'Join Aegis Jobs to find your dream career';
  }

  document.querySelectorAll('.to-register').forEach(el => el.addEventListener('click', (e) => { e.preventDefault(); show('register'); }));
  document.querySelectorAll('.to-login').forEach(el    => el.addEventListener('click', (e) => { e.preventDefault(); show('login'); }));

  const lForm = document.getElementById('login-form');
  if (lForm) {
    lForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value.trim();
      const pass  = document.getElementById('login-password').value;
      if (!validateEmail(email)) { showFieldError('login-email-error', 'Enter a valid email.'); return; }
      if (pass.length < 6)       { showFieldError('login-password-error', 'Min 6 characters.'); return; }
      setUser({ email, name: capitalize(email.split('@')[0].replace(/[._]/g,' ')) });
      showToast('Login successful! Welcome back.', 'success');
      setTimeout(() => window.location.href = '../index.html', 1200);
    });
  }

  const rForm = document.getElementById('register-form');
  if (rForm) {
    rForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('reg-name').value.trim();
      const email= document.getElementById('reg-email').value.trim();
      const pass = document.getElementById('reg-password').value;
      const conf = document.getElementById('reg-confirm').value;
      let ok = true;
      if (!name)                 { showFieldError('reg-name-error',    'Full name required.');     ok = false; }
      if (!validateEmail(email)) { showFieldError('reg-email-error',   'Enter a valid email.');    ok = false; }
      if (pass.length < 6)       { showFieldError('reg-password-error','Min 6 characters.');       ok = false; }
      if (pass !== conf)         { showFieldError('reg-confirm-error', 'Passwords do not match.'); ok = false; }
      if (!ok) return;
      setUser({ email, name });
      showToast('Account created! You are now logged in.', 'success');
      setTimeout(() => window.location.href = '../index.html', 1200);
    });
  }
}

/* ============================================================
   POST JOB PAGE
   ============================================================ */
function initPostJobPage() {
  const user       = getUser();
  const authGate   = document.getElementById('post-job-auth-gate');
  const formSec    = document.getElementById('post-job-form-section');

  if (!user) {
    if (authGate) authGate.style.display = 'block';
    if (formSec)  formSec.style.display  = 'none';
    return;
  }
  if (authGate) authGate.style.display = 'none';
  if (formSec)  formSec.style.display  = 'block';

  const posterEl = document.getElementById('poster-name');
  if (posterEl) posterEl.textContent = user.name;

  const form = document.getElementById('post-job-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('pj-title').value.trim();
    const co    = document.getElementById('pj-company').value.trim();
    const loc   = document.getElementById('pj-location').value.trim();
    const sal   = document.getElementById('pj-salary').value.trim();
    const type  = document.getElementById('pj-type').value;
    const desc  = document.getElementById('pj-description').value.trim();
    let ok = true;
    if (!title) { showFieldError('pj-title-error',   'Job title required.');   ok = false; }
    if (!co)    { showFieldError('pj-company-error', 'Company name required.'); ok = false; }
    if (!loc)   { showFieldError('pj-location-error','Location required.');     ok = false; }
    if (!desc)  { showFieldError('pj-desc-error',    'Description required.');  ok = false; }
    if (!ok) return;
    const btn = form.querySelector('[type="submit"]');
    if (btn) { btn.disabled = true; btn.innerHTML = `<span class="spinner"></span> Publishing…`; }
    setTimeout(() => {
      savePostedJob({ id: 'posted_' + Date.now(), title, company: co, location: loc, salary: sal, type, posted: 'Just now', description: desc, fullDescription: desc, requirements: [], isNew: true, category: 'Other' });
      showToast('Job posted successfully! 🎉', 'success');
      setTimeout(() => window.location.href = 'jobs.html', 1400);
    }, 900);
  });
}

/* ============================================================
   MY APPLICATIONS PAGE
   ============================================================ */
function initApplicationsPage() {
  const container  = document.getElementById('applications-list');
  const emptyState = document.getElementById('applications-empty');
  const countEl    = document.getElementById('applications-count');
  if (!container) return;

  const apps = getApplications();
  if (apps.length === 0) {
    container.style.display = 'none';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }
  if (emptyState) emptyState.style.display = 'none';
  if (countEl) countEl.textContent = `${apps.length} ${apps.length === 1 ? 'application' : 'applications'}`;

  const statusMap = {
    'Under Review': { cls: 'badge-blue',    pct: 33,  clr: 'var(--primary)' },
    'Accepted':     { cls: 'badge-success', pct: 100, clr: 'var(--success)' },
    'Rejected':     { cls: 'badge-danger',  pct: 100, clr: 'var(--danger)'  }
  };

  container.innerHTML = apps.map(app => {
    const sm  = statusMap[app.status] || statusMap['Under Review'];
    const dt  = new Date(app.appliedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    return `
      <div class="card application-card reveal">
        <div class="card-body">
          <div class="app-card-inner">
            <div style="flex:1">
              <div class="app-title">${app.title}</div>
              <div class="app-meta">
                <span>${Icons.briefcase} ${app.company}</span>
                <span>${Icons.mapPin} ${app.location}</span>
                <span>${Icons.calendar} Applied ${dt}</span>
              </div>
              <span class="badge ${sm.cls}">${app.status}</span>
              <div class="status-track" title="${app.status}" style="max-width:220px;margin-top:10px;">
                <div class="status-track-fill" style="width:${sm.pct}%;background:${sm.clr};"></div>
              </div>
            </div>
            <a href="job-detail.html?id=${app.id}" class="btn btn-outline btn-sm">View Details</a>
          </div>
        </div>
      </div>`;
  }).join('');

  initScrollReveal();
}

/* ============================================================
   VALIDATION HELPERS
   ============================================================ */
function validateEmail(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }
function capitalize(str)      { return str.split(' ').map(w => w ? w[0].toUpperCase() + w.slice(1) : '').join(' '); }
function showFieldError(id, msg) { const el = document.getElementById(id); if (el) { el.textContent = msg; el.classList.add('visible'); } }

document.addEventListener('input', (e) => {
  if (e.target.matches('input, textarea, select')) {
    const err = e.target.closest('.form-group')?.querySelector('.form-error');
    if (err) { err.textContent = ''; err.classList.remove('visible'); }
  }
});

/* ============================================================
   GLOBAL INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderFooter();
  renderMobileBottomNav();
  initScrollToTop();
  initScrollReveal();

  const page = document.body.dataset.page;
  const inits = {
    home:         initHomePage,
    jobs:         initJobsPage,
    'job-detail': initJobDetailPage,
    login:        initLoginPage,
    'post-job':   initPostJobPage,
    applications: initApplicationsPage
  };
  inits[page]?.();
});
