function callculator(){
    const diemly = document.getElementById("diemly").value;
    const diemhoa = document.getElementById("diemhoa").value;
    const diemsinh = document.getElementById("diemsinh").value;
    const trungbinh = (parseFloat(diemly) + parseFloat(diemhoa) + parseFloat(diemsinh)) / 3;
    document.getElementById("result").innerText = "Diem trung binh :" + trungbinh;
}

function callculatortong(){
    const diemly = document.getElementById("diemly").value;
    const diemhoa = document.getElementById("diemhoa").value;
    const diemsinh = document.getElementById("diemsinh").value;
    const tongdiem = parseFloat(diemly) + parseFloat(diemhoa) + parseFloat(diemsinh);
    document.getElementById("result").innerText = "Tong diem :" + tongdiem;
}