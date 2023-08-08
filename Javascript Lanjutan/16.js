//Destructuring

//function kalkulasi(a,b){
//	return [a + b,a - b,a * b,a / b];
//}
//const jumlah = penjumlahanPerkalian(2,3)[0];
//const kali = penjumlahanPerkalian(2,3)[1];

//const [jumlah,kali] =penjumlahanPerkalian(2,3);
//console.log(jumlah);
//console.log(kali);

//const [tambah,kurang,kali,bagi='tidak ada'] = kalkulasi(2,3);
//console.log(bagi);

//function kalkulasi(a,b){
//	return {
//		tambah : a + b,
//		kurang : a - b,
//		kali : a * b,
//		bagi : a / b
//	}
//}
//const{bagi,tambah,kali,kurang} = kalkulasi(2,3);
//console.log(kurang);

//Destructuring function arguments
const mhs ={
	nama :'Dea Dinda',
	umur : 17,
	email : 'deadinda@unpas.ac.id',
	nilai : {
		tugas : 80,
		uts : 85,
		uas : 75
	}
}
//function cetakMhs(mhs){
//	return`Halo,nama saya ${mhs.nama},saya berumur ${mhs.umur} tahun.`;
//}
//console.log(cetakMhs(mhs));


function cetakMhs({nama,umur,nilai}){
	return`Halo,nama saya ${nama},saya berumur ${umur} tahun,dan
	nilai uas saya adalah ${nilai.uas} .`;
}
console.log(cetakMhs(mhs));

