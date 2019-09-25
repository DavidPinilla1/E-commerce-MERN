let frontendURL='http://localhost:3000/'
let backendURL='http://localhost:3001/'
if(process.env.NODE_ENV==='production'){
    frontendURL='https://e-comerce-front.herokuapp.com/'
    backendURL='https://api-e-comerce.herokuapp.com/'
}
module.exports={
    frontendURL,
    backendURL
}