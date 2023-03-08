export const qoutes = [
    {
        id:1,
        date: '2023-03-01',
        total: 50,
        userId: {
            username:'Victor',
            correo: 'victor@example.com'
        },
        costumerId:{
            nombre:'Juan',
            correo: 'juan.perez@example.com'
        },
        productos:[
            {nombre:'producto1', precio: 50, detalle:'detalle del producto 1', cantidad: 2},
            {nombre:'producto2', precio: 60, detalle:'detalle del producto 2', cantidad: 3},
            {nombre:'producto3', precio: 80, detalle:'detalle del producto 3', cantidad: 1},
        ]
    },
    {
        id:2,
        date: '2023-03-02',
        total: 80,
        userId: {
            username:'janedoe',
            correo: 'admin@admin.com'
        },
        costumerId:{
            nombre:'María',
            correo: 'maria.garcia@example.com'
        },
        productos:[
            {nombre:'producto1', precio: 50, detalle:'detalle del producto 1', cantidad: 3},
            {nombre:'producto5', precio: 30, detalle:'detalle del producto 5', cantidad: 1},
            {nombre:'producto3', precio: 80, detalle:'detalle del producto 3', cantidad: 2},
        ]
    }
]