const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];
// snack 1

// const longBooks = books.filter(b => b.pages > 300)
// console.log(longBooks)

// const longBooksTitles = longBooks.map((l) => {
//     return l.title
// })
// console.log(longBooksTitles)

// snack 2

// const availableBooks = books.map(b => b)
// console.log(availableBooks)

// const discountedBooks = availableBooks.map((b) => {
//     return parseFloat((parseInt(b.price) * 0.80).toFixed(1)) + 
// })

// console.log(discountedBooks)

// const fullPricedBook = discountedBooks.filter((d) => {
//     return Number.isInteger(d)
// })

// console.log(fullPricedBook)

// snack 3

// const authors = books.map(b => b.author)


// const areAuthorsAdults = authors.every((a) => {
//     return a.age > 18
// })
// console.log(areAuthorsAdults)


// authors.sort((a, b) => { return b.age - a.age })
// console.log(authors)

// snack 4

const ages = books.map(b => b.author.age)
console.log(ages)

const agesSum = ages.reduce((acc, num) => {
    return acc + num
});
console.log(agesSum)

const media = agesSum / books.length

console.log(media)