import wepy from 'wepy'

const hostArticle = 'https://interface.meiriyiwen.com/article'

const wepyRequset = async (params = {}, url) => {
  wepy.showToast({
    title: '努力加载中',
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

// const wxRequest = async (url) => {
//   let res = await wepy.request({
//     url: url,
//     header: {'Content-Type': 'application/json'}
//   })
//   return res
// }

// index

// article
export const getArticleToday = (params) => wepyRequset(params, hostArticle + '/today?dev=1')
export const getArticleRandom = (params) => wepyRequset(params, hostArticle + '/random/?dev=1')
// movie
