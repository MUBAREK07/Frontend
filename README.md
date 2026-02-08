# Frontend Project

This is a simple frontend project consisting of HTML, CSS, and JavaScript files.

## Files

- `index.html`: The main HTML file
- `script.js`: JavaScript functionality
- `style.css`: Stylesheet
- `images/`: Directory for images

## Usage

Open `index.html` in a web browser to view the project.

## Setup

No setup required. This is a static website.

## Image optimization (local)

To compress and optimize the images in `images/` without manual editing, run the included Node.js script which uses `sharp`.

1. Install dependencies in the project folder:

```bash
npm init -y
npm install sharp glob minimist
```

2. Run the optimizer. By default it writes optimized images to `images/optimized`:

```bash
node scripts/optimize-images.js --input=images --output=images/optimized --quality=82 --overwrite=false
```

- To overwrite the originals (make a backup first), pass `--overwrite=true`.
- To change quality, adjust `--quality` (0-100).

Notes:
- This script optimizes JPEG/PNG/WebP using `sharp`. It does not upload images or change other files.
- Creating smaller responsive sizes and using `srcset` yields better bandwidth savings; this script focuses on high-quality compression.