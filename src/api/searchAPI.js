import axios from "axios";

const instance = axios.create({
    baseURL:"https://restcountries.com/v3.1/name/",
})

export const searchAPI = {
    getCountries(names){
        return instance.get(`${names}`)
    }
}