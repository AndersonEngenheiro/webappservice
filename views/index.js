const botao = document.getElementById("btnMsg")

function msg(){
    alert('clicando no botão da página')
}

const p = new Promise(function(resolve){
    setTimeout(() => {
        alert('chamando promise...')
        resolve()
    }, 5000)
})


function conta(){
    alert(3*7)
    return 
}

async function executar(){
    await
        p.then(conta)       
}


//botao.addEventListener("click", msg) //sem usar parenteses na chamada da fn
botao.addEventListener("click", executar)


// element.addEventListener("click", myFunction);

// function myFunction() {
//   alert ("Hello World!");
// }