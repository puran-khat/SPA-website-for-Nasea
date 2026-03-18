# Publication File Storage (Year-wise)

Store publication PDF files by year in this folder:

- `sections/publication/years/1993/`
- `sections/publication/years/1994/`
- ...
- `sections/publication/years/2021/`
- `sections/publication/years/unknown/` (if year is not clear)

## Current file naming rule used by code

`sections/publication/publication.js` currently builds links with this format:

`<baseSlug>-<year>-<itemIndex>-<downloadIndex>.pdf`

Examples:

- `yeti-view-points-2021-1-1.pdf`
- `yeti-view-points-2009-12-1.pdf`
- `yeti-view-points-2009-12-2.pdf`
- `yeti-view-points-2009-12-3.pdf`
- `yeti-views-2001-3-1.pdf`
- `misc-publications-2001-2-1.pdf`

So for each entry, place the PDF in the matching year folder, for example:

- `sections/publication/years/2021/yeti-view-points-2021-1-1.pdf`
- `sections/publication/years/2001/yeti-views-2001-3-1.pdf`

## Recommendation

If you prefer easy custom file names, we can update `publication.js` so each item uses an explicit file name field instead of auto-generated names.
