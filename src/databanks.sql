CREATE TABLE Todo(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    todotext TEXT NOT NULL,
    day ENUM("mon", "tue", "wed", "thu", "fri", "sat", "sun") NOT NULL,
    done BOOLEAN DEFAULT "false"
)