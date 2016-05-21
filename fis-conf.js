fis.set('project.ignore',['node_modules/**', 'lib/**','swiper-3.3.1.jquery.min.js','output/**', '.git/**', 'fis-conf.js'])
fis.set('project.md5Connector ', '.');
fis.match('js/*.js', {
    useHash: true,
    // optimizer: fis.plugin('uglify-js'),
});
fis.match('*.less', {
    // fis-parser-less 插件进行解析
    parser: fis.plugin('less'),
    // .less 文件后缀构建后被改成 .css 文件
    rExt: '.css'
})
fis.match('**.{less,css}', {
    useHash: true,
    optimizer: fis.plugin('clean-css')
});
fis.match('**.png', {
    useHash: false
});
// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
    spriter: fis.plugin('csssprites')
});
// 对 CSS 进行图片合并
fis.match('*.css', {
    // 给匹配到的文件分配属性 `useSprite`
    useSprite: true
});
fis.match('*.png', {
    // fis-optimizer-png-compressor 插件进行压缩，已内置
    optimizer: fis.plugin('png-compressor')
});
