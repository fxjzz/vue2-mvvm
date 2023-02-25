function observe(data) {
  if (!data || typeof data !== 'object') return
  for (let key in data) {
    let val = data[key]
    Object.defineProperty(data, key, {
      configurable: true,
      enumerable: true,
      get: function () {
        return val
      },
      set: function (newVal) {
        val = newVal
      }
    })
    if (typeof val === 'object') {
      observe(val)
    }
  }
}

const data = {
  name: 'fxj',
  friends: [1, 2, 3, 4, 5, 6],
  age: 18
}

observe(data)

data.name = 'valley'
