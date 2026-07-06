// Curiosidade
function mostrarMensagem() {
    const curiosidades = [
        "🌱 A agricultura sustentável ajuda a preservar o solo, a água e a biodiversidade.",
        "🐝 As abelhas são responsáveis pela polinização de grande parte dos alimentos que consumimos.",
        "🥬 Alimentos orgânicos são produzidos com práticas que reduzem ou evitam o uso de agrotóxicos sintéticos.",
        "💧 O uso consciente de defensivos e a proteção das nascentes contribuem para uma água mais limpa.",
        "🌎 Pequenas mudanças no campo podem gerar grandes benefícios para a saúde das pessoas e para o meio ambiente."
    ];

    const indice = Math.floor(Math.random() * curiosidades.length);

    document.getElementById("mensagem").innerHTML = curiosidades[indice];
}

// Quiz
function respostaCorreta() {
    document.getElementById("resultadoQuiz").innerHTML =
        "✅ Correto! O controle biológico utiliza inimigos naturais das pragas e pode reduzir a necessidade de agrotóxicos.";

    document.getElementById("resultadoQuiz").style.color = "green";
}

function respostaErrada() {
    document.getElementById("resultadoQuiz").innerHTML =
        "❌ Essa não é a melhor opção. O uso excessivo de agrotóxicos pode causar impactos à saúde e ao meio ambiente. Sempre que possível, práticas sustentáveis devem ser consideradas.";

    document.getElementById("resultadoQuiz").style.color = "red";
}
