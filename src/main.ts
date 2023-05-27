import { migrate } from "drizzle-orm/node-postgres/migrator";
import { env } from "./config/env";
import { db } from "./db";
import { startServer } from "./server"; 

async function gracefulShutdown({
    app,
}:{
    app: Awaited<ReturnType<typeof startServer>>
}){
    await app.close()
}

async function main(){
    const app = await startServer();
    try {
        await app.listen({ port: 3000 })

        await migrate(db,{
            migrationsFolder:"./migrations"
        })

        const signals = ['SIGINT','SIGTERM']
        app.log.debug(env)

        for(const exitSignal of signals){
            process.on(exitSignal,()=>{
                gracefulShutdown({
                    app
                })
            })
        }
      } catch (err) {
        app.log.error(err)
        process.exit(1)
      }
}
main()