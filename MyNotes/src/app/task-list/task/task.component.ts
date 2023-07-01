import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input() id: number = 0;
  @Input() isDone: boolean = false;
  @Input() taskName: string = "";

  @Output() deleteEvent: EventEmitter<any> = new EventEmitter<any>();
  
  checkTask(e:any){
    e = e.target
    this.isDone = e.checked;
  }

  emitDeleteEvent() {
    this.deleteEvent.emit(this.id);
  }
}
