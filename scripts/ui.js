// !Arayüzü etki edecek bütün fonksiyonlar burda tutulcak
// menu list divini çagır
const menuList = document.getElementById("menu-list");




// Menü elemanlarını param. olarak alıp dizideki herbir eleman için ekrana basma
export const renderCards = (data) => {

    // Data dizisindeki herbir nesne için kart basıaz
    const cardsHTML = data
        .map(
            (item) => `    
            <a 
          href="/detail.html?id=${item.id}" 
          id="card" 
          class="d-flex flex-column flex-md-row text-dark gap-3 text-decoration-none">
            
          <img class="rounded shadow img-fluid" src= "${item.img}"/> 

            <div>
                <div class="d-flex justify-content-between">
                    <h5>${item.title}</h5>
                    <p class="text-success fw-bold">${(item.price * 30).toFixed(2)}</p>
                </div >
    <p class="">
        ${item.desc}
    </p>
            </div >
        </a >
    `

        ).join("");


    // oluşturdugumz kartları #menuList divinin içine aktar
    menuList.innerHTML = cardsHTML;

};

