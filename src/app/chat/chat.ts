// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-chat',
//   imports: [],
//   templateUrl: './chat.html',
//   styleUrl: './chat.css',
// })
// export class Chat {

// }


// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// interface Message {
//   text: string;
//   sender: 'me' | 'other';
//   time: string;
// }

// @Component({
//   selector: 'app-chat',
//   standalone: true,
//   imports: [FormsModule, CommonModule],
//   templateUrl: './chat.html'
// })
// export class Chat {

//   messageText = '';

//   users = ['Ali', 'Ahmed', 'Sara', 'Zain', 'Hassan'];

//   messages: Message[] = [
//     { text: 'Hello!', sender: 'other', time: '10:00 AM' },
//     { text: 'Hi 🙂', sender: 'me', time: '10:01 AM' }
//   ];

//   sendMessage() {
//     if (!this.messageText.trim()) return;

//     this.messages.push({
//       text: this.messageText,
//       sender: 'me',
//       time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//     });

//     this.messageText = '';
//   }
// }

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './chat.html'
})
export class Chat {

  messageText = '';

  messages: { text: string; sender: 'me' | 'other' }[] = [
    { text: 'Hello 👋', sender: 'other' },
    { text: 'Hi 🙂', sender: 'me' }
  ];

  sendMessage() {
    if (!this.messageText.trim()) return;

    this.messages.push({
      text: this.messageText,
      sender: 'me'
    });

    this.messageText = '';
  }
}
