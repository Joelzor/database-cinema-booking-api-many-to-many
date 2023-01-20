const { Prisma } = require("@prisma/client");
const prisma = require("./utils/prisma");

const getSeatsByScreenId = async (req, res) => {
  const { id } = req.params;

  try {
    const seats = await prisma.seat.findMany({
      where: {
        screenId: Number(id),
      },
    });

    res.json({ seats });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const createTicket = async (req, res) => {
  const { screeningId, customerId } = req.body;
  try {
    const ticket = await prisma.ticket.create({
      data: {
        screening: {
          connect: {
            id: screeningId,
          },
        },
        customer: {
          connect: {
            id: customerId,
          },
        },
        // seats: {
        //   connect: [
        //     {
        //       id: 1,
        //     },
        //     {
        //       id: 2,
        //     },
        //     {
        //       id: 3,
        //     },
        //   ],
        // },
        seats: {
          create: [
            {
              seat: {
                connect: {
                  id: 1,
                },
              },
            },
            {
              seat: {
                connect: {
                  id: 2,
                },
              },
            },
            {
              seat: {
                connect: {
                  id: 3,
                },
              },
            },
          ],
        },
      },
      include: {
        screening: true,
        customer: true,
        seats: true,
      },
    });

    res.status(201).json({ ticket });
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = { getSeatsByScreenId, createTicket };
