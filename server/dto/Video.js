module.exports=class Video{
    id;
    name;
    key;
    size;
    type;
    published_at
    constructor(video){
        this.id=video.id;
        this.name=video.name;
        this.size=video.size;
        this.type=video.type;
        this.published_at=video.published_at;
    }
}