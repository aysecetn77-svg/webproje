const apiKey = "8a1fd318d7f5829faf79cbe2457c138c"; 
const avengersIds = [24428, 99861, 299534, 299536]; 

async function getAvengers() {
  const filmList = document.getElementById("film-list");
  const loading = document.getElementById("loading");

  loading.style.display = "block";
  filmList.style.display = "none"; 

  let foundAny = false;

  for (const id of avengersIds) {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=tr-TR`);
      if (!response.ok) continue;
      const movie = await response.json();

      if (movie && movie.title) {
        foundAny = true;

    
        const releaseYear = movie.release_date ? movie.release_date.split("-")[0] : "Tarih yok";

      
        const imdbRating = movie.vote_average ? movie.vote_average.toFixed(1) : "Puan yok";

        
        const shortOverview = movie.overview ? movie.overview.split(".")[0] + "." : "Açıklama yok.";

        const filmCard = document.createElement("div");
        filmCard.className = "col-md-6 mb-4";
        filmCard.innerHTML = `
          <div class="film-card h-100">
            <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" alt="${movie.title}" class="img-fluid rounded">
            <h3>${movie.title}</h3>
            <p><strong>Yıl:</strong> ${releaseYear} | <strong>IMDb:</strong> ${imdbRating}</p>
            <p>${shortOverview}</p>
          </div>
        `;
        filmList.appendChild(filmCard);
      }
    } catch (error) {
      console.error("Film alınamadı:", error);
    }
  }

  setTimeout(() => {
    loading.style.display = "none";
    filmList.style.display = "flex"; 
    if (!foundAny) {
      filmList.innerHTML = "<p>Filmler bulunamadı.</p>";
    }
  }, 1000);
}

getAvengers();
