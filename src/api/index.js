import wepy from 'wepy'

const hostOne = 'http://v3.wufazhuce.com:8000'
const hostArticle = 'https://interface.meiriyiwen.com/article'

const wepyRequset = async (params = {}, url) => {
  wepy.showToast({
    title: '加载中',
    icon: 'loading'
  })
  let res = await wepy.request({
    url: url,
    method: params.method || 'GET',
    data: params.data || {},
    header: {'Content-Type': 'application/json'}
  })
  wepy.hideToast()
  return res
}

const wxRequest = async (url) => {
  let res = await wepy.request({
    url: url,
    header: {'Content-Type': 'application/json'}
  })
  return res
}

// index

// article
export const getArticleToday = () => wxRequest(hostArticle + '/today?dev=1')
export const getArticleRandom = () => wxRequest(hostArticle + '/random/?dev=1')
// movie
