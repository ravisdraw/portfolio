import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {


  achievements: any[] = [
    { date: 'August 23, 2023', title: 'Adobe Illustrator', desc: 'asdasdawea asdasd asdasda asdasd asdasdasd', img_url: 'asdasdasdasd' },
    { date: 'September 1, 2023', title: 'Adobe Photoshop', desc: 'asdasdawea asdasd asdasda asdasd asdasdasd', img_url: 'asdasdasdasd' },
    { date: 'October 15, 2023', title: 'Adobe Premiere Pro', desc: 'asdasdawea asdasd asdasda asdasd asdasdasd', img_url: 'asdasdasdasd' },
    { date: 'November 20, 2023', title: 'Adobe After Effects', desc: 'asdasdawea asdasd asdasda asdasd asdasdasd', img_url: 'asdasdasdasd' },
    { date: 'December 25, 2023', title: 'Adobe InDesign', desc: 'asdasdawea asdasd asdasda asdasd asdasdasd', img_url: 'asdasdasdasd' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
