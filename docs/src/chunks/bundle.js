System.register([], function(_export, _context) { return { execute: function () {
System.register("chunks:///_virtual/browser.js", ['./cjs-loader.mjs'], function (exports, module) {
  var loader;
  return {
    setters: [function (module) {
      loader = module.default;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #endregion ORIGINAL CODE

        module.exports;
      }, {});
    }
  };
});

System.register("chunks:///_virtual/browser.mjs_cjs=&original=.js", ['./browser.js', './cjs-loader.mjs'], function (exports, module) {
  var __cjsMetaURL, loader;
  return {
    setters: [function (module) {
      __cjsMetaURL = module.__cjsMetaURL;
      exports('__cjsMetaURL', module.__cjsMetaURL);
    }, function (module) {
      loader = module.default;
    }],
    execute: function () {
      // I am the facade module who provides access to the CommonJS module './browser.js'~
      if (!__cjsMetaURL) {
        loader.throwInvalidWrapper('./browser.js', module.meta.url);
      }
      loader.require(__cjsMetaURL);
    }
  };
});

System.register("chunks:///_virtual/browser.mjs_cjs=&original=2.js", ['./browser2.js', './cjs-loader.mjs'], function (exports, module) {
  var __cjsMetaURL, loader;
  return {
    setters: [function (module) {
      __cjsMetaURL = module.__cjsMetaURL;
      exports('__cjsMetaURL', module.__cjsMetaURL);
    }, function (module) {
      loader = module.default;
    }],
    execute: function () {
      // I am the facade module who provides access to the CommonJS module './browser.js'~
      if (!__cjsMetaURL) {
        loader.throwInvalidWrapper('./browser.js', module.meta.url);
      }
      loader.require(__cjsMetaURL);
    }
  };
});

System.register("chunks:///_virtual/browser2.js", ['./cjs-loader.mjs'], function (exports, module) {
  var loader;
  return {
    setters: [function (module) {
      loader = module.default;
    }],
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #endregion ORIGINAL CODE

        module.exports;
      }, {});
    }
  };
});

System.register("chunks:///_virtual/cjs-loader.mjs", [], function (exports) {
  return {
    execute: function () {
      var CjsLoader = /*#__PURE__*/function () {
        function CjsLoader() {
          this._registry = {};
          this._moduleCache = {};
        }

        /**
         * Defines a CommonJS module.
         * @param id Module ID.
         * @param factory The factory.
         * @param resolveMap An object or a function returning object which records the module specifier resolve result.
         * The later is called as "deferred resolve map" and would be invocated right before CommonJS code execution.
         */
        var _proto = CjsLoader.prototype;
        _proto.define = function define(id, factory, resolveMap) {
          this._registry[id] = {
            factory: factory,
            resolveMap: resolveMap
          };
        }

        /**
         * Requires a CommonJS module.
         * @param id Module ID.
         * @returns The module's `module.exports`.
         */;
        _proto.require = function require(id) {
          return this._require(id);
        };
        _proto.throwInvalidWrapper = function throwInvalidWrapper(requestTarget, from) {
          throw new Error("Module '" + requestTarget + "' imported from '" + from + "' is expected be an ESM-wrapped CommonJS module but it doesn't.");
        };
        _proto._require = function _require(id, parent) {
          var cachedModule = this._moduleCache[id];
          if (cachedModule) {
            return cachedModule.exports;
          }
          var module = {
            id: id,
            exports: {}
          };
          this._moduleCache[id] = module;
          this._tryModuleLoad(module, id);
          return module.exports;
        };
        _proto._resolve = function _resolve(specifier, parent) {
          return this._resolveFromInfos(specifier, parent) || this._throwUnresolved(specifier, parent);
        };
        _proto._resolveFromInfos = function _resolveFromInfos(specifier, parent) {
          var _cjsInfos$parent$reso, _cjsInfos$parent;
          if (specifier in cjsInfos) {
            return specifier;
          }
          if (!parent) {
            return;
          }
          return (_cjsInfos$parent$reso = (_cjsInfos$parent = cjsInfos[parent]) == null ? void 0 : _cjsInfos$parent.resolveCache[specifier]) != null ? _cjsInfos$parent$reso : undefined;
        };
        _proto._tryModuleLoad = function _tryModuleLoad(module, id) {
          var threw = true;
          try {
            this._load(module, id);
            threw = false;
          } finally {
            if (threw) {
              delete this._moduleCache[id];
            }
          }
        };
        _proto._load = function _load(module, id) {
          var _this$_loadWrapper = this._loadWrapper(id),
            factory = _this$_loadWrapper.factory,
            resolveMap = _this$_loadWrapper.resolveMap;
          var vendorRequire = this._createRequire(module);
          var require = resolveMap ? this._createRequireWithResolveMap(typeof resolveMap === 'function' ? resolveMap() : resolveMap, vendorRequire) : vendorRequire;
          factory(module.exports, require, module);
        };
        _proto._loadWrapper = function _loadWrapper(id) {
          if (id in this._registry) {
            return this._registry[id];
          } else {
            return this._loadHostProvidedModules(id);
          }
        };
        _proto._loadHostProvidedModules = function _loadHostProvidedModules(id) {
          return {
            factory: function factory(_exports, _require, module) {
              if (typeof require === 'undefined') {
                throw new Error("Current environment does not provide a require() for requiring '" + id + "'.");
              }
              try {
                module.exports = require(id);
              } catch (err) {
                throw new Error("Exception thrown when calling host defined require('" + id + "').", {
                  cause: err
                });
              }
            }
          };
        };
        _proto._createRequire = function _createRequire(module) {
          var _this = this;
          return function (specifier) {
            return _this._require(specifier, module);
          };
        };
        _proto._createRequireWithResolveMap = function _createRequireWithResolveMap(requireMap, originalRequire) {
          return function (specifier) {
            var resolved = requireMap[specifier];
            if (resolved) {
              return originalRequire(resolved);
            } else {
              throw new Error('Unresolved specifier ' + specifier);
            }
          };
        };
        _proto._throwUnresolved = function _throwUnresolved(specifier, parentUrl) {
          throw new Error("Unable to resolve " + specifier + " from " + parent + ".");
        };
        return CjsLoader;
      }();
      var loader = exports('default', new CjsLoader());
    }
  };
});

