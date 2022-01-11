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

  it('allows user to add a new note', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model = new NotesModel();
    const view = new NotesViews(model);
    const input = document.getElementById('input-note');
    input.value = "Buy bananas";
    document.querySelector('#btn').click();
    expect(document.querySelector('.note').innerText).toBe('Buy bananas');
  })

  it('adds the correct number of notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model = new NotesModel();
    const view = new NotesViews(model);
    
    model.addNote("Buy bananas");
    model.addNote("Buy panettone");

    view.displayNotes();
    view.displayNotes();
    
    expect(document.querySelectorAll('.note').length).toBe(2)
  })
})
