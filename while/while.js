function loop() {
    
    let texto = "";
    let i = 1;
             
    while (i < 10){  
        texto += "O número é " + i + "<br>";
        i++;    
    }   

    document.getElementById("demo").innerHTML = texto;

    //do while executa o código ao menos 1 vez sem verificar nada
    //while começa verificando antes de executar o código
}