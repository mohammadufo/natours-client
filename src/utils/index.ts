export function getImgUrl(fileName: string, ext: string = '.png') {
  const imgUrl = new URL(`./assets/${fileName}.${ext}`, import.meta.url).href
  return imgUrl
}
