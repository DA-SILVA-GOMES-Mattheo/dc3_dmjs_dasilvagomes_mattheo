function verrificationDuplicat(tableau) {

    for (let i = 0; i < tableau.length; i++) {

        for (let j = i + 1; j < tableau.length; j++) {

            if (tableau[i] === tableau[j]) {

                return true;

            }

        }

    }

    return false;

}


let valeurs = [1, 6, 3, 9, 2, 4, 7, 8, 5, 1];

console.log(verrificationDuplicat(valeurs));