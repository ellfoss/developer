<?php
/**
 * Created by PhpStorm.
 * User: ellfoss
 * Date: 18.10.2016
 * Time: 11:08
 */

define('DIRSEP', DIRECTORY_SEPARATOR);

$site_path = dirname(dirname(__FILE__)) . DIRSEP;

$error = file_get_contents('errors' . DIRSEP . 'error-404.html');
$page = file_get_contents('main.html');
$query = $_SERVER['QUERY_STRING'];
if ($query != '') echo $error;
else echo $page;