System.register("chunks:///_virtual/index.mjs", ['./rollupPluginModLoBabelHelpers.js', './index3.mjs', './browser.mjs_cjs=&original=2.js', './browser.mjs_cjs=&original=.js'], function (exports) {
  var _inheritsLoose, _assertThisInitialized, _createClass, _wrapNativeSuper, _regeneratorRuntime, CONNECT_EVENT_ERROR_CODES, SEND_TRANSACTION_ERROR_CODES, SessionCrypto, hexToByteArray, Base64;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
      _wrapNativeSuper = module.wrapNativeSuper;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      CONNECT_EVENT_ERROR_CODES = module.CONNECT_EVENT_ERROR_CODES;
      SEND_TRANSACTION_ERROR_CODES = module.SEND_TRANSACTION_ERROR_CODES;
      SessionCrypto = module.SessionCrypto;
      hexToByteArray = module.hexToByteArray;
      Base64 = module.Base64;
      var _setter = {};
      _setter.CHAIN = module.CHAIN;
      _setter.CONNECT_EVENT_ERROR_CODES = module.CONNECT_EVENT_ERROR_CODES;
      _setter.CONNECT_ITEM_ERROR_CODES = module.CONNECT_ITEM_ERROR_CODES;
      _setter.SEND_TRANSACTION_ERROR_CODES = module.SEND_TRANSACTION_ERROR_CODES;
      exports(_setter);
    }, null, null],
    execute: function () {
      exports({
        createConnectionCompletedEvent: createConnectionCompletedEvent,
        createConnectionErrorEvent: createConnectionErrorEvent,
        createConnectionRestoringCompletedEvent: createConnectionRestoringCompletedEvent,
        createConnectionRestoringErrorEvent: createConnectionRestoringErrorEvent,
        createConnectionRestoringStartedEvent: createConnectionRestoringStartedEvent,
        createConnectionStartedEvent: createConnectionStartedEvent,
        createDisconnectionEvent: createDisconnectionEvent,
        createRequestVersionEvent: createRequestVersionEvent,
        createResponseVersionEvent: createResponseVersionEvent,
        createTransactionSentForSignatureEvent: createTransactionSentForSignatureEvent,
        createTransactionSignedEvent: createTransactionSignedEvent,
        createTransactionSigningFailedEvent: createTransactionSigningFailedEvent,
        createVersionInfo: createVersionInfo,
        encodeTelegramUrlParameters: encodeTelegramUrlParameters,
        isTelegramUrl: isTelegramUrl,
        isWalletInfoCurrentlyEmbedded: isWalletInfoCurrentlyEmbedded,
        isWalletInfoCurrentlyInjected: isWalletInfoCurrentlyInjected,
        isWalletInfoInjectable: isWalletInfoInjectable
      });
      var _connectEventErrorsCo, _sendTransactionError;

      /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
        Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
        THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */

      function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
        }
        return t;
      }
      function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      }

      /**
       * Base class for TonConnect errors. You can check if the error was triggered by the @tonconnect/sdk using `err instanceof TonConnectError`.
       */
      var TonConnectError = exports('TonConnectError', /*#__PURE__*/function (_Error) {
        _inheritsLoose(TonConnectError, _Error);
        function TonConnectError(message, options) {
          var _this;
          _this = _Error.call(this, message, options) || this;
          _this.message = TonConnectError.prefix + " " + _this.constructor.name + (_this.info ? ': ' + _this.info : '') + (message ? '\n' + message : '');
          Object.setPrototypeOf(_assertThisInitialized(_this), TonConnectError.prototype);
          return _this;
        }
        _createClass(TonConnectError, [{
          key: "info",
          get: function get() {
            return '';
          }
        }]);
        return TonConnectError;
      }( /*#__PURE__*/_wrapNativeSuper(Error)));
      TonConnectError.prefix = '[TON_CONNECT_SDK_ERROR]';

      /**
       * Thrown when passed DappMetadata is in incorrect format.
       */
      var DappMetadataError = /*#__PURE__*/function (_TonConnectError) {
        _inheritsLoose(DappMetadataError, _TonConnectError);
        function DappMetadataError() {
          var _this2;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this2 = _TonConnectError.call.apply(_TonConnectError, [this].concat(args)) || this;
          Object.setPrototypeOf(_assertThisInitialized(_this2), DappMetadataError.prototype);
          return _this2;
        }
        _createClass(DappMetadataError, [{
          key: "info",
          get: function get() {
            return 'Passed DappMetadata is in incorrect format.';
          }
        }]);
        return DappMetadataError;
      }(TonConnectError);
      /**
       * Thrown when passed manifest contains errors.
       */
      var ManifestContentErrorError = /*#__PURE__*/function (_TonConnectError2) {
        _inheritsLoose(ManifestContentErrorError, _TonConnectError2);
        function ManifestContentErrorError() {
          var _this3;
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          _this3 = _TonConnectError2.call.apply(_TonConnectError2, [this].concat(args)) || this;
          Object.setPrototypeOf(_assertThisInitialized(_this3), ManifestContentErrorError.prototype);
          return _this3;
        }
        _createClass(ManifestContentErrorError, [{
          key: "info",
          get: function get() {
            return 'Passed `tonconnect-manifest.json` contains errors. Check format of your manifest. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest';
          }
        }]);
        return ManifestContentErrorError;
      }(TonConnectError);
      /**
       * Thrown when wallet can't get manifest by passed manifestUrl.
       */
      var ManifestNotFoundError = /*#__PURE__*/function (_TonConnectError3) {
        _inheritsLoose(ManifestNotFoundError, _TonConnectError3);
        function ManifestNotFoundError() {
          var _this4;
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }
          _this4 = _TonConnectError3.call.apply(_TonConnectError3, [this].concat(args)) || this;
          Object.setPrototypeOf(_assertThisInitialized(_this4), ManifestNotFoundError.prototype);
          return _this4;
        }
        _createClass(ManifestNotFoundError, [{
          key: "info",
          get: function get() {
            return 'Manifest not found. Make sure you added `tonconnect-manifest.json` to the root of your app or passed correct manifestUrl. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest';
          }
        }]);
        return ManifestNotFoundError;
      }(TonConnectError);
      /**
       * Thrown when wallet connection called but wallet already connected. To avoid the error, disconnect the wallet before doing a new connection.
       */
      var WalletAlreadyConnectedError = exports('WalletAlreadyConnectedError', /*#__PURE__*/function (_TonConnectError4) {
        _inheritsLoose(WalletAlreadyConnectedError, _TonConnectError4);
        function WalletAlreadyConnectedError() {
          var _this5;
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }
          _this5 = _TonConnectError4.call.apply(_TonConnectError4, [this].concat(args)) || this;
          Object.setPrototypeOf(_assertThisInitialized(_this5), WalletAlreadyConnectedError.prototype);
          return _this5;
        }
        _createClass(WalletAlreadyConnectedError, [{
          key: "info",
          get: function get() {
            return 'Wallet connection called but wallet already connected. To avoid the error, disconnect the wallet before doing a new connection.';
          }
        }]);
        return WalletAlreadyConnectedError;
      }(TonConnectError));
      /**
       * Thrown when send transaction or other protocol methods called while wallet is not connected.
       */
      var WalletNotConnectedError = exports('WalletNotConnectedError', /*#__PURE__*/function (_TonConnectError5) {
        _inheritsLoose(WalletNotConnectedError, _TonConnectError5);
        function WalletNotConnectedError() {
          var _this6;
          for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
          }
          _this6 = _TonConnectError5.call.apply(_TonConnectError5, [this].concat(args)) || this;
          Object.setPrototypeOf(_assertThisInitialized(_this6), WalletNotConnectedError.prototype);
          return _this6;
        }
        _createClass(WalletNotConnectedError, [{
          key: "info",
          get: function get() {
            return 'Send transaction or other protocol methods called while wallet is not connected.';
          }
        }]);
        return WalletNotConnectedError;
      }(TonConnectError));
      function isWalletConnectionSourceJS(value) {
        return 'jsBridgeKey' in value;
      }

      /**
       * Thrown when user rejects the action in the wallet.
       */
      var UserRejectsError = exports('UserRejectsError', /*#__PURE__*/function (_TonConnectError6) {
        _inheritsLoose(UserRejectsError, _TonConnectError6);
        function UserRejectsError() {
          var _this7;
          for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args[_key6] = arguments[_key6];
          }
          _this7 = _TonConnectError6.call.apply(_TonConnectError6, [this].concat(args)) || this;
          Object.setPrototypeOf(_assertThisInitialized(_this7), UserRejectsError.prototype);
          return _this7;
        }
        _createClass(UserRejectsError, [{
          key: "info",
          get: function get() {
            return 'User rejects the action in the wallet.';
          }
        }]);
        return UserRejectsError;
      }(TonConnectError));
      /**
       * Thrown when request to the wallet contains errors.
       */
      var BadRequestError = exports('BadRequestError', /*#__PURE__*/function (_TonConnectError7) {
        _inheritsLoose(BadRequestError, _TonConnectError7);
        function BadRequestError() {
          var _this8;
          for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
            args[_key7] = arguments[_key7];
          }
          _this8 = _TonConnectError7.call.apply(_TonConnectError7, [this].concat(args)) || this;
          Object.setPrototypeOf(_assertThisInitialized(_this8), BadRequestError.prototype);
          return _this8;
        }
        _createClass(BadRequestError, [{
          key: "info",
          get: function get() {
            return 'Request to the wallet contains errors.';
          }
        }]);
        return BadRequestError;
      }(TonConnectError));
      /**
       * Thrown when app tries to send rpc request to the injected wallet while not connected.
       */
      var UnknownAppError = exports('UnknownAppError', /*#__PURE__*/function (_TonConnectError8) {
        _inheritsLoose(UnknownAppError, _TonConnectError8);
        function UnknownAppError() {
          var _this9;
          for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
            args[_key8] = arguments[_key8];
          }
          _this9 = _TonConnectError8.call.apply(_TonConnectError8, [this].concat(args)) || this;
          Object.setPrototypeOf(_assertThisInitialized(_this9), UnknownAppError.prototype);
          return _this9;
        }
        _createClass(UnknownAppError, [{
          key: "info",
          get: function get() {
            return 'App tries to send rpc request to the injected wallet while not connected.';
          }
        }]);
        return UnknownAppError;
      }(TonConnectError));
      /**
       * Thrown when there is an attempt to connect to the injected wallet while it is not exists in the webpage.
       */
      var WalletNotInjectedError = exports('WalletNotInjectedError', /*#__PURE__*/function (_TonConnectError9) {
        _inheritsLoose(WalletNotInjectedError, _TonConnectError9);
        function WalletNotInjectedError() {
          var _this10;
          for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
            args[_key9] = arguments[_key9];
          }
          _this10 = _TonConnectError9.call.apply(_TonConnectError9, [this].concat(args)) || this;
          Object.setPrototypeOf(_assertThisInitialized(_this10), WalletNotInjectedError.prototype);
          return _this10;
        }
        _createClass(WalletNotInjectedError, [{
          key: "info",
          get: function get() {
            return 'There is an attempt to connect to the injected wallet while it is not exists in the webpage.';
          }
        }]);
        return WalletNotInjectedError;
      }(TonConnectError));
      /**
       * Thrown when an error occurred while fetching the wallets list.
       */
      var FetchWalletsError = exports('FetchWalletsError', /*#__PURE__*/function (_TonConnectError11) {
        _inheritsLoose(FetchWalletsError, _TonConnectError11);
        function FetchWalletsError() {
          var _this12;
          for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
            args[_key11] = arguments[_key11];
          }
          _this12 = _TonConnectError11.call.apply(_TonConnectError11, [this].concat(args)) || this;
          Object.setPrototypeOf(_assertThisInitialized(_this12), FetchWalletsError.prototype);
          return _this12;
        }
        _createClass(FetchWalletsError, [{
          key: "info",
          get: function get() {
            return 'An error occurred while fetching the wallets list.';
          }
        }]);
        return FetchWalletsError;
      }(TonConnectError));
      /**
       * Unhanded unknown error.
       */
      var UnknownError = exports('UnknownError', /*#__PURE__*/function (_TonConnectError14) {
        _inheritsLoose(UnknownError, _TonConnectError14);
        function UnknownError() {
          var _this15;
          for (var _len14 = arguments.length, args = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
            args[_key14] = arguments[_key14];
          }
          _this15 = _TonConnectError14.call.apply(_TonConnectError14, [this].concat(args)) || this;
          Object.setPrototypeOf(_assertThisInitialized(_this15), UnknownError.prototype);
          return _this15;
        }
        return UnknownError;
      }(TonConnectError));
      var connectEventErrorsCodes = (_connectEventErrorsCo = {}, _connectEventErrorsCo[CONNECT_EVENT_ERROR_CODES.UNKNOWN_ERROR] = UnknownError, _connectEventErrorsCo[CONNECT_EVENT_ERROR_CODES.USER_REJECTS_ERROR] = UserRejectsError, _connectEventErrorsCo[CONNECT_EVENT_ERROR_CODES.BAD_REQUEST_ERROR] = BadRequestError, _connectEventErrorsCo[CONNECT_EVENT_ERROR_CODES.UNKNOWN_APP_ERROR] = UnknownAppError, _connectEventErrorsCo[CONNECT_EVENT_ERROR_CODES.MANIFEST_NOT_FOUND_ERROR] = ManifestNotFoundError, _connectEventErrorsCo[CONNECT_EVENT_ERROR_CODES.MANIFEST_CONTENT_ERROR] = ManifestContentErrorError, _connectEventErrorsCo);
      var ConnectErrorsParser = /*#__PURE__*/function () {
        function ConnectErrorsParser() {}
        var _proto = ConnectErrorsParser.prototype;
        _proto.parseError = function parseError(error) {
          var ErrorConstructor = UnknownError;
          if (error.code in connectEventErrorsCodes) {
            ErrorConstructor = connectEventErrorsCodes[error.code] || UnknownError;
          }
          return new ErrorConstructor(error.message);
        };
        return ConnectErrorsParser;
      }();
      var connectErrorsParser = new ConnectErrorsParser();
      var RpcParser = /*#__PURE__*/function () {
        function RpcParser() {}
        var _proto2 = RpcParser.prototype;
        _proto2.isError = function isError(response) {
          return 'error' in response;
        };
        return RpcParser;
      }();
      var sendTransactionErrors = (_sendTransactionError = {}, _sendTransactionError[SEND_TRANSACTION_ERROR_CODES.UNKNOWN_ERROR] = UnknownError, _sendTransactionError[SEND_TRANSACTION_ERROR_CODES.USER_REJECTS_ERROR] = UserRejectsError, _sendTransactionError[SEND_TRANSACTION_ERROR_CODES.BAD_REQUEST_ERROR] = BadRequestError, _sendTransactionError[SEND_TRANSACTION_ERROR_CODES.UNKNOWN_APP_ERROR] = UnknownAppError, _sendTransactionError);
      var SendTransactionParser = /*#__PURE__*/function (_RpcParser) {
        _inheritsLoose(SendTransactionParser, _RpcParser);
        function SendTransactionParser() {
          return _RpcParser.apply(this, arguments) || this;
        }
        var _proto3 = SendTransactionParser.prototype;
        _proto3.convertToRpcRequest = function convertToRpcRequest(request) {
          return {
            method: 'sendTransaction',
            params: [JSON.stringify(request)]
          };
        };
        _proto3.parseAndThrowError = function parseAndThrowError(response) {
          var ErrorConstructor = UnknownError;
          if (response.error.code in sendTransactionErrors) {
            ErrorConstructor = sendTransactionErrors[response.error.code] || UnknownError;
          }
          throw new ErrorConstructor(response.error.message);
        };
        _proto3.convertFromRpcResponse = function convertFromRpcResponse(rpcResponse) {
          return {
            boc: rpcResponse.result
          };
        };
        return SendTransactionParser;
      }(RpcParser);
      var sendTransactionParser = new SendTransactionParser();
      var HttpBridgeGatewayStorage = /*#__PURE__*/function () {
        function HttpBridgeGatewayStorage(storage, bridgeUrl) {
          this.storage = storage;
          this.storeKey = 'ton-connect-storage_http-bridge-gateway::' + bridgeUrl;
        }
        var _proto4 = HttpBridgeGatewayStorage.prototype;
        _proto4.storeLastEventId = function storeLastEventId(lastEventId) {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", this.storage.setItem(this.storeKey, lastEventId));
                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
        };
        _proto4.removeLastEventId = function removeLastEventId() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  return _context2.abrupt("return", this.storage.removeItem(this.storeKey));
                case 1:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
        };
        _proto4.getLastEventId = function getLastEventId() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var stored;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return this.storage.getItem(this.storeKey);
                case 2:
                  stored = _context3.sent;
                  if (stored) {
                    _context3.next = 5;
                    break;
                  }
                  return _context3.abrupt("return", null);
                case 5:
                  return _context3.abrupt("return", stored);
                case 6:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
        };
        return HttpBridgeGatewayStorage;
      }();
      function removeUrlLastSlash(url) {
        if (url.slice(-1) === '/') {
          return url.slice(0, -1);
        }
        return url;
      }
      function addPathToUrl(url, path) {
        return removeUrlLastSlash(url) + '/' + path;
      }
      function isTelegramUrl(link) {
        if (!link) {
          return false;
        }
        var url = new URL(link);
        return url.protocol === 'tg:' || url.hostname === 't.me';
      }
      function encodeTelegramUrlParameters(parameters) {
        return parameters.replaceAll('.', '%2E').replaceAll('-', '%2D').replaceAll('_', '%5F').replaceAll('&', '-').replaceAll('=', '__').replaceAll('%', '--');
      }

      /**
       * Delays the execution of code for a specified number of milliseconds.
       * @param {number} timeout - The number of milliseconds to delay the execution.
       * @param {DelayOptions} [options] - Optional configuration options for the delay.
       * @return {Promise<void>} - A promise that resolves after the specified delay, or rejects if the delay is aborted.
       */
      function delay(timeout, options) {
        return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", new Promise(function (resolve, reject) {
                  var _a, _b;
                  if ((_a = options === null || options === void 0 ? void 0 : options.signal) === null || _a === void 0 ? void 0 : _a.aborted) {
                    reject(new TonConnectError('Delay aborted'));
                    return;
                  }
                  var timeoutId = setTimeout(function () {
                    return resolve();
                  }, timeout);
                  (_b = options === null || options === void 0 ? void 0 : options.signal) === null || _b === void 0 ? void 0 : _b.addEventListener('abort', function () {
                    clearTimeout(timeoutId);
                    reject(new TonConnectError('Delay aborted'));
                  });
                }));
              case 1:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        }));
      }

      /**
       * Creates an AbortController instance with an optional AbortSignal.
       *
       * @param {AbortSignal} [signal] - An optional AbortSignal to use for aborting the controller.
       * @returns {AbortController} - An instance of AbortController.
       */
      function createAbortController(signal) {
        var abortController = new AbortController();
        if (signal === null || signal === void 0 ? void 0 : signal.aborted) {
          abortController.abort();
        } else {
          signal === null || signal === void 0 ? void 0 : signal.addEventListener('abort', function () {
            return abortController.abort();
          }, {
            once: true
          });
        }
        return abortController;
      }

      /**
       * Function to call ton api until we get response.
       * Because ton network is pretty unstable we need to make sure response is final.
       * @param {T} fn - function to call
       * @param {CallForSuccessOptions} [options] - optional configuration options
       */
      function callForSuccess(fn, options) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
          var attempts, delayMs, abortController, i, lastError;
          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                attempts = (_a = options === null || options === void 0 ? void 0 : options.attempts) !== null && _a !== void 0 ? _a : 10;
                delayMs = (_b = options === null || options === void 0 ? void 0 : options.delayMs) !== null && _b !== void 0 ? _b : 200;
                abortController = createAbortController(options === null || options === void 0 ? void 0 : options.signal);
                if (!(typeof fn !== 'function')) {
                  _context5.next = 5;
                  break;
                }
                throw new TonConnectError("Expected a function, got " + typeof fn);
              case 5:
                i = 0;
              case 6:
                if (!(i < attempts)) {
                  _context5.next = 24;
                  break;
                }
                if (!abortController.signal.aborted) {
                  _context5.next = 9;
                  break;
                }
                throw new TonConnectError("Aborted after attempts " + i);
              case 9:
                _context5.prev = 9;
                _context5.next = 12;
                return fn({
                  signal: abortController.signal
                });
              case 12:
                return _context5.abrupt("return", _context5.sent);
              case 15:
                _context5.prev = 15;
                _context5.t0 = _context5["catch"](9);
                lastError = _context5.t0;
                i++;
                if (!(i < attempts)) {
                  _context5.next = 22;
                  break;
                }
                _context5.next = 22;
                return delay(delayMs);
              case 22:
                _context5.next = 6;
                break;
              case 24:
                throw lastError;
              case 25:
              case "end":
                return _context5.stop();
            }
          }, _callee5, null, [[9, 15]]);
        }));
      }
      function logDebug() {
        {
          try {
            var _console;
            for (var _len15 = arguments.length, args = new Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
              args[_key15] = arguments[_key15];
            }
            (_console = console).debug.apply(_console, ['[TON_CONNECT_SDK]'].concat(args));
          } catch (_a) {}
        }
      }
      function logError() {
        {
          try {
            var _console2;
            for (var _len16 = arguments.length, args = new Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
              args[_key16] = arguments[_key16];
            }
            (_console2 = console).error.apply(_console2, ['[TON_CONNECT_SDK]'].concat(args));
          } catch (_a) {}
        }
      }
      function logWarning() {
        {
          try {
            var _console3;
            for (var _len17 = arguments.length, args = new Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
              args[_key17] = arguments[_key17];
            }
            (_console3 = console).warn.apply(_console3, ['[TON_CONNECT_SDK]'].concat(args));
          } catch (_a) {}
        }
      }

      /**
       * Create a resource.
       *
       * @template T - The type of the resource.
       * @template Args - The type of the arguments for creating the resource.
       *
       * @param {(...args: Args) => Promise<T>} createFn - A function that creates the resource.
       * @param {(resource: T) => Promise<void>} [disposeFn] - An optional function that disposes the resource.
       */
      function createResource(createFn, disposeFn) {
        var _this16 = this;
        var currentResource = null;
        var currentArgs = null;
        var currentPromise = null;
        var currentSignal = null;
        var abortController = null;
        // create a new resource
        var create = function create(signal) {
          for (var _len18 = arguments.length, args = new Array(_len18 > 1 ? _len18 - 1 : 0), _key18 = 1; _key18 < _len18; _key18++) {
            args[_key18 - 1] = arguments[_key18];
          }
          return __awaiter(_this16, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
            var promise, resource;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  currentSignal = signal !== null && signal !== void 0 ? signal : null;
                  abortController === null || abortController === void 0 ? void 0 : abortController.abort();
                  abortController = createAbortController(signal);
                  if (!abortController.signal.aborted) {
                    _context6.next = 5;
                    break;
                  }
                  throw new TonConnectError('Resource creation was aborted');
                case 5:
                  currentArgs = args !== null && args !== void 0 ? args : null;
                  promise = createFn.apply(void 0, [abortController.signal].concat(args));
                  currentPromise = promise;
                  _context6.next = 10;
                  return promise;
                case 10:
                  resource = _context6.sent;
                  if (!(currentPromise !== promise && resource !== currentResource)) {
                    _context6.next = 15;
                    break;
                  }
                  _context6.next = 14;
                  return disposeFn(resource);
                case 14:
                  throw new TonConnectError('Resource creation was aborted by a new resource creation');
                case 15:
                  currentResource = resource;
                  return _context6.abrupt("return", currentResource);
                case 17:
                case "end":
                  return _context6.stop();
              }
            }, _callee6);
          }));
        };
        // get the current resource
        var current = function current() {
          return currentResource !== null && currentResource !== void 0 ? currentResource : null;
        };
        // dispose the current resource
        var dispose = function dispose() {
          return __awaiter(_this16, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
            var resource, promise;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.prev = 0;
                  resource = currentResource;
                  currentResource = null;
                  promise = currentPromise;
                  currentPromise = null;
                  try {
                    abortController === null || abortController === void 0 ? void 0 : abortController.abort();
                  } catch (e) {}
                  _context7.t0 = Promise;
                  _context7.t1 = resource ? disposeFn(resource) : Promise.resolve();
                  if (!promise) {
                    _context7.next = 16;
                    break;
                  }
                  _context7.t3 = disposeFn;
                  _context7.next = 12;
                  return promise;
                case 12:
                  _context7.t4 = _context7.sent;
                  _context7.t2 = (0, _context7.t3)(_context7.t4);
                  _context7.next = 17;
                  break;
                case 16:
                  _context7.t2 = Promise.resolve();
                case 17:
                  _context7.t5 = _context7.t2;
                  _context7.t6 = [_context7.t1, _context7.t5];
                  _context7.next = 21;
                  return _context7.t0.allSettled.call(_context7.t0, _context7.t6);
                case 21:
                  _context7.next = 25;
                  break;
                case 23:
                  _context7.prev = 23;
                  _context7.t7 = _context7["catch"](0);
                case 25:
                case "end":
                  return _context7.stop();
              }
            }, _callee7, null, [[0, 23]]);
          }));
        };
        // recreate the current resource
        var recreate = function recreate(delayMs) {
          return __awaiter(_this16, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
            var resource, promise, args, signal;
            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  resource = currentResource;
                  promise = currentPromise;
                  args = currentArgs;
                  signal = currentSignal;
                  _context8.next = 6;
                  return delay(delayMs);
                case 6:
                  if (!(resource === currentResource && promise === currentPromise && args === currentArgs && signal === currentSignal)) {
                    _context8.next = 10;
                    break;
                  }
                  _context8.next = 9;
                  return create.apply(void 0, [currentSignal].concat(args !== null && args !== void 0 ? args : []));
                case 9:
                  return _context8.abrupt("return", _context8.sent);
                case 10:
                  throw new TonConnectError('Resource recreation was aborted by a new resource creation');
                case 11:
                case "end":
                  return _context8.stop();
              }
            }, _callee8);
          }));
        };
        return {
          create: create,
          current: current,
          dispose: dispose,
          recreate: recreate
        };
      }

      /**
       * Executes a function and provides deferred behavior, allowing for a timeout and abort functionality.
       *
       * @param {Deferrable<T>} fn - The function to execute. It should return a promise that resolves with the desired result.
       * @param {DeferOptions} options - Optional configuration options for the defer behavior.
       * @returns {Promise<T>} - A promise that resolves with the result of the executed function, or rejects with an error if it times out or is aborted.
       */
      function timeout(fn, options) {
        var _this17 = this;
        var timeout = options === null || options === void 0 ? void 0 : options.timeout;
        var signal = options === null || options === void 0 ? void 0 : options.signal;
        var abortController = createAbortController(signal);
        return new Promise(function (resolve, reject) {
          return __awaiter(_this17, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
            var timeoutId, deferOptions;
            return _regeneratorRuntime().wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  if (!abortController.signal.aborted) {
                    _context9.next = 3;
                    break;
                  }
                  reject(new TonConnectError('Operation aborted'));
                  return _context9.abrupt("return");
                case 3:
                  if (typeof timeout !== 'undefined') {
                    timeoutId = setTimeout(function () {
                      abortController.abort();
                      reject(new TonConnectError("Timeout after " + timeout + "ms"));
                    }, timeout);
                  }
                  abortController.signal.addEventListener('abort', function () {
                    clearTimeout(timeoutId);
                    reject(new TonConnectError('Operation aborted'));
                  }, {
                    once: true
                  });
                  deferOptions = {
                    timeout: timeout,
                    abort: abortController.signal
                  };
                  _context9.next = 8;
                  return fn(function () {
                    clearTimeout(timeoutId);
                    resolve.apply(void 0, arguments);
                  }, function () {
                    clearTimeout(timeoutId);
                    reject();
                  }, deferOptions);
                case 8:
                case "end":
                  return _context9.stop();
              }
            }, _callee9);
          }));
        });
      }
      var BridgeGateway = /*#__PURE__*/function () {
        function BridgeGateway(storage, bridgeUrl, sessionId, listener, errorsListener) {
          var _this18 = this;
          this.bridgeUrl = bridgeUrl;
          this.sessionId = sessionId;
          this.listener = listener;
          this.errorsListener = errorsListener;
          this.ssePath = 'events';
          this.postPath = 'message';
          this.heartbeatMessage = 'heartbeat';
          this.defaultTtl = 300;
          this.defaultReconnectDelay = 2000;
          this.defaultResendDelay = 5000;
          this.eventSource = createResource(function (signal, openingDeadlineMS) {
            return __awaiter(_this18, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
              var eventSourceConfig;
              return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                while (1) switch (_context10.prev = _context10.next) {
                  case 0:
                    eventSourceConfig = {
                      bridgeUrl: this.bridgeUrl,
                      ssePath: this.ssePath,
                      sessionId: this.sessionId,
                      bridgeGatewayStorage: this.bridgeGatewayStorage,
                      errorHandler: this.errorsHandler.bind(this),
                      messageHandler: this.messagesHandler.bind(this),
                      signal: signal,
                      openingDeadlineMS: openingDeadlineMS
                    };
                    _context10.next = 3;
                    return createEventSource(eventSourceConfig);
                  case 3:
                    return _context10.abrupt("return", _context10.sent);
                  case 4:
                  case "end":
                    return _context10.stop();
                }
              }, _callee10, this);
            }));
          }, function (resource) {
            return __awaiter(_this18, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
              return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                while (1) switch (_context11.prev = _context11.next) {
                  case 0:
                    resource.close();
                  case 1:
                  case "end":
                    return _context11.stop();
                }
              }, _callee11);
            }));
          });
          this.bridgeGatewayStorage = new HttpBridgeGatewayStorage(storage, bridgeUrl);
        }
        var _proto5 = BridgeGateway.prototype;
        _proto5.registerSession = function registerSession(options) {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
            return _regeneratorRuntime().wrap(function _callee12$(_context12) {
              while (1) switch (_context12.prev = _context12.next) {
                case 0:
                  _context12.next = 2;
                  return this.eventSource.create(options === null || options === void 0 ? void 0 : options.signal, options === null || options === void 0 ? void 0 : options.openingDeadlineMS);
                case 2:
                case "end":
                  return _context12.stop();
              }
            }, _callee12, this);
          }));
        };
        _proto5.send = function send(message, receiver, topic, ttlOrOptions) {
          var _a;
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
            var _this19 = this;
            var options, url, body;
            return _regeneratorRuntime().wrap(function _callee14$(_context14) {
              while (1) switch (_context14.prev = _context14.next) {
                case 0:
                  // TODO: remove deprecated method
                  options = {};
                  if (typeof ttlOrOptions === 'number') {
                    options.ttl = ttlOrOptions;
                  } else {
                    options.ttl = ttlOrOptions === null || ttlOrOptions === void 0 ? void 0 : ttlOrOptions.ttl;
                    options.signal = ttlOrOptions === null || ttlOrOptions === void 0 ? void 0 : ttlOrOptions.signal;
                    options.attempts = ttlOrOptions === null || ttlOrOptions === void 0 ? void 0 : ttlOrOptions.attempts;
                  }
                  url = new URL(addPathToUrl(this.bridgeUrl, this.postPath));
                  url.searchParams.append('client_id', this.sessionId);
                  url.searchParams.append('to', receiver);
                  url.searchParams.append('ttl', ((options === null || options === void 0 ? void 0 : options.ttl) || this.defaultTtl).toString());
                  url.searchParams.append('topic', topic);
                  body = Base64.encode(message);
                  _context14.next = 10;
                  return callForSuccess(function (options) {
                    return __awaiter(_this19, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
                      var response;
                      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                        while (1) switch (_context13.prev = _context13.next) {
                          case 0:
                            _context13.next = 2;
                            return this.post(url, body, options.signal);
                          case 2:
                            response = _context13.sent;
                            if (response.ok) {
                              _context13.next = 5;
                              break;
                            }
                            throw new TonConnectError("Bridge send failed, status " + response.status);
                          case 5:
                          case "end":
                            return _context13.stop();
                        }
                      }, _callee13, this);
                    }));
                  }, {
                    attempts: (_a = options === null || options === void 0 ? void 0 : options.attempts) !== null && _a !== void 0 ? _a : Number.MAX_SAFE_INTEGER,
                    delayMs: this.defaultResendDelay,
                    signal: options === null || options === void 0 ? void 0 : options.signal
                  });
                case 10:
                case "end":
                  return _context14.stop();
              }
            }, _callee14, this);
          }));
        };
        _proto5.pause = function pause() {
          this.eventSource.dispose()["catch"](function (e) {
            return logError("Bridge pause failed, " + e);
          });
        };
        _proto5.unPause = function unPause() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
            var RECREATE_WITHOUT_DELAY;
            return _regeneratorRuntime().wrap(function _callee15$(_context15) {
              while (1) switch (_context15.prev = _context15.next) {
                case 0:
                  RECREATE_WITHOUT_DELAY = 0;
                  _context15.next = 3;
                  return this.eventSource.recreate(RECREATE_WITHOUT_DELAY);
                case 3:
                case "end":
                  return _context15.stop();
              }
            }, _callee15, this);
          }));
        };
        _proto5.close = function close() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
            return _regeneratorRuntime().wrap(function _callee16$(_context16) {
              while (1) switch (_context16.prev = _context16.next) {
                case 0:
                  _context16.next = 2;
                  return this.eventSource.dispose()["catch"](function (e) {
                    return logError("Bridge close failed, " + e);
                  });
                case 2:
                case "end":
                  return _context16.stop();
              }
            }, _callee16, this);
          }));
        };
        _proto5.setListener = function setListener(listener) {
          this.listener = listener;
        };
        _proto5.setErrorsListener = function setErrorsListener(errorsListener) {
          this.errorsListener = errorsListener;
        };
        _proto5.post = function post(url, body, signal) {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
            var response;
            return _regeneratorRuntime().wrap(function _callee17$(_context17) {
              while (1) switch (_context17.prev = _context17.next) {
                case 0:
                  _context17.next = 2;
                  return fetch(url, {
                    method: 'post',
                    body: body,
                    signal: signal
                  });
                case 2:
                  response = _context17.sent;
                  if (response.ok) {
                    _context17.next = 5;
                    break;
                  }
                  throw new TonConnectError("Bridge send failed, status " + response.status);
                case 5:
                  return _context17.abrupt("return", response);
                case 6:
                case "end":
                  return _context17.stop();
              }
            }, _callee17);
          }));
        };
        _proto5.errorsHandler = function errorsHandler(eventSource, e) {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
            return _regeneratorRuntime().wrap(function _callee18$(_context18) {
              while (1) switch (_context18.prev = _context18.next) {
                case 0:
                  if (!this.isConnecting) {
                    _context18.next = 3;
                    break;
                  }
                  eventSource.close();
                  throw new TonConnectError('Bridge error, failed to connect');
                case 3:
                  if (!this.isReady) {
                    _context18.next = 6;
                    break;
                  }
                  try {
                    this.errorsListener(e);
                  } catch (e) {}
                  return _context18.abrupt("return");
                case 6:
                  if (!this.isClosed) {
                    _context18.next = 12;
                    break;
                  }
                  eventSource.close();
                  logDebug("Bridge reconnecting, " + this.defaultReconnectDelay + "ms delay");
                  _context18.next = 11;
                  return this.eventSource.recreate(this.defaultReconnectDelay);
                case 11:
                  return _context18.abrupt("return", _context18.sent);
                case 12:
                  throw new TonConnectError('Bridge error, unknown state');
                case 13:
                case "end":
                  return _context18.stop();
              }
            }, _callee18, this);
          }));
        };
        _proto5.messagesHandler = function messagesHandler(e) {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
            var bridgeIncomingMessage;
            return _regeneratorRuntime().wrap(function _callee19$(_context19) {
              while (1) switch (_context19.prev = _context19.next) {
                case 0:
                  if (!(e.data === this.heartbeatMessage)) {
                    _context19.next = 2;
                    break;
                  }
                  return _context19.abrupt("return");
                case 2:
                  _context19.next = 4;
                  return this.bridgeGatewayStorage.storeLastEventId(e.lastEventId);
                case 4:
                  if (!this.isClosed) {
                    _context19.next = 6;
                    break;
                  }
                  return _context19.abrupt("return");
                case 6:
                  _context19.prev = 6;
                  bridgeIncomingMessage = JSON.parse(e.data);
                  _context19.next = 13;
                  break;
                case 10:
                  _context19.prev = 10;
                  _context19.t0 = _context19["catch"](6);
                  throw new TonConnectError("Bridge message parse failed, message " + _context19.t0.data);
                case 13:
                  this.listener(bridgeIncomingMessage);
                case 14:
                case "end":
                  return _context19.stop();
              }
            }, _callee19, this, [[6, 10]]);
          }));
        };
        _createClass(BridgeGateway, [{
          key: "isReady",
          get: function get() {
            var eventSource = this.eventSource.current();
            return (eventSource === null || eventSource === void 0 ? void 0 : eventSource.readyState) === EventSource.OPEN;
          }
        }, {
          key: "isClosed",
          get: function get() {
            var eventSource = this.eventSource.current();
            return (eventSource === null || eventSource === void 0 ? void 0 : eventSource.readyState) !== EventSource.OPEN;
          }
        }, {
          key: "isConnecting",
          get: function get() {
            var eventSource = this.eventSource.current();
            return (eventSource === null || eventSource === void 0 ? void 0 : eventSource.readyState) === EventSource.CONNECTING;
          }
        }]);
        return BridgeGateway;
      }();
      /**
       * Creates an event source.
       * @param {CreateEventSourceConfig} config - Configuration for creating an event source.
       */
      function createEventSource(config) {
        return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
          var _this20 = this;
          return _regeneratorRuntime().wrap(function _callee22$(_context22) {
            while (1) switch (_context22.prev = _context22.next) {
              case 0:
                _context22.next = 2;
                return timeout(function (resolve, reject, deferOptions) {
                  return __awaiter(_this20, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
                    var _this21 = this;
                    var _a, abortController, signal, url, lastEventId, eventSource;
                    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
                      while (1) switch (_context21.prev = _context21.next) {
                        case 0:
                          abortController = createAbortController(deferOptions.signal);
                          signal = abortController.signal;
                          if (!signal.aborted) {
                            _context21.next = 5;
                            break;
                          }
                          reject(new TonConnectError('Bridge connection aborted'));
                          return _context21.abrupt("return");
                        case 5:
                          url = new URL(addPathToUrl(config.bridgeUrl, config.ssePath));
                          url.searchParams.append('client_id', config.sessionId);
                          _context21.next = 9;
                          return config.bridgeGatewayStorage.getLastEventId();
                        case 9:
                          lastEventId = _context21.sent;
                          if (lastEventId) {
                            url.searchParams.append('last_event_id', lastEventId);
                          }
                          if (!signal.aborted) {
                            _context21.next = 14;
                            break;
                          }
                          reject(new TonConnectError('Bridge connection aborted'));
                          return _context21.abrupt("return");
                        case 14:
                          eventSource = new EventSource(url.toString());
                          eventSource.onerror = function (reason) {
                            return __awaiter(_this21, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
                              var newInstance;
                              return _regeneratorRuntime().wrap(function _callee20$(_context20) {
                                while (1) switch (_context20.prev = _context20.next) {
                                  case 0:
                                    if (!signal.aborted) {
                                      _context20.next = 4;
                                      break;
                                    }
                                    eventSource.close();
                                    reject(new TonConnectError('Bridge connection aborted'));
                                    return _context20.abrupt("return");
                                  case 4:
                                    _context20.prev = 4;
                                    _context20.next = 7;
                                    return config.errorHandler(eventSource, reason);
                                  case 7:
                                    newInstance = _context20.sent;
                                    if (newInstance !== eventSource) {
                                      eventSource.close();
                                    }
                                    if (newInstance && newInstance !== eventSource) {
                                      resolve(newInstance);
                                    }
                                    _context20.next = 16;
                                    break;
                                  case 12:
                                    _context20.prev = 12;
                                    _context20.t0 = _context20["catch"](4);
                                    eventSource.close();
                                    reject(_context20.t0);
                                  case 16:
                                  case "end":
                                    return _context20.stop();
                                }
                              }, _callee20, null, [[4, 12]]);
                            }));
                          };
                          eventSource.onopen = function () {
                            if (signal.aborted) {
                              eventSource.close();
                              reject(new TonConnectError('Bridge connection aborted'));
                              return;
                            }
                            resolve(eventSource);
                          };
                          eventSource.onmessage = function (event) {
                            if (signal.aborted) {
                              eventSource.close();
                              reject(new TonConnectError('Bridge connection aborted'));
                              return;
                            }
                            config.messageHandler(event);
                          };
                          (_a = config.signal) === null || _a === void 0 ? void 0 : _a.addEventListener('abort', function () {
                            eventSource.close();
                            reject(new TonConnectError('Bridge connection aborted'));
                          });
                        case 19:
                        case "end":
                          return _context21.stop();
                      }
                    }, _callee21);
                  }));
                }, {
                  timeout: config.openingDeadlineMS,
                  signal: config.signal
                });
              case 2:
                return _context22.abrupt("return", _context22.sent);
              case 3:
              case "end":
                return _context22.stop();
            }
          }, _callee22);
        }));
      }
      function isPendingConnectionHttp(connection) {
        return !('connectEvent' in connection);
      }
      var BridgeConnectionStorage = /*#__PURE__*/function () {
        function BridgeConnectionStorage(storage) {
          this.storage = storage;
          this.storeKey = 'ton-connect-storage_bridge-connection';
        }
        var _proto6 = BridgeConnectionStorage.prototype;
        _proto6.storeConnection = function storeConnection(connection) {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
            var rawSession, _rawConnection, rawConnection;
            return _regeneratorRuntime().wrap(function _callee23$(_context23) {
              while (1) switch (_context23.prev = _context23.next) {
                case 0:
                  if (!(connection.type === 'injected')) {
                    _context23.next = 2;
                    break;
                  }
                  return _context23.abrupt("return", this.storage.setItem(this.storeKey, JSON.stringify(connection)));
                case 2:
                  if (isPendingConnectionHttp(connection)) {
                    _context23.next = 6;
                    break;
                  }
                  rawSession = {
                    sessionKeyPair: connection.session.sessionCrypto.stringifyKeypair(),
                    walletPublicKey: connection.session.walletPublicKey,
                    bridgeUrl: connection.session.bridgeUrl
                  };
                  _rawConnection = {
                    type: 'http',
                    connectEvent: connection.connectEvent,
                    session: rawSession,
                    lastWalletEventId: connection.lastWalletEventId,
                    nextRpcRequestId: connection.nextRpcRequestId
                  };
                  return _context23.abrupt("return", this.storage.setItem(this.storeKey, JSON.stringify(_rawConnection)));
                case 6:
                  rawConnection = {
                    type: 'http',
                    connectionSource: connection.connectionSource,
                    sessionCrypto: connection.sessionCrypto.stringifyKeypair()
                  };
                  return _context23.abrupt("return", this.storage.setItem(this.storeKey, JSON.stringify(rawConnection)));
                case 8:
                case "end":
                  return _context23.stop();
              }
            }, _callee23, this);
          }));
        };
        _proto6.removeConnection = function removeConnection() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee24() {
            return _regeneratorRuntime().wrap(function _callee24$(_context24) {
              while (1) switch (_context24.prev = _context24.next) {
                case 0:
                  return _context24.abrupt("return", this.storage.removeItem(this.storeKey));
                case 1:
                case "end":
                  return _context24.stop();
              }
            }, _callee24, this);
          }));
        };
        _proto6.getConnection = function getConnection() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee25() {
            var stored, connection, sessionCrypto;
            return _regeneratorRuntime().wrap(function _callee25$(_context25) {
              while (1) switch (_context25.prev = _context25.next) {
                case 0:
                  _context25.next = 2;
                  return this.storage.getItem(this.storeKey);
                case 2:
                  stored = _context25.sent;
                  if (stored) {
                    _context25.next = 5;
                    break;
                  }
                  return _context25.abrupt("return", null);
                case 5:
                  connection = JSON.parse(stored);
                  if (!(connection.type === 'injected')) {
                    _context25.next = 8;
                    break;
                  }
                  return _context25.abrupt("return", connection);
                case 8:
                  if (!('connectEvent' in connection)) {
                    _context25.next = 11;
                    break;
                  }
                  sessionCrypto = new SessionCrypto(connection.session.sessionKeyPair);
                  return _context25.abrupt("return", {
                    type: 'http',
                    connectEvent: connection.connectEvent,
                    lastWalletEventId: connection.lastWalletEventId,
                    nextRpcRequestId: connection.nextRpcRequestId,
                    session: {
                      sessionCrypto: sessionCrypto,
                      bridgeUrl: connection.session.bridgeUrl,
                      walletPublicKey: connection.session.walletPublicKey
                    }
                  });
                case 11:
                  return _context25.abrupt("return", {
                    type: 'http',
                    sessionCrypto: new SessionCrypto(connection.sessionCrypto),
                    connectionSource: connection.connectionSource
                  });
                case 12:
                case "end":
                  return _context25.stop();
              }
            }, _callee25, this);
          }));
        };
        _proto6.getHttpConnection = function getHttpConnection() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee26() {
            var connection;
            return _regeneratorRuntime().wrap(function _callee26$(_context26) {
              while (1) switch (_context26.prev = _context26.next) {
                case 0:
                  _context26.next = 2;
                  return this.getConnection();
                case 2:
                  connection = _context26.sent;
                  if (connection) {
                    _context26.next = 5;
                    break;
                  }
                  throw new TonConnectError('Trying to read HTTP connection source while nothing is stored');
                case 5:
                  if (!(connection.type === 'injected')) {
                    _context26.next = 7;
                    break;
                  }
                  throw new TonConnectError('Trying to read HTTP connection source while injected connection is stored');
                case 7:
                  return _context26.abrupt("return", connection);
                case 8:
                case "end":
                  return _context26.stop();
              }
            }, _callee26, this);
          }));
        };
        _proto6.getHttpPendingConnection = function getHttpPendingConnection() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee27() {
            var connection;
            return _regeneratorRuntime().wrap(function _callee27$(_context27) {
              while (1) switch (_context27.prev = _context27.next) {
                case 0:
                  _context27.next = 2;
                  return this.getConnection();
                case 2:
                  connection = _context27.sent;
                  if (connection) {
                    _context27.next = 5;
                    break;
                  }
                  throw new TonConnectError('Trying to read HTTP connection source while nothing is stored');
                case 5:
                  if (!(connection.type === 'injected')) {
                    _context27.next = 7;
                    break;
                  }
                  throw new TonConnectError('Trying to read HTTP connection source while injected connection is stored');
                case 7:
                  if (isPendingConnectionHttp(connection)) {
                    _context27.next = 9;
                    break;
                  }
                  throw new TonConnectError('Trying to read HTTP-pending connection while http connection is stored');
                case 9:
                  return _context27.abrupt("return", connection);
                case 10:
                case "end":
                  return _context27.stop();
              }
            }, _callee27, this);
          }));
        };
        _proto6.getInjectedConnection = function getInjectedConnection() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee28() {
            var connection;
            return _regeneratorRuntime().wrap(function _callee28$(_context28) {
              while (1) switch (_context28.prev = _context28.next) {
                case 0:
                  _context28.next = 2;
                  return this.getConnection();
                case 2:
                  connection = _context28.sent;
                  if (connection) {
                    _context28.next = 5;
                    break;
                  }
                  throw new TonConnectError('Trying to read Injected bridge connection source while nothing is stored');
                case 5:
                  if (!((connection === null || connection === void 0 ? void 0 : connection.type) === 'http')) {
                    _context28.next = 7;
                    break;
                  }
                  throw new TonConnectError('Trying to read Injected bridge connection source while HTTP connection is stored');
                case 7:
                  return _context28.abrupt("return", connection);
                case 8:
                case "end":
                  return _context28.stop();
              }
            }, _callee28, this);
          }));
        };
        _proto6.storedConnectionType = function storedConnectionType() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee29() {
            var stored, connection;
            return _regeneratorRuntime().wrap(function _callee29$(_context29) {
              while (1) switch (_context29.prev = _context29.next) {
                case 0:
                  _context29.next = 2;
                  return this.storage.getItem(this.storeKey);
                case 2:
                  stored = _context29.sent;
                  if (stored) {
                    _context29.next = 5;
                    break;
                  }
                  return _context29.abrupt("return", null);
                case 5:
                  connection = JSON.parse(stored);
                  return _context29.abrupt("return", connection.type);
                case 7:
                case "end":
                  return _context29.stop();
              }
            }, _callee29, this);
          }));
        };
        _proto6.storeLastWalletEventId = function storeLastWalletEventId(id) {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee30() {
            var connection;
            return _regeneratorRuntime().wrap(function _callee30$(_context30) {
              while (1) switch (_context30.prev = _context30.next) {
                case 0:
                  _context30.next = 2;
                  return this.getConnection();
                case 2:
                  connection = _context30.sent;
                  if (!(connection && connection.type === 'http' && !isPendingConnectionHttp(connection))) {
                    _context30.next = 6;
                    break;
                  }
                  connection.lastWalletEventId = id;
                  return _context30.abrupt("return", this.storeConnection(connection));
                case 6:
                case "end":
                  return _context30.stop();
              }
            }, _callee30, this);
          }));
        };
        _proto6.getLastWalletEventId = function getLastWalletEventId() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee31() {
            var connection;
            return _regeneratorRuntime().wrap(function _callee31$(_context31) {
              while (1) switch (_context31.prev = _context31.next) {
                case 0:
                  _context31.next = 2;
                  return this.getConnection();
                case 2:
                  connection = _context31.sent;
                  if (!(connection && 'lastWalletEventId' in connection)) {
                    _context31.next = 5;
                    break;
                  }
                  return _context31.abrupt("return", connection.lastWalletEventId);
                case 5:
                  return _context31.abrupt("return", undefined);
                case 6:
                case "end":
                  return _context31.stop();
              }
            }, _callee31, this);
          }));
        };
        _proto6.increaseNextRpcRequestId = function increaseNextRpcRequestId() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee32() {
            var connection, lastId;
            return _regeneratorRuntime().wrap(function _callee32$(_context32) {
              while (1) switch (_context32.prev = _context32.next) {
                case 0:
                  _context32.next = 2;
                  return this.getConnection();
                case 2:
                  connection = _context32.sent;
                  if (!(connection && 'nextRpcRequestId' in connection)) {
                    _context32.next = 7;
                    break;
                  }
                  lastId = connection.nextRpcRequestId || 0;
                  connection.nextRpcRequestId = lastId + 1;
                  return _context32.abrupt("return", this.storeConnection(connection));
                case 7:
                case "end":
                  return _context32.stop();
              }
            }, _callee32, this);
          }));
        };
        _proto6.getNextRpcRequestId = function getNextRpcRequestId() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee33() {
            var connection;
            return _regeneratorRuntime().wrap(function _callee33$(_context33) {
              while (1) switch (_context33.prev = _context33.next) {
                case 0:
                  _context33.next = 2;
                  return this.getConnection();
                case 2:
                  connection = _context33.sent;
                  if (!(connection && 'nextRpcRequestId' in connection)) {
                    _context33.next = 5;
                    break;
                  }
                  return _context33.abrupt("return", connection.nextRpcRequestId || 0);
                case 5:
                  return _context33.abrupt("return", 0);
                case 6:
                case "end":
                  return _context33.stop();
              }
            }, _callee33, this);
          }));
        };
        return BridgeConnectionStorage;
      }();
      var PROTOCOL_VERSION = 2;
      var BridgeProvider = /*#__PURE__*/function () {
        function BridgeProvider(storage, walletConnectionSource) {
          this.storage = storage;
          this.walletConnectionSource = walletConnectionSource;
          this.type = 'http';
          this.standardUniversalLink = 'tc://';
          this.pendingRequests = new Map();
          this.session = null;
          this.gateway = null;
          this.pendingGateways = [];
          this.listeners = [];
          this.defaultOpeningDeadlineMS = 12000;
          this.defaultRetryTimeoutMS = 2000;
          this.connectionStorage = new BridgeConnectionStorage(storage);
        }
        BridgeProvider.fromStorage = function fromStorage(storage) {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee34() {
            var bridgeConnectionStorage, connection;
            return _regeneratorRuntime().wrap(function _callee34$(_context34) {
              while (1) switch (_context34.prev = _context34.next) {
                case 0:
                  bridgeConnectionStorage = new BridgeConnectionStorage(storage);
                  _context34.next = 3;
                  return bridgeConnectionStorage.getHttpConnection();
                case 3:
                  connection = _context34.sent;
                  if (!isPendingConnectionHttp(connection)) {
                    _context34.next = 6;
                    break;
                  }
                  return _context34.abrupt("return", new BridgeProvider(storage, connection.connectionSource));
                case 6:
                  return _context34.abrupt("return", new BridgeProvider(storage, {
                    bridgeUrl: connection.session.bridgeUrl
                  }));
                case 7:
                case "end":
                  return _context34.stop();
              }
            }, _callee34);
          }));
        };
        var _proto7 = BridgeProvider.prototype;
        _proto7.connect = function connect(message, options) {
          var _this22 = this;
          var _a;
          var abortController = createAbortController(options === null || options === void 0 ? void 0 : options.signal);
          (_a = this.abortController) === null || _a === void 0 ? void 0 : _a.abort();
          this.abortController = abortController;
          this.closeGateways();
          var sessionCrypto = new SessionCrypto();
          this.session = {
            sessionCrypto: sessionCrypto,
            bridgeUrl: 'bridgeUrl' in this.walletConnectionSource ? this.walletConnectionSource.bridgeUrl : ''
          };
          this.connectionStorage.storeConnection({
            type: 'http',
            connectionSource: this.walletConnectionSource,
            sessionCrypto: sessionCrypto
          }).then(function () {
            return __awaiter(_this22, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee35() {
              var _this23 = this;
              return _regeneratorRuntime().wrap(function _callee35$(_context35) {
                while (1) switch (_context35.prev = _context35.next) {
                  case 0:
                    if (!abortController.signal.aborted) {
                      _context35.next = 2;
                      break;
                    }
                    return _context35.abrupt("return");
                  case 2:
                    _context35.next = 4;
                    return callForSuccess(function (_options) {
                      var _a;
                      return _this23.openGateways(sessionCrypto, {
                        openingDeadlineMS: (_a = options === null || options === void 0 ? void 0 : options.openingDeadlineMS) !== null && _a !== void 0 ? _a : _this23.defaultOpeningDeadlineMS,
                        signal: _options === null || _options === void 0 ? void 0 : _options.signal
                      });
                    }, {
                      attempts: Number.MAX_SAFE_INTEGER,
                      delayMs: this.defaultRetryTimeoutMS,
                      signal: abortController.signal
                    });
                  case 4:
                  case "end":
                    return _context35.stop();
                }
              }, _callee35, this);
            }));
          });
          var universalLink = 'universalLink' in this.walletConnectionSource && this.walletConnectionSource.universalLink ? this.walletConnectionSource.universalLink : this.standardUniversalLink;
          return this.generateUniversalLink(universalLink, message);
        };
        _proto7.restoreConnection = function restoreConnection(options) {
          var _a, _b;
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee36() {
            var _this24 = this;
            var abortController, storedConnection, openingDeadlineMS;
            return _regeneratorRuntime().wrap(function _callee36$(_context36) {
              while (1) switch (_context36.prev = _context36.next) {
                case 0:
                  abortController = createAbortController(options === null || options === void 0 ? void 0 : options.signal);
                  (_a = this.abortController) === null || _a === void 0 ? void 0 : _a.abort();
                  this.abortController = abortController;
                  if (!abortController.signal.aborted) {
                    _context36.next = 5;
                    break;
                  }
                  return _context36.abrupt("return");
                case 5:
                  this.closeGateways();
                  _context36.next = 8;
                  return this.connectionStorage.getHttpConnection();
                case 8:
                  storedConnection = _context36.sent;
                  if (storedConnection) {
                    _context36.next = 11;
                    break;
                  }
                  return _context36.abrupt("return");
                case 11:
                  if (!abortController.signal.aborted) {
                    _context36.next = 13;
                    break;
                  }
                  return _context36.abrupt("return");
                case 13:
                  openingDeadlineMS = (_b = options === null || options === void 0 ? void 0 : options.openingDeadlineMS) !== null && _b !== void 0 ? _b : this.defaultOpeningDeadlineMS;
                  if (!isPendingConnectionHttp(storedConnection)) {
                    _context36.next = 19;
                    break;
                  }
                  this.session = {
                    sessionCrypto: storedConnection.sessionCrypto,
                    bridgeUrl: 'bridgeUrl' in this.walletConnectionSource ? this.walletConnectionSource.bridgeUrl : ''
                  };
                  _context36.next = 18;
                  return this.openGateways(storedConnection.sessionCrypto, {
                    openingDeadlineMS: openingDeadlineMS,
                    signal: abortController === null || abortController === void 0 ? void 0 : abortController.signal
                  });
                case 18:
                  return _context36.abrupt("return", _context36.sent);
                case 19:
                  if (!Array.isArray(this.walletConnectionSource)) {
                    _context36.next = 21;
                    break;
                  }
                  throw new TonConnectError('Internal error. Connection source is array while WalletConnectionSourceHTTP was expected.');
                case 21:
                  this.session = storedConnection.session;
                  if (!this.gateway) {
                    _context36.next = 26;
                    break;
                  }
                  logDebug('Gateway is already opened, closing previous gateway');
                  _context36.next = 26;
                  return this.gateway.close();
                case 26:
                  this.gateway = new BridgeGateway(this.storage, this.walletConnectionSource.bridgeUrl, storedConnection.session.sessionCrypto.sessionId, this.gatewayListener.bind(this), this.gatewayErrorsListener.bind(this));
                  if (!abortController.signal.aborted) {
                    _context36.next = 29;
                    break;
                  }
                  return _context36.abrupt("return");
                case 29:
                  // notify listeners about stored connection
                  this.listeners.forEach(function (listener) {
                    return listener(storedConnection.connectEvent);
                  });
                  // wait for the connection to be opened
                  _context36.prev = 30;
                  _context36.next = 33;
                  return callForSuccess(function (options) {
                    return _this24.gateway.registerSession({
                      openingDeadlineMS: openingDeadlineMS,
                      signal: options.signal
                    });
                  }, {
                    attempts: Number.MAX_SAFE_INTEGER,
                    delayMs: this.defaultRetryTimeoutMS,
                    signal: abortController.signal
                  });
                case 33:
                  _context36.next = 40;
                  break;
                case 35:
                  _context36.prev = 35;
                  _context36.t0 = _context36["catch"](30);
                  _context36.next = 39;
                  return this.disconnect({
                    signal: abortController.signal
                  });
                case 39:
                  return _context36.abrupt("return");
                case 40:
                case "end":
                  return _context36.stop();
              }
            }, _callee36, this, [[30, 35]]);
          }));
        };
        _proto7.sendRequest = function sendRequest(request, optionsOrOnRequestSent) {
          var _this25 = this;
          // TODO: remove deprecated method
          var options = {};
          if (typeof optionsOrOnRequestSent === 'function') {
            options.onRequestSent = optionsOrOnRequestSent;
          } else {
            options.onRequestSent = optionsOrOnRequestSent === null || optionsOrOnRequestSent === void 0 ? void 0 : optionsOrOnRequestSent.onRequestSent;
            options.signal = optionsOrOnRequestSent === null || optionsOrOnRequestSent === void 0 ? void 0 : optionsOrOnRequestSent.signal;
            options.attempts = optionsOrOnRequestSent === null || optionsOrOnRequestSent === void 0 ? void 0 : optionsOrOnRequestSent.attempts;
          }
          return new Promise(function (resolve, reject) {
            return __awaiter(_this25, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee37() {
              var _a, id, encodedRequest;
              return _regeneratorRuntime().wrap(function _callee37$(_context37) {
                while (1) switch (_context37.prev = _context37.next) {
                  case 0:
                    if (!(!this.gateway || !this.session || !('walletPublicKey' in this.session))) {
                      _context37.next = 2;
                      break;
                    }
                    throw new TonConnectError('Trying to send bridge request without session');
                  case 2:
                    _context37.next = 4;
                    return this.connectionStorage.getNextRpcRequestId();
                  case 4:
                    id = _context37.sent.toString();
                    _context37.next = 7;
                    return this.connectionStorage.increaseNextRpcRequestId();
                  case 7:
                    logDebug('Send http-bridge request:', Object.assign(Object.assign({}, request), {
                      id: id
                    }));
                    encodedRequest = this.session.sessionCrypto.encrypt(JSON.stringify(Object.assign(Object.assign({}, request), {
                      id: id
                    })), hexToByteArray(this.session.walletPublicKey));
                    _context37.prev = 9;
                    _context37.next = 12;
                    return this.gateway.send(encodedRequest, this.session.walletPublicKey, request.method, {
                      attempts: options === null || options === void 0 ? void 0 : options.attempts,
                      signal: options === null || options === void 0 ? void 0 : options.signal
                    });
                  case 12:
                    (_a = options === null || options === void 0 ? void 0 : options.onRequestSent) === null || _a === void 0 ? void 0 : _a.call(options);
                    this.pendingRequests.set(id.toString(), resolve);
                    _context37.next = 19;
                    break;
                  case 16:
                    _context37.prev = 16;
                    _context37.t0 = _context37["catch"](9);
                    reject(_context37.t0);
                  case 19:
                  case "end":
                    return _context37.stop();
                }
              }, _callee37, this, [[9, 16]]);
            }));
          });
        };
        _proto7.closeConnection = function closeConnection() {
          this.closeGateways();
          this.listeners = [];
          this.session = null;
          this.gateway = null;
        };
        _proto7.disconnect = function disconnect(options) {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee39() {
            var _this26 = this;
            return _regeneratorRuntime().wrap(function _callee39$(_context39) {
              while (1) switch (_context39.prev = _context39.next) {
                case 0:
                  return _context39.abrupt("return", new Promise(function (resolve) {
                    return __awaiter(_this26, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee38() {
                      var _this27 = this;
                      var called, timeoutId, onRequestSent, abortController;
                      return _regeneratorRuntime().wrap(function _callee38$(_context38) {
                        while (1) switch (_context38.prev = _context38.next) {
                          case 0:
                            called = false;
                            timeoutId = null;
                            onRequestSent = function onRequestSent() {
                              if (!called) {
                                called = true;
                                _this27.removeBridgeAndSession().then(resolve);
                              }
                            };
                            _context38.prev = 3;
                            this.closeGateways();
                            abortController = createAbortController(options === null || options === void 0 ? void 0 : options.signal);
                            timeoutId = setTimeout(function () {
                              abortController.abort();
                            }, this.defaultOpeningDeadlineMS);
                            _context38.next = 9;
                            return this.sendRequest({
                              method: 'disconnect',
                              params: []
                            }, {
                              onRequestSent: onRequestSent,
                              signal: abortController.signal,
                              attempts: 1
                            });
                          case 9:
                            _context38.next = 15;
                            break;
                          case 11:
                            _context38.prev = 11;
                            _context38.t0 = _context38["catch"](3);
                            logDebug('Disconnect error:', _context38.t0);
                            if (!called) {
                              this.removeBridgeAndSession().then(resolve);
                            }
                          case 15:
                            _context38.prev = 15;
                            if (timeoutId) {
                              clearTimeout(timeoutId);
                            }
                            onRequestSent();
                            return _context38.finish(15);
                          case 19:
                          case "end":
                            return _context38.stop();
                        }
                      }, _callee38, this, [[3, 11, 15, 19]]);
                    }));
                  }));
                case 1:
                case "end":
                  return _context39.stop();
              }
            }, _callee39);
          }));
        };
        _proto7.listen = function listen(callback) {
          var _this28 = this;
          this.listeners.push(callback);
          return function () {
            return _this28.listeners = _this28.listeners.filter(function (listener) {
              return listener !== callback;
            });
          };
        };
        _proto7.pause = function pause() {
          var _a;
          (_a = this.gateway) === null || _a === void 0 ? void 0 : _a.pause();
          this.pendingGateways.forEach(function (bridge) {
            return bridge.pause();
          });
        };
        _proto7.unPause = function unPause() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee40() {
            var promises;
            return _regeneratorRuntime().wrap(function _callee40$(_context40) {
              while (1) switch (_context40.prev = _context40.next) {
                case 0:
                  promises = this.pendingGateways.map(function (bridge) {
                    return bridge.unPause();
                  });
                  if (this.gateway) {
                    promises.push(this.gateway.unPause());
                  }
                  _context40.next = 4;
                  return Promise.all(promises);
                case 4:
                case "end":
                  return _context40.stop();
              }
            }, _callee40, this);
          }));
        };
        _proto7.pendingGatewaysListener = function pendingGatewaysListener(gateway, bridgeUrl, bridgeIncomingMessage) {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee41() {
            return _regeneratorRuntime().wrap(function _callee41$(_context41) {
              while (1) switch (_context41.prev = _context41.next) {
                case 0:
                  if (this.pendingGateways.includes(gateway)) {
                    _context41.next = 4;
                    break;
                  }
                  _context41.next = 3;
                  return gateway.close();
                case 3:
                  return _context41.abrupt("return");
                case 4:
                  this.closeGateways({
                    except: gateway
                  });
                  if (!this.gateway) {
                    _context41.next = 9;
                    break;
                  }
                  logDebug('Gateway is already opened, closing previous gateway');
                  _context41.next = 9;
                  return this.gateway.close();
                case 9:
                  this.session.bridgeUrl = bridgeUrl;
                  this.gateway = gateway;
                  this.gateway.setErrorsListener(this.gatewayErrorsListener.bind(this));
                  this.gateway.setListener(this.gatewayListener.bind(this));
                  return _context41.abrupt("return", this.gatewayListener(bridgeIncomingMessage));
                case 14:
                case "end":
                  return _context41.stop();
              }
            }, _callee41, this);
          }));
        };
        _proto7.gatewayListener = function gatewayListener(bridgeIncomingMessage) {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee42() {
            var walletMessage, id, resolve, lastId, listeners;
            return _regeneratorRuntime().wrap(function _callee42$(_context42) {
              while (1) switch (_context42.prev = _context42.next) {
                case 0:
                  walletMessage = JSON.parse(this.session.sessionCrypto.decrypt(Base64.decode(bridgeIncomingMessage.message).toUint8Array(), hexToByteArray(bridgeIncomingMessage.from)));
                  logDebug('Wallet message received:', walletMessage);
                  if ('event' in walletMessage) {
                    _context42.next = 11;
                    break;
                  }
                  id = walletMessage.id.toString();
                  resolve = this.pendingRequests.get(id);
                  if (resolve) {
                    _context42.next = 8;
                    break;
                  }
                  logDebug("Response id " + id + " doesn't match any request's id");
                  return _context42.abrupt("return");
                case 8:
                  resolve(walletMessage);
                  this.pendingRequests["delete"](id);
                  return _context42.abrupt("return");
                case 11:
                  if (!(walletMessage.id !== undefined)) {
                    _context42.next = 21;
                    break;
                  }
                  _context42.next = 14;
                  return this.connectionStorage.getLastWalletEventId();
                case 14:
                  lastId = _context42.sent;
                  if (!(lastId !== undefined && walletMessage.id <= lastId)) {
                    _context42.next = 18;
                    break;
                  }
                  logError("Received event id (=" + walletMessage.id + ") must be greater than stored last wallet event id (=" + lastId + ") ");
                  return _context42.abrupt("return");
                case 18:
                  if (!(walletMessage.event !== 'connect')) {
                    _context42.next = 21;
                    break;
                  }
                  _context42.next = 21;
                  return this.connectionStorage.storeLastWalletEventId(walletMessage.id);
                case 21:
                  // `this.listeners` might be modified in the event handler
                  listeners = this.listeners;
                  if (!(walletMessage.event === 'connect')) {
                    _context42.next = 25;
                    break;
                  }
                  _context42.next = 25;
                  return this.updateSession(walletMessage, bridgeIncomingMessage.from);
                case 25:
                  if (!(walletMessage.event === 'disconnect')) {
                    _context42.next = 29;
                    break;
                  }
                  logDebug("Removing bridge and session: received disconnect event");
                  _context42.next = 29;
                  return this.removeBridgeAndSession();
                case 29:
                  listeners.forEach(function (listener) {
                    return listener(walletMessage);
                  });
                case 30:
                case "end":
                  return _context42.stop();
              }
            }, _callee42, this);
          }));
        };
        _proto7.gatewayErrorsListener = function gatewayErrorsListener(e) {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee43() {
            return _regeneratorRuntime().wrap(function _callee43$(_context43) {
              while (1) switch (_context43.prev = _context43.next) {
                case 0:
                  throw new TonConnectError("Bridge error " + JSON.stringify(e));
                case 1:
                case "end":
                  return _context43.stop();
              }
            }, _callee43);
          }));
        };
        _proto7.updateSession = function updateSession(connectEvent, walletPublicKey) {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee44() {
            var tonAddrItem, connectEventToSave;
            return _regeneratorRuntime().wrap(function _callee44$(_context44) {
              while (1) switch (_context44.prev = _context44.next) {
                case 0:
                  this.session = Object.assign(Object.assign({}, this.session), {
                    walletPublicKey: walletPublicKey
                  });
                  tonAddrItem = connectEvent.payload.items.find(function (item) {
                    return item.name === 'ton_addr';
                  });
                  connectEventToSave = Object.assign(Object.assign({}, connectEvent), {
                    payload: Object.assign(Object.assign({}, connectEvent.payload), {
                      items: [tonAddrItem]
                    })
                  });
                  _context44.next = 5;
                  return this.connectionStorage.storeConnection({
                    type: 'http',
                    session: this.session,
                    lastWalletEventId: connectEvent.id,
                    connectEvent: connectEventToSave,
                    nextRpcRequestId: 0
                  });
                case 5:
                case "end":
                  return _context44.stop();
              }
            }, _callee44, this);
          }));
        };
        _proto7.removeBridgeAndSession = function removeBridgeAndSession() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee45() {
            return _regeneratorRuntime().wrap(function _callee45$(_context45) {
              while (1) switch (_context45.prev = _context45.next) {
                case 0:
                  this.closeConnection();
                  _context45.next = 3;
                  return this.connectionStorage.removeConnection();
                case 3:
                case "end":
                  return _context45.stop();
              }
            }, _callee45, this);
          }));
        };
        _proto7.generateUniversalLink = function generateUniversalLink(universalLink, message) {
          if (isTelegramUrl(universalLink)) {
            return this.generateTGUniversalLink(universalLink, message);
          }
          return this.generateRegularUniversalLink(universalLink, message);
        };
        _proto7.generateRegularUniversalLink = function generateRegularUniversalLink(universalLink, message) {
          var url = new URL(universalLink);
          url.searchParams.append('v', PROTOCOL_VERSION.toString());
          url.searchParams.append('id', this.session.sessionCrypto.sessionId);
          url.searchParams.append('r', JSON.stringify(message));
          return url.toString();
        };
        _proto7.generateTGUniversalLink = function generateTGUniversalLink(universalLink, message) {
          var urlToWrap = this.generateRegularUniversalLink('about:blank', message);
          var linkParams = urlToWrap.split('?')[1];
          var startapp = 'tonconnect-' + encodeTelegramUrlParameters(linkParams);
          // TODO: Remove this line after all dApps and the wallets-list.json have been updated
          var updatedUniversalLink = this.convertToDirectLink(universalLink);
          var url = new URL(updatedUniversalLink);
          url.searchParams.append('startapp', startapp);
          return url.toString();
        }
        // TODO: Remove this method after all dApps and the wallets-list.json have been updated
        ;

        _proto7.convertToDirectLink = function convertToDirectLink(universalLink) {
          var url = new URL(universalLink);
          if (url.searchParams.has('attach')) {
            url.searchParams["delete"]('attach');
            url.pathname += '/start';
          }
          return url.toString();
        };
        _proto7.openGateways = function openGateways(sessionCrypto, options) {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee46() {
            var _this29 = this;
            return _regeneratorRuntime().wrap(function _callee46$(_context46) {
              while (1) switch (_context46.prev = _context46.next) {
                case 0:
                  if (!Array.isArray(this.walletConnectionSource)) {
                    _context46.next = 8;
                    break;
                  }
                  // close all gateways before opening new ones
                  this.pendingGateways.map(function (bridge) {
                    return bridge.close()["catch"]();
                  });
                  // open new gateways
                  this.pendingGateways = this.walletConnectionSource.map(function (source) {
                    var gateway = new BridgeGateway(_this29.storage, source.bridgeUrl, sessionCrypto.sessionId, function () {}, function () {});
                    gateway.setListener(function (message) {
                      return _this29.pendingGatewaysListener(gateway, source.bridgeUrl, message);
                    });
                    return gateway;
                  });
                  _context46.next = 5;
                  return Promise.allSettled(this.pendingGateways.map(function (bridge) {
                    return callForSuccess(function (_options) {
                      var _a;
                      if (!_this29.pendingGateways.some(function (item) {
                        return item === bridge;
                      })) {
                        return bridge.close();
                      }
                      return bridge.registerSession({
                        openingDeadlineMS: (_a = options === null || options === void 0 ? void 0 : options.openingDeadlineMS) !== null && _a !== void 0 ? _a : _this29.defaultOpeningDeadlineMS,
                        signal: _options.signal
                      });
                    }, {
                      attempts: Number.MAX_SAFE_INTEGER,
                      delayMs: _this29.defaultRetryTimeoutMS,
                      signal: options === null || options === void 0 ? void 0 : options.signal
                    });
                  }));
                case 5:
                  return _context46.abrupt("return");
                case 8:
                  if (!this.gateway) {
                    _context46.next = 12;
                    break;
                  }
                  logDebug("Gateway is already opened, closing previous gateway");
                  _context46.next = 12;
                  return this.gateway.close();
                case 12:
                  this.gateway = new BridgeGateway(this.storage, this.walletConnectionSource.bridgeUrl, sessionCrypto.sessionId, this.gatewayListener.bind(this), this.gatewayErrorsListener.bind(this));
                  _context46.next = 15;
                  return this.gateway.registerSession({
                    openingDeadlineMS: options === null || options === void 0 ? void 0 : options.openingDeadlineMS,
                    signal: options === null || options === void 0 ? void 0 : options.signal
                  });
                case 15:
                  return _context46.abrupt("return", _context46.sent);
                case 16:
                case "end":
                  return _context46.stop();
              }
            }, _callee46, this);
          }));
        };
        _proto7.closeGateways = function closeGateways(options) {
          var _a;
          (_a = this.gateway) === null || _a === void 0 ? void 0 : _a.close();
          this.pendingGateways.filter(function (item) {
            return item !== (options === null || options === void 0 ? void 0 : options.except);
          }).forEach(function (bridge) {
            return bridge.close();
          });
          this.pendingGateways = [];
        };
        return BridgeProvider;
      }();
      function hasProperty(value, propertyKey) {
        return hasProperties(value, [propertyKey]);
      }
      function hasProperties(value, propertyKeys) {
        if (!value || typeof value !== 'object') {
          return false;
        }
        return propertyKeys.every(function (propertyKey) {
          return propertyKey in value;
        });
      }
      function isJSBridgeWithMetadata(value) {
        try {
          if (!hasProperty(value, 'tonconnect') || !hasProperty(value.tonconnect, 'walletInfo')) {
            return false;
          }
          return hasProperties(value.tonconnect.walletInfo, ['name', 'app_name', 'image', 'about_url', 'platforms']);
        } catch (_a) {
          return false;
        }
      }

      /**
       * In memory storage like localStorage, but without persistence.
       * Uses as a fallback for localStorage in Safari's private mode.
       */
      var InMemoryStorage = /*#__PURE__*/function () {
        function InMemoryStorage() {
          this.storage = {};
        }
        InMemoryStorage.getInstance = function getInstance() {
          if (!InMemoryStorage.instance) {
            InMemoryStorage.instance = new InMemoryStorage();
          }
          return InMemoryStorage.instance;
        };
        var _proto8 = InMemoryStorage.prototype;
        _proto8.clear = function clear() {
          this.storage = {};
        };
        _proto8.getItem = function getItem(key) {
          var _a;
          return (_a = this.storage[key]) !== null && _a !== void 0 ? _a : null;
        };
        _proto8.key = function key(index) {
          var _a;
          var keys = Object.keys(this.storage);
          if (index < 0 || index >= keys.length) {
            return null;
          }
          return (_a = keys[index]) !== null && _a !== void 0 ? _a : null;
        };
        _proto8.removeItem = function removeItem(key) {
          delete this.storage[key];
        };
        _proto8.setItem = function setItem(key, value) {
          this.storage[key] = value;
        };
        _createClass(InMemoryStorage, [{
          key: "length",
          get: function get() {
            return Object.keys(this.storage).length;
          }
        }]);
        return InMemoryStorage;
      }();
      function getWindow() {
        if (typeof window === 'undefined') {
          return undefined;
        }
        return window;
      }
      /**
       * The function try to get window keys, if it is not available it returns empty array.
       * As an example, for Safari's private mode it returns empty array, because the browser does not allow to get window keys.
       */
      function tryGetWindowKeys() {
        var window = getWindow();
        if (!window) {
          return [];
        }
        try {
          return Object.keys(window);
        } catch (_a) {
          return [];
        }
      }
      function getDocument() {
        if (typeof document === 'undefined') {
          return undefined;
        }
        return document;
      }
      function getWebPageManifest() {
        var _a;
        var origin = (_a = getWindow()) === null || _a === void 0 ? void 0 : _a.location.origin;
        if (origin) {
          return origin + '/tonconnect-manifest.json';
        }
        return '';
      }
      /**
       * Returns `localStorage` if it is available. In Safari's private mode, it returns `InMemoryStorage`. In Node.js, it throws an error.
       */
      function tryGetLocalStorage() {
        if (isLocalStorageAvailable()) {
          return localStorage;
        }
        if (isNodeJs()) {
          throw new TonConnectError('`localStorage` is unavailable, but it is required for TonConnect. For more details, see https://github.com/ton-connect/sdk/tree/main/packages/sdk#init-connector');
        }
        return InMemoryStorage.getInstance();
      }
      /**
       * Checks if `localStorage` is available.
       */
      function isLocalStorageAvailable() {
        // We use a try/catch block because Safari's private mode throws an error when attempting to access localStorage.
        try {
          return typeof localStorage !== 'undefined';
        } catch (_a) {
          return false;
        }
      }
      /**
       * Checks if the environment is Node.js.
       */
      function isNodeJs() {
        return typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
      }
      var InjectedProvider = /*#__PURE__*/function () {
        function InjectedProvider(storage, injectedWalletKey) {
          this.injectedWalletKey = injectedWalletKey;
          this.type = 'injected';
          this.unsubscribeCallback = null;
          this.listenSubscriptions = false;
          this.listeners = [];
          var window = InjectedProvider.window;
          if (!InjectedProvider.isWindowContainsWallet(window, injectedWalletKey)) {
            throw new WalletNotInjectedError();
          }
          this.connectionStorage = new BridgeConnectionStorage(storage);
          this.injectedWallet = window[injectedWalletKey].tonconnect;
        }
        InjectedProvider.fromStorage = function fromStorage(storage) {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee47() {
            var bridgeConnectionStorage, connection;
            return _regeneratorRuntime().wrap(function _callee47$(_context47) {
              while (1) switch (_context47.prev = _context47.next) {
                case 0:
                  bridgeConnectionStorage = new BridgeConnectionStorage(storage);
                  _context47.next = 3;
                  return bridgeConnectionStorage.getInjectedConnection();
                case 3:
                  connection = _context47.sent;
                  return _context47.abrupt("return", new InjectedProvider(storage, connection.jsBridgeKey));
                case 5:
                case "end":
                  return _context47.stop();
              }
            }, _callee47);
          }));
        };
        InjectedProvider.isWalletInjected = function isWalletInjected(injectedWalletKey) {
          return InjectedProvider.isWindowContainsWallet(this.window, injectedWalletKey);
        };
        InjectedProvider.isInsideWalletBrowser = function isInsideWalletBrowser(injectedWalletKey) {
          if (InjectedProvider.isWindowContainsWallet(this.window, injectedWalletKey)) {
            return this.window[injectedWalletKey].tonconnect.isWalletBrowser;
          }
          return false;
        };
        InjectedProvider.getCurrentlyInjectedWallets = function getCurrentlyInjectedWallets() {
          if (!this.window) {
            return [];
          }
          var windowKeys = tryGetWindowKeys();
          var wallets = windowKeys.filter(function (_ref) {
            var _ = _ref[0],
              value = _ref[1];
            return isJSBridgeWithMetadata(value);
          });
          return wallets.map(function (_ref2) {
            var jsBridgeKey = _ref2[0],
              wallet = _ref2[1];
            return {
              name: wallet.tonconnect.walletInfo.name,
              appName: wallet.tonconnect.walletInfo.app_name,
              aboutUrl: wallet.tonconnect.walletInfo.about_url,
              imageUrl: wallet.tonconnect.walletInfo.image,
              tondns: wallet.tonconnect.walletInfo.tondns,
              jsBridgeKey: jsBridgeKey,
              injected: true,
              embedded: wallet.tonconnect.isWalletBrowser,
              platforms: wallet.tonconnect.walletInfo.platforms
            };
          });
        };
        InjectedProvider.isWindowContainsWallet = function isWindowContainsWallet(window, injectedWalletKey) {
          return !!window && injectedWalletKey in window && typeof window[injectedWalletKey] === 'object' && 'tonconnect' in window[injectedWalletKey];
        };
        var _proto9 = InjectedProvider.prototype;
        _proto9.connect = function connect(message) {
          this._connect(PROTOCOL_VERSION, message);
        };
        _proto9.restoreConnection = function restoreConnection() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee48() {
            var connectEvent;
            return _regeneratorRuntime().wrap(function _callee48$(_context48) {
              while (1) switch (_context48.prev = _context48.next) {
                case 0:
                  _context48.prev = 0;
                  logDebug("Injected Provider restoring connection...");
                  _context48.next = 4;
                  return this.injectedWallet.restoreConnection();
                case 4:
                  connectEvent = _context48.sent;
                  logDebug('Injected Provider restoring connection response', connectEvent);
                  if (!(connectEvent.event === 'connect')) {
                    _context48.next = 11;
                    break;
                  }
                  this.makeSubscriptions();
                  this.listeners.forEach(function (listener) {
                    return listener(connectEvent);
                  });
                  _context48.next = 13;
                  break;
                case 11:
                  _context48.next = 13;
                  return this.connectionStorage.removeConnection();
                case 13:
                  _context48.next = 20;
                  break;
                case 15:
                  _context48.prev = 15;
                  _context48.t0 = _context48["catch"](0);
                  _context48.next = 19;
                  return this.connectionStorage.removeConnection();
                case 19:
                  console.error(_context48.t0);
                case 20:
                case "end":
                  return _context48.stop();
              }
            }, _callee48, this, [[0, 15]]);
          }));
        };
        _proto9.closeConnection = function closeConnection() {
          if (this.listenSubscriptions) {
            this.injectedWallet.disconnect();
          }
          this.closeAllListeners();
        };
        _proto9.disconnect = function disconnect() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee49() {
            var _this30 = this;
            return _regeneratorRuntime().wrap(function _callee49$(_context49) {
              while (1) switch (_context49.prev = _context49.next) {
                case 0:
                  return _context49.abrupt("return", new Promise(function (resolve) {
                    var onRequestSent = function onRequestSent() {
                      _this30.closeAllListeners();
                      _this30.connectionStorage.removeConnection().then(resolve);
                    };
                    try {
                      _this30.injectedWallet.disconnect();
                      onRequestSent();
                    } catch (e) {
                      logDebug(e);
                      _this30.sendRequest({
                        method: 'disconnect',
                        params: []
                      }, onRequestSent);
                    }
                  }));
                case 1:
                case "end":
                  return _context49.stop();
              }
            }, _callee49);
          }));
        };
        _proto9.closeAllListeners = function closeAllListeners() {
          var _a;
          this.listenSubscriptions = false;
          this.listeners = [];
          (_a = this.unsubscribeCallback) === null || _a === void 0 ? void 0 : _a.call(this);
        };
        _proto9.listen = function listen(eventsCallback) {
          var _this31 = this;
          this.listeners.push(eventsCallback);
          return function () {
            return _this31.listeners = _this31.listeners.filter(function (listener) {
              return listener !== eventsCallback;
            });
          };
        };
        _proto9.sendRequest = function sendRequest(request, optionsOrOnRequestSent) {
          var _a;
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee50() {
            var options, id, result;
            return _regeneratorRuntime().wrap(function _callee50$(_context50) {
              while (1) switch (_context50.prev = _context50.next) {
                case 0:
                  // TODO: remove deprecated method
                  options = {};
                  if (typeof optionsOrOnRequestSent === 'function') {
                    options.onRequestSent = optionsOrOnRequestSent;
                  } else {
                    options.onRequestSent = optionsOrOnRequestSent === null || optionsOrOnRequestSent === void 0 ? void 0 : optionsOrOnRequestSent.onRequestSent;
                    options.signal = optionsOrOnRequestSent === null || optionsOrOnRequestSent === void 0 ? void 0 : optionsOrOnRequestSent.signal;
                  }
                  _context50.next = 4;
                  return this.connectionStorage.getNextRpcRequestId();
                case 4:
                  id = _context50.sent.toString();
                  _context50.next = 7;
                  return this.connectionStorage.increaseNextRpcRequestId();
                case 7:
                  logDebug('Send injected-bridge request:', Object.assign(Object.assign({}, request), {
                    id: id
                  }));
                  result = this.injectedWallet.send(Object.assign(Object.assign({}, request), {
                    id: id
                  }));
                  result.then(function (response) {
                    return logDebug('Wallet message received:', response);
                  });
                  (_a = options === null || options === void 0 ? void 0 : options.onRequestSent) === null || _a === void 0 ? void 0 : _a.call(options);
                  return _context50.abrupt("return", result);
                case 12:
                case "end":
                  return _context50.stop();
              }
            }, _callee50, this);
          }));
        };
        _proto9._connect = function _connect(protocolVersion, message) {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee51() {
            var connectEvent, connectEventError;
            return _regeneratorRuntime().wrap(function _callee51$(_context51) {
              while (1) switch (_context51.prev = _context51.next) {
                case 0:
                  _context51.prev = 0;
                  logDebug("Injected Provider connect request: protocolVersion: " + protocolVersion + ", message:", message);
                  _context51.next = 4;
                  return this.injectedWallet.connect(protocolVersion, message);
                case 4:
                  connectEvent = _context51.sent;
                  logDebug('Injected Provider connect response:', connectEvent);
                  if (!(connectEvent.event === 'connect')) {
                    _context51.next = 10;
                    break;
                  }
                  _context51.next = 9;
                  return this.updateSession();
                case 9:
                  this.makeSubscriptions();
                case 10:
                  this.listeners.forEach(function (listener) {
                    return listener(connectEvent);
                  });
                  _context51.next = 18;
                  break;
                case 13:
                  _context51.prev = 13;
                  _context51.t0 = _context51["catch"](0);
                  logDebug('Injected Provider connect error:', _context51.t0);
                  connectEventError = {
                    event: 'connect_error',
                    payload: {
                      code: 0,
                      message: _context51.t0 === null || _context51.t0 === void 0 ? void 0 : _context51.t0.toString()
                    }
                  };
                  this.listeners.forEach(function (listener) {
                    return listener(connectEventError);
                  });
                case 18:
                case "end":
                  return _context51.stop();
              }
            }, _callee51, this, [[0, 13]]);
          }));
        };
        _proto9.makeSubscriptions = function makeSubscriptions() {
          var _this32 = this;
          this.listenSubscriptions = true;
          this.unsubscribeCallback = this.injectedWallet.listen(function (e) {
            logDebug('Wallet message received:', e);
            if (_this32.listenSubscriptions) {
              _this32.listeners.forEach(function (listener) {
                return listener(e);
              });
            }
            if (e.event === 'disconnect') {
              _this32.disconnect();
            }
          });
        };
        _proto9.updateSession = function updateSession() {
          return this.connectionStorage.storeConnection({
            type: 'injected',
            jsBridgeKey: this.injectedWalletKey,
            nextRpcRequestId: 0
          });
        };
        return InjectedProvider;
      }();
      InjectedProvider.window = getWindow();

      /**
       * Default storage to save protocol data, uses `localStorage` if it is available. In Safari's private mode, it uses `InMemoryStorage`. In Node.js, it throws an error.
       */
      var DefaultStorage = /*#__PURE__*/function () {
        function DefaultStorage() {
          this.localStorage = tryGetLocalStorage();
        }
        var _proto10 = DefaultStorage.prototype;
        _proto10.getItem = function getItem(key) {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee52() {
            return _regeneratorRuntime().wrap(function _callee52$(_context52) {
              while (1) switch (_context52.prev = _context52.next) {
                case 0:
                  return _context52.abrupt("return", this.localStorage.getItem(key));
                case 1:
                case "end":
                  return _context52.stop();
              }
            }, _callee52, this);
          }));
        };
        _proto10.removeItem = function removeItem(key) {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee53() {
            return _regeneratorRuntime().wrap(function _callee53$(_context53) {
              while (1) switch (_context53.prev = _context53.next) {
                case 0:
                  this.localStorage.removeItem(key);
                case 1:
                case "end":
                  return _context53.stop();
              }
            }, _callee53, this);
          }));
        };
        _proto10.setItem = function setItem(key, value) {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee54() {
            return _regeneratorRuntime().wrap(function _callee54$(_context54) {
              while (1) switch (_context54.prev = _context54.next) {
                case 0:
                  this.localStorage.setItem(key, value);
                case 1:
                case "end":
                  return _context54.stop();
              }
            }, _callee54, this);
          }));
        };
        return DefaultStorage;
      }();
      /**
       * Checks if `WalletInfo` is `WalletInfoInjectable` and `WalletInfo` is injected to the current webpage (`walletInfo.injected === true`).
       * @param value WalletInfo to check.
       */
      function isWalletInfoCurrentlyInjected(value) {
        return isWalletInfoInjectable(value) && value.injected;
      }
      /**
       * Checks if `WalletInfo` is `WalletInfoInjectable` and dApp is opened inside this wallet's browser.
       * @param value WalletInfo to check.
       */
      function isWalletInfoCurrentlyEmbedded(value) {
        return isWalletInfoCurrentlyInjected(value) && value.embedded;
      }
      /**
       * Checks if `WalletInfo` is `WalletInfoInjected`, but doesn't check if it is injected to the page or not.
       * @param value WalletInfo to check.
       */
      function isWalletInfoInjectable(value) {
        return 'jsBridgeKey' in value;
      }
      var FALLBACK_WALLETS_LIST = [{
        app_name: 'telegram-wallet',
        name: 'Wallet',
        image: 'https://wallet.tg/images/logo-288.png',
        about_url: 'https://wallet.tg/',
        universal_url: 'https://t.me/wallet?attach=wallet',
        bridge: [{
          type: 'sse',
          url: 'https://bridge.ton.space/bridge'
        }],
        platforms: ['ios', 'android', 'macos', 'windows', 'linux']
      }, {
        app_name: 'tonkeeper',
        name: 'Tonkeeper',
        image: 'https://tonkeeper.com/assets/tonconnect-icon.png',
        tondns: 'tonkeeper.ton',
        about_url: 'https://tonkeeper.com',
        universal_url: 'https://app.tonkeeper.com/ton-connect',
        deepLink: 'tonkeeper-tc://',
        bridge: [{
          type: 'sse',
          url: 'https://bridge.tonapi.io/bridge'
        }, {
          type: 'js',
          key: 'tonkeeper'
        }],
        platforms: ['ios', 'android', 'chrome', 'firefox', 'macos']
      }, {
        app_name: 'mytonwallet',
        name: 'MyTonWallet',
        image: 'https://static.mytonwallet.io/icon-256.png',
        about_url: 'https://mytonwallet.io',
        universal_url: 'https://connect.mytonwallet.org',
        bridge: [{
          type: 'js',
          key: 'mytonwallet'
        }, {
          type: 'sse',
          url: 'https://tonconnectbridge.mytonwallet.org/bridge/'
        }],
        platforms: ['chrome', 'windows', 'macos', 'linux', 'ios', 'android', 'firefox']
      }, {
        app_name: 'openmask',
        name: 'OpenMask',
        image: 'https://raw.githubusercontent.com/OpenProduct/openmask-extension/main/public/openmask-logo-288.png',
        about_url: 'https://www.openmask.app/',
        bridge: [{
          type: 'js',
          key: 'openmask'
        }],
        platforms: ['chrome']
      }, {
        app_name: 'tonhub',
        name: 'Tonhub',
        image: 'https://tonhub.com/tonconnect_logo.png',
        about_url: 'https://tonhub.com',
        universal_url: 'https://tonhub.com/ton-connect',
        bridge: [{
          type: 'js',
          key: 'tonhub'
        }, {
          type: 'sse',
          url: 'https://connect.tonhubapi.com/tonconnect'
        }],
        platforms: ['ios', 'android']
      }, {
        app_name: 'dewallet',
        name: 'DeWallet',
        image: 'https://raw.githubusercontent.com/delab-team/manifests-images/main/WalletAvatar.png',
        about_url: 'https://delabwallet.com',
        universal_url: 'https://t.me/dewallet?attach=wallet',
        bridge: [{
          type: 'sse',
          url: 'https://sse-bridge.delab.team/bridge'
        }],
        platforms: ['ios', 'android']
      }, {
        app_name: 'xtonwallet',
        name: 'XTONWallet',
        image: 'https://xtonwallet.com/assets/img/icon-256-back.png',
        about_url: 'https://xtonwallet.com',
        bridge: [{
          type: 'js',
          key: 'xtonwallet'
        }],
        platforms: ['chrome', 'firefox']
      }, {
        app_name: 'tonwallet',
        name: 'TON Wallet',
        image: 'https://wallet.ton.org/assets/ui/qr-logo.png',
        about_url: 'https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd',
        bridge: [{
          type: 'js',
          key: 'tonwallet'
        }],
        platforms: ['chrome']
      }, {
        app_name: 'bitgetTonWallet',
        name: 'Bitget Wallet',
        image: 'https://raw.githubusercontent.com/bitkeepwallet/download/main/logo/png/bitget_wallet_logo_0_gas_fee.png',
        about_url: 'https://web3.bitget.com',
        deepLink: 'bitkeep://',
        bridge: [{
          type: 'js',
          key: 'bitgetTonWallet'
        }, {
          type: 'sse',
          url: 'https://bridge.tonapi.io/bridge'
        }],
        platforms: ['ios', 'android', 'chrome'],
        universal_url: 'https://bkcode.vip/ton-connect'
      }, {
        app_name: 'safepalwallet',
        name: 'SafePal',
        image: 'https://s.pvcliping.com/web/public_image/SafePal_x288.png',
        tondns: '',
        about_url: 'https://www.safepal.com',
        universal_url: 'https://link.safepal.io/ton-connect',
        deepLink: 'safepal-tc://',
        bridge: [{
          type: 'sse',
          url: 'https://ton-bridge.safepal.com/tonbridge/v1/bridge'
        }, {
          type: 'js',
          key: 'safepalwallet'
        }],
        platforms: ['ios', 'android', 'chrome', 'firefox']
      }, {
        app_name: 'okxTonWallet',
        name: 'OKX Wallet',
        image: 'https://static.okx.com/cdn/assets/imgs/247/58E63FEA47A2B7D7.png',
        about_url: 'https://www.okx.com/web3',
        universal_url: 'https://www.okx.com/download?appendQuery=true&deeplink=okx://web3/wallet/tonconnect',
        bridge: [{
          type: 'js',
          key: 'okxTonWallet'
        }, {
          type: 'sse',
          url: 'https://www.okx.com/tonbridge/discover/rpc/bridge'
        }],
        platforms: ['chrome', 'safari', 'firefox', 'ios', 'android']
      }, {
        app_name: 'okxTonWalletTr',
        name: 'OKX TR Wallet',
        image: 'https://static.okx.com/cdn/assets/imgs/247/587A8296F0BB640F.png',
        about_url: 'https://tr.okx.com/web3',
        universal_url: 'https://tr.okx.com/download?appendQuery=true&deeplink=okxtr://web3/wallet/tonconnect',
        bridge: [{
          type: 'js',
          key: 'okxTonWallet'
        }, {
          type: 'sse',
          url: 'https://www.okx.com/tonbridge/discover/rpc/bridge'
        }],
        platforms: ['chrome', 'safari', 'firefox', 'ios', 'android']
      }];
      var WalletsListManager = exports('WalletsListManager', /*#__PURE__*/function () {
        function WalletsListManager(options) {
          this.walletsListCache = null;
          this.walletsListCacheCreationTimestamp = null;
          this.walletsListSource = 'https://raw.githubusercontent.com/ton-blockchain/wallets-list/main/wallets-v2.json';
          if (options === null || options === void 0 ? void 0 : options.walletsListSource) {
            this.walletsListSource = options.walletsListSource;
          }
          if (options === null || options === void 0 ? void 0 : options.cacheTTLMs) {
            this.cacheTTLMs = options.cacheTTLMs;
          }
        }
        var _proto11 = WalletsListManager.prototype;
        _proto11.getWallets = function getWallets() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee55() {
            var _this33 = this;
            return _regeneratorRuntime().wrap(function _callee55$(_context55) {
              while (1) switch (_context55.prev = _context55.next) {
                case 0:
                  if (this.cacheTTLMs && this.walletsListCacheCreationTimestamp && Date.now() > this.walletsListCacheCreationTimestamp + this.cacheTTLMs) {
                    this.walletsListCache = null;
                  }
                  if (!this.walletsListCache) {
                    this.walletsListCache = this.fetchWalletsList();
                    this.walletsListCache.then(function () {
                      _this33.walletsListCacheCreationTimestamp = Date.now();
                    })["catch"](function () {
                      _this33.walletsListCache = null;
                      _this33.walletsListCacheCreationTimestamp = null;
                    });
                  }
                  return _context55.abrupt("return", this.walletsListCache);
                case 3:
                case "end":
                  return _context55.stop();
              }
            }, _callee55, this);
          }));
        };
        _proto11.getEmbeddedWallet = function getEmbeddedWallet() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee56() {
            var walletsList, embeddedWallets;
            return _regeneratorRuntime().wrap(function _callee56$(_context56) {
              while (1) switch (_context56.prev = _context56.next) {
                case 0:
                  _context56.next = 2;
                  return this.getWallets();
                case 2:
                  walletsList = _context56.sent;
                  embeddedWallets = walletsList.filter(isWalletInfoCurrentlyEmbedded);
                  if (!(embeddedWallets.length !== 1)) {
                    _context56.next = 6;
                    break;
                  }
                  return _context56.abrupt("return", null);
                case 6:
                  return _context56.abrupt("return", embeddedWallets[0]);
                case 7:
                case "end":
                  return _context56.stop();
              }
            }, _callee56, this);
          }));
        };
        _proto11.fetchWalletsList = function fetchWalletsList() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee57() {
            var _this34 = this;
            var walletsList, walletsResponse, wrongFormatWallets, currentlyInjectedWallets;
            return _regeneratorRuntime().wrap(function _callee57$(_context57) {
              while (1) switch (_context57.prev = _context57.next) {
                case 0:
                  walletsList = [];
                  _context57.prev = 1;
                  _context57.next = 4;
                  return fetch(this.walletsListSource);
                case 4:
                  walletsResponse = _context57.sent;
                  _context57.next = 7;
                  return walletsResponse.json();
                case 7:
                  walletsList = _context57.sent;
                  if (Array.isArray(walletsList)) {
                    _context57.next = 10;
                    break;
                  }
                  throw new FetchWalletsError('Wrong wallets list format, wallets list must be an array.');
                case 10:
                  wrongFormatWallets = walletsList.filter(function (wallet) {
                    return !_this34.isCorrectWalletConfigDTO(wallet);
                  });
                  if (wrongFormatWallets.length) {
                    logError("Wallet(s) " + wrongFormatWallets.map(function (wallet) {
                      return wallet.name;
                    }).join(', ') + " config format is wrong. They were removed from the wallets list.");
                    walletsList = walletsList.filter(function (wallet) {
                      return _this34.isCorrectWalletConfigDTO(wallet);
                    });
                  }
                  _context57.next = 18;
                  break;
                case 14:
                  _context57.prev = 14;
                  _context57.t0 = _context57["catch"](1);
                  logError(_context57.t0);
                  walletsList = FALLBACK_WALLETS_LIST;
                case 18:
                  currentlyInjectedWallets = [];
                  try {
                    currentlyInjectedWallets = InjectedProvider.getCurrentlyInjectedWallets();
                  } catch (e) {
                    logError(e);
                  }
                  return _context57.abrupt("return", this.mergeWalletsLists(this.walletConfigDTOListToWalletConfigList(walletsList), currentlyInjectedWallets));
                case 21:
                case "end":
                  return _context57.stop();
              }
            }, _callee57, this, [[1, 14]]);
          }));
        };
        _proto11.walletConfigDTOListToWalletConfigList = function walletConfigDTOListToWalletConfigList(walletConfigDTO) {
          return walletConfigDTO.map(function (walletConfigDTO) {
            var walletConfigBase = {
              name: walletConfigDTO.name,
              appName: walletConfigDTO.app_name,
              imageUrl: walletConfigDTO.image,
              aboutUrl: walletConfigDTO.about_url,
              tondns: walletConfigDTO.tondns,
              platforms: walletConfigDTO.platforms
            };
            var walletConfig = walletConfigBase;
            walletConfigDTO.bridge.forEach(function (bridge) {
              if (bridge.type === 'sse') {
                walletConfig.bridgeUrl = bridge.url;
                walletConfig.universalLink = walletConfigDTO.universal_url;
                walletConfig.deepLink = walletConfigDTO.deepLink;
              }
              if (bridge.type === 'js') {
                var jsBridgeKey = bridge.key;
                walletConfig.jsBridgeKey = jsBridgeKey;
                walletConfig.injected = InjectedProvider.isWalletInjected(jsBridgeKey);
                walletConfig.embedded = InjectedProvider.isInsideWalletBrowser(jsBridgeKey);
              }
            });
            return walletConfig;
          });
        };
        _proto11.mergeWalletsLists = function mergeWalletsLists(list1, list2) {
          var names = new Set(list1.concat(list2).map(function (item) {
            return item.name;
          }));
          return [].concat(names.values()).map(function (name) {
            var list1Item = list1.find(function (item) {
              return item.name === name;
            });
            var list2Item = list2.find(function (item) {
              return item.name === name;
            });
            return Object.assign(Object.assign({}, list1Item && Object.assign({}, list1Item)), list2Item && Object.assign({}, list2Item));
          });
        }
        // eslint-disable-next-line complexity
        ;

        _proto11.isCorrectWalletConfigDTO = function isCorrectWalletConfigDTO(value) {
          if (!value || !(typeof value === 'object')) {
            return false;
          }
          var containsName = ('name' in value);
          var containsAppName = ('app_name' in value);
          var containsImage = ('image' in value);
          var containsAbout = ('about_url' in value);
          var containsPlatforms = ('platforms' in value);
          if (!containsName || !containsImage || !containsAbout || !containsPlatforms || !containsAppName) {
            return false;
          }
          if (!value.platforms || !Array.isArray(value.platforms) || !value.platforms.length) {
            return false;
          }
          if (!('bridge' in value) || !Array.isArray(value.bridge) || !value.bridge.length) {
            return false;
          }
          var bridge = value.bridge;
          if (bridge.some(function (item) {
            return !item || typeof item !== 'object' || !('type' in item);
          })) {
            return false;
          }
          var sseBridge = bridge.find(function (item) {
            return item.type === 'sse';
          });
          if (sseBridge) {
            if (!('url' in sseBridge) || !sseBridge.url || !value.universal_url) {
              return false;
            }
          }
          var jsBridge = bridge.find(function (item) {
            return item.type === 'js';
          });
          if (jsBridge) {
            if (!('key' in jsBridge) || !jsBridge.key) {
              return false;
            }
          }
          return true;
        };
        return WalletsListManager;
      }());
      /**
       * Thrown when wallet doesn't support requested feature method.
       */
      var WalletNotSupportFeatureError = /*#__PURE__*/function (_TonConnectError15) {
        _inheritsLoose(WalletNotSupportFeatureError, _TonConnectError15);
        function WalletNotSupportFeatureError() {
          var _this35;
          for (var _len19 = arguments.length, args = new Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
            args[_key19] = arguments[_key19];
          }
          _this35 = _TonConnectError15.call.apply(_TonConnectError15, [this].concat(args)) || this;
          Object.setPrototypeOf(_assertThisInitialized(_this35), WalletNotSupportFeatureError.prototype);
          return _this35;
        }
        _createClass(WalletNotSupportFeatureError, [{
          key: "info",
          get: function get() {
            return "Wallet doesn't support requested feature method.";
          }
        }]);
        return WalletNotSupportFeatureError;
      }(TonConnectError);
      function checkSendTransactionSupport(features, options) {
        var supportsDeprecatedSendTransactionFeature = features.includes('SendTransaction');
        var sendTransactionFeature = features.find(function (feature) {
          return feature && typeof feature === 'object' && feature.name === 'SendTransaction';
        });
        if (!supportsDeprecatedSendTransactionFeature && !sendTransactionFeature) {
          throw new WalletNotSupportFeatureError("Wallet doesn't support SendTransaction feature.");
        }
        if (sendTransactionFeature && sendTransactionFeature.maxMessages !== undefined) {
          if (sendTransactionFeature.maxMessages < options.requiredMessagesNumber) {
            throw new WalletNotSupportFeatureError("Wallet is not able to handle such SendTransaction request. Max support messages number is " + sendTransactionFeature.maxMessages + ", but " + options.requiredMessagesNumber + " is required.");
          }
          return;
        }
        logWarning("Connected wallet didn't provide information about max allowed messages in the SendTransaction request. Request may be rejected by the wallet.");
      }

      /**
       * Create a request version event.
       */
      function createRequestVersionEvent() {
        return {
          type: 'request-version'
        };
      }
      /**
       * Create a response version event.
       * @param version
       */
      function createResponseVersionEvent(version) {
        return {
          type: 'response-version',
          version: version
        };
      }
      /**
       * Create a version info.
       * @param version
       */
      function createVersionInfo(version) {
        return {
          ton_connect_sdk_lib: version.ton_connect_sdk_lib,
          ton_connect_ui_lib: version.ton_connect_ui_lib
        };
      }
      function createConnectionInfo(version, wallet) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var isTonProof = ((_a = wallet === null || wallet === void 0 ? void 0 : wallet.connectItems) === null || _a === void 0 ? void 0 : _a.tonProof) && 'proof' in wallet.connectItems.tonProof;
        var authType = isTonProof ? 'ton_proof' : 'ton_addr';
        return {
          wallet_address: (_c = (_b = wallet === null || wallet === void 0 ? void 0 : wallet.account) === null || _b === void 0 ? void 0 : _b.address) !== null && _c !== void 0 ? _c : null,
          wallet_type: (_d = wallet === null || wallet === void 0 ? void 0 : wallet.device.appName) !== null && _d !== void 0 ? _d : null,
          wallet_version: (_e = wallet === null || wallet === void 0 ? void 0 : wallet.device.appVersion) !== null && _e !== void 0 ? _e : null,
          auth_type: authType,
          custom_data: Object.assign({
            chain_id: (_g = (_f = wallet === null || wallet === void 0 ? void 0 : wallet.account) === null || _f === void 0 ? void 0 : _f.chain) !== null && _g !== void 0 ? _g : null,
            provider: (_h = wallet === null || wallet === void 0 ? void 0 : wallet.provider) !== null && _h !== void 0 ? _h : null
          }, createVersionInfo(version))
        };
      }
      /**
       * Create a connection init event.
       */
      function createConnectionStartedEvent(version) {
        return {
          type: 'connection-started',
          custom_data: createVersionInfo(version)
        };
      }
      /**
       * Create a connection completed event.
       * @param version
       * @param wallet
       */
      function createConnectionCompletedEvent(version, wallet) {
        return Object.assign({
          type: 'connection-completed',
          is_success: true
        }, createConnectionInfo(version, wallet));
      }
      /**
       * Create a connection error event.
       * @param version
       * @param error_message
       * @param errorCode
       */
      function createConnectionErrorEvent(version, error_message, errorCode) {
        return {
          type: 'connection-error',
          is_success: false,
          error_message: error_message,
          error_code: errorCode !== null && errorCode !== void 0 ? errorCode : null,
          custom_data: createVersionInfo(version)
        };
      }
      /**
       * Create a connection restoring started event.
       */
      function createConnectionRestoringStartedEvent(version) {
        return {
          type: 'connection-restoring-started',
          custom_data: createVersionInfo(version)
        };
      }
      /**
       * Create a connection restoring completed event.
       * @param version
       * @param wallet
       */
      function createConnectionRestoringCompletedEvent(version, wallet) {
        return Object.assign({
          type: 'connection-restoring-completed',
          is_success: true
        }, createConnectionInfo(version, wallet));
      }
      /**
       * Create a connection restoring error event.
       * @param version
       * @param errorMessage
       */
      function createConnectionRestoringErrorEvent(version, errorMessage) {
        return {
          type: 'connection-restoring-error',
          is_success: false,
          error_message: errorMessage,
          custom_data: createVersionInfo(version)
        };
      }
      function createTransactionInfo(wallet, transaction) {
        var _a, _b, _c, _d;
        return {
          valid_until: (_a = String(transaction.validUntil)) !== null && _a !== void 0 ? _a : null,
          from: (_d = (_b = transaction.from) !== null && _b !== void 0 ? _b : (_c = wallet === null || wallet === void 0 ? void 0 : wallet.account) === null || _c === void 0 ? void 0 : _c.address) !== null && _d !== void 0 ? _d : null,
          messages: transaction.messages.map(function (message) {
            var _a, _b;
            return {
              address: (_a = message.address) !== null && _a !== void 0 ? _a : null,
              amount: (_b = message.amount) !== null && _b !== void 0 ? _b : null
            };
          })
        };
      }
      /**
       * Create a transaction init event.
       * @param version
       * @param wallet
       * @param transaction
       */
      function createTransactionSentForSignatureEvent(version, wallet, transaction) {
        return Object.assign(Object.assign({
          type: 'transaction-sent-for-signature'
        }, createConnectionInfo(version, wallet)), createTransactionInfo(wallet, transaction));
      }
      /**
       * Create a transaction signed event.
       * @param version
       * @param wallet
       * @param transaction
       * @param signedTransaction
       */
      function createTransactionSignedEvent(version, wallet, transaction, signedTransaction) {
        return Object.assign(Object.assign({
          type: 'transaction-signed',
          is_success: true,
          signed_transaction: signedTransaction.boc
        }, createConnectionInfo(version, wallet)), createTransactionInfo(wallet, transaction));
      }
      /**
       * Create a transaction error event.
       * @param version
       * @param wallet
       * @param transaction
       * @param errorMessage
       * @param errorCode
       */
      function createTransactionSigningFailedEvent(version, wallet, transaction, errorMessage, errorCode) {
        return Object.assign(Object.assign({
          type: 'transaction-signing-failed',
          is_success: false,
          error_message: errorMessage,
          error_code: errorCode !== null && errorCode !== void 0 ? errorCode : null
        }, createConnectionInfo(version, wallet)), createTransactionInfo(wallet, transaction));
      }
      /**
       * Create a disconnect event.
       * @param version
       * @param wallet
       * @param scope
       * @returns
       */
      function createDisconnectionEvent(version, wallet, scope) {
        return Object.assign({
          type: 'disconnection',
          scope: scope
        }, createConnectionInfo(version, wallet));
      }

      /**
       * A concrete implementation of EventDispatcher that dispatches events to the browser window.
       */
      var BrowserEventDispatcher = exports('BrowserEventDispatcher', /*#__PURE__*/function () {
        function BrowserEventDispatcher() {
          /**
           * The window object, possibly undefined in a server environment.
           * @private
           */
          this.window = getWindow();
        }
        /**
         * Dispatches an event with the given name and details to the browser window.
         * @param eventName - The name of the event to dispatch.
         * @param eventDetails - The details of the event to dispatch.
         * @returns A promise that resolves when the event has been dispatched.
         */
        var _proto12 = BrowserEventDispatcher.prototype;
        _proto12.dispatchEvent = function dispatchEvent(eventName, eventDetails) {
          var _a;
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee58() {
            var event;
            return _regeneratorRuntime().wrap(function _callee58$(_context58) {
              while (1) switch (_context58.prev = _context58.next) {
                case 0:
                  event = new CustomEvent(eventName, {
                    detail: eventDetails
                  });
                  (_a = this.window) === null || _a === void 0 ? void 0 : _a.dispatchEvent(event);
                case 2:
                case "end":
                  return _context58.stop();
              }
            }, _callee58, this);
          }));
        }
        /**
         * Adds an event listener to the browser window.
         * @param eventName - The name of the event to listen for.
         * @param listener - The listener to add.
         * @param options - The options for the listener.
         * @returns A function that removes the listener.
         */;
        _proto12.addEventListener = function addEventListener(eventName, listener, options) {
          var _a;
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee59() {
            var _this36 = this;
            return _regeneratorRuntime().wrap(function _callee59$(_context59) {
              while (1) switch (_context59.prev = _context59.next) {
                case 0:
                  (_a = this.window) === null || _a === void 0 ? void 0 : _a.addEventListener(eventName, listener, options);
                  return _context59.abrupt("return", function () {
                    var _a;
                    return (_a = _this36.window) === null || _a === void 0 ? void 0 : _a.removeEventListener(eventName, listener);
                  });
                case 2:
                case "end":
                  return _context59.stop();
              }
            }, _callee59, this);
          }));
        };
        return BrowserEventDispatcher;
      }());
      /**
       * Tracker for TonConnect user actions, such as transaction signing, connection, etc.
       *
       * List of events:
       *  * `connection-started`: when a user starts connecting a wallet.
       *  * `connection-completed`: when a user successfully connected a wallet.
       *  * `connection-error`: when a user cancels a connection or there is an error during the connection process.
       *  * `connection-restoring-started`: when the dApp starts restoring a connection.
       *  * `connection-restoring-completed`: when the dApp successfully restores a connection.
       *  * `connection-restoring-error`: when the dApp fails to restore a connection.
       *  * `disconnection`: when a user starts disconnecting a wallet.
       *  * `transaction-sent-for-signature`: when a user sends a transaction for signature.
       *  * `transaction-signed`: when a user successfully signs a transaction.
       *  * `transaction-signing-failed`: when a user cancels transaction signing or there is an error during the signing process.
       *
       * If you want to track user actions, you can subscribe to the window events with prefix `ton-connect-`:
       *
       * @example
       * window.addEventListener('ton-connect-transaction-sent-for-signature', (event) => {
       *    console.log('Transaction init', event.detail);
       * });
       *
       * @internal
       */
      var TonConnectTracker = /*#__PURE__*/function () {
        function TonConnectTracker(options) {
          var _a;
          /**
           * Event prefix for user actions.
           * @private
           */
          this.eventPrefix = 'ton-connect-';
          /**
           * TonConnect UI version.
           */
          this.tonConnectUiVersion = null;
          this.eventDispatcher = (_a = options === null || options === void 0 ? void 0 : options.eventDispatcher) !== null && _a !== void 0 ? _a : new BrowserEventDispatcher();
          this.tonConnectSdkVersion = options.tonConnectSdkVersion;
          this.init()["catch"]();
        }
        /**
         * Version of the library.
         */
        var _proto13 = TonConnectTracker.prototype;
        /**
         * Called once when the tracker is created and request version other libraries.
         */
        _proto13.init = function init() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee60() {
            return _regeneratorRuntime().wrap(function _callee60$(_context60) {
              while (1) switch (_context60.prev = _context60.next) {
                case 0:
                  _context60.prev = 0;
                  _context60.next = 3;
                  return this.setRequestVersionHandler();
                case 3:
                  _context60.next = 5;
                  return this.requestTonConnectUiVersion();
                case 5:
                  this.tonConnectUiVersion = _context60.sent;
                  _context60.next = 10;
                  break;
                case 8:
                  _context60.prev = 8;
                  _context60.t0 = _context60["catch"](0);
                case 10:
                case "end":
                  return _context60.stop();
              }
            }, _callee60, this, [[0, 8]]);
          }));
        }
        /**
         * Set request version handler.
         * @private
         */;
        _proto13.setRequestVersionHandler = function setRequestVersionHandler() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee62() {
            var _this37 = this;
            return _regeneratorRuntime().wrap(function _callee62$(_context62) {
              while (1) switch (_context62.prev = _context62.next) {
                case 0:
                  _context62.next = 2;
                  return this.eventDispatcher.addEventListener('ton-connect-request-version', function () {
                    return __awaiter(_this37, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee61() {
                      return _regeneratorRuntime().wrap(function _callee61$(_context61) {
                        while (1) switch (_context61.prev = _context61.next) {
                          case 0:
                            _context61.next = 2;
                            return this.eventDispatcher.dispatchEvent('ton-connect-response-version', createResponseVersionEvent(this.tonConnectSdkVersion));
                          case 2:
                          case "end":
                            return _context61.stop();
                        }
                      }, _callee61, this);
                    }));
                  });
                case 2:
                case "end":
                  return _context62.stop();
              }
            }, _callee62, this);
          }));
        }
        /**
         * Request TonConnect UI version.
         * @private
         */;
        _proto13.requestTonConnectUiVersion = function requestTonConnectUiVersion() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee64() {
            var _this38 = this;
            return _regeneratorRuntime().wrap(function _callee64$(_context64) {
              while (1) switch (_context64.prev = _context64.next) {
                case 0:
                  return _context64.abrupt("return", new Promise(function (resolve, reject) {
                    return __awaiter(_this38, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee63() {
                      return _regeneratorRuntime().wrap(function _callee63$(_context63) {
                        while (1) switch (_context63.prev = _context63.next) {
                          case 0:
                            _context63.prev = 0;
                            _context63.next = 3;
                            return this.eventDispatcher.addEventListener('ton-connect-ui-response-version', function (event) {
                              resolve(event.detail.version);
                            }, {
                              once: true
                            });
                          case 3:
                            _context63.next = 5;
                            return this.eventDispatcher.dispatchEvent('ton-connect-ui-request-version', createRequestVersionEvent());
                          case 5:
                            _context63.next = 10;
                            break;
                          case 7:
                            _context63.prev = 7;
                            _context63.t0 = _context63["catch"](0);
                            reject(_context63.t0);
                          case 10:
                          case "end":
                            return _context63.stop();
                        }
                      }, _callee63, this, [[0, 7]]);
                    }));
                  }));
                case 1:
                case "end":
                  return _context64.stop();
              }
            }, _callee64);
          }));
        }
        /**
         * Emit user action event to the window.
         * @param eventDetails
         * @private
         */;
        _proto13.dispatchUserActionEvent = function dispatchUserActionEvent(eventDetails) {
          try {
            this.eventDispatcher.dispatchEvent("" + this.eventPrefix + eventDetails.type, eventDetails)["catch"]();
          } catch (e) {}
        }
        /**
         * Track connection init event.
         * @param args
         */;
        _proto13.trackConnectionStarted = function trackConnectionStarted() {
          try {
            for (var _len20 = arguments.length, args = new Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
              args[_key20] = arguments[_key20];
            }
            var event = createConnectionStartedEvent.apply(void 0, [this.version].concat(args));
            this.dispatchUserActionEvent(event);
          } catch (e) {}
        }
        /**
         * Track connection success event.
         * @param args
         */;
        _proto13.trackConnectionCompleted = function trackConnectionCompleted() {
          try {
            for (var _len21 = arguments.length, args = new Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
              args[_key21] = arguments[_key21];
            }
            var event = createConnectionCompletedEvent.apply(void 0, [this.version].concat(args));
            this.dispatchUserActionEvent(event);
          } catch (e) {}
        }
        /**
         * Track connection error event.
         * @param args
         */;
        _proto13.trackConnectionError = function trackConnectionError() {
          try {
            for (var _len22 = arguments.length, args = new Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {
              args[_key22] = arguments[_key22];
            }
            var event = createConnectionErrorEvent.apply(void 0, [this.version].concat(args));
            this.dispatchUserActionEvent(event);
          } catch (e) {}
        }
        /**
         * Track connection restoring init event.
         * @param args
         */;
        _proto13.trackConnectionRestoringStarted = function trackConnectionRestoringStarted() {
          try {
            for (var _len23 = arguments.length, args = new Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {
              args[_key23] = arguments[_key23];
            }
            var event = createConnectionRestoringStartedEvent.apply(void 0, [this.version].concat(args));
            this.dispatchUserActionEvent(event);
          } catch (e) {}
        }
        /**
         * Track connection restoring success event.
         * @param args
         */;
        _proto13.trackConnectionRestoringCompleted = function trackConnectionRestoringCompleted() {
          try {
            for (var _len24 = arguments.length, args = new Array(_len24), _key24 = 0; _key24 < _len24; _key24++) {
              args[_key24] = arguments[_key24];
            }
            var event = createConnectionRestoringCompletedEvent.apply(void 0, [this.version].concat(args));
            this.dispatchUserActionEvent(event);
          } catch (e) {}
        }
        /**
         * Track connection restoring error event.
         * @param args
         */;
        _proto13.trackConnectionRestoringError = function trackConnectionRestoringError() {
          try {
            for (var _len25 = arguments.length, args = new Array(_len25), _key25 = 0; _key25 < _len25; _key25++) {
              args[_key25] = arguments[_key25];
            }
            var event = createConnectionRestoringErrorEvent.apply(void 0, [this.version].concat(args));
            this.dispatchUserActionEvent(event);
          } catch (e) {}
        }
        /**
         * Track disconnect event.
         * @param args
         */;
        _proto13.trackDisconnection = function trackDisconnection() {
          try {
            for (var _len26 = arguments.length, args = new Array(_len26), _key26 = 0; _key26 < _len26; _key26++) {
              args[_key26] = arguments[_key26];
            }
            var event = createDisconnectionEvent.apply(void 0, [this.version].concat(args));
            this.dispatchUserActionEvent(event);
          } catch (e) {}
        }
        /**
         * Track transaction init event.
         * @param args
         */;
        _proto13.trackTransactionSentForSignature = function trackTransactionSentForSignature() {
          try {
            for (var _len27 = arguments.length, args = new Array(_len27), _key27 = 0; _key27 < _len27; _key27++) {
              args[_key27] = arguments[_key27];
            }
            var event = createTransactionSentForSignatureEvent.apply(void 0, [this.version].concat(args));
            this.dispatchUserActionEvent(event);
          } catch (e) {}
        }
        /**
         * Track transaction signed event.
         * @param args
         */;
        _proto13.trackTransactionSigned = function trackTransactionSigned() {
          try {
            for (var _len28 = arguments.length, args = new Array(_len28), _key28 = 0; _key28 < _len28; _key28++) {
              args[_key28] = arguments[_key28];
            }
            var event = createTransactionSignedEvent.apply(void 0, [this.version].concat(args));
            this.dispatchUserActionEvent(event);
          } catch (e) {}
        }
        /**
         * Track transaction error event.
         * @param args
         */;
        _proto13.trackTransactionSigningFailed = function trackTransactionSigningFailed() {
          try {
            for (var _len29 = arguments.length, args = new Array(_len29), _key29 = 0; _key29 < _len29; _key29++) {
              args[_key29] = arguments[_key29];
            }
            var event = createTransactionSigningFailedEvent.apply(void 0, [this.version].concat(args));
            this.dispatchUserActionEvent(event);
          } catch (e) {}
        };
        _createClass(TonConnectTracker, [{
          key: "version",
          get: function get() {
            return createVersionInfo({
              ton_connect_sdk_lib: this.tonConnectSdkVersion,
              ton_connect_ui_lib: this.tonConnectUiVersion
            });
          }
        }]);
        return TonConnectTracker;
      }();
      var tonConnectSdkVersion = "3.0.5";
      var TonConnect = function (v) {
        return exports({
          TonConnect: v,
          default: v
        }), v;
      }( /*#__PURE__*/function () {
        function TonConnect(options) {
          this.walletsList = new WalletsListManager();
          this._wallet = null;
          this.provider = null;
          this.statusChangeSubscriptions = [];
          this.statusChangeErrorSubscriptions = [];
          this.dappSettings = {
            manifestUrl: (options === null || options === void 0 ? void 0 : options.manifestUrl) || getWebPageManifest(),
            storage: (options === null || options === void 0 ? void 0 : options.storage) || new DefaultStorage()
          };
          this.walletsList = new WalletsListManager({
            walletsListSource: options === null || options === void 0 ? void 0 : options.walletsListSource,
            cacheTTLMs: options === null || options === void 0 ? void 0 : options.walletsListCacheTTLMs
          });
          this.tracker = new TonConnectTracker({
            eventDispatcher: options === null || options === void 0 ? void 0 : options.eventDispatcher,
            tonConnectSdkVersion: tonConnectSdkVersion
          });
          if (!this.dappSettings.manifestUrl) {
            throw new DappMetadataError('Dapp tonconnect-manifest.json must be specified if window.location.origin is undefined. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest');
          }
          this.bridgeConnectionStorage = new BridgeConnectionStorage(this.dappSettings.storage);
          if (!(options === null || options === void 0 ? void 0 : options.disableAutoPauseConnection)) {
            this.addWindowFocusAndBlurSubscriptions();
          }
        }
        /**
         * Returns available wallets list.
         */
        TonConnect.getWallets = function getWallets() {
          return this.walletsList.getWallets();
        }
        /**
         * Shows if the wallet is connected right now.
         */;
        var _proto14 = TonConnect.prototype;
        /**
         * Returns available wallets list.
         */
        _proto14.getWallets = function getWallets() {
          return this.walletsList.getWallets();
        }
        /**
         * Allows to subscribe to connection status changes and handle connection errors.
         * @param callback will be called after connections status changes with actual wallet or null.
         * @param errorsHandler (optional) will be called with some instance of TonConnectError when connect error is received.
         * @returns unsubscribe callback.
         */;
        _proto14.onStatusChange = function onStatusChange(callback, errorsHandler) {
          var _this39 = this;
          this.statusChangeSubscriptions.push(callback);
          if (errorsHandler) {
            this.statusChangeErrorSubscriptions.push(errorsHandler);
          }
          return function () {
            _this39.statusChangeSubscriptions = _this39.statusChangeSubscriptions.filter(function (item) {
              return item !== callback;
            });
            if (errorsHandler) {
              _this39.statusChangeErrorSubscriptions = _this39.statusChangeErrorSubscriptions.filter(function (item) {
                return item !== errorsHandler;
              });
            }
          };
        };
        _proto14.connect = function connect(wallet, requestOrOptions) {
          var _this40 = this;
          var _a, _b;
          // TODO: remove deprecated method
          var options = {};
          if (typeof requestOrOptions === 'object' && 'tonProof' in requestOrOptions) {
            options.request = requestOrOptions;
          }
          if (typeof requestOrOptions === 'object' && ('openingDeadlineMS' in requestOrOptions || 'signal' in requestOrOptions || 'request' in requestOrOptions)) {
            options.request = requestOrOptions === null || requestOrOptions === void 0 ? void 0 : requestOrOptions.request;
            options.openingDeadlineMS = requestOrOptions === null || requestOrOptions === void 0 ? void 0 : requestOrOptions.openingDeadlineMS;
            options.signal = requestOrOptions === null || requestOrOptions === void 0 ? void 0 : requestOrOptions.signal;
          }
          if (this.connected) {
            throw new WalletAlreadyConnectedError();
          }
          var abortController = createAbortController(options === null || options === void 0 ? void 0 : options.signal);
          (_a = this.abortController) === null || _a === void 0 ? void 0 : _a.abort();
          this.abortController = abortController;
          if (abortController.signal.aborted) {
            throw new TonConnectError('Connection was aborted');
          }
          (_b = this.provider) === null || _b === void 0 ? void 0 : _b.closeConnection();
          this.provider = this.createProvider(wallet);
          abortController.signal.addEventListener('abort', function () {
            var _a;
            (_a = _this40.provider) === null || _a === void 0 ? void 0 : _a.closeConnection();
            _this40.provider = null;
          });
          this.tracker.trackConnectionStarted();
          return this.provider.connect(this.createConnectRequest(options === null || options === void 0 ? void 0 : options.request), {
            openingDeadlineMS: options === null || options === void 0 ? void 0 : options.openingDeadlineMS,
            signal: abortController.signal
          });
        }
        /**
         * Try to restore existing session and reconnect to the corresponding wallet. Call it immediately when your app is loaded.
         */;
        _proto14.restoreConnection = function restoreConnection(options) {
          var _a, _b;
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee66() {
            var _this41 = this;
            var abortController, _yield$Promise$all, bridgeConnectionType, embeddedWallet, provider, onAbortRestore, restoreConnectionTask, restoreConnectionTimeout;
            return _regeneratorRuntime().wrap(function _callee66$(_context66) {
              while (1) switch (_context66.prev = _context66.next) {
                case 0:
                  this.tracker.trackConnectionRestoringStarted();
                  abortController = createAbortController(options === null || options === void 0 ? void 0 : options.signal);
                  (_a = this.abortController) === null || _a === void 0 ? void 0 : _a.abort();
                  this.abortController = abortController;
                  if (!abortController.signal.aborted) {
                    _context66.next = 7;
                    break;
                  }
                  this.tracker.trackConnectionRestoringError('Connection restoring was aborted');
                  return _context66.abrupt("return");
                case 7:
                  _context66.next = 9;
                  return Promise.all([this.bridgeConnectionStorage.storedConnectionType(), this.walletsList.getEmbeddedWallet()]);
                case 9:
                  _yield$Promise$all = _context66.sent;
                  bridgeConnectionType = _yield$Promise$all[0];
                  embeddedWallet = _yield$Promise$all[1];
                  if (!abortController.signal.aborted) {
                    _context66.next = 15;
                    break;
                  }
                  this.tracker.trackConnectionRestoringError('Connection restoring was aborted');
                  return _context66.abrupt("return");
                case 15:
                  provider = null;
                  _context66.prev = 16;
                  _context66.t0 = bridgeConnectionType;
                  _context66.next = _context66.t0 === 'http' ? 20 : _context66.t0 === 'injected' ? 24 : 28;
                  break;
                case 20:
                  _context66.next = 22;
                  return BridgeProvider.fromStorage(this.dappSettings.storage);
                case 22:
                  provider = _context66.sent;
                  return _context66.abrupt("break", 33);
                case 24:
                  _context66.next = 26;
                  return InjectedProvider.fromStorage(this.dappSettings.storage);
                case 26:
                  provider = _context66.sent;
                  return _context66.abrupt("break", 33);
                case 28:
                  if (!embeddedWallet) {
                    _context66.next = 32;
                    break;
                  }
                  provider = this.createProvider(embeddedWallet);
                  _context66.next = 33;
                  break;
                case 32:
                  return _context66.abrupt("return");
                case 33:
                  _context66.next = 43;
                  break;
                case 35:
                  _context66.prev = 35;
                  _context66.t1 = _context66["catch"](16);
                  this.tracker.trackConnectionRestoringError('Provider is not restored');
                  _context66.next = 40;
                  return this.bridgeConnectionStorage.removeConnection();
                case 40:
                  provider === null || provider === void 0 ? void 0 : provider.closeConnection();
                  provider = null;
                  return _context66.abrupt("return");
                case 43:
                  if (!abortController.signal.aborted) {
                    _context66.next = 47;
                    break;
                  }
                  provider === null || provider === void 0 ? void 0 : provider.closeConnection();
                  this.tracker.trackConnectionRestoringError('Connection restoring was aborted');
                  return _context66.abrupt("return");
                case 47:
                  if (provider) {
                    _context66.next = 51;
                    break;
                  }
                  logError('Provider is not restored');
                  this.tracker.trackConnectionRestoringError('Provider is not restored');
                  return _context66.abrupt("return");
                case 51:
                  (_b = this.provider) === null || _b === void 0 ? void 0 : _b.closeConnection();
                  this.provider = provider;
                  provider.listen(this.walletEventsListener.bind(this));
                  onAbortRestore = function onAbortRestore() {
                    _this41.tracker.trackConnectionRestoringError('Connection restoring was aborted');
                    provider === null || provider === void 0 ? void 0 : provider.closeConnection();
                    provider = null;
                  };
                  abortController.signal.addEventListener('abort', onAbortRestore);
                  restoreConnectionTask = callForSuccess(function (_options) {
                    return __awaiter(_this41, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee65() {
                      return _regeneratorRuntime().wrap(function _callee65$(_context65) {
                        while (1) switch (_context65.prev = _context65.next) {
                          case 0:
                            _context65.next = 2;
                            return provider === null || provider === void 0 ? void 0 : provider.restoreConnection({
                              openingDeadlineMS: options === null || options === void 0 ? void 0 : options.openingDeadlineMS,
                              signal: _options.signal
                            });
                          case 2:
                            abortController.signal.removeEventListener('abort', onAbortRestore);
                            if (this.connected) {
                              this.tracker.trackConnectionRestoringCompleted(this.wallet);
                            } else {
                              this.tracker.trackConnectionRestoringError('Connection restoring failed');
                            }
                          case 4:
                          case "end":
                            return _context65.stop();
                        }
                      }, _callee65, this);
                    }));
                  }, {
                    attempts: Number.MAX_SAFE_INTEGER,
                    delayMs: 2000,
                    signal: options === null || options === void 0 ? void 0 : options.signal
                  });
                  restoreConnectionTimeout = new Promise(function (resolve) {
                    return setTimeout(function () {
                      return resolve();
                    }, 12000);
                  } // connection deadline
                  );

                  return _context66.abrupt("return", Promise.race([restoreConnectionTask, restoreConnectionTimeout]));
                case 59:
                case "end":
                  return _context66.stop();
              }
            }, _callee66, this, [[16, 35]]);
          }));
        };
        _proto14.sendTransaction = function sendTransaction(transaction, optionsOrOnRequestSent) {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee67() {
            var options, abortController, validUntil, tx, from, network, response, result;
            return _regeneratorRuntime().wrap(function _callee67$(_context67) {
              while (1) switch (_context67.prev = _context67.next) {
                case 0:
                  // TODO: remove deprecated method
                  options = {};
                  if (typeof optionsOrOnRequestSent === 'function') {
                    options.onRequestSent = optionsOrOnRequestSent;
                  } else {
                    options.onRequestSent = optionsOrOnRequestSent === null || optionsOrOnRequestSent === void 0 ? void 0 : optionsOrOnRequestSent.onRequestSent;
                    options.signal = optionsOrOnRequestSent === null || optionsOrOnRequestSent === void 0 ? void 0 : optionsOrOnRequestSent.signal;
                  }
                  abortController = createAbortController(options === null || options === void 0 ? void 0 : options.signal);
                  if (!abortController.signal.aborted) {
                    _context67.next = 5;
                    break;
                  }
                  throw new TonConnectError('Transaction sending was aborted');
                case 5:
                  this.checkConnection();
                  checkSendTransactionSupport(this.wallet.device.features, {
                    requiredMessagesNumber: transaction.messages.length
                  });
                  this.tracker.trackTransactionSentForSignature(this.wallet, transaction);
                  validUntil = transaction.validUntil, tx = __rest(transaction, ["validUntil"]);
                  from = transaction.from || this.account.address;
                  network = transaction.network || this.account.chain;
                  _context67.next = 13;
                  return this.provider.sendRequest(sendTransactionParser.convertToRpcRequest(Object.assign(Object.assign({}, tx), {
                    valid_until: validUntil,
                    from: from,
                    network: network
                  })), {
                    onRequestSent: options.onRequestSent,
                    signal: abortController.signal
                  });
                case 13:
                  response = _context67.sent;
                  if (!sendTransactionParser.isError(response)) {
                    _context67.next = 17;
                    break;
                  }
                  this.tracker.trackTransactionSigningFailed(this.wallet, transaction, response.error.message, response.error.code);
                  return _context67.abrupt("return", sendTransactionParser.parseAndThrowError(response));
                case 17:
                  result = sendTransactionParser.convertFromRpcResponse(response);
                  this.tracker.trackTransactionSigned(this.wallet, transaction, result);
                  return _context67.abrupt("return", result);
                case 20:
                case "end":
                  return _context67.stop();
              }
            }, _callee67, this);
          }));
        }
        /**
         * Disconnect form thw connected wallet and drop current session.
         */;
        _proto14.disconnect = function disconnect(options) {
          var _a;
          return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee68() {
            var abortController, prevAbortController;
            return _regeneratorRuntime().wrap(function _callee68$(_context68) {
              while (1) switch (_context68.prev = _context68.next) {
                case 0:
                  if (this.connected) {
                    _context68.next = 2;
                    break;
                  }
                  throw new WalletNotConnectedError();
                case 2:
                  abortController = createAbortController(options === null || options === void 0 ? void 0 : options.signal);
                  prevAbortController = this.abortController;
                  this.abortController = abortController;
                  if (!abortController.signal.aborted) {
                    _context68.next = 7;
                    break;
                  }
                  throw new TonConnectError('Disconnect was aborted');
                case 7:
                  this.onWalletDisconnected('dapp');
                  _context68.next = 10;
                  return (_a = this.provider) === null || _a === void 0 ? void 0 : _a.disconnect({
                    signal: abortController.signal
                  });
                case 10:
                  prevAbortController === null || prevAbortController === void 0 ? void 0 : prevAbortController.abort();
                case 11:
                case "end":
                  return _context68.stop();
              }
            }, _callee68, this);
          }));
        }
        /**
         * Pause bridge HTTP connection. Might be helpful, if you want to pause connections while browser tab is unfocused,
         * or if you use SDK with NodeJS and want to save server resources.
         */;
        _proto14.pauseConnection = function pauseConnection() {
          var _a;
          if (((_a = this.provider) === null || _a === void 0 ? void 0 : _a.type) !== 'http') {
            return;
          }
          this.provider.pause();
        }
        /**
         * Unpause bridge HTTP connection if it is paused.
         */;
        _proto14.unPauseConnection = function unPauseConnection() {
          var _a;
          if (((_a = this.provider) === null || _a === void 0 ? void 0 : _a.type) !== 'http') {
            return Promise.resolve();
          }
          return this.provider.unPause();
        };
        _proto14.addWindowFocusAndBlurSubscriptions = function addWindowFocusAndBlurSubscriptions() {
          var _this42 = this;
          var document = getDocument();
          if (!document) {
            return;
          }
          try {
            document.addEventListener('visibilitychange', function () {
              if (document.hidden) {
                _this42.pauseConnection();
              } else {
                _this42.unPauseConnection()["catch"]();
              }
            });
          } catch (e) {
            logError('Cannot subscribe to the document.visibilitychange: ', e);
          }
        };
        _proto14.createProvider = function createProvider(wallet) {
          var provider;
          if (!Array.isArray(wallet) && isWalletConnectionSourceJS(wallet)) {
            provider = new InjectedProvider(this.dappSettings.storage, wallet.jsBridgeKey);
          } else {
            provider = new BridgeProvider(this.dappSettings.storage, wallet);
          }
          provider.listen(this.walletEventsListener.bind(this));
          return provider;
        };
        _proto14.walletEventsListener = function walletEventsListener(e) {
          switch (e.event) {
            case 'connect':
              this.onWalletConnected(e.payload);
              break;
            case 'connect_error':
              this.onWalletConnectError(e.payload);
              break;
            case 'disconnect':
              this.onWalletDisconnected('wallet');
          }
        };
        _proto14.onWalletConnected = function onWalletConnected(connectEvent) {
          var tonAccountItem = connectEvent.items.find(function (item) {
            return item.name === 'ton_addr';
          });
          var tonProofItem = connectEvent.items.find(function (item) {
            return item.name === 'ton_proof';
          });
          if (!tonAccountItem) {
            throw new TonConnectError('ton_addr connection item was not found');
          }
          var wallet = {
            device: connectEvent.device,
            provider: this.provider.type,
            account: {
              address: tonAccountItem.address,
              chain: tonAccountItem.network,
              walletStateInit: tonAccountItem.walletStateInit,
              publicKey: tonAccountItem.publicKey
            }
          };
          if (tonProofItem) {
            wallet.connectItems = {
              tonProof: tonProofItem
            };
          }
          this.wallet = wallet;
          this.tracker.trackConnectionCompleted(wallet);
        };
        _proto14.onWalletConnectError = function onWalletConnectError(connectEventError) {
          var error = connectErrorsParser.parseError(connectEventError);
          this.statusChangeErrorSubscriptions.forEach(function (errorsHandler) {
            return errorsHandler(error);
          });
          logDebug(error);
          this.tracker.trackConnectionError(connectEventError.message, connectEventError.code);
          if (error instanceof ManifestNotFoundError || error instanceof ManifestContentErrorError) {
            logError(error);
            throw error;
          }
        };
        _proto14.onWalletDisconnected = function onWalletDisconnected(scope) {
          this.tracker.trackDisconnection(this.wallet, scope);
          this.wallet = null;
        };
        _proto14.checkConnection = function checkConnection() {
          if (!this.connected) {
            throw new WalletNotConnectedError();
          }
        };
        _proto14.createConnectRequest = function createConnectRequest(request) {
          var items = [{
            name: 'ton_addr'
          }];
          if (request === null || request === void 0 ? void 0 : request.tonProof) {
            items.push({
              name: 'ton_proof',
              payload: request.tonProof
            });
          }
          return {
            manifestUrl: this.dappSettings.manifestUrl,
            items: items
          };
        };
        _createClass(TonConnect, [{
          key: "connected",
          get: function get() {
            return this._wallet !== null;
          }
          /**
           * Current connected account or null if no account is connected.
           */
        }, {
          key: "account",
          get: function get() {
            var _a;
            return ((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.account) || null;
          }
          /**
           * Current connected wallet or null if no account is connected.
           */
        }, {
          key: "wallet",
          get: function get() {
            return this._wallet;
          },
          set: function set(value) {
            var _this43 = this;
            this._wallet = value;
            this.statusChangeSubscriptions.forEach(function (callback) {
              return callback(_this43._wallet);
            });
          }
        }]);
        return TonConnect;
      }());
      TonConnect.walletsList = new WalletsListManager();
      /**
       * Check if specified wallet is injected and available to use with the app.
       * @param walletJSKey target wallet's js bridge key.
       */
      TonConnect.isWalletInjected = function (walletJSKey) {
        return InjectedProvider.isWalletInjected(walletJSKey);
      };
      /**
       * Check if the app is opened inside specified wallet's browser.
       * @param walletJSKey target wallet's js bridge key.
       */
      TonConnect.isInsideWalletBrowser = function (walletJSKey) {
        return InjectedProvider.isInsideWalletBrowser(walletJSKey);
      };
      for (var ord = 0; ord <= 0xff; ord++) {
        var s = ord.toString(16);
        if (s.length < 2) {
          s = '0' + s;
        }
      }
    }
  };
});

