const form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

// Başlangıç verisi
let formData = {
  email: '',
  message: '',
};

// LocalStorage'dan veri alma
const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  formData = JSON.parse(savedData);

  form.elements.email.value = formData.email || '';
  form.elements.message.value = formData.message || '';
}

// Input event
form.addEventListener('input', event => {
  const { name, value } = event.target;

  // Kenar boşluklarını kaldır
  formData[name] = value.trim();

  // Diğer alanı silmeden güncelle
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Submit event
form.addEventListener('submit', event => {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  // Boş alan kontrolü
  if (email === '' || message === '') {
    alert('Please fill in all fields');
    return;
  }

  // Konsola nesne yazdır
  console.log({
    email,
    message,
  });

  // Storage temizleme
  localStorage.removeItem(STORAGE_KEY);

  // Form temizleme
  form.reset();

  // Eski verileri sıfırla
  formData = {
    email: '',
    message: '',
  };
});
