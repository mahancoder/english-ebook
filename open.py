import http.server
import webbrowser
server_address = ('', 8080)
try:
    httpd = http.server.HTTPServer(
        server_address, http.server.SimpleHTTPRequestHandler)
except Exception:
    print("Using existing server")
webbrowser.open("http://localhost:8080/index.html")
httpd.serve_forever()
