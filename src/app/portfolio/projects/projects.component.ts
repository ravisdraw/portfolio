import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import  javascriptProjects  from '../../../assets/localData/jsProjects'

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

    projects = [
        'All']

    jsProjects:any = javascriptProjects;

    projectDetails:any = {
        'Web Design': [
            { title: 'Design Project 1', category: 'Web Design', image: '../../../assets/portfolio/design-project-1.jpg', url: 'https://example.com/design-project1' },
            { title: 'Design Project 2', category: 'Web Design', image: '../../../assets/portfolio/design-project-2.jpg', url: 'https://example.com/design-project2' }
        ],
        'Applications': [
            { title: 'App Project 1', category: 'Applications', image: '../../../assets/portfolio/app-project-1.jpg', url: 'https://example.com/app-project1' },
            { title: 'App Project 2', category: 'Applications', image: '../../../assets/portfolio/app-project-2.jpg', url: 'https://example.com/app-project2' }
        ],
        'Web Development': [
            { title: 'Web Dev Project 1', category: 'Web Development', image: '../../../assets/portfolio/web-dev-project-1.jpg', url: 'https://example.com/web-dev-project1' },
            { title: 'Web Dev Project 2', category: 'Web Development', image: '../../../assets/portfolio/web-dev-project-2.jpg', url: 'https://example.com/web-dev-project2' }
        ]
    };

    projectData:any =[];

    selectedProject: string = 'All';

    @ViewChild('project', { static: false }) project!: ElementRef;

    ngAfterViewInit() {
        this.setActiveProject(this.selectedProject);
    }

    constructor() { }

    ngOnInit(): void {
        this.setProjectDetails('All');
    }

    setActiveProject(name: string) {
        this.selectedProject = name;
        const navbarChildren = this.project.nativeElement.children;
        for (let i = 0; i < navbarChildren.length; i++) {
            navbarChildren[i].classList.remove('active');
            if (navbarChildren[i].textContent.trim() === name) {
                navbarChildren[i].classList.add('active');
                this.setProjectDetails(name);
            }
        }
    }

    setProjectDetails(category:string) {
        if(category === 'All') {
        Object.values(this.projectDetails).forEach((category:any) => {
            category.forEach((project:any) => {
                this.projectData.push(project);
            });
        });
        } else {
            this.projectData = this.projectDetails[category];
        }
    }

}
