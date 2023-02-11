import { DatabaseConnection } from './sqlite-database.connection';

// To use this class, call DatabaseInit.getInstance() to get the instance of the class.

// DatabaseInit is a singleton class tha initializes the database, setting up needed configuration and
// creating the needed tables if they don't exist. Preferably, this class should bet called when the app
// starts, but the singleton pattern allows it to be called multiple times without any issues.

let db = null;

export default class DatabaseInit {
    private static instance: DatabaseInit;

    public static getInstance(): DatabaseInit {
        if (!DatabaseInit.instance) {
            DatabaseInit.instance = new DatabaseInit();
        }

        return DatabaseInit.instance;
    }

    private constructor() {
        db = DatabaseConnection.getConnection();
        // db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () => console.log('Foreign keys turned on'))
        this.enableForeignKeys()
            .then(() => {
                this.initDatabases();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    private async enableForeignKeys() {
        return new Promise<void>((resolve, reject) => {
            db.transaction((tx) => {
                tx.executeSql(
                    'PRAGMA foreign_keys = ON;',
                    [],
                    (_, result: any) => {
                        console.log('Foreign keys turned on', result);
                        resolve();
                    },
                    (_, error: Error) => {
                        console.log('Error turning on foreign keys', error);
                        reject(error);
                    },
                );
            });
        });
    }

    private async initDatabases() {
        const CREATE_TASKS_TABLE_SQL = `
			CREATE TABLE IF NOT EXISTS tasks (
				id TEXT PRIMARY KEY NOT NULL,
				title TEXT NOT NULL,
				notes TEXT,
				completed INTEGER NOT NULL,
				date_created TEXT NOT NULL,
				date_completed TEXT,
				date_due TEXT,
				date_deadline TEXT,
				notify_at TEXT,
				CHECK (completed = 0 OR completed = 1)
			);
		`;
        const CREATE_SUBTASKS_TABLE_SQL = `
			CREATE TABLE IF NOT EXISTS subtasks (
				id TEXT PRIMARY KEY NOT NULL,
				task_id TEXT NOT NULL,
				title TEXT NOT NULL,
				completed INTEGER NOT NULL,
				FOREIGN KEY(task_id) REFERENCES tasks(id) ON DELETE CASCADE,
				CHECK (completed = 0 OR completed = 1)
			);
		`;

        db.transaction((tx) => {
            tx.executeSql(
                CREATE_TASKS_TABLE_SQL,
                [],
                (_, result: any) => {
                    console.log(`Table 'tasks' created`, result);
                },
                (_, error: Error) => {
                    console.log(`Error creating 'tasks' table`, error);
                    return false;
                },
            );
            tx.executeSql(
                CREATE_SUBTASKS_TABLE_SQL,
                [],
                (_, result: any) => {
                    console.log(`Table 'subtasks' created`, result);
                },
                (_, error: Error) => {
                    console.log(`Error creating 'subtasks' table`, error);
                    return false;
                },
            );
        });
    }
}
