import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";


interface GameDetails{
 id: number;
 name: string;
 slug: string;
 description_raw: string;
}

const apiClient = new APIClient<GameDetails>('/games'); //Make interface here

const useGame = (slug:string)=> useQuery({
        queryKey:['games', slug],
        queryFn: ()=> apiClient.get(slug)
    })

export default useGame;