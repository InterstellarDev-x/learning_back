import  { prisma  } from "@repo/db/client"





export default async function Home() {


  const response  = await prisma.user.findMany();
  



  return (
    <div>
      {JSON.stringify(response)}
    </div>
  );
}
