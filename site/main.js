function soma(p1, p2) {
    c = p1 + p2;
    alert(c);
    return c;
}

function criahr(div) {
    var hr = document.createElement("hr");
    div.appendChild(hr);
}

var container = document.getElementById("container");

var input = document.createElement("input");
input.value = "exemplo Marcondes";
input.type = "button"
input.onclick = function() {
    //alert(this.value)
    console.log(this.value);
}
container.appendChild(input);

//------------
criahr(container);


var nome = document.createElement("input");
nome.type = "text";
nome.addEventListener("keypress", function (e) {
    console.log(e.keyCode)
})
nome.addEventListener("change", function(e) {
    alert(e.keyCode)
})
container.appendChild(nome);


//--------
criahr(container)

var horario = document.createElement("div");
setInterval(function() {
    horario.textContent = Date();
},1000);

container.appendChild(horario);

//--------
criahr(container);

var email = document.createElement("input");
email.addEventListener("keyup", function() {
    verifica = this.value.indexOf("@");
    if (verifica == -1) {
        this.setAttribute("class", "erro");
    } else {
        this.setAttribute("class", "ok");
        setTimeout(() => {
            this.setAttribute("class", "");
        }, 3000);
    }
})

container.appendChild(email);


criahr(container);

var lblValor1 = document.createElement("label");
lblValor1.setAttribute("for","valor1");
lblValor1.textContent = "Valor 1: ";
var valor1 = document.createElement("input");
valor1.id = "valor1";

var lblValor2 = document.createElement("label")
lblValor2.setAttribute("for","valor2");
lblValor2.textContent = "Valor 2: ";
var valor2 = document.createElement("input");
valor2.id = "valor2";

var somar = document.createElement("input");
somar.type = "button";
somar.value = "Somar";

var divResultado = document.createElement("div");
divResultado.appendChild(document.createTextNode("Aguardando..."));
divResultado.setAttribute("style", "background-color: red;")

container.appendChild(lblValor1);
container.appendChild(valor1);
container.appendChild(lblValor2);
container.appendChild(valor2);
container.appendChild(somar);
container.appendChild(divResultado);
somar.addEventListener("click", function() {
    var total = parseFloat(valor1.value) + parseFloat(valor2.value);
    divResultado.textContent = "Resultado: "+ total;
});

criahr(container);

var form = document.getElementById("meuform");
form.addEventListener("submit", function(e){
    console.log(e)
    console.log(e.keyCode);
    e.preventDefault();
})


criahr(container);


var origem = document.createElement("div");
origem.setAttribute("style","background-color:blue;width:300px;height:300px");
container.appendChild(origem);

var divPegar = document.createElement("div");
divPegar.id = "pegardiv";

var divPegarCabecalho = document.createElement("div");
divPegarCabecalho.id = "pegardivcabecalho";
divPegarCabecalho.textContent = document.createTextNode = "Pegar Aqui!";
divPegar.appendChild(divPegarCabecalho);

origem.appendChild(divPegar);

var divPegarConteudo = document.createElement("div");
divPegarConteudo.textContent = "Qualquer coisa...";
divPegarConteudo.setAttribute("style", "backgroud-color:red;height:200px;");
divPegar.appendChild(divPegarConteudo);


pegarElemento(divPegar);

function pegarElemento(elemento) {

    var pos1, pos2, pos3, pos4;

    if (document.getElementById(elemento.id + "cabecalho")) {
        document.getElementById(elemento.id + "cabecalho").onmousedown
         = pegarComMouse;
    } else {
        elemento.onmousedown = pegarComMouse
    }

    function pegarComMouse(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        console.log(pos3)
        pos4 = e.clientY;
        console.log(pos4)
        document.onmouseup = pararPegarElemento;
        document.onmousemove = moverElemento;
    }

    function moverElemento(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        console.log(pos1)
        pos2 = pos4 - e.clientY;
        console.log(pos2)
        pos3 = e.clientX;
        console.log(pos3)
        pos4 = e.clientY;
        console.log(pos4)
        elemento.style.top = elemento.offsetTop - pos2 + "px";
        elemento.style.left = elemento.offsetLeft - pos1 + "px";
    }

    function pararPegarElemento() {
        console.log("final")
        console.log(pos1)
        console.log(pos2)
        console.log(pos3)
        console.log(pos4)
        document.onmouseup = null;
        document.onmousemove = null;
    }

}