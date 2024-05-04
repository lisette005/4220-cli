import fs from 'fs';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbDirectory = path.resolve(__dirname, 'mock_database');

const _read = async (collection) => {
    try {
        const fullPath = path.resolve(dbDirectory, `${collection}.json`);
        const data = await fs.promises.readFile(fullPath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        throw new Error(
            `Error reading data from collection ${collection}: ${error.message}`
        );
    }
};

export const create = async (collection, data) => {
    try {
        const records = await _read(collection);
        data.timestamp = new Date().toISOString();
        records.push(data);

        const fullPath = path.resolve(dbDirectory, `${collection}.json`);
        await fs.promises.writeFile(fullPath, JSON.stringify(records, null, 2));
    } catch (error) {
        throw new Error(
            `Error creating record in collection ${collection}: ${error.message}`
        );
    }
};

export const find = async (collection, id = null) => {
    try {
        const records = await _read(collection);

        if (id) {
            const record = records.find((record) => record.id === id);
            return record;
        } else {
            return records;
        }
    } catch (error) {
        throw new Error(
            `Error finding record in collection ${collection}: ${error.message}`
        );
    }
};

// Added: Function to save search history to mock database
export const saveSearchHistoryToDatabase = async (entry) => {
    try {
        await create('search_history', entry);
    } catch (error) {
        throw new Error(
            `Error saving search history to database: ${error.message}`
        );
    }
};
// Function to retrieve search history from mock database
export const getSearchHistoryFromDatabase = async () => {
    try {
        return await find('search_history');
    } catch (error) {
        throw new Error(
            `Error retrieving search history from database: ${error.message}`
        );
    }
};
