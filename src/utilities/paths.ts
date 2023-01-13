import path from 'path';

const appPath = process.cwd();
const srcPath = path.resolve(appPath + '/src');
const buildPath = path.resolve(appPath + '/build');
const pagesPath = path.resolve(appPath + '/pages');

export { appPath, srcPath, buildPath, pagesPath };
