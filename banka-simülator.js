let evet = document.getElementById("evet");
let hayir = document.getElementById("hayir");
let kiraDiv = document.querySelector(".kira");
let buttonSifirla = document.querySelector(".buttonSifirla");
evet.addEventListener("change", function () {

    if (evet.checked) {
        kiraDiv.style.display = "block";
    }

});
hayir.addEventListener("change", function () {

    if (hayir.checked) {
        kiraDiv.style.display = "none";
    }

});
let hesapla = document.querySelector("#hesapla");
hesapla.addEventListener("click", function (e) {
    e.preventDefault();
    let riskPuan = 100;
    let name = document.querySelector("#ad");
    let kullanici = document.querySelector("#kullanici");
    kullanici.textContent = name.value;
    let age = document.querySelector("#yas").value;
    if (age < 18) {
        alert("18 yaşından küçüklere kredi verilemez!")
    }
    else if (age >= 18 && age <= 21) {
        riskPuan -= 10
    }
    let income = Number(document.querySelector("#aylikGelir").value);
    if (income <= 0) {
        alert("Aylık gelir 0 olamaz!")
    }
    else if (income < 20000) {
        riskPuan -= 20
    }

    let debt = Number(document.querySelector("#borc").value);
    if (debt / income > 0.5) {
        riskPuan -= 25
    }
    let kiraTutar = Number(document.querySelector("#kiraTutar").value);
    let hire = document.getElementsByName("kiravarmi");
    let amount = document.querySelector(".kira");
    let toplamGider = debt + kiraTutar;
    let kalanGelir = income - toplamGider;

    let secilen = document.querySelector('input[name="kiravarmi"]:checked');
    if (secilen && secilen.value == "evet") {

    }
    else {
        kiraTutar = 0;
    }

    let krediTuru = document.querySelector("#krediTuru").value;
    if (krediTuru == "ev") {
        riskPuan += 10
    }
    else if (krediTuru == "tasit") {
        riskPuan += 0
    }
    else {
        krediTuru == "ihtiyac"
        riskPuan -= 10
    }

    let istenenTutar = Number(document.querySelector("#istenen").value);
    if (istenenTutar <= 0) {
        alert("İstenen tutar 0 olamaz!")

    }



    let vade = Number(document.querySelector("#vade").value);
    if (vade == "3") {

        riskPuan -= 20;
    }
    else if (vade == "6") {
        riskPuan -= 10;
    }
    else if (vade == "9") {
        riskPuan += 0;
    }
    else {
        riskPuan += 10;
    }

    let faiz = Number(document.querySelector("#faiz").value);
    if (faiz < 0 || faiz > 20) {
        alert("Faiz 0 ila 20 aralığında olmalıdır!")

    }

    let sigorta = document.querySelector("#sigorta");
    if (!sigorta.checked) {
        riskPuan -= 20
    }
    else {

    }

    let gecikme = document.querySelector("#gecikme");
    if (gecikme.checked) {
        riskPuan -= 30
    }
    else {

    }
    let riskDurum = null;
    let toplamOdeme = istenenTutar + (istenenTutar * (faiz / 100));
    let aylikTaksit = toplamOdeme / vade;

    if (aylikTaksit > (kalanGelir * 0.7)) {
        riskPuan -= 35
    }
    let needle = document.querySelector(".needle");
    let krediSkoru = 300 + (riskPuan * 5.5);
    let derece = ((krediSkoru - 300) / 550) * 180 - 90;
    let yorum = "";
    needle.style.transform = `translateX(-50%) rotate(${derece}deg)`;
    let sonuc = document.querySelector(".sonuc")
    if (riskPuan >= 80) {
        riskDurum = "Düşük Risk";
        sonuc.style.color = "green";
    }
    else if (riskPuan < 0) {
        riskPuan = 0;
    }

    else if (riskPuan > 100) {
        riskPuan = 100;

    }
    else if (riskPuan >= 50) {
        riskDurum = "Orta Risk";
        sonuc.style.color = "orange";
    }
    else {
        riskDurum = "Yüksek Risk";
        sonuc.style.color = "red";
    }
    sonuc.innerHTML = `
<h2>${riskDurum}</h2>
<p>Kredi Skoru: ${krediSkoru}</p>
<p>Aylık Taksit: ${aylikTaksit}</p>
`;
    localStorage.setItem("krediskoru", krediSkoru)

});




































