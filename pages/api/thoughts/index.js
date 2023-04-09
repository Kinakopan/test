import { prisma } from "@/server/db/client";
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      const thoughts = await prisma.Thought.findMany();
      res.status(200).json(thoughts);
      break;
    case "POST":

    const session = await getServerSession(req, res, authOptions)
    if (!session) {
      res.status(401).json({ error: 'Unauthorized' })
      return
    }

    const prismaUser = await prisma.user.findUnique({
      where: { email: session.user.email },
    })

    if (!prismaUser) {
      res.status(401).json({ error: 'Unauthorized' })
      return
    }

    const userId = prismaUser.id;

    const { title, newskeyword, content } = req.body;
    if (!title || !newskeyword || !content) {
        res.status(400).json({ message: "Missing required fields" });
        break;
    }
    const newThought = await prisma.Thought.create({
        data: { title, newskeyword, content, userId },
    });
    res.status(201).json(newThought);
    break;
    default:
      res.status(405).end();
  }
}
