import axios from "axios";

const GetUsers = async (limit, skip) =>{
    const users = await axios.get(
        'https://dummyjson.com/users?limit=5&skip=10&select=firstName,age'
    );
    return users.data.users;
}
export default GetUsers
