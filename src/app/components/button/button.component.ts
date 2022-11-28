import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  
  @Input() btnText?: string;
  @Input() btnColor?: string;
  
  @Output() btnClick = new EventEmitter();


  
  constructor() { }

  ngOnInit(): void {
    
  }

  onClick() {
    this.btnClick.emit();
    
  }
}
