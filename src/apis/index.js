import axios from 'axios';

const apis = {
    login: (data) => {
        // fake api
        // return new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         if (data.username == "admin" && data.password == "123456") {
        //             resolve({
        //                 data: {
        //                     username: data.username,
        //                     success: true,
        //                     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiX2lkIjoiNWVkZDJjZDU1NTdlYmE5NjMzMTAzM2QyIiwiaWF0IjoxNTk1OTQ0MjY3fQ.odGraqOzsnGtrCiUzRb556cbvwGUNATa18IhKCyYJgM",
        //                 }
        //             });
        //         } else {
        //             reject({
        //                 data: {
        //                     success: false,
        //                     err: "Username or password incorrect!",
        //                 }
        //             });
        //         }
        //     }, 1000);
        // });
        return axios
            .post("https://medical-be.herokuapp.com/api/doctor/login", data)
            .then(res => res);
    },
};

export default apis;
