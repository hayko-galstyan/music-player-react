export interface SongDataInterface  {
    songs:SongInterface[]
}

export interface SongInterface {
    id:number,
    songName:string,
    artistName:string,
    trackNumber:number,
    status:string,
    filePath?:string
}
