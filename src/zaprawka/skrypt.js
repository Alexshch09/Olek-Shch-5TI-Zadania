function oblicz() {
    let rodzaj = document.getElementById("rodzaj").value;
    let litr = document.getElementById("litr").value;
    let tekst = document.getElementById("cena");

    let cena = 0;

    if (rodzaj == 1) {
        cena = 4;
    } else if (rodzaj == 2) {
        cena = 3.5;
    } else {
        cena = 0;
    }
    wartosc = cena * litr;

    tekst.innerText = "koszt paliwa: " + wartosc + " zl";
}