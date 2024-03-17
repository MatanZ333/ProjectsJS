const elementType = document.getElementById('elementType');
const textContent = document.getElementById('textContent');
const fontSize = document.getElementById('fontSize');
const widthHeight = document.getElementById('widthHeight');
const backgroundColor = document.getElementById('backgroundColor');
const addButton = document.getElementById('add');
const clearButton = document.getElementById('clear');
const saveButton = document.getElementById('save');
const mainContent = document.getElementById('mainContent');

addButton.addEventListener('click', () => {
    const newElement = document.createElement(elementType.value);
    newElement.textContent = textContent.value;
    newElement.style.fontSize = fontSize.value;
    newElement.style.width = widthHeight.value.split(' ')[0];
    newElement.style.height = widthHeight.value.split(' ')[1];
    newElement.style.backgroundColor = backgroundColor.value;
    mainContent.appendChild(newElement);
});

clearButton.addEventListener('click', () => {
    mainContent.innerHTML = '';
});

localStorage.setItem("element type", elementType, JSON.stringify(elementType));
localStorage.setItem("text content", textContent, JSON.stringify(textContent));
localStorage.setItem("font size", fontSize, JSON.stringify(fontSize));
localStorage.setItem("width & height", widthHeight, JSON.stringify(widthHeight));
localStorage.setItem("background color", backgroundColor, JSON.stringify(backgroundColor));