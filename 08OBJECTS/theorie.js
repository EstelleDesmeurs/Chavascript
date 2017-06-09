// Déclarer un objet :
//var nomObjet = {};

//exemple:
var couleur = "roux";
var exemple = {
	"name" : Danette,
	"age" : 17,
	"genre" : femme,
	"musiques" : ["ert", "aze", "ty"]
	"cheveux" : couleur, // peut aller chercher une variable déclarer plus tôt.
	parle : function(){
		console.log("Bonjour je suis " + this.name); // 'this' renvoie à l'objet dans lequel se trouve la méthode*.
	}
}; //marche un peu comme un tableau associatif en php.

exemple.parle();

// * on dit méthode dans ce cas et non fonction.


// Créer un autre objet à partir d'un objet :

var autreObjet = Object.create(exemple); 
// autreObjet est une référence à exemple (si je touche à autrObjet je touche aussi à exemple. 
//instance => quand j'en touche une je touche pas l'autre.
		autreObjet.name = "Autre";

