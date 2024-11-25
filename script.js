const avanca = document.querySelectorall('.btn-proximo')

avanca.forEach(button => {
    button.addEventListener('click', function{
        const atual = document.queryselector('.ativo');
        const proximopasso = 'passo-' + this.getAttribute('data-proximo');
        atual.classList.remove('ativo');
        document.getElementById(proximopasso).classList.add('ativo');
    })
})


