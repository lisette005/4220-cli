import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
//import { build_elixirs, elixir_id } from './api.js';
import * as app from './app.js';
import { saveSearchHistoryToDatabase } from './db.js'; // Added: Import saveSearchHistoryToDatabase function
import { getSearchHistoryFromDatabase } from './db.js';


yargs(hideBin(process.argv))
    .command({
        command: 'search <name>',
        describe: 'Search for elixirs by name',
        builder: (yargs) => {
            yargs.positional('name', {
                describe: 'Name of the elixir',
                type: 'string'
            })
            .option('cache', {
                alias: 'c',
                describe: 'Use cache for search results',
                type: 'boolean',
                default: false // Default value is false (not using cache)
            });
        },
        handler: async (argv) => {
            await app.get_elixir(argv.name);
            
            // Added: Save search history to mock database
            const entry = { type: 'search', query: argv.name, timestamp: new Date() };
            await saveSearchHistoryToDatabase(entry);
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
            await app.get_elixir_id(argv.id);
            
            // Added: Save search history to mock database
            const entry = { type: 'id', query: argv.id, timestamp: new Date() };
            await saveSearchHistoryToDatabase(entry);
        }
    })
    .command({
        command: 'history',
        describe: 'Display search history',
        handler: async () => {
            // Added: Retrieve search history from mock database
            const history = await getSearchHistoryFromDatabase();
            console.log('Search History:');
            history.forEach(entry => {
                console.log(`${entry.type}: ${entry.query} - ${entry.timestamp}`);
            });
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
