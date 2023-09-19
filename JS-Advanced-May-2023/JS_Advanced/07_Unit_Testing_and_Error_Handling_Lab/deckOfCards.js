function sequenceOfCards(input) {
    let result = [];
    
    for (const card of input) {
        const currFace = card.slice(0, card.length - 1);
        const currSuit = card.slice(card.length - 1);
        
        let currCard = '';

        try {
            currCard = cardFactory(currFace, currSuit);
            result.push(currCard);
        } catch (err) {
            result = [`Invalid card: ${card}`];
            break;
        }
    }

    console.log(result.join(' '));
    
    function cardFactory(face, suit) {
        const cardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const cardSuits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        }
    
        if (!cardFaces.includes(face) || !cardSuits[suit]) {
            throw new TypeError;
        }
    
        const result = {
            face,
            suit,
    
            toString() {
                return `${this.face}${cardSuits[this.suit]}`;
            }
        }
    
        return result;
    }
}

sequenceOfCards(['AS', '10D', 'KH', '2C']);
sequenceOfCards(['5S', '1D', 'QD', '1C']);