class Subject {
  constructor() {
    this.arr = []
  }
  addObserver(user) {
    this.arr.push(user)
  }
  removeObserver(user) {
    let index = this.arr.indexOf(user)
    if (index > -1) {
      this.arr.splice(index, 1)
    }
  }
  notify() {
    this.arr.forEach((a) => {
      a.update()
    })
  }
}
class Observer {
  constructor(name) {
    this.name = name
  }
  update() {

  }
  subscribeTo(subject) {
    subject.addObserver(this)
  }
}

let subject = new Subject()
let observer = new Observer()
observer.update = function () {
  console.log('observer update')
}
observer.subscribeTo(subject)  //观察者订阅主题

subject.notify()