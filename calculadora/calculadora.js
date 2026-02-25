function calculadora() {
    while(true) {
        let resultado = 0.0;
        let operando1;
        let operando2;
        let operador;

        operando1 = parseFloat(prompt("Digite o primeiro número: "));
        operador = prompt("Digite uma das operações ( + - * / ): ");
        operando2 = parseFloat(prompt("Digite o segundo número: "));
        

        if ( operador === "+" ) {
            resultado = operando1 + operando2;
        } else if (operador === "-") {
            resultado = operando1 - operando2;
        } else if (operador === "*") {
            resultado = operando1 * operando2;
        } else if (operador === "/") {
            if (operando2 == 0) {
                alert("Não é possível dividir por zero")
                return
            }
            resultado = operando1 / operando2;
        } else {
            alert("Operador inválido!");
            return //return força a parada de uma função
        }

        alert("Resultado: " +
            operando1 + " " + operador + " " + operando2 + " = " + resultado);
    }
}