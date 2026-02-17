// !-----------------------------------------------------------
// * Додавання стилів та розмітки для галереї
import '../css/styles.css';
import '../css/2-form.css';

// !----------------------------------------------------------- 
// * Ключ для localStorage
const localStorageKey = 'feedback-form-state';

// * Об'єкт поза функціями
let formData = {
  email: '',
  message: '',
};

// * Отримуємо форму
const form = document.querySelector('.feedback-form');

// * Перевірка localStorage при завантаженні

const savedData = localStorage.getItem(localStorageKey);

if (savedData) {
  formData = JSON.parse(savedData);

  form.elements.email.value = formData.email || '';
  form.elements.message.value = formData.message || '';
}

// ---------------------------------------------------
// * Делегування події input

form.addEventListener('input', event => {
  const { name, value } = event.target;

  if (name === 'email' || name === 'message') {
    formData[name] = value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
  }
});


// ---------------------------------------------------
// * Submit

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  // * очищення
  localStorage.removeItem(localStorageKey);
  formData = { email: '', message: '' };
  form.reset();
});