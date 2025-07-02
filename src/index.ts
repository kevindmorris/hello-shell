#!/usr/bin/env node

import chalk from 'chalk';

const args = process.argv.slice(2);
const nameArg = args.find(arg => arg.startsWith('--name='));
const colorArg = args.find(arg => arg.startsWith('--color='));

const name = nameArg ? nameArg.split('=')[1] : 'World';
const color = colorArg ? colorArg.split('=')[1] : 'white';

const greeting = `Hello, ${name}`;
const isValidColor = (chalk as any)[color];

console.log(isValidColor ? (chalk as any)[color](greeting) : chalk.white(greeting));
