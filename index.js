// Exercice: Inverser une chaine de caractère
// Ecrire une fonction qui prend une chaine de caractère en entrée et RETOURNE cette chaine mais inversée

let string = "Dkrkj";

console.log(string);

function reverseString(str) {
  return str.split("").reverse().join("");
  //str.split("") casse le string et met chaque lettre dans un tableau
  //.reverse() inverse la chaine les lettres ds le tableau crée par .split(""):  ['e', 'u', 'q', 'i', 't', 'a', 'm', 'o', 'r', 'h', 'C']
  //.join() transforme un tableau en string. ("") dans .join("") permet de retirer les virgules du string
}

console.log(reverseString("Chromatique"));

//-----------------------------------------------------------------------------------

//Exercice : Trouver le + grand nombre du tableau
//Ecrire une fonction qui prend un tableau de nombres en entrée et retourne le plus graand nombre du tableau

const bigger = (array) => {
  let max = array[0]; // max initialisé sur 23 (1er élément du tableau à l'index[0])

  // ↓↓** i initialisé sur index array[1] donc 45 et boucle for se jouera 5x car initialisé au 2nd nombre du tableau :
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      // ↑↑** compare 45 à 23
      max = array[i]; // Donc max = 45 maintenant car > 23 puis la boucle se joue encore 4x (5 au total car initialisée array[1])
    }
  }
  return max; // Return avant de fermer la fonction
};

console.log(bigger([23, 45, 3, 5, 96, 8]));
//loguera 96

//-----------------------------------------------------------------------------------

//Exercice: Filtrer les nombres PAIRS d'un Tableau
//Ecrire une fonction qui prend un tableau de nombres en entrée et retourne un tableau contenant seulement les nombres pairs

const filtrePairs = (array) => {
  let array2 = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      // Si le reste de chaque nombre du tableau /2 = 0 alors tu m'envoies ces nombres dans un autre tableau array2
      array2.push(array[i]); // .push() pour envoyer un nombre ds un tableau
    }
  }
  return array2;
};

console.log(filtrePairs([23, 45, 3, 5, 96, 8]));

//-----------------------------------------------------------------------------------

// Exercice: Filtrer les mots longs
//Créer un fontion qui prend un tableau de mots et longueurMinMot et retourne uniquement les mots plus long que longueurMinMot

function filtreMotsLongs(array, longueurMinMot) {
  let array2 = [];
  for (i = 0; i < array.length; i++) {
    if (array[i].length > longueurMinMot) {
      array2.push(array[i]);
    }
  }
  return array2.join(" "); // retoune le tableau tranformé en string avec un espace entre les mots. ( Rappel: .join("") transforme tableau en string)
}

console.log(filtreMotsLongs(["Macron", "LePen", "Asselineau", "Mélenchon"], 6));

//-----------------------------------------------------------------------------------

// Exercice Sommes des éléments d'un tableau
// Crée une fonction qui prend un tableau de nombres en entrée  et retourne l'addition de tous les éléments du tableau

const sommeElements = (array) => {
  let total = 0;
  for (i = 0; i < array.length; i++) {
    total += array[i]; // ajoute array[i à chaque tour de boucle sans l'écraser "+=" mais l'additionne à chaque fois]
  }
  return total;
};

console.log(sommeElements([2, 6, 84, 5, 55]));
//log 152

//-----------------------------------------------------------------------------------

//Exercice : obtenir 2eme plus grand nombre d'un tableau
// Créer une fonction qui prend en entrée un tableau et retourne le 2eme + grand nombre du tableau

function deuxiemePlusGrand(array) {
  let bigger = array[0];
  for (let j = 0; j < 2; j++) {
    bigger = array[0]; // réinitialise bigger pour le second tour de boucle sinon sa valeur reste à 84
    // Boucle intérieur fera 2 itérations car quand j=2 alors j plus inférieur à 2 donc la boucle s'excutera pas.  Seuls j=0 et j=1 s'éxécuteront
    for (let i = 0; i < array.length; i++) {
      if (array[i] > bigger) {
        bigger = array[i];
      }
    }
    let index = array.indexOf(bigger); //index() permet d'obtenir l'index de bigger ds le tableau array.
    if (j === 0) {
      array.splice(index, 1); //splice(index du tableau,nombre d'élément à retirer) permet de retirer du tableau un élément: ici bigger lors de itération 1 quand J=0
    }
  }
  return bigger; // Retournera le plus grand nombre du tableau de la 2nd itération (55) car le 1er + grand a été supprimé quand j=0 1ere itération
}
console.log(deuxiemePlusGrand([2, 6, 84, 5, 55]));

