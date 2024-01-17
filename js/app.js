function comprar(){
    //Chamando os elementos
    let tipo = document.getElementById('tipo-ingresso').value;
    let quantidadeInput = parseInt(document.getElementById('qtd').value);
    let eletmentoQuantidade = document.getElementById(`qtd-${tipo}`);
    let quantidadeDisponivel = parseInt(eletmentoQuantidade.textContent);
    
}