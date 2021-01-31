interface IPostResponse {
  id: number;
  title: string;
}
export class PostResponse implements IPostResponse {
  public readonly id: number;
  public readonly title: string;

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
  }
}
