import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { build_elixirs, elixir_id } from './api.js';
import * as app from './app.js';

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
            await app.get_elixir(argv.name)
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
            await app.get_elixir_id(argv.id)
        }
    })
    .demandCommand(1, 'Please specify a command.')
    .help()
    .argv;

/*
 elixirs: 
    Frog Parts Mixture
    Fergus Fungal Budge
    Hair-Raising Potion
 */
