module.exports = {
    "up": "INSERT INTO books (capa, nome, editora, link) VALUES ('https://lh3.googleusercontent.com/JvM0JKKuZNJMWAC5iZPm4j-mdS9ORpZbpEWzg0zmJ0i2_xgIcju0OLXJ-zmnvz_GtFFGHe9qZ9Dz-6W0u5fRLFQaRlOI_hGzbetw','Site Reliability Engineering','O Reilly Media','https://sre.google/books/');",
    "down": "DELETE FROM books WHERE nome='Site Reliability Engineering';"
}