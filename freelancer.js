const names = ["Alice", "Bob", "Carol"];
const occupations = ["Writer", "Teacher", "Programmer"];
const averagePrice = [];
const freelancers = [
    { name: "Alice", price: 30, occupation: "writer" },
    { name: "Bob", price: 50, occupation: "teacher" },
    
];
const newFreelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];

// const addShapeIntervalId = setInterval(addShape, 1000);
const addFreelancerIntervalId = setInterval(addFreelancer, 1000);
render();

// const squares = document.querySelector("#squares");
//   const squareElements = shapes.map((shape) => {
//     const element = document.createElement("li");
//     element.classList.add(shape.color, shape.size);
//     return element;
//   });
//   squares.replaceChildren(...squareElements);

function calculateAverage() {
    let sum = freelancers.reduce((total, freelancer) => total + freelancer.price, 0);
    return sum / freelancers.length;
}

// function calcAverage () {
//     freelancers.reduce(newFreelancers.price);
// }
// // calcAverage();


function render () {
    const freelancersList = document.querySelector("#freelancers");
    freelancers.forEach((freelancer)=>{
        const freelancersDiv = document.createElement("div");
        freelancersDiv.innerHTML = `<p>name: ${freelancer.name}</p>
        <p>price: ${freelancer.price}</p>
        <p>occupation: ${freelancer.occupation}</p>`
        freelancersList.appendChild(freelancersDiv)
    })
}

function addFreelancer() {
    const freelancer = newFreelancers[Math.floor(Math.random() * newFreelancers.length)];
    freelancers.push(freelancer);
    render();
}


// const color = colors[Math.floor(Math.random() * colors.length)];