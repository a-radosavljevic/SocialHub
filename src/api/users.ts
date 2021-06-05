import Ajax from '../util/ajax';
import User from '../models/User';

class Users {
    private readonly url = process.env.REACT_APP_USERS_URL;

    async get(id: number): Promise<User>{
        let fetchedUser = await Ajax.get(`${this.url}/${id}`);
        return fetchedUser as User;
    }
}

export default Users;