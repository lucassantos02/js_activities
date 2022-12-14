console.log(`Ativdade 1`);

function cubo10(){
    for(let i = 1 ; i <= 10 ; i++){
        let cubo = i * i * i;
        console.log(`${i}³ = ${cubo}`);
    };
};
cubo10();

console.log(`Ativdade 2`);


function divisiveisPor(){
    for(let i = 1; i<=100; i++){;
        if(i % 10 == 0){
            console.log(i)
        };
    };
};
divisiveisPor();


console.log(`Ativdade 3`);

function posicaoLetra(palavra,numero){
    if(numero <= `${palavra}`.length && numero >= 0){
        let letra = palavra[numero];
        console.log(letra);
    };
};
posicaoLetra("Lucas",2); 


console.log(`Ativdade 4`);

function palavraRecortada(word,number){
    let recorte = word.slice(0, number);
    console.log(recorte);
    };
palavraRecortada("Lucas",2);


console.log(`Ativdade 5`);

function palavraResto(palavra,numero){
    console.log(palavra.slice(numero));
};
palavraResto("Lucas", 2);


console.log(`Ativdade 6`);

let vogais = ["a","e","i","o","u"];
function contaVogais(palavra){
    let numeroVogais = 0;
    for(let letra of palavra.toLowerCase()){
        if(vogais.includes(letra)){
            numeroVogais++;
        };
    };
    return numeroVogais;
};
let palavra = prompt("Insira sua palavra aqui..");
let numeroVogais = contaVogais(palavra);

console.log(numeroVogais);


console.log(`Ativdade 7`);

let palavra1 = " ";
function textoDeTrasParaFrente(texto){
    
    for(let i = `${texto}`.length -1; i >= 0; i--){
        palavra1 += texto[i];
    };
    console.log(palavra1);
};
textoDeTrasParaFrente("texto")


console.log(`Ativdade 8`);

function removeEspacos(texto){
    console.log(texto.replace(/\s+/g, ''));
};
removeEspacos("Olá meu nome é Lucas.");
