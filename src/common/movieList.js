export default class Movie {
  constructor({id, title, img, rating, casts, genres, directors}) {
    this.id = id
    this.title = title
    this.img = img
    this.rating = rating
    this.casts = casts
    this.genres = genres
    this.directors = directors
  }
}

export function createMovie(movieData) {
  return new Movie({
    id: movieData.id,
    title: movieData.title,
    img: movieData.images.small,
    rating: movieData.rating.average,
    casts: filterName(movieData.casts),
    genres: filterGenres(movieData.genres),
    directors: filterName(movieData.directors)
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
