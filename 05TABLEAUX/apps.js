// Deux manières :
// ancienne : var liste = new Array (); 
// Courante : var liste = ["valeur1", "valeur2"];
// console.log( liste); --> pour afficher
// console.log( liste[1] ); --> pour afficher 1 (donc deuxième élément)

// PAS de tableaux associatifs. --> juste possibilité de tableaux multidimensionnels.
// On peut stocker TOUT type de donnée dans un tableau.

//dans concole : mettre les parenthèses pour éxécuter la fonction. sinon, rien, seulement montre la fonction dans la console.

// pour faire 'count(liste)' de php, --> js plus simple : rajoute la length (compte automatiquement le nombre d'éléments! youhou)
// console.log(liste.length); -> retourne 3
// console.log ( liste[2] ); -> retourne "le troisième valeur".
// console.log( liste[liste.length - 1] ); -> retourne aussi la troisième valeur (car donne 2, comme length est 3, est donnera donc la    dernière valeur du tableau)

// exemple avec une boucle : for (var i = 0; i < liste.length; i++){
//                                  console.log ( liste[i] );
//                              }
// => pour faire tour d'un tableau.

// PUSH et POP :
// push rajoute un élément au tableau (ici liste) : liste.push("valeurARajouter"); (rajoute TOUJOURS à la fin du tableau)
// pop retire le dernier élément : liste.pop();

// Pour ajouter un élément TOUJOURS au début : liste.unshift("valeurARajouter");
// Pour retirer le premier élément : liste.shift();


// quand on fait un console.log en javascript >> cliquer sur le '_proto_' pour avoir liste exhaustive de tout ce qui est possible de      faire en javascript. (dans l'inspecteur, hein.)


//EXERCICES !

var numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/*for (var i = 0; i < numberList.length - 1; i++) {
  console.log( numberList[i+1] = numberList[i+1] + numberList[i] ); //affiche chaque étape d'addition
}
*/
var add = 0;
for (var i = 0; i < numberList.length; i++) { 
add = add + numberList[i];
    //autre manière : add+= valeur[i];
}
console.log(add); //affiche le total

//Exercie 2 :

var actorsNames = ["Actor 1", "Actor 2", "Actor 3"];
var declaration = ["premier", "deuxième", "troisième"];

for( var i = 0; i < actorsNames.length; i++) {
    console.log ( "Le "+declaration[i]+ " acteur est " + actorsNames[i] );
}




// Exercice 3 :

var tableau = ["Mario", "Luigi", "Peach"];
var sliced = tableau.slice();
sliced.push = ["Bowser"];
console.log(tableau);
console.log(sliced);

// ou var des deux tableaux polus boucle : premier tableau avec les trois valeurs et deuxiemetableau = []; 
//for (var i = 0; i<premiertableau.length; i++){deuxiemetableau.push(premiertableau[i]);}