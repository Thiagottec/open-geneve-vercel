import axios from 'axios';
export async function apiNewUser(dadosUser) {
    const url = 'http://localhost:4040/NewUser';
    console.log(dadosUser);
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Authorization",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
        "Content-Type": "application/json;charset=UTF-8"
    }
    await axios.post(url, dadosUser);
}