System.register("chunks:///_virtual/index2.mjs", ['./rollupPluginModLoBabelHelpers.js'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }],
    execute: function () {
      // lib/index.ts
      var timeoutPromise = function timeoutPromise(promise, authTimeoutMs) {
        return Promise.race([promise, new Promise(function (_, reject) {
          setTimeout(function () {
            reject(new Error("Telegram authentication timed out"));
          }, authTimeoutMs);
        })]);
      };
      var telegramAuth = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(botId, options) {
          var _options, _options$requestAcces, requestAccess, _options$windowFeatur, windowFeatures, _options$windowTarget, windowTarget, _options$authTimeoutM, authTimeoutMs, _options$windowClosed, windowClosedPollMs, getTgListener, tgListener, hasReceivedResponse, searchParams, features, win, isClosedInterval, isClosedPoll, result;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (options === void 0) {
                  options = {};
                }
                _options = options, _options$requestAcces = _options.requestAccess, requestAccess = _options$requestAcces === void 0 ? "read" : _options$requestAcces, _options$windowFeatur = _options.windowFeatures, windowFeatures = _options$windowFeatur === void 0 ? {} : _options$windowFeatur, _options$windowTarget = _options.windowTarget, windowTarget = _options$windowTarget === void 0 ? "_blank" : _options$windowTarget, _options$authTimeoutM = _options.authTimeoutMs, authTimeoutMs = _options$authTimeoutM === void 0 ? 12e4 : _options$authTimeoutM, _options$windowClosed = _options.windowClosedPollMs, windowClosedPollMs = _options$windowClosed === void 0 ? 300 : _options$windowClosed;
                getTgListener = function getTgListener(resolve, reject) {
                  return function (event) {
                    if (event.isTrusted && event.origin === "https://oauth.telegram.org") {
                      try {
                        var _JSON$parse = JSON.parse(event.data),
                          origin = _JSON$parse.origin,
                          result2 = _JSON$parse.result;
                        if (origin === window.origin) {
                          resolve(result2);
                        } else {
                          reject(new Error("Received data contains invalid origin. Expected " + window.origin + ", received " + origin));
                        }
                      } catch (_unused) {
                        reject(new Error("Received unexpected message from Telegram"));
                      }
                    }
                  };
                };
                hasReceivedResponse = new Promise(function (resolve, reject) {
                  tgListener = getTgListener(resolve, reject);
                  window.addEventListener("message", tgListener);
                });
                searchParams = new URLSearchParams({
                  bot_id: botId,
                  request_access: requestAccess,
                  origin: window.origin,
                  lang: "en"
                  // TODO: Should this be a parameter? If so, what is the proper typing?
                });

                features = Object.entries(windowFeatures).map(function (_ref2) {
                  var key = _ref2[0],
                    val = _ref2[1];
                  if (typeof val === "number") {
                    return key + "=" + val;
                  }
                  return key;
                }).join(",");
                win = window.open("https://oauth.telegram.org/auth?" + searchParams, windowTarget, features);
                isClosedPoll = new Promise(function (resolve, reject) {
                  isClosedInterval = setInterval(function () {
                    if (win != null && win.closed) {
                      reject(new Error("The authentication window has been closed"));
                    }
                  }, windowClosedPollMs);
                });
                _context.next = 10;
                return Promise.race([authTimeoutMs === 0 ? hasReceivedResponse : timeoutPromise(hasReceivedResponse, authTimeoutMs), isClosedPoll])["finally"](function () {
                  window.removeEventListener("message", tgListener);
                  clearInterval(isClosedInterval);
                });
              case 10:
                result = _context.sent;
                return _context.abrupt("return", result);
              case 12:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function telegramAuth(_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }();
      var lib_default = exports('default', telegramAuth);
    }
  };
});

