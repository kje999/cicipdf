import http.server
import socketserver
import json
import base64
import os

PORT = 8999
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class ExamHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_POST(self):
        if self.path == '/api/save':
            try:
                content_length = int(self.headers.get('Content-Length', 0))
                post_data = self.rfile.read(content_length)
                data = json.loads(post_data.decode('utf-8'))
                
                # 1. Save config.js
                if 'configContent' in data:
                    config_path = os.path.join(DIRECTORY, 'config.js')
                    with open(config_path, 'w', encoding='utf-8') as f:
                        f.write(data['configContent'])
                
                # 2. Save PDF file if uploaded
                if 'pdfBase64' in data and data['pdfBase64']:
                    pdf_dir = os.path.join(DIRECTORY, 'pdf')
                    os.makedirs(pdf_dir, exist_ok=True)
                    pdf_path = os.path.join(pdf_dir, 'exam.pdf')
                    pdf_bytes = base64.b64decode(data['pdfBase64'])
                    with open(pdf_path, 'wb') as f:
                        f.write(pdf_bytes)
                
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'success': True, 'message': 'Exam settings saved locally to disk!'}).encode('utf-8'))
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'success': False, 'error': str(e)}).encode('utf-8'))
        else:
            self.send_response(404)
            self.end_headers()

if __name__ == '__main__':
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), ExamHandler) as httpd:
        print(f"Exam Server running on http://localhost:{PORT}")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")

