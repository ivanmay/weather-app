function getTempCallBack (location, callBack) {
  callBack(undefined, 78)
  callBack('City not found')
}

getTempCallBack ('Cape Town', function (err, temp) {
  if (err) {
    console.log ('error', err)
  } else {
    console.log ('success', temp)
  }
})

function getTempPromise (location) {
  return new Promise (function (resolve, reject) {
    resolve(79)
    reject('City not Found')
  })
}

getTempPromise ('Cape Town').then(function (temp) {
  console.log ('promise success', temp)
}, function(err) {
  console.log ('promise error', err)
})


function promise(a, b) {
  return new Promise (function (resolve, reject) {
    if (isNaN(a) || isNaN(b)) {
      reject ('a or b is not a number')
    } else {
      resolve(a+b)
    }
  })
}

promise(4,'b').then(function (suc){
  console.log ('Success', suc)
}, function (err) {
  console.log ('Error', err)
})
