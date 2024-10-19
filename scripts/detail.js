// Url deki arama parametlerine (search-param)eriş
// Js tarayıcı ile alakalı olan verileri erişmek istiyorsak window  nesnesi kullanırız
// 
// JS URL DEKİ arama parametrelei yönetmeyi yarayan yerleşik class vardır.UrlSearchParams.

const params = new URLSearchParams(window.location.search);
// Yukarıdaki clastan oluşturdugumuz nesne sayesinde urldeki ara parametreleri güncellemeye  erişmeye  silmeye yarayan metodların kullanabiliyoruz bizde  get methodu il id parametresine eriştik.


const id = params.get("id");

//1  sayfanı yüklenme olayı
document.addEventListener("DOMContentLoaded", async () => {


    // 2 apiden vrileri al

    const res = await fetch("../db.json");
    const data = await res.json();



    // 3 veriler arasından url id denk gelen ürünü bul
    const product = data.menu.find((item) => item.id == id);


    if (!product) {
        // 4 ürün bulunamazsa 404 sayfasını renderle
        renderNotFound();
    } else {
        // 5 ürün bulunursa  içerigini apiden aldıgıız ürüne göre renderle
        renderPage(product);
    }
});
//  içerisine sayfa içerigine basan divi çagır
const outlet = document.getElementById("outlet");
// sayfa içerigini dinamik olrak ekrana basan fonksiyon
function renderPage(product) {
    outlet.innerHTML = `
     
        <div class="d-flex justify-content-between fs-5">
            <a href="index.html">
                <img width="35px" src="./images/home.png" alt="">
            </a>
            <p>anasayfa / ${product.category}/${product.title.toLowerCase()} </p>
        </div>
        <h1 class="text-center my-4">${product.title}</h1>
        <img src="${product.img}" style="max-height: 400px" class="rounded object-fit-cover shadow">

        <h4 class="mt-4">
            <span>Ürünün Kategorisi:</span>
            <span class="text-success">${product.category}</span>
        </h4>

        <h4 class="mt-4">
            <span>Ürünün Kategorisi:</span>
            <span class="text-success">${(product.price * 30).toFixed(2)}₺</span>
        </h4>
        <p class="lead">
            ${product.desc}
        </p>

    `;
}


// 404 sayfa içerigini ekrana basan fonk

function renderNotFound() {
    outlet.innerHTML = `
    <div style="height: 90vh" class="d-flex justify-content-center  align-items-center">
    <div class="d-flex flex-column align-items-center gap-3">
    <h1 class="text-center">Aradıgınız ürün mevcut degildir</h1>

    <a href="index.html">Anasayfaya Dönün</a>
    </div>
    </div>
    `;
}