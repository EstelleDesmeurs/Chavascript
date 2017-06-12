/*
Télécharger fichier "file.zip"
Utiliser fonctions apprises pour modifier le DOM :
Crée des éléments, ajoute les au DOM (h4, p, li, th, td)
Ajouter des classes (regarde le fichier css)
Supprimer des classes (que ce soit plus joli)
Ajouter la classe "shadow" à tous les paragraphes
Reminder

Selecteurs

document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
document.querySelector()
document.querySelectorAll()
Création d'éléments

document.createElement()
element.appendChild()
Manipulation de classes CSS

element.className
element.classList.remove()
element.classList.add()
element.classList.toggle()
Manipulation CSS

element.style ( ex : element.style.backgroundColor = "blue")
Autres

element.id
element.innerHTML
element.innerText

-------------------------------------
var monFirstParagraph = document.getElementById("first-paragraph");

monFirstParagraph.classList.remove("bg-lime");
monFirstParagraph.classList.add("black");

var mesTds = document.getElementsByTagName("td");

for(let i = 0; i < mesTds.length; i++){
    mesTds[i].classList.add("bg-yellow") ;
    console.log( mesTds[i] );
}
-------------------------------------
*/

var doc = document.getElementsByClassName("orange");

doc.classList.remove()