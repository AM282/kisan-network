import axios from 'axios'
const basePath="http://localhost:3030/";

function getResource(path=''){
    return axios.get(`${basePath}${path}`);
}
export {getResource};