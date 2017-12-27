# One-per-day
微信小程序，使用了[wepy](https://tencent.github.io/wepy/) 框架进行开发。

## 项目结构
```sh
.
├── api     // 程序api接口
│   ├── article.js
│   ├── movie.js
│   └── one.js
├── app.wpy　// 小程序总页面配置入口
├── common　　// 定义的接收到的json类型整理好的类和一些工具
│   ├── movieDetail.js
│   ├── movieList.js
│   ├── one.js
│   └── utils.js　
├── components // 组件
│   ├── ratingSmall.wpy
│   └── rating.wpy
├── img　// 图片和图标
│   ├── date
│   ├── loading
│   ├── oneGrap
│   ├── rating
│   └── tabIcon
├── index.template.html　// 网页版html文件　未定义
└── pages　// 页面
    ├── movieDetail.wpy　// 电影细节图片
    ├── movie.wpy　// 电影列表页面
    ├── oneEssay.wpy　 // 每日一文页面
    ├── oneGrap.wpy　　// one图文detail
    └── oneList.wpy  // 首页图片

```

## 项目运行图
### 首页
![](https://github.com/hddhyq/One-per-day/raw/master/screenshot/oneList.gif)

### one图文详情
![](https://github.com/hddhyq/One-per-day/raw/master/screenshot/oneGrap.gif)

### 每日一问
![](https://github.com/hddhyq/One-per-day/raw/master/screenshot/oneEassy.gif)

### Movie 及　详情页
![](https://github.com/hddhyq/One-per-day/raw/master/screenshot/oneMovie.gif)


学习过程中的难点和怪点见blog


最后感谢[https://github.com/jokermonn/-Api](https://github.com/jokermonn/-Api)提供者