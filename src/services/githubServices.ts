import {api, sendRequest} from './_api';

export function getRepos(){
    const r = api.get(`https://api.github.com/users/Pedrolucasrv/repos`);
    return sendRequest(r);
}