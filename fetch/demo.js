fetch('http://3157-axsqb-sl-creditcard.fin.test.sankuai.com/api/apply/apply/api/getSafetyTips?cardMetaId=4&crossMarketingTarget=0')
      .then((res) => {
        return res.json()
      }).then((res) => {
        const { bankLogoPicUrl } = res.data
        const img = document.createElement('img')

        img.src = bankLogoPicUrl
        document.body.appendChild(img)
        console.log('-----fecth')
      }).catch(() => {
        console.log('fetch error')
      })


var i = 0

while (i < 30) {
  console.log(i)
  i++
}