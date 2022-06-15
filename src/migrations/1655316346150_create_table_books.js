module.exports = {
    "up": "CREATE TABLE books (id INT NOT NULL AUTO_INCREMENT, UNIQUE KEY id (id), capa TEXT, nome varchar(255), editora varchar(255), link TEXT)",
    "down": "DROP TABLE books"
}