import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowAltCircleDown, faArrowAltCircleUp, faArrowUp, faMessage, faUser,  } from '@fortawesome/free-solid-svg-icons';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { OpinionModalComponent } from '../opinion-modal/opinion-modal.component';
import { CreatePostModalComponent } from '../create-post-modal/create-post-modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgMultiSelectDropDownModule,
    RouterLink,
    FontAwesomeModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  faArrowUp = faArrowAltCircleUp
  faArrowDown = faArrowAltCircleDown

  showComments:boolean = false

  postsList:any = [];

  constructor(public dialog: MatDialog){}

  ngOnInit(): void {
    let postListX:any = localStorage.getItem('postsList');
    this.postsList = JSON.parse(postListX);
  }

  upLikePost(postID:any){
    //console.log("Post ID: ", postID);
    //console.log(this.postsList.find(x=>x.postID == postID));
    let post = this.postsList.find((x:any)=>x.postID == postID)
    post.postUpLikes = post.postUpLikes+1;
  }

  downLikePost(postID:any){
    //console.log("Post ID: ", postID);
    //console.log(this.postsList.find(x=>x.postID == postID));
    let post = this.postsList.find((x:any)=>x.postID == postID)
    post.postDownLikes = post.postDownLikes-1;
    //console.log("post Updated: ", post);
  }

  showCommentsArea(){
    this.showComments = true
  }
  openCreatePostModal(){
    var _popup = this.dialog.open(CreatePostModalComponent, {
      width: '60%',
      data: {
        title: "Add a Post",
      }
    })
    _popup.afterClosed().subscribe((item:any)=>{
      //console.log("Post DetailsX:", item)
      this.postsList = item;
      localStorage.setItem('postsList', JSON.stringify(this.postsList));
      // var FoundIndex = this.projectList.findIndex((x:any)=>x.id == item.id)
      // this.projectList[FoundIndex] = item
      // localStorage.setItem('projects', JSON.stringify(this.projectList));
      /* const ObjectToReplace = this.projectList.find((x:any)=>{
        x.id == item.id
      })
      console.log("Object To Replace:", ObjectToReplace) */
    })
  }

  


  
}
