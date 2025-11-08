# Product PDFs Directory

This directory should contain PDF catalog files for each product.

## Required PDF Files:

1. `stp-plant.pdf` - Sewage Treatment Plant Catalog
2. `etp-plant.pdf` - Effluent Treatment Plant Catalog
3. `uf-system.pdf` - Ultra Filtration System Catalog
4. `zld-system.pdf` - Zero Liquid Discharge Catalog
5. `ro-plant.pdf` - Reverse Osmosis Plant Catalog
6. `dm-plant.pdf` - De Mineralization Plant Catalog
7. `mixed-bed-plant.pdf` - Mixed Bed Plant Catalog
8. `water-softener-plant.pdf` - Water Softener Plant Catalog
9. `default-catalog.pdf` - Default Product Catalog (fallback)

## Note:
Currently, the application uses a demo PDF URL. Replace the PDF URLs in `app.js` with actual PDF file paths once the PDF files are added to this directory.

To use local PDF files, update the `getProductPDFPath()` function in `app.js` to return the correct relative paths to these files.

