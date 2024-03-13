import { Component, EventEmitter, Output } from '@angular/core';
import { Question } from '../interface/question';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { QuizResult } from '../interface/quiz-result';

@Component({
  selector: 'app-quiz-questions',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgMultiSelectDropDownModule,
    RouterLink,
    FontAwesomeModule,
  ],
  templateUrl: './quiz-questions.component.html',
  styleUrl: './quiz-questions.component.css'
})
export class QuizQuestionsComponent {
  @Output() finalResult = new EventEmitter();

  questions:any[] = []
  selected = {} as Question;

  result = {} as QuizResult;

  index:number = 0;

  answer: string = "";

  constructor(){
    this.questions = []
    this.reset();
  }

  showQuestions(index:number){
    this.selected = this.questions[index];
  }

  nextQuestion(){
    if(this.answer == '') return;
    this.checkAnswer();
    this.index++;
    if(this.questions.length > this.index){
      this.answer = "";
      this.showQuestions(this.index);
    }else{
      this.finishQuiz();
    }
  }

  checkAnswer(){
    let isAnswer = this.questions[this.index].correct_answers[this.answer];
    (isAnswer == 'true') ? this.result.correct++ : this.result.wrong++;
  }

  finishQuiz(){
    this.result.total = this.questions.length;
    this.result.correctPercentage = (this.result.correct / this.result.total) * 100;
    this.result.wrongPercentage = (this.result.wrong / this.result.total) * 100;
    //console.log("Result: ",this.result)
    this.finalResult.emit(this.result);
  }

  reset(){
    this.answer = '';
    this.index = 0;
    this.result = {
      total:0,
      correct: 0,
      wrong: 0,
      correctPercentage: 0,
      wrongPercentage:0
    }
  }
}
