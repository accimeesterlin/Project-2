const username = prompt("What is your username?")
    // const socket = io('http://localhost:9000'); // the / namespace/endpoint
const socket = io('https://boiling-brushlands-51676.herokuapp.com/' || 'http://localhost:3000', {
    query: {
        username: username
    }
});
let nsSocket = "";
// listen for nsList, which is a list of all the namespaces.
socket.on('nsList', (nsData) => {
    console.log("The list of .rooms has arrived!!")
        // console.log(nsData)
    let namespacesDiv = document.querySelector('.namespaces');
    namespacesDiv.innerHTML = "<h2><u>Chit<< >>Chat</u></h2>";
    nsData.forEach((ns) => {
        namespacesDiv.innerHTML += `<div class="namespace" ns=${ns.endpoint} ><img src="${ns.img}" /></div>`
    })

    //namespacesDiv.innerHTML += "About Us"
    namespacesDiv.innerHTML += "<br>";
    namespacesDiv.innerHTML += "About Us"
        // Add a clicklistener for each NS
    console.log(document.getElementsByClassName('namespace'))
    Array.from(document.getElementsByClassName('namespace')).forEach((elem) => {
        // console.log(elem)
        elem.addEventListener('click', (e) => {
            const nsEndpoint = elem.getAttribute('ns');
            // console.log(`${nsEndpoint} I should go to now`)
            joinNs(nsEndpoint)
        })
    })
    joinNs('/wiki');
})