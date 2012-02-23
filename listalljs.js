<?
//PHP SCRIPT: getimages.php
Header("content-type: application/x-javascript");

//This function gets the file names of all images in the current directory
//and ouputs them as a JavaScript array
function returnimages($dirname=".") {
$pattern="(\.jpg$)|(\.png$)|(\.jpeg$)|(\.gif$)"; //valid image extensions
$files = array();
$curimage=0;
if($handle = opendir($dirname)) {
while(false !== ($file = readdir($handle))){
if(eregi($pattern, $file)){ //if this file is a valid image
//Output it as a JavaScript array element
echo 'galleryarray['.$curimage.']="'.$file .'";';
$curimage++;
}


}

closedir($handle);
}
return($files);
}

echo 'var galleryarray=new Array();'; //Define array in JavaScript
returnimages() //Output the array elements containing the image file names
?> 

/* How to get this one the list all js files*/

<html>
<head>
<script type="text/javascript">
 
function alignl(ele){
     document.getElementById('lay').style.align=ele;
}
</script>
</head>
<body>
<layer id='lay'></layer>
<select id='s' name='s'  onchange="alignl(this.value);">
<option value="left">left</option>
<option value="right">right</option>
<option value="center">center</option>
<option value="top">top</option>
</select>
</body>
</html>
