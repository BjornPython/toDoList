import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    title?: string = "TO DO LIST";
    showAddTask: boolean = false;
    subscription: Subscription;


  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.toggle()
    .subscribe((value) => (this.showAddTask = value))

  }
  
  ngOnInit(): void {
    
  }

  callToggleAddTask() {
    this.uiService.toggleAddTask();
  }

  
}


