module.exports = class MovieDto {
    constructor(model) {
        this.id = model.id;
        this.title = model.title;
        this.original_language = model.original_language;
        this.original_title = model.original_title;
        this.overview = model.overview;
        this.poster_path = model.poster_path;
        this.release_date = model.release_date;
        this.backdrop_path = model.backdrop_path;
    }
}