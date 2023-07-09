# **PERN Template (*js*)**  
```diff
-                                                                 
- NEEDS App folder, incomplete Pern Stack, no front-end - 7/9/2023
-                                                                 
```

<pre>
  <strong>Updated</strong>
     Code:   7/4/2023

  <strong>js</strong>
     Javascript

  <strong>branches</strong>
     js               - Javascript
     ts               - Typescript
     ts_prisma        - Typescript + Prisma
     ts_prisma_vite   - Typescript + Prisma + Vite
</pre>

**Contents**  
>**[1. Overview](#1-overview)**  
**[2. Getting Started](#2-getting-started)**  
**[3. Notes](#3-notes)**  

### 1. Overview  
> **Includes**:  
> • Javascript  
> **Requires**:  
> • Linux or WSL for Windows  
> • Docker  
> • Official Postgres Docker Image  
> • Node  

### 2. Getting Started
>  #### Step 1 - Start Docker Container w/ Postgres
  >  1. open terminal:
  > <sup>Note: Windows Users must be using WSL </sup>
  >   * `cd database` 
  >   * `./run-postgres.sh`  
  >
> 2. open new terminal, 
  >   * `docker exec -it postgres-dev bash` 
  >   * `psql -h localhost -p 5432 -U postgres`  
  >   * Enter password for user postgres, default: **`password`**
  >     * <sup> `\l` for list of databases  
  >                   `\c devdb` to connect to a database  
  >                   `\dt` to show tables  
  >                   `\d` to show tables, views, and sequences 
  > 
  >
>  #### Step 2 - Start App
  >  1. open terminal:  
  > <sup>Note: Windows Users must be using WSL </sup>  
  >   * `cd server` 
  >   * `npx nodemon index`  
  >  
### 3. Notes
> Node 18 was used
---
<sup>Used https://stackedit.io/app# to format this README