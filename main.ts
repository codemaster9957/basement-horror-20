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
    true
    )
    mySprite.ay = 0
})
controller.combos.attachCombo("A+L", function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        ..............ffffff....
        .............fcfaaaaff..
        ............fcccfaaaaff.
        .......cc...faaaaffaaaf.
        .......cac.faccccaaffff.
        .......cbacfcaffffcccaf.
        ........cbacffaaafffffff
        .........cbaca22cba22aff
        ..........cbcaddc12d2aaf
        ..........cccdaddd2aaaf.
        ...........add2a22aaff..
        ............aa22ccccf...
        .............fcaccccf...
        .............fcc2222f...
        ..............ffffff....
        ................fff.....
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ..............fff.......
        .............fcfffff....
        ...........ffccaaaaaff..
        ..........ffcccaaaaaaff.
        ..........faaaafffaaaaf.
        .........faccccaaafffff.
        .........fcafffffcccafff
        ..cc.....fffaaafffffffff
        ..cacc...faa22cbba22afaf
        ..ccaacc..faddcbb2d2aaf.
        ....cbaacaafddddd2aaaf..
        .....ccbcddaacccccccf...
        ......cccdd22ac22222f...
        .........aaaaffffffff...
        .............ff...fff...
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ...............ff.......
        .............ffcffff....
        ............ffcfaaaaff..
        ...........ffccfaaaaaff.
        ...........faaaaffaaaaf.
        ..........faccccaafffff.
        ..........fcaffffcccafff
        ..........fffaaaffffffff
        ..........faa22cba22afaf
        ...........faddcb2d2aaf.
        ..........c.aaddd2aaaf..
        ....cccccccaddaaccccf...
        .....aaaaacadd22a222f...
        ......ccccc.aaaafffff...
        ..........c...ffffffff..
        ...............ff..fff..
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ..............ffffff....
        .............fcfaaaaff..
        ............fcccfaaaaff.
        ............faaaaffaaaf.
        ...........faccccaaffff.
        ...........fcaffffcccaf.
        ...........fffaaafffffff
        ...........faa22cba22aff
        ............faddc12d2aaf
        .............fdddd2aaaf.
        .............fa222addf..
        .............cccccaddf..
        .............cacccfaa...
        ............cabc2222f...
        ...........cabcfffff....
        ..........cabc..fff.....
        ..........cbc...........
        ..........cc............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `],
    500,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.weapon_book)
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
    tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 3))
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    tiles.loadMap(tiles.createMap(tilemap`level2`))
    tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 14))
})
controller.combos.attachCombo("A+U", function () {
    mySprite.ay = 50
    if (mySprite.tileKindAt(TileDirection.Center, sprites.dungeon.darkGroundCenter)) {
        mySprite.ay = 0
        game.splash("don't jump inside")
    }
})
controller.combos.attachCombo("A+R", function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        ....ffffff..............
        ..ffaaaafcf.............
        .ffaaaafcccf............
        .faaaffaaaaf...cc.......
        .ffffaaccccaf.cac.......
        .facccffffacfcabc.......
        fffffffaaaffcabc........
        ffa22abc22acabc.........
        faa2d21cddacbc..........
        .faaa2dddadccc..........
        ..ffaa22a2dda...........
        ...fcccc22aa............
        ...fccccacf.............
        ...f2222ccf.............
        ....ffffff..............
        .....fff................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        .......fff..............
        ....fffffcf.............
        ..ffaaaaaccff...........
        .ffaaaaaacccff..........
        .faaaafffaaaaf..........
        .fffffaaaccccaf.........
        fffacccfffffacf.........
        fffffffffaaafff.....cc..
        fafa22abbc22aaf...ccac..
        .faa2d2bbcddaf..ccaacc..
        ..faaa2dddddfaacaabc....
        ...fcccccccaaddcbcc.....
        ...f22222ca22ddccc......
        ...ffffffffaaaa.........
        ...fff...ff.............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        .......ff...............
        ....ffffcff.............
        ..ffaaaafcff............
        .ffaaaaafccff...........
        .faaaaffaaaaf...........
        .fffffaaccccaf..........
        fffacccffffacf..........
        ffffffffaaafff..........
        fafa22abc22aaf..........
        .faa2d2bcddaf...........
        ..faaa2dddaa.c..........
        ...fccccaaddaccccccc....
        ...f222a22ddacaaaaa.....
        ...fffffaaaa.ccccc......
        ..ffffffff...c..........
        ..fff..ff...............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ....ffffff..............
        ..ffaaaafcf.............
        .ffaaaafcccf............
        .faaaffaaaaf............
        .ffffaaccccaf...........
        .facccffffacf...........
        fffffffaaafff...........
        ffa22abc22aaf...........
        faa2d21cddaf............
        .faaa2ddddf.............
        ..fdda222af.............
        ..fddaccccc.............
        ...aafcccac.............
        ...f2222cbac............
        ....fffffcbac...........
        .....fff..cbac..........
        ...........cbc..........
        ............cc..........
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `],
    500,
    true
    )
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
    true
    )
    mySprite.ay = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    tiles.loadMap(tiles.createMap(tilemap`level6`))
    tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 8))
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`transparency16`, function (sprite, location) {
    mySprite4.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.weapon_book, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        game.showLongText("if you press up and A at the same time you will slash the ground ", DialogLayout.Bottom)
    }
})
controller.combos.attachCombo("A+B", function () {
    mySprite.sayText("" + mySprite3 + " attack", 5000, true)
})
let mySprite5: StatusBarSprite = null
let mySprite4: Sprite = null
let mySprite3 = 0
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
let statusbar = statusbars.create(20, 4, StatusBarKind.Health)
let statusbar2 = statusbars.create(20, 4, StatusBarKind.Energy)
statusbar2.value = 0
statusbar2.positionDirection(CollisionDirection.Bottom)
statusbar2.setBarBorder(1, 10)
statusbar.value = 100
statusbar2.setBarSize(20, 4)
statusbar.attachToSprite(mySprite)
statusbar2.attachToSprite(mySprite, 0, 0)
statusbar.setBarBorder(1, 15)
statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
statusbar.setLabel("HP")
statusbar2.setLabel("energy")
mySprite3 = 20
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
game.onUpdateInterval(5000, function () {
    mySprite4 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdb2dd2bdbf......
        ......fcdc2112cdcf......
        .....ffff111111bf.......
        ....fc111cdb1bdfff......
        ....f1b1bcbfbfc111cf....
        ....fbfbfbffff1b1b1f....
        .....2...fffffffbfbf....
        ..........fffff..2......
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    tiles.placeOnTile(mySprite4, tiles.getTileLocation(8, 18))
    animation.runImageAnimation(
    mySprite4,
    [img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdb2dd2bdbf......
        ......fcdc2112cdcf......
        .....ffff111111bf.......
        ....fc111cdb1bdfff......
        ....f1b1bcbfbfc111cf....
        ....fbfbfbffff1b1b1f....
        .....2...fffffffbfbf....
        ..........fffff..2......
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdb2dd2bdbf......
        ......fcdc2112cdcf......
        .....ffff111111bf.......
        ....fc111cdb1bdfff......
        ....f1b1bcbfbfc111cf....
        ....fbfbfbffff1b1b1f....
        .........fffffffbfbf....
        ..........fffff.........
        ......2....fff..........
        .................2......
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdb2dd2bdbf......
        ......fcdc2112cdcf......
        .....ffff111111bf.......
        ....fc111cdb1bdfff......
        ....f1b1bcbfbfc111cf....
        ....fbfbfbffff1b1b1f....
        .........fffffffbfbf....
        ..........fffff.........
        ...........fff..........
        ........................
        .....2..................
        .................2......
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdb2dd2bdbf......
        ......fcdc2112cdcf......
        .....ffff111111bf.......
        ....fc111cdb1bdfff......
        ....f1b1bcbfbfc111cf....
        ....fbfbfbffff1b1b1f....
        .........fffffffbfbf....
        ..........fffff.........
        ...........fff..........
        ........................
        ...22............222....
        ..2222..........2222....
        ...22............222....
        `],
    500,
    true
    )
    mySprite4.follow(mySprite, 50)
    mySprite5 = statusbars.create(20, 4, StatusBarKind.Health)
    mySprite5.attachToSprite(mySprite4)
    mySprite5.setBarBorder(1, 15)
})
