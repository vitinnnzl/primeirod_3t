function total(){
  let c = document.getElementById("valor").value;
    let j = document.getElementById("juros").value;
      let j = document.getElementById("meses").value;
      let r = 0;
    for(let i = 1; i <= t; i++){
     r = c * (1 + (j/100));
     document.write("Mes " + i + " valor: " + r +"<br>");
      v = r;

      }

  document.write("Resultado: " + r);
}
