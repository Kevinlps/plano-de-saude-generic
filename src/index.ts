import { createTables } from './config/db'
import { GenericDAO } from './models/dao/GenericDAO'

import { beneficiario } from './models/entities/Beneficiario'
import { consulta } from './models/entities/Consulta'
import { exame } from './models/entities/Exame'


const run = async () => {
  await createTables()

  const newUser = new beneficiario ('Bob','Rua:casas n:2','999999999',new Date(2000,3,2),'email@email')
  const dao1 = new GenericDAO(beneficiario)
  const savedUser = await dao1.save(newUser)
  console.log(savedUser)

 // const newPost = new Post(
  //  'Tutorial TypeScript',
 //   'Este é o tutorial de TypeScript',
 //   new Date()
 // )
 // const dao2 = new GenericDAO(Post)
 // const savedPost = await dao2.save(newPost)
 // console.log(savedPost)
}

run()
