import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public estadoJornada = false;
  public now: Date = new Date();

  constructor(
    private activatedRoute: ActivatedRoute
    ) {
      setInterval(() => {
        this.now = new Date();
      }, 1);
    }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }



}
