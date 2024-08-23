import axios, { AxiosRequestConfig } from 'axios';


export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];
}

export const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:'27195eb4d416482ebc83f955b7cff31d'
    }
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string){
       this.endpoint = endpoint;
    }



    
    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data);
    }

    // post = (data: T) => {
    //     return axiosInstance.post<T>(this.endpoint, data).then(res=> res.data);
    // }

   }

export default APIClient;
   

