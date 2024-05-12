
function resimEkle(resimAdi) {
    
    var resimContainer = document.getElementById('resimContainer');
    resimContainer.style.backgroundImage = 'none';
    resimContainer.innerHTML = '';
    var img = document.createElement('img');
    img.src = resimAdi;
    resimContainer.appendChild(img);
}


var toplam = 0;

    function toggleSepet() {
        var sepetDiv = document.getElementById("sepetDiv");
        sepetDiv.style.display = (sepetDiv.style.display === "block") ? "none" : "block";
        
        if (sepetDiv.style.display === "block") {
            // Sepet açıldığında toplamı göster
            var toplamBilgisi = document.createElement("p");
            toplamBilgisi.textContent = "Toplam: " + toplam;
            
            sepetDiv.innerHTML = "";
            sepetDiv.appendChild(toplamBilgisi);
        }
    }

    function resmeTikla(sayi) {
        var sepetDiv = document.getElementById("sepetDiv");
        sepetDiv.style.display = "block";

        toplam += sayi;

        var toplamBilgisi = document.createElement("p");
        toplamBilgisi.textContent = "Toplam: " + toplam;
        
        sepetDiv.innerHTML = "";
        sepetDiv.appendChild(toplamBilgisi);
    }


    function showModal() {
        var modal = document.getElementById("modal");
        modal.style.display = "flex";
    }

    function closeModal() {
        var modal = document.getElementById("modal");
        modal.style.display = "none";
    }

    function stopPropagation(event) {
        event.stopPropagation();
    }