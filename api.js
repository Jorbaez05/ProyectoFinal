const container= document.getElementById("cards-container")
console.log(container)

fetch("https://rickandmortyapi.com/api/character")
.then(response =>response.json())
.then(data=>{
    const dataApi = data.results
    console.log(dataApi)
    
    let acc = ""
    for(let i = 0; i < dataApi.length; i++){
        acc = acc + `
        <div class ="card"> 
            <div class ="container-img"> 
            <img src=${dataApi[i].image} alt=${dataApi[i].name}>
            </div>
            <p>
            ${dataApi[i].name}
           </p>
   </div>
   `
 }

container.innerHTML = acc
})


//PORTAL PERSONAJES//
const portal = document.getElementById('portal');

function animatePortal() {
    let angle = 0;

    function animate() {
        angle += 0.02;
        const x = Math.sin(angle) * 50; 
        const y = Math.cos(angle) * 20; 

        portal.style.transform = `translate(${x}px, ${y}px)`;

        requestAnimationFrame(animate);
    }

    animate();
}

animatePortal();










