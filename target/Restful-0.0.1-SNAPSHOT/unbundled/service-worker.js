/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';





/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["/bower_components/app-layout/app-drawer-layout/app-drawer-layout.html","a7474857c8dd25d6a9e5aabe763ec01f"],["/bower_components/app-layout/app-drawer/app-drawer.html","687ac17c2c0adca1adc4031ec5d2f335"],["/bower_components/app-layout/app-header-layout/app-header-layout.html","0916d57aa30b3c1b54946399c8c01f04"],["/bower_components/app-layout/app-header/app-header.html","c6e2d544cf93aa6258ef9ca82baaea6d"],["/bower_components/app-layout/app-scroll-effects/app-scroll-effects-behavior.html","3007817ffcb7fd1cf6528305c0fec9ff"],["/bower_components/app-layout/app-scroll-effects/app-scroll-effects.html","1eaa9e05144414be49e4ee23e16ceca2"],["/bower_components/app-layout/app-scroll-effects/effects/blend-background.html","4723ce7f6429640a812ad866ddddb719"],["/bower_components/app-layout/app-scroll-effects/effects/fade-background.html","3929482c600a21680def557965850501"],["/bower_components/app-layout/app-scroll-effects/effects/material.html","271fe6e745f1a9581a6e01cb3aadce21"],["/bower_components/app-layout/app-scroll-effects/effects/parallax-background.html","391d025dcffee3f042c9d2bdd83be377"],["/bower_components/app-layout/app-scroll-effects/effects/resize-snapped-title.html","4f3bc3dee2d48426998c6e4425df2b14"],["/bower_components/app-layout/app-scroll-effects/effects/resize-title.html","a78d5b787591fb1728631fc5e087cd1c"],["/bower_components/app-layout/app-scroll-effects/effects/waterfall.html","6cbd757de769cd5af213aaebb8780745"],["/bower_components/app-layout/app-toolbar/app-toolbar.html","bde0a79d3265bef565ee86c699b6bbae"],["/bower_components/app-layout/helpers/helpers.html","95b52c0c05f77b65bc1b5dc0715d2495"],["/bower_components/app-route/app-location.html","0c082f44abb664591f5b99e57a3855e6"],["/bower_components/app-route/app-route-converter-behavior.html","3b85a02b434cbccdcb87396be3554258"],["/bower_components/app-route/app-route.html","ee6897a01647904badcc856c1a4cb6ec"],["/bower_components/font-roboto/roboto.html","09500fd5adfad056ff5aa05e2aae0ec5"],["/bower_components/iron-a11y-announcer/iron-a11y-announcer.html","96e46dc8d74ac2bb15f2307f702f865f"],["/bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html","c4c3d44402c9d456c38c14da04d206b9"],["/bower_components/iron-a11y-keys/iron-a11y-keys.html","fd2760ee5676b7615aaa24d695c5295d"],["/bower_components/iron-ajax/iron-ajax.html","34b837742ac3be5f6f6c36ff87af8805"],["/bower_components/iron-ajax/iron-request.html","2ffa060e220d0fae74a46f47191e711c"],["/bower_components/iron-autogrow-textarea/iron-autogrow-textarea.html","71e9087ecb41049f84b068c4818bc138"],["/bower_components/iron-behaviors/iron-button-state.html","6565a80d1af09299c1201f8286849c3b"],["/bower_components/iron-behaviors/iron-control-state.html","1c12ee539b1dbbd0957ae26b3549cc13"],["/bower_components/iron-checked-element-behavior/iron-checked-element-behavior.html","6fd1055c2c04382401dc910a0db569c6"],["/bower_components/iron-collapse/iron-collapse.html","7248d29a399eab4cc212a35b5d63a06e"],["/bower_components/iron-dropdown/iron-dropdown-scroll-manager.html","1a1d90d7acc585a2798165f22e937abb"],["/bower_components/iron-dropdown/iron-dropdown.html","90e2acf7af71df9ebc4ff9d61b5bea0b"],["/bower_components/iron-fit-behavior/iron-fit-behavior.html","8d3799ca2f619ed4f31261bb03284671"],["/bower_components/iron-flex-layout/classes/iron-flex-layout.html","97fcf4e52b1c44a78f360d436bd4e1e0"],["/bower_components/iron-flex-layout/classes/iron-shadow-flex-layout.html","8d36ab2f6e4b1d1373be99ac0f3a4980"],["/bower_components/iron-flex-layout/iron-flex-layout.html","3987521c615734e4fe403f9acecfea54"],["/bower_components/iron-form-element-behavior/iron-form-element-behavior.html","a64177311979fc6a6aae454cb85ea2be"],["/bower_components/iron-form/iron-form.html","63397dadfeb0861b349c37ad9a59d628"],["/bower_components/iron-icon/iron-icon.html","f2a0dfd0b79864b4f4efb578417a3fef"],["/bower_components/iron-icons/av-icons.html","b69fba5107077e3c4448351591a7cef5"],["/bower_components/iron-icons/communication-icons.html","d6bbe1fe8badd9faaee6344e0b0da330"],["/bower_components/iron-icons/device-icons.html","207f23207025327d038aba8ea236f82f"],["/bower_components/iron-icons/editor-icons.html","0c73cde432a2d5b140bc031ac459e8b1"],["/bower_components/iron-icons/hardware-icons.html","ff29c05b924ec665bd07449d0a8bc762"],["/bower_components/iron-icons/image-icons.html","30ef0224c9cf6acd66c506818396ccf7"],["/bower_components/iron-icons/iron-icons.html","c8f9154ae89b94e658e4a52eee690a16"],["/bower_components/iron-icons/maps-icons.html","071389c5d61ac4ab2f39dc1d784ece94"],["/bower_components/iron-icons/notification-icons.html","ea39ef4c42e134cb11e7832334d05022"],["/bower_components/iron-icons/social-icons.html","7c0d7482ea9c4ff9b2b76dac1198d9a9"],["/bower_components/iron-iconset-svg/iron-iconset-svg.html","8d0d7213b8c3325ca7e5a658ca9aaf17"],["/bower_components/iron-image/iron-image.html","8c00904a3b0a269163dab366a02257c3"],["/bower_components/iron-input/iron-input.html","3e393eda6c241be2817ce0acc512bcf6"],["/bower_components/iron-list/iron-list.html","bbd1deba533cb2b61d467789076fb1d7"],["/bower_components/iron-location/iron-location.html","0ca9fd93d23992a9340ce7c433557226"],["/bower_components/iron-location/iron-query-params.html","36db93ae0855b5ba4210d6d22d76d8a7"],["/bower_components/iron-media-query/iron-media-query.html","7436f9608ebd2d31e4b346921651f84b"],["/bower_components/iron-menu-behavior/iron-menu-behavior.html","caaef4ec4b4116aad5c1ff0ae5c9dc7f"],["/bower_components/iron-menu-behavior/iron-menubar-behavior.html","5c51268aaae82b72301210f9d6ae7065"],["/bower_components/iron-meta/iron-meta.html","dd4ef14e09c5771e70292d70963f6718"],["/bower_components/iron-overlay-behavior/iron-overlay-backdrop.html","a6568ac2408a26e2dd2098821adbbbfa"],["/bower_components/iron-overlay-behavior/iron-overlay-behavior.html","ea68ce8165f508e9e53bc844336f5ea0"],["/bower_components/iron-overlay-behavior/iron-overlay-manager.html","7c86727e4267f15e730526f318b40da1"],["/bower_components/iron-pages/iron-pages.html","5872a2ad58225c94b14ddea747f67cbd"],["/bower_components/iron-range-behavior/iron-range-behavior.html","caf1f99ecb58e46f5ff2b81721b09c42"],["/bower_components/iron-resizable-behavior/iron-resizable-behavior.html","e93449ccd4312e4e30060c87bd52ed25"],["/bower_components/iron-scroll-target-behavior/iron-scroll-target-behavior.html","d0eb39331820f58f3cdcebaa0eed0209"],["/bower_components/iron-selector/iron-multi-selectable.html","46d6620acd7bad986d81097d9ca91692"],["/bower_components/iron-selector/iron-selectable.html","65b04f3f5f1b551d91a82b36f916f6b6"],["/bower_components/iron-selector/iron-selection.html","83545b7d1eae4020594969e6b9790b65"],["/bower_components/iron-selector/iron-selector.html","4d2657550768bec0788eba5190cddc66"],["/bower_components/iron-validatable-behavior/iron-validatable-behavior.html","02bf0434cc1a0d09e18413dea91dcea1"],["/bower_components/neon-animation/animations/fade-in-animation.html","b814c818dbcffe2bb50563e1406497df"],["/bower_components/neon-animation/animations/fade-out-animation.html","44988226230af0e6d92f0988fc8688e2"],["/bower_components/neon-animation/animations/opaque-animation.html","9b0622a0a34f5f6668a7d999667e2253"],["/bower_components/neon-animation/neon-animatable-behavior.html","e9836f1349c9cd80845897b8352c44bd"],["/bower_components/neon-animation/neon-animation-behavior.html","19f03e30fda7c2ed0fb131504e67f77b"],["/bower_components/neon-animation/neon-animation-runner-behavior.html","285df69e59c328768699fd03eb310168"],["/bower_components/neon-animation/web-animations.html","b310811179297697d51eac3659df7776"],["/bower_components/paper-badge/paper-badge.html","092d4db3ca72237e07b3c82c389ed353"],["/bower_components/paper-behaviors/paper-button-behavior.html","edddd3f97cf3ea944f3a48b4154939e8"],["/bower_components/paper-behaviors/paper-checked-element-behavior.html","59702db25efd385b161ad862b8027819"],["/bower_components/paper-behaviors/paper-inky-focus-behavior.html","51a1c5ccd2aae4c1a0258680dcb3e1ea"],["/bower_components/paper-behaviors/paper-ripple-behavior.html","b6ee8dd59ffb46ca57e81311abd2eca0"],["/bower_components/paper-button/paper-button.html","3f44496407706ccbdbd7f1f16116d915"],["/bower_components/paper-card/paper-card.html","9d57a46c26fd2ab20d9794baae231df5"],["/bower_components/paper-checkbox/paper-checkbox.html","2ffe9096ff2e7fa16d46d11fa7d9dbb2"],["/bower_components/paper-dialog-behavior/paper-dialog-behavior.html","591684fa725540baaf201f626ac39e6c"],["/bower_components/paper-dialog-behavior/paper-dialog-shared-styles.html","7b583363423f0b135de7a5f576340a96"],["/bower_components/paper-dialog-scrollable/paper-dialog-scrollable.html","5d861563663caa5ceacfd410a97b2e79"],["/bower_components/paper-dialog/paper-dialog.html","6e854a5b8a9173b762f6e91fb1d3e039"],["/bower_components/paper-drawer-panel/paper-drawer-panel.html","20ac8d9e64524a36c0bb125b59abd4cb"],["/bower_components/paper-fab/paper-fab.html","44bc76d8c7d1bb161795e2e0b8f0b502"],["/bower_components/paper-icon-button/paper-icon-button.html","2a75de00f858ae1e894ab21344464787"],["/bower_components/paper-input/paper-input-addon-behavior.html","de7b482dc1fb01847efba9016db16206"],["/bower_components/paper-input/paper-input-behavior.html","136dcbdf4406896cde312b2bebe12041"],["/bower_components/paper-input/paper-input-char-counter.html","a8b1df73015251bac35d8eec92229bfa"],["/bower_components/paper-input/paper-input-container.html","daf1cc31bd627ccfa0c319601f756856"],["/bower_components/paper-input/paper-input-error.html","f5788d46709097997281b6ccaf88b9bd"],["/bower_components/paper-input/paper-input.html","f9b7b367c305c4658a4ac9bebeed942a"],["/bower_components/paper-input/paper-textarea.html","6f6e7b1e2cadeee4271fce4e811baa34"],["/bower_components/paper-item/paper-item-behavior.html","eec8dce810279ffe8431843c4ffdedad"],["/bower_components/paper-item/paper-item-shared-styles.html","1ee734ba202eb3023b1f96c6e02c7a5b"],["/bower_components/paper-item/paper-item.html","903fb824ed5066a621a3feeeb332b193"],["/bower_components/paper-material/paper-material.html","c44aff936ebf85f718f6b90ec6dc4764"],["/bower_components/paper-menu-button/paper-menu-button-animations.html","a6d6ed67a145ca00d4487c40c4b06273"],["/bower_components/paper-menu-button/paper-menu-button.html","9d44ed0d616e6f8e93310c5b31cc5bbe"],["/bower_components/paper-menu/paper-menu-shared-styles.html","69e974e51a3f48a48cfd58d305fe8803"],["/bower_components/paper-menu/paper-menu.html","ea0d698c29360c413305a6294e1dd3f1"],["/bower_components/paper-progress/paper-progress.html","b63a6b3305f1be5bee086f7ba4c21dd5"],["/bower_components/paper-radio-button/paper-radio-button.html","4715f29b3bf1d8e7cb24570dc9bee412"],["/bower_components/paper-radio-group/paper-radio-group.html","53d6c91e7b4b2aca95443c1c15c1a735"],["/bower_components/paper-ripple/paper-ripple.html","e22bc21b61184cb28125d16f9d80fb59"],["/bower_components/paper-slider/paper-slider.html","ec87c769b717e5de95ec2f6cd6fb6728"],["/bower_components/paper-spinner/paper-spinner-behavior.html","82e814c4460e8803f6f57cc457658adf"],["/bower_components/paper-spinner/paper-spinner-styles.html","02321787a406c2c5d6497a8ace930009"],["/bower_components/paper-spinner/paper-spinner.html","f6236efc3869ed31894d1e4e8e4c5693"],["/bower_components/paper-styles/color.html","430305db311431da78c0a6e1236f9ebe"],["/bower_components/paper-styles/default-theme.html","c910188e898624eb890898418de20ee0"],["/bower_components/paper-styles/paper-styles.html","3fd71f69f3adc823ef9c03611d296cfc"],["/bower_components/paper-styles/shadow.html","fc449492f51292636b499bc5d7b9b036"],["/bower_components/paper-styles/typography.html","bdd7f31bb85f116ce97061c4135b74c9"],["/bower_components/paper-tabs/paper-tab.html","df73f655c5e3075d70b487a9a13c0cfc"],["/bower_components/paper-tabs/paper-tabs-icons.html","9fb57777c667562392afe684d85ddbe2"],["/bower_components/paper-tabs/paper-tabs.html","dfae4e89d6d97a699875be1d60273d1b"],["/bower_components/paper-toast/paper-toast.html","926646ead82c2ea5343ac0813266e869"],["/bower_components/paper-toggle-button/paper-toggle-button.html","1b74166652c9aaae9e1f306a58e5082c"],["/bower_components/paper-toolbar/paper-toolbar.html","7b90c0710ef5a8dd0546b0f5d6797df4"],["/bower_components/paper-tooltip/paper-tooltip.html","0bfd6b091836d1165a731b2de30f5b3a"],["/bower_components/polymer/polymer-micro.html","c8afdb92849d162268e7cc58eff5cd57"],["/bower_components/polymer/polymer-mini.html","33af9817ee3946c225d038f5a04d276a"],["/bower_components/polymer/polymer.html","186cfd0bba3b39fd262e69dc7bcc699a"],["/bower_components/promise-polyfill/Promise.js","5afb14fd81497aca81bf25929d65b02d"],["/bower_components/promise-polyfill/promise-polyfill-lite.html","06470312beff013fc54695e0bdda2cb3"],["/bower_components/web-animations-js/web-animations-next-lite.min.js","04197e2ccec914fa460eef2ac140c853"],["/bower_components/webcomponentsjs/webcomponents-lite.min.js","02395895d5d08242c6ba93518a6da2c5"],["/index.html","4b1260794597f269b460a6addcd7b539"],["/manifest.json","2eefc15db4b58758cddc0d666e27d399"],["/src/my-app.html","b028dcc16cee8c09b778f2dfbae0943b"],["/src/my-imports.html","6518be50a478fef8f13ec7fd79c730c0"],["/src/my-view.html","73f424f4c42b173b6a917de704962f3e"],["/src/shared-styles.html","7a91284fdeb8f866ea9820a29b746df8"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1--' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = 'index.html';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




