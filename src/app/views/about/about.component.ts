import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/interfaces/list';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  skills: List[] = [
    { title: 'Web Technologies', info: 'HTML5, CSS, SCSS, Angular, Vue'},
    { title: 'Database', info: 'Firebase, Node.js, Express.js, MongoDB, GraphQL'},
    { title: 'Design Tools', info: 'Photoshop, Illustrator, Sketch, InDesign'},
    { title: 'Others', info: 'Git, SEO, CMS, CRM'},
    { title: 'Interpersonal', info: 'Detail-oriented, Flexibility, Fast learner, Creative Thinking'}
  ];
  educations: List[] = [
    { title: 'Haaga-Helia UAS | 2015-2019', info: 'BA in Sales and Marketing | Thesis Grade: 4/5'},
    { title: 'CyberSoft Academy | 2018-2019', info: 'Professional Front End Developer Training Program'}
  ];
  certificates: List[] = [
    { title: 'Udemy', info: '- Angular 7 with Angular Material and Firebase Cloud Firestore \n- The Complete User Interface Design Bootcamp- Sketch UI/UX'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
