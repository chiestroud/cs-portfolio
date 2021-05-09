import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getTechnologies = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/technology.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((err) => reject(err));
});

const addTechnology = (technology) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/technology.json`, technology)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/technology/${response.data.name}.json`, body)
        .then(() => getTechnologies().then((technologiesArray) => resolve(technologiesArray)));
    }).catch((err) => reject(err));
});

const updateTechnology = (technology) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/technology/${technology.firebaseKey}.json`, technology)
    .then(() => getTechnologies().then(resolve))
    .catch((err) => reject(err));
});

const deleteTechnology = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/technology/${firebaseKey}.json`)
    .then(() => getTechnologies().then((technologiesArray) => resolve(technologiesArray)))
    .catch((err) => reject(err));
});

export {
  getTechnologies, addTechnology, deleteTechnology, updateTechnology
};
