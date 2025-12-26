function calculatorChuVi(){
    const r = document.getElementById("bankinh").value;
    const chuvi = 2 * Math.PI * parseFloat(r);
    document.getElementById("result").innerText = "Chu vi hình tròn : " + chuvi;
}