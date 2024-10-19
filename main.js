
import { renderCards } from "./scripts/ui.js";


// Dataya heryerde erişebilmek içim global degişken tanımaı
let data;

// Men verilerin json dosyasından çeken fonksiyon

async function fetcMenu() {
    // apı verileri almak
    const res = await fetch("./db.json");
    //    json verisini js formatına çevir
    data = await res.json();

};




//  Sayfanın yüklenme olayı
window.addEventListener("DOMContentLoaded", () => {
    // VERİLERİ ÇEKEN FONKSİYONLARI ÇALIŞTIR
    fetcMenu()
        // fonksiiyon başarılı oldugunda kartları ekrana basan fonksiyon
        .then(() => renderCards(data.menu));


});
// Buttons alanındaki input çagır
const inputs = document.querySelectorAll("#buttons input");
// input  dizisini dön
inputs.forEach((input) => {
    // herbir input seçilme olayı izleme
    input.addEventListener("change", () => {
        // seçilen kategori
        const selected = input.id;

        if (selected === "all") {
            renderCards(data.menu);
        } else {
            // menü elemanlarından seçilen kategori ait olanları filtrele
            const filtred = data.menu.filter((i) => i.category === selected);
            // filtrenen datayı ekrana bas 
            renderCards(filtred);
        }

    });
});
