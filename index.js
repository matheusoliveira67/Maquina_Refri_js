
(function () {

})();

// const REFRIGERANTES = [3.50, 5.00, 2.50, 3.00, 2.00];
// const valor = [0.25, 0.50, 1.00];

const REFRIGERANTES = [4];
const valor = [3];
var TROCO = [3];

var saldo = 0;
var opcao = 1;
var troco = 0;
var cont = 0;

REFRIGERANTES[0] = 3.50;
REFRIGERANTES[1] = 5.00;
REFRIGERANTES[2] = 2.50;
REFRIGERANTES[3] = 3.00;
REFRIGERANTES[4] = 2.00;



valor[3] = 0.25;
valor[4] = 0.50;
valor[5] = 1.00;

var total = 0;

(function () {
    const moneyImg = document.querySelectorAll('.money');


    moneyImg.forEach(function (img) {
        img.addEventListener('click', function (event) {
            var totalFinal = 0;
            if (event.target.classList.contains('money')) {
                var preco = event.target.attributes.value.nodeValue;
                var precoConvertido = parseFloat(preco);

                let saldoAtual = document.getElementById('totalGeral').textContent;
                let saldoAlterado = precoConvertido + parseFloat(saldoAtual);

                total = parseFloat(saldoAlterado);
                totalFinal += parseFloat(total);
                document.getElementById('totalGeral').textContent = totalFinal.toFixed(2);
            }
        })
    });

    const refriBtn = document.querySelectorAll('.buttons');

    refriBtn.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            if (event.target.parentElement.classList.contains('buttons')) {

                const item = {};

                let nome = event.target.parentElement.previousElementSibling.previousElementSibling.textContent;
                var price = event.target.parentElement.previousElementSibling.textContent;

                let nomeConvertido = nome.slice().trim();
                let finalPrice = price.slice(2).trim();

                item.nome = nomeConvertido;
                item.price = finalPrice;

                var finalPriceConvertido = parseFloat(finalPrice);
                let saldoCompra = document.getElementById('totalCompra').textContent;

                let totalAtual = document.getElementById('totalGeral').textContent;
                var saldoCompraConvertido = parseFloat(saldoCompra);
                let totalComprado = saldoCompraConvertido + finalPriceConvertido;


                if (totalAtual < finalPriceConvertido) {
                    alert('Saldo insuficiente, deposite o dinheiro');
                    return false;
                } else {
                    document.getElementById('finalSquare-3').innerHTML = '';
                    document.getElementById('finalSquare-4').innerHTML = '';
                    document.getElementById('finalSquare-5').innerHTML = '';
                    document.getElementById('totalCompra').textContent = totalComprado.toFixed(2);

                    var saldoAtualizado = finalPriceConvertido - totalAtual;
                    let saldoAtualizadoConvertido = Math.abs(saldoAtualizado)

                    document.getElementById('totalGeral').textContent = saldoAtualizadoConvertido.toFixed(2);

                    const gridItem = document.createElement('div')
                    gridItem.innerHTML = `        
                        <div class="product" style="background-color: #333333;font-weight: bold;color: white; ">${item.nome}</div> 
                        <div class="product" style="background-color: #333333;font-weight: bold;color: white; ">${item.price}</div>  
                    
                `;
                    const cart = document.getElementById('conteudo-inserido');
                    const total = document.querySelector('.cart-total-container');
                    cart.insertBefore(gridItem, total);


                    troco = saldoAtualizadoConvertido;
                    cont = 6;

                    while (cont >= 0) {
                        TROCO[cont] = 0;
                        while (troco.toFixed(2) >= valor[cont]) {
                            TROCO[cont] = TROCO[cont] + 1;
                            troco = troco - valor[cont];
                        }
                        cont = cont - 1;
                    }

                    cont = 0;
                    for (let index = 3;  index <= 5; index++) {
                        const gridItem1 = document.createElement('div')
                        gridItem1.className = "square";
                        gridItem1.innerHTML = `                  
                            <div class="block">
                                <div class="centered" id="trocoPosicao">
                                    ${TROCO[index]}
                                </div>                            
                            </div>
                    `;
                        let ret = document.getElementsByClassName(`finalSquare-${index}`);
                        console.log(ret)

                        const total1 = document.querySelector('.teste');

                        console.log("🚀 ~ file: index.js:137 ~ gridItem1:", gridItem1)
                        ret[0].insertBefore(gridItem1, total1);
                    }

                    saldo = 0;
                }
            }
        })
    })
})();
