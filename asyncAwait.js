//Promise
// then catch
// async await

function log(etapa){
    return console.log(etapa + new Date().toLocaleTimeString())
}

function requisicaoSimulada(nome, tempoMs = 1500, deveFalhar = false) {
    return new Promise((resolve,reject) => { 
        setTimeout(() => {
            if(deveFalhar){
                reject(new Error(`Falha em ${nome}`))
            }else{
                resolve(`${nome} concluida em ${tempoMs}ms`)
            }
        },tempoMs)
    })
}


function exemploThenCatch(){
    log("1. Inicio (sem await)");

    requisicaoSimulada("Buscar Usuario", 2000)
        .then((resultado) => {
            log(`3. Then ${resultado}`)
        })
        .catch((erro) => {
            console.log("Erro capturado com .catch" + erro.message);
        })
        log("2.Continuou o fluxo sem esperar a promise")
    }

async function exemploThenCatch(){
    log("1.Etapa com Async Await");
    try {
        const resultado = await requisicaoSimulada("Buscar Usuario", 5000)
        log("2. Resultado obtido com await" + resultado)
    } catch (error) {
        console.error(error.message)
    }
    log("3. So roda depois do Await")
}

exemploThenCatch()