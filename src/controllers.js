const { Prisma } = require("@prisma/client");
const prisma = require("./utils/prisma");

const getSeatsByScreenId = async (req, res) => {
  const { id } = req.params;

  try {
    // const seats = await prisma.seat.findMany({
    //   // where: {
    //   //   screenId: Number(id),
    //   // },
    // });
    const seats = await prisma.seat.findMany();

    res.json({ seats });
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = { getSeatsByScreenId };
