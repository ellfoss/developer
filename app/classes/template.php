<?php

/**
 * Created by PhpStorm.
 * User: ellfoss
 * Date: 18.10.2016
 * Time: 13:35
 */
class Template
{
	private $vars = array();

	function __construct()
	{

	}

	function set($varname, $value, $overwrite = false)
	{
		if (isset($this->vars[$varname]) == true AND $overwrite == false) {
			trigger_error('Unable to set var `' . $varname . '`. Already set, and overwrite not allowed.', E_USER_NOTICE);
			return false;
		}
		$this->vars[$varname] = $value;
		return true;
	}

	function remove($varname)
	{
		unset($this->vars[$varname]);
		return true;
	}
}