System.register("chunks:///_virtual/index3.mjs", ['./nacl-util.mjs_cjs=&original=.js', './nacl-fast.mjs_cjs=&original=.js', './nacl-util.js', './nacl-fast.js'], function (exports) {
  var _cjsExports, _cjsExports$1;
  return {
    setters: [null, null, function (module) {
      _cjsExports = module.default;
    }, function (module) {
      _cjsExports$1 = module.default;
    }],
    execute: function () {
      exports({
        CHAIN: void 0,
        CONNECT_EVENT_ERROR_CODES: void 0,
        CONNECT_ITEM_ERROR_CODES: void 0,
        DISCONNECT_ERROR_CODES: void 0,
        SEND_TRANSACTION_ERROR_CODES: void 0,
        SIGN_DATA_ERROR_CODES: void 0,
        concatUint8Arrays: concatUint8Arrays,
        hexToByteArray: hexToByteArray,
        splitToUint8Arrays: splitToUint8Arrays,
        toHexString: toHexString
      });
      var CONNECT_EVENT_ERROR_CODES;
      (function (CONNECT_EVENT_ERROR_CODES) {
        CONNECT_EVENT_ERROR_CODES[CONNECT_EVENT_ERROR_CODES["UNKNOWN_ERROR"] = 0] = "UNKNOWN_ERROR";
        CONNECT_EVENT_ERROR_CODES[CONNECT_EVENT_ERROR_CODES["BAD_REQUEST_ERROR"] = 1] = "BAD_REQUEST_ERROR";
        CONNECT_EVENT_ERROR_CODES[CONNECT_EVENT_ERROR_CODES["MANIFEST_NOT_FOUND_ERROR"] = 2] = "MANIFEST_NOT_FOUND_ERROR";
        CONNECT_EVENT_ERROR_CODES[CONNECT_EVENT_ERROR_CODES["MANIFEST_CONTENT_ERROR"] = 3] = "MANIFEST_CONTENT_ERROR";
        CONNECT_EVENT_ERROR_CODES[CONNECT_EVENT_ERROR_CODES["UNKNOWN_APP_ERROR"] = 100] = "UNKNOWN_APP_ERROR";
        CONNECT_EVENT_ERROR_CODES[CONNECT_EVENT_ERROR_CODES["USER_REJECTS_ERROR"] = 300] = "USER_REJECTS_ERROR";
        CONNECT_EVENT_ERROR_CODES[CONNECT_EVENT_ERROR_CODES["METHOD_NOT_SUPPORTED"] = 400] = "METHOD_NOT_SUPPORTED";
      })(CONNECT_EVENT_ERROR_CODES || (CONNECT_EVENT_ERROR_CODES = exports('CONNECT_EVENT_ERROR_CODES', {})));
      var CONNECT_ITEM_ERROR_CODES;
      (function (CONNECT_ITEM_ERROR_CODES) {
        CONNECT_ITEM_ERROR_CODES[CONNECT_ITEM_ERROR_CODES["UNKNOWN_ERROR"] = 0] = "UNKNOWN_ERROR";
        CONNECT_ITEM_ERROR_CODES[CONNECT_ITEM_ERROR_CODES["METHOD_NOT_SUPPORTED"] = 400] = "METHOD_NOT_SUPPORTED";
      })(CONNECT_ITEM_ERROR_CODES || (CONNECT_ITEM_ERROR_CODES = exports('CONNECT_ITEM_ERROR_CODES', {})));
      var SEND_TRANSACTION_ERROR_CODES;
      (function (SEND_TRANSACTION_ERROR_CODES) {
        SEND_TRANSACTION_ERROR_CODES[SEND_TRANSACTION_ERROR_CODES["UNKNOWN_ERROR"] = 0] = "UNKNOWN_ERROR";
        SEND_TRANSACTION_ERROR_CODES[SEND_TRANSACTION_ERROR_CODES["BAD_REQUEST_ERROR"] = 1] = "BAD_REQUEST_ERROR";
        SEND_TRANSACTION_ERROR_CODES[SEND_TRANSACTION_ERROR_CODES["UNKNOWN_APP_ERROR"] = 100] = "UNKNOWN_APP_ERROR";
        SEND_TRANSACTION_ERROR_CODES[SEND_TRANSACTION_ERROR_CODES["USER_REJECTS_ERROR"] = 300] = "USER_REJECTS_ERROR";
        SEND_TRANSACTION_ERROR_CODES[SEND_TRANSACTION_ERROR_CODES["METHOD_NOT_SUPPORTED"] = 400] = "METHOD_NOT_SUPPORTED";
      })(SEND_TRANSACTION_ERROR_CODES || (SEND_TRANSACTION_ERROR_CODES = exports('SEND_TRANSACTION_ERROR_CODES', {})));
      var SIGN_DATA_ERROR_CODES;
      (function (SIGN_DATA_ERROR_CODES) {
        SIGN_DATA_ERROR_CODES[SIGN_DATA_ERROR_CODES["UNKNOWN_ERROR"] = 0] = "UNKNOWN_ERROR";
        SIGN_DATA_ERROR_CODES[SIGN_DATA_ERROR_CODES["BAD_REQUEST_ERROR"] = 1] = "BAD_REQUEST_ERROR";
        SIGN_DATA_ERROR_CODES[SIGN_DATA_ERROR_CODES["UNKNOWN_APP_ERROR"] = 100] = "UNKNOWN_APP_ERROR";
        SIGN_DATA_ERROR_CODES[SIGN_DATA_ERROR_CODES["USER_REJECTS_ERROR"] = 300] = "USER_REJECTS_ERROR";
        SIGN_DATA_ERROR_CODES[SIGN_DATA_ERROR_CODES["METHOD_NOT_SUPPORTED"] = 400] = "METHOD_NOT_SUPPORTED";
      })(SIGN_DATA_ERROR_CODES || (SIGN_DATA_ERROR_CODES = exports('SIGN_DATA_ERROR_CODES', {})));
      var DISCONNECT_ERROR_CODES;
      (function (DISCONNECT_ERROR_CODES) {
        DISCONNECT_ERROR_CODES[DISCONNECT_ERROR_CODES["UNKNOWN_ERROR"] = 0] = "UNKNOWN_ERROR";
        DISCONNECT_ERROR_CODES[DISCONNECT_ERROR_CODES["BAD_REQUEST_ERROR"] = 1] = "BAD_REQUEST_ERROR";
        DISCONNECT_ERROR_CODES[DISCONNECT_ERROR_CODES["UNKNOWN_APP_ERROR"] = 100] = "UNKNOWN_APP_ERROR";
        DISCONNECT_ERROR_CODES[DISCONNECT_ERROR_CODES["METHOD_NOT_SUPPORTED"] = 400] = "METHOD_NOT_SUPPORTED";
      })(DISCONNECT_ERROR_CODES || (DISCONNECT_ERROR_CODES = exports('DISCONNECT_ERROR_CODES', {})));
      var CHAIN;
      (function (CHAIN) {
        CHAIN["MAINNET"] = "-239";
        CHAIN["TESTNET"] = "-3";
      })(CHAIN || (CHAIN = exports('CHAIN', {})));
      function encodeUint8Array(value, urlSafe) {
        var encoded = _cjsExports.encodeBase64(value);
        if (!urlSafe) {
          return encoded;
        }
        return encodeURIComponent(encoded);
      }
      function decodeToUint8Array(value, urlSafe) {
        if (urlSafe) {
          value = decodeURIComponent(value);
        }
        return _cjsExports.decodeBase64(value);
      }
      function encode(value, urlSafe) {
        if (urlSafe === void 0) {
          urlSafe = false;
        }
        var uint8Array;
        if (value instanceof Uint8Array) {
          uint8Array = value;
        } else {
          if (typeof value !== 'string') {
            value = JSON.stringify(value);
          }
          uint8Array = _cjsExports.decodeUTF8(value);
        }
        return encodeUint8Array(uint8Array, urlSafe);
      }
      function decode(value, urlSafe) {
        if (urlSafe === void 0) {
          urlSafe = false;
        }
        var decodedUint8Array = decodeToUint8Array(value, urlSafe);
        return {
          toString: function toString() {
            return _cjsExports.encodeUTF8(decodedUint8Array);
          },
          toObject: function toObject() {
            try {
              return JSON.parse(_cjsExports.encodeUTF8(decodedUint8Array));
            } catch (e) {
              return null;
            }
          },
          toUint8Array: function toUint8Array() {
            return decodedUint8Array;
          }
        };
      }
      var Base64 = exports('Base64', {
        encode: encode,
        decode: decode
      });
      function concatUint8Arrays(buffer1, buffer2) {
        var mergedArray = new Uint8Array(buffer1.length + buffer2.length);
        mergedArray.set(buffer1);
        mergedArray.set(buffer2, buffer1.length);
        return mergedArray;
      }
      function splitToUint8Arrays(array, index) {
        if (index >= array.length) {
          throw new Error('Index is out of buffer');
        }
        var subArray1 = array.slice(0, index);
        var subArray2 = array.slice(index);
        return [subArray1, subArray2];
      }
      function toHexString(byteArray) {
        var hexString = '';
        byteArray.forEach(function (_byte) {
          hexString += ('0' + (_byte & 0xff).toString(16)).slice(-2);
        });
        return hexString;
      }
      function hexToByteArray(hexString) {
        if (hexString.length % 2 !== 0) {
          throw new Error("Cannot convert " + hexString + " to bytesArray");
        }
        var result = new Uint8Array(hexString.length / 2);
        for (var i = 0; i < hexString.length; i += 2) {
          result[i / 2] = parseInt(hexString.slice(i, i + 2), 16);
        }
        return result;
      }
      var SessionCrypto = exports('SessionCrypto', /*#__PURE__*/function () {
        function SessionCrypto(keyPair) {
          this.nonceLength = 24;
          this.keyPair = keyPair ? this.createKeypairFromString(keyPair) : this.createKeypair();
          this.sessionId = toHexString(this.keyPair.publicKey);
        }
        var _proto = SessionCrypto.prototype;
        _proto.createKeypair = function createKeypair() {
          return _cjsExports$1.box.keyPair();
        };
        _proto.createKeypairFromString = function createKeypairFromString(keyPair) {
          return {
            publicKey: hexToByteArray(keyPair.publicKey),
            secretKey: hexToByteArray(keyPair.secretKey)
          };
        };
        _proto.createNonce = function createNonce() {
          return _cjsExports$1.randomBytes(this.nonceLength);
        };
        _proto.encrypt = function encrypt(message, receiverPublicKey) {
          var encodedMessage = new TextEncoder().encode(message);
          var nonce = this.createNonce();
          var encrypted = _cjsExports$1.box(encodedMessage, nonce, receiverPublicKey, this.keyPair.secretKey);
          return concatUint8Arrays(nonce, encrypted);
        };
        _proto.decrypt = function decrypt(message, senderPublicKey) {
          var _splitToUint8Arrays = splitToUint8Arrays(message, this.nonceLength),
            nonce = _splitToUint8Arrays[0],
            internalMessage = _splitToUint8Arrays[1];
          var decrypted = _cjsExports$1.box.open(internalMessage, nonce, senderPublicKey, this.keyPair.secretKey);
          if (!decrypted) {
            throw new Error("Decryption error: \n message: " + message.toString() + " \n sender pubkey: " + senderPublicKey.toString() + " \n keypair pubkey: " + this.keyPair.publicKey.toString() + " \n keypair secretkey: " + this.keyPair.secretKey.toString());
          }
          return new TextDecoder().decode(decrypted);
        };
        _proto.stringifyKeypair = function stringifyKeypair() {
          return {
            publicKey: toHexString(this.keyPair.publicKey),
            secretKey: toHexString(this.keyPair.secretKey)
          };
        };
        return SessionCrypto;
      }());
    }
  };
});

