// import { Value } from "./Models/Value.js"
import { Snack } from "./Models/Snack.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { generateId } from "./Utils/generateId.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  // values = loadState('values', [Value])

  /**@type{import('./Models/Snack').Snack[]} */
  snack =[
    new Snack({
      name:'Brussels Sprout', 
      price: 12.95, 
      imgUrl:'http://4.bp.blogspot.com/-wjn1lEeVPxM/ViK9na1pMsI/AAAAAAAAmBo/bp7qXyHB4dk/s1600/Brussels%2BSprouts%2B1433.jpg', 
      id:generateId()
    }),
    new Snack({
      name:"Chik'n Kebabs", 
      price: 17.50, 
      imgUrl:'https://www.nzkebabsmountst.co.nz/thumbnails/food-image/square/1024/chi/chicken-kebab-3.jpg?v=1612327942', 
      id:generateId()
    }),
  ]



  
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
