import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers: [LoggingService]
})
export class DirectoryComponent implements OnInit {

  ninjas = [
    {
      name: 'Chao',
      belt: 'black'
    },
    {
      name: 'Chen',
      belt: 'blue'
    },
    {
      name: 'Chris',
      belt: 'red'
    }
  ];
  constructor(private logger: LoggingService) {

  }

  logIt(){
    this.logger.log();
  }

  ngOnInit() {
  }

}
