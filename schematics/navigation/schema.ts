export interface Schema {
  // The name of the service.
  name: string;

  // The path to create the service.
  path?: string;

  // The name of the project.
  project?: string;

  // Styles to be inlined or not
  inlineStyle?: Boolean;

  // Template o be inlined or not
  inlineTemplate?: Boolean;
}