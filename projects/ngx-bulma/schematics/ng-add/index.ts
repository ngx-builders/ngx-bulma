import { Rule, SchematicContext, Tree, chain } from '@angular-devkit/schematics';
import { getWorkspace } from '@schematics/angular/utility/config';
import {
  addPackageToPackageJson,
  WorkspaceProject,
  WorkspaceSchema,
  getProjectFromWorkspace
} from 'schematics-utilities';
import { Schema } from './schema';
import { addStyleToTarget, installPackageJsonDependencies } from '../utils';

const bulmaStylePath = `./node_modules/bulma/css/bulma.min.css`;

// Just return the tree
export default function (_options: any): Rule {

  return chain([
    addPackageJsonDependencies(),
    installPackageJsonDependencies(),
    addStyles(_options, insertBulmaStyles)
  ]);
}


function addPackageJsonDependencies(): Rule {
  return (host: Tree, context: SchematicContext) => {
    const dependencies: { name: string; version: string }[] = [
      { name: 'bulma', version: '0.8.0' },
      { name: 'ngx2-bulma', version: '0.1.0' }
    ];

    dependencies.forEach(dependency => {
      addPackageToPackageJson(host, dependency.name, `${dependency.version}`);
      context.logger.log('info', `✅️ Added "${dependency.name}`);
    });

    return host;
  };
}


export function addStyles(options: Schema, insertStyle: Function): (host: Tree) => Tree {
  return function (host: Tree): Tree {
    const workspace = getWorkspace(host);
    const project = getProjectFromWorkspace(workspace, options.project);
    insertStyle(project, host, workspace);
    return host;
  };
}


function insertBulmaStyles(project: WorkspaceProject, host: Tree, workspace: WorkspaceSchema) {
  addStyleToTarget(project, 'build', host, bulmaStylePath, workspace);
  addStyleToTarget(project, 'test', host, bulmaStylePath, workspace);
}

