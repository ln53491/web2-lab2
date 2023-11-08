import {Client} from "pg";
import {NextResponse} from "next/server";

export async function GET(request: Request) {
    const {searchParams} = new URL(request.url);
    const value = searchParams.get('value');

    const client = new Client({
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        host: process.env.POSTGRES_HOST,
        database: process.env.POSTGRES_DATABASE,
        connectionString: process.env.POSTGRES_URL,
        ssl: true
    });

    try {
        await client.connect();
        const rows = await client.query("SELECT * FROM Person WHERE ID = $1;", [value]);
        return NextResponse.json({ message: rows.rows }, { status: 200 });
    } catch (e) {
        return NextResponse.json({ message: [] }, { status: 200 });
    } finally {
        await client.end();
    }
}