System.register("chunks:///_virtual/javascript,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20export%20const%20__cjsMetaURL%20%3D%20'crypto'%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20", [], function (exports) {
  return {
    execute: function () {
      var __cjsMetaURL = exports('__cjsMetaURL', 'crypto');
    }
  };
});

System.register("chunks:///_virtual/nacl-fast.js", ['./cjs-loader.mjs', './javascript,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20export%20const%20__cjsMetaURL%20%3D%20\'crypto\'%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'], function (exports, module) {
  var loader, __cjsMetaURL$1;
  return {
    setters: [function (module) {
      loader = module.default;
    }, function (module) {
      __cjsMetaURL$1 = module.__cjsMetaURL;
    }],
    execute: function () {
      exports('default', void 0);
      var _cjsExports;
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports$1, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE

        (function (nacl) {
          // Ported in 2014 by Dmitry Chestnykh and Devi Mandiri.
          // Public domain.
          //
          // Implementation derived from TweetNaCl version 20140427.
          // See for details: http://tweetnacl.cr.yp.to/
          var gf = function gf(init) {
            var i,
              r = new Float64Array(16);
            if (init) for (i = 0; i < init.length; i++) r[i] = init[i];
            return r;
          };

          //  Pluggable, initialized in high-level API below.
          var randombytes = function randombytes( /* x, n */
          ) {
            throw new Error('no PRNG');
          };
          var _0 = new Uint8Array(16);
          var _9 = new Uint8Array(32);
          _9[0] = 9;
          var gf0 = gf(),
            gf1 = gf([1]),
            _121665 = gf([0xdb41, 1]),
            D = gf([0x78a3, 0x1359, 0x4dca, 0x75eb, 0xd8ab, 0x4141, 0x0a4d, 0x0070, 0xe898, 0x7779, 0x4079, 0x8cc7, 0xfe73, 0x2b6f, 0x6cee, 0x5203]),
            D2 = gf([0xf159, 0x26b2, 0x9b94, 0xebd6, 0xb156, 0x8283, 0x149a, 0x00e0, 0xd130, 0xeef3, 0x80f2, 0x198e, 0xfce7, 0x56df, 0xd9dc, 0x2406]),
            X = gf([0xd51a, 0x8f25, 0x2d60, 0xc956, 0xa7b2, 0x9525, 0xc760, 0x692c, 0xdc5c, 0xfdd6, 0xe231, 0xc0a4, 0x53fe, 0xcd6e, 0x36d3, 0x2169]),
            Y = gf([0x6658, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666]),
            I = gf([0xa0b0, 0x4a0e, 0x1b27, 0xc4ee, 0xe478, 0xad2f, 0x1806, 0x2f43, 0xd7a7, 0x3dfb, 0x0099, 0x2b4d, 0xdf0b, 0x4fc1, 0x2480, 0x2b83]);
          function ts64(x, i, h, l) {
            x[i] = h >> 24 & 0xff;
            x[i + 1] = h >> 16 & 0xff;
            x[i + 2] = h >> 8 & 0xff;
            x[i + 3] = h & 0xff;
            x[i + 4] = l >> 24 & 0xff;
            x[i + 5] = l >> 16 & 0xff;
            x[i + 6] = l >> 8 & 0xff;
            x[i + 7] = l & 0xff;
          }
          function vn(x, xi, y, yi, n) {
            var i,
              d = 0;
            for (i = 0; i < n; i++) d |= x[xi + i] ^ y[yi + i];
            return (1 & d - 1 >>> 8) - 1;
          }
          function crypto_verify_16(x, xi, y, yi) {
            return vn(x, xi, y, yi, 16);
          }
          function crypto_verify_32(x, xi, y, yi) {
            return vn(x, xi, y, yi, 32);
          }
          function core_salsa20(o, p, k, c) {
            var j0 = c[0] & 0xff | (c[1] & 0xff) << 8 | (c[2] & 0xff) << 16 | (c[3] & 0xff) << 24,
              j1 = k[0] & 0xff | (k[1] & 0xff) << 8 | (k[2] & 0xff) << 16 | (k[3] & 0xff) << 24,
              j2 = k[4] & 0xff | (k[5] & 0xff) << 8 | (k[6] & 0xff) << 16 | (k[7] & 0xff) << 24,
              j3 = k[8] & 0xff | (k[9] & 0xff) << 8 | (k[10] & 0xff) << 16 | (k[11] & 0xff) << 24,
              j4 = k[12] & 0xff | (k[13] & 0xff) << 8 | (k[14] & 0xff) << 16 | (k[15] & 0xff) << 24,
              j5 = c[4] & 0xff | (c[5] & 0xff) << 8 | (c[6] & 0xff) << 16 | (c[7] & 0xff) << 24,
              j6 = p[0] & 0xff | (p[1] & 0xff) << 8 | (p[2] & 0xff) << 16 | (p[3] & 0xff) << 24,
              j7 = p[4] & 0xff | (p[5] & 0xff) << 8 | (p[6] & 0xff) << 16 | (p[7] & 0xff) << 24,
              j8 = p[8] & 0xff | (p[9] & 0xff) << 8 | (p[10] & 0xff) << 16 | (p[11] & 0xff) << 24,
              j9 = p[12] & 0xff | (p[13] & 0xff) << 8 | (p[14] & 0xff) << 16 | (p[15] & 0xff) << 24,
              j10 = c[8] & 0xff | (c[9] & 0xff) << 8 | (c[10] & 0xff) << 16 | (c[11] & 0xff) << 24,
              j11 = k[16] & 0xff | (k[17] & 0xff) << 8 | (k[18] & 0xff) << 16 | (k[19] & 0xff) << 24,
              j12 = k[20] & 0xff | (k[21] & 0xff) << 8 | (k[22] & 0xff) << 16 | (k[23] & 0xff) << 24,
              j13 = k[24] & 0xff | (k[25] & 0xff) << 8 | (k[26] & 0xff) << 16 | (k[27] & 0xff) << 24,
              j14 = k[28] & 0xff | (k[29] & 0xff) << 8 | (k[30] & 0xff) << 16 | (k[31] & 0xff) << 24,
              j15 = c[12] & 0xff | (c[13] & 0xff) << 8 | (c[14] & 0xff) << 16 | (c[15] & 0xff) << 24;
            var x0 = j0,
              x1 = j1,
              x2 = j2,
              x3 = j3,
              x4 = j4,
              x5 = j5,
              x6 = j6,
              x7 = j7,
              x8 = j8,
              x9 = j9,
              x10 = j10,
              x11 = j11,
              x12 = j12,
              x13 = j13,
              x14 = j14,
              x15 = j15,
              u;
            for (var i = 0; i < 20; i += 2) {
              u = x0 + x12 | 0;
              x4 ^= u << 7 | u >>> 32 - 7;
              u = x4 + x0 | 0;
              x8 ^= u << 9 | u >>> 32 - 9;
              u = x8 + x4 | 0;
              x12 ^= u << 13 | u >>> 32 - 13;
              u = x12 + x8 | 0;
              x0 ^= u << 18 | u >>> 32 - 18;
              u = x5 + x1 | 0;
              x9 ^= u << 7 | u >>> 32 - 7;
              u = x9 + x5 | 0;
              x13 ^= u << 9 | u >>> 32 - 9;
              u = x13 + x9 | 0;
              x1 ^= u << 13 | u >>> 32 - 13;
              u = x1 + x13 | 0;
              x5 ^= u << 18 | u >>> 32 - 18;
              u = x10 + x6 | 0;
              x14 ^= u << 7 | u >>> 32 - 7;
              u = x14 + x10 | 0;
              x2 ^= u << 9 | u >>> 32 - 9;
              u = x2 + x14 | 0;
              x6 ^= u << 13 | u >>> 32 - 13;
              u = x6 + x2 | 0;
              x10 ^= u << 18 | u >>> 32 - 18;
              u = x15 + x11 | 0;
              x3 ^= u << 7 | u >>> 32 - 7;
              u = x3 + x15 | 0;
              x7 ^= u << 9 | u >>> 32 - 9;
              u = x7 + x3 | 0;
              x11 ^= u << 13 | u >>> 32 - 13;
              u = x11 + x7 | 0;
              x15 ^= u << 18 | u >>> 32 - 18;
              u = x0 + x3 | 0;
              x1 ^= u << 7 | u >>> 32 - 7;
              u = x1 + x0 | 0;
              x2 ^= u << 9 | u >>> 32 - 9;
              u = x2 + x1 | 0;
              x3 ^= u << 13 | u >>> 32 - 13;
              u = x3 + x2 | 0;
              x0 ^= u << 18 | u >>> 32 - 18;
              u = x5 + x4 | 0;
              x6 ^= u << 7 | u >>> 32 - 7;
              u = x6 + x5 | 0;
              x7 ^= u << 9 | u >>> 32 - 9;
              u = x7 + x6 | 0;
              x4 ^= u << 13 | u >>> 32 - 13;
              u = x4 + x7 | 0;
              x5 ^= u << 18 | u >>> 32 - 18;
              u = x10 + x9 | 0;
              x11 ^= u << 7 | u >>> 32 - 7;
              u = x11 + x10 | 0;
              x8 ^= u << 9 | u >>> 32 - 9;
              u = x8 + x11 | 0;
              x9 ^= u << 13 | u >>> 32 - 13;
              u = x9 + x8 | 0;
              x10 ^= u << 18 | u >>> 32 - 18;
              u = x15 + x14 | 0;
              x12 ^= u << 7 | u >>> 32 - 7;
              u = x12 + x15 | 0;
              x13 ^= u << 9 | u >>> 32 - 9;
              u = x13 + x12 | 0;
              x14 ^= u << 13 | u >>> 32 - 13;
              u = x14 + x13 | 0;
              x15 ^= u << 18 | u >>> 32 - 18;
            }
            x0 = x0 + j0 | 0;
            x1 = x1 + j1 | 0;
            x2 = x2 + j2 | 0;
            x3 = x3 + j3 | 0;
            x4 = x4 + j4 | 0;
            x5 = x5 + j5 | 0;
            x6 = x6 + j6 | 0;
            x7 = x7 + j7 | 0;
            x8 = x8 + j8 | 0;
            x9 = x9 + j9 | 0;
            x10 = x10 + j10 | 0;
            x11 = x11 + j11 | 0;
            x12 = x12 + j12 | 0;
            x13 = x13 + j13 | 0;
            x14 = x14 + j14 | 0;
            x15 = x15 + j15 | 0;
            o[0] = x0 >>> 0 & 0xff;
            o[1] = x0 >>> 8 & 0xff;
            o[2] = x0 >>> 16 & 0xff;
            o[3] = x0 >>> 24 & 0xff;
            o[4] = x1 >>> 0 & 0xff;
            o[5] = x1 >>> 8 & 0xff;
            o[6] = x1 >>> 16 & 0xff;
            o[7] = x1 >>> 24 & 0xff;
            o[8] = x2 >>> 0 & 0xff;
            o[9] = x2 >>> 8 & 0xff;
            o[10] = x2 >>> 16 & 0xff;
            o[11] = x2 >>> 24 & 0xff;
            o[12] = x3 >>> 0 & 0xff;
            o[13] = x3 >>> 8 & 0xff;
            o[14] = x3 >>> 16 & 0xff;
            o[15] = x3 >>> 24 & 0xff;
            o[16] = x4 >>> 0 & 0xff;
            o[17] = x4 >>> 8 & 0xff;
            o[18] = x4 >>> 16 & 0xff;
            o[19] = x4 >>> 24 & 0xff;
            o[20] = x5 >>> 0 & 0xff;
            o[21] = x5 >>> 8 & 0xff;
            o[22] = x5 >>> 16 & 0xff;
            o[23] = x5 >>> 24 & 0xff;
            o[24] = x6 >>> 0 & 0xff;
            o[25] = x6 >>> 8 & 0xff;
            o[26] = x6 >>> 16 & 0xff;
            o[27] = x6 >>> 24 & 0xff;
            o[28] = x7 >>> 0 & 0xff;
            o[29] = x7 >>> 8 & 0xff;
            o[30] = x7 >>> 16 & 0xff;
            o[31] = x7 >>> 24 & 0xff;
            o[32] = x8 >>> 0 & 0xff;
            o[33] = x8 >>> 8 & 0xff;
            o[34] = x8 >>> 16 & 0xff;
            o[35] = x8 >>> 24 & 0xff;
            o[36] = x9 >>> 0 & 0xff;
            o[37] = x9 >>> 8 & 0xff;
            o[38] = x9 >>> 16 & 0xff;
            o[39] = x9 >>> 24 & 0xff;
            o[40] = x10 >>> 0 & 0xff;
            o[41] = x10 >>> 8 & 0xff;
            o[42] = x10 >>> 16 & 0xff;
            o[43] = x10 >>> 24 & 0xff;
            o[44] = x11 >>> 0 & 0xff;
            o[45] = x11 >>> 8 & 0xff;
            o[46] = x11 >>> 16 & 0xff;
            o[47] = x11 >>> 24 & 0xff;
            o[48] = x12 >>> 0 & 0xff;
            o[49] = x12 >>> 8 & 0xff;
            o[50] = x12 >>> 16 & 0xff;
            o[51] = x12 >>> 24 & 0xff;
            o[52] = x13 >>> 0 & 0xff;
            o[53] = x13 >>> 8 & 0xff;
            o[54] = x13 >>> 16 & 0xff;
            o[55] = x13 >>> 24 & 0xff;
            o[56] = x14 >>> 0 & 0xff;
            o[57] = x14 >>> 8 & 0xff;
            o[58] = x14 >>> 16 & 0xff;
            o[59] = x14 >>> 24 & 0xff;
            o[60] = x15 >>> 0 & 0xff;
            o[61] = x15 >>> 8 & 0xff;
            o[62] = x15 >>> 16 & 0xff;
            o[63] = x15 >>> 24 & 0xff;
          }
          function core_hsalsa20(o, p, k, c) {
            var j0 = c[0] & 0xff | (c[1] & 0xff) << 8 | (c[2] & 0xff) << 16 | (c[3] & 0xff) << 24,
              j1 = k[0] & 0xff | (k[1] & 0xff) << 8 | (k[2] & 0xff) << 16 | (k[3] & 0xff) << 24,
              j2 = k[4] & 0xff | (k[5] & 0xff) << 8 | (k[6] & 0xff) << 16 | (k[7] & 0xff) << 24,
              j3 = k[8] & 0xff | (k[9] & 0xff) << 8 | (k[10] & 0xff) << 16 | (k[11] & 0xff) << 24,
              j4 = k[12] & 0xff | (k[13] & 0xff) << 8 | (k[14] & 0xff) << 16 | (k[15] & 0xff) << 24,
              j5 = c[4] & 0xff | (c[5] & 0xff) << 8 | (c[6] & 0xff) << 16 | (c[7] & 0xff) << 24,
              j6 = p[0] & 0xff | (p[1] & 0xff) << 8 | (p[2] & 0xff) << 16 | (p[3] & 0xff) << 24,
              j7 = p[4] & 0xff | (p[5] & 0xff) << 8 | (p[6] & 0xff) << 16 | (p[7] & 0xff) << 24,
              j8 = p[8] & 0xff | (p[9] & 0xff) << 8 | (p[10] & 0xff) << 16 | (p[11] & 0xff) << 24,
              j9 = p[12] & 0xff | (p[13] & 0xff) << 8 | (p[14] & 0xff) << 16 | (p[15] & 0xff) << 24,
              j10 = c[8] & 0xff | (c[9] & 0xff) << 8 | (c[10] & 0xff) << 16 | (c[11] & 0xff) << 24,
              j11 = k[16] & 0xff | (k[17] & 0xff) << 8 | (k[18] & 0xff) << 16 | (k[19] & 0xff) << 24,
              j12 = k[20] & 0xff | (k[21] & 0xff) << 8 | (k[22] & 0xff) << 16 | (k[23] & 0xff) << 24,
              j13 = k[24] & 0xff | (k[25] & 0xff) << 8 | (k[26] & 0xff) << 16 | (k[27] & 0xff) << 24,
              j14 = k[28] & 0xff | (k[29] & 0xff) << 8 | (k[30] & 0xff) << 16 | (k[31] & 0xff) << 24,
              j15 = c[12] & 0xff | (c[13] & 0xff) << 8 | (c[14] & 0xff) << 16 | (c[15] & 0xff) << 24;
            var x0 = j0,
              x1 = j1,
              x2 = j2,
              x3 = j3,
              x4 = j4,
              x5 = j5,
              x6 = j6,
              x7 = j7,
              x8 = j8,
              x9 = j9,
              x10 = j10,
              x11 = j11,
              x12 = j12,
              x13 = j13,
              x14 = j14,
              x15 = j15,
              u;
            for (var i = 0; i < 20; i += 2) {
              u = x0 + x12 | 0;
              x4 ^= u << 7 | u >>> 32 - 7;
              u = x4 + x0 | 0;
              x8 ^= u << 9 | u >>> 32 - 9;
              u = x8 + x4 | 0;
              x12 ^= u << 13 | u >>> 32 - 13;
              u = x12 + x8 | 0;
              x0 ^= u << 18 | u >>> 32 - 18;
              u = x5 + x1 | 0;
              x9 ^= u << 7 | u >>> 32 - 7;
              u = x9 + x5 | 0;
              x13 ^= u << 9 | u >>> 32 - 9;
              u = x13 + x9 | 0;
              x1 ^= u << 13 | u >>> 32 - 13;
              u = x1 + x13 | 0;
              x5 ^= u << 18 | u >>> 32 - 18;
              u = x10 + x6 | 0;
              x14 ^= u << 7 | u >>> 32 - 7;
              u = x14 + x10 | 0;
              x2 ^= u << 9 | u >>> 32 - 9;
              u = x2 + x14 | 0;
              x6 ^= u << 13 | u >>> 32 - 13;
              u = x6 + x2 | 0;
              x10 ^= u << 18 | u >>> 32 - 18;
              u = x15 + x11 | 0;
              x3 ^= u << 7 | u >>> 32 - 7;
              u = x3 + x15 | 0;
              x7 ^= u << 9 | u >>> 32 - 9;
              u = x7 + x3 | 0;
              x11 ^= u << 13 | u >>> 32 - 13;
              u = x11 + x7 | 0;
              x15 ^= u << 18 | u >>> 32 - 18;
              u = x0 + x3 | 0;
              x1 ^= u << 7 | u >>> 32 - 7;
              u = x1 + x0 | 0;
              x2 ^= u << 9 | u >>> 32 - 9;
              u = x2 + x1 | 0;
              x3 ^= u << 13 | u >>> 32 - 13;
              u = x3 + x2 | 0;
              x0 ^= u << 18 | u >>> 32 - 18;
              u = x5 + x4 | 0;
              x6 ^= u << 7 | u >>> 32 - 7;
              u = x6 + x5 | 0;
              x7 ^= u << 9 | u >>> 32 - 9;
              u = x7 + x6 | 0;
              x4 ^= u << 13 | u >>> 32 - 13;
              u = x4 + x7 | 0;
              x5 ^= u << 18 | u >>> 32 - 18;
              u = x10 + x9 | 0;
              x11 ^= u << 7 | u >>> 32 - 7;
              u = x11 + x10 | 0;
              x8 ^= u << 9 | u >>> 32 - 9;
              u = x8 + x11 | 0;
              x9 ^= u << 13 | u >>> 32 - 13;
              u = x9 + x8 | 0;
              x10 ^= u << 18 | u >>> 32 - 18;
              u = x15 + x14 | 0;
              x12 ^= u << 7 | u >>> 32 - 7;
              u = x12 + x15 | 0;
              x13 ^= u << 9 | u >>> 32 - 9;
              u = x13 + x12 | 0;
              x14 ^= u << 13 | u >>> 32 - 13;
              u = x14 + x13 | 0;
              x15 ^= u << 18 | u >>> 32 - 18;
            }
            o[0] = x0 >>> 0 & 0xff;
            o[1] = x0 >>> 8 & 0xff;
            o[2] = x0 >>> 16 & 0xff;
            o[3] = x0 >>> 24 & 0xff;
            o[4] = x5 >>> 0 & 0xff;
            o[5] = x5 >>> 8 & 0xff;
            o[6] = x5 >>> 16 & 0xff;
            o[7] = x5 >>> 24 & 0xff;
            o[8] = x10 >>> 0 & 0xff;
            o[9] = x10 >>> 8 & 0xff;
            o[10] = x10 >>> 16 & 0xff;
            o[11] = x10 >>> 24 & 0xff;
            o[12] = x15 >>> 0 & 0xff;
            o[13] = x15 >>> 8 & 0xff;
            o[14] = x15 >>> 16 & 0xff;
            o[15] = x15 >>> 24 & 0xff;
            o[16] = x6 >>> 0 & 0xff;
            o[17] = x6 >>> 8 & 0xff;
            o[18] = x6 >>> 16 & 0xff;
            o[19] = x6 >>> 24 & 0xff;
            o[20] = x7 >>> 0 & 0xff;
            o[21] = x7 >>> 8 & 0xff;
            o[22] = x7 >>> 16 & 0xff;
            o[23] = x7 >>> 24 & 0xff;
            o[24] = x8 >>> 0 & 0xff;
            o[25] = x8 >>> 8 & 0xff;
            o[26] = x8 >>> 16 & 0xff;
            o[27] = x8 >>> 24 & 0xff;
            o[28] = x9 >>> 0 & 0xff;
            o[29] = x9 >>> 8 & 0xff;
            o[30] = x9 >>> 16 & 0xff;
            o[31] = x9 >>> 24 & 0xff;
          }
          function crypto_core_salsa20(out, inp, k, c) {
            core_salsa20(out, inp, k, c);
          }
          function crypto_core_hsalsa20(out, inp, k, c) {
            core_hsalsa20(out, inp, k, c);
          }
          var sigma = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);
          // "expand 32-byte k"

          function crypto_stream_salsa20_xor(c, cpos, m, mpos, b, n, k) {
            var z = new Uint8Array(16),
              x = new Uint8Array(64);
            var u, i;
            for (i = 0; i < 16; i++) z[i] = 0;
            for (i = 0; i < 8; i++) z[i] = n[i];
            while (b >= 64) {
              crypto_core_salsa20(x, z, k, sigma);
              for (i = 0; i < 64; i++) c[cpos + i] = m[mpos + i] ^ x[i];
              u = 1;
              for (i = 8; i < 16; i++) {
                u = u + (z[i] & 0xff) | 0;
                z[i] = u & 0xff;
                u >>>= 8;
              }
              b -= 64;
              cpos += 64;
              mpos += 64;
            }
            if (b > 0) {
              crypto_core_salsa20(x, z, k, sigma);
              for (i = 0; i < b; i++) c[cpos + i] = m[mpos + i] ^ x[i];
            }
            return 0;
          }
          function crypto_stream_salsa20(c, cpos, b, n, k) {
            var z = new Uint8Array(16),
              x = new Uint8Array(64);
            var u, i;
            for (i = 0; i < 16; i++) z[i] = 0;
            for (i = 0; i < 8; i++) z[i] = n[i];
            while (b >= 64) {
              crypto_core_salsa20(x, z, k, sigma);
              for (i = 0; i < 64; i++) c[cpos + i] = x[i];
              u = 1;
              for (i = 8; i < 16; i++) {
                u = u + (z[i] & 0xff) | 0;
                z[i] = u & 0xff;
                u >>>= 8;
              }
              b -= 64;
              cpos += 64;
            }
            if (b > 0) {
              crypto_core_salsa20(x, z, k, sigma);
              for (i = 0; i < b; i++) c[cpos + i] = x[i];
            }
            return 0;
          }
          function crypto_stream(c, cpos, d, n, k) {
            var s = new Uint8Array(32);
            crypto_core_hsalsa20(s, n, k, sigma);
            var sn = new Uint8Array(8);
            for (var i = 0; i < 8; i++) sn[i] = n[i + 16];
            return crypto_stream_salsa20(c, cpos, d, sn, s);
          }
          function crypto_stream_xor(c, cpos, m, mpos, d, n, k) {
            var s = new Uint8Array(32);
            crypto_core_hsalsa20(s, n, k, sigma);
            var sn = new Uint8Array(8);
            for (var i = 0; i < 8; i++) sn[i] = n[i + 16];
            return crypto_stream_salsa20_xor(c, cpos, m, mpos, d, sn, s);
          }

          /*
          * Port of Andrew Moon's Poly1305-donna-16. Public domain.
          * https://github.com/floodyberry/poly1305-donna
          */

          var poly1305 = function poly1305(key) {
            this.buffer = new Uint8Array(16);
            this.r = new Uint16Array(10);
            this.h = new Uint16Array(10);
            this.pad = new Uint16Array(8);
            this.leftover = 0;
            this.fin = 0;
            var t0, t1, t2, t3, t4, t5, t6, t7;
            t0 = key[0] & 0xff | (key[1] & 0xff) << 8;
            this.r[0] = t0 & 0x1fff;
            t1 = key[2] & 0xff | (key[3] & 0xff) << 8;
            this.r[1] = (t0 >>> 13 | t1 << 3) & 0x1fff;
            t2 = key[4] & 0xff | (key[5] & 0xff) << 8;
            this.r[2] = (t1 >>> 10 | t2 << 6) & 0x1f03;
            t3 = key[6] & 0xff | (key[7] & 0xff) << 8;
            this.r[3] = (t2 >>> 7 | t3 << 9) & 0x1fff;
            t4 = key[8] & 0xff | (key[9] & 0xff) << 8;
            this.r[4] = (t3 >>> 4 | t4 << 12) & 0x00ff;
            this.r[5] = t4 >>> 1 & 0x1ffe;
            t5 = key[10] & 0xff | (key[11] & 0xff) << 8;
            this.r[6] = (t4 >>> 14 | t5 << 2) & 0x1fff;
            t6 = key[12] & 0xff | (key[13] & 0xff) << 8;
            this.r[7] = (t5 >>> 11 | t6 << 5) & 0x1f81;
            t7 = key[14] & 0xff | (key[15] & 0xff) << 8;
            this.r[8] = (t6 >>> 8 | t7 << 8) & 0x1fff;
            this.r[9] = t7 >>> 5 & 0x007f;
            this.pad[0] = key[16] & 0xff | (key[17] & 0xff) << 8;
            this.pad[1] = key[18] & 0xff | (key[19] & 0xff) << 8;
            this.pad[2] = key[20] & 0xff | (key[21] & 0xff) << 8;
            this.pad[3] = key[22] & 0xff | (key[23] & 0xff) << 8;
            this.pad[4] = key[24] & 0xff | (key[25] & 0xff) << 8;
            this.pad[5] = key[26] & 0xff | (key[27] & 0xff) << 8;
            this.pad[6] = key[28] & 0xff | (key[29] & 0xff) << 8;
            this.pad[7] = key[30] & 0xff | (key[31] & 0xff) << 8;
          };
          poly1305.prototype.blocks = function (m, mpos, bytes) {
            var hibit = this.fin ? 0 : 1 << 11;
            var t0, t1, t2, t3, t4, t5, t6, t7, c;
            var d0, d1, d2, d3, d4, d5, d6, d7, d8, d9;
            var h0 = this.h[0],
              h1 = this.h[1],
              h2 = this.h[2],
              h3 = this.h[3],
              h4 = this.h[4],
              h5 = this.h[5],
              h6 = this.h[6],
              h7 = this.h[7],
              h8 = this.h[8],
              h9 = this.h[9];
            var r0 = this.r[0],
              r1 = this.r[1],
              r2 = this.r[2],
              r3 = this.r[3],
              r4 = this.r[4],
              r5 = this.r[5],
              r6 = this.r[6],
              r7 = this.r[7],
              r8 = this.r[8],
              r9 = this.r[9];
            while (bytes >= 16) {
              t0 = m[mpos + 0] & 0xff | (m[mpos + 1] & 0xff) << 8;
              h0 += t0 & 0x1fff;
              t1 = m[mpos + 2] & 0xff | (m[mpos + 3] & 0xff) << 8;
              h1 += (t0 >>> 13 | t1 << 3) & 0x1fff;
              t2 = m[mpos + 4] & 0xff | (m[mpos + 5] & 0xff) << 8;
              h2 += (t1 >>> 10 | t2 << 6) & 0x1fff;
              t3 = m[mpos + 6] & 0xff | (m[mpos + 7] & 0xff) << 8;
              h3 += (t2 >>> 7 | t3 << 9) & 0x1fff;
              t4 = m[mpos + 8] & 0xff | (m[mpos + 9] & 0xff) << 8;
              h4 += (t3 >>> 4 | t4 << 12) & 0x1fff;
              h5 += t4 >>> 1 & 0x1fff;
              t5 = m[mpos + 10] & 0xff | (m[mpos + 11] & 0xff) << 8;
              h6 += (t4 >>> 14 | t5 << 2) & 0x1fff;
              t6 = m[mpos + 12] & 0xff | (m[mpos + 13] & 0xff) << 8;
              h7 += (t5 >>> 11 | t6 << 5) & 0x1fff;
              t7 = m[mpos + 14] & 0xff | (m[mpos + 15] & 0xff) << 8;
              h8 += (t6 >>> 8 | t7 << 8) & 0x1fff;
              h9 += t7 >>> 5 | hibit;
              c = 0;
              d0 = c;
              d0 += h0 * r0;
              d0 += h1 * (5 * r9);
              d0 += h2 * (5 * r8);
              d0 += h3 * (5 * r7);
              d0 += h4 * (5 * r6);
              c = d0 >>> 13;
              d0 &= 0x1fff;
              d0 += h5 * (5 * r5);
              d0 += h6 * (5 * r4);
              d0 += h7 * (5 * r3);
              d0 += h8 * (5 * r2);
              d0 += h9 * (5 * r1);
              c += d0 >>> 13;
              d0 &= 0x1fff;
              d1 = c;
              d1 += h0 * r1;
              d1 += h1 * r0;
              d1 += h2 * (5 * r9);
              d1 += h3 * (5 * r8);
              d1 += h4 * (5 * r7);
              c = d1 >>> 13;
              d1 &= 0x1fff;
              d1 += h5 * (5 * r6);
              d1 += h6 * (5 * r5);
              d1 += h7 * (5 * r4);
              d1 += h8 * (5 * r3);
              d1 += h9 * (5 * r2);
              c += d1 >>> 13;
              d1 &= 0x1fff;
              d2 = c;
              d2 += h0 * r2;
              d2 += h1 * r1;
              d2 += h2 * r0;
              d2 += h3 * (5 * r9);
              d2 += h4 * (5 * r8);
              c = d2 >>> 13;
              d2 &= 0x1fff;
              d2 += h5 * (5 * r7);
              d2 += h6 * (5 * r6);
              d2 += h7 * (5 * r5);
              d2 += h8 * (5 * r4);
              d2 += h9 * (5 * r3);
              c += d2 >>> 13;
              d2 &= 0x1fff;
              d3 = c;
              d3 += h0 * r3;
              d3 += h1 * r2;
              d3 += h2 * r1;
              d3 += h3 * r0;
              d3 += h4 * (5 * r9);
              c = d3 >>> 13;
              d3 &= 0x1fff;
              d3 += h5 * (5 * r8);
              d3 += h6 * (5 * r7);
              d3 += h7 * (5 * r6);
              d3 += h8 * (5 * r5);
              d3 += h9 * (5 * r4);
              c += d3 >>> 13;
              d3 &= 0x1fff;
              d4 = c;
              d4 += h0 * r4;
              d4 += h1 * r3;
              d4 += h2 * r2;
              d4 += h3 * r1;
              d4 += h4 * r0;
              c = d4 >>> 13;
              d4 &= 0x1fff;
              d4 += h5 * (5 * r9);
              d4 += h6 * (5 * r8);
              d4 += h7 * (5 * r7);
              d4 += h8 * (5 * r6);
              d4 += h9 * (5 * r5);
              c += d4 >>> 13;
              d4 &= 0x1fff;
              d5 = c;
              d5 += h0 * r5;
              d5 += h1 * r4;
              d5 += h2 * r3;
              d5 += h3 * r2;
              d5 += h4 * r1;
              c = d5 >>> 13;
              d5 &= 0x1fff;
              d5 += h5 * r0;
              d5 += h6 * (5 * r9);
              d5 += h7 * (5 * r8);
              d5 += h8 * (5 * r7);
              d5 += h9 * (5 * r6);
              c += d5 >>> 13;
              d5 &= 0x1fff;
              d6 = c;
              d6 += h0 * r6;
              d6 += h1 * r5;
              d6 += h2 * r4;
              d6 += h3 * r3;
              d6 += h4 * r2;
              c = d6 >>> 13;
              d6 &= 0x1fff;
              d6 += h5 * r1;
              d6 += h6 * r0;
              d6 += h7 * (5 * r9);
              d6 += h8 * (5 * r8);
              d6 += h9 * (5 * r7);
              c += d6 >>> 13;
              d6 &= 0x1fff;
              d7 = c;
              d7 += h0 * r7;
              d7 += h1 * r6;
              d7 += h2 * r5;
              d7 += h3 * r4;
              d7 += h4 * r3;
              c = d7 >>> 13;
              d7 &= 0x1fff;
              d7 += h5 * r2;
              d7 += h6 * r1;
              d7 += h7 * r0;
              d7 += h8 * (5 * r9);
              d7 += h9 * (5 * r8);
              c += d7 >>> 13;
              d7 &= 0x1fff;
              d8 = c;
              d8 += h0 * r8;
              d8 += h1 * r7;
              d8 += h2 * r6;
              d8 += h3 * r5;
              d8 += h4 * r4;
              c = d8 >>> 13;
              d8 &= 0x1fff;
              d8 += h5 * r3;
              d8 += h6 * r2;
              d8 += h7 * r1;
              d8 += h8 * r0;
              d8 += h9 * (5 * r9);
              c += d8 >>> 13;
              d8 &= 0x1fff;
              d9 = c;
              d9 += h0 * r9;
              d9 += h1 * r8;
              d9 += h2 * r7;
              d9 += h3 * r6;
              d9 += h4 * r5;
              c = d9 >>> 13;
              d9 &= 0x1fff;
              d9 += h5 * r4;
              d9 += h6 * r3;
              d9 += h7 * r2;
              d9 += h8 * r1;
              d9 += h9 * r0;
              c += d9 >>> 13;
              d9 &= 0x1fff;
              c = (c << 2) + c | 0;
              c = c + d0 | 0;
              d0 = c & 0x1fff;
              c = c >>> 13;
              d1 += c;
              h0 = d0;
              h1 = d1;
              h2 = d2;
              h3 = d3;
              h4 = d4;
              h5 = d5;
              h6 = d6;
              h7 = d7;
              h8 = d8;
              h9 = d9;
              mpos += 16;
              bytes -= 16;
            }
            this.h[0] = h0;
            this.h[1] = h1;
            this.h[2] = h2;
            this.h[3] = h3;
            this.h[4] = h4;
            this.h[5] = h5;
            this.h[6] = h6;
            this.h[7] = h7;
            this.h[8] = h8;
            this.h[9] = h9;
          };
          poly1305.prototype.finish = function (mac, macpos) {
            var g = new Uint16Array(10);
            var c, mask, f, i;
            if (this.leftover) {
              i = this.leftover;
              this.buffer[i++] = 1;
              for (; i < 16; i++) this.buffer[i] = 0;
              this.fin = 1;
              this.blocks(this.buffer, 0, 16);
            }
            c = this.h[1] >>> 13;
            this.h[1] &= 0x1fff;
            for (i = 2; i < 10; i++) {
              this.h[i] += c;
              c = this.h[i] >>> 13;
              this.h[i] &= 0x1fff;
            }
            this.h[0] += c * 5;
            c = this.h[0] >>> 13;
            this.h[0] &= 0x1fff;
            this.h[1] += c;
            c = this.h[1] >>> 13;
            this.h[1] &= 0x1fff;
            this.h[2] += c;
            g[0] = this.h[0] + 5;
            c = g[0] >>> 13;
            g[0] &= 0x1fff;
            for (i = 1; i < 10; i++) {
              g[i] = this.h[i] + c;
              c = g[i] >>> 13;
              g[i] &= 0x1fff;
            }
            g[9] -= 1 << 13;
            mask = (c ^ 1) - 1;
            for (i = 0; i < 10; i++) g[i] &= mask;
            mask = ~mask;
            for (i = 0; i < 10; i++) this.h[i] = this.h[i] & mask | g[i];
            this.h[0] = (this.h[0] | this.h[1] << 13) & 0xffff;
            this.h[1] = (this.h[1] >>> 3 | this.h[2] << 10) & 0xffff;
            this.h[2] = (this.h[2] >>> 6 | this.h[3] << 7) & 0xffff;
            this.h[3] = (this.h[3] >>> 9 | this.h[4] << 4) & 0xffff;
            this.h[4] = (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14) & 0xffff;
            this.h[5] = (this.h[6] >>> 2 | this.h[7] << 11) & 0xffff;
            this.h[6] = (this.h[7] >>> 5 | this.h[8] << 8) & 0xffff;
            this.h[7] = (this.h[8] >>> 8 | this.h[9] << 5) & 0xffff;
            f = this.h[0] + this.pad[0];
            this.h[0] = f & 0xffff;
            for (i = 1; i < 8; i++) {
              f = (this.h[i] + this.pad[i] | 0) + (f >>> 16) | 0;
              this.h[i] = f & 0xffff;
            }
            mac[macpos + 0] = this.h[0] >>> 0 & 0xff;
            mac[macpos + 1] = this.h[0] >>> 8 & 0xff;
            mac[macpos + 2] = this.h[1] >>> 0 & 0xff;
            mac[macpos + 3] = this.h[1] >>> 8 & 0xff;
            mac[macpos + 4] = this.h[2] >>> 0 & 0xff;
            mac[macpos + 5] = this.h[2] >>> 8 & 0xff;
            mac[macpos + 6] = this.h[3] >>> 0 & 0xff;
            mac[macpos + 7] = this.h[3] >>> 8 & 0xff;
            mac[macpos + 8] = this.h[4] >>> 0 & 0xff;
            mac[macpos + 9] = this.h[4] >>> 8 & 0xff;
            mac[macpos + 10] = this.h[5] >>> 0 & 0xff;
            mac[macpos + 11] = this.h[5] >>> 8 & 0xff;
            mac[macpos + 12] = this.h[6] >>> 0 & 0xff;
            mac[macpos + 13] = this.h[6] >>> 8 & 0xff;
            mac[macpos + 14] = this.h[7] >>> 0 & 0xff;
            mac[macpos + 15] = this.h[7] >>> 8 & 0xff;
          };
          poly1305.prototype.update = function (m, mpos, bytes) {
            var i, want;
            if (this.leftover) {
              want = 16 - this.leftover;
              if (want > bytes) want = bytes;
              for (i = 0; i < want; i++) this.buffer[this.leftover + i] = m[mpos + i];
              bytes -= want;
              mpos += want;
              this.leftover += want;
              if (this.leftover < 16) return;
              this.blocks(this.buffer, 0, 16);
              this.leftover = 0;
            }
            if (bytes >= 16) {
              want = bytes - bytes % 16;
              this.blocks(m, mpos, want);
              mpos += want;
              bytes -= want;
            }
            if (bytes) {
              for (i = 0; i < bytes; i++) this.buffer[this.leftover + i] = m[mpos + i];
              this.leftover += bytes;
            }
          };
          function crypto_onetimeauth(out, outpos, m, mpos, n, k) {
            var s = new poly1305(k);
            s.update(m, mpos, n);
            s.finish(out, outpos);
            return 0;
          }
          function crypto_onetimeauth_verify(h, hpos, m, mpos, n, k) {
            var x = new Uint8Array(16);
            crypto_onetimeauth(x, 0, m, mpos, n, k);
            return crypto_verify_16(h, hpos, x, 0);
          }
          function crypto_secretbox(c, m, d, n, k) {
            var i;
            if (d < 32) return -1;
            crypto_stream_xor(c, 0, m, 0, d, n, k);
            crypto_onetimeauth(c, 16, c, 32, d - 32, c);
            for (i = 0; i < 16; i++) c[i] = 0;
            return 0;
          }
          function crypto_secretbox_open(m, c, d, n, k) {
            var i;
            var x = new Uint8Array(32);
            if (d < 32) return -1;
            crypto_stream(x, 0, 32, n, k);
            if (crypto_onetimeauth_verify(c, 16, c, 32, d - 32, x) !== 0) return -1;
            crypto_stream_xor(m, 0, c, 0, d, n, k);
            for (i = 0; i < 32; i++) m[i] = 0;
            return 0;
          }
          function set25519(r, a) {
            var i;
            for (i = 0; i < 16; i++) r[i] = a[i] | 0;
          }
          function car25519(o) {
            var i,
              v,
              c = 1;
            for (i = 0; i < 16; i++) {
              v = o[i] + c + 65535;
              c = Math.floor(v / 65536);
              o[i] = v - c * 65536;
            }
            o[0] += c - 1 + 37 * (c - 1);
          }
          function sel25519(p, q, b) {
            var t,
              c = ~(b - 1);
            for (var i = 0; i < 16; i++) {
              t = c & (p[i] ^ q[i]);
              p[i] ^= t;
              q[i] ^= t;
            }
          }
          function pack25519(o, n) {
            var i, j, b;
            var m = gf(),
              t = gf();
            for (i = 0; i < 16; i++) t[i] = n[i];
            car25519(t);
            car25519(t);
            car25519(t);
            for (j = 0; j < 2; j++) {
              m[0] = t[0] - 0xffed;
              for (i = 1; i < 15; i++) {
                m[i] = t[i] - 0xffff - (m[i - 1] >> 16 & 1);
                m[i - 1] &= 0xffff;
              }
              m[15] = t[15] - 0x7fff - (m[14] >> 16 & 1);
              b = m[15] >> 16 & 1;
              m[14] &= 0xffff;
              sel25519(t, m, 1 - b);
            }
            for (i = 0; i < 16; i++) {
              o[2 * i] = t[i] & 0xff;
              o[2 * i + 1] = t[i] >> 8;
            }
          }
          function neq25519(a, b) {
            var c = new Uint8Array(32),
              d = new Uint8Array(32);
            pack25519(c, a);
            pack25519(d, b);
            return crypto_verify_32(c, 0, d, 0);
          }
          function par25519(a) {
            var d = new Uint8Array(32);
            pack25519(d, a);
            return d[0] & 1;
          }
          function unpack25519(o, n) {
            var i;
            for (i = 0; i < 16; i++) o[i] = n[2 * i] + (n[2 * i + 1] << 8);
            o[15] &= 0x7fff;
          }
          function A(o, a, b) {
            for (var i = 0; i < 16; i++) o[i] = a[i] + b[i];
          }
          function Z(o, a, b) {
            for (var i = 0; i < 16; i++) o[i] = a[i] - b[i];
          }
          function M(o, a, b) {
            var v,
              c,
              t0 = 0,
              t1 = 0,
              t2 = 0,
              t3 = 0,
              t4 = 0,
              t5 = 0,
              t6 = 0,
              t7 = 0,
              t8 = 0,
              t9 = 0,
              t10 = 0,
              t11 = 0,
              t12 = 0,
              t13 = 0,
              t14 = 0,
              t15 = 0,
              t16 = 0,
              t17 = 0,
              t18 = 0,
              t19 = 0,
              t20 = 0,
              t21 = 0,
              t22 = 0,
              t23 = 0,
              t24 = 0,
              t25 = 0,
              t26 = 0,
              t27 = 0,
              t28 = 0,
              t29 = 0,
              t30 = 0,
              b0 = b[0],
              b1 = b[1],
              b2 = b[2],
              b3 = b[3],
              b4 = b[4],
              b5 = b[5],
              b6 = b[6],
              b7 = b[7],
              b8 = b[8],
              b9 = b[9],
              b10 = b[10],
              b11 = b[11],
              b12 = b[12],
              b13 = b[13],
              b14 = b[14],
              b15 = b[15];
            v = a[0];
            t0 += v * b0;
            t1 += v * b1;
            t2 += v * b2;
            t3 += v * b3;
            t4 += v * b4;
            t5 += v * b5;
            t6 += v * b6;
            t7 += v * b7;
            t8 += v * b8;
            t9 += v * b9;
            t10 += v * b10;
            t11 += v * b11;
            t12 += v * b12;
            t13 += v * b13;
            t14 += v * b14;
            t15 += v * b15;
            v = a[1];
            t1 += v * b0;
            t2 += v * b1;
            t3 += v * b2;
            t4 += v * b3;
            t5 += v * b4;
            t6 += v * b5;
            t7 += v * b6;
            t8 += v * b7;
            t9 += v * b8;
            t10 += v * b9;
            t11 += v * b10;
            t12 += v * b11;
            t13 += v * b12;
            t14 += v * b13;
            t15 += v * b14;
            t16 += v * b15;
            v = a[2];
            t2 += v * b0;
            t3 += v * b1;
            t4 += v * b2;
            t5 += v * b3;
            t6 += v * b4;
            t7 += v * b5;
            t8 += v * b6;
            t9 += v * b7;
            t10 += v * b8;
            t11 += v * b9;
            t12 += v * b10;
            t13 += v * b11;
            t14 += v * b12;
            t15 += v * b13;
            t16 += v * b14;
            t17 += v * b15;
            v = a[3];
            t3 += v * b0;
            t4 += v * b1;
            t5 += v * b2;
            t6 += v * b3;
            t7 += v * b4;
            t8 += v * b5;
            t9 += v * b6;
            t10 += v * b7;
            t11 += v * b8;
            t12 += v * b9;
            t13 += v * b10;
            t14 += v * b11;
            t15 += v * b12;
            t16 += v * b13;
            t17 += v * b14;
            t18 += v * b15;
            v = a[4];
            t4 += v * b0;
            t5 += v * b1;
            t6 += v * b2;
            t7 += v * b3;
            t8 += v * b4;
            t9 += v * b5;
            t10 += v * b6;
            t11 += v * b7;
            t12 += v * b8;
            t13 += v * b9;
            t14 += v * b10;
            t15 += v * b11;
            t16 += v * b12;
            t17 += v * b13;
            t18 += v * b14;
            t19 += v * b15;
            v = a[5];
            t5 += v * b0;
            t6 += v * b1;
            t7 += v * b2;
            t8 += v * b3;
            t9 += v * b4;
            t10 += v * b5;
            t11 += v * b6;
            t12 += v * b7;
            t13 += v * b8;
            t14 += v * b9;
            t15 += v * b10;
            t16 += v * b11;
            t17 += v * b12;
            t18 += v * b13;
            t19 += v * b14;
            t20 += v * b15;
            v = a[6];
            t6 += v * b0;
            t7 += v * b1;
            t8 += v * b2;
            t9 += v * b3;
            t10 += v * b4;
            t11 += v * b5;
            t12 += v * b6;
            t13 += v * b7;
            t14 += v * b8;
            t15 += v * b9;
            t16 += v * b10;
            t17 += v * b11;
            t18 += v * b12;
            t19 += v * b13;
            t20 += v * b14;
            t21 += v * b15;
            v = a[7];
            t7 += v * b0;
            t8 += v * b1;
            t9 += v * b2;
            t10 += v * b3;
            t11 += v * b4;
            t12 += v * b5;
            t13 += v * b6;
            t14 += v * b7;
            t15 += v * b8;
            t16 += v * b9;
            t17 += v * b10;
            t18 += v * b11;
            t19 += v * b12;
            t20 += v * b13;
            t21 += v * b14;
            t22 += v * b15;
            v = a[8];
            t8 += v * b0;
            t9 += v * b1;
            t10 += v * b2;
            t11 += v * b3;
            t12 += v * b4;
            t13 += v * b5;
            t14 += v * b6;
            t15 += v * b7;
            t16 += v * b8;
            t17 += v * b9;
            t18 += v * b10;
            t19 += v * b11;
            t20 += v * b12;
            t21 += v * b13;
            t22 += v * b14;
            t23 += v * b15;
            v = a[9];
            t9 += v * b0;
            t10 += v * b1;
            t11 += v * b2;
            t12 += v * b3;
            t13 += v * b4;
            t14 += v * b5;
            t15 += v * b6;
            t16 += v * b7;
            t17 += v * b8;
            t18 += v * b9;
            t19 += v * b10;
            t20 += v * b11;
            t21 += v * b12;
            t22 += v * b13;
            t23 += v * b14;
            t24 += v * b15;
            v = a[10];
            t10 += v * b0;
            t11 += v * b1;
            t12 += v * b2;
            t13 += v * b3;
            t14 += v * b4;
            t15 += v * b5;
            t16 += v * b6;
            t17 += v * b7;
            t18 += v * b8;
            t19 += v * b9;
            t20 += v * b10;
            t21 += v * b11;
            t22 += v * b12;
            t23 += v * b13;
            t24 += v * b14;
            t25 += v * b15;
            v = a[11];
            t11 += v * b0;
            t12 += v * b1;
            t13 += v * b2;
            t14 += v * b3;
            t15 += v * b4;
            t16 += v * b5;
            t17 += v * b6;
            t18 += v * b7;
            t19 += v * b8;
            t20 += v * b9;
            t21 += v * b10;
            t22 += v * b11;
            t23 += v * b12;
            t24 += v * b13;
            t25 += v * b14;
            t26 += v * b15;
            v = a[12];
            t12 += v * b0;
            t13 += v * b1;
            t14 += v * b2;
            t15 += v * b3;
            t16 += v * b4;
            t17 += v * b5;
            t18 += v * b6;
            t19 += v * b7;
            t20 += v * b8;
            t21 += v * b9;
            t22 += v * b10;
            t23 += v * b11;
            t24 += v * b12;
            t25 += v * b13;
            t26 += v * b14;
            t27 += v * b15;
            v = a[13];
            t13 += v * b0;
            t14 += v * b1;
            t15 += v * b2;
            t16 += v * b3;
            t17 += v * b4;
            t18 += v * b5;
            t19 += v * b6;
            t20 += v * b7;
            t21 += v * b8;
            t22 += v * b9;
            t23 += v * b10;
            t24 += v * b11;
            t25 += v * b12;
            t26 += v * b13;
            t27 += v * b14;
            t28 += v * b15;
            v = a[14];
            t14 += v * b0;
            t15 += v * b1;
            t16 += v * b2;
            t17 += v * b3;
            t18 += v * b4;
            t19 += v * b5;
            t20 += v * b6;
            t21 += v * b7;
            t22 += v * b8;
            t23 += v * b9;
            t24 += v * b10;
            t25 += v * b11;
            t26 += v * b12;
            t27 += v * b13;
            t28 += v * b14;
            t29 += v * b15;
            v = a[15];
            t15 += v * b0;
            t16 += v * b1;
            t17 += v * b2;
            t18 += v * b3;
            t19 += v * b4;
            t20 += v * b5;
            t21 += v * b6;
            t22 += v * b7;
            t23 += v * b8;
            t24 += v * b9;
            t25 += v * b10;
            t26 += v * b11;
            t27 += v * b12;
            t28 += v * b13;
            t29 += v * b14;
            t30 += v * b15;
            t0 += 38 * t16;
            t1 += 38 * t17;
            t2 += 38 * t18;
            t3 += 38 * t19;
            t4 += 38 * t20;
            t5 += 38 * t21;
            t6 += 38 * t22;
            t7 += 38 * t23;
            t8 += 38 * t24;
            t9 += 38 * t25;
            t10 += 38 * t26;
            t11 += 38 * t27;
            t12 += 38 * t28;
            t13 += 38 * t29;
            t14 += 38 * t30;
            // t15 left as is

            // first car
            c = 1;
            v = t0 + c + 65535;
            c = Math.floor(v / 65536);
            t0 = v - c * 65536;
            v = t1 + c + 65535;
            c = Math.floor(v / 65536);
            t1 = v - c * 65536;
            v = t2 + c + 65535;
            c = Math.floor(v / 65536);
            t2 = v - c * 65536;
            v = t3 + c + 65535;
            c = Math.floor(v / 65536);
            t3 = v - c * 65536;
            v = t4 + c + 65535;
            c = Math.floor(v / 65536);
            t4 = v - c * 65536;
            v = t5 + c + 65535;
            c = Math.floor(v / 65536);
            t5 = v - c * 65536;
            v = t6 + c + 65535;
            c = Math.floor(v / 65536);
            t6 = v - c * 65536;
            v = t7 + c + 65535;
            c = Math.floor(v / 65536);
            t7 = v - c * 65536;
            v = t8 + c + 65535;
            c = Math.floor(v / 65536);
            t8 = v - c * 65536;
            v = t9 + c + 65535;
            c = Math.floor(v / 65536);
            t9 = v - c * 65536;
            v = t10 + c + 65535;
            c = Math.floor(v / 65536);
            t10 = v - c * 65536;
            v = t11 + c + 65535;
            c = Math.floor(v / 65536);
            t11 = v - c * 65536;
            v = t12 + c + 65535;
            c = Math.floor(v / 65536);
            t12 = v - c * 65536;
            v = t13 + c + 65535;
            c = Math.floor(v / 65536);
            t13 = v - c * 65536;
            v = t14 + c + 65535;
            c = Math.floor(v / 65536);
            t14 = v - c * 65536;
            v = t15 + c + 65535;
            c = Math.floor(v / 65536);
            t15 = v - c * 65536;
            t0 += c - 1 + 37 * (c - 1);

            // second car
            c = 1;
            v = t0 + c + 65535;
            c = Math.floor(v / 65536);
            t0 = v - c * 65536;
            v = t1 + c + 65535;
            c = Math.floor(v / 65536);
            t1 = v - c * 65536;
            v = t2 + c + 65535;
            c = Math.floor(v / 65536);
            t2 = v - c * 65536;
            v = t3 + c + 65535;
            c = Math.floor(v / 65536);
            t3 = v - c * 65536;
            v = t4 + c + 65535;
            c = Math.floor(v / 65536);
            t4 = v - c * 65536;
            v = t5 + c + 65535;
            c = Math.floor(v / 65536);
            t5 = v - c * 65536;
            v = t6 + c + 65535;
            c = Math.floor(v / 65536);
            t6 = v - c * 65536;
            v = t7 + c + 65535;
            c = Math.floor(v / 65536);
            t7 = v - c * 65536;
            v = t8 + c + 65535;
            c = Math.floor(v / 65536);
            t8 = v - c * 65536;
            v = t9 + c + 65535;
            c = Math.floor(v / 65536);
            t9 = v - c * 65536;
            v = t10 + c + 65535;
            c = Math.floor(v / 65536);
            t10 = v - c * 65536;
            v = t11 + c + 65535;
            c = Math.floor(v / 65536);
            t11 = v - c * 65536;
            v = t12 + c + 65535;
            c = Math.floor(v / 65536);
            t12 = v - c * 65536;
            v = t13 + c + 65535;
            c = Math.floor(v / 65536);
            t13 = v - c * 65536;
            v = t14 + c + 65535;
            c = Math.floor(v / 65536);
            t14 = v - c * 65536;
            v = t15 + c + 65535;
            c = Math.floor(v / 65536);
            t15 = v - c * 65536;
            t0 += c - 1 + 37 * (c - 1);
            o[0] = t0;
            o[1] = t1;
            o[2] = t2;
            o[3] = t3;
            o[4] = t4;
            o[5] = t5;
            o[6] = t6;
            o[7] = t7;
            o[8] = t8;
            o[9] = t9;
            o[10] = t10;
            o[11] = t11;
            o[12] = t12;
            o[13] = t13;
            o[14] = t14;
            o[15] = t15;
          }
          function S(o, a) {
            M(o, a, a);
          }
          function inv25519(o, i) {
            var c = gf();
            var a;
            for (a = 0; a < 16; a++) c[a] = i[a];
            for (a = 253; a >= 0; a--) {
              S(c, c);
              if (a !== 2 && a !== 4) M(c, c, i);
            }
            for (a = 0; a < 16; a++) o[a] = c[a];
          }
          function pow2523(o, i) {
            var c = gf();
            var a;
            for (a = 0; a < 16; a++) c[a] = i[a];
            for (a = 250; a >= 0; a--) {
              S(c, c);
              if (a !== 1) M(c, c, i);
            }
            for (a = 0; a < 16; a++) o[a] = c[a];
          }
          function crypto_scalarmult(q, n, p) {
            var z = new Uint8Array(32);
            var x = new Float64Array(80),
              r,
              i;
            var a = gf(),
              b = gf(),
              c = gf(),
              d = gf(),
              e = gf(),
              f = gf();
            for (i = 0; i < 31; i++) z[i] = n[i];
            z[31] = n[31] & 127 | 64;
            z[0] &= 248;
            unpack25519(x, p);
            for (i = 0; i < 16; i++) {
              b[i] = x[i];
              d[i] = a[i] = c[i] = 0;
            }
            a[0] = d[0] = 1;
            for (i = 254; i >= 0; --i) {
              r = z[i >>> 3] >>> (i & 7) & 1;
              sel25519(a, b, r);
              sel25519(c, d, r);
              A(e, a, c);
              Z(a, a, c);
              A(c, b, d);
              Z(b, b, d);
              S(d, e);
              S(f, a);
              M(a, c, a);
              M(c, b, e);
              A(e, a, c);
              Z(a, a, c);
              S(b, a);
              Z(c, d, f);
              M(a, c, _121665);
              A(a, a, d);
              M(c, c, a);
              M(a, d, f);
              M(d, b, x);
              S(b, e);
              sel25519(a, b, r);
              sel25519(c, d, r);
            }
            for (i = 0; i < 16; i++) {
              x[i + 16] = a[i];
              x[i + 32] = c[i];
              x[i + 48] = b[i];
              x[i + 64] = d[i];
            }
            var x32 = x.subarray(32);
            var x16 = x.subarray(16);
            inv25519(x32, x32);
            M(x16, x16, x32);
            pack25519(q, x16);
            return 0;
          }
          function crypto_scalarmult_base(q, n) {
            return crypto_scalarmult(q, n, _9);
          }
          function crypto_box_keypair(y, x) {
            randombytes(x, 32);
            return crypto_scalarmult_base(y, x);
          }
          function crypto_box_beforenm(k, y, x) {
            var s = new Uint8Array(32);
            crypto_scalarmult(s, x, y);
            return crypto_core_hsalsa20(k, _0, s, sigma);
          }
          var crypto_box_afternm = crypto_secretbox;
          var crypto_box_open_afternm = crypto_secretbox_open;
          function crypto_box(c, m, d, n, y, x) {
            var k = new Uint8Array(32);
            crypto_box_beforenm(k, y, x);
            return crypto_box_afternm(c, m, d, n, k);
          }
          function crypto_box_open(m, c, d, n, y, x) {
            var k = new Uint8Array(32);
            crypto_box_beforenm(k, y, x);
            return crypto_box_open_afternm(m, c, d, n, k);
          }
          var K = [0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd, 0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc, 0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019, 0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118, 0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe, 0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2, 0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1, 0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694, 0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3, 0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65, 0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483, 0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5, 0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210, 0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4, 0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725, 0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70, 0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926, 0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df, 0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8, 0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b, 0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001, 0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30, 0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910, 0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8, 0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53, 0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8, 0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb, 0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3, 0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60, 0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec, 0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9, 0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b, 0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207, 0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178, 0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6, 0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b, 0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493, 0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c, 0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a, 0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817];
          function crypto_hashblocks_hl(hh, hl, m, n) {
            var wh = new Int32Array(16),
              wl = new Int32Array(16),
              bh0,
              bh1,
              bh2,
              bh3,
              bh4,
              bh5,
              bh6,
              bh7,
              bl0,
              bl1,
              bl2,
              bl3,
              bl4,
              bl5,
              bl6,
              bl7,
              th,
              tl,
              i,
              j,
              h,
              l,
              a,
              b,
              c,
              d;
            var ah0 = hh[0],
              ah1 = hh[1],
              ah2 = hh[2],
              ah3 = hh[3],
              ah4 = hh[4],
              ah5 = hh[5],
              ah6 = hh[6],
              ah7 = hh[7],
              al0 = hl[0],
              al1 = hl[1],
              al2 = hl[2],
              al3 = hl[3],
              al4 = hl[4],
              al5 = hl[5],
              al6 = hl[6],
              al7 = hl[7];
            var pos = 0;
            while (n >= 128) {
              for (i = 0; i < 16; i++) {
                j = 8 * i + pos;
                wh[i] = m[j + 0] << 24 | m[j + 1] << 16 | m[j + 2] << 8 | m[j + 3];
                wl[i] = m[j + 4] << 24 | m[j + 5] << 16 | m[j + 6] << 8 | m[j + 7];
              }
              for (i = 0; i < 80; i++) {
                bh0 = ah0;
                bh1 = ah1;
                bh2 = ah2;
                bh3 = ah3;
                bh4 = ah4;
                bh5 = ah5;
                bh6 = ah6;
                bh7 = ah7;
                bl0 = al0;
                bl1 = al1;
                bl2 = al2;
                bl3 = al3;
                bl4 = al4;
                bl5 = al5;
                bl6 = al6;
                bl7 = al7;

                // add
                h = ah7;
                l = al7;
                a = l & 0xffff;
                b = l >>> 16;
                c = h & 0xffff;
                d = h >>> 16;

                // Sigma1
                h = (ah4 >>> 14 | al4 << 32 - 14) ^ (ah4 >>> 18 | al4 << 32 - 18) ^ (al4 >>> 41 - 32 | ah4 << 32 - (41 - 32));
                l = (al4 >>> 14 | ah4 << 32 - 14) ^ (al4 >>> 18 | ah4 << 32 - 18) ^ (ah4 >>> 41 - 32 | al4 << 32 - (41 - 32));
                a += l & 0xffff;
                b += l >>> 16;
                c += h & 0xffff;
                d += h >>> 16;

                // Ch
                h = ah4 & ah5 ^ ~ah4 & ah6;
                l = al4 & al5 ^ ~al4 & al6;
                a += l & 0xffff;
                b += l >>> 16;
                c += h & 0xffff;
                d += h >>> 16;

                // K
                h = K[i * 2];
                l = K[i * 2 + 1];
                a += l & 0xffff;
                b += l >>> 16;
                c += h & 0xffff;
                d += h >>> 16;

                // w
                h = wh[i % 16];
                l = wl[i % 16];
                a += l & 0xffff;
                b += l >>> 16;
                c += h & 0xffff;
                d += h >>> 16;
                b += a >>> 16;
                c += b >>> 16;
                d += c >>> 16;
                th = c & 0xffff | d << 16;
                tl = a & 0xffff | b << 16;

                // add
                h = th;
                l = tl;
                a = l & 0xffff;
                b = l >>> 16;
                c = h & 0xffff;
                d = h >>> 16;

                // Sigma0
                h = (ah0 >>> 28 | al0 << 32 - 28) ^ (al0 >>> 34 - 32 | ah0 << 32 - (34 - 32)) ^ (al0 >>> 39 - 32 | ah0 << 32 - (39 - 32));
                l = (al0 >>> 28 | ah0 << 32 - 28) ^ (ah0 >>> 34 - 32 | al0 << 32 - (34 - 32)) ^ (ah0 >>> 39 - 32 | al0 << 32 - (39 - 32));
                a += l & 0xffff;
                b += l >>> 16;
                c += h & 0xffff;
                d += h >>> 16;

                // Maj
                h = ah0 & ah1 ^ ah0 & ah2 ^ ah1 & ah2;
                l = al0 & al1 ^ al0 & al2 ^ al1 & al2;
                a += l & 0xffff;
                b += l >>> 16;
                c += h & 0xffff;
                d += h >>> 16;
                b += a >>> 16;
                c += b >>> 16;
                d += c >>> 16;
                bh7 = c & 0xffff | d << 16;
                bl7 = a & 0xffff | b << 16;

                // add
                h = bh3;
                l = bl3;
                a = l & 0xffff;
                b = l >>> 16;
                c = h & 0xffff;
                d = h >>> 16;
                h = th;
                l = tl;
                a += l & 0xffff;
                b += l >>> 16;
                c += h & 0xffff;
                d += h >>> 16;
                b += a >>> 16;
                c += b >>> 16;
                d += c >>> 16;
                bh3 = c & 0xffff | d << 16;
                bl3 = a & 0xffff | b << 16;
                ah1 = bh0;
                ah2 = bh1;
                ah3 = bh2;
                ah4 = bh3;
                ah5 = bh4;
                ah6 = bh5;
                ah7 = bh6;
                ah0 = bh7;
                al1 = bl0;
                al2 = bl1;
                al3 = bl2;
                al4 = bl3;
                al5 = bl4;
                al6 = bl5;
                al7 = bl6;
                al0 = bl7;
                if (i % 16 === 15) {
                  for (j = 0; j < 16; j++) {
                    // add
                    h = wh[j];
                    l = wl[j];
                    a = l & 0xffff;
                    b = l >>> 16;
                    c = h & 0xffff;
                    d = h >>> 16;
                    h = wh[(j + 9) % 16];
                    l = wl[(j + 9) % 16];
                    a += l & 0xffff;
                    b += l >>> 16;
                    c += h & 0xffff;
                    d += h >>> 16;

                    // sigma0
                    th = wh[(j + 1) % 16];
                    tl = wl[(j + 1) % 16];
                    h = (th >>> 1 | tl << 32 - 1) ^ (th >>> 8 | tl << 32 - 8) ^ th >>> 7;
                    l = (tl >>> 1 | th << 32 - 1) ^ (tl >>> 8 | th << 32 - 8) ^ (tl >>> 7 | th << 32 - 7);
                    a += l & 0xffff;
                    b += l >>> 16;
                    c += h & 0xffff;
                    d += h >>> 16;

                    // sigma1
                    th = wh[(j + 14) % 16];
                    tl = wl[(j + 14) % 16];
                    h = (th >>> 19 | tl << 32 - 19) ^ (tl >>> 61 - 32 | th << 32 - (61 - 32)) ^ th >>> 6;
                    l = (tl >>> 19 | th << 32 - 19) ^ (th >>> 61 - 32 | tl << 32 - (61 - 32)) ^ (tl >>> 6 | th << 32 - 6);
                    a += l & 0xffff;
                    b += l >>> 16;
                    c += h & 0xffff;
                    d += h >>> 16;
                    b += a >>> 16;
                    c += b >>> 16;
                    d += c >>> 16;
                    wh[j] = c & 0xffff | d << 16;
                    wl[j] = a & 0xffff | b << 16;
                  }
                }
              }

              // add
              h = ah0;
              l = al0;
              a = l & 0xffff;
              b = l >>> 16;
              c = h & 0xffff;
              d = h >>> 16;
              h = hh[0];
              l = hl[0];
              a += l & 0xffff;
              b += l >>> 16;
              c += h & 0xffff;
              d += h >>> 16;
              b += a >>> 16;
              c += b >>> 16;
              d += c >>> 16;
              hh[0] = ah0 = c & 0xffff | d << 16;
              hl[0] = al0 = a & 0xffff | b << 16;
              h = ah1;
              l = al1;
              a = l & 0xffff;
              b = l >>> 16;
              c = h & 0xffff;
              d = h >>> 16;
              h = hh[1];
              l = hl[1];
              a += l & 0xffff;
              b += l >>> 16;
              c += h & 0xffff;
              d += h >>> 16;
              b += a >>> 16;
              c += b >>> 16;
              d += c >>> 16;
              hh[1] = ah1 = c & 0xffff | d << 16;
              hl[1] = al1 = a & 0xffff | b << 16;
              h = ah2;
              l = al2;
              a = l & 0xffff;
              b = l >>> 16;
              c = h & 0xffff;
              d = h >>> 16;
              h = hh[2];
              l = hl[2];
              a += l & 0xffff;
              b += l >>> 16;
              c += h & 0xffff;
              d += h >>> 16;
              b += a >>> 16;
              c += b >>> 16;
              d += c >>> 16;
              hh[2] = ah2 = c & 0xffff | d << 16;
              hl[2] = al2 = a & 0xffff | b << 16;
              h = ah3;
              l = al3;
              a = l & 0xffff;
              b = l >>> 16;
              c = h & 0xffff;
              d = h >>> 16;
              h = hh[3];
              l = hl[3];
              a += l & 0xffff;
              b += l >>> 16;
              c += h & 0xffff;
              d += h >>> 16;
              b += a >>> 16;
              c += b >>> 16;
              d += c >>> 16;
              hh[3] = ah3 = c & 0xffff | d << 16;
              hl[3] = al3 = a & 0xffff | b << 16;
              h = ah4;
              l = al4;
              a = l & 0xffff;
              b = l >>> 16;
              c = h & 0xffff;
              d = h >>> 16;
              h = hh[4];
              l = hl[4];
              a += l & 0xffff;
              b += l >>> 16;
              c += h & 0xffff;
              d += h >>> 16;
              b += a >>> 16;
              c += b >>> 16;
              d += c >>> 16;
              hh[4] = ah4 = c & 0xffff | d << 16;
              hl[4] = al4 = a & 0xffff | b << 16;
              h = ah5;
              l = al5;
              a = l & 0xffff;
              b = l >>> 16;
              c = h & 0xffff;
              d = h >>> 16;
              h = hh[5];
              l = hl[5];
              a += l & 0xffff;
              b += l >>> 16;
              c += h & 0xffff;
              d += h >>> 16;
              b += a >>> 16;
              c += b >>> 16;
              d += c >>> 16;
              hh[5] = ah5 = c & 0xffff | d << 16;
              hl[5] = al5 = a & 0xffff | b << 16;
              h = ah6;
              l = al6;
              a = l & 0xffff;
              b = l >>> 16;
              c = h & 0xffff;
              d = h >>> 16;
              h = hh[6];
              l = hl[6];
              a += l & 0xffff;
              b += l >>> 16;
              c += h & 0xffff;
              d += h >>> 16;
              b += a >>> 16;
              c += b >>> 16;
              d += c >>> 16;
              hh[6] = ah6 = c & 0xffff | d << 16;
              hl[6] = al6 = a & 0xffff | b << 16;
              h = ah7;
              l = al7;
              a = l & 0xffff;
              b = l >>> 16;
              c = h & 0xffff;
              d = h >>> 16;
              h = hh[7];
              l = hl[7];
              a += l & 0xffff;
              b += l >>> 16;
              c += h & 0xffff;
              d += h >>> 16;
              b += a >>> 16;
              c += b >>> 16;
              d += c >>> 16;
              hh[7] = ah7 = c & 0xffff | d << 16;
              hl[7] = al7 = a & 0xffff | b << 16;
              pos += 128;
              n -= 128;
            }
            return n;
          }
          function crypto_hash(out, m, n) {
            var hh = new Int32Array(8),
              hl = new Int32Array(8),
              x = new Uint8Array(256),
              i,
              b = n;
            hh[0] = 0x6a09e667;
            hh[1] = 0xbb67ae85;
            hh[2] = 0x3c6ef372;
            hh[3] = 0xa54ff53a;
            hh[4] = 0x510e527f;
            hh[5] = 0x9b05688c;
            hh[6] = 0x1f83d9ab;
            hh[7] = 0x5be0cd19;
            hl[0] = 0xf3bcc908;
            hl[1] = 0x84caa73b;
            hl[2] = 0xfe94f82b;
            hl[3] = 0x5f1d36f1;
            hl[4] = 0xade682d1;
            hl[5] = 0x2b3e6c1f;
            hl[6] = 0xfb41bd6b;
            hl[7] = 0x137e2179;
            crypto_hashblocks_hl(hh, hl, m, n);
            n %= 128;
            for (i = 0; i < n; i++) x[i] = m[b - n + i];
            x[n] = 128;
            n = 256 - 128 * (n < 112 ? 1 : 0);
            x[n - 9] = 0;
            ts64(x, n - 8, b / 0x20000000 | 0, b << 3);
            crypto_hashblocks_hl(hh, hl, x, n);
            for (i = 0; i < 8; i++) ts64(out, 8 * i, hh[i], hl[i]);
            return 0;
          }
          function add(p, q) {
            var a = gf(),
              b = gf(),
              c = gf(),
              d = gf(),
              e = gf(),
              f = gf(),
              g = gf(),
              h = gf(),
              t = gf();
            Z(a, p[1], p[0]);
            Z(t, q[1], q[0]);
            M(a, a, t);
            A(b, p[0], p[1]);
            A(t, q[0], q[1]);
            M(b, b, t);
            M(c, p[3], q[3]);
            M(c, c, D2);
            M(d, p[2], q[2]);
            A(d, d, d);
            Z(e, b, a);
            Z(f, d, c);
            A(g, d, c);
            A(h, b, a);
            M(p[0], e, f);
            M(p[1], h, g);
            M(p[2], g, f);
            M(p[3], e, h);
          }
          function cswap(p, q, b) {
            var i;
            for (i = 0; i < 4; i++) {
              sel25519(p[i], q[i], b);
            }
          }
          function pack(r, p) {
            var tx = gf(),
              ty = gf(),
              zi = gf();
            inv25519(zi, p[2]);
            M(tx, p[0], zi);
            M(ty, p[1], zi);
            pack25519(r, ty);
            r[31] ^= par25519(tx) << 7;
          }
          function scalarmult(p, q, s) {
            var b, i;
            set25519(p[0], gf0);
            set25519(p[1], gf1);
            set25519(p[2], gf1);
            set25519(p[3], gf0);
            for (i = 255; i >= 0; --i) {
              b = s[i / 8 | 0] >> (i & 7) & 1;
              cswap(p, q, b);
              add(q, p);
              add(p, p);
              cswap(p, q, b);
            }
          }
          function scalarbase(p, s) {
            var q = [gf(), gf(), gf(), gf()];
            set25519(q[0], X);
            set25519(q[1], Y);
            set25519(q[2], gf1);
            M(q[3], X, Y);
            scalarmult(p, q, s);
          }
          function crypto_sign_keypair(pk, sk, seeded) {
            var d = new Uint8Array(64);
            var p = [gf(), gf(), gf(), gf()];
            var i;
            if (!seeded) randombytes(sk, 32);
            crypto_hash(d, sk, 32);
            d[0] &= 248;
            d[31] &= 127;
            d[31] |= 64;
            scalarbase(p, d);
            pack(pk, p);
            for (i = 0; i < 32; i++) sk[i + 32] = pk[i];
            return 0;
          }
          var L = new Float64Array([0xed, 0xd3, 0xf5, 0x5c, 0x1a, 0x63, 0x12, 0x58, 0xd6, 0x9c, 0xf7, 0xa2, 0xde, 0xf9, 0xde, 0x14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x10]);
          function modL(r, x) {
            var carry, i, j, k;
            for (i = 63; i >= 32; --i) {
              carry = 0;
              for (j = i - 32, k = i - 12; j < k; ++j) {
                x[j] += carry - 16 * x[i] * L[j - (i - 32)];
                carry = Math.floor((x[j] + 128) / 256);
                x[j] -= carry * 256;
              }
              x[j] += carry;
              x[i] = 0;
            }
            carry = 0;
            for (j = 0; j < 32; j++) {
              x[j] += carry - (x[31] >> 4) * L[j];
              carry = x[j] >> 8;
              x[j] &= 255;
            }
            for (j = 0; j < 32; j++) x[j] -= carry * L[j];
            for (i = 0; i < 32; i++) {
              x[i + 1] += x[i] >> 8;
              r[i] = x[i] & 255;
            }
          }
          function reduce(r) {
            var x = new Float64Array(64),
              i;
            for (i = 0; i < 64; i++) x[i] = r[i];
            for (i = 0; i < 64; i++) r[i] = 0;
            modL(r, x);
          }

          // Note: difference from C - smlen returned, not passed as argument.
          function crypto_sign(sm, m, n, sk) {
            var d = new Uint8Array(64),
              h = new Uint8Array(64),
              r = new Uint8Array(64);
            var i,
              j,
              x = new Float64Array(64);
            var p = [gf(), gf(), gf(), gf()];
            crypto_hash(d, sk, 32);
            d[0] &= 248;
            d[31] &= 127;
            d[31] |= 64;
            var smlen = n + 64;
            for (i = 0; i < n; i++) sm[64 + i] = m[i];
            for (i = 0; i < 32; i++) sm[32 + i] = d[32 + i];
            crypto_hash(r, sm.subarray(32), n + 32);
            reduce(r);
            scalarbase(p, r);
            pack(sm, p);
            for (i = 32; i < 64; i++) sm[i] = sk[i];
            crypto_hash(h, sm, n + 64);
            reduce(h);
            for (i = 0; i < 64; i++) x[i] = 0;
            for (i = 0; i < 32; i++) x[i] = r[i];
            for (i = 0; i < 32; i++) {
              for (j = 0; j < 32; j++) {
                x[i + j] += h[i] * d[j];
              }
            }
            modL(sm.subarray(32), x);
            return smlen;
          }
          function unpackneg(r, p) {
            var t = gf(),
              chk = gf(),
              num = gf(),
              den = gf(),
              den2 = gf(),
              den4 = gf(),
              den6 = gf();
            set25519(r[2], gf1);
            unpack25519(r[1], p);
            S(num, r[1]);
            M(den, num, D);
            Z(num, num, r[2]);
            A(den, r[2], den);
            S(den2, den);
            S(den4, den2);
            M(den6, den4, den2);
            M(t, den6, num);
            M(t, t, den);
            pow2523(t, t);
            M(t, t, num);
            M(t, t, den);
            M(t, t, den);
            M(r[0], t, den);
            S(chk, r[0]);
            M(chk, chk, den);
            if (neq25519(chk, num)) M(r[0], r[0], I);
            S(chk, r[0]);
            M(chk, chk, den);
            if (neq25519(chk, num)) return -1;
            if (par25519(r[0]) === p[31] >> 7) Z(r[0], gf0, r[0]);
            M(r[3], r[0], r[1]);
            return 0;
          }
          function crypto_sign_open(m, sm, n, pk) {
            var i;
            var t = new Uint8Array(32),
              h = new Uint8Array(64);
            var p = [gf(), gf(), gf(), gf()],
              q = [gf(), gf(), gf(), gf()];
            if (n < 64) return -1;
            if (unpackneg(q, pk)) return -1;
            for (i = 0; i < n; i++) m[i] = sm[i];
            for (i = 0; i < 32; i++) m[i + 32] = pk[i];
            crypto_hash(h, m, n);
            reduce(h);
            scalarmult(p, q, h);
            scalarbase(q, sm.subarray(32));
            add(p, q);
            pack(t, p);
            n -= 64;
            if (crypto_verify_32(sm, 0, t, 0)) {
              for (i = 0; i < n; i++) m[i] = 0;
              return -1;
            }
            for (i = 0; i < n; i++) m[i] = sm[i + 64];
            return n;
          }
          var crypto_secretbox_KEYBYTES = 32,
            crypto_secretbox_NONCEBYTES = 24,
            crypto_secretbox_ZEROBYTES = 32,
            crypto_secretbox_BOXZEROBYTES = 16,
            crypto_scalarmult_BYTES = 32,
            crypto_scalarmult_SCALARBYTES = 32,
            crypto_box_PUBLICKEYBYTES = 32,
            crypto_box_SECRETKEYBYTES = 32,
            crypto_box_BEFORENMBYTES = 32,
            crypto_box_NONCEBYTES = crypto_secretbox_NONCEBYTES,
            crypto_box_ZEROBYTES = crypto_secretbox_ZEROBYTES,
            crypto_box_BOXZEROBYTES = crypto_secretbox_BOXZEROBYTES,
            crypto_sign_BYTES = 64,
            crypto_sign_PUBLICKEYBYTES = 32,
            crypto_sign_SECRETKEYBYTES = 64,
            crypto_sign_SEEDBYTES = 32,
            crypto_hash_BYTES = 64;
          nacl.lowlevel = {
            crypto_core_hsalsa20: crypto_core_hsalsa20,
            crypto_stream_xor: crypto_stream_xor,
            crypto_stream: crypto_stream,
            crypto_stream_salsa20_xor: crypto_stream_salsa20_xor,
            crypto_stream_salsa20: crypto_stream_salsa20,
            crypto_onetimeauth: crypto_onetimeauth,
            crypto_onetimeauth_verify: crypto_onetimeauth_verify,
            crypto_verify_16: crypto_verify_16,
            crypto_verify_32: crypto_verify_32,
            crypto_secretbox: crypto_secretbox,
            crypto_secretbox_open: crypto_secretbox_open,
            crypto_scalarmult: crypto_scalarmult,
            crypto_scalarmult_base: crypto_scalarmult_base,
            crypto_box_beforenm: crypto_box_beforenm,
            crypto_box_afternm: crypto_box_afternm,
            crypto_box: crypto_box,
            crypto_box_open: crypto_box_open,
            crypto_box_keypair: crypto_box_keypair,
            crypto_hash: crypto_hash,
            crypto_sign: crypto_sign,
            crypto_sign_keypair: crypto_sign_keypair,
            crypto_sign_open: crypto_sign_open,
            crypto_secretbox_KEYBYTES: crypto_secretbox_KEYBYTES,
            crypto_secretbox_NONCEBYTES: crypto_secretbox_NONCEBYTES,
            crypto_secretbox_ZEROBYTES: crypto_secretbox_ZEROBYTES,
            crypto_secretbox_BOXZEROBYTES: crypto_secretbox_BOXZEROBYTES,
            crypto_scalarmult_BYTES: crypto_scalarmult_BYTES,
            crypto_scalarmult_SCALARBYTES: crypto_scalarmult_SCALARBYTES,
            crypto_box_PUBLICKEYBYTES: crypto_box_PUBLICKEYBYTES,
            crypto_box_SECRETKEYBYTES: crypto_box_SECRETKEYBYTES,
            crypto_box_BEFORENMBYTES: crypto_box_BEFORENMBYTES,
            crypto_box_NONCEBYTES: crypto_box_NONCEBYTES,
            crypto_box_ZEROBYTES: crypto_box_ZEROBYTES,
            crypto_box_BOXZEROBYTES: crypto_box_BOXZEROBYTES,
            crypto_sign_BYTES: crypto_sign_BYTES,
            crypto_sign_PUBLICKEYBYTES: crypto_sign_PUBLICKEYBYTES,
            crypto_sign_SECRETKEYBYTES: crypto_sign_SECRETKEYBYTES,
            crypto_sign_SEEDBYTES: crypto_sign_SEEDBYTES,
            crypto_hash_BYTES: crypto_hash_BYTES,
            gf: gf,
            D: D,
            L: L,
            pack25519: pack25519,
            unpack25519: unpack25519,
            M: M,
            A: A,
            S: S,
            Z: Z,
            pow2523: pow2523,
            add: add,
            set25519: set25519,
            modL: modL,
            scalarmult: scalarmult,
            scalarbase: scalarbase
          };

          /* High-level API */

          function checkLengths(k, n) {
            if (k.length !== crypto_secretbox_KEYBYTES) throw new Error('bad key size');
            if (n.length !== crypto_secretbox_NONCEBYTES) throw new Error('bad nonce size');
          }
          function checkBoxLengths(pk, sk) {
            if (pk.length !== crypto_box_PUBLICKEYBYTES) throw new Error('bad public key size');
            if (sk.length !== crypto_box_SECRETKEYBYTES) throw new Error('bad secret key size');
          }
          function checkArrayTypes() {
            for (var i = 0; i < arguments.length; i++) {
              if (!(arguments[i] instanceof Uint8Array)) throw new TypeError('unexpected type, use Uint8Array');
            }
          }
          function cleanup(arr) {
            for (var i = 0; i < arr.length; i++) arr[i] = 0;
          }
          nacl.randomBytes = function (n) {
            var b = new Uint8Array(n);
            randombytes(b, n);
            return b;
          };
          nacl.secretbox = function (msg, nonce, key) {
            checkArrayTypes(msg, nonce, key);
            checkLengths(key, nonce);
            var m = new Uint8Array(crypto_secretbox_ZEROBYTES + msg.length);
            var c = new Uint8Array(m.length);
            for (var i = 0; i < msg.length; i++) m[i + crypto_secretbox_ZEROBYTES] = msg[i];
            crypto_secretbox(c, m, m.length, nonce, key);
            return c.subarray(crypto_secretbox_BOXZEROBYTES);
          };
          nacl.secretbox.open = function (box, nonce, key) {
            checkArrayTypes(box, nonce, key);
            checkLengths(key, nonce);
            var c = new Uint8Array(crypto_secretbox_BOXZEROBYTES + box.length);
            var m = new Uint8Array(c.length);
            for (var i = 0; i < box.length; i++) c[i + crypto_secretbox_BOXZEROBYTES] = box[i];
            if (c.length < 32) return null;
            if (crypto_secretbox_open(m, c, c.length, nonce, key) !== 0) return null;
            return m.subarray(crypto_secretbox_ZEROBYTES);
          };
          nacl.secretbox.keyLength = crypto_secretbox_KEYBYTES;
          nacl.secretbox.nonceLength = crypto_secretbox_NONCEBYTES;
          nacl.secretbox.overheadLength = crypto_secretbox_BOXZEROBYTES;
          nacl.scalarMult = function (n, p) {
            checkArrayTypes(n, p);
            if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error('bad n size');
            if (p.length !== crypto_scalarmult_BYTES) throw new Error('bad p size');
            var q = new Uint8Array(crypto_scalarmult_BYTES);
            crypto_scalarmult(q, n, p);
            return q;
          };
          nacl.scalarMult.base = function (n) {
            checkArrayTypes(n);
            if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error('bad n size');
            var q = new Uint8Array(crypto_scalarmult_BYTES);
            crypto_scalarmult_base(q, n);
            return q;
          };
          nacl.scalarMult.scalarLength = crypto_scalarmult_SCALARBYTES;
          nacl.scalarMult.groupElementLength = crypto_scalarmult_BYTES;
          nacl.box = function (msg, nonce, publicKey, secretKey) {
            var k = nacl.box.before(publicKey, secretKey);
            return nacl.secretbox(msg, nonce, k);
          };
          nacl.box.before = function (publicKey, secretKey) {
            checkArrayTypes(publicKey, secretKey);
            checkBoxLengths(publicKey, secretKey);
            var k = new Uint8Array(crypto_box_BEFORENMBYTES);
            crypto_box_beforenm(k, publicKey, secretKey);
            return k;
          };
          nacl.box.after = nacl.secretbox;
          nacl.box.open = function (msg, nonce, publicKey, secretKey) {
            var k = nacl.box.before(publicKey, secretKey);
            return nacl.secretbox.open(msg, nonce, k);
          };
          nacl.box.open.after = nacl.secretbox.open;
          nacl.box.keyPair = function () {
            var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
            var sk = new Uint8Array(crypto_box_SECRETKEYBYTES);
            crypto_box_keypair(pk, sk);
            return {
              publicKey: pk,
              secretKey: sk
            };
          };
          nacl.box.keyPair.fromSecretKey = function (secretKey) {
            checkArrayTypes(secretKey);
            if (secretKey.length !== crypto_box_SECRETKEYBYTES) throw new Error('bad secret key size');
            var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
            crypto_scalarmult_base(pk, secretKey);
            return {
              publicKey: pk,
              secretKey: new Uint8Array(secretKey)
            };
          };
          nacl.box.publicKeyLength = crypto_box_PUBLICKEYBYTES;
          nacl.box.secretKeyLength = crypto_box_SECRETKEYBYTES;
          nacl.box.sharedKeyLength = crypto_box_BEFORENMBYTES;
          nacl.box.nonceLength = crypto_box_NONCEBYTES;
          nacl.box.overheadLength = nacl.secretbox.overheadLength;
          nacl.sign = function (msg, secretKey) {
            checkArrayTypes(msg, secretKey);
            if (secretKey.length !== crypto_sign_SECRETKEYBYTES) throw new Error('bad secret key size');
            var signedMsg = new Uint8Array(crypto_sign_BYTES + msg.length);
            crypto_sign(signedMsg, msg, msg.length, secretKey);
            return signedMsg;
          };
          nacl.sign.open = function (signedMsg, publicKey) {
            checkArrayTypes(signedMsg, publicKey);
            if (publicKey.length !== crypto_sign_PUBLICKEYBYTES) throw new Error('bad public key size');
            var tmp = new Uint8Array(signedMsg.length);
            var mlen = crypto_sign_open(tmp, signedMsg, signedMsg.length, publicKey);
            if (mlen < 0) return null;
            var m = new Uint8Array(mlen);
            for (var i = 0; i < m.length; i++) m[i] = tmp[i];
            return m;
          };
          nacl.sign.detached = function (msg, secretKey) {
            var signedMsg = nacl.sign(msg, secretKey);
            var sig = new Uint8Array(crypto_sign_BYTES);
            for (var i = 0; i < sig.length; i++) sig[i] = signedMsg[i];
            return sig;
          };
          nacl.sign.detached.verify = function (msg, sig, publicKey) {
            checkArrayTypes(msg, sig, publicKey);
            if (sig.length !== crypto_sign_BYTES) throw new Error('bad signature size');
            if (publicKey.length !== crypto_sign_PUBLICKEYBYTES) throw new Error('bad public key size');
            var sm = new Uint8Array(crypto_sign_BYTES + msg.length);
            var m = new Uint8Array(crypto_sign_BYTES + msg.length);
            var i;
            for (i = 0; i < crypto_sign_BYTES; i++) sm[i] = sig[i];
            for (i = 0; i < msg.length; i++) sm[i + crypto_sign_BYTES] = msg[i];
            return crypto_sign_open(m, sm, sm.length, publicKey) >= 0;
          };
          nacl.sign.keyPair = function () {
            var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
            var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
            crypto_sign_keypair(pk, sk);
            return {
              publicKey: pk,
              secretKey: sk
            };
          };
          nacl.sign.keyPair.fromSecretKey = function (secretKey) {
            checkArrayTypes(secretKey);
            if (secretKey.length !== crypto_sign_SECRETKEYBYTES) throw new Error('bad secret key size');
            var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
            for (var i = 0; i < pk.length; i++) pk[i] = secretKey[32 + i];
            return {
              publicKey: pk,
              secretKey: new Uint8Array(secretKey)
            };
          };
          nacl.sign.keyPair.fromSeed = function (seed) {
            checkArrayTypes(seed);
            if (seed.length !== crypto_sign_SEEDBYTES) throw new Error('bad seed size');
            var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
            var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
            for (var i = 0; i < 32; i++) sk[i] = seed[i];
            crypto_sign_keypair(pk, sk, true);
            return {
              publicKey: pk,
              secretKey: sk
            };
          };
          nacl.sign.publicKeyLength = crypto_sign_PUBLICKEYBYTES;
          nacl.sign.secretKeyLength = crypto_sign_SECRETKEYBYTES;
          nacl.sign.seedLength = crypto_sign_SEEDBYTES;
          nacl.sign.signatureLength = crypto_sign_BYTES;
          nacl.hash = function (msg) {
            checkArrayTypes(msg);
            var h = new Uint8Array(crypto_hash_BYTES);
            crypto_hash(h, msg, msg.length);
            return h;
          };
          nacl.hash.hashLength = crypto_hash_BYTES;
          nacl.verify = function (x, y) {
            checkArrayTypes(x, y);
            // Zero length arguments are considered not equal.
            if (x.length === 0 || y.length === 0) return false;
            if (x.length !== y.length) return false;
            return vn(x, 0, y, 0, x.length) === 0 ? true : false;
          };
          nacl.setPRNG = function (fn) {
            randombytes = fn;
          };
          (function () {
            // Initialize PRNG if environment provides CSPRNG.
            // If not, methods calling randombytes will throw.
            var crypto = typeof self !== 'undefined' ? self.crypto || self.msCrypto : null;
            if (crypto && crypto.getRandomValues) {
              // Browsers.
              var QUOTA = 65536;
              nacl.setPRNG(function (x, n) {
                var i,
                  v = new Uint8Array(n);
                for (i = 0; i < n; i += QUOTA) {
                  crypto.getRandomValues(v.subarray(i, i + Math.min(n - i, QUOTA)));
                }
                for (i = 0; i < n; i++) x[i] = v[i];
                cleanup(v);
              });
            } else if (typeof require !== 'undefined') {
              // Node.js.
              crypto = require('crypto');
              if (crypto && crypto.randomBytes) {
                nacl.setPRNG(function (x, n) {
                  var i,
                    v = crypto.randomBytes(n);
                  for (i = 0; i < n; i++) x[i] = v[i];
                  cleanup(v);
                });
              }
            }
          })();
        })(typeof module !== 'undefined' && module.exports ? module.exports : self.nacl = self.nacl || {});

        // #endregion ORIGINAL CODE

        _cjsExports = exports('default', module.exports);
      }, function () {
        return {
          'crypto': __cjsMetaURL$1
        };
      });
    }
  };
});

