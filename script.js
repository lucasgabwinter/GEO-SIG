function adicionar1() {
    if (chave1 == 0) {
        chave1 = 1;
        var vaga = document.getElementById("vaga1");
        var nomeVaga = vaga.innerHTML;
        var linha = document.createElement("tr");
        linha.classList.add("linha1");
        tabela[0].appendChild(linha);
        var col1 = document.createElement("td");
        col1.innerHTML = "Estou interessado na vaga de: ";
        linha.appendChild(col1);
        var col2 = document.createElement("td");
        col2.classList.add("enviarCur1");
        col2.innerHTML = nomeVaga;
        linha.appendChild(col2);
    }
    else if (chave1 == 1) {
        chave1 = 0;
        removeLinha = document.getElementsByClassName("linha1")
        tabela[0].removeChild(removeLinha[0])
    }
}

function adicionar2() {
    if (chave2 == 0) {
        chave2 = 1;
        var vaga = document.getElementById("vaga2");
        var nomeVaga = vaga.innerHTML;
        var linha = document.createElement("tr");
        linha.classList.add("linha2");
        tabela[0].appendChild(linha);
        var col1 = document.createElement("td");
        col1.innerHTML = "Estou interessado na vaga de: ";
        linha.appendChild(col1);
        var col2 = document.createElement("td");
        col2.classList.add("enviarCur2");
        col2.innerHTML = nomeVaga;
        linha.appendChild(col2);
    }
    else if (chave2 == 1) {
        chave2 = 0;
        removeLinha = document.getElementsByClassName("linha2")
        tabela[0].removeChild(removeLinha[0])
    }
}
function adicionar3() {
    if (chave3 == 0) {
        chave3 = 1;
        var vaga = document.getElementById("vaga3");
        var nomeVaga = vaga.innerHTML;
        var linha = document.createElement("tr");
        linha.classList.add("linha3");
        tabela[0].appendChild(linha);
        var col1 = document.createElement("td");
        col1.innerHTML = "Estou interessado na vaga de: ";
        linha.appendChild(col1);
        var col2 = document.createElement("td");
        col2.classList.add("enviarCur3");
        col2.innerHTML = nomeVaga;
        linha.appendChild(col2);
    }
    else if (chave3 == 1) {
        chave3 = 0;
        removeLinha = document.getElementsByClassName("linha3")
        tabela[0].removeChild(removeLinha[0])
    }
}
        
function EnviarEmail() {
    var assunto = "Segue em anexo currículo para as vagas selecionadas!";
    curvaga1 = document.getElementsByClassName("enviarCur1");
    curvaga2 = document.getElementsByClassName("enviarCur2");
    curvaga3 = document.getElementsByClassName("enviarCur3");
    if (chave1 == 1 && chave2 == 1 && chave3 == 1) {
        window.location.href = "mailto:geo-sig_rh@empresa.com?subject=" + assunto + "&body=" + curvaga1[0].innerHTML + "%0D%0A" + curvaga2[0].innerHTML + "%0D%0A" + curvaga3[0].innerHTML;
    }
    else if (chave1 == 1 && chave2 == 1 && chave3 == 0) {
        window.location.href = "mailto:geo-sig_rh@empresa.com?subject=" + assunto + "&body=" + curvaga1[0].innerHTML + "%0D%0A" + curvaga2[0].innerHTML;
    }
    else if (chave1 == 1 && chave2 == 0 && chave3 == 1) {
        window.location.href = "mailto:geo-sig_rh@empresa.com?subject=" + assunto + "&body=" + curvaga1[0].innerHTML + "%0D%0A" + curvaga3[0].innerHTML;
    }
    else if (chave1 == 0 && chave2 == 1 && chave3 == 1) {
        window.location.href = "mailto:geo-sig_rh@empresa.com?subject=" + assunto + "&body=" + curvaga2[0].innerHTML + "%0D%0A" + curvaga3[0].innerHTML;
    }
    else if (chave1 == 1 && chave2 == 0 && chave3 == 0) {
        window.location.href = "mailto:geo-sig_rh@empresa.com?subject=" + assunto + "&body=" + curvaga1[0].innerHTML;
    }
    else if (chave1 == 0 && chave2 == 1 && chave3 == 0) {
        window.location.href = "mailto:geo-sig_rh@empresa.com?subject=" + assunto + "&body=" + curvaga2[0].innerHTML;
    }
    else if (chave1 == 0 && chave2 == 0 && chave3 == 1) {
        window.location.href = "mailto:geo-sig_rh@empresa.com?subject=" + assunto + "&body=" + curvaga3[0].innerHTML;
    }
    else{pass}
}
var tabela = document.getElementsByTagName("table");
var chave1 = 0;
var chave2 = 0;
var chave3 = 0;