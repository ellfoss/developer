<?php

/**
 * Created by PhpStorm.
 * User: ellfoss
 * Date: 18.10.2016
 * Time: 12:52
 */
Abstract class Controller_Base
{
	protected $registry;

	function __construct($registry)
	{
		$this->registry = $registry;
	}

	abstract function index();
}