<?php
/**
 * Created by PhpStorm.
 * User: ellfoss
 * Date: 18.10.2016
 * Time: 11:08
 */

define('DIRSEP', DIRECTORY_SEPARATOR);

$site_path = dirname(dirname(__FILE__)) . DIRSEP;
//define('site_path', $site_path);
define('site_path', '');

function __autoload($class_name)
{
	$filename = strtolower($class_name) . '.php';
	$file = site_path . 'classes' . DIRSEP . $filename;
	if (file_exists($file) == false) return false;
	include($file);
	return true;
}

echo 'My site';

//$registry = new Registry;
//$router = new Router();
//$registry['router'] = $router;
//$router->setPath(site_path . 'controllers');
//$router->delegate();
//$template = new Template($registry);
//$registry['template'] = $template;
