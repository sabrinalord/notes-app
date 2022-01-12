require('jest-fetch-mock').enableMocks();
// const fetchMock = require('fetch-mock');
const NotesApi = require('./notesApi');

describe('Notes Api', () => {
  it('calls fetch and loads list of notes', async () => {
    const api = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify({
      body: ['This note is coming from the server']
    }));

    api.loadNotes(notes => {
      expect(notes.body[0]).toBe('This note is coming from the server');
    });
  });

  it('creates a note', () => {
    const api = new NotesApi();
    // const newNote = { content: 'Test' }
    // api.createNote(newNote)
    fetchMock.mockResponseOnce('http://localhost:3000/notes', { content: 'Test' }, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    api.createNote(newNote => {
      expect(newNote.content).toBe("Test")
    })
  })
  
});