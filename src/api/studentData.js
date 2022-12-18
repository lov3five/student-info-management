import api from './api';

export function getStudent() {
    api.get("/users").then(res => {
        let temp = res.data;
        console.log(temp);
    })
}