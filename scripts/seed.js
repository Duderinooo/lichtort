const { db } = require('@vercel/postgres');
const { quotes } = require('../app/lib/data.ts');

async function dropQuotesTable(client) {
  try {
    // Drop the "quotes" table if it exists
    await client.query('DROP TABLE IF EXISTS quotes CASCADE');
    console.log('Dropped "quotes" table');
  } catch (error) {
    console.error('Error dropping "quotes" table:', error);
    throw error;
  }
}

async function seedQuotes(client) {
  try {
    // Create the "quotes" table if it doesn't exist
    await client.query(`
      CREATE TABLE IF NOT EXISTS quotes (
        id SERIAL PRIMARY KEY,
        text TEXT NOT NULL,
        author VARCHAR(255) NOT NULL
      );
    `);

    console.log('Created "quotes" table');

    // Insert data into the "quotes" table
    const insertedQuotes = await Promise.all(
      quotes.map(async (quote) => {
        return client.query(
          `
          INSERT INTO quotes (text, author)
          VALUES ($1, $2)
          RETURNING *;
        `,
          [quote.text, quote.author],
        );
      }),
    );

    console.log(`Seeded ${insertedQuotes.length} quotes`);

    return {
      quotes: insertedQuotes,
    };
  } catch (error) {
    console.error('Error seeding quotes:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  try {
    await dropQuotesTable(client);
    await seedQuotes(client);
  } finally {
    await client.end();
  }
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the "quotes" table:',
    err,
  );
});
