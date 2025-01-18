import PouchDb from "pouchdb-browser";
import {Constants} from "./";

const Connection = {
	db: new PouchDb(Constants.DB_NAME),
	dbName: Constants.DB_NAME
}

export default Connection
