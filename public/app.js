const loginModal = document.getElementById('loginModal');
const loginForm = document.getElementById('loginForm');
const openLoginBtn = document.getElementById('openLoginBtn');
const messageEl = document.getElementById('message');
const statusEl = document.getElementById('status');

function openModal() {
  loginModal.classList.add('open');
  loginModal.setAttribute('aria-hidden', 'false');
  const firstInput = loginForm.querySelector('input');
  if (firstInput) {
    firstInput.focus();
  }
}

function closeModal() {
  loginModal.classList.remove('open');
  loginModal.setAttribute('aria-hidden', 'true');
}

function showMessage(text, type = '') {
  messageEl.textContent = text;
  messageEl.className = `message ${type}`.trim();
}

openLoginBtn.addEventListener('click', openModal);

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const payload = {
    username: (formData.get('username') || '').toString().trim(),
    password: (formData.get('password') || '').toString()
  };

  showMessage('Checking credentials...');

  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      showMessage(data.message || 'Login failed.', 'error');
      return;
    }

    showMessage(data.message || 'Login successful.', 'success');
    statusEl.textContent = `Logged in as ${data.user.username}.`;

    setTimeout(() => {
      closeModal();
      loginForm.reset();
      showMessage('');
    }, 550);
  } catch (error) {
    showMessage('Server connection error. Please try again.', 'error');
  }
});

// Show the login popup as soon as the app starts.
window.addEventListener('load', openModal);
