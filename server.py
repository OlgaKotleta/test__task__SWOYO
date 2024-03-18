from http.server import HTTPServer, CGIHTTPRequestHandler
httpd = HTTPServer(('', 3000), CGIHTTPRequestHandler)
httpd.serve_forever()