const set = new Set([1, 2, 2, 3, 4, 4, 5, 6, 6])

set.add(8).add(10)
console.log(set.size)

set.delete(1)

console.log(set)

set.clear()
console.log(set)