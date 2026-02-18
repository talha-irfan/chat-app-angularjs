// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-user',
//   imports: [FormsModule],
//   templateUrl: './user.html',
//   styleUrl: './user.css',
// })
// export class User {

//   task="";
//   taskList:{id:number,task:string}[]=[]

//   addTask(){
//     this.taskList.push({id:this.taskList.length+1, task:this.task})
//     this.task='';
//   }

//   delTodo(){

//   }
// }


import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  task = "";
  taskList:{id:number,task:string}[] = []

  addTask(){
    this.taskList.push({id:this.taskList.length+1, task:this.task})
    this.task = '';
  }

  // delete function
  delTodo(index:number){
    this.taskList.splice(index, 1);
  }
}
