export interface MusicInfo{
  id: string,
  cover : string,
  data : {
    name : string,
    author? : string,
    category : string
  }
}