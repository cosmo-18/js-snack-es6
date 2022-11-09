// Snack 1
// Dato l'array di nomi:
// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// e dati due numeri min e max (min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.
// esempio: dati i valori min: 2 e come max: 4 i nomi nell'array nuovo saranno i nomi compresi tra queste posizioni 2 e 4


const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

const newArray = [];

let min = parseInt (prompt('inserisci un numero "piccolo"'));
let max = parseInt (prompt('inserisci un numero "grande"'));

function recuperoNomi (min, max) {
    myArray.forEach((elemento, index)=> {
        if (index>= min && index <= max) { 

         newArray.push (elemento);

    } 
  } ) ; 
}

recuperoNomi(min,max);

console.log(newArray);


// Snack 2
// Dato un elenco degli studenti di una facoltà, con il totale dei loro voti
// let students = [
//     { name: 'Marco', id: 213, grades: 78 },
//     { name: 'Paola', id: 110, grades: 96 },
//     { name: 'Andrea', id: 250, grades: 48 },
//     { name: 'Gaia', id: 145, grades: 74 },
//     { name: 'Luigi', id: 196, grades: 68 },
//     { name: 'Piero', id: 102, grades: 50 },
//     { name: 'Francesca', id: 120, grades: 84 },
//   ];
// 1- Dobbiamo creare delle targhe con il loro nome in maiuscolo. Ci serve quindi un nuovo array di stringhe. Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.
// 2-  Dobbiamo creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70
// 3-  Dobbiamo creare un nuovo array di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120


let studenti = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
  ];

const stampatello = studenti.map((element) => {
    return element.name.toUpperCase();
});

console.log(stampatello);

const votiAlti = studenti.filter((element) => element.grades >= 70);
console.log(votiAlti);

const VotiSuperiori = studenti.filter((element) => votiAlti.includes(element) && element.id > 120);
console.log(VotiSuperiori);


// Snack 3
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bici =[
    {name: 'Legnano', peso:10},
    {name:'Bianchi', peso: 8},
    {name: 'Graziella', peso:11}
];

let biciLeggera = bici [0];

for (let i=0; i< bici.length; i++ ){

let elementoCorrente = bici[i];
let {peso} = elementoCorrente;

if( peso < biciLeggera.peso ){
    biciLeggera = elementoCorrente;
}

}

console.log(biciLeggera)

// Snack4
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


const squadre = [
    {nome: 'Genova', punti_fatti: 0, falli_subiti: 0},
    {nome: 'Juventus', punti_fatti: 0, falli_subiti: 0},
    {nome: 'Roma', punti_fatti: 0, falli_subiti: 0},
    {nome:'M.Franca', punti_fatti: 0, falli_subiti: 0}
];

let squandra= {
    nome:'Genova',
    punti_fatti:0,
    falli_subiti: 0
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max -min + 1) ) + min;
}



const squadreCopia = squadre.map ( ({nome, punti_fatti, falli_subiti} )=>{
   punti_fatti = getRandomInt(1,100);
   falli_subiti= getRandomInt (1,100);

   return {punti_fatti, falli_subiti, nome}

})


console.log(squadreCopia)

