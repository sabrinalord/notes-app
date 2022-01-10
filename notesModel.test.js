const NotesModel = require('./notesModel')
const model = new NotesModel();

describe('Notes', () => {
  it('should return an empty list of notes', () => {
    expect(model.getNotes()).toEqual([]);
  });
  it('should add a note to the list', () => {
    model.addNote('Buy milk');
    expect(model.getNotes()).toContain('Buy milk');
  });
  it('should reset the list', () => {
    model.reset();
    expect(model.getNotes()).toEqual([]);
  })
  
})