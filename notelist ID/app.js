const inputBox = document.getElementById('input-note');
const noteList = document.getElementById('note-list');
const addbutton = document.getElementById('save-button');


function addnote(){
    const newId = Math.floor(Math.random()* 1000);
    if(inputBox.value === ''){
        alert('please write a note first!');
    }else{
    const notes = document.createElement('div');
    noteList.className = 'note-menu';
    const note = document.createElement('span');
    note.className = 'note-text';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    deleteButton.addEventListener('click', function(){
    noteList.removeChild(notes);
    });
    note.textContent = inputBox.value;
    notes.appendChild(note);
    notes.appendChild(deleteButton);

    noteList.appendChild(notes);

    saveNote(inputBox.value, note);

    inputBox.value = '';
    }
}

function saveNote(note){
    const notes = localStorage.getItem('notes');

    if(notes){
        const notesArray = JSON.parse(notes);

        const newNote ={
            id: notesArray.length,
            value: note,
        };
        notesArray.push(newNote);

        const notesJSON = JSON.stringify(notesArray);
        localStorage.setItem('notes', notesJSON);
    }else{
        const newNote ={
            id: 0,
            value: note,
        };
        const newNoteJSON = JSON.stringify([newNote]);
        localStorage.setItem('notes', newNoteJSON);
    }
}



function deleteNote(id){
console.log('Delete note with ID of',id);
const notes = localStorage.getItem('notes');

if(notes){
    const notesArray = JSON.parse(notes);
    const filteredNotes = notesArray.filter(function(){
        return notes.id !== id;
    });
    const notesJSON = JSON.stringify(filteredNotes);
    localStorage.setItem('notes', notesJSON);
}
}
addbutton.addEventListener('click',addnote);