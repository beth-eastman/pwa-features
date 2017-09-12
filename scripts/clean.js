var shell = require('shelljs');

shell.config.silent = true;

if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}

shell.echo('Removing demo...');

// Remove Folders
shell.echo('✓ Removing store demo components...');
shell.rm('-rf', 'src/components/StoreDemo');

shell.echo('✓ Remove store demo containers...');
shell.rm('-rf', 'src/containers/StoreDemo');

shell.echo('✓ Remove store demo images...');
shell.rm('-rf', 'src/res/images/StoreDemo');


// Remove Specific Files
shell.rm('src/res/data/products.ts', 'src/actions/storeDemo.ts', 'src/reducers/storeDemo.ts');


// Copy Files to remove calls to Store Demo files that have been removed
shell.cp('scripts/templates/AppRoutes.tsx', 'src/components/AppRoutes.tsx');
shell.cp('scripts/templates/index.ts', 'src/reducers/index.ts');
shell.cp('scripts/templates/LeftMenuIcon.tsx', 'src/components/LeftMenuIcon.tsx');
shell.cp('scripts/templates/HomePage.tsx', 'src/components/HomePage.tsx');

// shell.rm('-rf', 'scripts/templates/*');

shell.config.reset();

shell.echo('✓ Finished. Happy coding!');
