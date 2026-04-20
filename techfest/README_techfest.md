# Techfest IIT Bombay - Local Website Copy
## Files Downloaded

The following files have been downloaded to your Downloads folder:

1. **index.html** - Main HTML file
2. **main.bc778095.css** - All styles (249KB)
3. **main.3352cc5c.js** - All JavaScript + animations (1.7MB)
4. **download_techfest.py** - Python script to download all media assets
5. **download_techfest.sh** - Shell script (Linux/Mac) to download all media
6. **setup_techfest.bat** - Windows batch script to organize files

## How to Set Up

### Step 1: Create the folder structure
Create a folder called `techfest_website` and inside it create:
```
techfest_website/
  index.html
  static/
    css/
      main.bc778095.css
    js/
      main.3352cc5c.js
    media/
      (all media files)
```

### Step 2: Move the downloaded files
- Move `index.html` → `techfest_website/index.html`
- Move `main.bc778095.css` → `techfest_website/static/css/`
- Move `main.3352cc5c.js` → `techfest_website/static/js/`

### Step 3: Download all media assets
**Option A (Python):** Run `python download_techfest.py`
**Option B (Windows):** Run `setup_techfest.bat`
**Option C (Linux/Mac):** Run `bash download_techfest.sh`

### Step 4: Open the website
Open `techfest_website/index.html` in your browser.

> Note: Some features like parallax animation require serving from a web server.
> Run: `python -m http.server 8000` in the `techfest_website` folder
> Then visit: http://localhost:8000
