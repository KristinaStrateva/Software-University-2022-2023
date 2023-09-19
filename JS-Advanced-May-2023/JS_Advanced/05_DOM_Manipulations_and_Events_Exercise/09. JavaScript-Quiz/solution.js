function solve() {
  const sectionsElementsArr = Array.from(document.querySelectorAll('#quizzie > section'));
  const rightAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  const resultElement = document.getElementById('results');
  let correctAnswers = 0;

  for (let i = 0; i < 3; i++) {
    const currSection = sectionsElementsArr[i];
    const nextSection = sectionsElementsArr[i + 1];

    const [lowValueAnswer, highValueAnswer] = currSection.querySelectorAll('.answer-wrap');

    lowValueAnswer.addEventListener('click', checkedAnswer);
    highValueAnswer.addEventListener('click', checkedAnswer);

    function checkedAnswer(event) {
      const clickedAnswerElement = event.target;
      const clickedAnswerText = clickedAnswerElement.textContent;

      rightAnswers.forEach(rightAnswer => {
        if (clickedAnswerText === rightAnswer) {
          correctAnswers++;
        }
      });

      currSection.style.display = 'none';

      if (i < 2) {
        nextSection.style.display = 'block';
        
      } else {
        resultElement.style.display = 'block';
        let resultTextElement = document.querySelector('#results li h1');

        if (correctAnswers === 3) {
          resultTextElement.textContent = 'You are recognized as top JavaScript fan!';

        } else {
          resultTextElement.textContent = `You have ${correctAnswers} right answers`;
        }
      }
    }
  }
}