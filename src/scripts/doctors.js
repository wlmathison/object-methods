// Lightning Exercise 1: Create an object that represents a bill from your doctor's office. It should have the following properties: officeName, streetAddress, doctorName, patientName, visitDate, amountBilled, dueDate. You provide example values for each one.

const dateVisited = "visitDate";
const owed = "amountBilled";
const patient = "patientName";

bill = {
    officeName: "Doctor's Office",
    streetAddress: "123 Main St",
    doctorName: "Dr. Jones",
    patientName: "John Doe",
    visitDate: "03/26/2019",
    amountBilled: 100.00,
    dueDate: "04/01/2019"
};

// console.log(bill[dateVisited]);
// console.log(bill[owed]);
// console.log(bill[patient]);

// Lightning Exercise 2: Copy the code below and paste it above your object.


// Use square bracket notation to output the value of those three properties to the console in Chrome.


// Lightning Exercise 3: Use Object.values() to output all the property values to the console in Chrome.

for (const value of Object.values(bill)) {
    console.log(value)
}

// Lightning Exercise 1: Output all of the key names from your doctor's office bill to the console in Chrome.

for(const key of Object.keys(bill)) {
    console.log(key)
};

// Lightning Exercise 2: Output all of the key names from your doctor's office bill to the DOM inside a parent <section> element. Wrap each one in a <span> element.

let doctorBillSection = document.createElement("section");
const outputElement = document.querySelector("#app");

for(const key of Object.keys(bill)) {
    doctorBillSection.innerHTML += `<span>${key}</span>`
};

outputElement.appendChild(doctorBillSection);