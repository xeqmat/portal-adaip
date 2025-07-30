// script.js
// Este arquivo contém pequenos scripts para melhorar a experiência do usuário.
// No momento, apenas atualiza automaticamente o ano no rodapé.

document.addEventListener('DOMContentLoaded', () => {
  // Seleciona o span com id="year" e insere o ano atual
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
  }
});