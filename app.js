/* Imports */

/* Get DOM Elements */
const kidsEl = document.getElementById('kids');
const buttonEl = document.getElementById('button');
const inputEl = document.getElementById('text-box');
const defeatedCountEl = document.getElementById('defeated-count');
const farmerImgEl = document.getElementById('farmer');
const farmerHPEl = document.getElementById('farmer-HP');

/* State */
let defeatedCount = 0;
let farmerHP = 10;
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

/* Events */
buttonEl.addEventListener('click', () => {
    const kidName = inputEl.value;
    if (!kidName) {
        return;
    }
    const newKid = {
        name: kidName,
        HP: Math.ceil(Math.random() * 6),
    };
    kids.push(newKid);

    inputEl.value = '';

    displayKids();
});

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

/* Display Functions */
function displayKids() {
    kidsEl.textContext = '';

    for (let kid of kids) {
        const newKidEl = renderKid(kid);

        newKidEl.addEventListener('click', () => {
            if (farmerHP <= 0) {
                alert('Need more cow pies!');
                return;
            }
            if (Math.random() > 0.3) {
                alert('you hit' + kid.name);
                kid.HP--;
                if (kid.HP === 0) {
                    defeatedCount++;
                    defeatedCountEl.textContent = `You have defeated ${defeatedCount} goblins`;
                }
            } else {
                alert('you missed' + kid.name);
            }
            if (Math.random() > 0.8) {
                alert(kid.name + 'fought back and hit you');
                farmerHP--;
                if (farmerHP <= 0) {
                    farmerImgEl.classList.add('crooked');
                }
            } else {
                alert(kid.name + 'fought back and missed');
            }
            farmerHPEl.textContent = farmerHP;
        });
        kidsEl.append(newKidEl);
    }
}

// (don't forget to call any display functions you want to run on page load!)
