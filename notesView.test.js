/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesModel = require('./notesModel');
const NotesViews = require('./notesViews');

describe('NotesView', () => {
  it('display the notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model = new NotesModel();
    const view = new NotesViews(model);
    view.model.addNote('Get bread');
    view.model.addNote('Get Milk');
    view.displayNotes();
    expect(document.querySelectorAll('.note').length).toBe(2);
  })
})
