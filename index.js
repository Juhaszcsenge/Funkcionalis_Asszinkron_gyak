import './style.css';

let termekek = []

function adatMegjelenites(termekLista){
    let display = document.getElementById('termekek')
    display.innerHTML = ""

    for (let p of termekLista) {
        let li = document.createElement('li')
        li.innerHTML += "id: " + p.id + "<br>"; 
        li.innerHTML += "title: " + p.title + "<br>"; 
        li.innerHTML += "description: " + p.description + "<br>"; 
        li.innerHTML += "price: " + p.price + "<br>"; 
        li.innerHTML += "discountPercentage: " + p.discountPercentage + "<br>"; 
        li.innerHTML += "rating: " + p.rating + "<br>"; 
        li.innerHTML += "stock: " + p.stock + "<br>"; 
        li.innerHTML += "brand: " + p.brand + "<br>"; 
        li.innerHTML += "category: " + p.category + "<br>"; 

    

        // "": "smartphones",
        display.appendChild(li)
    }
}
document.addEventListener("DOMContentLoaded", async () => {
    let response =  await fetch('./products.json');
    let eredmeny = await response.json();
    for (let p of eredmeny.products) {
        termekek.push(p)
   }
   let alaplista = termekek
   document.getElementById('mind').addEventListener('click', () => { adatMegjelenites(alaplista)})
   
   document.getElementById('abc').addEventListener('click', async () => {
    let response =  await fetch('./products.json');
    let eredmeny = await response.json();
    let abclista = eredmeny.products.sort((a,b) => a.title.localeCompare(b.title))
    adatMegjelenites(abclista)
   })
   document.getElementById('Legdragabb').addEventListener('click' ,async () => {
    let response =  await fetch('./products.json');
    let eredmeny = await response.json();
    let legdragabb = eredmeny.products.sort((a,b) => b.price- a.price)
    adatMegjelenites(legdragabb)
   })
  let search =  document.getElementById('search')
  search.addEventListener('input', async () => {
    let response =  await fetch('./products.json');
    let eredmeny = await response.json();
    let szurt = eredmeny.products.filter(f => f.description.toLowerCase().includes(search.value.toLowerCase()))
    adatMegjelenites(szurt)
   })
   document.getElementById('ajanlat').addEventListener('click', async () => {
    let response =  await fetch('./products.json');
    let eredmeny = await response.json();
    let ajanlatLista = eredmeny.products.filter(f => f.price < 100).sort((a,b) => b.price- a.price)
    adatMegjelenites(ajanlatLista)
   })
});