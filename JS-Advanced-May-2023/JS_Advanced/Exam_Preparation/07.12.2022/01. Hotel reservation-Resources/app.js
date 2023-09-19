window.addEventListener('load', solve);

function solve() {
    const firstNameElement = document.getElementById('first-name');
    const lastNameElement = document.getElementById('last-name');
    const checkInElement = document.getElementById('date-in');
    const checkOutElement = document.getElementById('date-out');
    const peopleAmountElement = document.getElementById('people-count');
    const nextButtonElement = document.getElementById('next-btn');
    const ulInfoListElement = document.querySelector('.info-list');
    const ulConfirmListElement = document.querySelector('.confirm-list');
    const verificationElement = document.getElementById('verification');

    nextButtonElement.addEventListener('click', onNext);

    function onNext(event) {
        event.preventDefault();

        const firstName = firstNameElement.value;
        const lastName = lastNameElement.value;
        const checkInDate = checkInElement.value;
        const checkOutDate = checkOutElement.value;
        const peopleAmount = peopleAmountElement.value;

        if (
            firstName === '' ||
            lastName === '' ||
            checkInDate === '' ||
            checkOutDate === '' ||
            checkInDate > checkOutDate ||
            peopleAmount === ''
        ) {
            return;
        }

        const newLiElement = document.createElement('li');
        newLiElement.classList = 'reservation-content';

        const articleElement = document.createElement('article');

        const h3NameElement = document.createElement('h3');
        h3NameElement.textContent = `Name: ${firstName} ${lastName}`;

        const pCheckInDateElement = document.createElement('p');
        pCheckInDateElement.textContent = `From date: ${checkInDate}`;

        const pCheckOutDateElement = document.createElement('p');
        pCheckOutDateElement.textContent = `To date: ${checkOutDate}`;

        const pPeopleAmountElement = document.createElement('p');
        pPeopleAmountElement.textContent = `For ${peopleAmount} people`;

        const editButtonElement = document.createElement('button');
        editButtonElement.classList = 'edit-btn';
        editButtonElement.textContent = 'Edit';

        const continueButtonElement = document.createElement('button');
        continueButtonElement.classList = 'continue-btn';
        continueButtonElement.textContent = 'Continue';

        articleElement.appendChild(h3NameElement);
        articleElement.appendChild(pCheckInDateElement);
        articleElement.appendChild(pCheckOutDateElement);
        articleElement.appendChild(pPeopleAmountElement);

        newLiElement.appendChild(articleElement);
        newLiElement.appendChild(editButtonElement);
        newLiElement.appendChild(continueButtonElement);

        ulInfoListElement.appendChild(newLiElement);

        nextButtonElement.disabled = true;

        firstNameElement.value = '';
        lastNameElement.value = '';
        checkInElement.value = '';
        checkOutElement.value = '';
        peopleAmountElement.value = '';

        editButtonElement.addEventListener('click', onEdit);
        continueButtonElement.addEventListener('click', onContinue);

        function onEdit() {
            firstNameElement.value = firstName;
            lastNameElement.value = lastName;
            checkInElement.value = checkInDate;
            checkOutElement.value = checkOutDate;
            peopleAmountElement.value = peopleAmount;

            nextButtonElement.disabled = false;

            newLiElement.remove();
        }

        function onContinue() {
            const confirmButtonElement = newLiElement.children[1];
            confirmButtonElement.classList = 'confirm-btn';
            confirmButtonElement.textContent = 'Confirm';

            const cancelButtonElement = newLiElement.children[2];
            cancelButtonElement.classList = 'cancel-btn';
            cancelButtonElement.textContent = 'Cancel';

            ulConfirmListElement.appendChild(newLiElement);

            confirmButtonElement.addEventListener('click', onConfirm);
            cancelButtonElement.addEventListener('click', onCancel);

            function onConfirm() {
                newLiElement.remove();

                nextButtonElement.disabled = false;

                verificationElement.classList = 'reservation-confirmed';
                verificationElement.textContent = 'Confirmed.';
            }

            function onCancel() {
                newLiElement.remove();

                nextButtonElement.disabled = false;

                verificationElement.classList = 'reservation-cancelled';
                verificationElement.textContent = 'Cancelled.';
            }
        }
    }
}