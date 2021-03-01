let myForm = document.getElementById('myForm');
let myField = document.getElementById('myField');
let myList = document.getElementById('myList');

myForm.addEventListener('submit', (e) => {
    e.preventDefault()
    createItem(myField.value);
})

function createItem(x) {

  let myHTML = `<li> ${x} <button onclick="deleteItem(this)" class="btn btn-danger my-2">Delete</button></li>`
  
  myList.insertAdjacentHTML('beforeend', myHTML);  
  myField.value = '';
  myField.focus();
}

function deleteItem(elementToDelete) {
    elementToDelete.parentElement.remove();
    
}