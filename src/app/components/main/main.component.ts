import { Component } from "@angular/core";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent {
  menu__item = [
    'Главная',
    'Курсы',
    'Расписание',
    'Преподаватели',
    'Рассылка',
    'Контакты',
  ]
}