const arr = []

for (let i = 0; i < 10; i++) {
    arr[i] = +((Math.random()*100)/10).toFixed(0)
}

console.log(arr)

setInterval(() => {}, 1000)

const a = 100

arr.push('First')