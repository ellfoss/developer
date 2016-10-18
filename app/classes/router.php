<?php

/**
 * Created by PhpStorm.
 * User: ellfoss
 * Date: 18.10.2016
 * Time: 12:39
 */
class Router
{
	private $path;
	private $args = array();

	function __construct()
	{

	}

	function setPath($path)
	{
		$path = trim($path, '/\\');
		$path .= DIRSEP;
		if (is_dir($path) == false) {
			throw new Exception ('Invalid controller path: `' . $path . '`');
		}
		$this->path = $path;
	}

	function delegate()
	{
		$this->getController($file, $controller, $action, $args);
		if (is_readable($file) == false) {
			die ('404 Not Found');
		}
		include($file);
		$class = 'Controller_' . $controller;
		$controller = new $class();
		if (is_callable(array($controller, $action)) == false) {
			die ('404 Not Found');
		}
		$controller->$action();
	}

	private function getController(&$file, &$controller, &$action, &$args)
	{
		$route = (empty($_GET['route'])) ? 'index' : $_GET['route'];
		$route = trim($route, '/\\');
		$parts = explode('/', $route);
		$cmd_path = $this->path;
		foreach ($parts as $part) {
			$fullpath = $cmd_path . $part;
			if (is_dir($fullpath)) {
				$cmd_path .= $part . DIRSEP;
				array_shift($parts);
				continue;
			}
			if (is_file($fullpath . '.php')) {
				$controller = $part;
				array_shift($parts);
				break;
			}
		}
		if (empty($controller)) {
			$controller = 'index';
		};
		$action = array_shift($parts);
		if (empty($action)) {
			$action = 'index';
		}
		$file = $cmd_path . $controller . '.php';
		$args = $parts;
	}
}