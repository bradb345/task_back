import app from './app.js'

async function startApp(){
  try {
    app.listen(4000, ()=> console.log('listening'))
  } catch (error) {
    console.log('something went wrong')
    console.log(error)
  }
}

startApp()