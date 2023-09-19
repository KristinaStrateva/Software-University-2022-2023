window.addEventListener("load", solve);

function solve() {
  const firstNameElement = document.getElementById('first-name');
  const lastNameElement = document.getElementById('last-name');
  const ageElement = document.getElementById('age');
  const storyTitleElement = document.getElementById('story-title');
  const genreElement = document.getElementById('genre');
  const storyTextElement = document.getElementById('story');
  const publishButtonElement = document.getElementById('form-btn');
  const ulPreviewListElement = document.getElementById('preview-list');
  const mainDivElement = document.getElementById('main');

  publishButtonElement.addEventListener('click', onPublish);

  function onPublish(event) {
    event.preventDefault();

    const firstName = firstNameElement.value;
    const lastName = lastNameElement.value;
    const age = ageElement.value;
    const storyTitle = storyTitleElement.value;
    const genre = genreElement.value;
    const storyText = storyTextElement.value;

    if (
      firstName === '' ||
      lastName === '' ||
      age === '' ||
      storyTitle === '' ||
      genre === '' ||
      storyText === ''
    ) {
      return;
    }

    publishButtonElement.disabled = true;

    firstNameElement.value = '';
    lastNameElement.value = '';
    ageElement.value = '';
    storyTitleElement.value = '';
    genreElement.value = '';
    storyTextElement.value = '';

    const newLiElement = document.createElement('li');
    newLiElement.classList = 'story-info';

    const articleElement = document.createElement('article');

    const h4NameElement = document.createElement('h4');
    h4NameElement.textContent = `Name: ${firstName} ${lastName}`;

    const pAgeElement = document.createElement('p');
    pAgeElement.textContent = `Age: ${age}`;

    const pTitleElement = document.createElement('p');
    pTitleElement.textContent = `Title: ${storyTitle}`;

    const pGenreElement = document.createElement('p');
    pGenreElement.textContent = `Genre: ${genre}`;

    const pTextElement = document.createElement('p');
    pTextElement.textContent = `${storyText}`;

    const saveButtonElement = document.createElement('button');
    saveButtonElement.classList = 'save-btn';
    saveButtonElement.textContent = 'Save Story';

    const editButtonElement = document.createElement('button');
    editButtonElement.classList = 'edit-btn';
    editButtonElement.textContent = 'Edit Story';

    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.classList = 'delete-btn';
    deleteButtonElement.textContent = 'Delete Story';

    articleElement.appendChild(h4NameElement);
    articleElement.appendChild(pAgeElement);
    articleElement.appendChild(pTitleElement);
    articleElement.appendChild(pGenreElement);
    articleElement.appendChild(pTextElement);

    newLiElement.appendChild(articleElement);
    newLiElement.appendChild(saveButtonElement);
    newLiElement.appendChild(editButtonElement);
    newLiElement.appendChild(deleteButtonElement);

    ulPreviewListElement.appendChild(newLiElement);

    saveButtonElement.addEventListener('click', onSave);
    editButtonElement.addEventListener('click', onEdit);
    deleteButtonElement.addEventListener('click', onDelete);

    function onSave() {
      mainDivElement.innerHTML = '';

      const h1MessageElement = document.createElement('h1');
      h1MessageElement.textContent = 'Your scary story is saved!';
    }

    function onEdit() {
      newLiElement.remove();

      firstNameElement.value = firstName;
      lastNameElement.value = lastName;
      ageElement.value = age;
      storyTitleElement.value = storyTitle;
      genreElement.value = genre;
      storyTextElement.value = storyText;

      publishButtonElement.disabled = false;
    }

    function onDelete() {
      newLiElement.remove();

      publishButtonElement.disabled = false;
    }
  }
}