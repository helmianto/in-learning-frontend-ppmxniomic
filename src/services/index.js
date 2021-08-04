import Delete from './Delete';
import Get from './Get';
import Post from './Post';
import Put from './Put';

//POST
const postData = (path, data) => Post(path, false, data);

//PUT
const updateData = (path, data, id) => Put(path +'/'+ id, false, data);

// GET
const getData = (path) => Get(path, false);

// DELETE
const deleteData = (path, id) => Delete(path +'/'+ id, false);

const API = {
    postData,
    updateData,
    getData,
    deleteData
}

export default API;

