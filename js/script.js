// function checarcor(){
//     let azul = document.getElementById('az')
//     if (azu.checked){
//     document.getElementById('azul').style.backgroundColor = 'blue';
//      }else{
//     document.getElementById('azul').style.backgroundColor = 'white';
//     }    
// }
// function checarcor(){
//     let vermelho = document.getElementById('ve')
//     if (ver.checked){
//     document.getElementById('vermelho').style.backgroundColor = 'red';
//      }else{
//     document.getElementById('vermelho').style.backgroundColor = 'white';
//     }    
// }
// function checarcor(){
//     let ama = document.getElementById('am')
//     if (ama.checked){
//     document.getElementById('amarelo').style.backgroundColor = 'yellow';
//      }else{
//     document.getElementById('amarelo').style.backgroundColor = 'white';
//     }    
// }

function checarcor() {
    let azul = document.getElementById('az');
    let vermelho = document.getElementById('ve');
    let amarelo = document.getElementById('am');

    document.getElementById('azul').style.backgroundColor = azul.checked ? 'purple' : 'white';
    document.getElementById('vermelho').style.backgroundColor = vermelho.checked ? 'pink' : 'white';
    document.getElementById('amarelo').style.backgroundColor = amarelo.checked ? '#00988d' : 'white';
}
