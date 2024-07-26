import { Component } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.css']
})
export class InfiniteScrollComponent {
  hash = '#'
  tags = ['Java', 'TypeScript', 'Go', 'Serverless', 'Node.js', 'express.js', 'Next.js', 'React.js', 'HTML', 'SCSS', 'Tailwind', 'NPM', 'SQL', 'MongoDB', 'JavaScript', 'Docker', 'AWS', 'Python', 'Nest.js', 'Angular', 'Vue.js', 'CSS', 'Bootstrap', 'Adobe', 'YARN', 'MySQL', 'Git', 'GitLab'];
  rows = Array.from({ length: 5 });

  shuffleTags() {
    return this.tags.sort(() => Math.random() - 0.5);
  }
}
