const User = require("./user.model");

(async () => {
  //synchronize with database and creates table if not exists
  await User.sync({ force: true });

  // create instance of User model and save it to database
  const rafael = User.build({
    firstName: "Rafael",
    lastName: "Farias",
  });

  await rafael.save();
  console.log(rafael.toJSON());

  //create User on database and return an instance of just created User
  const conrado = await User.create({
    firstName: "Rafael",
    lastName: "Conrado",
  });

  console.log(conrado.toJSON());

  const allUsers = await User.findAll();
  console.log(allUsers.map((u) => `${u.firstName} ${u.lastName}`));

  const conradoUsers = await User.findAll({
    where: {
      lastName: "Conrado",
    },
  });
  console.log(conradoUsers.map((u) => `${u.firstName} ${u.lastName}`));

  const oneConrado = await User.findOne({
    where: {
      lastName: "Conrado",
    },
  });
  console.log(`${oneConrado.firstName} ${oneConrado.lastName}`);
})();
