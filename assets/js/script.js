const contperguntas = document.querySelectorAll('.contpergunta');

contperguntas.forEach((contpergunta) => {
    const respots = document.querySelectorAll('.respota');
    const imags = document.querySelectorAll('.imag');

    const pergunta = contpergunta.querySelector('.pergunta');
    const respota = contpergunta.querySelector('.respota');
    const imag = contpergunta.querySelector('.imag');

    pergunta.addEventListener('click', () => {
        reset(respots, imags);
        respota.classList.remove('none');
        imag.classList.remove('giro');
    });

    function reset(respots, imags){
        respots[0].classList.add('none');        
        respots[1].classList.add('none');
        respots[2].classList.add('none');
        respots[3].classList.add('none');
        respots[4].classList.add('none');

        imags[0].classList.add('giro');
        imags[1].classList.add('giro');
        imags[2].classList.add('giro');
        imags[3].classList.add('giro');
        imags[4].classList.add('giro');
    }
});
