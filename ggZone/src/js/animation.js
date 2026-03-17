function addRevealAnimationStyles() {
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
}

function initScrollReveal() {
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

  document
    .querySelectorAll(".card, .card-feature, .card-interactive")
    .forEach((card) => {
      observer.observe(card);
    });
}

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

function initStatsAnimation() {
  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
          const value = entry.target.textContent.replace(/[^0-9]/g, "");

          if (value) {
            animateCounter(entry.target, parseInt(value, 10));
            entry.target.dataset.animated = "true";
          }
        }
      });
    },
    { threshold: 0.5 },
  );

  document
    .querySelectorAll(".stat-value, .stat-number, .admin-stat-value")
    .forEach((stat) => {
      statsObserver.observe(stat);
    });
}

function updateMatchTimer() {
  const timers = document.querySelectorAll(".match-time");

  timers.forEach((timer) => {
    if (timer.textContent.includes("Game")) {
      const parts = timer.textContent.split(" - ");

      if (parts.length === 2) {
        const game = parts[0];
        const time = parts[1];
        const [min, sec] = time.split(":").map(Number);

        let newMin = min;
        let newSec = sec + 1;

        if (newSec >= 60) {
          newSec = 0;
          newMin++;
        }

        timer.textContent = `${game} - ${newMin}:${newSec.toString().padStart(2, "0")}`;
      }
    }
  });
}

setInterval(updateMatchTimer, 1000);
