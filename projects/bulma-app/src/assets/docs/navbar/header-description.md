# Navbar

#### A responsive horizontal navbar that can support images, links, buttons, and dropdowns

To use a Navbar component in your application, you need to import the `BulmaNavbarModule` by adding the following lines to your `app.module.ts` file.

```javascript
import { BulmaNavbarModule } from 'ngx-bulma';

@NgModule({
   imports: [BulmaNavbarModule]
  // ...
})
export class AppModule {}
```

The most basic `Navbar` needs only `<bu-nav>` element with some content. However, Bulma components provides a number of preset sections that you can use inside of `<bu-nav>`.

| Components          | Description                                                                                             |
| ------------------- | ------------------------------------------------------------------------------------------------------- |
| `<bu-nav>`          | Navbar Parent Component                                                                                 |
| `<bu-nav-brand>`    | The left side, **always visible**, which usually contains the logo and optionally some links or icons   |
| `<bu-navbar-start>` | The left part of the menu, which appears next to the navbar brand on desktop                            |
| `<bu-navbar-end>`   | The right part of the menu, which appears at the end of the navbar                                      |

| Directive   | Description                            |
| ----------- | -------------------------------------- |
| `buNavItem` | For initializing NavItem in your HTML  |
