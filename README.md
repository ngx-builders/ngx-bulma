# ngx2-bulma

Angular Library with Bulma CSS

![main](https://github.com/ngx-builders/ngx-bulma/workflows/main/badge.svg)
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors)

# Getting Started with ngx2-bulma

This guide explains how to setup your Angular project to begin using ngx2-bulma. It includes information on prerequisites, installing ngx2-bulma, and optionally displaying a sample ngx2-bulma component in your application to verify your setup.

## Angular Resources

 <p>If you are new to Angular or getting started with a new Angular application, see <a href="https://angular.io/start">Angular's full Getting Started Guide</a>
 and <a href="https://angular.io/guide/setup-local">Setting up your environment</a>.</p>

# Install ngx2-bulma

Use the NPM command to install ngx2-bulma in your application to set up your Angular project with ngx2-bulma by running the following command:

```shell
ng add ngx2-bulma
```

The `ng add` command will install ngx2-bulma and the bulma CSS framework.
It will also automate the configuration below.

1. Add your bulma CSS in your in `angular.json`:

```json
"styles": [
  "projects/bulma-app/src/styles.css",
  "node_modules/bulma/css/bulma.css"
]
```

## Display a ngx2-bulma component

Let's display a card component in your app and verify that everything works. You need to import the `BulmaCardModule` that you need to display by adding the following lines to your `app.module.ts` file.

```javascript
import { BulmaCardModule } from 'ngx-bulma';

@NgModule({
  imports: [BulmaCardModule],
  // ...
})
export class AppModule {}
```

Once you done all the above setup, you can use the Bulma card component in your Angular application as described [in the documentation](https://ngx2-bulma.netlify.app/components/card):

```html
<bu-card>
  The content
</bu-card>
```

## Documentation

For complete documentation refer to [ngx2-bulma](https://ngx2-bulma.netlify.com/).

## Contributing

ngx2-bulma is a community-driven project. Read our [contributing guidelines](./CONTRIBUTING.md) on how to get involved.

## Images Credits

This library would have been incomplete without the support of Iryn Kasparova. You can connect with her on [LinkedIn](https://www.linkedin.com/in/iryn-kasparova/)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/haroon786"><img src="https://avatars0.githubusercontent.com/u/20164301?v=4" width="100px;" alt=""/><br /><sub><b>HaroonJ</b></sub></a><br /><a href="https://github.com/ngx-builders/ngx-bulma/commits?author=haroon786" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/ankitsaini345"><img src="https://avatars2.githubusercontent.com/u/37847177?v=4" width="100px;" alt=""/><br /><sub><b>Ankit Saini</b></sub></a><br /><a href="https://github.com/ngx-builders/ngx-bulma/commits?author=ankitsaini345" title="Code">💻</a></td>
    <td align="center"><a href="https://www.santoshyadav.dev"><img src="https://avatars3.githubusercontent.com/u/11923975?v=4" width="100px;" alt=""/><br /><sub><b>Santosh Yadav</b></sub></a><br /><a href="https://github.com/ngx-builders/ngx-bulma/commits?author=santoshyadav198613" title="Code">💻</a></td>
    <td align="center"><a href="https://ankitsharmablogs.com/"><img src="https://avatars1.githubusercontent.com/u/33789321?v=4" width="100px;" alt=""/><br /><sub><b>Ankit</b></sub></a><br /><a href="https://github.com/ngx-builders/ngx-bulma/commits?author=AnkitSharma-007" title="Code">💻</a></td>
    <td align="center"><a href="https://www.ferdinand-malcher.de"><img src="https://avatars1.githubusercontent.com/u/1683147?v=4" width="100px;" alt=""/><br /><sub><b>Ferdinand Malcher</b></sub></a><br /><a href="https://github.com/ngx-builders/ngx-bulma/commits?author=fmalcher" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!
