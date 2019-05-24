
export const listFilterByString = (list, query, property) => {
  return list.filter(item => item[property].includes(query))
}
