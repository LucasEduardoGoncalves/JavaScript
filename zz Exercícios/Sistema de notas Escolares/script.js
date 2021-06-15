function nota() {
    var notaAluno = document.getElementById('notaAluno').value;
    var notaAlunoLetra = '';

    if(notaAluno >= 90){
        notaAlunoLetra = ('A');
    } else if ( notaAluno >= 80){
        notaAlunoLetra = ('B');
    } else if (notaAluno >= 70){
        notaAlunoLetra = ('C');
    } else if (notaAluno >= 60 ){
        notaAlunoLetra = ('D');
    }else{
        notaAlunoLetra = ('F');
    }

    document.getElementById('notaConceito').value = notaAlunoLetra;
}
