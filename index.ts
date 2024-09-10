import { Veiculo } from "./Veiculo";
import prompt from "prompt-sync";

const teclado = prompt();

console.log('Criação de veículo');
const carro: Veiculo = criaVeiculo();

while(true){
    console.log("########### MENU ###########");
    console.log("1 - Acelerar");
    console.log("2 - Frear");
    console.log("3 - mudar de marcha");
    console.log("4 - Diminuir marcha");
<<<<<<< HEAD
    console.log("5 - Imprimir dados do veículo");
    console.log("0 - PULA DO CARRo");
=======
    console.log("5 - Listar dados do veículo");
    console.log("0 - Sair");
>>>>>>> cd6a6b5c47454f0bab6d13c1dd7bd61d846769a6

    const opcao = +teclado('Escolha uma opção: ');
    if(opcao === 0){
        break;
    }
    switch (opcao) {
        case 1:
            acelerar(carro);
            break;
        case 2:
            frear(carro)
            break

        default:
            break;
    }
}

console.table(carro);

function acelerar(veiculo: Veiculo): void{
    if(veiculo.marchaAtual != 0){
    veiculo.velocidade += veiculo.potencia*0.1;
    console.log(veiculo.velocidade);
}}

function frear(veiculo: Veiculo){
    veiculo.velocidade = 0

    console.log(`A besta freiou! Velocidade: ${veiculo.velocidade}`)
}

function criaVeiculo(): Veiculo{
    const veiculo: Veiculo = new Veiculo();
    veiculo.marca = teclado('Marca: ');
    veiculo.modelo = teclado('Modelo: ');
    veiculo.cor = teclado('Cor: ');
    veiculo.potencia = +teclado('Potência: ');
    veiculo.numeroMarchas = +teclado('Número de marchas: ');
    return veiculo;
}


