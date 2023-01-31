"use strict";
function calcData() {
    const getCapital = document.getElementById("capital").value;
    const getRatio = document.getElementById("percentage").value / 100;
    const getDays = document.getElementById("days").value;
    let Net;
    let Balance = getCapital;
    for (var i = 0; i < getDays; i++) {
        Balance = Number(Balance) + Number(Balance * getRatio);
        Net = Balance - getCapital;
    }
    Balance = Math.trunc(Balance);
    Net = Balance - getCapital;
    document.getElementById("pNet").innerHTML = String(Net);
    document.getElementById("pBalance").innerHTML = String(Balance);
}
//# sourceMappingURL=olympCalc.js.map