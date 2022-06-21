let createQuoteBtn = document.querySelector('.createQuoteBtn');
let modalWindow = document.querySelector('.modalWindow');
let closeBtn = document.querySelector('.closeBtn');
let saveQuoteBtn = document.querySelector('.saveQuoteBtn');
let nameQuote = document.querySelector('.nameQuote');
let inputForName = document.querySelector('.inputForName');
let textareaForQuote = document.querySelector('.textareaForQuote');

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
let saveUserName = inputForName.value;
let saveTextarea = textareaForQuote.value;
}