@namespace
class SpriteKind:
    weapon_book = SpriteKind.create()

def on_overlap_tile(sprite, location):
    tiles.load_map(tiles.create_map(tilemap("""
        level2
    """)))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(2, 15))
scene.on_overlap_tile(SpriteKind.player, tiles.util.arrow0, on_overlap_tile)

def on_up_pressed():
    animation.run_image_animation(mySprite,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        500,
        True)
    mySprite.ay = 0
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_combos_attach_combo():
    animation.run_image_animation(mySprite,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        100,
        True)
    info.set_score(1)
controller.combos.attach_combo("A+L", on_combos_attach_combo)

def on_overlap_tile2(sprite2, location2):
    mySprite4.follow(mySprite, 50)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile7
    """),
    on_overlap_tile2)

def on_overlap_tile3(sprite3, location3):
    sprites.destroy_all_sprites_of_kind(SpriteKind.weapon_book)
    animation.run_image_animation(mySprite,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        100,
        False)
    tiles.load_map(tiles.create_map(tilemap("""
        level3
    """)))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(7, 3))
    animation.stop_animation(animation.AnimationTypes.ALL, mySprite)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile4
    """),
    on_overlap_tile3)

def on_left_pressed():
    animation.run_image_animation(mySprite,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        500,
        True)
    mySprite.ay = 0
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_overlap_tile4(sprite4, location4):
    tiles.load_map(tiles.create_map(tilemap("""
        level2
    """)))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(8, 14))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile3
    """),
    on_overlap_tile4)

def on_combos_attach_combo2():
    mySprite.ay = 50
    if mySprite.tile_kind_at(TileDirection.CENTER, sprites.dungeon.dark_ground_center):
        mySprite.ay = 0
        game.splash("don't jump inside")
controller.combos.attach_combo("A+U", on_combos_attach_combo2)

def on_combos_attach_combo3():
    animation.run_image_animation(mySprite,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        100,
        True)
    info.set_score(1)
controller.combos.attach_combo("A+R", on_combos_attach_combo3)

def on_right_pressed():
    animation.run_image_animation(mySprite,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        500,
        True)
    mySprite.ay = 0
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_on_overlap(sprite5, otherSprite):
    if controller.combos.id_to_string(controller.combos.ID.UP) == 1:
        mySprite4.destroy()
sprites.on_overlap(SpriteKind.enemy, SpriteKind.player, on_on_overlap)

def on_down_pressed():
    animation.run_image_animation(mySprite,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        500,
        True)
    mySprite.ay = 0
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_overlap_tile5(sprite6, location5):
    tiles.load_map(tiles.create_map(tilemap("""
        level6
    """)))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(5, 8))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile5
    """),
    on_overlap_tile5)

def on_overlap_tile6(sprite7, location6):
    mySprite4.destroy()
scene.on_overlap_tile(SpriteKind.enemy,
    assets.tile("""
        transparency16
    """),
    on_overlap_tile6)

def on_on_overlap2(sprite8, otherSprite2):
    if controller.A.is_pressed():
        game.show_long_text("if you press up and A at the same time you will slash the ground ",
            DialogLayout.BOTTOM)
sprites.on_overlap(SpriteKind.player, SpriteKind.weapon_book, on_on_overlap2)

def on_combos_attach_combo4():
    mySprite.say_text("" + str(mySprite3) + " attack", 5000, True)
controller.combos.attach_combo("A+B", on_combos_attach_combo4)

mySprite5: StatusBarSprite = None
mySprite4: Sprite = None
mySprite3 = 0
mySprite: Sprite = None
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
statusbar = statusbars.create(20, 4, StatusBarKind.health)
statusbar2 = statusbars.create(20, 4, StatusBarKind.energy)
statusbar2.value = 0
statusbar2.position_direction(CollisionDirection.BOTTOM)
statusbar2.set_bar_border(1, 10)
statusbar.value = 100
statusbar2.set_bar_size(20, 4)
statusbar.attach_to_sprite(mySprite)
statusbar2.attach_to_sprite(mySprite, 0, 0)
statusbar.set_bar_border(1, 15)
statusbar.set_status_bar_flag(StatusBarFlag.SMOOTH_TRANSITION, True)
statusbar.set_label("HP")
statusbar2.set_label("energy")
mySprite3 = 20
mySprite2 = sprites.create(img("""
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
    """),
    SpriteKind.weapon_book)
tiles.set_current_tilemap(tilemap("""
    level1
"""))
scene.camera_follow_sprite(mySprite)
tiles.place_on_tile(mySprite2, tiles.get_tile_location(8, 0))
controller.move_sprite(mySprite)

def on_update_interval():
    global mySprite4, mySprite5
    mySprite4 = sprites.create(img("""
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
        """),
        SpriteKind.enemy)
    tiles.place_on_tile(mySprite4, tiles.get_tile_location(8, 18))
    animation.run_image_animation(mySprite4,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        500,
        True)
    mySprite5 = statusbars.create(20, 4, StatusBarKind.health)
    mySprite5.attach_to_sprite(mySprite4)
    mySprite5.set_bar_border(1, 15)
game.on_update_interval(5000, on_update_interval)

def on_update_interval2():
    info.set_score(0)
game.on_update_interval(2000, on_update_interval2)
