//Crée un objet "Character" qui contient les informations suivantes :
//name (string)

//age (numero)

//items_to_give (tableau)

//afficher chaque information sur une ligne séparés dans la console (for in)

//faire une fonction "giveItem" qui permet au PNJ de donner un objet aléatoirement
let character = {
	"name" : "Ursule",
	"age" : 42,
	"itemsToGive" : ["sword", "poison", "shoes"],
	giveItem : function(){
		console.log(this.itemsToGive[Math.round(Math.random()*2)]);
	}
};
// ou >> giveItem : function(){
//	let random
}
for (let key in character){
	console.log(key)
	console.log(character[key])	
};

character.giveItem();
/*Crée un tableau avec des objets à vendre (épée, hache, sceptre, etc.)

Caractéristique de chaque objet :

title (string)
physic (int)
magic (int)
minLevel (int)
available (boolean)
Manipulation :

faire une fonction pour afficher tout les objets
faire une fonction pour afficher les objets disponibles
faire une fonction pour afficher les objets dont le niveau minimum est de 10
*/

let sword = {
		"title" : "sword",
		"physic" : 8,
		"magic" : 12,
		"minLevel" : 5,
		"available" : 1
	};
let ax = {
		"title" : "ax",
		"physic" : 3,
		"magic" : 8,
		"minLevel" : 10,
		"available" : 0
	};
let scepter = {
		"title" : "scepter",
		"physic" : 34,
		"magic" : 22,
		"minLevel" : 10,
		"available" : 1
	};
let shield = {
		"title" : "sword",
		"physic" : 23,
		"magic" : 2,
		"minLevel" : 10,
		"available" : 0
	};

let itemsToSell = [sword, ax, scepter, shield];

let showObjects = function(){
	for(let i = 0; i < itemsToSell.length; i++) {
		console.log(itemsToSell[i].title);
	}
}
showObjects();

let available = function() {
	for(let i = 0; i< itemsToSell.length; i++) {
		if (itemsToSell[i].available) {
			console.log(itemsToSell[i].available + " est disponible.")
		}
	}
}
available();

let minLevel = function() {
	for(let i = 0; i< itemsToSell.length; i++) {
		if (itemsToSell[i].minLevel >= 10) {
			console.log(itemsToSell[i].minLevel + " est disponible.")
		}
	}
}
minLevel();

/*crée un objet "mainCharacter" qui possède le propriétés suivantes :
name (string)
level (int)
life (int)
weapon (object)
attack (function)
l'objet "weapon" possède les propriétés suivantes :
name (string)
damage (int)
Appeler la fonction "attack" du personnage
la fonction doit retourner : (le nom du personnage) attaque avec l'arme (nom de l'arme)
 les dégâts sont (niveau du personnage multiplié par le damage de l'arme)
 */

 let mainCharacter = {
	"name" : "Berthe", 	
	"level" : 4,
	"life" : 7,
	"weapon" : ["sword", 4,],
	attack : function(){
		console.log(this.name + " attaque avec l'arme " + this.weapon[0] + " les dégâts sont de "
			+ (this.level*this.weapon[1]));
	}
 };

 mainCharacter.attack();

 //ou : créer un autre objet pour weapon => let sword = {"title : "sword", "damages" : 4}; 
 //puis dans object mainCharacter = {... "weapon" : sword, ...}
 // donc => console.log(this.name + "blablabla" + this.weapon + "blablabla" + this.level*sword.damages)

 /*crée un objet "character" qui possèe le propriétés suivantes :
name (string)
level (int)
life (int)
weapon (object)
attack (function)
receiveDamage (function)
l'objet "weapon" possèe les propriétés suivantes :
name (string)
damage (int)
crée un objet "opponentCharacter" a partir de character

crée un objet "mainCharacter" a partir de character

Appeler la fonction "attack" de "mainCharacter" afin qu'il attaque "opponentCharacter"

la fonction doit afficher dans la console (ligne par lige)
(le nom du personnage) attaque (nom de l'adversaire)
avec l'arme (nom de l'arme)
et lui inflige (niveau du personnage multiplié par le damage de l'arme) de dégats
(nom de l'adversaire) a maintenant (life de l'adversaire) de vie
*/

let character2 = {
	"name" : "Pepe",
	"level" : 12,
	"life" : 3,
	"weapon" : ["dagger", 3],
	attack : function(){
		console.log(this.name + " attaque avec l'arme " + this.weapon[0] + " les dégâts sont de "
			+ (this.level*this.weapon[1]));
	},
	receiveDamage : function(){
		console.log(this.name + " a reçu " + (mainCharacter.level*mainCharacter.weapon[1]) + " de dégâts par "
			+ mainCharacter.name + " à cause de son " + mainCharacter.weapon[0]);
	}
};

character2.receiveDamage();

let opponentCharacter2 = Object.create(character);
	opponentCharacter2.name = "nnnnn";
	opponentCharacter2.level = 52;
	opponentCharacter2.life = 23;

let mainCharacter2 = Object.create(character);
	mainCharacter2.name = "eeee";
	mainCharacter2.level = 34;
	mainCharacter2.life = 33;