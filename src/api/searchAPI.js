import axios from "axios";

const instance = axios.create({
    baseURL:"https://restcountries.com/v3.1/",
})

export const searchAPI = {
    getCountries(name){
        return instance.get(`name/${name}`)
    },
    getCountriesByAlpha3Name(alpha3NameArr){
        const alpha3NameArrToString = alpha3NameArr.join(',')
        return instance.get(`alpha?codes=${alpha3NameArrToString}`)
    }
}