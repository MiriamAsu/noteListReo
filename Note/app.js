const inputBox = document.getElementById('create-note');
const noteList = document.getElementById('note-list');
const button = document.getElementById('add-note');

function addNote(){
    if(inputBox.value ===''){
        alert('you must write something');
    }else{
        const div = document.createElement('div');
        div.id = 'note';
        div.textContent = inputBox.value;
        noteList.appendChild(div);
        saveNote(inputBox.value);
        inputBox.value = '';
    }
}
function saveNote(text){
    const notes = localStorage.getItem('notes');
    if(notes){
        const notesArray = JSON.parse(notes);
        notesArray.push({value: text});
        const notesJSON = JSON.stringify(notesArray);
        localStorage.setItem('notes',notesJSON);
    }else{
        const notesJSON = JSON.stringify([{value: text}]);
        localStorage.setItem('notes', notesJSON);
    }
}

button.addEventListener('click', addNote);

function retrieveData(){
    const retrieve = localStorage.getItem('notes');
    if(retrieve){
        const retrieveArray = JSON.parse(retrieve);
        for (let i = 0; i< retrieveArray.length; i++){
            const currentData = retrieveArray[i];
            const div = document.createElement('div');
            div.id = 'note';
            div.textContent = currentData.value;
            noteList.appendChild(div);
        }
    }
}
retrieveData();