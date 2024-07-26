import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66a36e3f003df64960f7');

export const account = new Account(client);
export { ID } from 'appwrite';
