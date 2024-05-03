#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { build_elixirs, elixir_id } from './api.js';

async function displayElixirsByName(name) {
    try {
        const elixirs = await build_elixirs(name);
        console.log('Elixirs found:', elixirs);
    } catch (error) {
        console.error('Error fetching elixirs:', error);
    }
}

async function displayElixirById(id) {
    try {
        const elixir = await elixir_id(id);
        console.log('Elixir found:', elixir);
    } catch (error) {
        console.error('Error fetching elixir:', error);
    }
}

yargs(hideBin(process.argv))
    .command({
        command: 'search <name>',
        describe: 'Search for elixirs by name',
        builder: (yargs) => {
            yargs.positional('name', {
                describe: 'Name of the elixir',
                type: 'string'
            });
        },
        handler: async (argv) => {
            await displayElixirsByName(argv.name);
        }
    })
    .command({
        command: 'id <id>',
        describe: 'Get elixir by ID',
        builder: (yargs) => {
            yargs.positional('id', {
                describe: 'ID of the elixir',
                type: 'string'
            });
        },
        handler: async (argv) => {
            await displayElixirById(argv.id);
        }
    })
    .demandCommand(1, 'Please specify a command.')
    .help()
    .argv;





