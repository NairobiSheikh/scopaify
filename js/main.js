// Scroll-triggered animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const siblings =
          entry.target.parentElement.querySelectorAll(".animate");
        let delay = 0;
        siblings.forEach((el) => {
          if (el === entry.target)
            entry.target.style.transitionDelay = delay * 10 + "ms";
          delay++;
        });
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);
document.querySelectorAll(".animate").forEach((el) => observer.observe(el));

// Nav scroll tint
window.addEventListener("scroll", () => {
  document.getElementById("nav").style.background =
    window.scrollY > 40 ? "rgba(7,6,15,0.95)" : "rgba(7,6,15,0.72)";
});

// Mobile menu
function toggleMenu() {
  const links = document.querySelector(".nav-links");
  links.style.cssText =
    links.style.display === "flex"
      ? ""
      : "display:flex;flex-direction:column;position:fixed;top:68px;left:0;right:0;background:rgba(7,6,15,0.97);backdrop-filter:blur(20px);padding:24px 28px 32px;gap:20px;border-bottom:1px solid rgba(255,255,255,0.08);z-index:998";
}

// ── LEAD-GEN: Sticky CTA bar — shows after scrolling past hero ──
let stickyDismissed = false;
function dismissSticky() {
  stickyDismissed = true;
  document.getElementById("stickyCta").classList.remove("visible");
}
window.addEventListener("scroll", () => {
  const stickyCta = document.getElementById("stickyCta");
  const heroHeight = document.querySelector(".hero").offsetHeight;
  if (!stickyDismissed && window.scrollY > heroHeight * 0.6) {
    stickyCta.classList.add("visible");
  } else if (window.scrollY <= heroHeight * 0.4) {
    stickyCta.classList.remove("visible");
  }
});

// ── LEAD-GEN: Floating popup — shows after 18s on page ──
let popupShown = false;
setTimeout(() => {
  if (!popupShown) {
    popupShown = true;
    document.getElementById("leadPopup").classList.add("visible");
    // auto-hide after 12s
    setTimeout(() => {
      document.getElementById("leadPopup").style.transform =
        "translateX(360px)";
    }, 12000);
  }
}, 18000);

// ── GOOGLE FORM SUBMISSION — submits to Google via hidden iframe, page stays put ──
function handleFormSubmit(e) {
  const form = document.getElementById("scopaify-form");
  const btn = document.getElementById("form-submit-btn");
  const fields = form.querySelectorAll("input[required], textarea[required]");
  let valid = true;
  fields.forEach((el) => {
    if (!el.value.trim()) {
      el.style.borderColor = "rgba(239,68,68,.55)";
      el.style.boxShadow = "0 0 0 3px rgba(239,68,68,.12)";
      valid = false;
    } else {
      el.style.borderColor = "";
      el.style.boxShadow = "";
    }
  });
  if (!valid) {
    e.preventDefault();
    return;
  }
  // Form submits to Google via target="hidden-gform" — page never navigates
  btn.innerHTML = "✓ Sent! We'll be in touch within 24 hrs";
  btn.style.background = "linear-gradient(135deg,#16a34a,#15803d)";
  btn.style.boxShadow = "0 0 24px rgba(22,163,74,.35)";
  btn.disabled = true;
  // Clear fields after short delay
  setTimeout(() => {
    form.querySelectorAll("input, textarea").forEach((el) => (el.value = ""));
  }, 1000);
}
