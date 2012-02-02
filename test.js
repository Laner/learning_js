<html>
<head>
<!-- Internal Javascript Function -->
<script language="javaScript">

console.log("hva skjer?");
var ti = 10;
ti;
var vokaler = "aeiou";
var setning = "dette er supert";
var slutt = '';
var i;
for (i = 0; i <= setning.length; i++) {
    if (vokaler.indexOf(setning.substring(i, i+1))<=-1 && setning.substring(i, i+1)!=" ") {
        slutt += setning.substring(i, i+1) + "o" + setning.substring(i, i+1);
    }
    else {
        slutt += setning.substring(i, i+1);
    }
}
console.log(slutt);

</script>
<!-- External Javascript Function -->
<script language="JavaScript" src="javascript.js" type="text/javascript"/>
</head>
<body>
</body>
</html>