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
			$file = substr($query, 11);
			$slash = strpos($file, '/');
			$dir = substr($file, 0, $slash);
			if (preg_match('/[a-z]+/', $dir)) {
				$file = substr($file, $slash + 1);
				if ($file == '') $file = 'index.html';
				if (preg_match('/[a-z]+\.html/', $file)) {
					$file = $path . 'portfolio' . DIRSEP . $dir . DIRSEP . $file;
					if (file_exists($file)) $page = file_get_contents($file);
				}
			}
		}
	}
}
echo $page;
