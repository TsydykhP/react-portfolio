import sanityClient from '@sanity/client'

export default sanityClient ({
    projectId: "lf6yi645",
    dataset: "production",
    apiVersion: '2021-07-01', // use a UTC date string
    token: '', // or leave blank for unauthenticated usage
    useCdn: false // `false` if you want to ensure fresh data
})