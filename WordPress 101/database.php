<? php  

global $wpdb;
$charset_collate = $wpdb->get_charset_collate();

$sql = "CREATE TABLE `{$wpdb->base_prefix}books` (
    `id` int(11) AUTO_INCREMENT,
    `title` varchar(100) NOT NULL,
	`author` varchar(100) NOT NULL
) $charset_collate;";

require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
dbDelta($sql);

?>