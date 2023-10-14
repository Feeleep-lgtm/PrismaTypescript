
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async() => {
    // const newUser = await prisma.user.create({

    // })
    console.log("Seeding");
}

main()
.catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect())

  export {prisma}