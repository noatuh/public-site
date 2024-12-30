import http.server
import socketserver

PORT = 80

class CustomRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/':
            self.path = '/index.html'
        return http.server.SimpleHTTPRequestHandler.do_GET(self)

with socketserver.TCPServer(("", PORT), CustomRequestHandler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()
