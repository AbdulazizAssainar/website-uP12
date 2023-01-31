function calcData() {
    const getCapital: number = (document.getElementById("capital") as HTMLInputElement).value as unknown as number 
    const getRatio: number = (document.getElementById("percentage") as HTMLInputElement).value  as unknown as number / 100
    const getDays: number = (document.getElementById("days") as HTMLInputElement).value  as unknown as number
    let Net: number
    
    let Balance = getCapital

    for (var i = 0; i < getDays; i++) {
        Balance = Number(Balance) + Number(Balance * getRatio)
        Net = Balance - getCapital
    }

    Balance = Math.trunc(Balance)
    Net = Balance - getCapital
    
    document.getElementById("pNet").innerHTML = String(Net);
    document.getElementById("pBalance").innerHTML = String(Balance);

}