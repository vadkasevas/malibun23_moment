Package.describe({
    name: 'malibun23:moment',
    version: '0.0.1',
    summary: 'moment 2017',
    git: '',
    documentation: null
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');

    api.use('momentjs:moment@2.15.1');
    api.imply('momentjs:moment');

    api.addFiles([
        'pre.js',
        'lib/moment-timezone-with-data.js',
        'post.js'
    ], ['client', 'server']);


});