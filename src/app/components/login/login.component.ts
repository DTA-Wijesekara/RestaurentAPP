import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  heading = "Sign IN";
  field=true;
  imgurl='';
  changeImg(){
    this.imgurl="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg";
  }
  handleClick = () => {
    this.heading = "Butten Clicked";
    this.field = this.field ? false : true;
    // if(this.field == true){
    //   this.field = false;
    // }else{
    //   this.field = true;
    // }
  }
}
