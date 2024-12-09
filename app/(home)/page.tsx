import Navigation from "../../components/navigation";

export const metadata = {
    title: "Home",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies(){
    console.log("Getting movies...");
    const response = await fetch(URL);
    const data = await response.json();
    return data;
}

export default async function App(){
    const movies = await getMovies();
    return (
        <div>{JSON.stringify(movies)}</div>
    );
}