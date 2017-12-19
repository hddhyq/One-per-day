export const filterContent = (content) => content.replace(/<p>/g, '').replace(/<\/p>/g, '\n\n')
