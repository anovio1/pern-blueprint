# Edits
pg_hba.conf needs to have edits made to ipv4 local connections, try 127.0.0.0 or when connecting to running database in separate terminal, use the ipv4 returned in the error  
  
# Description  
1. ./run-postgres.sh will create a Docker container with a base db titled 'devdb' (changed in .sh file)  
2. Connect to docker container with terminal by opening a new terminal window and running 'docker exec -it postgres-dev bash'  
3. in the same terminal from step 2, type 'psql -h localhost -p {port} -U {username}'  
4. in the same terminal from step 2, type '\l' to see list of databases