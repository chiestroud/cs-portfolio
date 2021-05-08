import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/projects.json?orderBy="available"&equalTo=true`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const addProjects = (project) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/projects.json`, project)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/projects/${response.data.name}.json`, body)
        .then(() => resolve(console.warn('project added', project)));
    }).catch((err) => reject(err));
});

export { getProjects, addProjects };
