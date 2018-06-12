const {delay, clearTime} = require('../config')
let friendList = []
exports.message = m => {
  // 暂时不监听 room
  if (m.room()) return
  // console.log(JSON.stringify(m))
  console.log(m.from().self())
  // console.log(m.content())

  // 如果是自己发的 
  if (m.from().self()) return 

  if (friendList.find(name => name === m.from().name())) { // 判断是不是同一个人发的 // 是的话就直接回复，不是就等delay
    m.from().say(`微信机器人：如果您看到这条消息，表示 ${m.to().name()} 暂时无法回复您的消息！`)
    setTimeout(() => {
      friendList = friendList.filter(name => name !== m.from().name())
    },clearTime)
  } else {
    setTimeout(() => {
      friendList.push(m.from().name())
      m.from().say(`微信机器人：如果您看到这条消息，表示 ${m.to().name()} 暂时无法回复您的消息！`)
    },delay)
  }
}