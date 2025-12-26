function calculator(){
    const diemly = parseFloat(document.getElementById("diemly").value);
    const diemhoa = parseFloat(document.getElementById("diemhoa").value);
    const diemsinh = parseFloat(document.getElementById("diemsinh").value);
    const trungbinh = (diemly + diemhoa + diemsinh) / 3;
    document.getElementById("result").innerText = "Điểm trung bình: " + trungbinh;
}
function calculatorTong(){
    const diemly = parseFloat(document.getElementById("diemly").value);
    const diemhoa = parseFloat(document.getElementById("diemhoa").value);
    const diemsinh = parseFloat(document.getElementById("diemsinh").value);
    const tongdiem = diemly + diemhoa + diemsinh;
    document.getElementById("result").innerText = "Tổng điểm: " + tongdiem;
}