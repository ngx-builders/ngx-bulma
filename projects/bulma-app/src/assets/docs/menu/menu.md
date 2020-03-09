# Menu
A simple menu, for any type of vertical navigation.

To display a Menu component in your app and verify that everything works. You need to import the BulmaMenuModule that you want to display by adding the following lines to your app.module.ts file.

``` 
import { BulmaMenuModule} from 'ngx-bulma'
  @NgModule({
    imports: [BulmaMenuModule]
  });
  
```

The menu class  container holds contents of our menu list.By itself, the ``` <bu-menu> ``` element does not render anything.
 ```
 <bu-menu>

 </bu-menu>
 ```
 To specify header name use below bulma component 
 ```
 <bu-menu-header>
        Header
 </bu-menu-header>
 ``` 
To list out all menu list we can use.
```
     <bu-menu-list>
        <li><a>Dashboard</a></li>
        <li><a>Customers</a></li>
    </bu-menu-list>
```

By adding together all components we can see whole menu component like this in our component.html.
```
<bu-menu>
    <bu-menu-header>
        Header
    </bu-menu-header>
    <bu-menu-list>
         <img src="assets/images/dashboard.png" style="float: left;margin-top: 10px;margin-right:3px;"><i
            class="icon-dashboard"></i><a>Dashboard</a>
        <img src="assets/images/support.png" style="float: left;margin-top: 10px;margin-right:3px;"> <a>Customers</a>
    </bu-menu-list>
<bu-menu>

```