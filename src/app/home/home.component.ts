import { Component, OnInit } from '@angular/core';
declare var require: any
const FileSaver = require('file-saver');
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  download() {
    const pdfUrl='./assets/img/sample.pdf';
    const pdfName = 'sample.pdf';
    FileSaver.saveAs(pdfUrl,pdfName);
  }
}
