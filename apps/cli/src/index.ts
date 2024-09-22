#!/usr/bin/env node
import { Command } from 'commander';
import inquirer from 'inquirer';
import ora from 'ora';
import chalk from 'chalk';
import fs from 'fs/promises';
import path from 'path';

const program = new Command();

program
    .name('pragatiui')
    .description('CLI for managing PragatiUI components')
    .version('0.1.0');

program
    .command('init')
    .description('Initialize PragatiUI in your project')
    .action(async () => {
        const spinner = ora('Initializing PragatiUI...').start();

        try {
            // Create a pragatiui.config.js file
            await fs.writeFile(
                path.join(process.cwd(), 'pragatiui.config.js'),
                `module.exports = {
          components: [],
        }`
            );

            // Update package.json
            const packageJson = JSON.parse(await fs.readFile(path.join(process.cwd(), 'package.json'), 'utf-8'));
            packageJson.dependencies = packageJson.dependencies || {};
            packageJson.dependencies['pragatiui'] = '^0.1.0';
            await fs.writeFile(path.join(process.cwd(), 'package.json'), JSON.stringify(packageJson, null, 2));

            spinner.succeed('PragatiUI initialized successfully');
            console.log(chalk.green('Run `npm install` to install the dependencies'));
        } catch (error) {
            spinner.fail('Failed to initialize PragatiUI');
            console.error(error);
        }
    });

program
    .command('add')
    .description('Add a PragatiUI component to your project')
    .action(async () => {
        const { component } = await inquirer.prompt([
            {
                type: 'list',
                name: 'component',
                message: 'Which component do you want to add?',
                choices: ['button', 'card', 'input'],
            },
        ]);

        const spinner = ora(`Adding ${component} component...`).start();

        try {
            // Read pragatiui.config.js
            const config = require(path.join(process.cwd(), 'pragatiui.config.js'));

            // Add component to config if not already present
            if (!config.components.includes(component)) {
                config.components.push(component);
                await fs.writeFile(
                    path.join(process.cwd(), 'pragatiui.config.js'),
                    `module.exports = ${JSON.stringify(config, null, 2)}`
                );
            }

            spinner.succeed(`Added ${component} component to your project`);
            console.log(chalk.green(`Import the component in your code: import { ${component.charAt(0).toUpperCase() + component.slice(1)} } from 'pragatiui'`));
        } catch (error) {
            spinner.fail(`Failed to add ${component} component`);
            console.error(error);
        }
    });

program.parse();