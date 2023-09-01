let htm = '';
for (let i in data.menu) {
	let x = data.menu[i];
	htm += '<section id="' + x.anchor + '" class="w-100" style="padding-top: 3.5rem">';
	htm += '<h4 class="text-white text-center py-2 sticky-top" style="background-color: ' + x.warna + ' ;top: 3.5rem">' + x.tipe + '</h4><div class="row mx-auto">';

	htm += '<div class="px-3"><table class="table table-striped w-100"><tbody>';
	for (let j in x.daftar) {
		let y = x.daftar[j];

		htm += '<tr>';
		htm += '<td>' + y.nama + '</td>';
		htm += '<td>' + y.harga;
		if (y.harga > 0) htm += ' K';
		htm += '</td>';
		htm += '</tr>';
	}
	htm += '</div></tbody></table>';
	htm += '</section>';
}
document.getElementById('daftar-menu').innerHTML = htm;
