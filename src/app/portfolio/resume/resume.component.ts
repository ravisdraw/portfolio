import { transition, trigger } from '@angular/animations';
import { style } from '@angular/animations';
import { state } from '@angular/animations';
import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.css'],
})
export class ResumeComponent implements OnInit {

    education: any[] = [
        { school: 'Elite Matric Higher Secondary School', year: '2020-2020', mark: '480/500 (96%)' },
        { school: 'Velammal Matric Higher Secondary School', year: '2020-2020', mark: '480/500 (96%)' },
        { school: 'R.M.K Engineering College', year: '2020-2020', mark: '480/500 (96%)' },
    ]

    skills: any = {
        'Frontend': [
            'HTML', 'CSS', 'Tailwind', 'JavaScript', 'Angular', 'React'
        ],
        'Backend': [
            'Node js', 'Python', 'Django'
        ],
        'Data Science & Visualization': [
            'Streamlit', 'Tkinter'
        ],
        'Database': [
            'SQL', 'MongoDB'
        ],
        'Full Stack': [
            'MEAN', 'MERN', 'Angular/React + Firebase', 'Angular/React + Subabase'
        ]
    };

    skillKeys: string[] = Object.keys(this.skills);

    constructor() { }

    ngOnInit(): void {
    }

}
