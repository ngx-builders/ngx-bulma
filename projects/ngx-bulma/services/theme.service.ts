import { InjectionToken } from '@angular/core';
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
    ['large', 'is-large'],
    ['fluid', 'is-fluid'],
    ['widescreen', 'is-widescreen'],
    ['fullhd', 'is-fullhd'],
    ['fullheight', 'is-fullheight'],
    ['ancestor', 'is-ancestor'],
    ['parent', 'is-parent'],
    ['child', 'is-child'],
    ['vertical', 'is-vertical'],
  ]),

  horizontalSizes: new Map([
    ['1', 'is-1'],
    ['2', 'is-2'],
    ['3', 'is-3'],
    ['4', 'is-4'],
    ['5', 'is-5'],
    ['6', 'is-6'],
    ['7', 'is-7'],
    ['8', 'is-8'],
    ['9', 'is-9'],
    ['10', 'is-10'],
    ['11', 'is-11'],
    ['12', 'is-12'],
  ]),
};
