import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const FEEDBACK_FORM_STATE = 'feedback-form-state'

const save = throttle(() => {
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(state));
}, 1000);


form.addEventListener('input', save);


const saveEl = localStorage.getItem(FEEDBACK_FORM_STATE);
if (saveEl) {
  const state = JSON.parse(saveEl);
  emailInput.value = state.email;
  messageInput.value = state.message;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!emailInput.value || !messageInput.value) {
    alert('Please fill in all fields!');
    return;
  }
  localStorage.removeItem(FEEDBACK_FORM_STATE);  
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
    console.log(state); 
    form.reset();
    
});















// ========================================\\


// const form = document.querySelector('.feedback-form');
// const email = document.querySelector('input[name="email"]');
// const message = document.querySelector('textarea[name="message"]');
// const localKey = 'feedback-form-state';

// form.addEventListener('input', throttle(evt => {
//     const storedValue = { email: email.value, message: message.value };
//     localStorage.setItem(localKey, JSON.stringify(storedValue));
//   }, 500)
// );

// form.addEventListener('submit', evt => {
//   evt.preventDefault();
//   console.log({ email: email.value, message: message.value });
//   form.reset();
//   localStorage.removeItem(localKey);
// });

// function fn(storedValue) {
//   try {
//     if (storedValue !== null) {
//       const parseValue = JSON.parse(storedValue);
//       email.value = parseValue.email;
//       message.value = parseValue.message;
//     }
//   } catch (err) {
//     console.error('Get state error: ', err.message);
//   }
// };

// fn(localStorage.getItem(localKey));