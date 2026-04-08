function mapa() {
    const frutas = new Map();

    frutas.set("maçã", 500);
    frutas.set("banana", 300);
    frutas.set("laranja", 200);
    frutas.set("pera", 200);
    frutas.set("pera", 201);

    let preco = frutas.get("pera");

    console.log(preco);
}

mapa();