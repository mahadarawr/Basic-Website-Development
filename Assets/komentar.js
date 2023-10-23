function validasi() {
    var nama = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var komen = document.getElementById("comment").value;
    if (nama != "" && email!="" && komen !="") {
        alert('Feedback telah kami terima. Terimakasih!')
        return true;
    }
    else if (nama == "" && email != "" && komen != ""){
        alert('Anda belum memasukan nama anda!');
        return false;
    }
    else if (nama != "" && email == "" && komen != ""){
        alert('Anda belum memasukan email anda!');
        return false;
    }
    else if (nama != "" && email != "" && komen == ""){
        alert('Anda belum menulis feedback apapun!');
        return false;
    }
    else{
        alert('Anda wajib mengisi data dengan lengkap!');
        return false;
    }
}
//