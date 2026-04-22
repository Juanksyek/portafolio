import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.css']
})
export class InfiniteScrollComponent implements OnInit {
  hash = '#';
  tags = ['Java', 'TypeScript', 'Go', 'Serverless', 'Node.js', 'express.js', 'Next.js', 'React.js', 'HTML', 'SCSS', 'Tailwind', 'NPM', 'SQL', 'MongoDB', 'JavaScript', 'Docker', 'AWS', 'Python', 'Nest.js', 'Angular', 'Vue.js', 'CSS', 'Bootstrap', 'Adobe', 'YARN', 'MySQL', 'Git', 'GitLab'];
  rows = Array.from({ length: 5 });

  // Precomputed per-row shuffled copies so change-detection doesn't reshuffle while animating
  rowTagSets: string[][] = [];
  // Per-row animation durations (string with unit, e.g. '18s')
  durations: string[] = [];
  // Global speed multiplier (>1 = slower, <1 = faster)
  speedFactor = 1.5;

  ngOnInit(): void {
    for (let i = 0; i < this.rows.length; i++) {
      this.rowTagSets.push(this.shuffledCopy());
      // base duration scales with number of tags; add a slight variance per row
      const base = Math.max(12, Math.round(this.tags.length * 1.6));
      const variance = i * 2; // stagger speeds a bit per row
      const dur = Math.round((base + variance) * this.speedFactor);
      this.durations.push(`${dur}s`);
    }
  }

  private shuffledCopy(): string[] {
    // return a new shuffled copy without mutating the original `tags` array
    return [...this.tags].sort(() => Math.random() - 0.5);
  }
}
