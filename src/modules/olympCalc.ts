function calcData() {
    
    const getCapital: number = (document.getElementById("capital") as HTMLInputElement).value as unknown as number 
    const getRatio: number = (document.getElementById("percentage") as HTMLInputElement).value  as unknown as number / 100
    const getDays: number = (document.getElementById("days") as HTMLInputElement).value  as unknown as number
    let Net: number
    
    let Balance = getCapital
    let array: [{
        net: string,
        balace: string,
        capital: string,
        ratio: string,
        days: string
    }]

    for (var i = 0; i < getDays; i++) {
        Balance = Number(Balance) + Number(Balance * getRatio)
        Net = Balance - getCapital
        array.push({
            net: String(Math.trunc(Net)),
            balace: String(Math.trunc(Balance)),
            capital: String(getCapital),
            ratio: String(getRatio),
            days: String(getDays)
        })
    }

    Balance = Math.trunc(Balance)
    Net = Balance - getCapital
    
    document.getElementById("pNet").innerHTML = String(Net);
    document.getElementById("pBalance").innerHTML = String(Balance);

}