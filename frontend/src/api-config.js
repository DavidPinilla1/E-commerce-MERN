let backendHost = 'http://localhost:3001/';
if ( process.env.NODE_ENV === 'production' ) {
    backendHost = 'http://api-subida.com/'
}

export default backendHost;
