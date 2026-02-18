import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Chat } from './chat/chat';
import { User } from './user/user';
import { Pricing } from './pricing/pricing';





@Component({
  selector: 'app-root',
  imports: [Chat, User, Pricing , RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('chat-app');
}

