import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  @HostListener('window:scroll', ['$event']) onWindowScroll() {
    console.log(document.documentElement.scrollTop, window.pageYOffset, document.body.scrollTop);

    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop === 0) {
      this.router.navigate([]);
    }
  }
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.fragment.subscribe((fragment: string) => {
      if (fragment && document.getElementById(fragment) != null) {
        document.getElementById(fragment).scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  scrollToTop() {
    (function smoothscroll() {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
      this.router.navigate([]);
    })();
  }

}
