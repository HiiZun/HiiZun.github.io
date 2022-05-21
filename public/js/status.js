let states = {
    online : "💚",
    checking : "🟠",
    offline : "❤️"
}
let servers = {
    srv01: "http://srv01.hiizun.fr",
    srv02: "https://status.youtubebot.hiizun.fr",
    srv03: "https://proxy.mcserverslisting.net"
}

document.addEventListener('DOMContentLoaded', () => {

    let serversNames = Object.keys(servers)

    serversNames.forEach(s => {
        let server = servers[s]

        document.getElementById(`title-${s}`).innerHTML = `${s} ${states["checking"]}`
        document.getElementById(`status-${s}`).innerHTML = `Status : ${states["checking"]} Checking`

        let bfore = Date.now()

        try {
        fetch(server, {mode: 'no-cors'})
            .catch(e=>{
                document.getElementById(`title-${s}`).innerHTML = `${s} ${states["offline"]}`
                document.getElementById(`status-${s}`).innerHTML = `Status : ${states["offline"]} Offline`
                document.getElementById(`ping-${s}`).innerHTML = `Latency : ${Date.now() - bfore} ms`
              }).then(r=>{
                console.log(s, r)
                document.getElementById(`title-${s}`).innerHTML = `${s} ${states["online"]}`
                document.getElementById(`status-${s}`).innerHTML = `Status : ${states["online"]} Online`
                document.getElementById(`ping-${s}`).innerHTML = `Latency : ${Date.now() - bfore} ms`
                });
        } catch (e) {
            document.getElementById(`title-${s}`).innerHTML = `${s} ${states["offline"]}`
            document.getElementById(`status-${s}`).innerHTML = `Status : ${states["offline"]} Offline`
            document.getElementById(`ping-${s}`).innerHTML = `Latency : ${Date.now() - bfore} ms`
        }
        })

});