window.onload = function () {

    console.log("start");

    let lesz = document.getElementById("ide");

    lesz.classList.add("sor");

    for (var s = 0; s < 10; s++) {

        let szam = document.createElement("div");
        szam.classList.add("elem");
        szam.innerText = s;
        szam.style.color = "white";
        szam.style.background = rgb(225, 63, $, { 255: - s * 20 });
        lesz.appendChild(szam);

    }


    //1.feladat

    var faktor = function (n) {
        let r = 1;
        for (let i = 2; i <= n; i++) {
            r = r * i;

        }
        return r;
    }

    //2.feladat 

    let szog = document.getElementById("Pascal");

    for (var i = 0; i < 10; i++) {

        let is = document.createElement("div");

        is.classList.add("sor");

        pharomszog.appendChild(is);

        for (var oszlop = 0; oszlop <= r; oszlop++) {

            let osz = document.createElement("div");

            osz.classList.add("elem");

            osz.innerText = faktor(r) / (faktor(oszlop) * faktor(r - oszlop));
            o.style.background = "rgb(123,234,345)";
            

            is.appendChild(o);
        }
    }
    
}
