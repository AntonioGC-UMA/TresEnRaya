b = false;

function marcar(c)
{
    boton = document.querySelector('#'+ c);

    if(b)
    {
        boton.innerHTML = 'X';
        boton.className = 'casillaX';
    }
    else
    {
        boton.innerHTML = 'O';
        boton.className = 'casillaO';
    }

    b = !b;
}

function reiniciar()
{
    for(let i = 1; i < 10; i++)
    {
        boton = document.querySelector('#b' + i);
        boton.innerHTML = '';
        boton.className = 'casilla';
    }
}
