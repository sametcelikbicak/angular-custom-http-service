import { Component, VERSION } from "@angular/core";
import { CustomHttpService } from "./services/custom-http.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = `Angular ${VERSION.major} Custom Http Service`;

  constructor(private customHttpService: CustomHttpService) {
    this.customHttpService
      .makeGetRequest("https://my-json-server.typicode.com/typicode/demo/posts")
      .subscribe(
        response => console.log("response:", response),
        error => console.log("error:", error)
      );
  }
}
