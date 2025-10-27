module.exports=class Video{
    id;
    name;
    key;
    size;
    site;
    type;
    published_at;
    constructor(video){
        this.id=video.id ?? '';
        this.name=video.name ?? '';
        this.key=video.key ?? '';
        this.size=video.size ?? 0;
        this.site=video.site ?? '';
        this.type=video.type ?? '';
        this.published_at=video.published_at ?? '';
    }
}