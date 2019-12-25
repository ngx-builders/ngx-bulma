import { InjectionToken } from "@angular/core";
import { ITheme } from './itheme';

export const THEME_SERVICE = new InjectionToken<ITheme>('theme');

export const THEME_VALUES: ITheme = {
  themes: new Map([
    ['primary', 'is-primary'],
    ['link', 'is-link'],
    ['info', 'is-info'],
    ['success', 'is-success'],
    ['warning', 'is-warning'],
    ['danger', 'is-danger'],
    ['white', 'is-white'],
    ['light', 'is-light'],
    ['dark', 'is-dark'],
    ['black', 'is-black'],
    ['text', 'is-text'],
    ['small', 'is-small'],
    ['normal', 'is-normal'],
    ['medium', 'is-medium'],
    ['large', 'is-large']
  ])
}
