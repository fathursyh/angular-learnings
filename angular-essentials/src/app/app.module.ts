import { NgModule } from "@angular/core";
import { App } from "./app";
import { HeaderComponent } from "./header/header";
import { User } from "./user/user";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
  declarations: [App, HeaderComponent, User],
  bootstrap: [App],
  imports: [FormsModule, SharedModule, TasksModule],
})
export class AppModule {}
