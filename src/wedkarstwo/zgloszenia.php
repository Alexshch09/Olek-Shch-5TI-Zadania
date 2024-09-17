<?php

$lowisko = $_POST["lowisko"];
$data = $_POST["data"];
$sedzia = $_POST["sedzia"];

$conn = mysqli_connect("localhost", "root", "", "wedkarstwo");

$sql = "INSERT INTO `zawody_wedkarskie`(`Karty_wedkarskie_id`, `Lowisko_id`, `data_zawodow`, `sedzia`) VALUES (0, $lowisko, '$data', '$sedzia')";

mysqli_query($conn, $sql);

mysqli_close($conn);