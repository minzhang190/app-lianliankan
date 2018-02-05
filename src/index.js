import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))

Array.prototype.shuffle = function() {
  const copy = this.slice()
  const draw = (ret = []) => {
    if (copy.length === 0) return ret
    const rand = Math.floor(Math.random() * copy.length)
    ret.push(copy[rand])
    copy.splice(rand, 1)
    return draw(ret)
  }
  return draw()
}

function inflateMatrix(w, h, range) {
  if (w * h % 2!== 0) throw Error('Array size must be an even number')
  const a = Array(w * h)
  for(let i=0; i<a.length; i+=2) {
    const rand = Math.ceil(Math.random() * range)
    a[i] = a[i+1] = rand
  }
  return a.shuffle()
}

console.log(inflateMatrix(2, 2, 2))

// function range(a,b,step){
//   if ((b-a)%step==0){
//   const arr1 = [...Array((b-a)/step)].map(function f(index){
//     f(0)=a;
//     return f(index)=f(index-1)+step
//   })
//   const arr = arr1.concat[b]
//   return arr
//  }
// }

// function range(a, b, step = 1) {
//   if (a === b) return [a, b]
//   const stepCount = Math.ceil(Math.abs(a - b) / step) - 1
//   const direction = a - b > 0 ? -1 : 1
//   const fill = [...Array(stepCount)].map(
//     (v, index) => a + direction * step * (index + 1)
//   )
//   return [a, ...fill, b]
// }