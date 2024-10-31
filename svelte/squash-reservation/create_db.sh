#!/bin/bash

sqlite3 squash_reservations.db <<EOF
CREATE TABLE IF NOT EXISTS reservations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT NOT NULL,
    time TEXT NOT NULL,
    court_number INTEGER NOT NULL CHECK(court_number BETWEEN 1 AND 4),
    name TEXT NOT NULL CHECK(name IN ('Sergio', 'Luis', 'Luiz Felipe', 'Mireille', 'Diptesh'))
);
EOF
