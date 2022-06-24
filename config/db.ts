import mongoose from "mongoose";
import config from "config";
import 'dotenv/config';
import Logger from '../config/logger'


async function connect() {
    const dbUri = config.get < string > ('dbUri')

    try {
        await mongoose.connect(dbUri);
        Logger.info("Connected in MongoDB");

    } catch (error) {
        Logger.error("erro na conexão com MongoDB")
        Logger.error(error);
        process.exit(1);

    }

}

export default connect;