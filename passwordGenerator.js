const lengthPassword = document.getElementById("LengthPassword");
const password = document.getElementById("Password");
const saveButton = document.getElementById("saveButton")

function passwordGenerator(len){
    const LowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const UpperAlphabet = "ABCDEFGHIJKLMNOPQRTSTUVWXYZ"; 
    const Number = "1234567890"
    const Symbol = "!@#$%^&*()_+-=[];',./{}:<>?|"

    const Data = LowerAlphabet + UpperAlphabet + Number + Symbol;

    let generator = '';
    for (let index = 0; index < len; index++){
        //MASEHH BINGUNG DENGAN LOGIC INII!!!
        generator += Data[Math.floor(Math.random() * Data.length)];
    }
    return generator
}

function getPassword(){
    const newPassword = passwordGenerator(lengthPassword.value);
    password.value = newPassword;
    //Untuk mendelay pop-up pada isi fungsi
    setTimeout( () => {
        alert("Password Berhasil di Generate!!");
        //delay nya dalam satuan ms
    }, 1000)
    
}



function savePassword(){
    const myPassword = password.value;
    //Cara untuk mendownload suatu file dalam bntuk txt
    // saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`(Tuliskan isi dari file yang akan di download)`))
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`password saya: ${myPassword}`));
    // saveButton.setAttribute('download', '(Tuliskan nama file yang akan di download dengan format .txt)')
    saveButton.setAttribute('download', 'MyPasswordGenerator.txt');
    // document.title = password.value
    
    
    setTimeout( () => {
        alert("Password Berhasil di Simpan!!");
        //delay nya dalam satuan ms
    }, 1000)
}