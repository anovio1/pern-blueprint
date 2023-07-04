
### Prisma Notes
>### 1.  **Ran command**
>> `npx prisma init`  
>>  
>### 2a. Text from terminal:    <br>(After running primsa init):
>>✔ Your Prisma schema was created at prisma/schema.prisma  
>>
>>You can now open it in your favorite editor.
>>Next steps:
>>1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started  
>>
>>2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.  
>>
>>3. Run prisma db pull to turn your database schema into a Prismaschema.
>>
>>4. Run prisma generate to generate the Prisma Client. You can then start querying your database.
>>
>>More information in our documentation: https://pris.ly/d/getting-started
>### 2b. Text from Website    <br>(Explaining primsa init):
>>This command does two things:  
>>-   creates a new directory called  `prisma`  that contains a file called  `schema.prisma`, which contains the Prisma schema with your database connection variable and schema models  
>>
>>-   creates the  [`.env`  file](https://www.prisma.io/docs/guides/development-environment/environment-variables#using-env-files)  in the root directory of the project, which is used for defining environment variables (such as your database connection)
---
<sup>Used https://stackedit.io/app# to format this README