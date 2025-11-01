![Frontend Mentor](https://img.shields.io/badge/Frontend%20Mentor-Challenge-4BC0F0?logo=frontendmentor&logoColor=white) ![#11](https://img.shields.io/badge/%2311-red) [![Live Preview](https://img.shields.io/badge/Live-Preview-green)](https://svitlanarudova.github.io/newsletter-sign-up-form/)

# Frontend Mentor - Newsletter sign-up form with success message
![Design preview for the Meet landing page](./preview.jpg)

## Project Overview 📋 
This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv).

## 🛠️ Technologies
- HTML5 (Semantic markup)
- CSS3 (Custom Properties, Grid, Flexbox, Media Queries)
- Vanilla JavaScript (DOM manipulation, Event handling)
- Responsive Design (Mobile-first approach)

## 🎯 What I Learned
### 1. Creating and managing modal popups in JS
Learned to show and hide popups using classes and manage accessibility with `inert`:
```js
setTimeout(() => {
  popup.classList.add('show');
  popup.inert = false; // Enable popup interaction
  newsletterForm.reset();
}, 300);
```

### 2. Form validation with error display
Implemented email validation with visual feedback:
```js
function validateEmail(email) {
  if (!email) return 'Email is required';
  
  const isValidEmail = /^\S+@\S+$/g;
  if (!isValidEmail.test(email)) {
    return 'Valid email required';
  }
  
  return '';
}
```

### 3. Dynamic content injection
Learned to insert user input data into other elements:
```js
const popupEmailElement = document.querySelector('#popup-email');
popupEmailElement.textContent = email;
```
```html
A confirmation email has been sent to <strong id="popup-email"></strong>
```

### 4. Conditional CSS class application
Adding/removing classes to display errors:
```js
if (emailErrorMessage) {
  emailErrorMessageElement.innerText = emailErrorMessage;
  emailInput.classList.add('--error');
} else {
  emailInput.classList.remove('--error');
}
```
```css
.--error {
  color: var(--color-red);
  outline: 1px solid var(--color-red) !important;
  background-color: var(--color-red100);
}
```

### 5. Accessibility (a11y)
Added attributes to improve accessibility:
```html
Email address
```
### 6. Gradient hover effects on buttons
Implemented gradient effect on hover:
```css
.button::before {
  content: '';
  background-image: var(--gradient);
  opacity: 0;
  transition: opacity var(--transition);
}

.button:hover::before {
  opacity: 1;
}
```


## ✨ Features
- ✅ Email validation with regular expressions
- ✅ Dynamic display of entered email in popup
- ✅ Responsive design for mobile and desktop
- ✅ Smooth animations and transitions
- ✅ Accessibility (ARIA attributes, inert)
- ✅ Focus and interactivity management

<img src="https://hits.sh/github.com/svitlanarudova.svg?view=today-total&color=007bff&label=&style=flat-square" width="1" height="1" alt="" />
