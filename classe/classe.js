function classe() {
    class Carro {
        constructor(nome, ano) {
            this.nome = nome;
            this.ano = ano;
        }
        idade() {
            const data = new Date();
            return data.getFullYear() - this.ano;
        }
    }
    //Ao criar uma classe, é recomendado iniciar seu nome com letra maiúscula.

    let meuCarro = new Carro("Kwid", 2009);

    let frase = "O meu " + meuCarro.nome + " " + meuCarro.ano +
                " tem " + meuCarro.idade() + " ano(s).";

    console.log(frase);
    meuCarro.nome = "Renegade";
    meuCarro.ano = 2024;
    console.log(meuCarro.nome + " " + meuCarro.ano + ".");
    let outraFrase = "Eu fui à escola.";
}   
    
classe();

