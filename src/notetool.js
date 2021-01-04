// import various functions from drive_code
import { performUpload, performGet } from "./drive_code.js"
import { pdfOb } from "./pdf_loader.js"
import {imageOb} from "./img_loader.js"

console.log("1/4 --6")
let output = []
let run = () => {
  let expbtn = new ExportBtn()
  let upload = new LoadBtn()


}

let TextEle = ()=> ({
  ele: document.createElement("textarea"),
  init() {
    this.ele.addEventListener("keydown",this.keycheck.bind(this))
    document.body.append(this.ele)
  },
  keycheck(e) {
    if (e.key == "Control") {
      this.ele.value.replace(/--date--/,`${new Date()}`)
    }
  }
})

class JSONReader {
  constructor() {
    let ele = TextEle()
    ele.init()
    // look for the active file
    performGet().then(res => res.json()).then(rawText => {
      let jsonArray = JSON.parse(rawText)
      jsonArray.map(j => {
      ele.ele.value += j.value
      })
    })
  }
}

class LoadBtn {
  constructor() {
    this.btn = document.createElement("button")
    document.body.prepend(this.btn)
    this.btn.addEventListener("click", () => {
      this.load()
    })
    this.btn.id = "reload"
    this.btn.innerHTML = "Load prev data"
  }
  load() {
    // call the json loader and the canvasloader
    let jl = new JSONReader()
  }
}
class ExportBtn {
  constructor() {
    this.btn = document.createElement("button")
    this.btn.innerHTML = "Download"
    this.btn.id = "download"
    this.btn.addEventListener("click", () => {
      let info = this.retrieveInfo()
      // create a, and use for download
      // use performUpload
      performUpload(JSON.stringify(info))
    })
    document.body.prepend(this.btn)
    // get a list of the textareas on the screen
  }
  retrieveInfo() {
    let texts = Array(...document.querySelectorAll("textarea"))
    // for each, get the x,y and value
    let info = texts.map(ta => {
      return { value: ta.value }
    })
    return info
  }
}


export { run }
//
