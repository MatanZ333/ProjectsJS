// const usersTable = document.querySelector(".users-table");
// const sub = document.querySelector("#submitBtn");

// let users = [
//     {
//         fname: 'Matan',
//         lname: 'Zohar',
//         email: 'matan@gmail.com',
//         password: '133333324',
//         isLogedIn: false
//     },

//     {
//         fname: 'Avi',
//         lname: 'Perez',
//         email: 'avi@gmail.com',
//         password: '534321',
//         isLogedIn: false
//     },

//     {
//         fname: 'Eli',
//         lname: 'Cohen',
//         email: 'eli@gmail.com',
//         password: '354231',
//         isLogedIn: false
//     },

//     {
//         fname: 'Roni',
//         lname: 'Sharon',
//         email: 'roni@gmail.com',
//         password: '2346341',
//         isLogedIn: false
//     }
// ]

// for (let user of users) {
//     let row = usersTable.insertRow();
//     for (let key in user) {
//         let cell = row.insertCell();
//         cell.textContent = user[key];
//     }
//     let cell = row.insertCell();
//     document.createElement('btn');
// }

// sub.addEventListener('click', (event) => {
//     console.log(event);
//     event.preventDefault();

//     const user = {
//         fnaem: event.target.form["fname"].value,
//         lname: event.target.form["lname"].value,
//         email: event.target.form["email"].value,
//         password: event.target.form["password"].value,
//         isLogedIn: false
//     }

//     let row = usersTable.insertRow();
//     for (let key in user) {
//         let cell = row.insertCell();
//         cell.textContent = user[key];
//     }

//     for (let input of event.target.form) {
//         if (input.id != 'submitBtn') {
//             input.value = ""
//         };
//     }
// });


const userTable = document.querySelector(".users-table");
const submitBtn = document.querySelector("#submitBtn");

let users = [
    {
        fname: 'Matan',
        lname: 'Zohar',
        email: 'matan@gmail.com',
        password: '133333324',
        isLogedIn: false
    },

    {
        fname: 'Avi',
        lname: 'Perez',
        email: 'avi@gmail.com',
        password: '534321',
        isLogedIn: false
    },

    {
        fname: 'Eli',
        lname: 'Cohen',
        email: 'eli@gmail.com',
        password: '354231',
        isLogedIn: false
    },

    {
        fname: 'Roni',
        lname: 'Sharon',
        email: 'roni@gmail.com',
        password: '2346341',
        isLogedIn: false
    }
]

for (let user of users) {
    let row = userTable.insertRow();
    for (let key in user) {
        let cell = row.insertCell();
        cell.textContent = user[key];
    }

    let cell = row.insertCell();
    cell.textContent = users[user];

    document.createElement("btn");
}

submitBtn.addEventListener("click", (event) => {
    console.log(event);
    event.preventDefault();


    const user = {
        fname: event.target.form["fname"].value,
        lname: event.target.form["lname"].value,
        email: event.target.form["email"].value,
        password: event.target.form["password"].value,
        isLogedIn: false
    }

    let row = userTable.insertRow();
    for (let key in user) {
        let cell = row.insertCell();
        cell.textContent = user[key];
    };

    for (let input of event.target.form) {
        if (input.id != 'submitBtn') {
            input.value = ""
        }
    }
});



