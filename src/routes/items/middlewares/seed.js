const Item = require('../model')
const seedItemsData = require('../seed.json')

module.exports = async (req, res) => {
  const foundItem = await Item.find()

  // Don't continue if the items already exists
  if (foundItem.length > 0) {
    res.status(400).send({
      message: 'Seed initial items failed because already exists'
    })
  } else {
    try {
      // Use forEach, not insert, because have to update imageUrl
      await seedItemsData.forEach(async (item) => {
        await Item.create({
          ...item,
          imageUrl: `${process.env.EXPRESS_APP_API_URL}/${item.imageUrl}`
        })
      })

      res.status(200).send({
        message: 'Seed initial items completed'
      })
    } catch (error) {
      res.status(500).send({
        message: 'Seed initial items failed because incorrect data'
      })
    }
  }
}
