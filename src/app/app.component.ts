import { Component, VERSION } from "@angular/core";
import { PostRequest } from "./models/post-request";
import { PostResponse } from "./models/post-response";
import { CustomHttpService } from "./services/custom-http.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  private baseUrl = "https://my-json-server.typicode.com/typicode/demo/posts";
  public title = `Angular ${VERSION.major} Custom Http Service`;
  public result;

  constructor(private customHttpService: CustomHttpService) {}

  public onGetRequest(): void {
    this.customHttpService
      .makeGetRequest<PostResponse[]>(this.baseUrl)
      .subscribe(
        response => (this.result = response),
        error => console.log("get error:", error)
      );
  }

  public onPostRequest(): void {
    const body = new PostRequest("New Post");
    this.customHttpService
      .makePostRequest<PostResponse>(this.baseUrl, body)
      .subscribe(
        response => (this.result = response),
        error => console.log("post error:", error)
      );
  }

  public onPutRequest(): void {
    const body = new PostRequest("New Post for Id:2");
    this.customHttpService
      .makePutRequest<PostResponse>(`${this.baseUrl}/2`, body)
      .subscribe(
        response => (this.result = response),
        error => console.log("put error:", error)
      );
  }

  public onPatchRequest(): void {
    const body = new PostRequest("New Post for Id:3");
    this.customHttpService
      .makePatchRequest<PostResponse>(`${this.baseUrl}/3`, body)
      .subscribe(
        response => (this.result = response),
        error => console.log("patch error:", error)
      );
  }

  public onDeleteRequest(): void {
    this.customHttpService
      .makeDeleteRequest<PostResponse>(`${this.baseUrl}/1`)
      .subscribe(
        response => (this.result = response),
        error => console.log("delete error:", error)
      );
  }
}
