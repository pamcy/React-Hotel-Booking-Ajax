# React Foucs Music Player [![Netlify Status](https://api.netlify.com/api/v1/badges/d4010957-09fe-435a-91aa-69e8caa0d325/deploy-status)](https://app.netlify.com/sites/react-focus-music-player/deploys)

This time I try to make a mini version of Spotify-like clone from scratch, with React and the native HTML5 `audio` element to play music without any library, best music to stay productive at work.

## Demo

**Live URL:** [https://react-focus-music-player.netlify.com/](https://react-focus-music-player.netlify.com/)

![Focus Music Player in React](https://res.cloudinary.com/pamcy/image/upload/v1565596943/coding/react-focus-music-player.png)
_The music player template designed and shared by [Tzu-Luen Zoey Hsueh](https://xd.adobe.com/spec/3d70480e-1af2-4dcc-64d2-26f24c5b72f9-4b41/grid/)_<br>
_All audio tracks are from numerous amazing artists in [YouTube Audio Library](https://www.youtube.com/audiolibrary/music/?nv=1) without paying a dime._

## What I learned from this project

- [x] HTML5 `<audio>` element
- [x] `timeupdate` event and React lifecycle methods
- [x] Setting the audio source dynamically
- [x] Play, pause, previous, next, shuffle, repeat tracks
- [x] Adjusting volume
- [x] Calculating mouse position on progress bar with `buffered`, `currentTime` and `duration`
- [x] Clicking the progress bar to move to a different time
- [x] Display advertisement every 3 songs
- [x] CSS grid layout

## Installation

1. Clone this repo
2. Run `npm install`

## Development

1. `npm start`: Run the app in development mode.
2. `npm run build`: Builds the app for production to the build folder.
