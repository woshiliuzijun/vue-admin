module.exports = {
    configureWebpack: {
        resolve: {
            //alias：别名   @：src目录
            alias: {
                "assets":'@/assets',
                "views":'@/views',
                "components":'@/components',
                "utils":'@/utils',
            }
        }
    }
}