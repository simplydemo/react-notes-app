# react-notes-app

This project was bootstrapped with [React Notes App Tutorial from Scratch](https://youtu.be/8KB3DHI-QbM?list=PLaebUsP3fWHuY7LpRHYmst5FFrrMYaaLR).  
Thanks to [Chris Blakely](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA) for the tutorial.


## Git
```
git clone https://github.com/simplydemo/react-notes-app.git

cd react-notes-app
```

## Install Dependencies
```
npm install
```

## Available Scripts

```
#  run in development
npm run startdev

# run in production
npm run startprd

# 
npm test

# 
npm run build

# 
npm run eject

# clear cache
npm cache clean --force
```

## Build Docker Image
```
docker build -t symplesims/react-notes-app:local-1.0 -f ./cicd/docker/Dockerfile .
```

## Docker Run
```
docker-compose -f ./cicd/docker/docker-compose.yaml up -d

# Delete container
# docker-compose -f ./cicd/docker/docker-compose.yaml down
```

## Project initialize

- [x] create-react-app
```
npx create-react-app react-notes-app
```

- [x] install components
```
npm install --save react-icons
npm install --save react-bootstrap bootstrap
npm install --save react-router-dom
npm install --save http-proxy-middleware
```

### Components
- [react-icons](https://react-icons.github.io/react-icons/)
- [react-bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- [react-router-dom](https://v5.reactrouter.com/web/guides/quick-start)


### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
