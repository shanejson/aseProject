import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { QuizService } from '../service/quiz.service';
import { QuizQuestionsComponent } from '../quiz-questions/quiz-questions.component';
import { Question } from '../interface/question';
import { QuizResultComponent } from '../quiz-result/quiz-result.component';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgMultiSelectDropDownModule,
    RouterLink,
    FontAwesomeModule,
    QuizQuestionsComponent,
    QuizResultComponent
  ],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit{

  questionsLimit: number;
  difficulty:any;

  showQuizScreen: boolean = false;
  showMainMenu: boolean = true;
  showResultScreen : boolean = false;

  spinner: boolean = false;

  
  @ViewChild('quiz',{static:true}) quiz! : QuizQuestionsComponent;
  @ViewChild('result',{static:true}) result! : QuizResultComponent;

  quizQuestionList:any = []
 

  constructor(private quizService: QuizService){
    this.questionsLimit = 5;
    this.difficulty = "Easy";
    this.showMainMenu = true;
    let quizListX:any = localStorage.getItem('quizQuestionList');
    this.quizQuestionList = JSON.parse(quizListX);
  }
  ngOnInit(): void {
    
  }

  getQuizQuestions(){
    this.toggleSpinner();
    this.quizService.getQuizQuestions(this.difficulty, this.questionsLimit).subscribe((res:any)=>{
      //console.log("Response", res);
      //this.quiz.questions = res;
      this.quiz.questions = this.quizQuestionList;
      this.quiz.reset();
      this.quiz.showQuestions(0);
      this.showMainMenu = false;
      this.showQuizScreen = true;
      this.toggleSpinner();
    })
  }

  toggleSpinner(){
    this.spinner = !this.spinner;
  }

  finalResult(result:any){
    this.result.finalResult = result;
    this.showQuizScreen = false;
    this.showResultScreen = true;
  }

  showMainMenuScreen(event:any){
    this.showResultScreen = false;
    this.showMainMenu = true;
  }

 
  
}
