// EMILINAR COLECCIÓN:
db.users.drop();
// CREAR COLECCIÓN:
db.createCollection("Users");
// INSERTAR INFO:
db.users.insertMany([
    {
        "nombre": "Juan",
        "apellido": "Perez",
        "correo": "juanspam@example.com",
        "edad": 25,
        "pais": "Estados Unidos",
        "ciudad": "New York",
        "salario": 2500,
        "altura": 170,
        "peso": 160
      },
      {
        "nombre": "Maria",
        "apellido": "Garcia",
        "correo": "maria@example.com",
        "edad": 35,
        "pais": "Colombia",
        "ciudad": "Bogotá",
        "salario": 3000,
        "altura": 160,
        "peso": 140
      },
      {
        "nombre": "Pedro",
        "apellido": "Lopez",
        "correo": "pedro@example.com",
        "edad": 40,
        "pais": "Inglaterra",
        "ciudad": "London",
        "salario": 4000,
        "altura": 180,
        "peso": 180
      },
      {
        "nombre": "Ana",
        "apellido": "Martinez",
        "correo": "borrar@riwi.com",
        "edad": 20,
        "pais": "Estados Unidos",
        "ciudad": "New York",
        "salario": 6000,
        "altura": 175,
        "peso": 190
      },
      {
        "nombre": "John",
        "apellido": "Doe",
        "correo": "john@example.com",
        "edad": 55,
        "pais": "Canada",
        "ciudad": "Toronto",
        "salario": 3500,
        "altura": 185,
        "peso": 200
      },
      {
        "nombre": "Amelia",
        "apellido": "Johnson",
        "correo": "otro@riwi.net",
        "edad": 55,
        "pais": "Canada",
        "ciudad": "Toronto",
        "salario": 3500,
        "altura": 185,
        "peso": 200
      },
      {
        "nombre": "Johanna",
        "apellido": "Smith",
        "correo": "ejemplo@riwi.es",
        "edad": 55,
        "pais": "Mexico",
        "ciudad": "Ciudad de Mexico",
        "salario": 3500,
        "altura": 185,
        "peso": 200
      },
      {
        "nombre": "Sofía",
        "apellido": "Aura",
        "edad": 23,
        "pais": "Mexico",
        "ciudad": "Ciudad de Mexico",
        "salario": 3500,
        "altura": 190,
        "peso": 170
      },
      {
        "nombre": "Sium",
        "apellido": "Yong",
        "edad": 10,
        "pais": "Japón",
        "ciudad": "Tokyo",
        "salario": 0,
        "altura": 195,
        "peso": 170
      },
      {
        "nombre": "Preikur",
        "apellido": "Kan",
        "correo": "preikur@riwi.net",
        "edad": 55,
        "pais": "Colombia",
        "ciudad": "Bello",
        "salario": 1500,
        "altura": 185,
        "peso": 200
      }
]);
// ------------------------------------------------------ ACTIVITY ------------------------------------------------------
// -------------------- UPDATE --------------------
// TRAER TODA LA INFO:
db.users.find();
// 1. Incrementar el salario de todos los usuarios en un 10%.
db.users.updateMany({},{$mul: {salario: 1.10}});
// 2. Cambiar la ciudad de residencia de los usuarios que actualmente viven en "New York" a "Los Ángeles".
db.users.updateMany({ciudad : "New York"},{$set: {ciudad: "Los Ángeles"}});
// 3. Agregar el correo electrónico "nuevo@riwi.com" al usuario con nombre "Juan" y apellido "Perez".
db.users.updateMany({nombre: "Juan", apellido: "Perez"}, {$set: {correo: "nuevo@riwi.com"}});
// 4. Actualizar la edad del usuario con correo electrónico "ejemplo@riwi.es" a 35 años.
db.users.updateMany({correo: "ejemplo@riwi.es"}, {$set: {edad: 35}});
// 5. Cambiar el país de residencia de los usuarios que son de "Mexico" a "Canada".
db.users.updateMany({pais: "Mexico"}, {$set: {pais: "Canada", ciudad: "Ottawa"}});
// 6. Aumentar la altura de todos los usuarios en 5 centímetros.
db.users.updateMany({}, {$inc: {altura: 5}});
// 7. Cambiar el apellido del usuario con correo electrónico "otro@riwi.net" a "González".
db.users.updateMany({correo: "otro@riwi.net"}, {$set: {apellido: "González"}});
// 8. Actualizar el peso del usuario con nombre "Maria" a 150 libras.
db.users.updateMany({nombre: "Maria"}, {$set: {peso: 150}});
// 9. Incrementar el salario de todos los usuarios que son de "Estados Unidos" en un 15%.
db.users.updateMany({pais: "Estados Unidos"}, {$mul: {salario: 1.15}});
// 10. Actualizar el correo electrónico del usuario con nombre "Pedro" a "nuevo_correo@riwi.co".
db.users.updateMany({nombre: "Pedro"}, {$set: {correo: "nuevo_correo@riwi.co"}});
// 11. Cambiar la edad de todos los usuarios menores de 30 años a 30 años.
db.users.updateMany({edad: {$lt: 30}}, {$set: {edad: 30}});
// 12. Incrementar el salario de los usuarios que tienen un salario inferior a 3000 dólares en un 20%.
db.users.updateMany({salario: {$lt: 3000}}, {$mul: {salario: 1.20}});
// 13. Actualizar la ciudad de residencia de todos los usuarios que actualmente viven en "Bogotá" a "Medellín".
db.users.updateMany({ciudad: "Bogotá"}, {$set: {ciudad: "Medellín"}});
// 14. Cambiar el país de residencia de los usuarios con un salario superior a 5000 dólares a "Australia".
db.users.updateMany({salario: {$gt: 5000}}, {$set: {pais: "Australia", ciudad: "Sydney"}});
// 15. Reducir la edad de todos los usuarios que tienen más de 50 años en 5 años.
db.users.updateMany({edad: {$gt: 50}}, {$inc: {edad: -5}});
// 16. Actualizar el peso de los usuarios que pesan más de 200 libras a 180 libras.
db.users.updateMany({peso: {$gte: 200}}, {$set: {peso: 180}});
// 17. Incrementar el salario de los usuarios que viven en "London" en un 25%.
db.users.updateMany({ciudad: "London"}, {$mul: {salario: 1.25}});
// 18. Cambiar el apellido de los usuarios con un salario superior a 4000 dólares a "Smith".
db.users.updateMany({salario: {$gt: 4000}}, {$set: {apellido: "Smith"}});
// 19. Actualizar el correo electrónico de todos los usuarios cuyo nombre empiece por "A" a "nuevo@riwi.es".
db.users.updateMany({nombre: {$regex: /^A/i}}, {$set: {correo: "nuevo@riwi.es"}});
// 20. Cambiar la ciudad de residencia de los usuarios con una altura inferior a 160 centímetros a "París".
db.users.updateMany({altura: {$lte: 160}}, {$set: {ciudad: "París"}});

