
export function fetchRegister(email, name, firstName, password){
    return fetch("http://localhost:3000/api/authentification/signup", {
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
            if (response.status === 201) {
                return response.json()
            }else if (response.status === 400) {
                return "Une erreur s'est produite"
            }else {
                return "Une erreur serveur s'est produite"
            }
        }))
        .then(( res => {
            if (res.message === "DONE"){
                window.location.href = "/login"
            }else {
                return res
            }
        }))
        .catch(() => {
            window.location.href = "/error"
        })
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

