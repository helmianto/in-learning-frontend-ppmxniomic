import {OnlineRoot, OfflineRoot} from './Config';

const Post = (path, root, data) => {
    const promise = new Promise((resolve, reject) => {
        let checkRoot = (root === false) ? OfflineRoot : OnlineRoot;
        fetch(checkRoot + '/' + path,{
            method: 'POST',
            body: JSON.stringify(data),
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

export default Post;