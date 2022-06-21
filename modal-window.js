let createQuoteBtn = document.querySelector('.createQuoteBtn');
let modalWindow = document.querySelector('.modalWindow');
let closeBtn = document.querySelector('.closeBtn');
let saveQuoteBtn = document.querySelector('.saveQuoteBtn');
let nameQuote = document.querySelector('.nameQuote');
let inputForName = document.querySelector('.inputForName');
let textareaForQuote = document.querySelector('.textareaForQuote');
let quoteZone = document.querySelector('.quoteZone');

createQuoteBtn.onclick = () => {
	modalWindow.style.display = 'block';
}

closeBtn.onclick = () => {
	modalWindow.style.display = 'none';
}

modalWindow.onclick = (event) => {
	if(event.target == modalWindow) {
		modalWindow.style.display = 'none';
	}
}

saveQuoteBtn.onclick = () => {
	let savedValueInputName = saveValueInputName();
	let savedValueInputTextarea = saveValueInputTextarea();
	closeModalWindow();
	addingQuote(savedValueInputName, savedValueInputTextarea);
}

function saveValueInputName() {
	let saveUserName = inputForName.value;
	return saveUserName;
}

function saveValueInputTextarea() {
	let saveTextarea = textareaForQuote.value;
	return saveTextarea;
}

function closeModalWindow() {
		modalWindow.style.display = 'none';
}

function addingQuote(name, quote) {
	let divBlock = document.createElement('div');
	divBlock.className = 'quoteBlock';
	// let nameZ = document.createElement('p');
	// nameZ.className = 'nameQuote';
	// let quoteZ = document.createElement('p');
	// quoteZ.className = 'quoteText';
	// divBlock.innerHTML +=   '@' + name;
	// divBlock.innerHTML +=    quote;
	
	let h3 = document.createElement('h3');
	h3.innerHTML += '- ' + name;


	quoteZone.insertAdjacentElement('beforeend', divBlock);
	h3.insertAdjacentElement('beforeend', h3);
	name.value = '';
}
    