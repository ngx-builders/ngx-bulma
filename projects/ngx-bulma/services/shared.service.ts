import { Inject, Injectable } from '@angular/core';
import { ITheme } from './itheme';
import { THEME_SERVICE } from './theme.service';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(@Inject(THEME_SERVICE) private themeService: ITheme) {}

  getThemeClass(theme: string, defaultCssClass: string) {
    const themeClass = this.themeService.themes.get(theme);
    return themeClass === undefined ? defaultCssClass : themeClass;
  }

  getSizeClass(size: string, defaultCssClass: string) {
    const sizeClass = this.themeService.themes.get(size);
    return sizeClass === undefined ? defaultCssClass : sizeClass;
  }

  getColorClass(color: string, defaultCssClass: string) {
    const colorClass = this.themeService.themes.get(color);
    return colorClass === undefined ? defaultCssClass : colorClass;
  }

  getContainerTypeClass(containerType: string, defaultCssClass: string) {
    const containerTypeClass = this.themeService.themes.get(containerType);
    return containerTypeClass === undefined ? defaultCssClass : containerTypeClass;
  }
}
