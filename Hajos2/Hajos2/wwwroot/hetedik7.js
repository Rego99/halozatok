window.onload = function () {
    letoltes();
}

var kerdesek;
var kerdeszam;

function letoltes() {
    fetch('/questions.json')
        .then(response => response.json())
        .then(data => letöltésBefejezõdött(data)
        )
};

function letoltésBefejez(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d;
    kérdésMegjelenítés(kérdésszám)
}

function kérdésMegjelenítés(kérdés) {
    document.getElementById("kérdés_szöveg").innerHTML = kérdések[kérdés].questionText;
    document.getElementById("válasz1").innerHTML = kérdések[kérdés].answer1;
    document.getElementById("válasz2").innerHTML = kérdések[kérdés].answer2;
    document.getElementById("válasz3").innerHTML = kérdések[kérdés].answer3;
    if (kérdések[kérdés].image != "") {
        document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdések[kérdés].image;

    }
    else {
        document.getElementById("kép1").src = "";

    }
}
function Vissza() {
    if (kérdésszám == 0) {
        kérdésszám = kérdések.length - 1;
        letöltés();
        Clear()

    }
    else {
        kérdésszám--;
        letöltés();
        Clear()

    }
}
function Elõre() {
    if (kérdésszám = kérdések.length - 1) {
        kérdésszám = 0;
        letöltés();
        Clear()

    }
    else {
        kérdésszám++;
        letöltés();
        Clear()
    }
}
function Válasz(n) {
    if (n == kérdések[kérdésszám].correctAnswer) {
        document.getElementById("válasz" + n).classList.add("jó");
    }
    else {
        document.getElementById("válasz" + n).classList.add("rossz");
    }
}
function Clear() {
    document.getElementById("válasz1").classList.remove("rossz");
    document.getElementById("válasz1").classList.remove("jó");
    document.getElementById("válasz2").classList.remove("rossz");
    document.getElementById("válasz2").classList.remove("jó");
    document.getElementById("válasz3").classList.remove("rossz");
    document.getElementById("válasz3").classList.remove("jó");
}
function elsõv() {
    Válasz(1);
}
function másodikv() {
    Válasz(2);
}
function harmadikv() {
    Válasz(3);
}

fetch('/questions/4')
    .then(response => response.json())
    .then(data => console.log(data)
    );
function kérdésMegjelenítés(kérdés)
{
    console.log(kérdés);
    document.getElementById("kérdés_szöveg").innerText = kérdés.questionText
    document.getElementById("válasz1").innerText = kérdés.answer1
    document.getElementById("válasz2").innerText = kérdés.answer2
    document.getElementById("válasz3").innerText = kérdés.answer3
    document.getElementById("kép").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
}

  






