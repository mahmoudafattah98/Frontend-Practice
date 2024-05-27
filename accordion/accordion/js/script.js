let cart = ["milk", "coffee", "btengan"];
for (let index = 0; index < cart.length; index++) {
    console.log(cart[index]);
}

function example(firstName, lastName) {
    let fullName = "Hi " + firstName + " " + lastName + " !"
    console.log(fullName)

}

example("Mahmoud", "Abdelfattah")


function add(num1, num2, myCallback) {
    let sum = num1 + num2
    myCallback(sum)
}

function display(result) {
    console.log(result)
}

add(20, 30, console.log)

let faqs = document.querySelectorAll(".faq");
for (let i = 0; i < faqs.length; i++) {
    faqs[i].addEventListener("click", () => {
        faqs[i].classList.toggle("active")
    })
}