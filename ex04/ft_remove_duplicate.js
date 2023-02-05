function suppressionDoublon(tableau) {

    const valeurs = [];

    for (let i = 0; i < tableau.length; i++) {

        if (valeurs.indexOf(tableau[i]) === -1) {

            valeurs.push(tableau[i]);

        }

    }

    return valeurs;

}


const values = [152, 8, 36, 125, 8, 3, 152, 76];

console.log(suppressionDoublon(values));
