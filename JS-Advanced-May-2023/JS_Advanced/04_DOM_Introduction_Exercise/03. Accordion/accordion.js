function toggle() {
    const buttonCondition = document.getElementsByClassName('button')[0];
    const extraText = document.getElementById('extra');

    if (buttonCondition.textContent === 'More') {
        buttonCondition.textContent = 'Less';
        extraText.style.display = 'block';

    } else {
        buttonCondition.textContent = 'More';
        extraText.style.display = 'none';
    }
}