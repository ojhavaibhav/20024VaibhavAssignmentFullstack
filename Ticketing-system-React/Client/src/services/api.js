import axios from 'axios';

const baseUrl = 'http://localhost:8080';


export const signUp = async (user) => {
  return await axios.post(`${baseUrl}/users/signUp`, user);
}



export const signIn = (user) => {
  return axios.post(`${baseUrl}/users/signIn`, user)
    .then(response => {

      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
}

export const createTicket = (newTicket) => {
  return axios.post(`${baseUrl}/tickets`, newTicket)
}

export const getTicket = () => {
  return axios.get(`${baseUrl}/tickets`)
}

export const updateTicket = (id, updatedTicket) => {
  return axios.put(`${baseUrl}/tickets/${id}`, updatedTicket)
}

export const resolvedTicket = (ticket) => {
  return axios.post(`${baseUrl}/tickets/resolved`, ticket)
}

