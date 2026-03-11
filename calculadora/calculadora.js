function calculadora() {
    
    while(true) {
        let resultado = 0.0;
        let operando1;
        let operando2;
        let operador;
        let continua;
        let operador_valido = true;

        operando1 = parseFloat(prompt("Digite o primeiro número: "));
        operador = prompt("Digite uma das operações ( + - * / ): ");
        operando2 = parseFloat(prompt("Digite o segundo número: "));
        

        if (operador === "+") {
            resultado = operando1 + operando2;
        } else if (operador === "-") {
            resultado = operando1 - operando2;
        } else if (operador === "*") {
            resultado = operando1 * operando2;
        } else if (operador === "/") {
            if (operando2 == 0) {
                alert("Não é possível dividir por zero")
                continua = prompt(
                    "Digite sim para continuar e não para encerrar");

                if (continua === "não") {
                return //return força a parada de uma função
                } 
            }
            resultado = operando1 / operando2;
        } else {
            alert("Operador inválido!");
            operador_valido = false; 
            continua = prompt (
                "Digite sim para continuar e não para encerrar");

            if (continua === "não") {
                return //return força a parada de uma função
            }  
        }

        
        if ( (operador != "/" || operando2 != 0) && operador_valido != false) {
            alert("Resultado: " +
                operando1 + 
                " " + 
                operador + 
                " " + 
                operando2 + 
                " = " + 
                resultado);
        }
        
        // o símbolo || significa "ou" e $$ significa "e" 
    }
} 