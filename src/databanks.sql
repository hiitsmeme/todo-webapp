CREATE TABLE Todo(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    todotext TEXT NOT NULL,
    day TEXT NOT NULL,
    done BOOLEAN DEFAULT false
);