function chaineInversee2(str) {

  let inversion = "";

  for (let i = str.length - 1; i >= 0; i--) {

    inversion += str[i];

  }

  return inversion;

}


let exemple = "Exemple";

console.log(chaineInversee2(exemple));