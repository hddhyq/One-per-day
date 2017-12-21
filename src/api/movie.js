import wepy from 'wepy'

const comParams = {
  apikey: '0b2bdeda43b5688921839c8ecb20399b',
  city: '北京',
  client: '',
  udid: ''
}

export function getInMovie(Start, Count) {
  const url = 'https://api.douban.com/v2/movie/in_theaters'
  const data = Object.assign({}, comParams, {
    start: Start,
    count: Count
  })

  return getData(url, data)
}

async function getData(url, data) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

  let res = await wepy.request({
    url: url,
    header: {'Content-Type': 'application/text'}
  })

  return res
}

function param(data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += `&${k}=${encodeURIComponent(value)}`
  }
  return url ? url.substring(1) : ''
}
