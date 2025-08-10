import express, { Request, Response } from "express"
const app = express();
import { prisma } from "@repo/db/client";




app.use(express.json());

app.get("/me", async (req: Request, res: Response): Promise<void> => {




    res.status(200).json({
        msg: "happy birthday"
    })
})

app.post("/signup", async (req: Request, res: Response) => {
    const { username, password }: { username: string, password: string } = req?.body

    try {
        const User = await prisma.user.create({
            data: {
                username: username,
                password: password
            }
        })

        res.status(200).json({
            message: "User succesfully created",
            id  :  User.id
        })
    } catch (e: any) {



        res.status(400).json({
            msg: "USER ALREADY REGISTERED"
        })



    }

    res.status(500).json({
        msg: "Internal Server error"
    })

    return

}

   



)

app.listen(3001, () => {
    console.log("App is listening on port 3000")
})