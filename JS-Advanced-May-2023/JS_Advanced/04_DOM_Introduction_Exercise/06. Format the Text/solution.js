function solve() {
  const inputText = document.getElementById('input').value;
  const sentencesArr = inputText.split('.');
  const sentencesAmount = sentencesArr.length;


  if (sentencesAmount <= 3) {
    let text = '';

    for (const sentence of sentencesArr) {
      if (sentence.length > 0) {
        text += `${sentence}.`;
      }
    }
    
    const paragraph = document.getElementById('output').appendChild(document.createElement('p'));

    paragraph.textContent = text;

  } else {

    for (let i = 0; i < sentencesAmount - 1; i++) {
      let currSentence = sentencesArr[i];
      let counter = 0;
      let text = '';

      const paragraph = document.getElementById('output').appendChild(document.createElement('p'));

      debugger

      while (counter < 3 && i < sentencesAmount - 1) {

        if (currSentence.length > 0) {
          text += `${sentencesArr[i]}.`;

          i++;
          currSentence = sentencesArr[i];
          counter++;
        }
      }

      i--;
      paragraph.textContent = text;
    }
  }
}