//-----------------------------------------------------------------------------------

// Exercice Nettoyer les string des number
// Créer une fonction qui prend en entrée une chaine de caractères qui contient des chiffres et qui retourne cette chaine sans les chiffres
// Ma fonction ci-dessous crée un tableau à partir de mon string et exclu du tableau tout ce qui n'est pas un chiffre et est un espace pour le mettre dans un nouveau tableau.
// Ainsi on a plus les chiffres ds le nouveau tableau qu'on remet en string

function cleanString(string) {
  let chaineformat = string.split(""); // crée un [] et sépare chaque caractère à l'intérieur
  const filteredChaine = chaineformat.filter((element) => {
    return isNaN(element) || element === " "; // Si élément n'est pas un nombre ou est un espace " ", alors il est envoyé dans un nouveau tableau contenu dans filteredChaine grace à .filter() qui crée un nouveau tableau
    // isNaN(element) || element === " " c'est la Fonction de Rappel, qui renvoie true si le test est vérifé et envoie les éléments qui ont passé le test dans un new tableau
  });
  //return filteredChaine; loguera :  ['T', 'h', 'i', 's', ' ', 'l', 'o', 'o', 'k', 's', ' ', 'g', 'r', 'e', 'a', 't', '!']
  return filteredChaine.join("");
}

console.log(cleanString("This looks5 grea8t!"));

//-----------------------------------------------------------------------------------

// Exercice : trouver le mot le plus long dans une phrase
//Créer une fonction qui prend en entrée une chaine de caractère et retourne le mot le plus long
// Si 2 mots de tailles identiques : renvoie le 1er

function motPlusLong(string) {
  let tableau = string.split(" ");
  let wordMax = tableau[0]; //initialisation sur le mot "La" (2 lettres)
  //   console.log(wordMax);
  for (let i = 1; i < tableau.length; i++) {
    if (wordMax.length < tableau[i].length) {
      wordMax = tableau[i]; // wordMax va save "programmation" (13 lettres) et le comparé à chaque fois au mot suivant
    }
  }
  return wordMax;
}

console.log(
  motPlusLong("La programmation en JavaScript est amusante et éducative")
);

//-----------------------------------------------------------------------------------

// Exercice : Compter les voyelles
// Creer une fonction qui prend un string en entrée et retourne le nombre de voyelles

const compterVoyelles = (string) => {
  let tableauString = string.split(""); // Casse le string et le met dans un tableau séparé par lettres
  let compteur = 0; // initialisation du compteur de voyelles

  for (let i = 0; i < string.length; i++) {
    if (string[i].match(/[aeiouy]/)) {
      // si dans le tableau il y a une lettre parmi aeiouy alors compteur augmente de +1 à chaque fois
      compteur++;
    }
  }
  return compteur;
};

console.log(compterVoyelles("Javascript"));

// autre méthode : ---------------------------

const howMuchVoyelle = (string) => {
  let compteur = 0;
  const voyelleRegex = /[aeiouy]/i; // la Regex contenu dans une variable

  for (let i = 0; i < string.length; i++) {
    if (voyelleRegex.test(string[i])) {
      // la méthode TEST.() comparare si voyelleRegex match avec l'un des index du string.
      compteur++;
    }
  }
  return compteur;
};

console.log(howMuchVoyelle("Developpement"));

//----------------------------------------------------------------

//Exercice Trouver les N plus grands nombres
//Creer une fonction qui prend en paramêtre un tableau de nombres et N et retourne les N + grands nombres du tableaux triés en décroissant

function nPlusGrands(array, n) {
  // trier tableau ordre décroissant:
  array.sort((a, b) => b - a);

  //conservation des data compris entre 0 et n (exclu) (donc = n)
  return array.slice(0, n); // de 0 à n = on conserve les data et en dehors de ça on supprime le reste
}

console.log(nPlusGrands([2, 7, 1, 8, 46, 9, 4], 2));
//Donc tableau retourné = [46, 9] ordre décroissant, on conserve que les 2 premiers car n = 2, de 0 à 2
// la méthode slice conserve les data de start inclu ([0]) jusqu'à end EXCLU ([2])
// Donc il garde index[0] et index[1] quand on dit slice(0, 2)
