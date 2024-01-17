export function getUploadUrlFromStrapiData(data, format) {
  return format
    ? `http://localhost:1337${data.attributes.formats[format].url}`
    : `http://localhost:1337${data.attributes.url}`
}
