function notify(message) {
  const notificationDivElement = document.getElementById('notification');
  notificationDivElement.textContent = message;
  notificationDivElement.style.display = 'block';

  notificationDivElement.addEventListener('click', onClick);

  function onClick() {
    notificationDivElement.style.display = 'none';
  }
}