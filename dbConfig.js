import Pool from 'pg-pool';

const dbPool = new Pool({
    user:"postgres",
    host:"127.0.0.1", 
    database:"shortit",
    passowrd: "meri2233", 
    port: 5432
})

export default dbPool;