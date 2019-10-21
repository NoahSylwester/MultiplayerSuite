/*
Rough pseudocode overview:
  distinct parts:
    - welcome screen
      + determines player id on load
      + provides list of games
      + any settings
    - chat window
      + viewable on all or most screens
      + should persist until disconnect
      + this can maybe be 'synced' rather than stored server-side
    - score display
      + game-specific scores, and macro scoreboard
      + macro board should be viewable always
    - games, should be several. Game data should be processed server-side 
      to allow games to be real-time with one source of truth
      (not just 'synced' across clients)
      + GAME IDEAS
        > race
          >> compete to complete inputs faster, or avoid programmatic obstacles
            >>> typing sort of game?
            >>> randomized obstacles? 
              >>>> randomized for each player?
        > reaction game
          >> who can react to a sudden stimulus faster
            >>> a flying object nearing?
            >>> cut a log?
            >>> a momster popping up?
        > tanks/worms
          >> each player has a sprite which they can move, and on their turn can
          execute an action to attack the other player (fire a shot?) until either
          player loses all hp
          >> a variety of weapons, actions
            >>> normal attack
            >>> different explosives
            >>> movement options
        > fighting game (make sprites?)
          >> simple sprites that either of two players can move
          >> a small palette of actions
            >>> block
            >>> light attack
            >>> heavy attack
            >>> low/high attacks
            >>> special
        > shooting game?
          >> crosshairs that can observe a canvas, find the other player
            >>> crosshairs speed controlled by requiring arrow key inputs?
            >>> maybe a mouse control instead?
          >> each player can move around
          >> point is to shoot the other first
            >>> maybe one-shot, or maybe hp?
            >>> maybe attacks options? a grenade or something?
          >> player sprites will be mirrored with player movement for other's view
          (player one moves left, player one's sprite moves right one player two's
          view. Maybe two different data storages to save processing time?)
          >> various covers, places to hide
*/