const nextTranslate = require('next-translate')
const withImages = require('next-images')

module.exports = withImages()

module.exports = {
    reactStrictMode: true,

    // Translation setup
    ...nextTranslate(),
}
