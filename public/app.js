const loginModal = document.getElementById('loginModal');
const loginForm = document.getElementById('loginForm');
const openLoginBtn = document.getElementById('openLoginBtn');
<<<<<<< Updated upstream
=======
const logoutBtn = document.getElementById('logoutBtn');
const messageBtn = document.getElementById('messageBtn');
const passwordInput = document.getElementById('password');
const togglePasswordBtn = document.getElementById('togglePasswordBtn');
>>>>>>> Stashed changes
const messageEl = document.getElementById('message');
const statusEl = document.getElementById('status');
const messageBoxEl = document.getElementById('messagebox');

<<<<<<< Updated upstream
=======
function resetPasswordToggle() {
  passwordInput.type = 'password';
  togglePasswordBtn.textContent = 'Show';
}

function showMessageBox() {
    messageBoxEl.innerText = "Hello! This message appeared after clicking the button.";
}

messageBtn.addEventListener('click', showMessageBox);


>>>>>>> Stashed changes
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
