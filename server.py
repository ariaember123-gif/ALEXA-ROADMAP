#!/usr/bin/env python3
"""
Simple HTTP Server for ALEXA Roadmap Website
Run this script to serve the website locally
"""

import http.server
import socketserver
import os
import sys

# Configuration
PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add CORS headers for local development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

def main():
    os.chdir(DIRECTORY)
    
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print("=" * 60)
        print("ALEXA Roadmap Website - Development Server")
        print("=" * 60)
        print(f"\n✓ Server running at: http://localhost:{PORT}")
        print(f"✓ Serving directory: {DIRECTORY}")
        print("\n📝 Press Ctrl+C to stop the server\n")
        print("=" * 60)
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\n✓ Server stopped successfully")
            sys.exit(0)

if __name__ == "__main__":
    main()
