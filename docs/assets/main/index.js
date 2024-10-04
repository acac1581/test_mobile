System.register("chunks:///_virtual/debug-view-runtime-control.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Color, Canvas, UITransform, instantiate, Label, RichText, Toggle, Button, director, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Color = module.Color;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DebugViewRuntimeControl = exports('DebugViewRuntimeControl', (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DebugViewRuntimeControl, _Component);
        function DebugViewRuntimeControl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "compositeModeToggle", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "singleModeToggle", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "EnableAllCompositeModeButton", _descriptor3, _assertThisInitialized(_this));
          _this._single = 0;
          _this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct Internal Specular', 'Env Internal Specular', 'Internal All', 'Fog'];
          _this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'Internal Specular', 'TT'];
          _this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          _this.compositeModeToggleList = [];
          _this.singleModeToggleList = [];
          _this.miscModeToggleList = [];
          _this.textComponentList = [];
          _this.labelComponentList = [];
          _this.textContentList = [];
          _this.hideButtonLabel = void 0;
          _this._currentColorIndex = 0;
          _this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          _this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
          return _this;
        }
        var _proto = DebugViewRuntimeControl.prototype;
        _proto.start = function start() {
          // get canvas resolution
          var canvas = this.node.parent.getComponent(Canvas);
          if (!canvas) {
            console.error('debug-view-runtime-control should be child of Canvas');
            return;
          }
          var uiTransform = this.node.parent.getComponent(UITransform);
          var halfScreenWidth = uiTransform.width * 0.5;
          var halfScreenHeight = uiTransform.height * 0.5;
          var x = -halfScreenWidth + halfScreenWidth * 0.1,
            y = halfScreenHeight - halfScreenHeight * 0.1;
          var width = 200,
            height = 20;

          // new nodes
          var miscNode = this.node.getChildByName('MiscMode');
          var buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          var titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles';

          // title
          for (var i = 0; i < 2; i++) {
            var newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
            newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
            newLabel.setScale(0.75, 0.75, 0.75);
            newLabel.parent = titleNode;
            var _labelComponent = newLabel.getComponent(Label);
            _labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
            _labelComponent.color = Color.WHITE;
            _labelComponent.overflow = 0;
            this.labelComponentList[this.labelComponentList.length] = _labelComponent;
          }
          y -= height;
          // single
          var currentRow = 0;
          for (var _i = 0; _i < this.strSingle.length; _i++, currentRow++) {
            if (_i === this.strSingle.length >> 1) {
              x += width;
              currentRow = 0;
            }
            var newNode = _i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
            newNode.setPosition(x, y - height * currentRow, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.singleModeToggle.parent;
            var textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strSingle[_i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
            this.singleModeToggleList[_i] = newNode;
          }
          x += width;
          // buttons
          this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
          this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
          this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
          this.EnableAllCompositeModeButton.parent = buttonNode;
          var labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var changeColorButton = instantiate(this.EnableAllCompositeModeButton);
          changeColorButton.setPosition(x + 90, y, 0.0);
          changeColorButton.setScale(0.5, 0.5, 0.5);
          changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
          changeColorButton.parent = buttonNode;
          labelComponent = changeColorButton.getComponentInChildren(Label);
          labelComponent.string = 'TextColor';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var HideButton = instantiate(this.EnableAllCompositeModeButton);
          HideButton.setPosition(x + 200, y, 0.0);
          HideButton.setScale(0.5, 0.5, 0.5);
          HideButton.on(Button.EventType.CLICK, this.hideUI, this);
          HideButton.parent = this.node.parent;
          labelComponent = HideButton.getComponentInChildren(Label);
          labelComponent.string = 'Hide UI';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          this.hideButtonLabel = labelComponent;

          // misc
          y -= 40;
          for (var _i2 = 0; _i2 < this.strMisc.length; _i2++) {
            var _newNode = instantiate(this.compositeModeToggle);
            _newNode.setPosition(x, y - height * _i2, 0.0);
            _newNode.setScale(0.5, 0.5, 0.5);
            _newNode.parent = miscNode;
            var _textComponent = _newNode.getComponentInChildren(RichText);
            _textComponent.string = this.strMisc[_i2];
            this.textComponentList[this.textComponentList.length] = _textComponent;
            this.textContentList[this.textContentList.length] = _textComponent.string;
            var toggleComponent = _newNode.getComponent(Toggle);
            toggleComponent.isChecked = _i2 ? true : false;
            _newNode.on(Toggle.EventType.TOGGLE, _i2 ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);
            this.miscModeToggleList[_i2] = _newNode;
          }

          // composite
          y -= 150;
          for (var _i3 = 0; _i3 < this.strComposite.length; _i3++) {
            var _newNode2 = _i3 ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;
            _newNode2.setPosition(x, y - height * _i3, 0.0);
            _newNode2.setScale(0.5, 0.5, 0.5);
            _newNode2.parent = this.compositeModeToggle.parent;
            var _textComponent2 = _newNode2.getComponentInChildren(RichText);
            _textComponent2.string = this.strComposite[_i3];
            this.textComponentList[this.textComponentList.length] = _textComponent2;
            this.textContentList[this.textContentList.length] = _textComponent2.string;
            _newNode2.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);
            this.compositeModeToggleList[_i3] = _newNode2;
          }
        };
        _proto.isTextMatched = function isTextMatched(textUI, textDescription) {
          var tempText = new String(textUI);
          var findIndex = tempText.search('>');
          if (findIndex === -1) {
            return textUI === textDescription;
          } else {
            tempText = tempText.substr(findIndex + 1);
            tempText = tempText.substr(0, tempText.search('<'));
            return tempText === textDescription;
          }
        };
        _proto.toggleSingleMode = function toggleSingleMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);
          for (var i = 0; i < this.strSingle.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
              debugView.singleMode = i;
            }
          }
        };
        _proto.toggleCompositeMode = function toggleCompositeMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);
          for (var i = 0; i < this.strComposite.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
              debugView.enableCompositeMode(i, toggle.isChecked);
            }
          }
        };
        _proto.toggleLightingWithAlbedo = function toggleLightingWithAlbedo(toggle) {
          var debugView = director.root.debugView;
          debugView.lightingWithAlbedo = toggle.isChecked;
        };
        _proto.toggleCSMColoration = function toggleCSMColoration(toggle) {
          var debugView = director.root.debugView;
          debugView.csmLayerColoration = toggle.isChecked;
        };
        _proto.enableAllCompositeMode = function enableAllCompositeMode(button) {
          var debugView = director.root.debugView;
          debugView.enableAllCompositeMode(true);
          for (var i = 0; i < this.compositeModeToggleList.length; i++) {
            var _toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);
            _toggleComponent.isChecked = true;
          }
          var toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
          toggleComponent.isChecked = false;
          debugView.csmLayerColoration = false;
          toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
          toggleComponent.isChecked = true;
          debugView.lightingWithAlbedo = true;
        };
        _proto.hideUI = function hideUI(button) {
          var titleNode = this.node.getChildByName('Titles');
          var activeValue = !titleNode.active;
          this.singleModeToggleList[0].parent.active = activeValue;
          this.miscModeToggleList[0].parent.active = activeValue;
          this.compositeModeToggleList[0].parent.active = activeValue;
          this.EnableAllCompositeModeButton.parent.active = activeValue;
          titleNode.active = activeValue;
          this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
        };
        _proto.changeTextColor = function changeTextColor(button) {
          this._currentColorIndex++;
          if (this._currentColorIndex >= this.strColor.length) {
            this._currentColorIndex = 0;
          }
          for (var i = 0; i < this.textComponentList.length; i++) {
            this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
          }
          for (var _i4 = 0; _i4 < this.labelComponentList.length; _i4++) {
            this.labelComponentList[_i4].color = this.color[this._currentColorIndex];
          }
        };
        _proto.onLoad = function onLoad() {};
        _proto.update = function update(deltaTime) {};
        return DebugViewRuntimeControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./debug-view-runtime-control.ts', './Test1.ts', './Test2.ts'], function () {
  return {
    setters: [null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/Test1.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.mjs'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Component, lib_default;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      lib_default = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "7228aFTHCZBEIWdiTJJnYTB", "Test1", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Test1 = exports('Test1', (_dec = ccclass('Test1'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Test1, _Component);
        function Test1() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._cocosGameFi = void 0;
          _this._connectUI = void 0;
          _this.tonAddressMerchant = Address.parse("0QCJhgYQw7SvqeeA3EBI_WOqvAVSZktSPvDxiXpi57hq86O2");
          _this.jettonMasterAddress = Address.parse("kQAHKkZApqaYljlkBEzhzIvVLB7rYLLJy6pZYrRgHafU-VOy");
          _this.Client = void 0;
          _this.currentWallet = void 0;
          _this.currentWalletString = void 0;
          // botToken = "7721688539:AAFtOEz4-SoNNlHEobNEXDXaxKOanxuMwKE";
          _this.botUserName = "acacAuthBot";
          _this.botID = "7721688539";
          return _this;
        }
        var _proto = Test1.prototype;
        _proto.start = function start() {};
        _proto.init = function init() {
          console.log('Hello world');
          this._initTonConnect();
        };
        _proto._initTonConnect = /*#__PURE__*/function () {
          var _initTonConnect2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;
            var uiconnector, merchantParams;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  //https://testnet.toncenter.com/api/v2/jsonRPC
                  //https://toncenter.com/api/v2/jsonRPC
                  this.Client = new TonClient({
                    endpoint: 'https://testnet.toncenter.com/api/v2/jsonrpc'
                  });
                  uiconnector = new TonConnectUI({
                    manifestUrl: 'https://ton-connect.github.io/demo-dapp-with-wallet/tonconnect-manifest.json'
                  });
                  merchantParams = {
                    tonAddress: this.tonAddressMerchant,
                    jettonAddress: this.jettonMasterAddress
                  };
                  _context.next = 5;
                  return GameFi.create({
                    connector: uiconnector,
                    network: "testnet",
                    merchant: merchantParams
                  });
                case 5:
                  this._cocosGameFi = _context.sent;
                  this._connectUI = this._cocosGameFi.walletConnector;
                  this._connectUI.onModalStateChange(function (state) {
                    // console.log("model state changed! : ", state);
                    _this2.updateConnect();
                  });
                  this._connectUI.onStatusChange(function (info) {
                    console.log("wallet info status changed : ", info);
                    _this2.currentWallet = Address.parse(info.account.address);
                    _this2.currentWalletString = Address.normalize(info.account.address);
                    _this2.updateConnect();
                  });
                  this.updateConnect();
                case 10:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function _initTonConnect() {
            return _initTonConnect2.apply(this, arguments);
          }
          return _initTonConnect;
        }();
        _proto.onclick = function onclick() {
          if (this.isConnected()) return;
          this._connectUI.openModal();
        };
        _proto.disconect = function disconect() {
          if (!this.isConnected()) return;
          this._cocosGameFi.disconnectWallet();
        };
        _proto.isConnected = function isConnected() {
          if (!this._connectUI) {
            console.error("ton ui not inited!");
            return false;
          }
          return this._connectUI.connected;
        };
        _proto.updateConnect = function updateConnect() {
          console.log("isConnected:  " + this.isConnected());
          if (this.isConnected()) ;
        };
        _proto.onTransferTon = function onTransferTon() {
          if (!this.isConnected()) return;
          var tonTransferReq = {
            to: this.tonAddressMerchant,
            amount: toNano(0.01)
          };
          this._cocosGameFi.transferTon(tonTransferReq).then(function (val) {
            console.log(val);
          });
        };
        _proto.onBuyWithTon = function onBuyWithTon() {
          if (!this.isConnected()) return;
          var tonTransferReq = {
            amount: toNano(0.01)
          };
          this._cocosGameFi.buyWithTon(tonTransferReq).then(function (val) {
            console.log(val);
          });
        };
        _proto.onShowJetton = function onShowJetton() {
          if (!this.isConnected()) return;
          var show = /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_gameFi, jettonMasterAddress, tonAddress) {
              var openJetton, jettonContent, jettonWallet, jettonWalletData;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    openJetton = _gameFi.assetsSdk.openJetton(jettonMasterAddress);
                    _context2.next = 3;
                    return openJetton.getContent();
                  case 3:
                    jettonContent = _context2.sent;
                    // const message = "jetton name: " + jettonContent.name + "\njetton decimals: " + jettonContent.decimals;
                    // TelegramWebApp.Instance.alert(message)
                    console.log(jettonContent);
                    _context2.next = 7;
                    return openJetton.getWallet(tonAddress);
                  case 7:
                    jettonWallet = _context2.sent;
                    _context2.next = 10;
                    return jettonWallet.getData();
                  case 10:
                    jettonWalletData = _context2.sent;
                    console.log(jettonWalletData.balance);
                  case 12:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            }));
            return function show(_x, _x2, _x3) {
              return _ref.apply(this, arguments);
            };
          }();
          show(this._cocosGameFi, this.jettonMasterAddress, this.currentWallet);
          this.Client.getBalance(this.jettonMasterAddress).then(function (val) {
            console.log(Number(val));
          });
        };
        _proto.onTransferJetton = /*#__PURE__*/function () {
          var _onTransferJetton = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var jettonTransferRequest;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (this.isConnected()) {
                    _context3.next = 2;
                    break;
                  }
                  return _context3.abrupt("return");
                case 2:
                  jettonTransferRequest = {
                    amount: toNano(0.000000002),
                    customPayload: "customPayload-haha",
                    forwardAmount: toNano(0.000000001),
                    forwardPayload: "forwardPayload-haha"
                  };
                  _context3.prev = 3;
                  _context3.next = 6;
                  return this._cocosGameFi.buyWithJetton(jettonTransferRequest);
                case 6:
                  _context3.next = 11;
                  break;
                case 8:
                  _context3.prev = 8;
                  _context3.t0 = _context3["catch"](3);
                  console.log(_context3.t0);
                case 11:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this, [[3, 8]]);
          }));
          function onTransferJetton() {
            return _onTransferJetton.apply(this, arguments);
          }
          return onTransferJetton;
        }();
        _proto.Telegram = /*#__PURE__*/function () {
          var _Telegram = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var result;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.prev = 0;
                  console.log(window.Telegram.WebApp.initData);
                  _context4.next = 17;
                  break;
                case 4:
                  _context4.prev = 4;
                  _context4.t0 = _context4["catch"](0);
                  console.log(_context4.t0);
                  _context4.prev = 7;
                  _context4.next = 10;
                  return lib_default(this.botID, {
                    windowFeatures: {
                      popup: true
                    }
                  });
                case 10:
                  result = _context4.sent;
                  console.log(result);
                  _context4.next = 17;
                  break;
                case 14:
                  _context4.prev = 14;
                  _context4.t1 = _context4["catch"](7);
                  console.log(_context4.t1);
                case 17:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this, [[0, 4], [7, 14]]);
          }));
          function Telegram() {
            return _Telegram.apply(this, arguments);
          }
          return Telegram;
        }();
        return Test1;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Test2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index2.mjs'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Component, TonConnect;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      TonConnect = module.TonConnect;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "b3176AXdfpBCIm8ZQpRZ2zJ", "Test2", undefined);
      // import { TonConnectUI } from '@tonconnect/ui'

      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Test2 = exports('Test2', (_dec = ccclass('Test2'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Test2, _Component);
        function Test2() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // private tonConnectUI: TonConnectUI;
          _this.connector = void 0;
          _this.walletsList = void 0;
          return _this;
        }
        var _proto = Test2.prototype;
        _proto.start = function start() {};
        _proto.Init = /*#__PURE__*/function () {
          var _Init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this.connector = new TonConnect({
                    manifestUrl: 'https://ton-connect.github.io/demo-dapp-with-wallet/tonconnect-manifest.json'
                  });
                  _context.next = 3;
                  return this.connector.getWallets();
                case 3:
                  this.walletsList = _context.sent;
                  console.log("init", this.walletsList);

                  // this.tonConnectUI = new TonConnectUI({
                  //     manifestUrl: 'https://ton-connect.github.io/demo-dapp-with-wallet/tonconnect-manifest.json'
                  // });

                  // const unsubscribeModal = this.tonConnectUI.onModalStateChange(state => {
                  //     console.log("model state changed! : ", state);

                  // });

                  // const unsubscribeConnectUI = this.tonConnectUI.onStatusChange(info => {
                  //     console.log("wallet info status changed : ", info);
                  // });
                  this.connector.onStatusChange(function (info) {
                    console.log("wallet info status changed : ", info);
                  });
                case 6:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function Init() {
            return _Init.apply(this, arguments);
          }
          return Init;
        }();
        _proto.Connnect = function Connnect() {
          console.log("Connnect");
          // this.tonConnectUI.openModal();

          var sources = [{
            bridgeUrl: "https://bridge.tonapi.io/bridge" // Tonkeeper
          }, {
            bridgeUrl: "https://bridge.ton.space/bridge" // "telegram-wallet"
          }, {
            bridgeUrl: "https://tonconnectbridge.mytonwallet.org/bridge/" // "mytonwallet"
          }];

          var universalLink = this.connector.connect(sources);
          console.log(universalLink);
          window.open(universalLink);

          // var linker = new DeepLinker({
          //     onIgnored: function () {
          //         console.log('browser failed to respond to the deep link');
          //     },
          //     onFallback: function () {
          //         console.log('dialog hidden or user returned to tab');
          //     },
          //     onReturn: function () {
          //         console.log('user returned to the page from the native app');
          //     },
          // });

          // linker.openURL(universalLink);
        };

        _proto.Disconnect = function Disconnect() {
          console.log("Disconnect");
          // this.tonConnectUI.disconnect();

          this.connector.disconnect();
        };
        return Test2;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});