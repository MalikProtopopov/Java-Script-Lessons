//Контейнер для сообщений
var chatContainer = document.querySelector('.chat-content');
// Коллекция всех сообщений в контейнере
var messages = chatContainer.children;
// Форма и поле ввода текста
var newMessageForm = document.querySelector('.chat-form');
var newMessageInput = newMessageForm.querySelector('.chat-form-input');
// Шаблон для сообщения
var messageTemplate = document.querySelector('#message-template').content;
var newMessageTemplate = messageTemplate.querySelector('.chat-message');
// Создание нового сообщения
newMessageForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  // Получаем текст из поля ввода
  var messageText = newMessageInput.value;
  // Клонируем шаблон сообщения
  var newMessage = newMessageTemplate.cloneNode(true);
  // Добавляем текст вводимый пользователем
  newMessage.children[1].textContent = messageText;
  // Добавляем сообщение на страницу
  chatContainer.appendChild(newMessage);
  // Добавляем обработчик удаления новых сообщений
  deleteMessageHandler(newMessage);
  // Чистим содержимое поля ввода
  newMessageInput.value = '';
});
// Функция удаления сообщения
var deleteMessageHandler = function (message) {
  var crossSign = message.querySelector('.chat-message-button');
  crossSign.addEventListener('click', function () {
  message.remove(); 
  });    
}
// Цикл для выбора сообщения для удаления из коллекции(списка)
for (var i = 0;i < messages.length;i++) {
  deleteMessageHandler(messages[i]);  
}
