const valorDaCompra = 100;
const numeroDeParcelas = 1;

if (numeroDeParcelas === 1 ) {

    const desconto = valorDaCompra * 10/100;
    const valorAPagar = valorDaCompra - desconto
    console.log(`Você deve pagar R$ ${valorAPagar}. Pois, à vista, tem 10% de desconto`);

} else if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {

    const valorDaParcela = (valorDaCompra / numeroDeParcelas).toFixed(2);
    console.log(`Você deve pagar em ${numeroDeParcelas}x de R$${valorDaParcela}`);
    
} else if (numeroDeParcelas >= 7 && numeroDeParcelas <= 12) {

    const valorAPagarComJuros = (valorDaCompra * (1 +  1/100) ** numeroDeParcelas).toFixed(2);
    const valorDaParcela = (valorAPagarComJuros / numeroDeParcelas).toFixed(2);
    console.log(`Você deve pagar em ${numeroDeParcelas}x de R$${valorDaParcela} totalizando R$ ${valorAPagarComJuros}, devido a adição de 1% de juros.`);

} else {

    console.log("Número de parcelas inválido");
}