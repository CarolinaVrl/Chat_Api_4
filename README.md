TABLE CREATE IN POSTGRES

INSERT INTO types (name) VALUES ('pareja') ('grupal')

Empezando en id 2 por un error de sintaxis

Routes Usadas
Users
GET  localhost:5000/api/v1/users
POST localhost:5000/api/v1/users/register
POST localhost:5000/api/v1/users/conversation
GET  localhost:5000/api/v1/users/1/conversation

Login
POST localhost:5000/api/v1/users/login

Message
POST localhost:5000/api/v1/message

Conversation
GET  localhost:5000/api/v1/conversation/1/message
