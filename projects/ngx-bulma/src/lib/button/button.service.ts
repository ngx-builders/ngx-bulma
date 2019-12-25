import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonService {

  constructor() { }

  getSizeClass(size: string): string {

    let sizeClass: string;

    switch (size) {
      case 'small': {
        sizeClass = 'is-small';
        break;
      }
      case 'normal': {
        sizeClass = 'is-normal';
        break;
      }
      case 'medium': {
        sizeClass = 'is-medium';
        break;
      }
      case 'large': {
        sizeClass = 'is-large';
        break;
      }
      default: {
        // TODO : Discuss the default value.
        sizeClass = 'button';
        break;
      }
    }
    return sizeClass;
  }

  getThemeClass(theme: string): string {

    let themeClass: string;

    switch (theme) {
      case 'primary': {
        themeClass = 'is-primary';
        break;
      }
      case 'link': {
        themeClass = 'is-link';
        break;
      }
      case 'info': {
        themeClass = 'is-info';
        break;
      }
      case 'success': {
        themeClass = 'is-success';
        break;
      }
      case 'warning': {
        themeClass = 'is-warning';
        break;
      }
      case 'danger': {
        themeClass = 'is-danger';
        break;
      }
      default: {
        // TODO : Discuss the default value.
        themeClass = 'button';
        break;
      }
    }
    return themeClass;
  }

  getColorClass(color: string): string {

    let colorClass: string;

    switch (color) {
      case 'white': {
        colorClass = 'is-white';
        break;
      }
      case 'light': {
        colorClass = 'is-light';
        break;
      }
      case 'dark': {
        colorClass = 'is-dark';
        break;
      }
      case 'black': {
        colorClass = 'is-black';
        break;
      }
      case 'text': {
        colorClass = 'is-text';
        break;
      }
      default: {
        // TODO : Discuss the default value.
        colorClass = 'button';
        break;
      }
    }
    return colorClass;
  }
}
