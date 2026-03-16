import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  IonCard,
  IonCardContent,
  IonImg,
  IonLabel,
} from "@ionic/angular/standalone";

@Component({
  selector: "app-movie-card",
  templateUrl: "movie-card.page.html",
  standalone: true,
  styleUrls: ["movie-card.page.scss"],
  imports: [CommonModule, IonCard, IonCardContent, IonImg, IonLabel],
})
export class MovieCardPage {
  @Input() title: string = "";
  @Input() subtitle: string = "";
  @Input() imageUrl: string = "";
}
