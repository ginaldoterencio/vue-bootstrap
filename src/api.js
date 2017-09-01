// import axios from 'axios';

// const api = axios.create({
//   baseURL: '/webapi/',
// });

export const usersAPI = {
  fetch() {
    // return new Promise((resolve, reject) => {
    return new Promise((resolve) => {
      // api.get('/users')
      //   .then((response) => {
      //     resolve(response);
      //   })
      //   .catch((error) => {
      //     reject(response);
      //   })

      setTimeout(() => {
        resolve({
          status: 200,
          data: [
            { name: 'Eduardo Henrique' },
            { name: 'Ginaldo Terencio' },
          ],
        });
      });
    });
  },
};
