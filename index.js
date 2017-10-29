/* Створити представника класу "Vocabulary" */
var vocabulary = new Vocabulary();

/* Створити посилання до елементів DOM */
var wordsList = document.getElementById('wordsList');
var newWordInput = document.getElementById('newWord');
var addBtn = document.getElementById('addBtn');

/* Слухати подію клік у кнопки, що додає нове слово в словник */
addBtn.addEventListener('click', function () {
  /* Взяти значення поля вводу і додати в словник */
  var newWord = newWordInput.value;
  vocabulary.add({ word: newWord });

  /* Оновити інтерфейс в HTML */
  renderList(vocabulary.data);

  /* Очищуємо значення поля */
  newWordInput.value = '';
});

/* Проговорити слово мовою */
function speakWord(word) {
  var msg = new SpeechSynthesisUtterance(word);
  speechSynthesis.speak(msg);
}

function renderList(data) {
  wordsList.innerHTML = '';

  data.forEach(function (obj) {
    var word = obj.word;
    var li = document.createElement('li');
    li.className = 'wordEntry';

    li.innerHTML = `
      <span>${word}</span>
      <button class="listenBtn" onClick="speakWord('${word}')">
      <img class="listenImg" src="https://cdn.ggc-stream.net/icon/fugue_icon/speaker-volume.png" />
      </button>
    `;

    wordsList.appendChild(li);
  });
}
