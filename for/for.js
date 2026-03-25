function lacofor() {
    
    let texto = "";
    
    //Ao fim de for,
    //o espaço que ele ocupa deixa de ser ocupado, diferente de while.
    //for é local e while é global.
    for (let i = 0; i < 10; i++) {
        texto += "O número é " + i + "<br>";
    }
 
    document.getElementById("demo").innerHTML = texto;
}