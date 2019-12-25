import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { WorkspaceProject, WorkspaceSchema } from 'schematics-utilities';


export function installPackageJsonDependencies(): Rule {
  return (host: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
    context.logger.log('info', `🔍 Installing packages...`);

    return host;
  };
}

export function addStyleToTarget(project: WorkspaceProject, targetName: string, host: Tree,
  assetPath: string, workspace: WorkspaceSchema) {

  const targetOptions = getProjectTargetOptions(project, targetName);

  if (!targetOptions.styles) {
    targetOptions.styles = [assetPath];
  } else {

    const existingStyles = targetOptions.styles
      .map((style: string | { input: string }) => {
        return typeof style === 'string' ? style : style.input;
      });

    const hasBootstrapStyle = existingStyles.find(
      (style: string) => {
        return style.includes(assetPath);
      });

    if (!hasBootstrapStyle) {
      targetOptions.styles.unshift(assetPath);
    }
  }

  host.overwrite('angular.json', JSON.stringify(workspace, null, 2));
}

export function getProjectTargetOptions(project: WorkspaceProject, buildTarget: string) {
  const targetConfig = project.architect && project.architect[buildTarget] ||
    project.targets && project.targets[buildTarget];

  if (targetConfig && targetConfig.options) {

    return targetConfig.options;
  }

  throw new Error(`Cannot determine project target configuration for: ${buildTarget}.`);
}

