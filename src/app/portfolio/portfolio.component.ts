import { style, transition, trigger, state, animate } from '@angular/animations';
import { DOCUMENT, ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmailService } from '../email.service';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';



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
        { label: 'EMAIL', value: 'ravi23.professional@gmail.com', icon: 'mail-outline' },
        { label: 'PHONE', value: '8056251542', icon: 'phone-portrait-outline' },
        { label: 'BIRTHDAY', value: '11 April, 1998', icon: 'calendar-outline' },
        { label: 'LOCATION', value: 'Ambattur, Chennai', icon: 'location-outline', link: 'https://maps.app.goo.gl/4YJxLmp54qtgwhVE7' },
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
        { title: 'Frontend Excellence', desc: 'Delivering seamless and interactive user interfaces for e-commerce and banking applications using modern frameworks like Angular', icon: 'logo-angular' },
        { title: 'Expanding Backend Expertise', desc: 'Exploring backend technologies like Node.js and MongoDB to build end-to-end solutions that complement my frontend development skills.', icon: 'server-outline' },
        { title: 'UI/UX Crafting', desc: 'Designing intuitive and engaging user experiences with tools like Figma and Material UI for dynamic web applications.', icon: 'brush-outline' },
        { title: 'Optimized Solutions for Diverse Domains', desc: 'Contributing to robust software solutions across industries like e-commerce and banking with a strong focus on performance and scalability.', icon: 'color-wand-outline' }
    ]

    keyAchievements:any[] = [
        {
            title : 'Revenue Growth and Recognition',
            desc: 'Spearheaded an application redesign that resulted in a remarkable 72% revenue growth. This milestone earned me the "Star of the Month" award and immense customer appreciation for delivering an exceptional user experience.',
            icon: 'cash-outline'
        },
        {
            title : 'Dynamic Framework Development',
            desc: 'Developed a revolutionary framework that enabled the rapid creation of over 200+ screens in just two months. By automating form page generation, manual coding time was reduced to under a minute per page. This innovation accelerated project completion and simplified updates, with changes to any screen now possible in 1-2 minutes.',
            icon: 'hourglass-outline'
        }
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
    constructor(private emailService: EmailService) {
     }


    ngOnInit(): void {
    }

    public sendEmail(form:any) {
        // e.preventDefault();
    
        emailjs
      .sendForm('service_i401h0e', 'template_jxtp359', form, {
        publicKey: 'a8WKu-TWAi6dKQQMT',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
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
        // console.log(this.contactForm.value)
        this.sendEmail(this.contactForm.value);
    }

    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
