const tbodyElement = document.querySelector('#results tbody');
const formElement = document.getElementById('form');
const [firstNameInputElement, lastNameInputElement, facNumInputElement, gradeInputElement] = document.querySelectorAll('.inputs input');
const baseUrl = 'http://localhost:3030/jsonstore/collections/students';

formElement.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();

    const firstName = firstNameInputElement.value;
    const lastName = lastNameInputElement.value;
    const facNum = facNumInputElement.value;
    const grade = gradeInputElement.value;

    firstNameInputElement.value = '';
    lastNameInputElement.value = '';
    facNumInputElement.value = '';
    gradeInputElement.value = '';

    if (
        firstName === '' ||
        lastName === '' ||
        facNum === '' ||
        grade === ''
    ) {
        return;
    }

    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName,
            lastName,
            facultyNumber: facNum,
            grade
        })
    }

    fetch(baseUrl, options);

    createRow(firstName, lastName, facNum, grade);
}

function extractStudents() {
    fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
            Object.values(data).forEach(student => {
                const firstName = student.firstName;
                const lastName = student.lastName;
                const facNum = student.facultyNumber;
                const grade = student.grade;

                createRow(firstName, lastName, facNum, grade);
            })
        })
}

extractStudents();

function createRow(firstName, lastName, facNum, grade) {
    const trElement = document.createElement('tr');

    const td1Element = document.createElement('td');
    td1Element.textContent = firstName;

    const td2Element = document.createElement('td');
    td2Element.textContent = lastName;

    const td3Element = document.createElement('td');
    td3Element.textContent = facNum;

    const td4Element = document.createElement('td');
    td4Element.textContent = grade;

    trElement.append(td1Element, td2Element, td3Element, td4Element);
    
    tbodyElement.appendChild(trElement);
}