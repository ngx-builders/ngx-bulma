# Navbar Component
The ```navbar``` component is a responsive and versatile horizontal navigation bar with the following structure.
- navbar the main container
  - ```navbar-brand``` the left side **always visible.**, which usually contains the logo and optionally some links or icons
    -    ```avbar-burger``` the hamburger icon, which toggles the navbar menu on touch devices
  -  ```navbar-menu``` the right side, hidden on touch devices, visible on desktop
     - ```navbar-start``` the left part of the menu, which appears next to the navbar brand on desktop
     - ```navbar-end``` the right part of the menu, which appears at the end of the navbar
        - ```navbar-item``` each single item of the navbar, which can either be an a or a div
            - ```navbar-link``` a link as the sibling of a dropdown, with an arrow
            - ```navbar-dropdown``` the dropdown menu, which can include navbar items and dividers
                - ```navbar-divider``` a horizontal line to separate navbar items

# Basic Navbar

To get started quickly, here is what a complete basic navbar looks like:

```
<bu-nav>
    <bu-nav-brand>
            <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
            </a>
    </bu-nav-brand>
  <bu-nav-item>
    <a class="navbar-item">
      Home
    </a>
    <a class="navbar-item">
      Documentation
    </a>
  </bu-nav-item>
</bu-nav>
```