module.exports = {
    i18n: {
        locales: ["en-US", "fr", "nl-NL"],
        defaultLocale: "en-US",
    },
    env: {
        NAME_KEY: process.env.KEY,
        MONGODB: process.env.MONGODB
    }
};
