export const perfilValue = (total1, total2) => {
    let result;
    let conservador = true;
    if((total1 <= 7 && total2 <= 4) || (total1 <= 5 && total2 <= 12) || (total1 <= 3 && total2 <= 20)) {
            result = 'Defensivo';
            conservador = false;
    } else if((total1 <= 17 && total2 <= 4) || (total1 <= 15 && total2 <= 12) || (total1 <= 13 && total2 <= 20) || (total1 <= 11 && total2 <= 28) || (total1 <= 9 && total2 <= 32)) {
            result = 'Altamente Conservador';
            conservador = false;
    }
    if((total1 >= 29 && total2 >= 22) || (total1 >= 27 && total2 >= 30)) {
            result = 'Agresivo';
            conservador = false;
    } else if((total1 >= 27 && total2 >= 14) || (total1 >= 25 && total2 >= 20) || (total1 >= 23 && total2 >= 30)) {
            result = 'Moderado';
            conservador = false;
    }
    if(conservador) {
            result = 'Conservador';
    }
    return result;
}