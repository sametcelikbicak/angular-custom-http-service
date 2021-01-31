interface IPostRequest {
  title: string;
}
export class PostRequest implements IPostRequest {
  public readonly title: string;

  constructor(title: string) {
    this.title = title;
  }
}
