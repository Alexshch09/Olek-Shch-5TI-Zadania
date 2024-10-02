function oblicz() {
    let uslugi = document.getElementsByTagName("input")
    let cennik = document.getElementById("cena")
    let ceny = [45, 30, 20, 50];
    let cena = 0;

    for (let i = 0; i < uslugi.length; i++) {
        const element = uslugi[i];
        if (element.checked) {
            cena += ceny[i];
        }
    }
    cennik.innerText = "Cena Zabiegow: "+cena;
}
