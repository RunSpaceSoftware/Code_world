function myfunc() {
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;

    if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
    b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
    document.getElementById('print')
        .innerHTML = "Player X won";
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    window.alert('Player X won');
    } else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
    b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
    document.getElementById('print')
        .innerHTML = "Player X won";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;

    window.alert('Player X won');
}
else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
    b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
    document.getElementById('print')
        .innerHTML = "Player X won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    window.alert('Player X won');
}
else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
    b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
    document.getElementById('print')
        .innerHTML = "Player X won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    window.alert('Player X won');
}
else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
    b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
    document.getElementById('print')
        .innerHTML = "Player X won";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    window.alert('Player X won');
}
else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
    b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
    document.getElementById('print')
        .innerHTML = "Player X won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    window.alert('Player X won');
}
else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
    b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
    document.getElementById('print')
        .innerHTML = "Player X won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b9").disabled = true;
    window.alert('Player X won');
}
else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
    b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
    document.getElementById('print')
        .innerHTML = "Player X won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    window.alert('Player X won');
    }
}