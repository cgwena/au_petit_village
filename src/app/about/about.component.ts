import { Component, OnInit } from '@angular/core';
import { AboutService } from '../about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  infos : any[] = []
  
  constructor(private aboutService: AboutService) {}

  ngOnInit(): void {
      this.infos = this.aboutService.infos 
  }

}
