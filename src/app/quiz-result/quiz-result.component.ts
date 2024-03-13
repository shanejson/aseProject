import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-quiz-result',
  standalone: true,
  imports: [],
  templateUrl: './quiz-result.component.html',
  styleUrl: './quiz-result.component.css'
})
export class QuizResultComponent {

  @Output() showMainMenuScreen = new EventEmitter();
  finalResult : any; 

  showMainMenu(){
    this.showMainMenuScreen.emit(true);
  }

}
