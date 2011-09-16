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
 * @fileoverview Stack class.
 */

goog.provide('pk.Stack');
goog.require('goog.array');
goog.require('pk.CardCollection');
goog.require('pk.Deck');



/**
 * Stack class for a card game. A stack may be composed of one or more decks and holds all the cards in a game.
 * @constructor
 * @extends {pk.CardCollection}
 * @param {number} deckCount Number of decks this stack will consist of.
 */
pk.Stack = function(deckCount) {
    goog.base(this);
    if (deckCount > 1)
        this.deckCount = deckCount;

    while (deckCount--) {
        var deck = new pk.Deck();
        this.cards = goog.array.concat(this.cards, deck.draw(0, deck.getNumberOfRemainingCards()));
    }
};
goog.inherits(pk.Stack, pk.CardCollection);


/**
 * Default deck count of the stack.
 * @type {number}
 */
pk.Stack.prototype.deckCount = 1;
