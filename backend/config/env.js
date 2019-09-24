let frontendURL='http://localhost:3000/'
let backendURL='http://localhost:3001/'
if(process.env.NODE_ENV==='production'){
    frontendURL=''
    backendURL=''
}
module.exports={
    frontendURL,
    backendURL
}