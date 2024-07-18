let imgBox = document.getElementById("imgbox");
let QRimg = document.getElementById("QRimg");
let QRtext = document.getElementById("QRtext");

function generateQR() {
  QRimg.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    QRtext.value;
    imgBox.classList.add("show-img");
}