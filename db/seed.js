module.exports = (db) => {
  db.User.create({
    firstName: 'Adam',
    lastName: 'Gates',
    email: 'adam@gates.com',
    password: process.env.ADMIN_USER_PWD,
    isAdmin: true
  }).then(() => {
    db.User.create({
      firstName: 'Uma',
      lastName: 'Pearson',
      email: 'uma@pearson.com',
      password: process.env.USER_PWD,
      isAdmin: false
    }).then(() => {
      db.Example.create({
        text: 'Sample item',
        description: 'Adam can\'t see this',
        UserId: 2
      }).then(() => {
        db.restaurant.create({
          restaurant_name: 'example',
          address: 'sample location',
          hours: '1030',
          price_level: 2,
          UserId: 2
        }).then(() => {
          db.trails.create({
            id: 1,
            trail_name: 'sample trail',
            address: '1234 pretty trail lane',
            UserId: 2
          });
        });
      });
    });
  });
};
