import { Component, OnInit } from "@angular/core";
import { UtilsService } from "../../../services/utils.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-before-play-consumer",
  standalone: true,
  imports: [],
  templateUrl: "./before-play-consumer.component.html",
  styleUrl: "./before-play-consumer.component.scss",
})
export class BeforePlayConsumerComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(["registration"]);
  }
}
