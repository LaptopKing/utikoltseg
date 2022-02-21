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
		var utikoltseg = Math.round(parseInt(document.getElementById("fogyasztas").value) * parseInt(document.getElementById("egysegar").value) * tavolsag / 100);
		var amortizacio = tavolsag * 15;
		document.getElementById("utikoltseg").value = utikoltseg;
		document.getElementById("amortizacio").value = amortizacio;
		document.getElementById("elszamolhato-koltseg").value = utikoltseg + amortizacio;
	}
}

function nyomtatas() {
	var nev = document.getElementById("nev").value;
	var lakcim = document.getElementById("lakcim").value;
	var szul = document.getElementById("szul-date").value;
	var gyartmany = document.getElementById("nev").value;
	var utazas = document.getElementById("utazas-date").value;
	var kiindulas = document.getElementById("kiindulas").value;
	var uticel = document.getElementById("uticel").value;
	var tovabbi = document.getElementById("tovabbi-uticel").value;
	var tavolsag = document.getElementById("tavolsag").value;
	var fajta = document.getElementById("fajta").value;
	var fogyasztas = document.getElementById('fogyasztas').value + " l/100km";
	var utikoltseg = Math.round(parseInt(document.getElementById("fogyasztas").value) * parseInt(document.getElementById("egysegar").value) * tavolsag / 100);
	var amortizacio = tavolsag * 15;
	document.write('<!DOCTYPE html><html><head><title>Útiköltség-elszámolás</title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"><script type="text/javascript" src="script.js"></script></head><body><div class="container"><h3 class="font-weight-bold">Útiköltség-elszámolás</h3><h4 class="font-weight-bold">Személyes adatok</h4><table class="table text-left ml-5"><tr><td>Név:</td><td>' + nev + '</td></tr><tr><td>Lakcím:</td><td class="text-left">' + lakcim + '</td></tr><tr><td>Születési dátum:</td><td class="text-left">' + szul + '</td></tr></table><h4 class="font-weight-bold">Gépjármű- és üzemanyagadatok</h4><table class="table text-left ml-5"><tr><td>Gépjármű gyártmánya, típusa:</td><td class="text-left">' + gyartmany + '</td></tr><tr><td>Üzemanyag fajtája:</td><td class="text-left">' + fajta + '</td></tr><tr><td>Fogyasztási norma:</td><td class="text-left">' + fogyasztas + '</td></tr><tr><td>Utazás dátum:</td><td class="text-left">' + utazas + '</td></tr><tr><td>Üzemanyag egységára:</td><td class="text-left">' + document.getElementById("egysegar").value + 'Ft/l</td></tr></table><br><h4 class="font-weight-bold">A megtett út adatai</h4><table class="table text-left ml-5"><tr><td>Kiindulási hely:</td><td class="text-left">' + kiindulas + '</td></tr><tr><td>Úticél:</td><td class="text-left">' + uticel + '</td></tr><tr><td>További úticél:</td><td class="text-left">' + tovabbi + '</td></tr><tr><td>Összes megtett távolság Google Maps alapján:</td><td class="text-left">' + tavolsag + 'km</td></tr><tr><td></td><td></td></tr></table><hr><table class="table text-left ml-5"><tr><td>Útiköltség:</td><td class="text-left">' + utikoltseg + '</td></tr><tr><td>Amortizáció:</td><td class="text-left">' + amortizacio + '</td></tr><tr class="font-weight-bold"><td>Összes elszámolható költség:</td><td class="text-left">' + document.getElementById("elszamolhato-koltseg").value + '</td></tr></table><br><br><div class="text-left"> Aláírásommal igazolom, hogy az adatok a valóságnak megfelelnek. </div><br><br><div class="text-left"> ................................................................. 2018. október 31.</div><br><br><div class="text-right text-break"> .................................................................<br></div><div style="text-align:right;margin-right:120px"> aláírás </div></div></body></html>');
}