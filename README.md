# TapLink NFC Digital Card Starter

A responsive, mobile-first digital business card landing page.

## Run locally
1. Extract this folder.
2. Open the folder in VS Code.
3. Open `index.html` in a browser, or use the Live Server extension.

## Customize
Edit `index.html`:
- Replace Alex Morgan, job title, bio, phone, email and location.
- Replace the sample profile image URL with your customer's image URL.
- Replace social links and service descriptions.
- Update the vCard details in `script.js` so Save Contact downloads the correct details.

## Publish free with GitHub Pages
1. Create a new public GitHub repository (for example `taplink-demo`).
2. Upload `index.html`, `style.css`, and `script.js` to the repository root.
3. Open repository Settings -> Pages.
4. Under Build and deployment, choose Deploy from a branch, select `main` and `/ (root)`, then Save.
5. Wait for deployment. Your public URL will look like `https://YOUR-USERNAME.github.io/taplink-demo/`.

## Connect an NFC card
The NFC chip stores the published URL, not the website files:
1. Publish the page first and test its HTTPS link on a phone.
2. Install an NFC writing app such as NFC Tools on a compatible phone.
3. Choose Write -> Add a record -> URL/URI.
4. Paste the complete public URL, e.g. `https://YOUR-USERNAME.github.io/taplink-demo/`.
5. Tap Write, then hold the NFC card near the phone's NFC area.
6. Test by tapping the card with another phone.

The card must be rewritable if you plan to change its URL later. For customer cards, use a unique URL per customer. Do not lock the NFC tag until you have tested it carefully.

## Important for a real business
This is a front-end demo. It does not yet have customer accounts, a database, an admin dashboard, analytics, or a self-service editor. For a scalable paid service, build a shared app with unique customer URLs (for example `/p/customer-name`) and a database/CMS so customer details can be updated without editing code. Use a domain you control before producing cards in volume.
