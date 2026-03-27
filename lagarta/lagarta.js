async function lagarta(){
    //let espaco2 = "";
    let lagarta = "()()()(0_0)";
    let lagarta2 = "( )( )( )(0_0)";
    let espaco = "   ";
    
    function sleep(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /*
    for(let i = 0; i < 100; i ++){
        console.log(espaco2 + lagarta);
        await sleep(400)
        console.clear();
        console.log(espaco2 + lagarta2);
        espaco2 += espaco;
        await sleep(400);
        console.clear();
    }
    */
    
    for(let i = 0; i < 100; i ++){
        console.log(i % 2 == 0? lagarta = espaco + lagarta: 
            lagarta2 = espaco + lagarta2);
        await sleep(500);
        console.clear();
    }
}
