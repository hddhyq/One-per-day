export const filterContent = (content) => content.replace(/<p>/g, '').replace(/<\/p>/g, '\n\n')

export const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export function currentMonth() {
  const d = new Date()
  const year = d.getFullYear()
  const month = d.getMonth() + 1
  const months = year + '-' + month
  return months
}
