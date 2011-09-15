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
 * @fileoverview Card class.
 */

goog.provide('pk.Card');



/**
 * Card class. It holds both the model and the view.
 * This class is a derivate of work presented at http://www.brainjar.com/js/cards/
 * @constructor
 * @param {pk.Card.Rank} rank The rank of the card.
 * @param {pk.Card.Suit} suit The suit of the card.
 */
pk.Card = function(rank, suit) {
    this.rank = rank;
    this.suit = suit;
};


/**
 * Overloads pk.Card class's toString method for easy reading its value.
 * @return {string} Human readable value of the card.
 */
pk.Card.prototype.toString = function() {
    return this.rank + ' of ' + this.suit;
};


/**
 * Possible card ranks.
 * @enum {string}
 */
pk.Card.Rank = {
    ACE: 'Ace',
    TWO: 'Two',
    THREE: 'Three',
    FOUR: 'Four',
    FIVE: 'Five',
    SIX: 'Six',
    SEVEN: 'Seven',
    EIGHT: 'Eight',
    NINE: 'Nine',
    TEN: 'Ten',
    JACK: 'Jack',
    QUEEN: 'Queen',
    KING: 'King'
};


/**
 * Possible card suit types.
 * @enum {string}
 */
pk.Card.Suit = {
    CLUBS: 'Clubs',
    DIAMONDS: 'Diamonds',
    HEARTS: 'Hearts',
    SPADES: 'Spades'
};
