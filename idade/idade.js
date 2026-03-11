function idade() {
    let idade;

    do{
        idade = 
        parseInt(prompt("Informe sua idade (valores aceitos de 5 a 150): "));
    } while(idade < 5 || idade > 150 || Number.isNaN(idade));
    //Number.isNaN(variável) verifica se o valor da variável não é um número (é NaN).
    
    alert("Idade validada.");
}