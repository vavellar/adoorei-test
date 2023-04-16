interface User {
    email: string
    password: string
    name: {
        firstname: string
        lastname: string
    }
    phone: string
}
export const register = (user: User) => {
    return fetch('https://fakestoreapi.com/users',{
        method:"POST",
        body:JSON.stringify(
            {
                email: user.email,
                username: user.name.firstname + user.name.lastname,
                password: user.password,
                name:{
                    firstname: user.name.firstname,
                    lastname: user.name.lastname
                },
                phone: user.phone
            }
        )
    })
}