class Note{
    constructor(){
        this.addButton = document.getElementById('submit');
        this.input = document.getElementById('input-note');
        this.noteList = document.getElementById('note-list');
        this.notes=[];
        this.currentValue = '';
        
        this.addButton.addEventListener('click', () =>{
            this.addNote();
        });
    }
    addNote(){
        if(!this.input.value){
            alert('please write something!!');
        }else{
            this.notes.push(this.input.value);
            this.createNote(this.input.value);
            this.saveNote();
            this.currentValue = this.input.value;
            this.input.value = '';
        }
    }
    createNote(note){
        const noteItem = document.createElement('li');
        noteItem.className = 'note-list';
        noteItem.textContent = note;
        this.noteList.appendChild(noteItem);

        const deletebutton = document.createElement('button');
        deletebutton.className = 'delete-note';
        deletebutton.textContent = 'Delete Me';
        noteItem.appendChild(deletebutton);
        deletebutton.addEventListener('click', () =>{
            this.noteList.removeChild(noteItem);
        });
    }
    saveNote(){
        const newNote = JSON.stringify(this.notes);
        localStorage.setItem('notes', newNote);
    }
    retrieveNote(){
        const data = localStorage.getItem('notes');
        if(data){
            const arrayNote = JSON.parse(data);
            this.notes =arrayNote;

            for(let b = 0; b< this.notes.length; b++){
                const note = this.notes[b];
                this.createNote(note);
            }
        }
    }
    // deleteNote(){
    //     const existingArray = localStorage.getItem('notes');
    //     if(existingArray){
    //         const data = JSON.parse(existingArray);
    //         this.notes = data;
    //         for(let b = 0; b<this.notes.length; b++){
    //             if(this.notes[b]===this.currentValue){
    //                 const newArray = this.notes.filter(item=>item!==this.notes[b]);
    //             }
    //         }
    //     }
    // }
}
const myNote = new Note();
myNote.retrieveNote();