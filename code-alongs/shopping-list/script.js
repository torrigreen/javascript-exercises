const list = document.querySelector('ul');
const input = document.querySelector('input');
const btn = document.querySelector('button');

function addToList() {
	const item = input.value;
	input.value = '';

	const listItem = document.createElement('li');
	const text = document.createElement('span');
	const btn = document.createElement('button');

	text.textContent = item;
	btn.textContent = `delete`;
	btn.addEventListener('click', () => list.removeChild(listItem));

	listItem.appendChild(text);
	listItem.appendChild(btn);
	list.appendChild(listItem);
	
	input.focus();
}

btn.addEventListener(`click`, addToList);
input.addEventListener(`keypress`, (e) => {if(e.key === `Enter`) addToList()});