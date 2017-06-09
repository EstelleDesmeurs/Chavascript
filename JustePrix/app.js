/*Exercice : Juste prix

Déclarez les variables suivantes :

Variable qui sera utilisée pour afficher un message
Variable qui va compter le nombre d'essais
Variable de la valeur minimum qu'on peut entrer (ici 20)
Variable de la valeur maximale qu'on peut entrer (ici 80)
Déclarez les fonctions suivantes :

crée une fonction qui retourne un numéro aléatoire arondi entre la variable minimale 
et la variable maximale
crée une fonction
qui prends un argument pour tester si le numéro qu'on a entré est le bon
la fonction retourne un de ces 3 messages : 
C'est plus, C'est moins,C'est juste tu as trouvé en X coups
Utiliser la console ou les fonctions natives suivantes :

window.prompt();
window.alert();
window.confirm();
*/

//let message = "";
let tried = 0;
let min = 20;
let max = 80;

function random () { 
	var number = Math.round(Math.random()*(max - min) + min);
	return number;
}
let memo = random();

console.log(memo); // pour test

function test(){
	let tries = prompt('Enter a number between 20 and 80 : ');
	tried++;
	console.log(tries);
		if (tries < memo) {
			window.alert("C'est plus!");
			test();
		}
		else if (tries > memo) {
			window.alert("C'est moins!");
			test();
		}
		else if (tries == memo) {
			window.alert("C'est juste! Tu as trouvé en " + tried + " coups.");
		}
}

test();

window.confirm('Voulez-vous rejouer?');



