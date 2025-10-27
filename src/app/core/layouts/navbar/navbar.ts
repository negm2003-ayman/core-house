import { Flowbite } from './../../services/Flowbite/flowbite';
import { Component, HostListener, ViewChild } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  // navBar transtion
  @ViewChild('nav') nav!: any;
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event):void {
    if(window.scrollY > 10){
      this.nav.nativeElement.classList.replace('py-3' , 'py-1')
    }else {
      this.nav.nativeElement.classList.replace('py-1' , 'py-3')
    }
  }

  constructor(private flowbite: Flowbite) {}


  ngOnInit(): void {
    this.flowbite.loadFlowbite((Flowbite) => {
      initFlowbite();
    });
  }

}
