function buildHouse({floors = 1,
    color = 'red',
    walls = 'brick'}={}) {
        return `Your house has ${floors} floor(s) with ${color} ${walls} walls.`
}
console.log(buildHouse())