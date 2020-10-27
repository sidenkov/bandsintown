import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Event} from '../interfaces/event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  constructor() { }

  @Input() event: Event;

  ngOnInit(): void {
  }

}
