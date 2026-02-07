let form = document.querySelector('form');
let eventName = document.querySelector('#event-name');
let eventDate = document.querySelector('#event-date');
let eventCategory = document.querySelector('#event-category');
let eventDescription = document.querySelector('#event-description');
let allEventContainer = document.querySelector('#all-event-container');
let clearEventBtn = document.getElementById('clear-event');
let addSampleBtn = document.getElementById('add-sample');

function addEventFunction(event) {
    event.preventDefault();
    
    let card = document.createElement('div');
    card.className = 'event-card';
    
    let header = document.createElement('div');
    header.className = 'event-header';
    
    let title = document.createElement('h3');
    title.className = 'event-title';
    title.textContent = eventName.value;
    
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'X';
    deleteBtn.onclick = function() {
        card.remove();
    };
    
    header.appendChild(title);
    header.appendChild(deleteBtn);
    
    let details = document.createElement('div');
    details.className = 'event-details';
    
    let date = document.createElement('p');
    date.className = 'event-date';
    let dateStrong = document.createElement('strong');
    dateStrong.textContent = 'Date: ';
    date.appendChild(dateStrong);
    date.appendChild(document.createTextNode(eventDate.value));
    
    let category = document.createElement('p');
    category.className = 'event-category';
    let categoryStrong = document.createElement('strong');
    categoryStrong.textContent = 'Category: ';
    category.appendChild(categoryStrong);
    category.appendChild(document.createTextNode(eventCategory.value));
    
    let descPara = document.createElement('p');
    descPara.className = 'event-description';
    descPara.textContent = eventDescription.value;
    
    details.appendChild(date);
    details.appendChild(category);
    details.appendChild(descPara);
    
    card.appendChild(header);
    card.appendChild(details);
    
    if (allEventContainer.textContent === 'No events yet!' || 
        allEventContainer.textContent === 'Events will be displayed here.') {
        allEventContainer.innerHTML = '';
    }
    
    allEventContainer.appendChild(card);
    
    form.reset();
}

function clearAllEventFunction() {
    allEventContainer.innerHTML = 'No events yet!';
}

function checkEmpty() {
    if (allEventContainer.children.length === 0) {
        allEventContainer.innerHTML = 'No events yet!';
    }
}

function addSampleEvents() {
    allEventContainer.innerHTML = '';

    eventName.value = 'Tech Conference';
    eventDate.value = '2026-03-20';
    eventCategory.value = 'conference';
    eventDescription.value = 'Technology conference featuring the latest innovations.';
    addEventFunction(new Event('submit'));
}

form.addEventListener('submit', addEventFunction);
clearEventBtn.addEventListener('click', clearAllEventFunction);
addSampleBtn.addEventListener('click', addSampleEvents);

document.addEventListener('keydown', function(event) {
    let keyPressedSpan = document.getElementById('pressed-key');
    keyPressedSpan.textContent = event.key;
});