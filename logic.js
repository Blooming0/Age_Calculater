function main() {
    const day = document.getElementById("day").value
    const month = document.getElementById("month").value
    const year = document.getElementById("year").value

    Calc(day, month, year)
}

function Calc(day, month, year) {
    const date = new Date()//Thu Mar 07 2024 12:24:49 GMT+0300 (Arabian Standard Time)
    const result = document.getElementById("result")
    let currentDay = date.getDate()//Date not Day --> (day) give number in week --> (date) give number in month 
    let currentMonth = date.getMonth() + 1
    let currenYear = date.getFullYear()

    let all_month = [31, 28, 31, 30, 31, 30, 31, 31, 20, 31, 30, 31]

    if (day > currentDay) {
        currentDay = currentDay + all_month[currentMonth - 1]
        currentDay = currentDay - 1
    }

    if (month > currentMonth) {
        currentMonth = currentMonth + 12
        currenYear = currenYear - 1
    }

    let d = currentDay - day
    let m = currentMonth - month
    let y = currenYear - year


    result.innerHTML =
        `
            Your Age is ${y} Years<br>Your Next  birthDay aftar ${m} Months and ${d} Days

        `
        
}

