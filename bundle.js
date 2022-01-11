(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

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
        }
        displayNotes() {
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
  var NotesModel = require_notesModel();
  var NotesViews = require_notesViews();
  var model = new NotesModel();
  var view = new NotesViews(model);
})();
