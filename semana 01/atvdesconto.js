const desconto_percentual = 0.10 // 10% de desconto

/**
 *  1 - Valor de compra
 *  2 - Jogo esse valor para a função
 *  3 - A função vai identificar se é maior ou menor que 100
 *  4 - Se for menor ou igual a 100, retorna o valor original
 *  5 - Se for maior que 100, retorna o valor com desconto
 *  6 - Imprime (console.log) o valor total
 */
function calcularValorTotal(valor_compra){
    if (valor_compra <= 100) return valor_compra
    /**
     *  Aplicar desconto
     *  Para saber o valor em reais do desconto, valor_compra * desconto_percentual
     *  Para saber o valor total, valor_compra - (valor_compra * desconto_percentual)
     */

    const desconto_reais = valor_compra * desconto_percentual // 200 reais * 0.10 = 20 reais
    return valor_compra - desconto_reais // 200 reais - 20 reais = 180 reais
}

    console.log( `Valor total a pagar: R$ ${calcularValorTotal(150).toFixed(2)}` )