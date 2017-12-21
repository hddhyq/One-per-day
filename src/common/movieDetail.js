class DetailHeader {
  constructor({count, title, country, duration, summary, img, rating, casts, genres, directors,pubdate}) {
    this.count = count
    this.title = title
    this.img = img
    this.rating = rating
    this.casts = casts
    this.genres = genres
    this.directors = directors
    this.pubdate = pubdate
    this.country = country
    this.duration = duration
    this.summary = summary
  }
}
export default function createHeader(movieData) {
  return new DetailHeader({
    count: movieData.ratings_count,
    title: movieData.title,
    img: movieData.images.small,
    rating: movieData.rating.average,
    casts: filterName(movieData.casts),
    genres: filterGenres(movieData.genres),
    directors: filterDirector(movieData.directors),
    pubdate: movieData.pubdate,
    country: movieData.countries[0],
    duration: movieData.durations[0],
    summary: movieData.summary
  })
}

function filterName(names) {
  let ret = []
  if (!names) {
    return ''
  }
  names.forEach((i) => {
    ret.push(i.name)
  })

  return ret.join('/')
}

function filterDirector(names) {
  let ret = []
  if (!names) {
    return ''
  }
  names.forEach((i) => {
    ret.push(i.name + '(导演)')
  })

  return ret.join('/')
}

function filterGenres(genres) {
  let ret = []
  if (!genres) {
    return ''
  }
  genres.forEach((i) => {
    ret.push(i)
  })

  return ret.join('/')
}
