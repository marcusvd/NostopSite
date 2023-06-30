import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _router: Router){}

  ngOnInit(): void {
    // this._router.navigate(['/start/entrace-message'])
  }
  title = 'nostoptiPage';

}
