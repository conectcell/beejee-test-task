import {helpers} from '../utlis';

export default class BeejeeService
{
    _apiBase = 'https://uxcandy.com/~shapoval/test-task-backend/v2/';

    clearToken = () => localStorage.removeItem('token');

    setToken = (token) => localStorage.setItem('token', token);

    getToken = () => localStorage.getItem('token');


    makeRequest = async (url, post = false, body = null, addDeveloper = true) => {
        const toSend = {};

        if(post)
        {
            toSend.method = 'POST';
            toSend.body = body;
        }

        const res = await fetch(`${this._apiBase}${url}${addDeveloper ? '?developer=ykemer' : ''}`, toSend);

        if (!res.ok) throw new Error(`Could not fetch ${url}, received ${res.status}`);

        return await res.json();
    };



    getTasksList = async (params = {}) => {
        params.developer = 'ykemer';
        return await this.makeRequest(`?${helpers.objectToUrl(params)}`, false, null, false);
    }

    editTask = async (id, params) => await this.makeRequest(`edit/${id}`, true, params);

    addTask = async (params) =>  await this.makeRequest('create', true, params);

    login = async (params) => await this.makeRequest('login', true, params);
}
