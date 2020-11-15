// Keeps track of a winner
let winner = false;

// Get a reference to the cards div
const cards = document.querySelector('.cards');

// Render cards
cards.innerHTML = getCards();

// Get a reference to the cards buttons
const cardButtons = document.querySelectorAll('.card-btn');

// Get a reference to the Trump votes span
const trumpVotesEl = document.querySelector('.votes-number-trump');

// Get a reference to the Biden votes span
const bidenVotesEl = document.querySelector('.votes-number-biden');

// Set event listener for the vote buttons
cardButtons.forEach(cardButton => {
    cardButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-trump')) {
            addVote(0, 'trump', trumpVotesEl)
        } else {
            addVote(1, 'biden', bidenVotesEl)
        }
    })
})