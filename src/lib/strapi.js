export const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL

export function getUploadUrlFromStrapiData(data, format) {
  return format
    ? `${strapiUrl}${data.attributes.formats[format].url}`
    : `${strapiUrl}${data.attributes.url}`
}
