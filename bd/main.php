<?php
$mysql = mysqli_connect(//conecion a la base 
    'localhost',
    'root',
    '',
    'BahiaMap');
    
function consultar($a,$b) {//pasamos consulta y resibimos un strig tipo texto
    $mysql= $a;
    $query = $b;
    $res = mysqli_query($mysql,$query);
    $json = array();// declaramos un array
    while($row = mysqli_fetch_array($res)){
        $json[] = array( // recorremos el array con los datos
            'ID'=> $row['A'],
            'NAME' => $row['B'],
            'DESCRIPTION' => $row['C']
            
        );
    }
    $jsonString = json_encode($json); // convierte en una variable de texto
    echo $jsonString;//devolvemos el resultado de  la consulta como un string

}

$search = $_POST['buscarBarrios'];
if(isset($_POST['buscarBarrios'])){
    if(!empty($search)){//si el valor search no esta vacio
        $query = "SELECT * FROM barrios  ";//consulta
        consultar($mysql,$query);
    
    }else{ // si el valordela consultaes empty
        $query = "SELECT * FROM barrios";//sobrescribimos la variable con una consulta general consulta
        consultar($mysql,$query);
        
    }
}


?>