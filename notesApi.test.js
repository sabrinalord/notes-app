
require('jest-fetch-mock').enableMocks();
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
});