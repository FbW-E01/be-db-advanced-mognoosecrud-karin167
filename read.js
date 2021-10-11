import {
    connection,
    disconnect
} from './connection.js'

import {
    KarinData
} from './user.js'


await connection()

const result = await KarinData.find({})
console.log(result);

await disconnect()