jugador = 'X';

tablero = []

terminado = false;

function marcar(c)
{
    boton = document.querySelector('#b'+ c);

    if(boton.innerHTML != '' || terminado) return;

    boton.innerHTML = jugador;
    boton.className = 'casilla ' + jugador;

    tablero[c - 1] = jugador;

    if(comprobar())
    {
        terminado = true;        
    }
    else
    {
        cambiarJuagador();
    }
}

function comprobar()
{
    for (let i = 0; i < 3; i++) {

        fila = true;
        columna = true;

        for (let j = 0; j < 3; j++) {
            fila = fila && (tablero[i + 3*j] == jugador);
            columna = columna &&  (tablero[j + 3*i] == jugador);
        }

        if(fila || columna)
        {
            info = document.querySelector('#informacion');
            info.innerHTML = 'El ganador es: ';
            return true;
        }
    }
    diag1 = true;
    diag2 = true;

    for (let i = 0; i < 3; i++) {
        diag1 = diag1 && (tablero[i + 3*i] == jugador);
        diag2 = diag2 && (tablero[(2-i) + 3*i] == jugador);
    }

    if(diag1 || diag2)
    {
        info = document.querySelector('#informacion');
        info.innerHTML = 'El ganador es: ';
        return true;
    }

    return false;
}

function cambiarJuagador()
{
    if(jugador == 'X')
    {
        jugador = 'O';
    }
    else
    {
        jugador = 'X';
    }

    info = document.querySelector('#jugador');
    info.innerHTML = jugador;
    info.className = jugador;
}

function reiniciar()
{
    for(let i = 1; i < 10; i++)
    {
        boton = document.querySelector('#b' + i);
        boton.innerHTML = '';
        boton.className = 'casilla';
        tablero[i-1] = '';
    }
    info = document.querySelector('#informacion');
    info.innerHTML = 'Turno de: ';
    j = document.querySelector('#jugador');
    jugador = 'X';
    j.innerHTML = jugador;
    j.className = jugador; 
    terminado = false;   
}
