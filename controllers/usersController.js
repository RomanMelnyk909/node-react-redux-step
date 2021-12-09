

let usersDB = [
  {
    id: 1,
    name: "Bill",
    surrName: "Jonson",
    role: "administrator",
  },
  {
    id: 2,
    name: "Chuck",
    surrName: "Norris",
    role: "administrator",
  },
  {
    id: 3,
    name: "Brus",
    surrName: "Willis",
    role: "administrator",
  },
];

exports.getUsers = async (req, res, next) => {
    try {
        res.status(200).json(usersDB)
    }
    catch(error) {
        res.status(400).json({message: "Bad request"})
    }
};
