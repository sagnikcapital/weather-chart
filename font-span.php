<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
</head>
<body>
	<form method="post" action="font-span.php">
		<input type="text-area" name="html_section">
		<button type="submit">Submit</button>
	</form>
</body>
</html>
<?php
$raw_html = $_POST['html_section'];
// Replace font tags with span tags and move color attribute to style
$modified_html = preg_replace_callback(
	'/<font\b([^>]*)color="([^"]*)"([^>]*)style="([^"]*)"[^>]*>(.*?)<\/font>/is',
	function ($matches) {
			$style = $matches[4];
			$color = $matches[2];

			// Add color to existing style (if color attribute is present)
			$new_style = empty($color) ? $style : (empty($style) ? 'color:' . $color : $style . 'color:' . $color);

			// Wrap content in a new span with updated style
			return '<span' . $matches[1] . ' style="' . $new_style . '"' . $matches[3] . '>' . $matches[5] . '</span>';
	},
	$raw_html
);
// Replace remaining font tags with span tags
$modified_html = preg_replace('/<font\b([^>]*)>(.*?)<\/font>/is', '<span$1>$2</span>', $modified_html);

// Output the modified HTML with proper formatting
echo '<pre>' . htmlspecialchars($modified_html) . '</pre>';
?>