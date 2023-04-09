import handleUser from "../formLogin/handleUser";

const findUser = (username, password) => {
    return handleUser.find((user) => user.username === username && user.password === password)
}
export default findUser;                       