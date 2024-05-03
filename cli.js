import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
// import { displayElixirsByName, displayElixirById } from './api.js';
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
            // await build_elixirs(argv.name);    
            await app.get_elixir()
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
            // await elixir_id(argv.id);
            await app.get_elixir_id()
        }
    })
    .demandCommand(1, 'Please specify a command.')
    .help()
    .argv;

// Fergus Fungal Budge