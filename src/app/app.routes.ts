import { Routes } from "@angular/router";
import { BeforePlayVipComponent } from "./pages/all/before-play-vip/before-play-vip.component";
import { BeforePlayConsumerComponent } from "./pages/all/before-play-consumer/before-play-consumer.component";
import { RegistrationConsumerComponent } from "./pages/game/registration-consumer/registration-consumer.component";
import { GamePlayComponent } from "./pages/game/game-play/game-play.component";
import { NotificationGiftComponent } from "./pages/game/notification-gift/notification-gift.component";

export const routes: Routes = [
  {
    path: "vip/:code",
    component: BeforePlayVipComponent,
  },
  {
    path: "consumer",
    component: BeforePlayConsumerComponent,
  },
  {
    path: "registration",
    component: RegistrationConsumerComponent,
  },
  {
    path: "game-play",
    component: GamePlayComponent,
  },
  {
    path: "notification",
    component: NotificationGiftComponent,
  },
  {
    path: "",
    redirectTo: "consumer",
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: "consumer",
    pathMatch: "full",
  },
];
