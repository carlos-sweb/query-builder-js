<!DOCTYPE html>
<html>
<head>
	<title>Query Builder Js</title>
</head>
<body>

<code id="showcode" style="border:solid 1px yellow;border-radius:3px;padding:5px;background:amber;"  ></code>

<script type="text/javascript" src="dist/query-builder-js.js?date=<?=rand(10,8867677676677676)?>" ></script>
<script type="text/javascript" >
	
	var builder = new queryBuilder();

	builder.Table("Hola")

	builder.select('id','otro')

	document.querySelector('#showcode').innerHTML= builder.render();

</script>
</body>
</html>