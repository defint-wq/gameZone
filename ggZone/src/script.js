function navigateTo(pageId) {
  // Hide all pages
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active");
  });

  // Show selected page
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add("active");
  }

  // Update navigation items
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.remove("nav-item-active");
    item.classList.add("nav-item-inactive");
  });

  const activeNavItem = document.querySelector(`[data-page="${pageId}"]`);
  if (activeNavItem) {
    activeNavItem.classList.remove("nav-item-inactive");
    activeNavItem.classList.add("nav-item-active");
  }

  // Close mobile menu if open
  closeMobileMenu();

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Navigation click handlers
document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const pageId = item.getAttribute("data-page");
    navigateTo(pageId);
  });
});

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const sidebar = document.querySelector(".sidebar");

mobileMenuBtn?.addEventListener("click", () => {
  sidebar.classList.toggle("mobile-open");
});

function closeMobileMenu() {
  sidebar?.classList.remove("mobile-open");
}

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (
    sidebar?.classList.contains("mobile-open") &&
    !sidebar.contains(e.target) &&
    !mobileMenuBtn?.contains(e.target)
  ) {
    closeMobileMenu();
  }
});

// Arcade tabs
document.querySelectorAll(".tabs .tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const tabId = btn.getAttribute("data-tab");

    // Update active tab button
    document.querySelectorAll(".tabs .tab-btn").forEach((b) => {
      b.classList.remove("tab-btn-active");
      b.classList.add("tab-btn");
    });
    btn.classList.add("tab-btn-active");

    // Show corresponding tab content
    document.querySelectorAll(".tab-content").forEach((content) => {
      content.classList.remove("active");
    });

    const targetContent = document.getElementById(tabId);
    if (targetContent) {
      targetContent.classList.add("active");
    }
  });
});

// Auth modal tabs
document.querySelectorAll(".auth-tabs .tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const authTab = btn.getAttribute("data-auth-tab");

    // Update active tab button
    document.querySelectorAll(".auth-tabs .tab-btn").forEach((b) => {
      b.classList.remove("tab-btn-active");
    });
    btn.classList.add("tab-btn-active");

    // Show corresponding auth form
    document.querySelectorAll(".auth-form").forEach((form) => {
      form.classList.remove("active");
      form.style.display = "none";
    });

    const targetForm = document.getElementById(authTab);
    if (targetForm) {
      targetForm.classList.add("active");
      targetForm.style.display = "block";
    }
  });
});

function showAuthModal() {
  const modal = document.getElementById("authModal");
  if (modal) {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}

function closeAuthModal() {
  const modal = document.getElementById("authModal");
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "";
  }
}

// Close modal when clicking backdrop
document.getElementById("authModal")?.addEventListener("click", (e) => {
  if (e.target.id === "authModal") {
    closeAuthModal();
  }
});

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeAuthModal();
  }
});

// Sign In Form
document.querySelector("#signin")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Sign in functionality would be connected to backend!");
  closeAuthModal();
});

// Sign Up Form
document.querySelector("#signup")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Sign up functionality would be connected to backend!");
  closeAuthModal();
});

// Add scroll reveal effect
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("revealed");
    }
  });
}, observerOptions);

// Observe cards for scroll animations
document
  .querySelectorAll(".card, .card-feature, .card-interactive")
  .forEach((card) => {
    observer.observe(card);
  });

function animateCounter(element, target, duration = 2000) {
  let current = 0;
  const increment = target / (duration / 16);

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target.toLocaleString();
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current).toLocaleString();
    }
  }, 16);
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        const value = entry.target.textContent.replace(/[^0-9]/g, "");
        if (value) {
          animateCounter(entry.target, parseInt(value));
          entry.target.dataset.animated = "true";
        }
      }
    });
  },
  { threshold: 0.5 },
);

function updateMatchTimer() {
  const timers = document.querySelectorAll(".match-time");
  timers.forEach((timer) => {
    if (timer.textContent.includes("Game")) {
      // Simulate live timer
      const parts = timer.textContent.split(" - ");
      if (parts.length === 2) {
        const [game, time] = parts;
        const [min, sec] = time.split(":").map(Number);

        let newSec = sec + 1;
        let newMin = min;

        if (newSec >= 60) {
          newSec = 0;
          newMin++;
        }

        timer.textContent = `${game} - ${newMin}:${newSec.toString().padStart(2, "0")}`;
      }
    }
  });
}

// Update match timers every second
setInterval(updateMatchTimer, 1000);

const searchInput = document.querySelector(".input-search");
searchInput?.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  // Add search filtering logic here
  console.log("Searching for:", query);
});

function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--color-card);
    border: 1px solid var(--color-border);
    border-radius: 12px;
    padding: 16px 24px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    z-index: 1000;
    animation: slideIn 0.3s ease;
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease";
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("🎮 MLBB GameZone Initialized!");

  // Show home page by default
  navigateTo("home");

  // Add reveal animation CSS
  const style = document.createElement("style");
  style.textContent = `
    .card, .card-feature, .card-interactive {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .card.revealed, .card-feature.revealed, .card-interactive.revealed {
      opacity: 1;
      transform: translateY(0);
    }
    
    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @keyframes slideOut {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(100%);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
});

// Format currency
function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

// Format date
function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

// Debounce function for search
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Copy to clipboard
function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      showNotification("Copied to clipboard!", "success");
    })
    .catch(() => {
      showNotification("Failed to copy", "error");
    });
}

console.log("All systems ready!");

function openModal() {
  document.getElementById("editProfileModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("editProfileModal").style.display = "none";
}

function openDetails() {
  document.getElementById("accountModal").style.display = "flex";
}

function closeDetails() {
  document.getElementById("accountModal").style.display = "none";
}

function openTeam() {
  document.getElementById("teamModal").style.display = "flex";
}

function closeTeam() {
  document.getElementById("teamModal").style.display = "none";
}

function openNews() {
  document.getElementById("newsModal").style.display = "flex";
}

function closeNews() {
  document.getElementById("newsModal").style.display = "none";
}
