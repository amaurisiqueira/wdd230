
const myinput = document.querySelector('#favchap');
const mybutton = document.querySelector('button');
const mylist = document.querySelector('#list');

const fnDeleteElementFromList=(myli)=>{
    if (myli.parentNode === mylist) {
     mylist.removeChild(myli);
     myinput.focus();
    }
}

const fnAddNewLabel = (parameter)=> {
    const li = document.createElement('li');
    const deleteButton= document.createElement('button');
    li.textContent=parameter.value;

    deleteButton.textContent='❌';
    deleteButton.addEventListener('click', () => fnDeleteElementFromList(li));
 
    li.appendChild(deleteButton);
    mylist.appendChild(li);

}
const fnManagerAddElement=()=>{
    if(myinput.value!=''){//if have a value 
            fnAddNewLabel(myinput);
            myinput.focus();
            myinput.value='';
    }
    
}

mybutton.addEventListener('click', () => fnAddNewLabel(myinput) );

