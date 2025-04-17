// // let num = 1
// // do {
// //     num++
// // } while(
// // num <= 5
// // )

// // let menuItems = ['banana','orange']

// // let index = 0

// // let menuDisplay = ''

// // do {
// //     menuDisplay += `<p>${menuItems[index]}</p>`;

// //     index++
// // }while(index < menuItems.length)

// //     document.getElementById('menu-section').innerHTML = menuDisplay || 'No menu available'


// //     let user = {
// //         name: 'emma',
// //         job: 'frontend'
// //     }

// //     for (let key in user){
// //         console.log(`${key}: ${user [key]}`)
// //     }

// const user ={
//     name:'john',
//     age: 30,
//     email: 'john@example.com'
// }

// let userProfile = document.getElementById('userProfile')

// for (let key in user) {
//     let listItem = 
//     `<li>
//         ${key}: ${user[key]}
//     </li>`

//     userProfile.innerHTML += listItem
// }

// const products = ['laptop','phones','tablets','headphones']

// let productList = document.getElementById('product-list')

// for(let product of products) {
//     let listItem = 
//     `
//         <li>${product}</li>
//     `

//     productList.innerHTML += listItem
// }


// function greetCustomer(){
//     console.log('welcome to the bakery')
// }

// greetCustomer()
// greetCustomer()
// greetCustomer()

// function greetCustomer(name){
//     alert('welcome to the grocery, ' + name )
// }

// greetCustomer('kola')


// function calculateTotal(price,quantity){
//     return price * quantity
// }

// let totalCost = calculateTotal(5,3)
// console.log(totalCost)


// let applyDiscount = (price) => price * 0.8
// console.log(applyDiscount(100))

// function changeBackgroundColor() {
//     document.body.style.backgroundColor = 'red'
// }

// document.getElementById('changeColorButton').addEventListener('click', function() {
//     setTimeout(changeBackgroundColor, 2)
// })

// let x = 10

// function changeValue(val){
//     val = 20;
//     console.log('inside the function:', val)
// }

// changeValue(x)

// changeValue(x)

// console.log('inside the fundtiion:', x)

// let person = {
//     name: 'john',
//     age: 40
// }

// function changePerson(obj) {
//     obj.age = 30;

//     console.log('inside the function: ', obj.age)
// }

// changePerson(person)


// console.log('outside the function: ', obj.age)

// let person = {
//     name: 'john',
//     age: 30
// }


// changePerson(person)


// console.log('outside the function: ', person.age)


// function outerFunction() {
//     let counter = 0;

//     console.log(counter)

//     function innerFunction() {
//         counter++

//         return counter
//     }
// }

// let count = outerFunction()

// console.log(count())
// console.log(count())
// console.log(count())

// document.getElementById('signup-btn').addEventListener('click', function(){

// })

// function checkUsername(username, callback) {  
//     setTimeout(()=> {
//         console.log('checking usernmae...')
//         callback(true)
//     }, 2000
// )
// }

// function saveToDatabase(userData, callback){
//     setTimeout(()=> {
//         console.log('saving to database...')
//         callback(true)
//     }, 2000
// }

let pizzaOrder = new Promise ((resolve, reject) => {
    let pizzaReady = true;

    if(pizzaOrder){
        resolve('pizza is ready')
    }else{
        resolve('pizza is not ready')
    }
})

pizzaOrder
.then((message) => {
    console.log(message)

    return'enjoy your pizza'
})
.then((nextMessage) => {
    console.log('nextMessage')
})

.catch((error) => {
    console.log('error: ' + error)
})