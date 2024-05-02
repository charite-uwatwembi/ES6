const cartoons = new Set (['sponge-bob', 'Ben10', 'Teen- Titans', 'sponge-bob', 'Regural show'])


cartoons.add('Ninja-go')
cartoons.add('Ben10')
cartoons.delete('Ninja-go')
console.log(cartoons)
console.log(cartoons.has('sponge-bob'))
console.log(cartoons.size)
console.log(cartoons.values())


/*
 * Programming Quiz: Using Sets (3-1)
 *
 * Create a Set object and store it in a variable named `myFavoriteFlavors`. Add the following strings to the set:
 *     - chocolate chip
 *     - cookies and cream
 *     - strawberry
 *     - vanilla
 *
 * Then use the `.delete()` method to remove "strawberry" from the set.
 */
const myFavoriteFlavors = new Set ([])
myFavoriteFlavors.add('chocolate chip')
myFavoriteFlavors.add('cookies and cream')
myFavoriteFlavors.add('strawberry')

myFavoriteFlavors.add('vanilla')

myFavoriteFlavors.delete('strawberry')
console.log(myFavoriteFlavors)
console.log(myFavoriteFlavors.values())
