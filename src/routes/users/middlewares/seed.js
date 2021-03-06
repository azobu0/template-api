const User = require('../model')
const seedUsersData = require('../seed.json')
const bcrypt = require('../../../utils/bcrypt')

module.exports = async (req, res) => {
  const foundUsers = await User.find()

  // Don't continue if the users already exists
  if (foundUsers.length > 0) {
    res.status(500).send({
      message: 'Seed initial users failed because they are already registered'
    })
  } else {
    // Use forEach, not insert, because have to encrypt password
    await seedUsersData.forEach(async (user) => {
      const { salt, hash } = await bcrypt.hashPassword(user.password)

      await User.create({
        ...user,
        avatarUrl: `${process.env.EXPRESS_APP_API_URL}/${user.avatarUrl}`,
        salt: salt,
        hash: hash
      })
    })

    res.status(200).send({
      message: 'Seed initial users completed'
    })
  }
}
