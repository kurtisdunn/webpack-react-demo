# The CV.

Hi!  This is the source to my resume/cv project called **The CV**.
It is a single page application optimized for speed and accessibility. It was developed with Webpack, ReactJS, Bootstrap 4, and plain 'ol vanilla JavaScript.

Linting with ESLint and minification with UglfyJS.

Fonts come from Google fonts - Raleway (serif) for headings, and Roboto (sans-serif) for body text.

Image hosting is handled by AWS Cloudfront connected to a S3 bucket.

This site is hosted on [Github pages](https://github.com/kurtisdunn/kurtisdunn.github.io).


> Live site built from docs branch .

## Install it
Create a minified production version.
```bash
$ git clone https://github.com/kurtisdunn/the-cv.git
$ cd the-cv
$ npm install
```

## Build it
Create a minified production version. Built into a **dist** directory
```bash
$ npm run build
```


## Develop it
Runs up a Webpack dev server at **https://127.0.0.1:8000**
```bash
$ npm run dev
```
