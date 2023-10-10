 
//EXERCICE 1
//Écrivez un programme JavaScript qui affiche "Bonjour, monde !" dans la console.
console.log("Bonjour, monde !");
//----------------------------------------------------------------------------------

//EXERCICE 2
//Créez une fonction qui prend deux nombres en entrée et
//les additionne. Appelez cette fonction et affichez le résultat dans la console.
function additionner(a, b) {
    return a + b;
  }
  
  // Appeler la fonction avec deux nombres
  var nombre1 = 5;
  var nombre2 = 10;
  var resultat = additionner(nombre1, nombre2);
  
  // Afficher le résultat dans la console
  console.log("Le résultat de l'addition est : " + resultat);

  //--------------------------------------------------------------------------------
  //EXERCICE 3 

  //Écrivez un programme JavaScript qui vérifie si un nombre est pair ou impair et
//affiche le résultat dans la console
  function verif(nombre) {
    if (nombre % 2 === 0) {
      console.log(nombre + " est un nombre pair.");
    } else {
      console.log(nombre + " est un nombre impair.");
    }
  }
  
  // Tester la fonction avec un nombre
  var nombreTest = 7;
  verif(nombreTest);
  //----------------------------------------------------------------------------------
  //EXERCICE 4
  //Créez un tableau contenant trois noms, puis bouclez sur le tableau pour afficher chaque nom dans la console.
  
var noms = ["Alice", "Bob", "Charlie"];

// Boucler sur le tableau et afficher chaque nom dans la console
for (var i = 0; i < noms.length; i++) {
  console.log("Nom " + (i + 1) + ": " + noms[i]);
}

//---------------------------------------------------------------------------------------
//EXERCICE 5

//Écrivez un programme JavaScript qui demande à l'utilisateur son prénom, 
//puis affiche "Bonjour, [prénom] !" dans une boîte de dialogue.

var prenom = prompt("Veuillez entrer votre prénom :");

// Afficher un message de salutation dans une boîte de dialogue
alert("Bonjour, " + prenom + " !");

//-------------------------------------------------------------------------------------------
//EXERCICE 6
//Système de multiplication
function calculerAire(largeur, hauteur) {
    var aire = largeur * hauteur;
    return aire;
  }
  
  var LRectangle = 5;
  var HRectangle = 10;
  
  // Appeler la fonction pour calculer l'aire du rectangle
  var aireRectangle = calculerAire(LRectangle, HRectangle);
  
  // Afficher le résultat dans la console
  console.log("L'aire du rectangle est : " + aireRectangle);

//------------------------------------------------------------------------------------------
//EXERCICE 7
//OUPS JE NE SAIS PAS
//-----------------------------------------------------------------------------------------
//EXERCICE 8
function calculerLongueurChaine(chaine) {
    return chaine.length;
  }
  
  // Chaîne de caractères à tester
  var maChaine = "Bonjour, monde !";
  
  // Appeler la fonction pour calculer la longueur de la chaîne
  var longueur = calculerLongueurChaine(maChaine);
  
  // Afficher le résultat dans la console
  console.log("La longueur de la chaîne est : " + longueur);