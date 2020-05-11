import {
  chain,
  Rule,
  Tree,
  SchematicsException,
  applyTemplates,
  apply,
  move,
  url,
  mergeWith
} from "@angular-devkit/schematics";
import { strings, experimental, normalize } from "@angular-devkit/core";
import { Schema } from "./schema";

// Just return the tree
export default function navigation (options: Schema): Rule {
  return (tree: Tree) => {
    const workspaceConfig = tree.read("/angular.json");
    if (!workspaceConfig) {
      throw new SchematicsException(
        "Could not find Angular workspace configuration"
      );
    }

    // convert workspace to string
    const workspaceContent = workspaceConfig.toString();

    // parse workspace string into JSON object
    const workspace: experimental.workspace.WorkspaceSchema = JSON.parse(
      workspaceContent
    );

    if (!options.project) {
      options.project = workspace.defaultProject;
    }

    const projectName = options.project as string;

    const project = workspace.projects[projectName];

    const projectType = project.projectType === "application" ? "app" : "lib";
    if (options.path === undefined) {
      options.path = `${project.sourceRoot}/${projectType}`;
    }
    const templateSource = apply(url("./files"), [
      applyTemplates({
        classify: strings.classify,
        dasherize: strings.dasherize,
        name: options.name,
      }),
      move(normalize(options.path as string)),
    ]);
    return chain([
      mergeWith(templateSource)
    ]);
  };
}
