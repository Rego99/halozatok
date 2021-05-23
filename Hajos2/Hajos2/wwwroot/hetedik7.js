window.onload = function () {
    letoltes();
}

var kerdesek;
var kerdeszam;

function letoltes() {
    fetch('/questions.json')
        .then(response => response.json())
        .then(data => let�lt�sBefejez�d�tt(data)
        )
};

function letolt�sBefejez(d) {
    console.log("Sikeres let�lt�s")
    console.log(d)
    k�rd�sek = d;
    k�rd�sMegjelen�t�s(k�rd�ssz�m)
}

function k�rd�sMegjelen�t�s(k�rd�s) {
    document.getElementById("k�rd�s_sz�veg").innerHTML = k�rd�sek[k�rd�s].questionText;
    document.getElementById("v�lasz1").innerHTML = k�rd�sek[k�rd�s].answer1;
    document.getElementById("v�lasz2").innerHTML = k�rd�sek[k�rd�s].answer2;
    document.getElementById("v�lasz3").innerHTML = k�rd�sek[k�rd�s].answer3;
    if (k�rd�sek[k�rd�s].image != "") {
        document.getElementById("k�p1").src = "https://szoft1.comeback.hu/hajo/" + k�rd�sek[k�rd�s].image;

    }
    else {
        document.getElementById("k�p1").src = "";

    }
}
function Vissza() {
    if (k�rd�ssz�m == 0) {
        k�rd�ssz�m = k�rd�sek.length - 1;
        let�lt�s();
        Clear()

    }
    else {
        k�rd�ssz�m--;
        let�lt�s();
        Clear()

    }
}
function El�re() {
    if (k�rd�ssz�m = k�rd�sek.length - 1) {
        k�rd�ssz�m = 0;
        let�lt�s();
        Clear()

    }
    else {
        k�rd�ssz�m++;
        let�lt�s();
        Clear()
    }
}
function V�lasz(n) {
    if (n == k�rd�sek[k�rd�ssz�m].correctAnswer) {
        document.getElementById("v�lasz" + n).classList.add("j�");
    }
    else {
        document.getElementById("v�lasz" + n).classList.add("rossz");
    }
}
function Clear() {
    document.getElementById("v�lasz1").classList.remove("rossz");
    document.getElementById("v�lasz1").classList.remove("j�");
    document.getElementById("v�lasz2").classList.remove("rossz");
    document.getElementById("v�lasz2").classList.remove("j�");
    document.getElementById("v�lasz3").classList.remove("rossz");
    document.getElementById("v�lasz3").classList.remove("j�");
}
function els�v() {
    V�lasz(1);
}
function m�sodikv() {
    V�lasz(2);
}
function harmadikv() {
    V�lasz(3);
}

fetch('/questions/4')
    .then(response => response.json())
    .then(data => console.log(data)
    );
function k�rd�sMegjelen�t�s(k�rd�s)
{
    console.log(k�rd�s);
    document.getElementById("k�rd�s_sz�veg").innerText = k�rd�s.questionText
    document.getElementById("v�lasz1").innerText = k�rd�s.answer1
    document.getElementById("v�lasz2").innerText = k�rd�s.answer2
    document.getElementById("v�lasz3").innerText = k�rd�s.answer3
    document.getElementById("k�p").src = "https://szoft1.comeback.hu/hajo/" + k�rd�s.image;
}

  






