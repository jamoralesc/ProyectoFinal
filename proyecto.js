//noprotect
var texto
var precio_base = 2000
var recargo_edad18 = 0.10
var recargo_edad25 = 0.20
var recargo_edad50 = 0.30

function cotizar(){
	
	var recargo_hijos = 0.20
	var recargo_total = 0
	var recargo_propiedades = 0.35
	var recargo_salario = 0.05
	var edad_aseg
	var nombre_asegurado
	var casado
	var edad_conyuge
	var hijos
	var numHijos
	var propiedades
	var salario
	var respuesta
	var precio_final
	
	nombre_asegurado = prompt("Ingrese su nombre")
	edad_aseg = Number(prompt("Ingrese su edad"))
	
	recargo_total += recargoEdad(edad_aseg)
	
	casado = (prompt("Está casado ? Si / No")).toUpperCase()
	if (casado == "SI"){
		edad_conyuge = Number(prompt("Ingrese edad de conyuge"))
		recargo_total += recargoEdad(edad_conyuge)
	}
	
	hijos = (prompt("Posee hijos ? Si / No")).toUpperCase()
	if(hijos == "SI"){
		numHijos = Number(prompt("Cuantos hijos tiene ?"))
		recargo_total += numHijos * (precio_base*recargo_hijos)
	}
	
	propiedades = (prompt("Posee propiedades ? Si / No")).toUpperCase()
	if(propiedades == "SI"){
		numPropiedades = Number(prompt("Cuantas propiedades posee ?"))
		recargo_total += numPropiedades * (precio_base*recargo_propiedades)
	}
	
	salario = Number(prompt("Ingrese su salario"))
	recargo_total += salario*recargo_salario
	precio_final = parseFloat(precio_base)+parseFloat(recargo_total)
	
	alert ("Para el asegurado "+nombre_asegurado)
	alert ("El recargo total sera de: "+recargo_total)
	alert ("El precio total sera de: "+precio_final)
	
	respuesta = prompt("Desea ingresar otra cotizacion ? \nIngrese Si para continuar / Ingrese Salir para finalizar")
	return respuesta = respuesta.toUpperCase()
	
}


function recargoEdad (edad){
  if (edad >= 18 && edad <=24){
    return precio_base * recargo_edad18
  }
  else if(edad >= 25 && edad <=49){
    return precio_base * recargo_edad25
  }
  else{
    return precio_base * recargo_edad50
  }
}

do{
	texto = cotizar()
}while(texto != "SALIR")