import { style, transition, trigger, state, animate } from '@angular/animations';
import { DOCUMENT, ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.css'],
    animations: [
        trigger('toggle', [
          state('true', style({ opacity: 1 })),
          state('void', style({ opacity: 0 })),
          transition(':enter', animate('200ms ease-in-out')),
          transition(':leave', animate('200ms ease-in-out'))
        ])
      ]
})
export class PortfolioComponent implements OnInit {

    profileDetails: any[] = [
        { label: 'EMAIL', value: 'ravi.rk98@gmail.com', icon: 'mail-outline' },
        { label: 'PHONE', value: '8056251542', icon: 'phone-portrait-outline' },
        { label: 'BIRTHDAY', value: '11 April, 1998', icon: 'calendar-outline' },
        { label: 'LOCATION', value: 'Ambattur, Chennai', icon: 'location-outline' },
        { label: 'YEAR OF EXPERIENCE', value: '4 Years', icon: 'briefcase-outline' },
    ]

    navBar: string[] = [
        "About Me",
        "Resume",
        "Portfolio",
        "Achievements",
        "Contact"
    ]

    whatIamDoing: any[] = [
        { title: 'Web Development', desc: 'Building responsive and scalable web applications using modern technologies.', icon: 'earth-outline' },
        { title: 'Mobile App Development', desc: 'Creating native and hybrid mobile applications for Android and iOS platforms.', icon: 'location-outline' },
        { title: 'Data Analysis', desc: 'Analyzing and interpreting complex data sets to drive business decisions.', icon: 'location-outline' },
        { title: 'Cloud Computing', desc: 'Designing and deploying scalable cloud infrastructure for efficient computing.', icon: 'location-outline' }
    ]

    title:string = "About Me"
    selectedNavbar: string = "";
    mapLoaded:boolean = false;
    isScrollTopVisible: boolean = false;

    @ViewChild('navbar', { static: false }) navbar!: ElementRef;
    @ViewChild('navbarMobile', { static: false }) navbarMobile!: ElementRef;
    @ViewChild('hamburger', { static: false }) hamburger!: ElementRef;
    @ViewChild('scrollTop', { static: false }) scrollTop!: ElementRef;
    isNavbarMobile:boolean = false;

    //Side Menu Elements
    @ViewChild('mainContent', {static:false}) mainContent!:ElementRef;



    contactForm: FormGroup = new FormGroup({
        name: new FormControl(''),
        mailid: new FormControl(''),
        message: new FormControl('')
    });

    ngAfterViewInit() {
        this.setActiveNavbar(this.title);
        // window.addEventListener('wheel', () => {
        //     const scrollY = window.scrollY;
        //     console.log('Scroll Y:', scrollY);
        //     if (window.scrollY > 100) {
        //         this.isScrollTopVisible = true;
        //     } else {
        //         this.isScrollTopVisible = false;
        //     }
        // });
    }
    constructor() {
     }


    ngOnInit(): void {
    }


    setActiveNavbar(name: string) {
        this.selectedNavbar = name;
        // if(name === 'About Me') {
        //     this.title = 'About Me';
        // } else {
            this.title = name;
        // }
        if(name === 'Contact') {
            this.mapLoaded = false;
        }
        const navbarChildren = this.navbar.nativeElement.children;
        for (let i = 0; i < navbarChildren.length; i++) {
            navbarChildren[i].classList.remove('active');
            if (navbarChildren[i].textContent.trim() === name) {
                navbarChildren[i].classList.add('active');
            }
        }
    }

    toggleHamburger() {
        this.isNavbarMobile = !this.isNavbarMobile;
        if(this.isNavbarMobile) {
            this.hamburger.nativeElement.classList.add('activeSidenavMob');
            const navbarChildren = this.navbarMobile.nativeElement.children;
            for (let i = 0; i < navbarChildren.length; i++) {
                navbarChildren[i].classList.remove('active');
                if (navbarChildren[i].textContent.trim() === this.title) {
                    navbarChildren[i].classList.add('active');
                }
         }
            // setTimeout(() => this.toggleHamburger(), 8000);
        }else {
            this.hamburger.nativeElement.classList.remove('activeSidenavMob');
        }
    }

    setActiveNavbarMobile(name: string) {
        this.selectedNavbar = name;
        window.scrollTo({ top: this.mainContent.nativeElement.offsetTop - 20, behavior: 'smooth' });
        // if(name === 'About') {
            this.title = 'About Me';
        // } else {
            this.title = name;
        // }
        if(name === 'Contact') {
            this.mapLoaded = false;
        }
        const navbarChildren = this.navbarMobile.nativeElement.children;
        for (let i = 0; i < navbarChildren.length; i++) {
            navbarChildren[i].classList.remove('active');
            if (navbarChildren[i].textContent.trim() === name) {
                navbarChildren[i].classList.add('active');
            }
        }
    }

    submitForm() {
        console.log(this.contactForm.value)
    }

    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
