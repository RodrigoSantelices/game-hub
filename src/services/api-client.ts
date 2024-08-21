import axios from 'axios';


export interface FetchResponse<T> {
    count: number;
    results: T[];
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:'27195eb4d416482ebc83f955b7cff31d'
    }
})