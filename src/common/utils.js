export const filterContent = (content) => content.replace(/<p>/g, '').replace(/<\/p>/g, '\n\n')

export const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))
