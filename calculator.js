document.querySelector('#calculate').addEventListener('click', () => {
    const n1 = Number(document.querySelector('#firstNumber').value);
    const n2 = Number(document.querySelector('#secondNumber').value);
    const op2 = document.querySelector('#selectOperator').value;
    let r;
    if (op2 == '+') {
        r = n1 + n2;
    } else if (op2 == '-') {
        r = n1 - n2;
    } else if (op2 == 'x') {
        r = n1 * n2;
    } else if (op2 == '/') {
        r = n1 / n2;
    }
    document.querySelector('#result').value = r;
});