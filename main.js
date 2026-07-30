// ── THEME TOGGLE ──
const html = document.documentElement;
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = themeBtn ? themeBtn.querySelector('.theme-icon') : null;
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
if (themeIcon) themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
themeBtn && themeBtn.addEventListener('click', () => {
  const isDark = html.getAttribute('data-theme') === 'dark';
  const next = isDark ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  if (themeIcon) themeIcon.textContent = next === 'dark' ? '☀️' : '🌙';
});

// ── NAV SCROLL ──
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ── HAMBURGER ──
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
document.addEventListener('click', e => {
  if (!hamburger.contains(e.target) && !navLinks.contains(e.target))
    navLinks.classList.remove('open');
});

// ── SCROLL REVEAL ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.style.opacity = '1';
      el.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.service-card,.treatment-item,.testi-card,.about-grid,.pillar'
).forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ── BOOKING FORM ──
function handleBook(e) {
  e.preventDefault();
  const btn = document.getElementById('submit-booking-btn');
  btn.textContent = 'Sending…';
  btn.disabled = true;
  setTimeout(() => {
    e.target.reset();
    btn.textContent = 'Request Appointment';
    btn.disabled = false;
    showToast();
  }, 1200);
}

function showToast() {
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}
