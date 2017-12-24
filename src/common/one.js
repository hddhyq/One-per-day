class One {
  constructor({imgTime, imgUrl, imgAuthor, content, textAuthor, likeNum}) {
    this.imgTime = imgTime
    this.imgUrl = imgUrl
    this.imgAuthor = imgAuthor
    this.content = content
    this.textAuthor = textAuthor
    this.likeNum = likeNum
  }
}

export default function createOneList(ListData) {
  return new One({
    imgTime: filterTime(ListData.maketime),
    imgUrl: ListData.hp_img_url,
    imgAuthor: filterAuthor(ListData.hp_author),
    content: ListData.hp_content,
    textAuthor: ListData.text_authors,
    likeNum: ListData.praisenum
  })
}

function filterTime(time) {
  return time.split(' ')[0]
}

function filterAuthor(author) {
  return author.split(' ')[0].replace(/＆/g, ' | ')
}
