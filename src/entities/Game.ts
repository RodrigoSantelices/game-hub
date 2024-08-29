import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./Publisher";
import { Trailer } from "./Trailer";


export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  metacritic: number;
  rating_top: number;
  description_raw:string;
  genres: Genre [];
  publishers: Publisher[];
  trailers: Trailer[];
}
