'use strict';

/* ============================================================
   MODERN PORTFOLIO DYNAMICS - Krish Raj
   Features: Particles, Typing, Scroll Reveal, Smooth Nav,
             Custom Cursor, Skill Animations, Loader
============================================================ */

// ─── LOADER ─────────────────────────────────────────────────
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('hidden');
    // Trigger initial reveal animations
    revealOnScroll();
    animateSkillBars();
  }, 1800);
});

// ─── CUSTOM CURSOR ──────────────────────────────────────────
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

let mouseX = 0, mouseY = 0, followX = 0, followY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  if (cursor) {
    cursor.style.left = mouseX - 4 + 'px';
    cursor.style.top = mouseY - 4 + 'px';
  }
});

function animateCursor() {
  followX += (mouseX - followX) * 0.12;
  followY += (mouseY - followY) * 0.12;
  if (cursorFollower) {
    cursorFollower.style.left = followX - 14 + 'px';
    cursorFollower.style.top = followY - 14 + 'px';
  }
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Cursor expand on interactive elements
document.querySelectorAll('a, button, [data-nav-link], .project-item, .service-item, .social-link').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor?.classList.add('expand');
    cursorFollower?.classList.add('expand');
  });
  el.addEventListener('mouseleave', () => {
    cursor?.classList.remove('expand');
    cursorFollower?.classList.remove('expand');
  });
});

// ─── PARTICLE CANVAS ────────────────────────────────────────
const canvas = document.getElementById('particle-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let particles = [];
  let animFrameId;

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.radius = Math.random() * 1.5 + 0.3;
      this.opacity = Math.random() * 0.4 + 0.1;
      const colors = ['124, 58, 237', '6, 182, 212', '236, 72, 153', '167, 139, 250'];
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = `rgba(${this.color}, 1)`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }
  }

  // Draw connecting lines
  const drawLines = () => {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.save();
          ctx.globalAlpha = (1 - dist / 120) * 0.12;
          ctx.strokeStyle = `rgba(124, 58, 237, 1)`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }
  };

  // Initialize particles
  const initParticles = () => {
    const count = Math.min(Math.floor(window.innerWidth * window.innerHeight / 14000), 80);
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  };

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    drawLines();
    animFrameId = requestAnimationFrame(animate);
  };

  initParticles();
  animate();
  window.addEventListener('resize', () => { resize(); initParticles(); });
}

// ─── SIDEBAR TOGGLE ─────────────────────────────────────────
const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');

if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener('click', () => sidebar.classList.toggle('active'));
}

// ─── TYPING EFFECT ──────────────────────────────────────────
const typingEl = document.querySelector('.typed-text');
if (typingEl) {
  const words = ['Full Stack Developer', 'AI/ML Enthusiast', 'Web Designer', 'Problem Solver', 'CS Student'];
  let wordIdx = 0, charIdx = 0, isDeleting = false;

  const type = () => {
    const currentWord = words[wordIdx];
    if (isDeleting) {
      typingEl.textContent = currentWord.slice(0, charIdx - 1);
      charIdx--;
    } else {
      typingEl.textContent = currentWord.slice(0, charIdx + 1);
      charIdx++;
    }

    let speed = isDeleting ? 60 : 100;
    if (!isDeleting && charIdx === currentWord.length) {
      speed = 1800;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      wordIdx = (wordIdx + 1) % words.length;
      speed = 400;
    }
    setTimeout(type, speed);
  };
  type();
}

// ─── ANIMATED COUNTER ───────────────────────────────────────
const animateCounter = (el, target) => {
  const duration = 2000;
  const start = performance.now();
  const startVal = 0;

  const tick = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(startVal + (target - startVal) * eased) + (el.dataset.suffix || '+');
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};

const counters = document.querySelectorAll('[data-count]');
let countersStarted = false;
const startCounters = () => {
  if (countersStarted) return;
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.count);
    animateCounter(counter, target);
  });
  countersStarted = true;
};

// ─── SKILL BARS ANIMATION ───────────────────────────────────
const animateSkillBars = () => {
  document.querySelectorAll('.skill-progress-fill').forEach(bar => {
    const targetWidth = bar.getAttribute('data-width');
    if (targetWidth) {
      setTimeout(() => {
        bar.style.width = targetWidth;
      }, 300);
    }
  });
};

// ─── SCROLL REVEAL ──────────────────────────────────────────
const revealOnScroll = () => {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Start counters when stats are visible
        if (entry.target.closest('.stats-row')) startCounters();
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  reveals.forEach(el => observer.observe(el));
};

// ─── NAVIGATION ─────────────────────────────────────────────
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

if (navigationLinks.length && pages.length) {
  navigationLinks.forEach(link => {
    link.addEventListener('click', function () {
      navigationLinks.forEach(l => l.classList.remove('active'));
      pages.forEach(p => p.classList.remove('active'));

      this.classList.add('active');
      // Normalize: "Projects" nav link maps to data-page="projects"
      const target = this.textContent.toLowerCase().trim();
      const targetPage = document.querySelector(`[data-page="${target}"]`);

      if (targetPage) {
        targetPage.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Re-trigger animations when switching tabs
        setTimeout(() => {
          revealOnScroll();
          if (target === 'resume') {
            setTimeout(animateSkillBars, 300);
          }
        }, 100);
      }
    });
  });
}

