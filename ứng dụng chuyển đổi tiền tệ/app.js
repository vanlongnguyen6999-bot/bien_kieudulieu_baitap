function convert(){
    const amount = document.getElementById("amount").value;
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const rate = 25000;
    let result;
    if(from == "VND" && to == "USD"){
        result = parseFloat(amount) / rate;
    }
    else if(from == "USD" && to == "VND"){
        result = parseFloat(amount) * rate;
    }
    else{
        result = parseFloat(amount);
    }
    document.getElementById("result").innerText = "Kết quả :" + result + " " + to;
}
