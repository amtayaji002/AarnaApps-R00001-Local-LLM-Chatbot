// electron forge make file for generating redistributable zips of the chatbot app.
module.exports = {
    packagerConfig: {
        name: 'MUJ MUseum ChatBot',
        asar: true,
        osxSign: {},
        appCategoryType: 'public.app-category.developer-tools'
    },
    rebuildConfig: { force: true },
    makers: [{ 
        name: '@electron-forge/maker-zip',
        platforms: ['darwin']
    }],
    publishers: [{
        name: '@electron-forge/publisher-github',
        config: {
            repository: {
                owner: 'electron',
                name: 'fiddle'
            },
            draft: true,
            prerelease: true,
            generateReleaseNotes: true
        }
    }],
    plugins: [],
    hooks: { /* ... */ },
    buildIdentifier: 'muj-chatbot-build'
};