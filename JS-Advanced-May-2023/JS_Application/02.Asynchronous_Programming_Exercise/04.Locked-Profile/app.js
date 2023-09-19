function lockedProfile() {
    const mainElement = document.getElementById('main');
    const firstDivElement = document.querySelector('.profile');
    const baseUrl = 'http://localhost:3030/jsonstore/advanced/profiles';

    fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
            const personsInfoArr = Object.values(data);
            const length = personsInfoArr.length;

            for (let i = 0; i < length; i++) {
                const currPersonInfo = personsInfoArr[i];
                const currUsername = currPersonInfo.username;
                const currEmail = currPersonInfo.email;
                const currAge = currPersonInfo.age;

                if (i === 0) {
                    const [lock, unlock, username, email, age] = document.querySelectorAll('.profile input');

                    username.value = currUsername;
                    email.value = currEmail;
                    age.value = currAge;

                    firstDivElement.querySelector('div').style.display = 'none';
                    firstDivElement.querySelector('button').addEventListener('click', onClick);

                    continue;
                }

                const newDivElement = document.createElement('div');
                newDivElement.classList = 'profile';

                const imgElement = document.createElement('img');
                imgElement.src = './iconProfile2.png';
                imgElement.classList = 'userIcon';

                const lockLabelElement = document.createElement('label');
                lockLabelElement.textContent = 'Lock';

                const lockInputElement = document.createElement('input');
                lockInputElement.type = 'radio';
                lockInputElement.name = `user${i + 1}Locked`;
                lockInputElement.value = 'lock';

                const unlockLabelElement = document.createElement('label');
                unlockLabelElement.textContent = 'Unlock';

                const unlockInputElement = document.createElement('input');
                unlockInputElement.type = 'radio';
                unlockInputElement.name = `user${i + 1}Locked`;
                unlockInputElement.value = 'unlock';

                const brElement = document.createElement('br');

                const hrElement = document.createElement('hr');

                const usernameLabelElement = document.createElement('label');
                usernameLabelElement.textContent = 'Username';

                const usernameInputElement = document.createElement('input');
                usernameInputElement.type = 'text';
                usernameInputElement.name = `user${i + 1}Username`;
                usernameInputElement.value = currUsername;
                usernameInputElement.disabled = 'readonly';

                const userDivElement = document.createElement('div');
                userDivElement.classList = `user${i + 1}Username`;
                userDivElement.style.display = 'none';

                const secondHrElement = document.createElement('hr');

                const emailLabelElement = document.createElement('label');
                emailLabelElement.textContent = 'Email:';

                const emailInputElement = document.createElement('input');
                emailInputElement.type = 'email';
                emailInputElement.name = `user${i + 1}Email`;
                emailInputElement.value = currEmail;
                emailInputElement.disabled = 'readonly';

                const ageLabelElement = document.createElement('label');
                ageLabelElement.textContent = 'Age:';

                const ageInputElement = document.createElement('input');
                ageInputElement.type = 'email';
                ageInputElement.name = `user${i + 1}Age`;
                ageInputElement.value = currAge;
                ageInputElement.disabled = 'readonly';

                const newButtonElement = document.createElement('button');
                newButtonElement.textContent = 'Show more';
                newButtonElement.addEventListener('click', onClick);

                userDivElement.appendChild(secondHrElement);
                userDivElement.appendChild(emailLabelElement);
                userDivElement.appendChild(emailInputElement);
                userDivElement.appendChild(ageLabelElement);
                userDivElement.appendChild(ageInputElement);

                newDivElement.appendChild(imgElement);
                newDivElement.appendChild(lockLabelElement);
                newDivElement.appendChild(lockInputElement);
                newDivElement.appendChild(unlockLabelElement);
                newDivElement.appendChild(unlockInputElement);
                newDivElement.appendChild(brElement);
                newDivElement.appendChild(hrElement);
                newDivElement.appendChild(usernameLabelElement);
                newDivElement.appendChild(usernameInputElement);
                newDivElement.appendChild(userDivElement);
                newDivElement.appendChild(newButtonElement);

                mainElement.appendChild(newDivElement);
            }
        });

    function onClick(event) {
        const currButtonElement = event.currentTarget;
        const currMainDivElement = currButtonElement.parentElement;
        const currUserDivElement = currMainDivElement.querySelector('div');
        const [currLockInputElement, currUnlockInputElement] = currMainDivElement.querySelectorAll('input');

        if (!currLockInputElement.checked && currUnlockInputElement.checked) {
            if (currButtonElement.textContent === 'Show more') {
                currButtonElement.textContent = 'Hide it';
                currUserDivElement.style.display = 'block';
            } else {
                currButtonElement.textContent = 'Show more';
                currUserDivElement.style.display = 'none';
            }
        }
    }
}