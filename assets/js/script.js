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

// ─── SOUND EFFECTS (WEB AUDIO API SYNTH) ────────────────────
let soundEnabled = true;

const playClickSound = () => {
  if (!soundEnabled) return;
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    
    // Tactile switch bounce (high frequency transient)
    const osc1 = audioCtx.createOscillator();
    const gain1 = audioCtx.createGain();
    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(1200, audioCtx.currentTime);
    osc1.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.015);
    
    gain1.gain.setValueAtTime(0.04, audioCtx.currentTime);
    gain1.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.015);
    
    osc1.connect(gain1);
    gain1.connect(audioCtx.destination);
    osc1.start();
    osc1.stop(audioCtx.currentTime + 0.02);
    
    // Keycap bottoming out resonance (lower frequency body)
    const osc2 = audioCtx.createOscillator();
    const gain2 = audioCtx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(150, audioCtx.currentTime);
    osc2.frequency.exponentialRampToValueAtTime(80, audioCtx.currentTime + 0.035);
    
    gain2.gain.setValueAtTime(0.06, audioCtx.currentTime);
    gain2.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.035);
    
    osc2.connect(gain2);
    gain2.connect(audioCtx.destination);
    osc2.start();
    osc2.stop(audioCtx.currentTime + 0.04);
  } catch (e) {
    // Fail silently on browsers that block audio context
  }
};

// Global click event to play sound on interactive elements
document.addEventListener('click', (e) => {
  if (e.target.closest('a, button, input, textarea, [data-nav-link], .social-link, .select-list li')) {
    playClickSound();
  }
});

// ─── CUSTOM CURSOR & MAGNET PHYSICS ─────────────────────────
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

let mouseX = 0, mouseY = 0, followX = 0, followY = 0;
let isHovered = false;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  if (cursor) {
    cursor.style.left = mouseX - 4 + 'px';
    cursor.style.top = mouseY - 4 + 'px';
  }
});

function animateCursor() {
  if (!isHovered) {
    followX += (mouseX - followX) * 0.12;
    followY += (mouseY - followY) * 0.12;
    if (cursorFollower) {
      cursorFollower.style.left = followX - 14 + 'px';
      cursorFollower.style.top = followY - 14 + 'px';
    }
  }
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Magnet snaps and expansion on interactive items
document.querySelectorAll('a, button, [data-nav-link], .social-link, .control-btn').forEach(el => {
  el.addEventListener('mousemove', (e) => {
    isHovered = true;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Magnetic pull effect on element itself
    el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    
    // Snaps the follower ring directly to the element shape
    if (cursorFollower) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      followX += (centerX - followX) * 0.25;
      followY += (centerY - followY) * 0.25;
      
      cursorFollower.style.left = followX - (rect.width + 12) / 2 + 'px';
      cursorFollower.style.top = followY - (rect.height + 12) / 2 + 'px';
      cursorFollower.style.width = rect.width + 12 + 'px';
      cursorFollower.style.height = rect.height + 12 + 'px';
      cursorFollower.style.borderRadius = 'var(--radius-md)';
      cursorFollower.style.borderColor = 'var(--accent-primary)';
      cursorFollower.style.transform = 'scale(1)';
    }
    cursor?.classList.add('expand');
  });

  el.addEventListener('mouseleave', () => {
    isHovered = false;
    el.style.transform = '';
    if (cursorFollower) {
      cursorFollower.style.width = '28px';
      cursorFollower.style.height = '28px';
      cursorFollower.style.borderRadius = '50%';
      cursorFollower.style.borderColor = 'rgba(124, 58, 237, 0.5)';
      cursorFollower.style.transform = '';
    }
    cursor?.classList.remove('expand');
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

// ─── TEXT SCRAMBLE DECRYPT EFFECT ───────────────────────────
const scrambleText = (el, originalHtml, textContent, duration = 600) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%&*$';
  const start = performance.now();
  
  const animate = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    
    let result = '';
    for (let i = 0; i < textContent.length; i++) {
      if (textContent[i] === ' ') {
        result += ' ';
        continue;
      }
      const letterProgress = i / textContent.length;
      if (progress >= letterProgress) {
        result += textContent[i];
      } else {
        result += chars[Math.floor(Math.random() * chars.length)];
      }
    }
    el.textContent = result;
    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      el.innerHTML = originalHtml;
    }
  };
  requestAnimationFrame(animate);
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

        // Trigger text scramble on heading title
        const titleEl = targetPage.querySelector('.article-title');
        if (titleEl) {
          scrambleText(titleEl, titleEl.innerHTML, titleEl.textContent.trim());
        }

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

// ─── SCROLL TO TOP & PROGRESS WIDGET ─────────────────────────
const scrollTopBtn = document.querySelector('.scroll-top');
const scrollCircle = document.querySelector('.progress-ring-circle');

if (scrollCircle) {
  const circumference = 2 * Math.PI * 20; // radius is 20
  scrollCircle.style.strokeDasharray = circumference;
  scrollCircle.style.strokeDashoffset = circumference;

  const updateProgress = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const scrollPercent = window.scrollY / totalHeight;
      const offset = circumference - (scrollPercent * circumference);
      scrollCircle.style.strokeDashoffset = Math.max(0, Math.min(circumference, offset));
    }
  };

  window.addEventListener('scroll', updateProgress);
  window.addEventListener('resize', updateProgress);
}

