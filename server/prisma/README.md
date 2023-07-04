### Prisma Notes
## 1.  **Ran command**
> `npx prisma init`  
>  
>### a. Text from terminal:    <br>(After running primsa init):
>>✔ Your Prisma schema was created at prisma/schema.prisma  
>>
>>You can now open it in your favorite editor.
>>Next steps:
>>1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started  
>>
>>2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.  
>>  
>>More information in our documentation: https://pris.ly/d/getting-started
>### b. Text from Website    <br>(Explaining primsa init):
>>This command does two things:  
>>-   creates a new directory called  `prisma`  that contains a file called  `schema.prisma`, which contains the Prisma schema with your database connection variable and schema models  
>>
>>-   creates the  [`.env`  file](https://www.prisma.io/docs/guides/development-environment/environment-variables#using-env-files)  in the root directory of the project, which is used for defining environment variables (such as your database connection)  
  
## 2.  **Edited .env**
> edited .env and added `postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA` 
>  
>### a. Text from Website    <br>(on connection URL):
>>In most cases, you can use the postgres:// and postgresql:// URI scheme designators interchangeably - however, depending on how your database is hosted, you might need to be specific.

## 3a. Fresh Project, seed DB via Prisma
>>1. Follow: https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/using-prisma-migrate-typescript-postgresql 
>>

## 3b. Existing Project, import DB data via Prisma
>>1. Run prisma db pull to turn your database schema into a Prismaschema.
>>
>>2. Run prisma generate to generate the Prisma Client. You can then start querying your database.
>> 
---
<sup>Used https://stackedit.io/app# to format this README