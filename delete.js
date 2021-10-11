import {
    connection,
    disconnect
} from './connection.js'

import {
    KarinData
} from './user.js'


await connection()

const getData = await KarinData.findOneAndDelete({
    _id: "616429ed16ae08f83800151a"
})


await getData.save()


await disconnect()