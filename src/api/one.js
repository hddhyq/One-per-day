import wepy from 'wepy'

const baseUrl = 'http://v3.wufazhuce.com:8000/api/hp/bymonth/'

export async function getMonth(month) {
  const url = baseUrl + month
  let res = await wepy.request(url)
  return res
}
