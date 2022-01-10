class NotesViews {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
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