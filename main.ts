namespace SpriteKind {
    export const weapon_book = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, tiles.util.arrow0, function (sprite, location) {
    tiles.loadMap(tiles.createMap(tilemap`level2`))
    tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 15))
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f a a a a f f . . . . 
        . . . f a a a f f a a a f . . . 
        . . f f f f f c c f f f f f . . 
        . . f f a c a c c a c a f f . . 
        . . f a c f c f f c f c a f . . 
        . . f f f c c a a c c f f f . . 
        . f f a f c f a a f c f a f f . 
        . f a a f f a a a a f a a a f . 
        . . f a a a a a a a a a a f . . 
        . . . f a a a a a a a a f . . . 
        . . a 2 f f f f f f f f 2 a . . 
        . . 2 d f c c c c c c f d 2 . . 
        . . 2 2 f 2 2 2 2 2 2 f 2 2 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . f f a a a a f f . . . . . 
        . . f a a a f f a a a f . . . . 
        . . f f f f c c f f f f . . . . 
        . f f a c a c c a c a f f . . . 
        . f a c f c f f f c f a f . . . 
        . f f f c f a a c c f f f . . . 
        . f a c f f a a c f a a f . . . 
        f f a f f a a a f a a a f f . . 
        f f a a a a a a a a a a f a f . 
        . . f a a a a a a a a f f b f . 
        . . a f f f f f f f f c f b f . 
        . . c f c c c c c a d d f c f . 
        . . a f f f f f f a a c f f . . 
        . . . f f f . . . . . . . . . . 
        `,img`
        . . . . . f f f f . . . . . . . 
        . . . f f a a a a f f . . . . . 
        . . f a a a f f a a a f . . . . 
        . f f f f f c c f f f f f . . . 
        . f f a c a c c a c a f f . . . 
        . f a c f c f f c f c a f . . . 
        . f f f c c a a c c f f f . . . 
        f f a f c f a a f c f a f f . . 
        f a a f f a a a a f a a a f . . 
        . f a a a a a a a a a a f . . . 
        . . f a a a a a a a a f . . . . 
        . a 2 f f f f f f f f 2 a . . . 
        . 2 d f c c c c c c f d 2 . . . 
        . 2 2 f 2 2 2 2 2 2 f 2 2 . . . 
        . . . . f f f f f f . . . . . . 
        . . . . f f . . f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . f f a a a a f f . . . . . 
        . . f a a a f f a a a f . . . . 
        . . f f f f c c f f f f . . . . 
        . f f a c a c c a c a f f . . . 
        . f a f c f f f c f c a f . . . 
        . f f f c c a a f c f f f . . . 
        . f a a f c a a f f c a f . . . 
        . f a a a f a a a f f a f f . . 
        . f a a a a a a a a a a f f . . 
        . f f a a a a a a a a f . . . . 
        . f 2 f f f f f f f f a . . . . 
        . f d d a c c c c c f 2 . . . . 
        . f 2 a a f f f f f f a . . . . 
        . . . . . . . . f f f . . . . . 
        `],
    500,
    false
    )
    mySprite.ay = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f c c f f f . . . . 
        . . . f f f c c c c f f f . . . 
        . . f f f a a a a a a f f f . . 
        . . f f a c c c c c c a a f . . 
        . . f a c f f f f f f c a f . . 
        . . f f f f a a a a f f f f . . 
        . f f a f b c 2 2 c b f a f f . 
        . f a a 2 1 b d d b 1 2 a a f . 
        . . f f f f d d d d d a a f . . 
        . f a b b a f 2 2 2 a a f . . . 
        . f b a a b f c c 2 c f 2 a . . 
        . f c b b c f 2 2 c c f d 2 . . 
        . . f c c f 2 c c 2 2 f 2 2 . . 
        . . . f f f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f c c f f f . . . . 
        . . . f f f c c c c f f f . . . 
        . . f f f a a a a a a f f f . . 
        . . f f a c c c c c c a a f . . 
        . . f a c f f f f f f c a f . . 
        . . f f f f a a a a f f f f . . 
        . f f a f b c 2 2 c b f a f f . 
        . f a a 2 1 b d d b 1 2 a a f . 
        . . f f f f d d d d d a a f . . 
        . f a b b a f 2 2 2 a a f . . . 
        . f b a a b f c c 2 c f 2 a . . 
        . f c b b c f 2 2 c c f d 2 . . 
        . . f c c f 2 c c 2 2 f 2 2 . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f c c f f f . . . . 
        . . . f f f c c c c f f f . . . 
        . . f f f a a a a a a f f f . . 
        . . f f a c c c c c c a a f . . 
        . . f a c f f f f f f c a f . . 
        . . f f f f a a a a f f f f . . 
        . f f a f b c 2 2 c b f a f f . 
        . f a a 2 1 b d d b 1 2 a a f . 
        . . f f f f d d d d d a a f . . 
        . f a b b a f 2 2 2 a a f . . . 
        . f b a a b f c c 2 c f 2 a . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f c c f f f . . . . 
        . . . f f f c c c c f f f . . . 
        . . f f f a a a a a a f f f . . 
        . . f f a c c c c c c a a f . . 
        . . f a c f f f f f f c a f . . 
        . . f f f f a a a a f f f f . . 
        . f f a f b c 2 2 c b f a f f . 
        . f a a 2 1 b d d b 1 2 a a f . 
        . . f f f f d d d d d a a f . . 
        . f a b b a f 2 2 2 a a f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f c c f f f . . . . 
        . . . f f f c c c c f f f . . . 
        . . f f f a a a a a a f f f . . 
        . . f f a c c c c c c a a f . . 
        . . f a c f f f f f f c a f . . 
        . . f f f f a a a a f f f f . . 
        . f f a f b c 2 2 c b f a f f . 
        . f a a 2 1 b d d b 1 2 a a f . 
        . . f f f f d d d d d a a f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f c c f f f . . . . 
        . . . f f f c c c c f f f . . . 
        . . f f f a a a a a a f f f . . 
        . . f f a c c c c c c a a f . . 
        . . f a c f f f f f f c a f . . 
        . . f f f f a a a a f f f f . . 
        . f f a f b c 2 2 c b f a f f . 
        . f a a 2 1 b d d b 1 2 a a f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f c c f f f . . . . 
        . . . f f f c c c c f f f . . . 
        . . f f f a a a a a a f f f . . 
        . . f f a c c c c c c a a f . . 
        . . f a c f f f f f f c a f . . 
        . . f f f f a a a a f f f f . . 
        . f f a f b c 2 2 c b f a f f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f c c f f f . . . . 
        . . . f f f c c c c f f f . . . 
        . . f f f a a a a a a f f f . . 
        . . f f a c c c c c c a a f . . 
        . . f a c f f f f f f c a f . . 
        . . f f f f a a a a f f f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f c c f f f . . . . 
        . . . f f f c c c c f f f . . . 
        . . f f f a a a a a a f f f . . 
        . . f f a c c c c c c a a f . . 
        . . f a c f f f f f f c a f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f c c f f f . . . . 
        . . . f f f c c c c f f f . . . 
        . . f f f a a a a a a f f f . . 
        . . f f a c c c c c c a a f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f c c f f f . . . . 
        . . . f f f c c c c f f f . . . 
        . . f f f a a a a a a f f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f c c f f f . . . . 
        . . . f f f c c c c f f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f c c f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    false
    )
    tiles.loadMap(tiles.createMap(tilemap`level3`))
    tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 0))
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f c f a a a a f f . . . 
        . . . f c c c f a a a a f f . . 
        . . . f a a a a f f a a a f . . 
        . . f a c c c c a a f f f f . . 
        . . f c a f f f f c c c a f . . 
        . . f f f a a a f f f f f f f . 
        . . f a a 2 2 c c a 2 2 a f f . 
        . . f f a d d b 1 2 d 2 a a f . 
        . f d a f d d d d 2 a a a f . . 
        . f b a f a a a 2 a a f . . . . 
        . f b b a d d 2 c c c f . . . . 
        . . f b a d d a 2 2 2 f f . . . 
        . . . f f a a f f f f f f . . . 
        . . . . f f f . . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f c f a a a a f f . . . 
        . . . f c c c f a a a a f f . . 
        . . . f a a a a f f a a a f . . 
        . . f a c c c c a a f f f f . . 
        . . f c a f f f f c c c a f . . 
        . . f f f a a a f f f f f f f . 
        . . f a a 2 2 c c a 2 2 a f f . 
        . . . f a d d b 1 2 d 2 a a f . 
        . . . . f d d d a a a a a f . . 
        . . . . f a 2 a d d 2 f . . . . 
        . . . . f c c a d d a f . . . . 
        . . . f f c 2 f a a f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f f . . . f f . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f c f a a a a f f . . . 
        . . . f c c c f a a a a f f . . 
        . . . f a a a a f f a a a f . . 
        . . f a c c c c a a f f f f . . 
        . . f c a f f f f c c c a f . . 
        . . f f f a a a f f f f f f f . 
        . . f a a 2 2 c c a 2 2 a f f . 
        . . f f a d d b 1 2 d 2 a a f . 
        . f d d f d d d d 2 a a a f . . 
        . f b b f a a a 2 a a f f . . . 
        . f b b a d d 2 c 2 2 f . . . . 
        . . f b a d d a 2 c 2 a . . . . 
        . . . f f a a f 2 2 c f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f c f a a a a f f . . . . 
        . . f c c c f a a a a f f . . . 
        . . f a a a a f f a a a f . . . 
        . f a c c c c a a f f f f . . . 
        . f c a f f f f c c c a f . . . 
        . f f f a a a f f f f f f f . . 
        . f a a 2 2 c c a 2 2 a f f . . 
        . . f a d d b 1 2 d 2 a a f . . 
        . . . f d d d a a a a a f . . . 
        . . . f a 2 a d d 2 f . . . . . 
        . . . f c c a d d a f . . . . . 
        . . f f c 2 f a a f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    500,
    true
    )
    mySprite.ay = 0
})
controller.combos.attachCombo("A+U", function () {
    mySprite.ay = 50
    if (mySprite.tileKindAt(TileDirection.Center, sprites.dungeon.darkGroundCenter)) {
        mySprite.ay = 0
        game.splash("don't jump inside")
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f a a a a f c f . . . . 
        . . f f a a a a f c c c f . . . 
        . . f a a a f f a a a a f . . . 
        . . f f f f a a c c c c a f . . 
        . . f a c c c f f f f a c f . . 
        . f f f f f f f a a a f f f . . 
        . f f a 2 2 a c c 2 2 a a f . . 
        . f a a 2 d 2 1 b d d a f f . . 
        . . f a a a 2 d d d d f a d f . 
        . . . . f a a 2 a a a f a b f . 
        . . . . f c c c 2 d d a b b f . 
        . . . f f 2 2 2 a d d a b f . . 
        . . . f f f f f f a a f f . . . 
        . . . . f f . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f a a a a f c f . . . . 
        . . f f a a a a f c c c f . . . 
        . . f a a a f f a a a a f . . . 
        . . f f f f a a c c c c a f . . 
        . . f a c c c f f f f a c f . . 
        . f f f f f f f a a a f f f . . 
        . f f a 2 2 a c c 2 2 a a f . . 
        . f a a 2 d 2 1 b d d a f . . . 
        . . f a a a a a d d d f . . . . 
        . . . . f 2 d d a 2 a f . . . . 
        . . . . f a d d a c c f . . . . 
        . . . f f f a a f 2 c f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f . . . f f f . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . f f a a a a f c f . . . . 
        . . f f a a a a f c c c f . . . 
        . . f a a a f f a a a a f . . . 
        . . f f f f a a c c c c a f . . 
        . . f a c c c f f f f a c f . . 
        . f f f f f f f a a a f f f . . 
        . f f a 2 2 a c c 2 2 a a f . . 
        . f a a 2 d 2 1 b d d a f f . . 
        . . f a a a 2 d d d d f d d f . 
        . . . f f a a 2 a a a f b b f . 
        . . . . f 2 2 c 2 d d a b b f . 
        . . . . a 2 c 2 a d d a b f . . 
        . . . . f c 2 2 f a a f f . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f a a a a f c f . . . 
        . . . f f a a a a f c c c f . . 
        . . . f a a a f f a a a a f . . 
        . . . f f f f a a c c c c a f . 
        . . . f a c c c f f f f a c f . 
        . . f f f f f f f a a a f f f . 
        . . f f a 2 2 a c c 2 2 a a f . 
        . . f a a 2 d 2 1 b d d a f . . 
        . . . f a a a a a d d d f . . . 
        . . . . . f 2 d d a 2 a f . . . 
        . . . . . f a d d a c c f . . . 
        . . . . f f f a a f 2 c f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    500,
    true
    )
    mySprite.ay = 0
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f c c f f f . . . . 
        . . . f f f c c c c f f f . . . 
        . . f f f a a a a a a f f f . . 
        . . f f a c c c c c c a a f . . 
        . . f a c f f f f f f c a f . . 
        . . f f f f a a a a f f f f . . 
        . f f a f b c 2 2 c b f a f f . 
        . f a a 2 1 b d d b 1 2 a a f . 
        . . f f f f d d d d d a a f . . 
        . f a b b a f 2 2 2 a a f . . . 
        . f b a a b f c c 2 c f 2 a . . 
        . f c b b c f 2 2 c c f d 2 . . 
        . . f c c f 2 c c 2 2 f 2 2 . . 
        . . . f f f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f c c f f f . . . . 
        . . . f f f c c c c f f f . . . 
        . . f f f a a a a a a f f f . . 
        . . f f a c c c c c c a a f . . 
        . f f a c f f f f f f c a f f . 
        . f f f f f a a a a f f f f f . 
        . . f a f c c 2 2 c c f a f . . 
        . f f a 2 1 b d d b 1 2 a f . . 
        f a f f a 2 d d d d 2 a f a . . 
        f b f a f c c c c a d d 2 a . . 
        f b f 2 f c c c c a d d a . . . 
        f c f . f 2 2 c c f a a . . . . 
        . f f . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f c c f f f . . . . 
        . . . f f f c c c c f f f . . . 
        . . f f f a a a a a a f f f . . 
        . . f a a c c c c c c a f f . . 
        . f f a c f f f f f f c a f f . 
        . f f f f f a a a a f f f f f . 
        . . f a f b f 2 2 f b f a f . . 
        . . f a 2 1 f d d f 1 2 a f . . 
        . . a f f f f d d d 2 a f . . . 
        . . f d d d d f c c c f a f . . 
        . . f b b b b f c c c f 2 a . . 
        . . f b b b b f c 2 2 f . . . . 
        . . . f c c f f f f f f . . . . 
        . . . . f f . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f c c f f f . . . . 
        . . . f f f c c c c f f f . . . 
        . . f f f a a a a a a f f f . . 
        . . f a a c c c c c c a f f . . 
        . f f a c f f f f f f c a f f . 
        . f f f f f a a a a f f f f f . 
        . . f a f c c 2 2 c c f a f . . 
        . . f a 2 1 b d d b 1 2 a f f . 
        . . a f a 2 d d d d 2 a f f a f 
        . . a 2 d d a c c c c f a f b f 
        . . . a d d a c c c c f 2 f b f 
        . . . . a a f c c 2 2 f . f c f 
        . . . . . f f f f f f f . f f . 
        . . . . . . . . . f f f . . . . 
        `],
    500,
    false
    )
    mySprite.ay = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.weapon_book, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        game.showLongText("if you press up and A at the same time you will slash the ground ", DialogLayout.Bottom)
    }
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f c c f f f . . . . 
    . . . f f f c c c c f f f . . . 
    . . f f f a a a a a a f f f . . 
    . . f f a c c c c c c a a f . . 
    . . f a c f f f f f f c a f . . 
    . . f f f f a a a a f f f f . . 
    . f f a f b c 2 2 c b f a f f . 
    . f a a 2 1 b d d b 1 2 a a f . 
    . . f f f f d d d d d a a f . . 
    . f a b b a f 2 2 2 a a f . . . 
    . f b a a b f c c 2 c f 2 a . . 
    . f c b b c f 2 2 c c f d 2 . . 
    . . f c c f 2 c c 2 2 f 2 2 . . 
    . . . f f f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    .cccccccccccccccccccccc.
    cbddddddddddddddddddddbc
    cddddddddddddddddddddddc
    cddddddddddddddddddddddc
    cddddddddddddddddddddddc
    cddddddddddddddddddddddc
    cddddddddddddddddddddddc
    cbddddddddddddddddddddbc
    ccbbbbbbbbbbbbbbbbbbbbcc
    ccffffffffffffffffffffcc
    cbcc33c6c44c3c7c66c3ccbc
    cbcc33c6c44c3c7c66c3ccbc
    fbcc33c6c44ccc7c66c3ccbf
    fdccccccc44cccccccccccdf
    fdcbbdddd44ddddddddbbcdf
    fdffffffffffffffffffffdf
    fdccc6c33c4c6c44c3c7ccdf
    fdccc6c33c4c6c44c3c7ccdf
    fdccc6c33ccc6c44ccc7ccdf
    fdccccccccccccccccccccdf
    fdcbbddddddddddddddbbcdf
    fdcbbddddddddddddddbbcdf
    fdffffffffffffffffffffdf
    ffffffffffffffffffffffff
    `, SpriteKind.weapon_book)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(8, 0))
controller.moveSprite(mySprite)
