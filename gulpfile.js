var gulp = require('gulp');
var pug = require('gulp-pug');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var plumber = require('gulp-plumber');

var paths = {
	htaccess: './app/.htaccess',
	php: './app/**/*.php',
	pug: './app/**/*.pug',
	styl: './app/**/*.styl',
	script: './app/**/*.js',
	jpg: './app/**/*.jpg',
	png: './app/**/*.png',
	font: './app/fonts/*.*'
};

gulp.task('pug', function(){
	return gulp.src(paths.pug)
		.pipe(plumber())
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest('./dist/'))
		.pipe(reload({stream:true}));
});

gulp.task('stylus', function(){
	return gulp.src(paths.styl)
		.pipe(plumber())
		.pipe(stylus())
		.pipe(autoprefixer({
			browsers:['last 2 versions','Safari >= 5'],
			cascade: false
		}))
		.pipe(gulp.dest('./dist/'))
		.pipe(reload({stream:true}));
});

gulp.task('script', function(){
	return gulp.src(paths.script)
		.pipe(plumber())
		.pipe(gulp.dest('./dist/'))
		.pipe(reload({stream:true}));
});

gulp.task('img', function(){
	return gulp.src([paths.jpg, paths.png])
		.pipe(plumber())
		.pipe(gulp.dest('./dist/'))
		.pipe(reload({stream:true}));
});

gulp.task('font', function(){
	return gulp.src(paths.font)
		.pipe(plumber())
		.pipe(gulp.dest('./dist/fonts/'))
		.pipe(reload({stream:true}));
});

gulp.task('php', function(){
	return gulp.src(paths.php)
		.pipe(plumber())
		.pipe(gulp.dest('./dist/'))
		.pipe(reload({stream:true}));
});

gulp.task('htaccess', function(){
	return gulp.src(paths.htaccess)
		.pipe(plumber())
		.pipe(gulp.dest('./dist/'))
		.pipe(reload({stream:true}));
});

gulp.task('browserSync', function(){
	browserSync({
		proxy: 'developer'
	});
});

gulp.task('watcher', function(){
	gulp.watch(paths.htaccess, ['htaccess']);
	gulp.watch(paths.php, ['php']);
	gulp.watch(paths.pug, ['pug']);
	gulp.watch(paths.styl, ['stylus']);
	gulp.watch(paths.script, ['script']);
	gulp.watch([paths.jpg, paths.png], ['img']);
	gulp.watch(paths.font, ['font']);
});

gulp.task('copy', ['htaccess', 'php', 'script', 'img', 'font']);

gulp.task('build', ['copy', 'pug', 'stylus']);

gulp.task('default', ['build', 'watcher', 'browserSync']);
