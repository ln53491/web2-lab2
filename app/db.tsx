import {sql} from "@vercel/postgres";
import {dbErrMsg} from "@/app/responses";

export default async function initDb() {
    try {
        await sql`DROP TABLE IF EXISTS Person;`;
        await sql`CREATE TABLE IF NOT EXISTS Person ( Id int, Username varchar(255), Email varchar(255) );`;
        const names1 = ['47194', 'peroperic', 'pero.peric@hotmail.com'];
        const names2 = ['13817', 'prikaze', 'prikaze@bom.bom'];
        const names3 = ['12846', 'faraon_marko', 'marko.markic@gmail.com'];
        const names4 = ['35361', 'mikimaus33', 'miki.milan@fer.hr'];
        const names5 = ['30937', 'brat_kula', 'tempmail@gmail.com'];
        await sql`INSERT INTO Person (Id, Username, Email) VALUES (${names1[0]}, ${names1[1]}, ${names1[2]});`;
        await sql`INSERT INTO Person (Id, Username, Email) VALUES (${names2[0]}, ${names2[1]}, ${names2[2]});`;
        await sql`INSERT INTO Person (Id, Username, Email) VALUES (${names3[0]}, ${names3[1]}, ${names3[2]});`;
        await sql`INSERT INTO Person (Id, Username, Email) VALUES (${names4[0]}, ${names4[1]}, ${names4[2]});`;
        await sql`INSERT INTO Person (Id, Username, Email) VALUES (${names5[0]}, ${names5[1]}, ${names5[2]});`;
    } catch (error) {
        throw new Error("Cannot connect to DB.");
    }
}

export async function getDbData(value: string) {
    try {
        const {rows} = await sql`SELECT * FROM Person WHERE ID = ${value};`
        return rows
    } catch (error) {
        return dbErrMsg
    }
}