document.addEventListener("DOMContentLoaded", () => {
  const newsletterForm = document.querySelector("#newsletter-form");
  const emailInput = document.querySelector("#email");
  const emailErrorMessageElement = document.querySelector("#email-error");
  const popup = document.querySelector("#success-popup");
  const closeBtn = document.querySelector(".popup__close");

  popup.inert = true;
  let lastFocusedElement = null;

  function validateEmail(email) {
    if (!email) return "Email is required";
    const isValidEmail = /^\S+@\S+$/g;
    if (!isValidEmail.test(email)) {
      return "Valid email required";
    }
    return "";
  }

  function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.querySelector("#email").value;
    const emailErrorMessage = validateEmail(email);

    if (emailErrorMessage) {
      emailErrorMessageElement.innerText = emailErrorMessage;
      emailInput.classList.add("--error");
      emailInput.focus();

    } else {
      emailErrorMessageElement.textContent = '\u00A0';
      emailInput.classList.remove("--error");

      lastFocusedElement = document.activeElement;

      const popupEmailElement = document.querySelector("#popup-email");
      popupEmailElement.textContent = email;
      setTimeout(() => {
        popup.classList.add("show");
        popup.inert = false;
        closeBtn.focus();
        newsletterForm.reset();
      }, 300);
    }
  }

  // closeBtn.addEventListener("click", () => {
  //   popup.classList.remove("show");
  //   popup.inert = true;
  // });

  function closePopup() {
    popup.classList.remove('show');
    popup.inert = true;

    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }

    setTimeout(() => {
      popup.classList.add('hidden');
    }, 200);
  }

  // close with btn
  closeBtn.addEventListener('click', closePopup);

  // close with escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popup.classList.contains('show')) {
      closePopup();
    }
  });

  newsletterForm.addEventListener("submit", handleSubmit);
});
