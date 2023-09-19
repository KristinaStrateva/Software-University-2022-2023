window.addEventListener('load', solve);

function solve() {
    const bodyElement = document.getElementById('body');
    const mainDivElement = document.getElementById('main');
    const firstNameElement = document.getElementById('first-name');
    const lastNameElement = document.getElementById('last-name');
    const peopleAmountElement = document.getElementById('people-count');
    const dateElement = document.getElementById('from-date');
    const daysAmountElement = document.getElementById('days-count');
    const nextStepButtonElement = document.getElementById('next-btn');

    const ticketPreviewSectionElement = document.getElementById('info-ticket');
    const ticketInfoUlElement = ticketPreviewSectionElement.querySelector('.ticket-info-list');

    const confirmTicketSectionElement = document.getElementById('confirm-ticket-section');
    const confirmTicketUlElement = confirmTicketSectionElement.querySelector('.confirm-ticket');

    nextStepButtonElement.addEventListener('click', nextStep);

    function nextStep(event) {
        event.preventDefault();

        const firstName = firstNameElement.value;
        const lastName = lastNameElement.value;
        const peopleAmount = peopleAmountElement.value;
        const date = dateElement.value;
        const daysAmount = daysAmountElement.value;

        if (
            firstName === '' ||
            lastName === '' ||
            peopleAmount === '' ||
            date === '' ||
            daysAmount === ''
        ) {
            return;
        }

        const newLiElement = document.createElement('li');
        newLiElement.classList = 'ticket';

        const newArticleElement = document.createElement('article');

        const h3NameElement = document.createElement('h3');
        h3NameElement.textContent = `Name: ${firstName} ${lastName}`;

        const datePElement = document.createElement('p');
        datePElement.textContent = `From date: ${date}`;

        const dayPElement = document.createElement('p');
        dayPElement.textContent = `For ${daysAmount} days`;

        const peoplePElement = document.createElement('p');
        peoplePElement.textContent = `For ${peopleAmount} people`;

        const editButtonElement = document.createElement('button');
        editButtonElement.classList = 'edit-btn';
        editButtonElement.textContent = 'Edit';

        const continueButtonElement = document.createElement('button');
        continueButtonElement.classList = 'continue-btn';
        continueButtonElement.textContent = 'Continue';

        newArticleElement.appendChild(h3NameElement);
        newArticleElement.appendChild(datePElement);
        newArticleElement.appendChild(dayPElement);
        newArticleElement.appendChild(peoplePElement);

        newLiElement.appendChild(newArticleElement);
        newLiElement.appendChild(editButtonElement);
        newLiElement.appendChild(continueButtonElement);

        ticketInfoUlElement.appendChild(newLiElement);
        
        firstNameElement.value = '';
        lastNameElement.value = '';
        peopleAmountElement.value = '';
        dateElement.value = '';
        daysAmountElement.value = '';

        nextStepButtonElement.disabled = true;
        editButtonElement.disabled = false;
        continueButtonElement.disabled = false;

        editButtonElement.addEventListener('click', onEdit);
        continueButtonElement.addEventListener('click', onContinue);

        function onEdit() {
            firstNameElement.value = firstName;
            lastNameElement.value = lastName;
            peopleAmountElement.value = peopleAmount;
            dateElement.value = date;
            daysAmountElement.value = daysAmount;
            
            nextStepButtonElement.disabled = false;

            ticketInfoUlElement.children[0].remove();
        }

        function onContinue() {
            confirmTicketUlElement.appendChild(ticketInfoUlElement.children[0]);

            editButtonElement.remove();
            continueButtonElement.remove();

            const confirmButtonElement = document.createElement('button');
            confirmButtonElement.classList = 'confirm-btn';
            confirmButtonElement.textContent = 'Confirm';

            const cancelButtonElement = document.createElement('button');
            cancelButtonElement.classList = 'cancel-btn';
            cancelButtonElement.textContent = 'Cancel';

            confirmTicketUlElement.children[0].appendChild(confirmButtonElement);
            confirmTicketUlElement.children[0].appendChild(cancelButtonElement);

            confirmButtonElement.addEventListener('click', onConfirm);
            cancelButtonElement.addEventListener('click', onCancel);

            function onConfirm() {
                confirmTicketUlElement.children[0].remove();
                mainDivElement.remove();

                const h1Element = document.createElement('h1');
                h1Element.id = 'thank-you';
                h1Element.textContent = 'Thank you, have a nice day! ';

                const backButtonElement = document.createElement('button');
                backButtonElement.id = 'back-btn';
                backButtonElement.textContent = 'Back ';

                bodyElement.appendChild(h1Element);
                bodyElement.appendChild(backButtonElement);

                backButtonElement.addEventListener('click', onBack);

                function onBack() {
                    location.reload();
                }
            }

            function onCancel() {
                confirmTicketUlElement.children[0].remove();

                nextStepButtonElement.disabled = false;
            }
        }
    }
}