import {
    connection,
    disconnect
} from './connection.js'

import {
    KarinData
} from './user.js'


await connection()

const getData = await KarinData.findOneAndUpdate({
    _id: "6164293c45b5e48200532e9c"
}, {
    email: "yahoo@yahoo.com"
})

await getData.save()


await disconnect()