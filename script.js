const input = document.querySelector("#input");
const img = document.querySelector("#img");
const btn = document.querySelector("#btn");
const qrcls = document.querySelector(".qr-code")
btn.addEventListener("click",() => {
    let val = input.value.trim();
    if (!val){
        alert("Enter a value!")
    }
    else{
        let url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${val}`
        btn.innerText = "Generating QR..."
        img.src = url;
        img.addEventListener("load",()=>{
            btn.innerText = "Generate QR Code";
            qrcls.style.height = "150px";
        input.value = "";
    });
    }
});