import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './core/pages/home/home';
import { About } from './core/pages/about/about';
import { Servives } from './core/pages/servives/servives';
import { Portfolio } from './core/pages/portfolio/portfolio';
import { Notfound } from './core/pages/notfound/notfound';

export const routes: Routes = [
    {path:'' , redirectTo:'home' , pathMatch: 'full'},
    {path:'home' , loadComponent: ()=> import('./core/pages/home/home').then( (c)=> c.Home) , title:'Home'},
    {path:'about' , loadComponent: ()=> import('./core/pages/about/about').then( (c)=> c.About) , title:'About'},
    {path:'services' , loadComponent: ()=> import('./core/pages/servives/servives').then( (c)=>c.Servives) , title:'Services'},
    {path:'portfolio' , loadComponent: ()=> import('./core/pages/portfolio/portfolio').then( (c)=>c.Portfolio) , title:'Portfolio'},
    {path:'contact' , loadComponent: ()=> import('./core/pages/contact/contact').then( (c)=>c.Contact) , title:'Contact'},
    {path:'**' , loadComponent: ()=> import('./core/pages/notfound/notfound').then( (c)=>c.Notfound), title:'Not found'},
];
