(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesApi.js
  var require_notesApi = __commonJS({
    "notesApi.js"(exports, module) {
      var NotesApi2 = class {
        loadNotes(callback) {
          fetch("http://localhost:3000/notes").then((response) => response.json()).then((notesData) => callback(notesData));
        }
        createNote() {
          const data = { "content": "TESTING-2" };
          fetch("http://localhost:3000/notes", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          }).then((response) => response.json()).then((data2) => {
            console.log("Success:", data2);
          }).catch((error) => {
            console.error("Error:", error);
          });
        }
      };
      api = new NotesApi2();
      api.createNote();
      module.exports = NotesApi2;
    }
  });

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notes = [];
        }
        getNotes() {
          return this.notes;
        }
        addNote(note) {
          this.notes.push(note);
        }
        setNotes(notes) {
          this.notes = notes;
        }
        reset() {
          this.notes = [];
        }
      };
      module.exports = NotesModel2;
    }
  });

  // notesViews.js
  var require_notesViews = __commonJS({
    "notesViews.js"(exports, module) {
      var NotesViews2 = class {
        constructor(model2) {
          this.model = model2;
          this.mainContainerEl = document.querySelector("#main-container");
          this.button = document.querySelector("#btn");
          this.button.addEventListener("click", () => {
            const inputValue = document.getElementById("input-note").value;
            this.addNewNote(inputValue);
          });
        }
        addNewNote(inputValue) {
          this.model.addNote(inputValue);
          this.displayNotes();
          document.getElementById("input-note").value = "";
        }
        displayNotes() {
          document.querySelectorAll(".note").forEach((note) => note.remove());
          const notes = this.model.getNotes();
          for (let i = 0; i < notes.length; i++) {
            const div = document.createElement("div");
            div.className = "note";
            div.innerText = notes[i];
            this.mainContainerEl.append(div);
          }
        }
      };
      module.exports = NotesViews2;
    }
  });

  // index.js
  var NotesApi = require_notesApi();
  var NotesModel = require_notesModel();
  var NotesViews = require_notesViews();
  var model = new NotesModel();
  var api2 = new NotesApi();
  var view = new NotesViews(model, api2);
  api2.loadNotes((notes) => {
    model.setNotes(notes);
    view.displayNotes();
  });
  api2.createNote();
})();
