CREATE TABLE monsters(
    id serial,
    name character varying(50),
    personality character varying(50)
);

CREATE TABLE habitats(
    id serial,
    name character varying(50),
    climate character varyin(50),
    temperature int
);

CREATE TABLE lives(
    monster character varying(50),
    habitat character varying)50
);