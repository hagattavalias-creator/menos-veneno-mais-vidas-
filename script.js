
/* =========================
CURIOSIDADES
========================= */

function mostrarMensagem(){

    const curiosidades = [

        "🌱 A agricultura sustentável ajuda a preservar o solo e a água.",
        "🐝 As abelhas são essenciais para a polinização dos alimentos.",
        "💧 A contaminação da água pode afetar toda a cadeia alimentar.",
        "🌿 O controle biológico reduz a necessidade de agrotóxicos.",
        "🌎 Pequenas mudanças no campo geram grandes impactos no planeta."

    ];

    const indice = Math.floor(Math.random() * curiosidades.length);

    document.getElementById("mensagem").innerHTML = curiosidades[indice];
}

/* =========================
QUIZ
========================= */

function respostaCorreta(){

    document.getElementById("resultadoQuiz").innerHTML =
    "✅ Correto! O controle biológico ajuda a reduzir o uso de agrotóxicos.";

    document.getElementById("resultadoQuiz").style.color = "green";
}

function respostaErrada(){

    document.getElementById("resultadoQuiz").innerHTML =
    "❌ Incorreto! O uso excessivo de veneno prejudica o meio ambiente.";

    document.getElementById("resultadoQuiz").style.color = "red";
}

/* =========================
CALCULADORA SUSTENTÁVEL
========================= */

function calcularHabito(){

    let valor = document.getElementById("organicos").value;

    let resultado = document.getElementById("resultadoCalculo");

    if(valor === "" || valor < 0){

        resultado.innerHTML = "⚠️ Digite um número válido.";

        resultado.style.color = "orange";

        return;
    }

    if(valor <= 2){

        resultado.innerHTML = "🌱 Você pode melhorar seu consumo sustentável!";

        resultado.style.color = "red";

    } else if(valor <= 5){

        resultado.innerHTML = "🌿 Bom! Você já tem hábitos saudáveis.";

        resultado.style.color = "green";

    } else{

        resultado.innerHTML = "🌎 Excelente! Você apoia muito a agricultura sustentável.";

        resultado.style.color = "darkgreen";
    }
}

/* =========================
EXTRA (INTERAÇÃO SIMPLES)
========================= */

// efeito leve ao clicar em botões
document.addEventListener("click", function(e){

    if(e.target.tagName === "BUTTON"){

        e.target.style.transform = "scale(0.95)";

        setTimeout(() => {
            e.target.style.transform = "scale(1)";
        }, 100);

    }

});
