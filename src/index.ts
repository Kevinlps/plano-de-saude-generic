import { createTables } from './config/db'
import { GenericDAO } from './models/dao/GenericDAO'

import { Beneficiario } from './models/entities/Beneficiario'
import { Consulta } from './models/entities/Consulta'
import { Exame } from './models/entities/Exame'


const run = async () => {
  await createTables()

  const newBeneficiario = new Beneficiario ('Bob','Rua:casas n:2','999999999',new Date(21/2/3))
  const dao1 = new GenericDAO(Beneficiario)
  const savedUser = await dao1.save(newBeneficiario)
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
