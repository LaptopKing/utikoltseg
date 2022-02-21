function uzemanyag() {
	var fajta = document.getElementById("fajta");
	if (fajta.value == "Benzin")
	{
		document.getElementById("egysegar").value = 478;
	}
	else if (fajta.value == "Dizel")
	{
		document.getElementById("egysegar").value = 518;
	}
}

function ellenorzes() {
	var nev = document.getElementById("nev").value;
	var lakcim = document.getElementById("lakcim").value;
	var szul = document.getElementById("szul-date").value;
	var gyartmany = document.getElementById("nev").value;
	var utazas = document.getElementById("utazas-date").value;
	var kiindulas = document.getElementById("kiindulas").value;
	var uticel = document.getElementById("uticel").value;
	var tovabbi = document.getElementById("tovabbi-uticel").value;
	var tavolsag = document.getElementById("tavolsag").value;

	if (nev == "" || lakcim == "" || szul == "" || gyartmany == "" || utazas == "" || kiindulas == "" || uticel == "" || tavolsag == "")
	{
		alert("Kérem adjon meg minden szükséges adatot!");
	}
	else {
		var utikoltseg = Math.round(document.getElementByID("fogyasztas").value * document.getElementById("egysegar").value * tavolsag / 100);
		var ertekcsokkenes = tavolsag * 15;
	}
}

function nyomtatas() {

}