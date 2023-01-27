function Verificar() {
    var data = new Date();
    var anoAtual = data.getFullYear();

    var formAno = document.getElementById('txtano');
    var formResp = document.getElementById('res');

    if (formAno.value.length == 0 || Number(formAno.value) > anoAtual || Number(formAno.value) < 1900) {
        window.alert('[ERRO] - Verifique os dados e tente novamente!');
    } else {
        var idade = anoAtual - Number(formAno.value);
        var formSex = document.getElementsByName('radsex');

        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        var genero = '';
        if (formSex[0].checked) {
            document.body.style.backgroundColor = 'lightblue';

            genero = 'Homem';

            if (idade >= 0 && idade <= 12) {
                img.setAttribute('src', 'homemcrianca.jpg')
            } else if (idade >= 13 && idade <= 20) {
                img.setAttribute('src', 'homemjovem.jpg')
            } else if (idade >= 21 && idade <= 45) {
                img.setAttribute('src', 'homemadulto.jpg')
            } else {
                img.setAttribute('src', 'homemidoso.jpg')
            }
        } else if (formSex[1].checked) {
            document.body.style.backgroundColor = 'lightpink';

            genero = 'Mulher';

            if (idade >= 0 && idade <= 12) {
                img.setAttribute('src', 'mulhercrianca.jpg')
            } else if (idade >= 13 && idade <= 20) {
                img.setAttribute('src', 'mulherjovem.jpg')
            } else if (idade >= 21 && idade <= 45) {
                img.setAttribute('src', 'mulheradulta.jpg')
            } else {
                img.setAttribute('src', 'mulheridosa.jpg')
            }
        }

        formResp.innerHTML = `Detectamos ${genero} de ${idade} anos.`;
        formResp.appendChild(img);
    }
}