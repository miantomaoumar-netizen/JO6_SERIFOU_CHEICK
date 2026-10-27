// J06 — Bilan des dépenses 
// Type : number[] ; unité de chaque élément : FCFA.
const depensesSemaine = [1500, 2500, 0, 4000, 1000, 2500, 3000];

// TODO 1 : retourner le total en FCFA avec reduce.
function calculerTotal(depenses) {
   return depenses.reduce((somme, montant) => somme + montant, 0)
}

// TODO 2 : retourner la moyenne par jour ; 0 si le tableau est vide.
function calculerMoyenne(depenses) {
  if (depenses.length === 0) {
    return 0;
  }
  return calculerTotal(depenses) / depenses.length;
}

// TODO 3 : retourner les montants strictement supérieurs à 2000 FCFA.
function filtrerGrossesDepenses(depenses) {
  return depenses.filter((montant) => montant > 2000);
}

// TODO 4 : retourner la plus grande dépense ; 0 si le tableau est vide.
function trouverMaximum(depenses) {
  if (depenses.length === 0) {
    return 0;
  }
  return Math.max(...depenses);
}

// TODO 5 : créer une copie triée, puis afficher le rapport demandé.
const copieTriee = [...depensesSemaine].sort((a, b) => a - b);


console.log("Tableau initial (avant tri) :[" +depensesSemaine + "]");
console.log("Total :" +calculerTotal(depensesSemaine)+ "FCFA");
console.log("Moyenne par jour :" +calculerMoyenne(depensesSemaine).toFixed(2)+ "FCFA");
console.log("Dépenses au-dessus de 2000 :[" + filtrerGrossesDepenses(depensesSemaine) + "]");
console.log("Maximum :" +trouverMaximum(depensesSemaine)+ "FCFA");
console.log("Copie triée :[" +copieTriee + "]");
console.log("Tableau initial (après tri) :[" + depensesSemaine + "]");
