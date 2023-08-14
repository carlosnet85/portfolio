function criarCard(thumbnailCard, tituloCard, descricaoCard, urlRedirecionar) {
    const cardContainer = document.getElementById('cardContainer');
    const cards = cardContainer.querySelectorAll('.card');

    const card = document.createElement('div');
    const link = document.createElement('a');
    const conteudo = document.createElement('div');
    const descricao = document.createElement('div');
    const thumbnail = document.createElement('img');
    const titulo = document.createElement('div');

    card.classList.add('card');

    thumbnail.classList.add('thumbnail');
    thumbnail.src = thumbnailCard;
    thumbnail.alt = "thumbnail";
    link.appendChild(thumbnail);

    conteudo.classList.add('conteudo');
    titulo.classList.add('titulo');
    titulo.textContent = tituloCard;
    conteudo.appendChild(titulo);

    descricao.classList.add('descricao');
    descricao.textContent = descricaoCard;
    conteudo.appendChild(descricao);

    if (urlRedirecionar) {
        link.href = urlRedirecionar;
        link.target = "_blank";
        link.appendChild(conteudo); 
        card.appendChild(link); 
    } else {
        card.addEventListener('click', function() {
            alert("Card sem documentacão");
        });

        card.appendChild(thumbnail);
        card.appendChild(conteudo);
        card.style.cursor = "not-allowed";
    }
    cardContainer.appendChild(card);
}

function animacaoEscreverDescricao() {
    const descricao = "\"Desenvolvendo uma mente fullstack e maker.\""; 
    const texto = document.getElementById("descricaoBreve");
    const cursor = document.getElementById("cursor");
    let indice = 0;

    function digitar() {
        if (indice < descricao.length) {
            texto.textContent += descricao[indice];
            indice++;
            setTimeout(digitar, 80);
        } else {
            cursor.style.display = "none";
        }
    }

    setTimeout(digitar, 1000);
    function piscarCursor() {
        cursor.style.opacity = cursor.style.opacity === "0" ? "1" : "0";
        setTimeout(piscarCursor, 200);
    }

    piscarCursor();
}

function toggleHeaderComScroll(){
    const header = document.querySelector('.header');
    let ultimaPosicao = 0;

    window.addEventListener('scroll', () => {
        const posicaoAtual = window.scrollY;
        header.style.transform = posicaoAtual > ultimaPosicao ? 'translateY(-100%)' : 'translateY(0)';
        ultimaPosicao = posicaoAtual;
    });
}

animacaoEscreverDescricao();
toggleHeaderComScroll();

criarCard('assets/thumb/conversorthumb.png', 'Conversor de unidades', 'Um conversor de unidades feito com Java Swing.', 'https://github.com/carlosnet85/conversores-challenge-one');
criarCard('assets/thumb/criptografadorthumb.gif', 'Criptografador de texto', 'Um criptografador simples feito apenas com frontend. Foi o meu primeiro contato com a linguagem, talvez eu atualize no futuro.', 'https://github.com/carlosnet85/decodificador-de-texto-challenge');
criarCard('assets/thumb/arduino1thumb.png', 'Leitor de tensão de capacitor com arduino', 'Projeto simples feito no tinkercad em que um arduino é programado pra ler a tensão de um capacitor. Sem documentacão.');
criarCard('assets/thumb/arduino2thumb.jpg', 'Velocímetro com Arduino', 'Um ultrasônico é usado pra medir a distancia de um objeto. O delay entre o "ping" e o "echo" do ultrasônico pode ser usado para se ter um tipo de medição de velocidade', 'https://github.com/carlosnet85/velocimetro-ultrasonico');



