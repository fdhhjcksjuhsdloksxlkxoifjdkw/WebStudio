<script>
  const openBtn = document.querySelector('.main-button');
  const closeBtn = document.getElementById('modal-close');
  const modal = document.getElementById('modal');

  // Відкриття модального вікна
  openBtn.addEventListener('click', () => {
    modal.classList.remove('is-hidden');
  });

  // Закриття при натисканні на хрестик
  closeBtn.addEventListener('click', () => {
    modal.classList.add('is-hidden');
  });

  // Закриття при натисканні на фон (backdrop)
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('is-hidden');
    }
  });

  // Закриття по Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modal.classList.add('is-hidden');
    }
  });
</script>