window.addEventListener('scroll', () => {
  if (scrollTopBtn) {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 300);
  }
});

if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => {
    // Add launching animation class
    scrollTopBtn.classList.add('launching');
    
    // Play a synthesized rocket swoosh sound!
    if (soundEnabled) {
      try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        osc.type = 'sawtooth';
        
        // Swoosh frequency sweep
        osc.frequency.setValueAtTime(80, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.6);
        
        gainNode.gain.setValueAtTime(0.01, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.06, audioCtx.currentTime + 0.2);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.6);
        
        // Bandpass filter to create wind/exhaust resonance
        const filter = audioCtx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 400;
        
        osc.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        osc.start();
        osc.stop(audioCtx.currentTime + 0.6);
      } catch (e) {}
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Remove animation class after animation completes (800ms)
    setTimeout(() => {
      scrollTopBtn.classList.remove('launching');
    }, 800);
  });
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

// ─── CONTROL SWITCHES (SOUND & TERMINAL TOGGLES) ──────────────
const soundBtn = document.querySelector('.sound-btn');
const terminalBtn = document.querySelector('.terminal-btn');
const terminalModal = document.getElementById('terminal-modal');
const terminalClose = document.querySelector('.terminal-close');
const terminalInput = document.getElementById('terminal-input');
const terminalOutput = document.getElementById('terminal-output');

if (soundBtn) {
  soundBtn.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    soundBtn.classList.toggle('active', !soundEnabled);
    if (soundEnabled) {
      soundBtn.querySelector('ion-icon').setAttribute('name', 'volume-medium-outline');
      soundBtn.setAttribute('data-tooltip', 'Mute sound');
      showToast('Sound enabled', 'success');
    } else {
      soundBtn.querySelector('ion-icon').setAttribute('name', 'volume-mute-outline');
      soundBtn.setAttribute('data-tooltip', 'Unmute sound');
      showToast('Sound muted', 'error');
    }
  });
}

const toggleTerminal = () => {
  if (terminalModal) {
    const isActive = terminalModal.classList.toggle('active');
    if (isActive && terminalInput) {
      setTimeout(() => terminalInput.focus(), 100);
    }
  }
};

if (terminalBtn) terminalBtn.addEventListener('click', toggleTerminal);
if (terminalClose) terminalClose.addEventListener('click', toggleTerminal);

// Toggle on Ctrl+K
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    toggleTerminal();
  }
  if (e.key === 'Escape' && terminalModal && terminalModal.classList.contains('active')) {
    toggleTerminal();
  }
});

