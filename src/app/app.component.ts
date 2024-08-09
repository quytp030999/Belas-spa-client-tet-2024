import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
  OnInit,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { UtilsService } from "./services/utils.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements AfterContentChecked {
  constructor(
    private utils: UtilsService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

  isLoadingVisible() {
    return this.utils.isLoadingVisible();
  }

  isMessageVisible() {
    return this.utils.isMessageVisible();
  }

  clickMessage() {
    this.utils.hideMessage();
  }

  getMessage() {
    return this.utils.getMessage();
  }
}
