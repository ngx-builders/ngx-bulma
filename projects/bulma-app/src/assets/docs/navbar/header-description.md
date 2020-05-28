# Navbar Component

The `navbar` component is a responsive and versatile horizontal navigation bar with the following structure.

To display a Navbar component in your app and verify that everything works.
You need to import the `BulmaNavbarModule` that you want to display by adding the following lines to your `app.module.ts` file.

```javascript
import { BulmaNavbarModule} from 'ngx-bulma'
 @NgModule({
   imports: [BulmaNavbarModule]
 });
```

The most basic Modal needs only of `<bu-nav>` element with some content. However, Bulma components provides a number of preset sections that you can use inside of `</bu-nav>`

| Components          | Description                                                                        |
| ------------------- | ---------------------------------------------------------------------------------- |
| `<bu-nav>`          | Navbar Parent Component                                                            |
| `<bu-nav-brand>`    | the left side **always visible.**, which usually contains the logo and optionally. |
| `<bu-navbar-start>` | the left part of the menu, which appears next to the navbar brand on desktop.      |
| `<bu-navbar-end>`   | the right part of the menu, which appears at the end of the navbar.                |

| Directive   | Description                            |
| ----------- | -------------------------------------- |
| `buNavItem` | For initializing NavItem in your HTML. |
