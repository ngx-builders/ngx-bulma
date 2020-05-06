```javascript
<bu-nav color="link">
  <bu-nav-brand>
    <a class="navbar-item" href="https://bulma.io">
      <img
        src="https://bulma.io/images/bulma-logo-white.png"
        width="112"
        height="28"
      />
    </a>
    <a
      (click)="toggleNavbar()"
      role="button"
      #navBurger
      class="navbar-burger burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="ngxBulmaNavbar"
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </bu-nav-brand>
  <div id="ngxBulmaNavbar" class="navbar-menu" #navMenu>
    <bu-navbar-start>
      <a buNavItem class="navbar-item">Home</a>
      <a buNavItem class="navbar-item">Documentation</a>
    </bu-navbar-start>
    <bu-navbar-end>
      <div buNavItem>
        <div class="button-container">
          <button buButton theme="primary">Sign up</button>
          <button buButton theme="light">Log in</button>
        </div>
      </div>
    </bu-navbar-end>
  </div>
</bu-nav>
```
