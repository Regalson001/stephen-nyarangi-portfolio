
/* =========================================================
   STEPHEN OYUGI — PORTFOLIO INTERACTIONS
   Project filtering is intentionally handled by CSS.
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const primaryNav = document.getElementById("primaryNav");
  const contactDialog = document.getElementById("contactDialog");
  const contactForm = document.getElementById("contactForm");
  const formNote = document.getElementById("formNote");

  // Mobile navigation
  if (menuToggle && primaryNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = primaryNav.classList.toggle("is-open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
      );
    });

    primaryNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        primaryNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
      });
    });
  }

  // Contact dialog open buttons
  const openButtons = [
    "openContact",
    "openContactHero",
    "openContactFooter"
  ];

  openButtons.forEach((id) => {
    const button = document.getElementById(id);

    if (button && contactDialog) {
      button.addEventListener("click", () => {
        if (typeof contactDialog.showModal === "function") {
          contactDialog.showModal();
          document.getElementById("contactName")?.focus();
        } else {
          window.location.href = "mailto:stephennyarangi03@gmail.com";
        }
      });
    }
  });

  // Close dialog
  const closeButton = document.getElementById("closeContact");

  if (closeButton && contactDialog) {
    closeButton.addEventListener("click", () => {
      contactDialog.close();
    });
  }

  // Close when clicking the backdrop
  if (contactDialog) {
    contactDialog.addEventListener("click", (event) => {
      if (event.target === contactDialog) {
        contactDialog.close();
      }
    });
  }

  // Prepare a message in the visitor's email application.
  // This does not send email automatically.
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!contactForm.reportValidity()) return;

      const formData = new FormData(contactForm);
      const name = String(formData.get("name") || "").trim();
      const email = String(formData.get("email") || "").trim();
      const message = String(formData.get("message") || "").trim();

      const subject = encodeURIComponent(
        `Portfolio enquiry from ${name}`
      );

      const body = encodeURIComponent(
        `Hello Stephen,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`
      );

      const mailtoLink =
        `mailto:stephennyarangi03@gmail.com?subject=${subject}&body=${body}`;

      if (formNote) {
        formNote.textContent =
          "Your email application should open with the message prepared. Please review and send it there.";
      }

      window.location.href = mailtoLink;
    });
  }

  // Automatically update the footer year.
  const yearElement = document.getElementById("currentYear");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
