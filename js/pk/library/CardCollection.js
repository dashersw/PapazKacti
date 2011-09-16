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
 * @fileoverview Collection class for a group of cards be it a deck, a stack or a hand.
 */

goog.provide('pk.CardCollection');


/**
 * Base class
 * @constructor
 */
pk.CardCollection = function() {
    /**
     * @type {!Array.<pk.Card>}
     * @protected
     */
    this.cards = [];
};


/**
 * Shuffles the cards in the collection.
 */
pk.CardCollection.prototype.shuffle = function() {
    goog.array.shuffle(this.cards);
};


/**
 * Gives cards out of the available ones. If index is omitted or 0, it will give the uppermost card.
 * Any other times, it will give the indexed card (if available. And if not, it will return only the available ones).
 * 
 * @param {number=} opt_index The index of the requested card.
 * @param {number=} opt_length The number of cards to draw. Default is 1.
 * @return {!Array.<pk.Card>} An array of card instances or an empty array.
 */
pk.CardCollection.prototype.draw = function(opt_index, opt_length) {
    var cardsLength = this.cards.length, myLength = 1, myIndex = 0;
    if (opt_length > 1)
        myLength = opt_length;
    
    if (opt_index > 0)
        myIndex = opt_index;

    return this.cards.splice(myIndex, myLength);
};


/**
 * Returns a number of random cards.
 * @param {number=} opt_length Number of cards to return. Default is 1.
 * @return {!Array.<pk.Card>} An array of card instances or an empty array.
 */
pk.CardCollection.prototype.randomDraw = function(opt_length) {
    var cardsLength = this.cards.length, rv = [], index, card, myLength = 1;

    if (opt_length > 0)
        myLength = opt_length;
    
    while(myLength--) {
        index = Math.floor(Math.random() * cardsLength);
        card = this.draw(index, 1)[0];
        if (!card) {
            myLength = 0;
            continue;
        }
        rv.push(card);
        cardsLength--;
    }

    return rv;
};


/**
 * Adds a card or an array of cards to this collection.
 * @param {(pk.Card|Array.<pk.Card>)} card Card instance to add to this collection.
 */
pk.CardCollection.prototype.add = function(card) {
    this.cards = this.cards.concat(card);
};


/**
 * @return {number} The number of cards that are still in this collection.
 */
pk.CardCollection.prototype.getNumberOfRemainingCards = function() {
    return this.cards.length;
};
