# THis Web Site is created by 
Developer: Puran Raj Khatiwada
Email: puranhatiwada@gmail.com

# Safe NASeA SPA

Static single-page application (HTML/CSS/JS) created as a safe replacement for a WordPress-style org homepage.

## Section file structure

Each top heading now has its own JavaScript file for easier updates:

- Home: `sections/home.js`
- About Us: `sections/about.js`
- Committees: `sections/committees.js`
- Past Committees: `sections/committees-past.js`
- Advisors 2025-2027: `sections/committees-advisors.js`
- Publication: `sections/publication.js`
- Community Resources: `sections/resources.js`
- NASeA Election: `sections/election.js`
- Events: `sections/events.js`
- Organizations: `sections/organizations.js`
- Members: `sections/members.js`

Routing and menu behavior live in `app.js`.

### About Us subgroup files

The About Us dropdown subpages are split into separate files:

- By Law: `sections/about/bylaw.js`
- President Message: `sections/about/president-message.js`
- History of NASeA: `sections/about/history.js`
- Former President: `sections/about/former-presidents.js`
- Mission Statement: `sections/about/mission-statement.js`
- NASeA Info: `sections/about/info.js`

## Run locally

Because this uses hash routing (`#home`, `#about`), you can open `index.html` directly.

## Cheapest AWS hosting (recommended)

Use **Amazon S3 static website hosting** only.

### Estimated monthly cost

- S3 storage + bandwidth for low traffic is usually very low (often under $1 to a few dollars/month).
- If you add CloudFront + custom domain + TLS, cost increases.

### Steps

1. Create an S3 bucket (e.g., `nasea-spa-site`).
2. Disable "Block all public access" for this bucket only.
3. Enable static website hosting:
   - Index document: `index.html`
   - Error document: `index.html`
4. Add bucket policy (replace bucket name):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::nasea-spa-site/*"
    }
  ]
}
```

5. Upload these files to bucket root:
   - `index.html`
   - `styles.css`
   - `app.js`
6. Open the S3 Website Endpoint URL.

## Optional next upgrade

If you need custom domain + HTTPS:

1. Put CloudFront in front of S3.
2. Add ACM certificate (free).
3. Point Route 53 DNS to CloudFront.

This is better for production branding and security, but S3-only is the lowest cost start.
