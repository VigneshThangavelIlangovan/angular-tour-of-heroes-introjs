import { Component } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import introJs from 'intro.js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tour-of-heroes'
  private startTime: number = 0

  constructor (private router: Router) {}

  ngOnInit () {
    if (!localStorage.getItem('introShown')) {
      localStorage.setItem('introShown', 'true')
      this.startTour()
    }
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const loadTime = performance.now() - this.startTime
        console.log(`Page load time: ${loadTime} ms`)
      }
    })

    this.startTime = performance.now()
  }

  startTour () {
    const intro: introJs.IntroJs = introJs()
    intro
      .setOptions({
        steps: [
          {
            title: 'Welcome',
            intro: 'Welcome to the angular application tour! 👋',
            tooltipClass: 'customTooltip'
          },
          {
            element: '#resource-root',
            title: 'Resources',
            intro: 'Lets explore the contents of the resource section',
            position: 'left',
            tooltipClass: 'customTooltip'
          },
          {
            element: '#learn-angular',
            title: 'Learn Angular',
            intro: 'Takes to learn angular website',
            tooltipClass: 'customTooltip'
          },
          {
            element: '#cli-docs',
            title: 'CLI Documentation',
            intro: 'Takes to know more about CLI documentation',
            tooltipClass: 'customTooltip'
          },
          {
            element: '#angular-material',
            title: 'Angular Material',
            intro: 'Takes to find more about angular material',
            tooltipClass: 'customTooltip'
          },
          {
            element: '#angular-blog',
            title: 'Angular Blog',
            intro: 'Takes to the angular blog',
            tooltipClass: 'customTooltip'
          },
          {
            element: '#angular-dev-tools',
            title: 'Angular DevTools',
            intro: 'Takes to explore more angular dev tools',
            tooltipClass: 'customTooltip'
          },
          {
            title: 'End of the Tour',
            tooltipClass: 'customTooltip',
            intro:
              '<img src="https://media.giphy.com/media/26AHC0kdj8IeLkmBy/giphy.gif" onerror="this.onerror=null;this.src=\'https://media.giphy.com/media/26AHC0kdj8IeLkmBy/giphy.gif\';" alt="" width="200" height="150">'
          }
        ],
        showProgress: true
      })
      .addHints()
    intro.start()
  }
}
