// var nama = 'Ihab';
// nama = 'huih';

// console.log(nama);
// alert(nama);

// var namainput = prompt("Ihab");
// alert(`selamat datang ${namainput} di website kami`);




// var namainput = prompt('masukan nama anda')
// var Jurusaninput = prompt('masukan jurusan anda')
// var Alamatinput = prompt('masukan alamat anda')
// alert(`selamat datang ${namainput} jurusan anda ${Jurusaninput} alamat anda ${Alamatinput}`)

// for (var i = 0; i <1000; i++){document.write(`Arya ganteng banget! <br>`)}

// var ngulang = true;
// while(ngulang){
//     console.log(`helo`);
//     ngulang = confirm(`lagi nih?`);

//  var i=1;

//  while(i <=5){
//     console.log(i);
//     document.write(i);
//     i++;
//  }
 
// let sisi = prompt(`masukan ukuran sisi persegi`),
//    hasil = sisi*sisi;
//    alert(`luas persegi adalah ${hasil}`);

//    let alas = prompt(`masukan alas segit`)
//    let tinggi= prompt(`masukan tinggi segit`)
//    hasil = 0.5*alas*tinggi;
//    alert(`luas segit adalah ${hasil}`);

//    let jari = prompt(`masukan jari ling`);
//    hasil= 3.14159265359*jari*jari
//    alert(`luas ling adalah ${hasil}`);

for (let i= 0; i < 3;i++ ) {
    let password = prompt("Masukan Password");

    if (password == "napin niggeer") {
        alert("Selamat datang di kelas nigger");
        windows.location.href = "dashboard.html";
        break; //Keluar dari loop jika password benar
        
    } else { 
        alert("Password salah, coba lagi");
    }
}
document.write(`<h1>Gagal masuk, silahkan muat ulang halaman!<h1/>`)