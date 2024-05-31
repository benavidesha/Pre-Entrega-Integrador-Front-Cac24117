const options={
    method:'GET',
    headers:{
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYmQ2NDc2MzRlNjRiNDJhZDZhN2U5MmFkMGQxMThhNiIsInN1YiI6IjY2NTkxMDk2MmY5MjRlNzQwMDkzZjFkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SCdn22A0ywv8BT557u_mE7r7hN9l4PtguAH7-UAjYzY'
    }
};

const apiUrl= 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';

async function fetchMovies(){

    try{
        const response=await fetch(apiUrl,options);
        console.log('Response ok',response.status);

        if(!response.ok)
        {
            throw new error('No response la red');
        }

        const data=await response.json();
        console.log('Descarga ok',data);
        displayMovies(data.results);
    }

    catch(error){
        console.error('Error fetching data:',error);
    }
}

function displayMovies(movies)
{
    const moviesContainer=document.getElementById(movies);
    moviesContainer.innerHTML='';

    movies.forEach(movies)
    {
        const movieElement=document.createElement('div');
        movieElement.classList.add('movie');

        const moviePoster=document.createElement('img');
        moviePoster.src=`https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
        moviePoster.alt=movie.title;

        const movieDetails=document.createElement('div');
        movieDetails.classList.add('movie-details');

        const movieTitle=document.createElement('h2');
        movieTitle.textContent=movie.title;

        const movieOverview=document.createElement('p');
        movieOverview.textContent=movie.overview;
        
        movieDetails.appendChild(movieTitle);
        movieDetails.appendChild(movieOverview);
        movieElement.appendChild(moviePoster);
        movieElement.appendChild(movieDetails);
        moviesContainer.appendChild(movieElement);
    }
}

fetchMovies();