function botao(){
	document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
	//console.log(document.getElementById("agradecimento"));
	//alert("Obrigado por clicar");
	document.getElementById("volte").innerHTML = "<b>Volte sempre!</b>";
}

function redirecionar(){
	window.open("https://www.google.com.br/");
	//window.location.href = "https://www.google.com.br/";
}

function trocar(elemento){
	//document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
	elemento.innerHTML = "Obrigado por passar o mouse";
	//alert("trocar texto");
}

function voltar(elemento){
	//document.getElementById("mousemove").innerHTML = "Passe o mouse aqui de novo";
	elemento.innerHTML = "Passe o mouse aqui de novo";
}

function load(){
	alert("página carregada");
}

function funcaoChange(elemento){
	console.log(elemento.value)
	//alert(elemento.value)
}

/*
function soma(n1, n2){
	return n1 + n2;
};
alert(soma(5, 10));

function setReplace(frase, nome, novo_nome){
	return frase.replace(nome, novo_nome)
};
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/*
function validaIdade(idade){
	var validar;	
	if (idade >= 18){
		validar = true;
	}else{
		validar = false;
	}
	return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/

/*
var d = new Date();
alert(d);
alert(d.getMonth()+1);
alert(d.getMinutes());
alert(d.getDay());
alert(d.getHours());
alert(d.getYear());
*/


/*
var count//= 1;
for(count=0; count <= 5; count++){
	alert(count);
};
*/

/*
var count = 0;
while (count <= 5){
	console.log(count);
	//alert(count);
	//count = count + 1;
	count++;
};
*/


/*
var idade = prompt("Qual sua idade?");
//var idade = 18;
if (idade >= 18){
	alert("maior de idade");
}else{
	alert("menor de idade");
};
*/





/*
var frutas = [{nome:"maçã", cor:"vermelho"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
console.log(frutas.nome);
console.log(frutas.cor);
//alert(frutas[1].cor);
console.log(frutas[1].nome);
console.log(frutas[0].nome);
console.log(frutas[1].cor);
console.log(frutas[0].cor);
*/


/*
var fruta = {nome:"maçã", cor:"vermelho"};
console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);
//alert(fruta.cor);
*/



/*var lista = ["maçã", "pêra", "laranja"];
console.log(lista);
console.log(lista[1]);
console.log(lista.length);
//alert(lista);
//alert(lista[1]);
lista.pop();
console.log(lista);
console.log(lista.length);
lista.push("uva");
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista[0]);
console.log(lista.toString()[0]);
console.log(lista.join("-"));
console.log(lista.join(" - "));
console.log(lista.join(""));
console.log(lista.join(" "));
console.log(lista.join(", "));*/



/*var nome = "Keti Jorgensen";
var idade = 26;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
var n1 = 5;
var n2 = 3;
alert("Bem vinda " + nome);
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2)
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil"))
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));
console.log(n1 * n2);*/