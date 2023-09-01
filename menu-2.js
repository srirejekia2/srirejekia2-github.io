let htm = '';
for (let i in data.menu) {
	let x = data.menu[i];
	htm += '<section id="' + x.anchor + '" class="w-100" style="padding-top: 3.5rem">';
	htm += '<h4 class="text-white text-center py-2 sticky-top" style="background-color: ' + x.warna + ' ;top: 3.5rem">' + x.tipe + '</h4><div class="row mx-auto">';

	for (let j in x.daftar) {
		let y = x.daftar[j];
		htm += '<div class="col-sm-4 col-6 p-1">';
		htm += '<div class="card bg-warning-subtle">';
		htm += '<img src="img/' + y.gambar + '" class="card-img-top p-1" alt="' + y.nama + '" />';
		htm += '<div class="card-body">';
		htm += '<h5 class="card-title">' + y.nama + '</h5>';
		htm += '<p><span class="badge text-bg-primary float-start">' + y.harga + ' K</span>';
		if (y.laris) htm += ' <span class="badge text-bg-success float-end me-1">Terlaris</span>';
		htm += '</h5>';
		htm += '</p>';
		htm += '</div></div></div>';
	}
	htm += '</section>';
}
document.getElementById('daftar-menu').innerHTML = htm;
