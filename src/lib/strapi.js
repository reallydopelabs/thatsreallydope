export const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL

export function getUploadUrlFromStrapiData(data, format) {
  console.log(data, format)
  return format
    ? `${data.attributes.formats[format].url}`
    : `${data.attributes.url}`
}
