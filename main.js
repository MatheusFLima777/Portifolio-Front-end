const toggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const favicon = document.getElementById('favicon');

const lightIcon = 'assets/images/moon-sun-svgrepo-com.svg';
const darkIcon = 'assets/images/luaCrescente.svg';

function setTheme(isDark) {
  document.body.classList.toggle('dark-mode', isDark);
  document.body.classList.toggle('light-mode', !isDark);

  const icon = isDark ? darkIcon : lightIcon;
  themeIcon.src = icon;
  favicon.href = icon;

  localStorage.setItem('darkMode', isDark);
}

// Verifica se tem preferência salva
const saved = localStorage.getItem('darkMode');
if (saved !== null) {
  setTheme(saved === 'true');
} else {
  setTheme(false); // claro por padrão
}

// Alterna ao clicar
toggleButton.addEventListener('click', () => {
  const isDark = document.body.classList.contains('light-mode');
  setTheme(isDark);
});
