"use strict";

const gulp = require('gulp'), 
      bs = require('browser-sync').create(), 
      sass = require('gulp-sass'), 
      notify = require("gulp-notify"), 
      plumber = require("gulp-plumber"), 
      sourcemaps = require("gulp-sourcemaps"), 
      pug = require("gulp-pug"), 
      del = require("del"), 
      rs = require("run-sequence"), 
      vueify = require('gulp-vueify2'),
      rename = require('gulp-rename'),
      vueComponent  = require('gulp-vue-single-file-component'),
      babel = require('gulp-babel'),
      concatFilenames = require('gulp-concat-filenames');

function browserSync(done){
    bs.init({
        server: {
            baseDir: 'build/'
        }
    });
    done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  bs.reload();
  done();
}

function taskSassAutoimport(done){
    const concatFilenamesOptions = {
        root: './src/pug/',
        prepend: "@import './../../pug/",
        append: "';"
    }

    gulp.src('./src/pug/**/*.scss')
        .pipe(concatFilenames('_autoimport.scss', concatFilenamesOptions))
        .pipe(gulp.dest('./src/assets/scss'));
    done();
}

function taskSass(done){
    gulp.src('src/assets/scss/style.scss')
        .pipe(plumber({
            errorHandler: notify.onError(function (err) {
                return {
                    title: 'Styles',
                    message: err.message
                }
            })
        }))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/assets/css'))
        .pipe(bs.stream());
    done();
}

function taskPug(done){
    gulp.src('src/pug/*.pug')
        .pipe(plumber({
            errorHandler: notify.onError(function (err) {
                return {
                    title: 'Pug',
                    message: err.message
                }
            })
        }))
        .pipe(pug({
            pretty: false
        }))
        .pipe(gulp.dest('build'))
        .pipe(bs.stream());
    done();
}

function taskCopyFonts (done){
    gulp.src('src/assets/fonts/**/*.*')
        .pipe(gulp.dest('build/assets/fonts'))
        .pipe(bs.stream());
    
    done();
}

function taskCopyImages(done){
    gulp.src('src/assets/img/**/*.*')
        .pipe(gulp.dest('build/assets/img'))
        .pipe(bs.stream());

    gulp.src('src/images/**/*.*')
        .pipe(gulp.dest('build/images'))
        .pipe(bs.stream());
    
    done();
}

function taskCopyLibs(done){
    gulp.src('src/assets/libs/**/*.*')
        .pipe(gulp.dest('build/assets/libs'))
        .pipe(bs.stream());
    done();
}

function taskBuildVue(done){
//    gulp.src('src/assets/vue/*.js')
//    .pipe(babel({ plugins: ['@babel/plugin-transform-modules-amd'] }))
//    .pipe(gulp.dest('./build/assets/vue'))
//    .pipe(bs.stream());
//    
//    gulp.src('src/assets/vue/components/*.vue')
//    .pipe(vueComponent({ debug: true, loadCssMethod: 'loadCss' }))
//    .pipe(babel({ plugins: ['@babel/plugin-transform-modules-amd'] }))
//    .pipe(rename({ extname: '.js' }))
//    .pipe(gulp.dest('./build/assets/vue'))
//    .pipe(bs.stream());
    
    gulp.src('./src/assets/vue/сomponents/*.vue')
    .pipe(vueify({
        extractCSS: true,
        CSSOut: "./src/assets/scss/_vue.scss"
    }))
    .pipe(gulp.dest('./build/assets/vue'));
    
    done();
}



function taskCopyJs(done){
    gulp.src('src/assets/js/**/*.*')
        .pipe(gulp.dest('build/assets/js'))
        .pipe(bs.stream());
    done();
}

function taskClean(){
    return del('./build');
}

function taskWatch(done){
    gulp.watch('src/pug/**/*.*', gulp.series(taskPug));
    gulp.watch('src/**/*.scss', gulp.series(taskSass));
    gulp.watch('src/assets/js/**/*.js', gulp.series(taskCopyJs));
    gulp.watch('src/assets/libs/**/*.*', gulp.series(taskCopyLibs));
    gulp.watch('src/assets/img/**/*.*', gulp.series(taskCopyImages));
    gulp.watch('src/images/**/*.*', gulp.series(taskCopyImages));
    gulp.watch('src/assets/fonts/**/*.*', gulp.series(taskCopyFonts));
    gulp.watch('src/assets/vue/**/*.vue', gulp.series(taskBuildVue));

    done();
}


const copyAssets = gulp.parallel(taskCopyFonts, taskCopyImages, taskCopyLibs, taskCopyJs);
const watch = gulp.series(taskClean, taskWatch, browserSyncReload);
const taskDefault = gulp.series(taskClean, gulp.parallel(taskPug, copyAssets, gulp.series(taskBuildVue, taskSassAutoimport, taskSass)), browserSync, watch);

exports.pug = taskPug;
exports.watch = watch;
exports.default = taskDefault;