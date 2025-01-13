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

    downloadPDF:string = 'https://drive.google.com/file/d/1TmQsoIlSj7n_i-iiGvrL6p4kNzb9O-nB/view?usp=sharing';


    education: any[] = [
        { school: 'Elite Matric Higher Secondary School', year: '2014', mark: '480/500 (96%)' },
        { school: 'Velammal Matric Higher Secondary School', year: '2016', mark: '1083/1200 (91%)' },
        { school: 'R.M.K Engineering College', year: '2016-2020', mark: 'CGPA - 7.95' },
    ]

    experience: any[] = [
        { school: 'Tata Consultancy Services', year: '2020-2023', mark: 'Marks and Spencer - UK Based E-commerce Client' },
        { school: 'Intellect Design Arena Ltd', year: '2023-2025', mark: 'Custody Management System for ICICI Client' },
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
