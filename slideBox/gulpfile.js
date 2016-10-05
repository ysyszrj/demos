/**
 * Created by artemis_zrj on 2016/10/4.
 */
var gulp        = require('gulp');
var browserSync = require('browser-sync');

// 静态服务器
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// 代理

gulp.task('sync', function() {
    browserSync({
        server:{
            baseDir:"./"
        }
    });
    gulp.watch('my.html').on("change",browserSync.reload);
});