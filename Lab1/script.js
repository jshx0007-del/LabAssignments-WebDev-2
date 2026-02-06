let form = document.querySelector('form');
let eventName = document.querySelector('#event-name');
let eventDate = document.querySelector('#event-date');
let eventCategory = document.querySelector('#event-category');
let eventDescription = document.querySelector('#event-description');
let allEventContainer = document.querySelector('#all-event-container');

function addEventfunction(event) {
    event.preventDefault();
    let card = document.createElement('div');
    card.innerHTML = `<button>X</button>
                        <h3>${eventName.value}</h3>
                        <span>${eventDate.value}</span><br>
                        <span>${eventCategory.value}</span>
                        <p>${eventDescription.value}</p>`;
    allEventContainer.innerHTML = '';
    allEventContainer.append(card);
    form.reset();
}
form.addEventListener('submit', addEventfunction);

function clearAllEventFUnction() {
    allEventContainer.innerHTML = '<h3>No Events Yet</h3>';
}

form.addEventListener('click', clearAllEventFUnction)
