// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = (req, res) => {
  res.status(200).json({
    name: "Mr. Meeseeks",
    image: "https://rickandmortyapi.com/api/character/avatar/242.jpeg",
  });
};

export default handler;
