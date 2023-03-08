export const qoutes = [
    {
        id:1,
        date: '2023-03-01',
        total: 50,
        userId: {
            id: 1,
            username:'Victor',
            correo: 'victor@example.com',
        },
        costumerId:{
            id: 1,
            nombre:'Juan',
            correo: 'juan.perez@example.com',
            direccion: 'Av. Siempreviva 123',
            telefono: '555-1234'
        },
        productos:[
            {nombre:'Camiseta', precio: 16, detalle:'Camiseta de algodón', cantidad: 2},
            {nombre:'Pantalón', precio: 30, detalle:'Pantalón de mezclilla', cantidad: 3},
            {nombre:'Chaqueta', precio: 90, detalle:'Chaqueta de cuero', cantidad: 1},
        ]
    },
    {
        id:2,
        date: '2023-03-03',
        total: 80,
        userId: {
            id: 2,
            username:'janedoe',
            correo: 'admin@admin.com'
        },
        costumerId:{
            id: 2,
            nombre:'María',
            correo: 'maria.garcia@example.com',
            direccion: 'Calle Principal 456',
            telefono: '555-5678'
        },
        productos:[
            {nombre:'Camiseta', precio: 16, detalle:'Camiseta de algodón', cantidad: 3},
            {nombre:'Gorra', precio: 10, detalle:'Gorra de béisbol', cantidad: 1},
            {nombre:'Chaqueta', precio: 5, detalle:'Chaqueta de cuero', cantidad: 2},
        ]
    }
]