function initArcadeTabs() {
  const arcadeButtons = document.querySelectorAll(".tabs .tab-btn");
  const arcadeContents = document.querySelectorAll(".tab-content");

  arcadeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tabId = btn.getAttribute("data-tab");

      arcadeButtons.forEach((button) => {
        button.classList.remove("tab-btn-active");
      });

      arcadeContents.forEach((content) => {
        content.classList.remove("active");
      });

      btn.classList.add("tab-btn-active");

      const targetContent = document.getElementById(tabId);
      if (targetContent) {
        targetContent.classList.add("active");
      }
    });
  });
}

function initAuthTabs() {
  const authButtons = document.querySelectorAll(".auth-tabs .tab-btn");
  const authForms = document.querySelectorAll(".auth-form");

  authButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const authTab = btn.getAttribute("data-auth-tab");

      authButtons.forEach((button) => {
        button.classList.remove("tab-btn-active");
      });

      authForms.forEach((form) => {
        form.classList.remove("active");
        form.style.display = "none";
      });

      btn.classList.add("tab-btn-active");

      const targetForm = document.getElementById(authTab);
      if (targetForm) {
        targetForm.classList.add("active");
        targetForm.style.display = "block";
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initArcadeTabs();
  initAuthTabs();
});
