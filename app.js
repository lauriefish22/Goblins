/* Imports */

/* Get DOM Elements */
const kidsEl = document.getElementById('kids');
const buttonEl = document.getElementById('button');
const inputEl = document.getElementById('text-box');
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

buttonEl.addEventListener('click', () => {
    const kidName = inputEl.value;
    if (!kidName) {
        return; 
    }
    const newKid = {
        name: kidName,
        HP: Math.ceil(Math.random() * 6)
    
};
kids.push(newKid);

for (let kid of kids) {
    const newKidEl = renderKid(kid);
    kidsEl.append(newKidEl);
}
function renderKid(dataKid) {
    const newKidEl = document.createElement('li');
    const nameEl = document.createElement('p');
    const emojiEl = document.createElement('p');
    const HPEl = document.createElement('p');

    nameEl.textContent = dataKid.name;
    emojiEl.textContent = '💩';
    HPEl.textContent = dataKid.HP;

    newKidEl.classList.add('kid');
    newKidEl.append(nameEl, emojiEl, HPEl);

    return newKidEl;
}

/* Events */

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
