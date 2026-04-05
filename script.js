// script.js
// ==================== INIT ====================
AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 60 });

// ==================== DATA ====================
const skills = [
  { name:'HTML5',    icon:'🌐', pct:92, color:'#e34f26' },
  { name:'CSS3',     icon:'🎨', pct:88, color:'#264de4' },
  { name:'JavaScript',icon:'⚡', pct:85, color:'#f7df1e' },
  { name:'PHP',      icon:'🐘', pct:80, color:'#8b5cf6' },
  { name:'Python',   icon:'🐍', pct:82, color:'#3ecf8e' },
  { name:'MySQL',    icon:'🗄️', pct:78, color:'#00b4d8' },
  { name:'IoT',      icon:'📡', pct:75, color:'#00e5ff' },
  { name:'AI / ML',  icon:'🧠', pct:70, color:'#f59e0b' },
  { name:'React',    icon:'⚛️', pct:65, color:'#61dafb' },
  { name:'Arduino',  icon:'🔌', pct:72, color:'#009688' },
  { name:'Git',      icon:'🔀', pct:80, color:'#f05032' },
  { name:'Java',    icon:'⚡', pct:70, color:'#fcc624' },
  { name:'Linux',    icon:'🐧', pct:60, color:'#2490fc' },
  { name:'Typescript',    icon:'🌐', pct:50, color:'#6a571d' }
];

const projects = [
  {
    title: 'Smart Lighting System',
    image: 'images/smart lighting.jpg',
    emoji: '💡',
    bg: 'pv-1',
    desc: 'An IoT-based automated lighting control system with a real-time web dashboard. Monitors energy consumption, controls brightness remotely, and triggers lights via motion sensors.',
    tags: ['IoT','Arduino','Python','MQTT','HTML/CSS'],
    demo: '#', 
    github: 'https://github.com/Astonbn/Smart-lighting-System-Dashboard'
  },
  {
    title: 'Smart Housing Price Predictor',
    image: 'images/house princing.jpg',
    emoji: '🏠',
    bg: 'pv-2',
    desc: 'A machine learning-powered web application that predicts house prices based on location, size, and amenities. Built with scikit-learn regression models and a clean Flask API.',
    tags: ['Python','ML','scikit-learn','Flask','Pandas'],
    demo: '#', 
    github: 'https://github.com/Astonbn/House_Predictor_Model'
  },
  {
    title: 'Smart CV Screening',
    image: 'images/Resume.jpg',
    emoji: '🤖',
    bg: 'pv-3',
    desc: 'An NLP-based AI tool that automatically screens and ranks resumes against job descriptions. Achieved 87% accuracy using TF-IDF vectorization and classification algorithms.',
    tags: ['Python','NLP','spaCy','scikit-learn','Streamlit'],
    demo: '#', 
    github: 'https://github.com/Astonbn/Resume_Scanner'
  },
  {
    title: 'School Management System',
    image: 'images/School.png',
    emoji: '🏫',
    bg: 'pv-4',
    desc: 'A full-stack school management platform with modules for student enrollment, grade management, attendance tracking, fee management, and staff administration.',
    tags: ['PHP','MySQL','JavaScript','HTML/CSS','Bootstrap'],
    demo: '#', 
    github:'https://github.com/Astonbn/School_Management_System'
  },
  {
    title: 'Lodging Website System',
    image: 'images/lodge.jpg',
    emoji: '🏨',
    bg: 'pv-5',
    desc: 'A property management and booking platform for lodges and guesthouses. Features room listings, online reservations, availability calendar, and admin dashboard.',
    tags: ['PHP','MySQL','JavaScript','CSS3','AJAX'],
    demo: '#', 
    github: 'https://github.com/Astonbn/Hotel_Management'
  },
   {
    title: 'Boarding House managment System',
    image: 'images/boarding.jpg',
    emoji: '🏨',
    bg: 'pv-6',
    desc: 'A boarding house system that lets landlord manage their property efficiently online. Tenants pay there rentals online and the can also lodge complaints',
    tags: ['Javascript','MySQL','Python','CSS3','flask'],
    demo: '#', 
    github: 'https://github.com/Astonbn/Boarding-House-Management'
  }
];

// ==================== RENDER SKILLS ====================
const sg = document.getElementById('skills-grid');
skills.forEach((s, i) => {
  sg.innerHTML += `
    <div class="skill-card" data-aos="fade-up" data-aos-delay="${(i % 4) * 80}">
      <span class="skill-icon">${s.icon}</span>
      <div class="skill-name">${s.name}</div>
      <div class="skill-bar-wrap"><div class="skill-bar" data-pct="${s.pct}"></div></div>
      <div class="skill-pct">${s.pct}%</div>
    </div>`;
});

// Animate skill bars when in view
const skillBars = document.querySelectorAll('.skill-bar');
const barObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.width = e.target.dataset.pct + '%';
      barObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
skillBars.forEach(b => barObserver.observe(b));

