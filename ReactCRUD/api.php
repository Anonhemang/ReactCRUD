<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

include('conn.php');

// Check database connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// GET Data From DATABASE 
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = "SELECT * FROM `crud`";
    $result = mysqli_query($conn, $sql);
    $users = array();

    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            $users[] = $row;
        }
        echo json_encode($users);
    } else {
        echo json_encode(array("message" => "No users found"));
    }
}

// POST Data into DATABASE
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $name = $data['name'];
    $email = $data['email'];

    $sql = "INSERT INTO `crud` (`namee`, `email`) VALUES ('$name', '$email')";
    $result = mysqli_query($conn, $sql);
    if ($result) {
        echo json_encode(array("message" => "Data Inserted Successfully"));
    } else {
        echo json_encode(array("message" => "Data Not Inserted"));
    }
}

// UPDATE Data into DATABASE
if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $data = json_decode(file_get_contents('php://input'), true);
    $id = $data['id'];
    $name = $data['name'];
    $email = $data['email'];

    $sql = "UPDATE `crud` SET `namee`='$name', `email`='$email' WHERE `id`='$id'";
    $result = mysqli_query($conn, $sql);
    if ($result) {
        echo json_encode(array("message" => "Data Updated Successfully"));
    } else {
        echo json_encode(array("message" => "Data Not Updated"));
    }
}

// DELETE Data from DATABASE
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $id = $_GET['id']; // Use this for query parameter ID
    $sql = "DELETE FROM `crud` WHERE `id`='$id'";
    $result = mysqli_query($conn, $sql);
    if ($result) {
        echo json_encode(array("message" => "Data Deleted Successfully"));
    } else {
        echo json_encode(array("message" => "Data Not Deleted"));
    }
}
?>