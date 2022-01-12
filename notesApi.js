class NotesApi {
 
  loadNotes(callback) {
    fetch('http://localhost:3000/notes')
    .then(response => response.json())
    .then(notesData => callback(notesData))
  }
  
  createNote() {
    const data = { 'content': 'TESTING-2' };

fetch('http://localhost:3000/notes', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
   }
 }

 api = new NotesApi()
 api.createNote()
module.exports = NotesApi;

