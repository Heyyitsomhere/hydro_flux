# PDF Viewing Instructions

## Important: PDF viewing requires a web server

PDFs cannot be opened directly from `file://` protocol due to browser security restrictions. You need to serve your website through a local web server.

## Quick Setup Options:

### Option 1: Python HTTP Server (Recommended)
1. Open terminal/command prompt in the project folder (`d:\Coding`)
2. Run: `python -m http.server 8000`
3. Open browser and go to: `http://localhost:8000`

### Option 2: Node.js HTTP Server
1. Install http-server: `npm install -g http-server`
2. Run: `http-server -p 8000`
3. Open browser and go to: `http://localhost:8000`

### Option 3: VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 4: PHP Built-in Server
1. Run: `php -S localhost:8000`
2. Open browser and go to: `http://localhost:8000`

## PDF File Location:
- The PDF file should be at: `products/Sewage_treatment.pdf`
- Make sure the file name matches exactly (case-sensitive)

## Troubleshooting:

1. **PDF not opening in modal:**
   - Make sure you're accessing via `http://localhost` (not `file://`)
   - Check browser console for errors (F12)
   - Verify PDF file exists at correct path

2. **PDF opens in new tab instead:**
   - Click "Open in New Tab" button as fallback
   - This is normal if browser blocks iframe embedding

3. **Download works but view doesn't:**
   - Use the download button
   - Some browsers have strict security policies

## Current PDF File:
- Product ID 1 (STP) → `products/Sewage_treatment.pdf`

## Testing:
1. Start web server (any of the options above)
2. Open website in browser
3. Click on "Sewage Treatment Plants" product
4. Click "View PDF" button
5. PDF should open in the modal viewer

