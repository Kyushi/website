<?php
  /* taken from: https://github.com/eladkarako/download.eladkarako.com
     and stackoverflow */

  $path = 'images/backgrounds';
  $files = [];
  $handle = @opendir('../' . $path . '/');

  while ($file = @readdir($handle))
    ("." !== $file && ".." !== $file) && array_push($files, $file);
  @closedir($handle);

  $files = json_encode($files);

  unset($handle,$file,$path);

  header('Content-type: application/json');
  echo $files;
?>
