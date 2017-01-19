<?php
/**
 * Created by PhpStorm.
 * User: ellfoss
 * Date: 18.10.2016
 * Time: 11:08
 */

define('DIRSEP', DIRECTORY_SEPARATOR);
$path = str_replace('index.php', '', __FILE__);

$error = file_get_contents('errors' . DIRSEP . 'error-404.html');
$page = file_get_contents('main.html');
$query = $_SERVER['REQUEST_URI'];
if ($query != '' && $query != '/' && $query != '/index.php') {
	$page = $error;
	if (substr($query, 0, 11) == '/portfolio/') {
		if (strlen($query) == 11) $page = file_get_contents('portfolio' . DIRSEP . 'portfolio.html');
		else {
			$dir = str_replace('/', '', substr($query, 11));
			if (preg_match('/[a-z]+/', $dir)) {
				$index = $path . DIRSEP . 'portfolio' . DIRSEP . $dir . DIRSEP . 'index.html';
				if (file_exists($index)) $page = file_get_contents($index);
			}
		}
	}
}
echo $page;
