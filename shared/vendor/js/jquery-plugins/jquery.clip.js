/*!
 * Copyright 2012 Sakai Foundation (SF) Licensed under the
 * Educational Community License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may
 * obtain a copy of the License at
 *
 *     http://www.osedu.org/licenses/ECL-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an "AS IS"
 * BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

require(['jquery'], function (jQuery) {
    (function() {
        // Add click event handler that toggles the visibility of the menu items of a clip
        $(document).on('click', '.oae-clip-content button', function(ev) {
            $(ev.target).next().toggleClass('hide');
            $(ev.target).find('i.oae-clip-button-icon').toggleClass('icon-caret-down icon-caret-up');
        });
    })();
});
