// livingRoom 客厅
// masterRoom  主卧
// northRoom 北室

const bill = (roomOptions, amount) => {
  const each = (obj, cb) => {
    for (let attr in obj) {
      cb(obj[ attr ], attr)
    }
  }
  const mapKey = {
    'livingRoom': '客厅',
    'masterRoom': '主卧',
    'northRoom': '北室',
    'commonRoom': '公共'
  }
  let allFeeNum = 0
  let { commonRoom } = roomOptions
  let commonMoney

  each(roomOptions, (room) => allFeeNum += room.nowNum - room.prevNum)
  each(roomOptions, (room) => {
    room.feeNumDiff = room.nowNum - room.prevNum
    room.feeRate = room.feeNumDiff / allFeeNum
  })
  each(roomOptions, (room) => room.money = room.feeRate * amount)

  commonMoney = (commonRoom.feeRate * amount) / 4

  each(roomOptions, (room, key) => {
    if ( key === 'livingRoom' ) {
      room.lastMoney = room.money + commonMoney * 2
    } else if ( key === 'commonRoom' ) {
      room.lastMoney = room.money
    } else {
      room.lastMoney = room.money + commonMoney
    }
    roomOptions[ mapKey[ key ] ] = room
    delete roomOptions[ key ]
  })

  console.table(roomOptions)
}

bill({
  // 客厅
  livingRoom: {
    prevNum: '2978',
    nowNum: '3031'
  },
  // 主卧
  masterRoom: {
    prevNum: '2659',
    nowNum: '2704'
  },
  // 北室
  northRoom: {
    prevNum: '2080',
    nowNum: '2102'
  },
  // 公共
  commonRoom: {
    prevNum: '2044',
    nowNum: '2150'
  }
}, 60.28)