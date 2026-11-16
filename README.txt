PORT PAPERS FILLER - offline app

What is in this folder
  index.html            the app
  lib/                  libraries that read and write Excel, Word and PDF files
  sw.js                 keeps a copy of the app on the device so it opens without internet
  manifest.webmanifest  name and icon used when the app is installed
  icon-192.png, icon-512.png

Put it on the web once (needs internet one time)
  1. Create a free account on github.com and make a new PUBLIC repository, for example "port-papers".
  2. Upload every file and the lib folder from this folder into the repository, keeping the same structure.
  3. In the repository settings, open Pages and publish from the main branch (root folder).
  4. After a minute your app is at https://YOUR-USERNAME.github.io/port-papers/

Install on Android
  1. Open that address in Chrome on the phone.
  2. Open the Chrome menu and choose "Install app" or "Add to Home screen".
  3. Open the app once from its icon while online. From then on it works with no internet.

Good to know
  - Your ship data, crew list and corrections stay on that phone only. Nothing is uploaded.
    Use "Save backup file" in step 1 to keep a copy or move the data to another device.
  - Only the app is public on GitHub. It contains no ship or crew data.
  - To update the app later, replace the files in the repository. Phones pick up the new version
    the next time they open the app online.
  - Any other static web host works the same way. It must serve the folder over https.
