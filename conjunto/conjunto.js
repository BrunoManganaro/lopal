function conjunto() {
    const letras = new Set();
    letras.add("a");
    letras.add("b");
    letras.add("c");

    console.log(letras.has("a"));
    
    console.log("--");

    //delete é um método para remover um elemento do conjunto
    letras.delete("c");
    console.log(letras);

    console.log("--");

    //como no cojunto a chave é igual ao valor, os métodos value() e keys()
    //retornam exatamente a mesma coleção
    for (const x of letras.values()){
        console.log(x);
    }

    console.log("--");

    for (const x of letras.keys()){
        console.log(x);
    }
}

conjunto();