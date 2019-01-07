function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
var graph = document.getElementById('diag');
var names = [
    "Jean-Pierre",
    "Bruno",
    "Xavier",
    "Issa",
    "Juliette",
    "Ching",
    "Chong",
    "Marie-Joseph",
    "Jean-José",
    "Mohamed",
    "Christine",
    "Aurélie",
    "Jacouille",
    "Jaqueline",
    "Chirac",
    "Claude",
    "Pierre",
    "Pierrette",
    "Claudine",
    "Victor"
];

var notes = [
    15,
    12,
    8,
    2,
    13,
    18,
    18,
    2,
    10,
    13,
    8,
    16,
    19,
    7,
    10,
    14,
    14,
    20,
    12,
    6
];

var nbGens = 20;

var tabGens = new Array(nbGens);
var lineTab = new Array(nbGens);
var tableau = document.getElementById('tableau');

for(let i = 0; i < nbGens; i++){
    tabGens[i] = document.createElement('div');
    tabGens[i].style.backgroundColor = getRandomColor();
    tabGens[i].style.height = ((notes[i]/20)*500 + "px");
    tabGens[i].classList.add('case');
    graph.appendChild(tabGens[i]);
    lineTab[i] = {
        parent: document.createElement('tr'),
        elmt1: document.createElement('th'),
        txt1: document.createTextNode(i+1),
        elmt2: document.createElement('td'),
        txt2: document.createTextNode(names[i]),
        elmt3: document.createElement('td'),
        txt3: document.createTextNode(notes[i])
    }
    lineTab[i].elmt1.appendChild(lineTab[i].txt1);
    lineTab[i].elmt2.appendChild(lineTab[i].txt2);
    lineTab[i].elmt3.appendChild(lineTab[i].txt3);
    lineTab[i].parent.style.scope = 'row';
    lineTab[i].elmt2.classList.add('name');
    lineTab[i].elmt3.classList.add('note');
    lineTab[i].parent.appendChild(lineTab[i].elmt1);
    lineTab[i].parent.appendChild(lineTab[i].elmt2);
    lineTab[i].parent.appendChild(lineTab[i].elmt3);
    tableau.appendChild(lineTab[i].parent);
}

var modify = function(){
    this.tagName = 'input';
}
var nameChanger = document.getElementsByClassName('name');
var noteChanger = document.getElementsByClassName('note');

for(let i= 0; i < nameChanger.length; i++){
    nameChanger[i].addEventListener('click', modify());
}