const pessoa = {
    nome: "Henrique",
    sobrenome: "Góes",
    idade: 16,
    time: "Palmeiras",
    nomeCompleto: function() {return this.nome + " " + this.sobrenome},
    meuObjeto: function() {return this}//retorna o próprio objeto
};
//diferentemente do mapa, no objeto as chaves não são strings

console.log(`${pessoa.nomeCompleto()} tem ${pessoa.idade} ` +
    `anos e torce para o ${pessoa.time}.`
);

console.log("");

const pessoaStringficada = JSON.stringify(pessoa);
console.log(pessoaStringficada);

console.log("");

const pessoaParseada = JSON.parse(pessoaStringficada);

console.log(`${pessoaParseada.nome} ${pessoaParseada.sobrenome} tem ` +
    `${pessoaParseada.idade} anos e torce para o ${pessoaParseada.time}.`
);