function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  var uppercase = string
  if (uppercase.toUpperCase(string) === uppercase) {
    return "I can't hear you"
  }
  var lowercase = string
  else if (lowercase.toLowerCase(string) === lowercase) {
    return "YES INDEED"
  }
  else {
    return "I love you, too"
  }
}
