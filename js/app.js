document.addEventListener("DOMContentLoaded", () => {
  const newsletterForm = document.querySelector("#newsletter-form");
  const emailInput = document.querySelector("#email");
  const emailErrorMessageElement = document.querySelector("#email-error");
  const popup = document.querySelector("#success-popup");
  const closeBtn = document.querySelector(".popup__close");
  popup.inert = true;
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
    } else {
      emailErrorMessageElement.innerText = "";
      emailInput.classList.remove("--error");
      const popupEmailElement = document.querySelector("#popup-email");
      popupEmailElement.textContent = email;
      setTimeout(() => {
        popup.classList.add("show");
        popup.inert = false;
        newsletterForm.reset();
      }, 300);
    }
  }
  closeBtn.addEventListener("click", () => {
    popup.classList.remove("show");
    popup.inert = true;
  });
  newsletterForm.addEventListener("submit", handleSubmit);
});
