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

console.log(cardFactory('A', 'S'));
console.log(cardFactory('10', 'H'));
cardFactory('1', 'C');