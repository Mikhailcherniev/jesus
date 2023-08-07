let button=document.getElementById("consultar")
button.addEventListener('click', function() {
if(hora>=6 && hora<12){
console.log('Bom dia!')
}
else if(hora>=12 && hora<18){
console.log('Boa tarde')
}
else{
console.log('Boa noite')
}

if (isNaN(resultado)){
    resultado = "Informe um número";
 }

 document.querySelector('#resultado').textContent = resultado;
})