// ==================== RENDER PROJECTS ====================
const pg = document.getElementById('projects-grid');
projects.forEach((p, i) => {
  pg.innerHTML += `
    <div class="project-card" data-aos="fade-up" data-aos-delay="${i * 80}">
      <div class="project-visual ${p.bg}">
        <div class="project-visual-inner">
          ${p.image ? `<img src="${p.image}" alt="${p.title}" style="width:100%; height:100%; object-fit:cover;">` : p.emoji}
        </div>
        <div class="project-overlay">
          ${p.demo && p.demo !== '#' ? `<a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="project-link" title="Live Demo"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : ''}
          <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="project-link gh" title="GitHub"><i class="fa-brands fa-github"></i></a>
        </div>
      </div>
      <div class="project-content">
        <div class="project-tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="project-footer">
          ${p.demo && p.demo !== '#' ? `<a href="${p.demo}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-globe"></i> Live Demo</a>` : ''}
          <a href="${p.github}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i> Source Code</a>
        </div>
      </div>
    </div>`;
});
// ==================== CUSTOM CURSOR ====================
const cur = document.getElementById('cursor');
const curF = document.getElementById('cursor-follower');
let mx = 0, my = 0, fx = 0, fy = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
function animateCursor() {
  cur.style.left = mx + 'px'; cur.style.top = my + 'px';
  fx += (mx - fx) * 0.12; fy += (my - fy) * 0.12;
  curF.style.left = fx + 'px'; curF.style.top = fy + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

// ==================== SCROLL PROGRESS ====================
const prog = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
  const s = document.documentElement.scrollTop;
  const h = document.documentElement.scrollHeight - window.innerHeight;
  prog.style.width = (s / h * 100) + '%';
});

// ==================== NAVBAR ====================
const navbar = document.getElementById('navbar');
const backTop = document.getElementById('back-top');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  backTop.classList.toggle('show', window.scrollY > 300);
});

// ==================== HAMBURGER ====================
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('open');
});

// ==================== THEME TOGGLE ====================
const themeIcon = document.getElementById('theme-icon');
document.getElementById('theme-toggle').addEventListener('click', () => {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  document.documentElement.setAttribute('data-theme', isLight ? 'dark' : 'light');
  themeIcon.className = isLight ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
});

// ==================== TYPING ANIMATION ====================
const phrases = ['Software Developer', 'IoT Engineer', 'AI Enthusiast', 'Full-Stack Builder', 'Problem Solver'];
let pi = 0, ci = 0, del = false;
const tyEl = document.getElementById('typing-text');
function typeLoop() {
  const phrase = phrases[pi];
  if (!del) {
    tyEl.textContent = phrase.substring(0, ci + 1);
    ci++;
    if (ci === phrase.length) { del = true; setTimeout(typeLoop, 1600); return; }
  } else {
    tyEl.textContent = phrase.substring(0, ci - 1);
    ci--;
    if (ci === 0) { del = false; pi = (pi + 1) % phrases.length; }
  }
  setTimeout(typeLoop, del ? 55 : 90);
}
typeLoop();

// ==================== COUNTER ANIMATION ====================
const counters = document.querySelectorAll('.counter');
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const target = +e.target.dataset.target;
    let current = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { e.target.textContent = target; clearInterval(timer); }
      else e.target.textContent = current;
    }, 40);
    counterObserver.unobserve(e.target);
  });
}, { threshold: 0.5 });
counters.forEach(c => counterObserver.observe(c));

// ==================== PARTICLES BACKGROUND ====================
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let W, H, particles = [];
function resizeCanvas() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
resizeCanvas();
window.addEventListener('resize', resizeCanvas);
for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    r: Math.random() * 1.5 + 0.5,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    a: Math.random() * 0.4 + 0.1
  });
}
function drawParticles() {
  ctx.clearRect(0, 0, W, H);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0,229,255,${p.a})`;
    ctx.fill();
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0 || p.x > W) p.vx *= -1;
    if (p.y < 0 || p.y > H) p.vy *= -1;
  });
  // Draw connecting lines
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < 120) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(0,229,255,${0.08 * (1 - dist/120)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(drawParticles);
}
drawParticles();

// ==================== CONTACT FORM ====================
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  showToast('Message sent! I\'ll get back to you soon.');
  e.target.reset();
});

// ==================== CV DOWNLOAD ====================
document.getElementById('cv-btn').addEventListener('click', e => {
  // e.preventDefault(); // Remove this line if you want the default link behavior
  // If using <a> with href, you can keep preventDefault only if you handle download manually:
  // Option: manually trigger download
  const link = document.createElement('a');
  link.href = 'Aston_Banda_CV.pdf'; // path to your file
  link.download = 'Aston_Banda_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast('Download started!');
});

// ==================== TOAST ====================
function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// ==================== SMOOTH CLOSE NAV ON CLICK ====================
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => document.getElementById('nav-links').classList.remove('open'));
});