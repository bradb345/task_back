

async function input(req, res, next) {
  try {
    const num = req.body.userInput
    const word = num
    res.status(200).json(word)
  } catch (error) {
    next(error)
  }
}

export default { input } 