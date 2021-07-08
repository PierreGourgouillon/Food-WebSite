
export function fetchRegister(email, name, firstName, password){
    fetch("http://localhost:3000/api/authentification/signup", {
        method: "post",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            email: email,
            name: name,
            firstName: firstName,
            password: password,
        })
    })
        .then(( response => {
            return response.json()
        }))
        .then(( res => {
            console.log(res)
        }))
        .catch()
}

export function fetchLogin(email, password) {
    fetch("localhost:3000/api/authentification/login",{
        method: "post",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password,
        })
    })
}

