import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: process.env.SANITY_ID,
  token: process.env.SANITY_TOKEN,
  dataset: 'production',
  useCdn: false,
  ignoreBrowserTokenWarning: true,
})
