import {OnlineRoot, OfflineRoot} from './Config';

const Get = (path, root) => {
    const promise = new Promise((resolve, reject) => {
        let checkRoot = (root === false) ? OfflineRoot : OnlineRoot;
        fetch(checkRoot + '/' + path,{
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(res => res.json())
        .then(hasil => {
            resolve(hasil);
        })
        .catch(err => {
            reject(err);
        })
    })
    return promise;
}

export default Get;