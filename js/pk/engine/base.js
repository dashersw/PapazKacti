// Copyright 2011 Armagan Amcalar. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Base game engine for PapazKacti.
 */

goog.provide('pk.engine.Base');
goog.require('pk.engine.Config');
goog.require('pk.Player');
goog.require('tart');



/**
 * PapazKacti base game engine. Initializes players and stack.
 * @constructor
 */
pk.engine.Base = function() {
    this.players = [];

    var playerCount = pk.engine.Config.NUMBER_OF_PLAYERS;
    this.stack = new pk.Stack(pk.engine.Config.NUMBER_OF_DECKS);
    
    while(playerCount--) {
        this.players.push(new pk.Player());
    }

    console.log(this.players)
};
