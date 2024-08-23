let location: tiles.Location = null
tiles.setCurrentTilemap(tilemap`level6`)
let mySprite = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f 2 2 2 2 2 f . . . . . . 
    . . f d d d d 2 2 2 f . . . . . 
    . c d f d d f d 2 2 f f . . . . 
    . c d f d d f d 2 2 d d f . . . 
    c d 2 2 d d d d 2 2 b d c . . . 
    c d d d d c d d 2 2 b d c . . . 
    c c c c c d d 2 2 2 f c . . . . 
    . f d d d d 2 2 2 f f . . . . . 
    . . f f f f f 2 2 2 2 f . . . . 
    . . . . f f 2 2 2 2 2 2 f . f f 
    . . . f 2 2 f 2 2 f 2 2 f . 2 f 
    . . f 2 2 f 2 2 f 2 2 2 f . 2 f 
    . f b d f d b f b b f 2 f f 2 f 
    . f d d f d d f d d b 2 f f f f 
    . . f f f f f f f f f f f f f . 
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . b a b . . . 
    . . . . . . . . . b a b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b a a a a a b . . . 
    . . . . b b a d 1 f a d 4 c . . 
    . . . . b a a 1 f f d d 4 4 4 b 
    . . . . b a a d f b 4 4 4 4 b . 
    . . . b d a a a a 4 4 4 4 b . . 
    . b b d d d a a a a a a a b . . 
    b d d d b b b a a a a a a a b . 
    c d d b a a d c a a a a a a b . 
    c b b d a d c d a a a a a a b . 
    c b a a b c d d a a a a a a b . 
    b b c c c d d d a a a a a d b . 
    . . . . c c d d d a a a b b . . 
    . . . . . . c c c c c b b . . . 
    `, SpriteKind.Player)
let mySprite3 = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff5555ff........
    .......fb555555bf.......
    .......f55555555f.......
    ......fd55555555df......
    ......fd55555555df......
    ......fddd5555dddf......
    ......fbdbfddfbdbf......
    ......fcdcf55fcdcf......
    .......fb555555bf.......
    ......fffcdb5bdffff.....
    ....fc555cbfbfc555cf....
    ....f5b5b5ffff5b5b5f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
let mySprite4 = sprites.create(img`
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 7 7 7 e . . e 7 7 7 4 . . . 
    4 7 7 7 7 7 e e 7 7 7 7 7 4 . . 
    4 7 7 4 4 7 7 7 7 4 4 7 7 4 . . 
    e 7 4 4 7 7 7 7 7 7 4 4 7 e . . 
    . e e 7 7 7 7 7 7 7 7 e e . . . 
    . . e 7 f 7 7 7 7 f 7 e . . . . 
    . . f 7 7 7 4 4 7 7 7 f . . f f 
    . . f 4 7 7 f f 7 7 6 f . f 7 f 
    . . . f 6 6 6 6 6 6 4 4 f 7 7 f 
    . . . f 4 7 7 7 7 7 7 4 4 7 f . 
    . . . f 7 7 7 7 7 4 7 7 f f . . 
    . . . f 7 f f f 7 f f 7 f . . . 
    . . . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
mySprite.setStayInScreen(true)
mySprite2.setStayInScreen(true)
mySprite3.setStayInScreen(true)
mySprite4.setStayInScreen(true)
mySprite.setPosition(5, 5)
mySprite2.setPosition(160, 5)
mySprite3.setPosition(5, 155)
mySprite4.setPosition(155, 155)
info.startCountdown(120)
game.onUpdate(function () {
    location = tiles.getTileLocation(0, 0)
})
// This function will update the tile color as the Duck sprite moves
game.onUpdate(function () {
    location = tiles.getTileLocation(Math.floor(mySprite.x / 16), Math.floor(mySprite.y / 16))
    tiles.setTileAt(location, assets.tile`myTile2`)
})
// This function will update the tile color as the Duck sprite moves
game.onUpdate(function () {
    location = tiles.getTileLocation(Math.floor(mySprite2.x / 16), Math.floor(mySprite2.y / 16))
    tiles.setTileAt(location, assets.tile`myTile8`)
})
// This function will update the tile color as the Duck sprite moves
game.onUpdate(function () {
    location = tiles.getTileLocation(Math.floor(mySprite3.x / 16), Math.floor(mySprite3.y / 16))
    tiles.setTileAt(location, assets.tile`myTile7`)
})
// This function will update the tile color as the Duck sprite moves
game.onUpdate(function () {
    location = tiles.getTileLocation(Math.floor(mySprite4.x / 16), Math.floor(mySprite4.y / 16))
    tiles.setTileAt(location, assets.tile`myTile5`)
})
forever(function () {
    controller.player1.moveSprite(mySprite)
    controller.player2.moveSprite(mySprite2)
    controller.player3.moveSprite(mySprite3)
    controller.player4.moveSprite(mySprite4)
})
