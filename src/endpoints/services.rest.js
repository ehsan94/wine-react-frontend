import axios from 'axios';

const BASE_BAACKEND_URL = 'http://localhost:3000';

export default{
    getAllWines : () =>
    axios.get(`${BASE_BAACKEND_URL}/wines`),

    addWine : (wine) =>
    axios.post(`${BASE_BAACKEND_URL}/wines`, wine ),

    getWine : (id) =>
    axios.get(`${BASE_BAACKEND_URL}/wines/${id}`),

    updateWine : (wine) =>
    axios.put(`${BASE_BAACKEND_URL}/wines/${wine._id}`, wine ),

    deleteWine : (id) =>
    axios.delete(`${BASE_BAACKEND_URL}/wines/${id}`)
}