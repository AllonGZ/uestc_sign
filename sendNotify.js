const { PUSH_PLUS_TOKEN, PUSH_PLUS_USER } = require('./cookie.js')
const request = require('./axios.js');

function pushPlusNotify(title, content) {
  console.log(PUSH_PLUS_TOKEN)
  return new Promise(async resolve => {
    if (PUSH_PLUS_TOKEN) {
      content = content.replace(/[\n\r]/g, '<br>');
      const params = {
        sendParams: {
          token: `${PUSH_PLUS_TOKEN}`,
          title: `${title}`,
          content: `${content}`,
          topic: `${PUSH_PLUS_USER}`
        }
      }
      const res = await request(`http://www.pushplus.plus/send`, 'post', params)
      console.log('==============推送微信成功=============')
    }
  })
}

module.exports = { pushPlusNotify }