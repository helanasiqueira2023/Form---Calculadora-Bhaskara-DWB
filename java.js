let valorA = Number(document.getElementById("A").value);
let valorB = Number(document.getElementById("B").value);
let valorC = Number(document.getElementById("C").value);

if (valorA == "") alert("Informe o valor A"); 
    else if(valorB == "") alert("Informe o valor B:");
    else if(valorC == "") alert("Informe o valor C");
 else {
    let delta = valorB ** 2 - 4 * valorA * valorC;
    let x1 = 0;
    let x2 = 0;
 
    if (delta < 0 ) alert (`Valor complexo`)
    else {
x1 = ((-valorB) + Math.sqrt(delta)) / (2 * valorA);
x2 = ((- valorB) - Math.sqrt(delta)) / (2 * valorA);
    }
   document.getElementById("valor X1").value = x1;
   document.getElementsById("valor X2").value = x2;
}
function click_limpar(){
    document.getElementById("A").value = "";
    document.getElementById("B").value = "";
    document.getElementById("C").value = "";
    document.getElementById("valor X1").value = "";
    document.getElementById("valor X2").value = "";
}