// ─── PORTFOLIO FILTER ───────────────────────────────────────
const filterBtns = document.querySelectorAll('[data-filter-btn]');
const selectEl = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-selecct-value]');
const filterItems = document.querySelectorAll('[data-filter-item]');

const filterProjects = (selected) => {
  filterItems.forEach((item, idx) => {
    const cat = item.dataset.category;
    const show = selected === 'all' || cat === selected;
    if (show) {
      item.classList.add('active');
      item.style.animationDelay = `${(idx % 6) * 0.05}s`;
    } else {
      item.classList.remove('active');
    }
  });
};

if (selectEl) {
  selectEl.addEventListener('click', () => selectEl.classList.toggle('active'));
}

selectItems.forEach(item => {
  item.addEventListener('click', function () {
    const val = this.textContent.toLowerCase();
    if (selectValue) selectValue.textContent = this.textContent;
    selectEl?.classList.remove('active');
    filterProjects(val);
    filterBtns.forEach(b => b.classList.remove('active'));
  });
});

let lastActiveBtn = filterBtns[0] || null;
filterBtns.forEach(btn => {
  btn.addEventListener('click', function () {
    const val = this.textContent.toLowerCase();
    if (selectValue) selectValue.textContent = this.textContent;
    filterProjects(val);
    filterBtns.forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    lastActiveBtn = this;
  });
});

// ─── CONTACT FORM ────────────────────────────────────────────
const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

if (form && formBtn) {
  formInputs.forEach(input => {
    input.addEventListener('input', () => {
      formBtn.disabled = !form.checkValidity();
    });
  });

  form.addEventListener('submit', async (e) => {
    // Let Formspree handle it, but show toast on success
    setTimeout(() => showToast('Message sent! I\'ll get back to you soon.', 'success'), 1500);
  });
}

// ─── TOAST NOTIFICATIONS ─────────────────────────────────────
const showToast = (message, type = 'success') => {
  const container = document.querySelector('.toast-container') || createToastContainer();
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <ion-icon name="${type === 'success' ? 'checkmark-circle' : 'alert-circle'}"></ion-icon>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'toastOut 0.3s ease forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
};

const createToastContainer = () => {
  const el = document.createElement('div');
  el.className = 'toast-container';
  document.body.appendChild(el);
  return el;
};

// ─── SCROLL TO TOP ───────────────────────────────────────────
const scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
  if (scrollTopBtn) {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 300);
  }
});

if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ─── MODAL ───────────────────────────────────────────────────
const testimonialsItems = document.querySelectorAll('[data-testimonials-item]');
const modalContainer = document.querySelector('[data-modal-container]');
const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
const overlay = document.querySelector('[data-overlay]');
const modalImg = document.querySelector('[data-modal-img]');
const modalTitle = document.querySelector('[data-modal-title]');
const modalText = document.querySelector('[data-modal-text]');

const toggleModal = () => {
  modalContainer?.classList.toggle('active');
  overlay?.classList.toggle('active');
  document.body.style.overflow = modalContainer?.classList.contains('active') ? 'hidden' : '';
};

testimonialsItems.forEach(item => {
  item.addEventListener('click', function () {
    const avatar = this.querySelector('[data-testimonials-avatar]');
    const title = this.querySelector('[data-testimonials-title]');
    const text = this.querySelector('[data-testimonials-text]');
    if (modalImg && avatar) { modalImg.src = avatar.src; modalImg.alt = avatar.alt; }
    if (modalTitle && title) modalTitle.innerHTML = title.innerHTML;
    if (modalText && text) modalText.innerHTML = text.innerHTML;
    toggleModal();
  });
});

modalCloseBtn?.addEventListener('click', toggleModal);
overlay?.addEventListener('click', toggleModal);

// ─── KEYBOARD ACCESSIBILITY ──────────────────────────────────
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (modalContainer?.classList.contains('active')) toggleModal();
    if (selectEl?.classList.contains('active')) selectEl.classList.remove('active');
  }
});

// ─── PARALLAX EFFECT ON MOUSE MOVE ───────────────────────────
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;

  const avatar = document.querySelector('.avatar-box');
  if (avatar) {
    avatar.style.transform = `rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
  }
});

// ─── SMOOTH HOVER TILT CARDS ─────────────────────────────────
document.querySelectorAll('.service-item, .stat-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(400px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-2px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ─── COPY EMAIL ON CLICK ─────────────────────────────────────
const emailLink = document.querySelector('.contact-link[href^="mailto:"]');
if (emailLink) {
  emailLink.addEventListener('click', (e) => {
    navigator.clipboard?.writeText(emailLink.href.replace('mailto:', ''))
      .then(() => showToast('Email copied to clipboard!', 'success'))
      .catch(() => {});
  });
}

// ─── ACTIVE PAGE INITIALIZATION ──────────────────────────────
// Ensure about page is active on load
const aboutPage = document.querySelector('[data-page="about"]');
const aboutLink = document.querySelector('[data-nav-link]');
if (aboutPage && !document.querySelector('[data-page].active')) {
  aboutPage.classList.add('active');
}
if (aboutLink && !document.querySelector('[data-nav-link].active')) {
  aboutLink.classList.add('active');
}

// Initialize reveals on page load for visible elements
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(revealOnScroll, 200);
});