// ─── TERMINAL COMMAND PARSER ───────────
if (terminalInput && terminalOutput) {
  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const fullCmd = terminalInput.value.trim();
      terminalInput.value = '';
      if (!fullCmd) return;

      // Print command to terminal
      const cmdLine = document.createElement('div');
      cmdLine.className = 'output-line cmd-msg';
      cmdLine.textContent = `krishraj@vvit-cse:~$ ${fullCmd}`;
      terminalOutput.appendChild(cmdLine);

      // Parse command
      const parts = fullCmd.toLowerCase().split(' ');
      const cmd = parts[0];
      const arg = parts[1];

      const responseLine = document.createElement('div');
      responseLine.className = 'output-line';

      switch (cmd) {
        case 'help':
          responseLine.innerHTML = `Available commands:<br>
  - <span class="highlight">about</span> : Switch to About page<br>
  - <span class="highlight">resume</span> : Switch to Resume page<br>
  - <span class="highlight">projects</span> : Switch to Projects page<br>
  - <span class="highlight">blog</span> : Switch to Blog page<br>
  - <span class="highlight">contact</span> : Switch to Contact page<br>
  - <span class="highlight">sound [on/off]</span> : Enable or disable audio clicks<br>
  - <span class="highlight">socials</span> : List social media links<br>
  - <span class="highlight">github</span> : Open GitHub profile in new tab<br>
  - <span class="highlight">leetcode</span> : Open LeetCode profile in new tab<br>
  - <span class="highlight">clear</span> : Clear screen`;
          break;

        case 'about':
        case 'resume':
        case 'projects':
        case 'blog':
        case 'contact':
          const navId = cmd === 'projects' ? 'nav-portfolio' : `nav-${cmd}`;
          const btn = document.getElementById(navId);
          if (btn) {
            btn.click();
            responseLine.textContent = `Navigated to ${cmd} page successfully.`;
          } else {
            responseLine.className = 'output-line error-msg';
            responseLine.textContent = `Error: Navigation link for '${cmd}' not found.`;
          }
          break;

        case 'sound':
          if (arg === 'on') {
            soundEnabled = true;
            if (soundBtn) {
              soundBtn.querySelector('ion-icon').setAttribute('name', 'volume-medium-outline');
              soundBtn.classList.remove('active');
            }
            responseLine.textContent = 'Audio click sounds enabled.';
          } else if (arg === 'off') {
            soundEnabled = false;
            if (soundBtn) {
              soundBtn.querySelector('ion-icon').setAttribute('name', 'volume-mute-outline');
              soundBtn.classList.add('active');
            }
            responseLine.textContent = 'Audio click sounds disabled.';
          } else {
            responseLine.className = 'output-line error-msg';
            responseLine.textContent = "Usage: sound [on|off]";
          }
          break;

        case 'socials':
          responseLine.innerHTML = `Social Profiles:<br>
  - <span class="highlight">GitHub</span>: https://github.com/KrishRaj-0821/<br>
  - <span class="highlight">LinkedIn</span>: https://www.linkedin.com/in/krish-raj-4932a6322/<br>
  - <span class="highlight">LeetCode</span>: https://leetcode.com/u/raj_kishu0821/`;
          break;

        case 'github':
          window.open('https://github.com/KrishRaj-0821/', '_blank');
          responseLine.textContent = 'Opening GitHub in a new tab...';
          break;

        case 'leetcode':
          window.open('https://leetcode.com/u/raj_kishu0821/', '_blank');
          responseLine.textContent = 'Opening LeetCode in a new tab...';
          break;

        case 'clear':
          terminalOutput.innerHTML = '';
          return;

        default:
          responseLine.className = 'output-line error-msg';
          responseLine.textContent = `Command not found: '${cmd}'. Type 'help' for support.`;
      }

      terminalOutput.appendChild(responseLine);
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }
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
