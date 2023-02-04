function valeursMax(array) {

    let valeur1 = 0;

    let valeur2 = 0;

    for (let i = 0; i < array.length; i++) {

        if (array[i] > valeur1) {

            valeur2 = valeur1;

            valeur1 = array[i];

        } else if (array[i] > valeur2) {

            valeur2 = array[i];

        }

    }

    return [valeur1, valeur2];

}

let  numbers = [10,6,2,8,4,12];

  console.log(valeursMax(numbers));