CREATE TABLE drivers (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    email TEXT NOT NULL,
    password TEXT NOT NULL
);

INSERT INTO drivers
(email, password)
VALUES
('jasoncarcamo20@yahoo.com', 'Carcamo11!');