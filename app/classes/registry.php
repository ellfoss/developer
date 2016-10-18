<?php

/**
 * Created by PhpStorm.
 * User: ellfoss
 * Date: 18.10.2016
 * Time: 11:48
 */
class Registry Implements ArrayAccess
{
	private static $vars = array();

	public static function set($key, $var)
	{
		if (isset(self::$vars[$key]) == true) {
			throw new Exception('Unable to set var `' . $key . '`. Already set.');
		}
		self::$vars[$key] = $var;
		return true;
	}

	public static function get($key)
	{
		if (isset(self::$vars[$key]) == false) {
			return null;
		}
		return self::$vars[$key];
	}


	public static function remove($key)
	{
		unset(self::$vars[$key]);
	}

	public function offsetExists($offset)
	{
		return isset(self::$vars[$offset]);
	}

	public function offsetGet($offset)
	{
		return self::get($offset);
	}

	public function offsetSet($offset, $value)
	{
		self::set($offset, $value);
	}

	public function offsetUnset($offset)
	{
		unset(self::$vars[$offset]);
	}
}