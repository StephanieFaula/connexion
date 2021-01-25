BEGIN;

DROP TABLE IF EXISTS user;

CREATE TABLE user (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    admin BOOLEAN NOT NULL DEFAULT FALSE, 
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP
);

INSERT INTO user(name, firstname, email, password, admin) 
VALUES (
    'Faula', 'Zeldacarin', 'oceane.faula@laposte.net', 'toto', TRUE
);

COMMIT;