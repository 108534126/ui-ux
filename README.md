RewriteEngine on
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://108534126.github.io/ui-ux/index.html$1 [R,L]
