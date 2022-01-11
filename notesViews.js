class NotesViews {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
    this.button = document.querySelector('#btn');
    
    this.button.addEventListener('click', () => {
      const inputValue = document.getElementById('input-note').value;
      this.addNewNote(inputValue)    
    });
  }

  addNewNote(inputValue) {
    this.model.addNote(inputValue);
    this.displayNotes();
  }

  displayNotes() {

    const notes = this.model.getNotes()
    for(let i = 0; i < notes.length; i++) {
      const div = document.createElement('div');
      div.className = 'note';
      div.innerText = notes[i];
      this.mainContainerEl.append(div);
    }
  }


}

module.exports = NotesViews;