const text = document.querySelector(".text");
const button = document.querySelector(".button");
const noteContainer = document.querySelector(".Add-container");
const reset = document.getElementById("reset");
const sort = document.querySelector(".sort");


let sorted = false;

button.addEventListener("click", () => {
    if (text.value.trim() !== "") {
        
        notes.push(text.value.trim());
        updateNotes();
        text.value = "";
        // text.style.border = "none";
        // reset.style.display = "none";
     
    } else {
        alert("Daxil edin");
        // text.style.border = "block";
        // reset.style.display = "block";
    }
   
  
   
});


reset.addEventListener("click", () => {
    text.value = "";
});

sort.addEventListener("click", () => {
    if (sorted === false) {
        notes.sort((a, b) => {
            return a.localeCompare(b);
        })
        sorted = true;
        sort.firstElementChild.classList.add("fa-arrow-up-short-wide")
        sort.firstElementChild.classList.remove("fa-arrow-down-short-wide")
    } else if (sorted === true) {
        notes.sort((a, b) => {
            return b.localeCompare(a);
        })
        sorted = false;
        sort.firstElementChild.classList.add("fa-arrow-down-short-wide")
        sort.firstElementChild.classList.remove("fa-arrow-up-short-wide")
    }
    sortNotes();
})

let notes = [];

function updateNotes() {
    noteContainer.innerHTML = "";
    notes.forEach((note, index) => {
        const noteDiv = document.createElement("div");
        noteDiv.classList.add("note");
        const noteParagraph = document.createElement("p");
        noteParagraph.textContent = note;
        const removeButton = document.createElement("i");
        removeButton.classList.add("ri-close-circle-line");
        removeButton.addEventListener("click", () => {
            notes.splice(index, 1);
            updateNotes();
        });
        noteDiv.append(noteParagraph, removeButton);
        noteContainer.appendChild(noteDiv);
    });
}

function sortNotes() {
    notes.sort((a, b) => sorted ? a.localeCompare(b) : b.localeCompare(a));
    updateNotes();
}
