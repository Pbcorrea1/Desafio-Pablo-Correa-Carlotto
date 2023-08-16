class CaixaDaLanchonete{
    constructor(){
        this.opcoes = {
            'cafe': 3.00,
            'chantily': 1.50,
            'suco': 6.20,
            'sanduiche': 6.50,
            'queijo': 2.00,
            'salgado': 7.25,
            'combo1': 9.50,
            'combo2': 7.50
        };
    }
    calcularValorDaCompra(itens,metodoDePagamento) {
        
        if (Object.keys (itens).length === 0) {
            return"Escolha uma coisa boa!!";
        }
        let valorFinal = 0.0;
        const itensPrincipais=['cafe','suco','sanduiche','salgado', 'combo1','combo2'];

        for (const pedido in itens) {
            if(!this.opcoes.hasOwnProperty(pedido)){
                return "Não temos isto :("};

            if(!itensPrincipais.includes(pedido) && itens[pedido]>0){
                return "Está faltando o principal ";
            }

            valorFinal += this.opcoes[pedido] * itens[pedido];
        }
        
        if (valorFinal === 0) {
            return "Algo de errado não esta certo!";
        }
        if (!['dinheiro', 'debito', 'credito'].includes(metodoDePagamento)) {
            return "Método de pagamento inválido!";
        }
        if (metodoDePagamento === 'dinheiro') {
            valorFinal *= 0.95;
        } else if (metodoDePagamento === 'credito') {
            valorFinal *= 1.03;
        }
        return valorFinal.toFixed(2);
       
    }
}              


const compra = new CaixaDaLanchonete();

const itens = {'sanduiche': 2, 'suco': 2}
const metodoDePagamento ='dinheiro';

const valorFinal = compra.calcularValorDaCompra(itens, metodoDePagamento);
console.log(`Valor total a pagar: R$ ${valorFinal}`);