// -------------------- DELETE --------------------
// 1. Eliminar todos los usuarios que tienen un salario menor que 3000 dólares.
db.users.deleteMany({salario: {$lt: 3000}});
// 2. Eliminar usuarios que tienen una edad menor que 25 años.
db.users.deleteMany({edad: {$lt: 25}});
// 3. Borrar todos los usuarios que viven en "París".
db.users.deleteMany({ciudad: "París"});
// 4. Eliminar usuarios que tienen un peso superior a 180 libras.
db.users.deleteMany({peso: {$gt: 180}});
// 5. Eliminar usuarios que tienen una altura inferior a 160 centímetros.
db.users.deleteMany({peso: {$lt: 160}});
// 6. Eliminar todos los usuarios que tienen el nombre "John" y el apellido "Doe".
db.users.deleteMany(
    {$and:
        [
            {nombre: "John"},
            {apellido: "Doe"}
        ]
    }
);
// 7. Borrar usuarios que tienen una dirección de correo electrónico específica, por ejemplo, "borrar@riwi.com".
db.users.deleteMany({correo: "borrar@riwi.com"});
// 8. Eliminar usuarios que no tienen una dirección de correo electrónico registrada.
db.users.deleteMany({correo: {$exists: false}});
// 9. Eliminar usuarios que viven en "Tokyo".
db.users.deleteMany({ciudad: "Tokyo"});
// 10. Borrar todos los usuarios que son menores de 18 años.
db.users.deleteMany({edad: {$lt: 18}});
// 11. Eliminar usuarios que tienen un salario igual a 0.
db.users.deleteMany({salario: 0 });
// 12. Borrar usuarios que viven en "New York" y tienen un salario superior a 5000 dólares.
db.users.deleteMany(
    {$and:
        [
            {ciudad: "New York"},
            {salario: {$gt: 5000}}
        ]
    }
);
// 13. Eliminar usuarios que tienen una dirección de correo electrónico que contiene la palabra "spam".
db.users.deleteMany({correo: {$regex: /spam/i}});
// 14. Borrar usuarios que viven en "Bello" y tienen más de 50 años.
db.users.deleteMany(
    {$and:
        [
            {ciudad: "Bello"},
            {edad: {$gt: 50}}
        ]
    }
);
// 15. Eliminar todos los usuarios que tienen el apellido "González".
db.users.deleteMany({apellido: "González"});
// 16. Borrar usuarios que tienen una edad superior a 70 años.
db.users.deleteMany({edad: {$gt: 70}});
// 17. Eliminar usuarios que tienen un país de residencia igual a "Canadá" y un salario inferior a 4000 dólares.
db.users.deleteMany(
    {$and:
        [
            {ciudad: "Canadá"},
            {salario: {$lt: 4000}}
        ]
    }
);
// 18. Borrar usuarios que tienen un salario entre 1000 y 2000 dólares.
db.users.deleteMany(
    {$and:
        [
            {salario: {$gt: 1000}},
            {salario: {$lt: 2000}}
        ]
    }
);
// 19. Eliminar usuarios que tienen una edad igual a 30 años.
db.users.deleteMany({edad: 30});
// 20. Borrar usuarios que tienen una altura superior a 190 centímetros.
db.users.deleteMany({altura: {$gt: 190}});