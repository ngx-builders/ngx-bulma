# Getting Started with ngx2-bulma

This guide explains how to setup your Angular project to begin using ngx2-bulma. It includes information on prerequisites, installing ngx2-bulma, and optionally displaying a sample ngx2-bulma component in your application to verify your setup.

## Angular Resources

 <p>If you are new to Angular or getting started with a new Angular application, see <a href="https://angular.io/start">Angular's full Getting Started Guide</a>
 and <a href="https://angular.io/guide/setup-local">Setting up your environment</a>.</p>

# Install ngx2-bulma

Use the npm command to install ngx2-bulma in your application to set up your Angular project with ngx2-bulma by running the following commands:

```shell
ng add ngx2-bulma
```

The `ng add` command will install ngx2-bulma and bulma css framework.
It will also do automate the below configuration

1. Add your bulma css in your in `angular.json`

```json
"styles": [
            "projects/bulma-app/src/styles.css",
            "node_modules/bulma/css/bulma.css"
          ]
```

## Display a ngx2-bulma component

Let's display a card component in your app and verify that everything works. You need to import the `BulmaCardModule` that you want to display by adding the following lines to your `app.module.ts` file.

```javascript
 import { BulmaCardModule} from 'ngx-bulma';

 @NgModule({
    imports: [BulmaCardModule]
    });
```

Once you done all the above setup, now you can use the bulmacard component in your Angular application.
