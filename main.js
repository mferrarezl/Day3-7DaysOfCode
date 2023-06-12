
function iniciarJogo() {
    document.querySelector('.iniciar').style.display = 'none';
    document.getElementById('pergunta1').style.display = 'block';
}

function perguntafront() {
    document.querySelector('#respostafront').style.display = 'block';
    document.getElementById('pergunta1').style.display = 'none';
}

function perguntaback() {
    document.querySelector('#respostaback').style.display = 'block';
    document.getElementById('pergunta1').style.display = 'none';
}

function proxPergunta() {
    document.querySelector('#respostafront').style.display = 'none';
    document.querySelector('#respostaback').style.display = 'none'
    document.getElementById('pergunta2').style.display = 'block';
}

function ultimaPergunta() {
    document.getElementById('pergunta2').style.display = 'none';
    document.getElementById('pergunta3').style.display = 'block';
}

function repetepergunta3() {
    const resposta3 = document.querySelector('#tech').value;
    const msg = `Que legal! Anjalura continuou te auxiliando por vários e vários anos até você finalmente aprender tudo sobre ${resposta3} que você queria. Boa sorte em sua carreira!`;
    alert(msg);
    
    document.getElementById('pergunta3').style.display = 'none';
    document.querySelector('.iniciar').style.display = 'block';
}