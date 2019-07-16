<b>
Now Playing:</b>
<?php $currentsong = file_get_contents('http://45.86.70.163:8000/currentsong?sid=1');
echo $currentsong;
?>