System.register("chunks:///_virtual/nacl-fast.mjs_cjs=&original=.js", ['./nacl-fast.js', './cjs-loader.mjs'], function (exports, module) {
  var __cjsMetaURL, loader;
  return {
    setters: [function (module) {
      __cjsMetaURL = module.__cjsMetaURL;
      var _setter = {};
      _setter.__cjsMetaURL = module.__cjsMetaURL;
      _setter.default = module.default;
      exports(_setter);
    }, function (module) {
      loader = module.default;
    }],
    execute: function () {
      // I am the facade module who provides access to the CommonJS module './nacl-fast.js'~
      if (!__cjsMetaURL) {
        loader.throwInvalidWrapper('./nacl-fast.js', module.meta.url);
      }
      loader.require(__cjsMetaURL);
    }
  };
});

System.register("chunks:///_virtual/nacl-util.js", ['./cjs-loader.mjs'], function (exports, module) {
  var loader;
  return {
    setters: [function (module) {
      loader = module.default;
    }],
    execute: function () {
      exports('default', void 0);
      var _cjsExports;
      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);
      loader.define(__cjsMetaURL, function (exports$1, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE

        // Written in 2014-2016 by Dmitry Chestnykh and Devi Mandiri.
        // Public domain.
        (function (root, f) {
          if (typeof module !== 'undefined' && module.exports) module.exports = f();else if (root.nacl) root.nacl.util = f();else {
            root.nacl = {};
            root.nacl.util = f();
          }
        })(this, function () {
          var util = {};
          function validateBase64(s) {
            if (!/^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(s)) {
              throw new TypeError('invalid encoding');
            }
          }
          util.decodeUTF8 = function (s) {
            if (typeof s !== 'string') throw new TypeError('expected string');
            var i,
              d = unescape(encodeURIComponent(s)),
              b = new Uint8Array(d.length);
            for (i = 0; i < d.length; i++) b[i] = d.charCodeAt(i);
            return b;
          };
          util.encodeUTF8 = function (arr) {
            var i,
              s = [];
            for (i = 0; i < arr.length; i++) s.push(String.fromCharCode(arr[i]));
            return decodeURIComponent(escape(s.join('')));
          };
          if (typeof atob === 'undefined') {
            // Node.js

            if (typeof Buffer.from !== 'undefined') {
              // Node v6 and later
              util.encodeBase64 = function (arr) {
                // v6 and later
                return Buffer.from(arr).toString('base64');
              };
              util.decodeBase64 = function (s) {
                validateBase64(s);
                return new Uint8Array(Array.prototype.slice.call(Buffer.from(s, 'base64'), 0));
              };
            } else {
              // Node earlier than v6
              util.encodeBase64 = function (arr) {
                // v6 and later
                return new Buffer(arr).toString('base64');
              };
              util.decodeBase64 = function (s) {
                validateBase64(s);
                return new Uint8Array(Array.prototype.slice.call(new Buffer(s, 'base64'), 0));
              };
            }
          } else {
            // Browsers

            util.encodeBase64 = function (arr) {
              var i,
                s = [],
                len = arr.length;
              for (i = 0; i < len; i++) s.push(String.fromCharCode(arr[i]));
              return btoa(s.join(''));
            };
            util.decodeBase64 = function (s) {
              validateBase64(s);
              var i,
                d = atob(s),
                b = new Uint8Array(d.length);
              for (i = 0; i < d.length; i++) b[i] = d.charCodeAt(i);
              return b;
            };
          }
          return util;
        });

        // #endregion ORIGINAL CODE

        _cjsExports = exports('default', module.exports);
      }, {});
    }
  };
});

