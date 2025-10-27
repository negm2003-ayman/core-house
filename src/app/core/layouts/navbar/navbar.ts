import { Flowbite } from './../../services/Flowbite/flowbite';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink , RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
    constructor(private flowbite: Flowbite) {}

  ngOnInit(): void {
    this.flowbite.loadFlowbite((Flowbite) => {
      initFlowbite();
    });
  }

}
