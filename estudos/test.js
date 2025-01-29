
/*

function sumNumbers() {
    let result = 1 + 1;

    if (result === 2) {
        sucessCallback();
    } else {
        errorCallback();
    }
}

function sucessCallback () {
    console.log("Yeah! number 2!")
}

function errorCallback () {
    console.log("Oops! something wrong.")
}

sumNumbers()

//promisse

let p = new Promise((resolve, reject) => {
    let a =  1 + 1;

    if (a === 2) {
        resolve('sucess')
    } else {
        reject('failed')
    }
})

p.then((message) => {
    console.log('This is in the then ' + message)
}).catch((err) => {
    console.log('This is the catch ' + err)
})

//Função que se transforma em promisse

const betterDeveloper = 'Pedro';

function whoIsBetterCallback(callback, errorCallback) {
    if(betterDeveloper != 'Pedro' && betterDeveloper != 'Gabriel') {
        errorCallback({
            name: 'This is wrong',
            message: betterDeveloper + '? Really'
        })
    } else {
        callback({
            name:  betterDeveloper, 
            message: "CDF's are the best"
        })
    }
}

whoIsBetterCallback((result) => {
    console.log((result.name) + '? Yeah!' + result.message)
}), (error) => {
    console.log(error.name + ' ' + error)
}



//Transformação em promisee

const betterDeveloper = 'Zé';

function whoIsBetterCallback(callback, errorCallback) {
    return new Promise((resolve, reject) => {
        
    if(betterDeveloper != 'Pedro' && betterDeveloper != 'Gabriel') {
        reject({
            name: 'This is wrong',
            message: betterDeveloper + '? Really'
        })
    } else {
        resolve({
            name:  betterDeveloper, 
            message: "CDF's are the best"
        })
    }
    })
}

whoIsBetterCallback()
    .then((result) => {
    console.log((result.name) + '? Yeah!' + result.message)
}), (error) => {
    console.log(error.name + ' ' + error.message)
}


//caso real

const ul = document.getElementById('users');
const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data);

        return data.map((user) => {
            let li = document.createElement('li');
            li.innerHTML = `${user.name} (${user.username})`;
            ul.appendChild(li);
        })
    })
    .catch((error) => {
        console.log('Oops!' + error)
    })



// Promisse ALL

var promisse= Promise.resolve(3);
var promisse2= Promise.resolve(4);
var promisse3= Promise.resolve(5);

Promise.all([promisse, promisse2, promisse3])
.then((values) => {
    console.log(values)
})

*/

// Promisse race

var promisse= Promise.resolve(3);
var promisse2= Promise.resolve(4);
var promisse3= Promise.resolve(5);

Promise.race([promisse, promisse2, promisse3])
.then((values) => {
    console.log(values)
})