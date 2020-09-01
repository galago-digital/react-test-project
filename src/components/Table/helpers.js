/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
function toUnixTime(date) {
  const arr = date.split('.')

  return arr[2] + arr[1] / 12 + arr[0] / 365
}

export function sortByKey(users, key) {
  return users.sort((current, next) => {
    const a = key === 'date' ? toUnixTime(current[key]) : current[key]
    const b = key === 'date' ? toUnixTime(next[key]) : next[key]

    if (a > b) return 1
    if (a < b) return -1

    return 0
  })
}
