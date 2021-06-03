import axios from 'axios';

class Ajax {
    public static async get(url: string){
        const promise = axios.get(url);
        const response = await promise;

        return response.data;
    }
}

export default Ajax;