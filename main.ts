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
controller.moveSprite(mySprite)
