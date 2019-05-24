
export const listFilter = (list, query, property) => {
  return list.filter(item => item[property].includes(query))
}