System.register("chunks:///_virtual/nacl-util.mjs_cjs=&original=.js", ['./nacl-util.js', './cjs-loader.mjs'], function (exports, module) {
  var __cjsMetaURL, loader;
  return {
    setters: [function (module) {
      __cjsMetaURL = module.__cjsMetaURL;
      var _setter = {};
      _setter.__cjsMetaURL = module.__cjsMetaURL;
      _setter.default = module.default;
      exports(_setter);
    }, function (module) {
      loader = module.default;
    }],
    execute: function () {
      // I am the facade module who provides access to the CommonJS module './nacl-util.js'~
      if (!__cjsMetaURL) {
        loader.throwInvalidWrapper('./nacl-util.js', module.meta.url);
      }
      loader.require(__cjsMetaURL);
    }
  };
});

System.register("chunks:///_virtual/rollupPluginModLoBabelHelpers.js", [], function (exports) {
  return {
    execute: function () {
      exports({
        applyDecoratedDescriptor: _applyDecoratedDescriptor,
        assertThisInitialized: _assertThisInitialized,
        asyncToGenerator: _asyncToGenerator,
        construct: _construct,
        createClass: _createClass,
        getPrototypeOf: _getPrototypeOf,
        inheritsLoose: _inheritsLoose,
        initializerDefineProperty: _initializerDefineProperty,
        isNativeFunction: _isNativeFunction,
        isNativeReflectConstruct: _isNativeReflectConstruct,
        regeneratorRuntime: _regeneratorRuntime,
        setPrototypeOf: _setPrototypeOf,
        toPrimitive: _toPrimitive,
        toPropertyKey: _toPropertyKey,
        wrapNativeSuper: _wrapNativeSuper
      });
      function _regeneratorRuntime() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
        _regeneratorRuntime = exports('regeneratorRuntime', function () {
          return e;
        });
        var t,
          e = {},
          r = Object.prototype,
          n = r.hasOwnProperty,
          o = Object.defineProperty || function (t, e, r) {
            t[e] = r.value;
          },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          c = i.asyncIterator || "@@asyncIterator",
          u = i.toStringTag || "@@toStringTag";
        function define(t, e, r) {
          return Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }), t[e];
        }
        try {
          define({}, "");
        } catch (t) {
          define = function (t, e, r) {
            return t[e] = r;
          };
        }
        function wrap(t, e, r, n) {
          var i = e && e.prototype instanceof Generator ? e : Generator,
            a = Object.create(i.prototype),
            c = new Context(n || []);
          return o(a, "_invoke", {
            value: makeInvokeMethod(t, r, c)
          }), a;
        }
        function tryCatch(t, e, r) {
          try {
            return {
              type: "normal",
              arg: t.call(e, r)
            };
          } catch (t) {
            return {
              type: "throw",
              arg: t
            };
          }
        }
        e.wrap = wrap;
        var h = "suspendedStart",
          l = "suspendedYield",
          f = "executing",
          s = "completed",
          y = {};
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}
        var p = {};
        define(p, a, function () {
          return this;
        });
        var d = Object.getPrototypeOf,
          v = d && d(d(values([])));
        v && v !== r && n.call(v, a) && (p = v);
        var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
        function defineIteratorMethods(t) {
          ["next", "throw", "return"].forEach(function (e) {
            define(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function AsyncIterator(t, e) {
          function invoke(r, o, i, a) {
            var c = tryCatch(t[r], t, o);
            if ("throw" !== c.type) {
              var u = c.arg,
                h = u.value;
              return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
                invoke("next", t, i, a);
              }, function (t) {
                invoke("throw", t, i, a);
              }) : e.resolve(h).then(function (t) {
                u.value = t, i(u);
              }, function (t) {
                return invoke("throw", t, i, a);
              });
            }
            a(c.arg);
          }
          var r;
          o(this, "_invoke", {
            value: function (t, n) {
              function callInvokeWithMethodAndArg() {
                return new e(function (e, r) {
                  invoke(t, n, e, r);
                });
              }
              return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
          });
        }
        function makeInvokeMethod(e, r, n) {
          var o = h;
          return function (i, a) {
            if (o === f) throw new Error("Generator is already running");
            if (o === s) {
              if ("throw" === i) throw a;
              return {
                value: t,
                done: !0
              };
            }
            for (n.method = i, n.arg = a;;) {
              var c = n.delegate;
              if (c) {
                var u = maybeInvokeDelegate(c, n);
                if (u) {
                  if (u === y) continue;
                  return u;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
                if (o === h) throw o = s, n.arg;
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = f;
              var p = tryCatch(e, r, n);
              if ("normal" === p.type) {
                if (o = n.done ? s : l, p.arg === y) continue;
                return {
                  value: p.arg,
                  done: n.done
                };
              }
              "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
            }
          };
        }
        function maybeInvokeDelegate(e, r) {
          var n = r.method,
            o = e.iterator[n];
          if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
          var i = tryCatch(o, e.iterator, r.arg);
          if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
          var a = i.arg;
          return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
        }
        function pushTryEntry(t) {
          var e = {
            tryLoc: t[0]
          };
          1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
        }
        function resetTryEntry(t) {
          var e = t.completion || {};
          e.type = "normal", delete e.arg, t.completion = e;
        }
        function Context(t) {
          this.tryEntries = [{
            tryLoc: "root"
          }], t.forEach(pushTryEntry, this), this.reset(!0);
        }
        function values(e) {
          if (e || "" === e) {
            var r = e[a];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                i = function next() {
                  for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
                  return next.value = t, next.done = !0, next;
                };
              return i.next = i;
            }
          }
          throw new TypeError(typeof e + " is not iterable");
        }
        return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
          value: GeneratorFunctionPrototype,
          configurable: !0
        }), o(GeneratorFunctionPrototype, "constructor", {
          value: GeneratorFunction,
          configurable: !0
        }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
        }, e.mark = function (t) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
        }, e.awrap = function (t) {
          return {
            __await: t
          };
        }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
          return this;
        }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
          void 0 === i && (i = Promise);
          var a = new AsyncIterator(wrap(t, r, n, o), i);
          return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
            return t.done ? t.value : a.next();
          });
        }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
          return this;
        }), define(g, "toString", function () {
          return "[object Generator]";
        }), e.keys = function (t) {
          var e = Object(t),
            r = [];
          for (var n in e) r.push(n);
          return r.reverse(), function next() {
            for (; r.length;) {
              var t = r.pop();
              if (t in e) return next.value = t, next.done = !1, next;
            }
            return next.done = !0, next;
          };
        }, e.values = values, Context.prototype = {
          constructor: Context,
          reset: function (e) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) throw e;
            var r = this;
            function handle(n, o) {
              return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var i = this.tryEntries[o],
                a = i.completion;
              if ("root" === i.tryLoc) return handle("end");
              if (i.tryLoc <= this.prev) {
                var c = n.call(i, "catchLoc"),
                  u = n.call(i, "finallyLoc");
                if (c && u) {
                  if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                } else if (c) {
                  if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                } else {
                  if (!u) throw new Error("try statement without catch or finally");
                  if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var o = this.tryEntries[r];
              if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                var i = o;
                break;
              }
            }
            i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
            var a = i ? i.completion : {};
            return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
          },
          complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.tryLoc === t) {
                var n = r.completion;
                if ("throw" === n.type) {
                  var o = n.arg;
                  resetTryEntry(r);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (e, r, n) {
            return this.delegate = {
              iterator: values(e),
              resultName: r,
              nextLoc: n
            }, "next" === this.method && (this.arg = t), y;
          }
        }, e;
      }
      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }
      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
            args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
          });
        };
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
          writable: false
        });
        return Constructor;
      }
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        _setPrototypeOf(subClass, superClass);
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = exports('getPrototypeOf', Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        });
        return _getPrototypeOf(o);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = exports('setPrototypeOf', Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        });
        return _setPrototypeOf(o, p);
      }
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _construct(Parent, args, Class) {
        if (_isNativeReflectConstruct()) {
          _construct = exports('construct', Reflect.construct.bind());
        } else {
          _construct = exports('construct', function _construct(Parent, args, Class) {
            var a = [null];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
          });
        }
        return _construct.apply(null, arguments);
      }
      function _isNativeFunction(fn) {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
      }
      function _wrapNativeSuper(Class) {
        var _cache = typeof Map === "function" ? new Map() : undefined;
        _wrapNativeSuper = exports('wrapNativeSuper', function _wrapNativeSuper(Class) {
          if (Class === null || !_isNativeFunction(Class)) return Class;
          if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
          }
          if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
          }
          function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
          }
          Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
              value: Wrapper,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          return _setPrototypeOf(Wrapper, Class);
        });
        return _wrapNativeSuper(Class);
      }
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== undefined) {
          var res = prim.call(input, hint || "default");
          if (typeof res !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
      }
      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");
        return typeof key === "symbol" ? key : String(key);
      }
      function _initializerDefineProperty(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
      }
      function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object.keys(descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;
        if ('value' in desc || desc.initializer) {
          desc.writable = true;
        }
        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
        }, desc);
        if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
        }
        if (desc.initializer === void 0) {
          Object.defineProperty(target, property, desc);
          desc = null;
        }
        return desc;
      }
    }
  };
});

} }; });