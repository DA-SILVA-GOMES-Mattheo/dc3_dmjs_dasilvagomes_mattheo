function valeurUnique(tableau) {

    let valeurs = {};

    for (let i = 0; i < tableau.length; i++) {

        if (valeurs[tableau[i]]) {

            return false;

        }

        valeurs[tableau[i]] = true;

    }

    return true;

}

// vrai

let tableau = [20, 40, 60, 80];

console.log(valeurUnique(tableau));

// faux

//tableau = [20, 40, 60, 80, 80];

//console.log(valeurUnique(tableau));