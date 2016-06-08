# backbone-starter

Avant de commencer, jetez un coup d'oeil aux ressources suivantes:
* [Backbone - Documentation](http://backbonejs.org/)
* [Underscore - Documentation](http://underscorejs.org/)
* [jQuery - Documentation](https://api.jquery.com/)
* [Backbone Fundamentals](https://addyosmani.com/backbone-fundamentals/)

# Tutoriels recommandés
* [Backbone Tutorial - Beginner](https://www.youtube.com/watch?v=FZSjvWtUxYk) (vu en GLO-3102)

# Compiler

```sh
npm install
gulp
```

# Exécuter

Ouvrir `index.html` avec le serveur intégré de webstorm.
Le message `Hello GLO-3112 WEB!` devrais s'afficher dans votre navigateur, vous êtes prêt à développer!

# Inclure un template avec webpack
Voir [`HelloWorldView`](https://github.com/GLO3112/starter-packs/blob/master/backbone-starter/src/views/HelloWorldView.ts)

```typescript
this.template = require('./HelloWorldTemplate.ejs') as Function;
```
