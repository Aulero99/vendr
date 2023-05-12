import { generateId } from "../Utils/generateId.js"

export class Snack {


    constructor(data) {
    this.name = data.name
    this.price = data.price || 10.99
    this.imgUrl = data.imgUrl
    this.id = data.id || generateId()
     }

     get SnackTemplate() {
        return /*html*/`
        <div class="col-4" id="${this.id}">
          <div class="snack-card">
            <div class="snack-image">
              <img src="${this.imgUrl}" alt="snack-image">
            </div>
            <div class="snack-info d-flex flex-row justify-content-between">
              <div class="info">
                <h5>
                  ${this.name}
                </h5>
                <p>
                  ${this.price}
                </p>
              </div>
              <div class="buy-btn">
                buy
              </div>
            </div>
          </div>
        </div>
        `
     }
}
