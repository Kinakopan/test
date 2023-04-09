import { prisma } from "@/server/db/client";

export default async function handler(req, res) {
  const { thoughtId } = req.query;

  switch (req.method) {
    case "GET":
      // Get a single thought by id
      const thought = await prisma.thought.findUnique({
        where: { id: Number(thoughtId) },
      });
      if (!thought) {
        res.status(404).json({ message: "Thought not found" });
        break;
      }
      res.status(200).json(thought);
      break;

    case "PUT":
      // Update a thought by id
      const { title, newskeyword, startDate, endDate } = req.body;
      if (!title) {
        res.status(400).json({ message: "Missing thought Title" });
        break;
      }
      const updatedThought = await prisma.thought.update({
        where: { id: Number(thoughtId) },
        data: {
          title,
          newskeyword,
          startDate,
          endDate,
        },
      });
      if (!updatedThought) {
        res.status(404).json({ message: "Thought not found" });
        break;
      }
      res.status(200).json(updatedThought);
      break;

    case "DELETE":
      // Delete a thought by id
      await prisma.thought.delete({ where: { id: Number(thoughtId) } });
      res.status(204).end();
      break;

    default:
      res.status(405).end();
  }
}
