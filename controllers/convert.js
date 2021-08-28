

async function input(req, res, next) {
  try {
    const num = req.body.userInput

    const keypad = {
      0: [''],
      1: [''],
      2: ['a', 'b', 'c'],
      3: ['d', 'e', 'f'],
      4: ['g', 'h', 'i'],
      5: ['j', 'k', 'l'],
      6: ['m', 'n', 'o'],
      7: ['p', 'q', 'r', 's'],
      8: ['t', 'u', 'v'],
      9: ['w', 'x', 'y', 'z'],
    }

    const words = (digits) => {
      // return if no digits are present
      if (!digits.length) {
        return []
      }

      // array for previous digit
      let lastDigits = ['']
      
      //  loop throught the digits
      for (let i = 0; i < digits.length; i++) {
        // array to store current digit possibilities
        const newDigits = []

        // loop through last set of possibilities
        for (let x = 0; x < lastDigits.length; x++) {

          // loop through letters for number
          for (const letter of keypad[digits[i]]) {
            //  add word to array
            newDigits.push(lastDigits[x].concat(letter))
          }
        }


        if (i === digits.length - 1) {
          
          return newDigits
        }
        lastDigits = newDigits
      }
    }

    const output = words(num)



    res.status(200).json(output)
  } catch (error) {
    next(error)
  }
}

export default { input }