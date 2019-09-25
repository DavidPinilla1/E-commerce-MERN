let backendHost = 'http://localhost:3001/';
if ( process.env.NODE_ENV === 'production' ) {
    backendHost = 'https://api-e-comerce.herokuapp.com/'
}
console.log(backendHost,process.env.NODE_ENV);

export default backendHost;
