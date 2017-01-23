<?php
define('DIRSEP', DIRECTORY_SEPARATOR);

$path = str_replace('works.php', '', __FILE__);
$dirs = scandir($path);

$works = array();
foreach ($dirs as $dir) {
	if ($dir != '.' && $dir != '..' && is_dir($path . $dir)) {
		$file = $path . $dir . DIRSEP . 'work.json';
		if (file_exists($file)) {
			$works[$dir] = json_decode(file_get_contents($file));
			$image = $path . $dir . DIRSEP . 'work.jpg';
			if (file_exists($image)) $works[$dir]->image = '/portfolio/' . $dir . '/work.jpg';
			else $works[$dir]->image = '../img/work.jpg';
			if ($works[$dir]->type == 'page') $works[$dir]->link = '/portfolio/' . $dir . '/';
			$data_year = array();
			foreach ($works as $key => $arr) {
				$data_year[$key] = $arr->date;
			}
			array_multisort($data_year, SORT_DESC, $works);
		}
	}
}

echo json_encode($works);