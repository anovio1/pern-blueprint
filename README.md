# **PERN Blueprint**
**Contents**
>**[1. Overview](#overview)**  
**[2. Getting Started](#getting-started)**  
**[3. Notes](#notes)**  

### 1. Overview  
> **Summary**: PERN Stack without requiring Postgres installed locally  
> **Requires**:
> • Windows w/ WSL
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
	> 		* <sup> `\l` for list of databases  
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

