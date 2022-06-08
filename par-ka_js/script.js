const buttonElem= document.querySelector('button');
const inputElem = document.querySelector('input');
const listElem = document.querySelector('ul');

const addTodo = ()=>{
    if(inputElem.value==''){
        alert('malumot kiriting')
    }else {
        let inputVal = inputElem.value;
        const createElemLI = document.createElement('li');
        createElemLI.textContent = inputVal;
        listElem.appendChild(createElemLI);
        inputElem.value='';
    }    
}

buttonElem.addEventListener('click', addTodo)