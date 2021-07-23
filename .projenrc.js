const { JsiiProject } = require('projen');
const project = new JsiiProject({
  author: 'The Guardian',
  authorAddress: 'devx@theguardian.com',
  defaultReleaseBranch: 'main',
  name: '@guardian/projen-sbt',
  repositoryUrl: 'https://github.com/guardian/projen-sbt.git',

  // deps: [],                          /* Runtime dependencies of this module. */
  // description: undefined,            /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],                       /* Build dependencies for this module. */
  // packageName: undefined,            /* The "name" in package.json. */
  // projectType: ProjectType.UNKNOWN,  /* Which type of project this is (library/app). */
  // release: undefined,                /* Add release management to this project. */
});
project.synth();
