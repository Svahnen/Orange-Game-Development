# Survival of The Fastest - Leaderboard

[A fast paced multiplayer action game.](http://orange-dev.duckdns.org)

## Information
This game is split up into two parts:
* [Leaderboard repo](https://github.com/Svahnen/Orange-Game-Development)
* [Mobile client repo](https://github.com/Svahnen/Orange-Game-Development-App)

## Getting Started

To be able to work towards different branches on this repository and push to the live server, follow this guide;


##### Orange git setup:
```
git clone https://github.com/Svahnen/Orange-Game-Development
cd Orange-Game-Development
git remote add live ssh://root@orange-dev.duckdns.org/root/repo/site.git
```
##### To push to live master:
```
To push up to the Live master:
git add .
git commit -m ”Commit message”
git push live master
Password: *******
```
##### To pull from the live server:
```
To retrieve from the Live Server:
git pull live master
Password: *******
```

*Note: Only push to live master when pushing to regular master.*

##### To start your own developer environment:
*Note: You will have to install both npm and React.*

```
cd leaderboard-app
npm install
npm start
```

#### Tools used and how to install them

```
apm install atom-beautify
npm install standard --global
apm install linter-htmlhint
apm install linter-csslint
apm install linter-js-standard
```

## Deployment

```
cd leaderboard-app
npm build
```

## Built With

* [ReactJS](https://reactjs.org/) - The web framework used for the leaderboard
* [Bootstrap](https://getbootstrap.com/) - The web framework used for the splash page

## Versioning

* [Github](http://github.com)

## Other Links

* [Trello](https://trello.com/b/nIYAm6OR/team-orange)

## Authors

* [Alexandra Sigurdardottir](https://github.com/Alexosk)
* [Andreas Fält](https://github.com/falt)
* [Jonny Svahn](https://github.com/Svahnen)
* [Magnus Wallin](https://github.com/mangster80)
* [Miranda Mutka](https://github.com/mirandamutka)

## License

To be added.
