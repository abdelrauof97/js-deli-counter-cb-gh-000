
function takeANumber(arr, name) {
  arr.push(name)
  return `Welcome, ${name}. You are number ${arr.indexOf(name) + 1} in line.`
}

function nowServing(arr) {
  if (arr.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return `Currently serving ${arr.shift()}.`
  }
}

function currentLine(arr) {
  if (arr.length === 0) {
    return "The line is currently empty."
  }
  else {
    var new_array = []
    for (var i = 0; i < arr.length; i++) {
      new_array.push(`${i + 1}. ${arr[i]}`)
    }
    return `The line is currently: ${new_array.join(`, `)}`
  }
}
