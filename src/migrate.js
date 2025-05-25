const pgMigration = require('node-pg-migrate').default;
const path = require('path');
const pool = require('./db');

async function runMigration() {
    try {
        const client = await pool.connect();
        await pgMigration({
            databaseUrl: client,
            dir: path.join(__dirname, '../migrations'),
            direction: 'up',
            migrationsTable: 'pgmigrations',
            verbose: true,
        });

        console.log('Migrations completed successfully');
        await client.release();
        await pool.end();
    } catch (error) {
        console.error('Migration failed:', error);
        process.exit(1);
    }
}

runMigration();