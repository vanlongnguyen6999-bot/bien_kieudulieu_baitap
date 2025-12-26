function tinhDienTichHinhTron(){
    const r = document.getElementById("bankinh").value;
    const dientich = Math.PI * Math.pow(parseFloat(r), 2);
    document.getElementById("result").innerText = "Diện tích hình tròn : "+ dientich;
}