/*
Exercice 1 :  
Écrivez une fonction nommée add qui prend deux paramètres (a et b) et renvoie leur somme.

function add(a, b) {
  return a + b;
}
let result = add(2, 3);
console.log(result); //Affiche 5 

-------------------------------------------------------------------------------------------------------
Exercice 2 : 
Créez une fonction multiply qui prend deux paramètres (x et y) et renvoie leur produit par additions successives.

function multiply(x, y) {
    let result = 0;

    // Utilisation d'une boucle pour additionner x à result y fois
    for (let i = 0; i < y; i++) {
        result += x;
    }

    return result;
}

// Exemple d'utilisation :
let produit = multiply(5, 3);
console.log(produit); // Affichera 15 (car 5 * 3 = 15)

---------------------------------------------------------------------------------------------------------
Exercice 3 : 
Écrivez une fonction isEven qui prend un nombre en paramètre et renvoie true s'il est pair et false s'il est impair.

function isEven(nombre) {
    return nombre % 2 === 0;
}

// Exemples :
console.log(isEven(2)); // Affichera true
console.log(isEven(9)); // Affichera false

(Cette fonction utilise l'opérateur modulo %, qui renvoie le reste de la division du premier nombre par le deuxième.
 Si le reste est égal à zéro, cela signifie que le nombre est pair, et la fonction renvoie true. Sinon, elle renvoie false.)

 -------------------------------------------------------------------------------------------------------


 Exercice 4 : 

Écrivez une fonction reverseString qui prend une chaîne de caractères en entrée et renvoie cette chaîne inversée.

function reverseString(chaine) {
    // Utilisation de la méthode split pour diviser la chaîne en tableau de caractères
    // Utilisation de la méthode reverse pour inverser l'ordre des éléments du tableau
    // Utilisation de la méthode join pour rejoindre les caractères en une chaîne inversée
    return chaine.split('').reverse().join('');
}

// Exemple :
let chaineOriginale = "Bonjour";
let chaineInverse = reverseString(chaineOriginale);

console.log(chaineInverse); // Affichera "ruojnoB"
---------------------------------------------------------------------------------------------------------

Exercice 5 :

function findMax(tableau) {
    // On vérifie que le tableau est vide
    if (tableau.length === 0) {
        return undefined; //undefined si le tableau est vide
    }

    let max = tableau[0]; // Supposons que le premier élément est le plus grand

    // Parcourir le tableau pour trouver le nombre le plus élevé
    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i] > max) {
            max = tableau[i]; // Mettre à jour le maximum si un nombre plus grand est trouvé
        }
    }

    return max;
}

// Exemple d'utilisation :
let nombres = [3, 7, 2, 8, 1, 9, 4];
let plusGrandNombre = findMax(nombres);

console.log(plusGrandNombre); // Affichera 9

(Cette fonction parcourt le tableau en comparant chaque élément au maximum actuel.
 Si un élément plus grand est trouvé, le maximum est mis à jour. Finalement, le maximum est renvoyé.
  Notez que si le tableau est vide, la fonction renverra undefined.)


--------------------------------------------------------------------------------------------------------------------------
Exercice 6 :

function capitalizeWords(phrase) {
    // on divise la phrase en un tableau de mots
    let mots = phrase.split(' ');

    // Capitaliser chaque mot
    let motsCapitalises = mots.map(function(mot) {
        return mot.charAt(0).toUpperCase() + mot.slice(1);
    });

    // Joindre les mots capitalisés pour former la phrase finale
    let phraseCapitalisee = motsCapitalises.join(' ');

    return phraseCapitalisee;
}

// Exemple d'utilisation :
let phraseOriginale = "bonjour à tous";
let phraseCapitalisee = capitalizeWords(phraseOriginale);

console.log(phraseCapitalisee); // Affiche "Bonjour À Tous"
Dans cette fonction, split(' ') est utilisé pour diviser la phrase en un tableau de mots. Ensuite, la méthode map est utilisée pour itérer sur chaque mot et le capitaliser en ajoutant la première lettre en majuscule (toUpperCase()) au reste du mot (slice(1)). Enfin, les mots capitalisés sont joints pour former la phrase finale avec la méthode join(' ').



 */



