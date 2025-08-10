import { WebSocketServer } from 'ws';
import {prisma} from "@repo/db/client"



const wss = new WebSocketServer({ port: 8080 });

wss.on('connection',  async function connection(ws , request) {



  ws.on('error', console.error);

  const res = await prisma.user.create({
    data : {
      username : Math.random().toString(),
      password : Math.random().toString()
    }
  })

  

  



  ws.on('message', function message(data) {
    console.log('received:', data.toString());
  });

  

  ws.send('something');
});