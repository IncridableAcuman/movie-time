const imageUrl=process.env.TMDB_URL || "12";
module.exports=class Movie{
    id;
    backdrop_path;
    genre_ids;
    title;
    overview;
    poster_path;
    release_date

    constructor(movie){
        this.id=movie.id;
        this.backdrop_path= movie.backdrop_path;
        this.genre_ids=movie.genre_ids;
        this.title=movie.title || movie.name;
        this.overview=movie.overview;
        this.poster_path=movie.poster_path;
        this.release_date=movie.release_date;
    }
}