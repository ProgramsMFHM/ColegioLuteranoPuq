<?php
$nombre=$_POST['nomfun'];
$cargo=$_POST['cargo'];
$correo=$_POST['correo'];
$foto=$_FILES['foto']['name'];
$directorio='../imagenes/funcionarios/';
$upload=$directorio.basename($foto);

move_uploaded_file($_FILES['foto']['tmp_name'], $upload);


echo $nombre."<p>".$cargo."<p>".$correo."<p>".$foto;

$mysql=mysqli_connect("localhost","root","","pagcol");

$consulta="select * from fotos order by id desc limit 1";
$result=mysqli_query($mysql,$consulta);
while($rows=mysqli_fetch_array($result))
{
	$num=$rows['0'];
}
echo $num;
$id=$num+1;
$consulta1="insert into fotos values ('".$id."','".$nombre."','".$cargo."','".$correo."','".$foto."')";
$result1=mysqli_query($mysql,$consulta1);
$consulta2="select * from fotos where nombre='".$nombre."'";
$result2=mysqli_query($mysql,$consulta2);

If (mysqli_num_rows($result2)==1)
{
	echo "Datos guardados correctamente";
}
else
{
	echo "hay un error!!!!!!!!";
}



?>