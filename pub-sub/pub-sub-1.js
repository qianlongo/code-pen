// 发布订阅模式
// 定义一个对象，内部包含三个方法，发布、订阅和退订
let pubsub = {}

;((q) => {
  let topics = {} // 回调函数存放
  let subUid = -1
  // 订阅方法
  q.subscribe = (topic, func) => {
    if (!topics[topic]) {
      topics[topic] = []
    }
    let token = (++subUid).toString()
    topics[topic].push({
      func,
      token
    })
    return token
  }
  // 发布方法
  q.publish = (topic, args) => {
    if (!topics[topic]) {
      return false
    }
    setTimeout(() => {
      topics[topic].forEach((v) => {
        v.func(topic, args)
      })
    }, 0)
  }
  // 退订方法
  q.unsubscribe = (token) => {
    for (let key in topics) {
      if (Object.hasOwnProperty.call(topics, key)) {
        let subscribes = topics[key]
        subscribes.forEach((v, i) => {
          v.token === token ? subscribes.splice(i, 1) : ''
        })
      }
    }
  }
})(pubsub)

// //来，订阅一个
// pubsub.subscribe('example1', function (topics, data) {
//   console.log(topics + ": " + data)
// });

// //发布通知
// pubsub.publish('example1', 'hello world!', 'pubsub')
// pubsub.publish('example1', ['test', 'a', 'b', 'c'])
// pubsub.publish('example1', [{ 'color': 'blue' }, { 'text': 'hello'}])

//将订阅赋值给一个变量，以便退订
var testSubscription = pubsub.subscribe('example1', function (topics, data) {
    console.log(topics + ": " + data);
});

//发布通知
pubsub.publish('example1', 'hello world!')
pubsub.publish('example1', ['test', 'a', 'b', 'c'])
pubsub.publish('example1', [{ 'color': 'blue' }, { 'text': 'hello'}])

//退订
setTimeout(function () {
  pubsub.unsubscribe(testSubscription)
}, 0);

//再发布一次，验证一下是否还能够输出信息
pubsub.publish('example1', 'hello again! (this will fail)');