function mapa() {
    const frutas = new Map();

    frutas.set("maçã", 500);
    frutas.set("banana", 300);
    frutas.set("laranja", 200);
    //frutas.set("pera", 200);
    frutas.set("pera", 400);

    let preco = frutas.get("pera");
    console.log(preco);

    console.log("--");

    //size é uma propriedade que armazena o tamanho do mapa
    console.log(frutas.size);
    
    console.log("--");

    //o método has() retorna verdadeiro ou falso para uma determinada chave
    console.log(frutas.has("banana"));

    console.log("--");

    frutas.forEach((valor, chave) => console.log(`${chave} = R$${valor},00`));
    //interpolação usa ` ` (crase), não confundir com ' ' (aspas simples)

    console.log("--");

    //o método keys() retorna uma coleção com as chaves do mapa
    //a estrutura de repetição for of itera sobre os valores de uma coleção 
    for(const x of frutas.keys()){
        console.log(x);
    }

    console.log("--")

    //values() é um método que retorna uma coleção contendo todos os valores 
    //de um mapa
    for(const x of frutas.values()){
        console.log(x);
    }
}

mapa();