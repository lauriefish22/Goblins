/* Imports */

/* Get DOM Elements */
const kidsEl = document.getElementById('kids');
const kids = [
    {
        name: 'Bobby',
        HP: 3,
    },
    {
        name: 'Marsha',
        HP: 4,
    },
    {
        name: 'Jan',
        HP: 2,
    },
];

/* State */
for (let kid of kids) {
    const kidEl = document.createElement('p');
    kidEl.textContent = 'new x';
    kidsEl.append(kidEl);
}

/* Events */

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
