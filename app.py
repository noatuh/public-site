import http.server
import socketserver
import threading
import sys
import time

PORT = 8080

class CustomRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/':
            self.path = '/index.html'
        return http.server.SimpleHTTPRequestHandler.do_GET(self)

# Create a TCP server with ability to reuse the address
class ThreadedTCPServer(socketserver.TCPServer):
    allow_reuse_address = True

# Function to run the server in a separate thread
def run_server():
    with ThreadedTCPServer(("", PORT), CustomRequestHandler) as httpd:
        print(f"Server started at http://localhost:{PORT}")
        print("Press 'q' to quit the server")
        server.httpd = httpd  # Store reference to httpd for later shutdown
        httpd.serve_forever()

# Function to monitor for 'q' key press
def monitor_quit():
    while True:
        if sys.stdin.read(1).lower() == 'q':
            print("Shutting down server...")
            if hasattr(server, 'httpd'):
                server.httpd.shutdown()
            break

# Store server state
class ServerState:
    httpd = None
server = ServerState()

# Start server in a thread
server_thread = threading.Thread(target=run_server)
server_thread.daemon = True
server_thread.start()

try:
    # Monitor for quit in main thread
    monitor_quit()
except KeyboardInterrupt:
    print("Shutting down server...")
    if hasattr(server, 'httpd'):
        server.httpd.shutdown()

print("Server stopped")
