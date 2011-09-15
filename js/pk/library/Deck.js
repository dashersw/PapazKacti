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
 * @fileoverview Deck class.
 */

goog.provide('pk.Deck');
goog.require('goog.object');
goog.require('pk.Card');



/**
 * Deck class. Holds a full deck of cards.
 * @constructor
 */
pk.Deck = function() {
    var that = this;
    that.cards = [];

    goog.object.forEach(pk.Card.Suit, function(suit) {
        goog.object.forEach(pk.Card.Rank, function(rank) {
            that.cards.push(new pk.Card(rank, suit));
        });
    });
};


/**
 * Shuffles the cards in the deck.
 */
pk.Deck.prototype.shuffle = function() {
    goog.array.shuffle(this.cards);
};

