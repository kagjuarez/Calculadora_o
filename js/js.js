var btn_m = document.getElementById("btn-m")//btn multi
var btn_d = document.getElementById("btn-d")//btn dividir
var btn_s = document.getElementById("btn-s")//btn suma
var btn_r = document.getElementById("btn-r")//btn resta

var num1 = document.getElementById("num1").value;//10
var num2 = document.getElementById("num2").value;//15
    
function multiplicar (){
    var num1 = document.getElementById("num1").value;//10
    var num2 = document.getElementById("num2").value;//15
    var resultado = document.getElementById("resultado") 
    
    resultado.innerHTML = (num1 * num2)
}

function dividir (){
    var num1 = document.getElementById("num1").value;//10
    var num2 = document.getElementById("num2").value;//15
    
    resultado.innerHTML = (num1 / num2)
}

function sumar (){
    var num1 = document.getElementById("num1").value;//10
    var num2 = document.getElementById("num2").value;//15
    
    resultado.innerHTML = (num1 + num2)
}

function resta (){
    var num1 = document.getElementById("num1").value;//10
    var num2 = document.getElementById("num2").value;//15
    
    resultado.innerHTML = (num1 - num2)
}

btn_m.addEventListener('click',multiplicar)
btn_d.addEventListener('click',dividir) 
btn_s.addEventListener('click',sumar)
btn_r.addEventListener('click',resta)
    



