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
 * @fileoverview Hand class.
 */

goog.provide('pk.Hand');
goog.require('pk.CardCollection');



/**
 * Hand class. Holds a hand of cards (e.g., for a player).
 * @constructor
 * @extends {pk.CardCollection}
 */
pk.Hand = function(opt_size) {
    goog.base(this);

    this.size = opt_size;
};
goog.inherits(pk.Hand, pk.CardCollection);
