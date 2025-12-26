function convertCtoF(){
    const doC = document.getElementById("doC").value;
    const doF = (9/5) * parseFloat(doC) + 32;
    document.getElementById("result").innerText = "Nhiệt độ F: " + doF;
}