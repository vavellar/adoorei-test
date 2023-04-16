export const login = (username: string, password: string) => {
    return fetch('https://fakestoreapi.com/auth/login',{
        method:'POST',
        body:JSON.stringify({
            username,
            password
        })
    })
}