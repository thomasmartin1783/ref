<? php 

	if(isset($POST['submitbtn'])) {

		// print_r($_POST);

		$data = array(
			'title' => $_POST['title'],
			'author' => $_POST['author'],
		);

    	$table_name = "{$wpdb->base_prefix}contacts";

		$result = $wpdb -> insert($table_name,$data,$format=NULL);

		if($result==1) {
			echo "<script>alert('Book Saved');</script>";
		}else {
			echo "<script>alert('Unable to Save');</script>";		
		}
	}





?>