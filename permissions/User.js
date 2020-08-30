module.exports = {
    queries: {
        middleware: ['restrict.shop'],
            permission: {
            role: 'super-admin',
            can: 'read orders',
            any: ['read orders']
        }
    },
    columns: [
        {
            key: 'description',
            can: 'read orders',
            any: ['read orders'],
            middleware: ['jwt.auth']
        },
        {
            key: 'price',
            role: 'super-admin',
            any: ['read orders']
        }
    ]
}
