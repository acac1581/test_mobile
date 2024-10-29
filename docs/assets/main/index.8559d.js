System.register("chunks:///_virtual/debug-view-runtime-control.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Node, _decorator, Component, Color, Canvas, UITransform, instantiate, Label, RichText, Toggle, Button, director;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      _decorator = module._decorator;
      Component = module.Component;
      Color = module.Color;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button = module.Button;
      director = module.director;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let DebugViewRuntimeControl = exports('DebugViewRuntimeControl', (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = class DebugViewRuntimeControl extends Component {
        constructor() {
          super(...arguments);
          _initializerDefineProperty(this, "compositeModeToggle", _descriptor, this);
          _initializerDefineProperty(this, "singleModeToggle", _descriptor2, this);
          _initializerDefineProperty(this, "EnableAllCompositeModeButton", _descriptor3, this);
          this._single = 0;
          this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct Internal Specular', 'Env Internal Specular', 'Internal All', 'Fog'];
          this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'Internal Specular', 'TT'];
          this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          this.compositeModeToggleList = [];
          this.singleModeToggleList = [];
          this.miscModeToggleList = [];
          this.textComponentList = [];
          this.labelComponentList = [];
          this.textContentList = [];
          this.hideButtonLabel = void 0;
          this._currentColorIndex = 0;
          this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
        }
        start() {
          // get canvas resolution
          const canvas = this.node.parent.getComponent(Canvas);
          if (!canvas) {
            console.error('debug-view-runtime-control should be child of Canvas');
            return;
          }
          const uiTransform = this.node.parent.getComponent(UITransform);
          const halfScreenWidth = uiTransform.width * 0.5;
          const halfScreenHeight = uiTransform.height * 0.5;
          let x = -halfScreenWidth + halfScreenWidth * 0.1,
            y = halfScreenHeight - halfScreenHeight * 0.1;
          const width = 200,
            height = 20;

          // new nodes
          const miscNode = this.node.getChildByName('MiscMode');
          const buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          const titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles';

          // title
          for (let i = 0; i < 2; i++) {
            const newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
            newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
            newLabel.setScale(0.75, 0.75, 0.75);
            newLabel.parent = titleNode;
            const labelComponent = newLabel.getComponent(Label);
            labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
            labelComponent.color = Color.WHITE;
            labelComponent.overflow = 0;
            this.labelComponentList[this.labelComponentList.length] = labelComponent;
          }
          y -= height;
          // single
          let currentRow = 0;
          for (let i = 0; i < this.strSingle.length; i++, currentRow++) {
            if (i === this.strSingle.length >> 1) {
              x += width;
              currentRow = 0;
            }
            const newNode = i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
            newNode.setPosition(x, y - height * currentRow, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.singleModeToggle.parent;
            const textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strSingle[i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
            this.singleModeToggleList[i] = newNode;
          }
          x += width;
          // buttons
          this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
          this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
          this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
          this.EnableAllCompositeModeButton.parent = buttonNode;
          let labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          const changeColorButton = instantiate(this.EnableAllCompositeModeButton);
          changeColorButton.setPosition(x + 90, y, 0.0);
          changeColorButton.setScale(0.5, 0.5, 0.5);
          changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
          changeColorButton.parent = buttonNode;
          labelComponent = changeColorButton.getComponentInChildren(Label);
          labelComponent.string = 'TextColor';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          const HideButton = instantiate(this.EnableAllCompositeModeButton);
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
          for (let i = 0; i < this.strMisc.length; i++) {
            const newNode = instantiate(this.compositeModeToggle);
            newNode.setPosition(x, y - height * i, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = miscNode;
            const textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strMisc[i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            const toggleComponent = newNode.getComponent(Toggle);
            toggleComponent.isChecked = i ? true : false;
            newNode.on(Toggle.EventType.TOGGLE, i ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);
            this.miscModeToggleList[i] = newNode;
          }

          // composite
          y -= 150;
          for (let i = 0; i < this.strComposite.length; i++) {
            const newNode = i ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;
            newNode.setPosition(x, y - height * i, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.compositeModeToggle.parent;
            const textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strComposite[i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);
            this.compositeModeToggleList[i] = newNode;
          }
        }
        isTextMatched(textUI, textDescription) {
          let tempText = new String(textUI);
          const findIndex = tempText.search('>');
          if (findIndex === -1) {
            return textUI === textDescription;
          } else {
            tempText = tempText.substr(findIndex + 1);
            tempText = tempText.substr(0, tempText.search('<'));
            return tempText === textDescription;
          }
        }
        toggleSingleMode(toggle) {
          const debugView = director.root.debugView;
          const textComponent = toggle.getComponentInChildren(RichText);
          for (let i = 0; i < this.strSingle.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
              debugView.singleMode = i;
            }
          }
        }
        toggleCompositeMode(toggle) {
          const debugView = director.root.debugView;
          const textComponent = toggle.getComponentInChildren(RichText);
          for (let i = 0; i < this.strComposite.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
              debugView.enableCompositeMode(i, toggle.isChecked);
            }
          }
        }
        toggleLightingWithAlbedo(toggle) {
          const debugView = director.root.debugView;
          debugView.lightingWithAlbedo = toggle.isChecked;
        }
        toggleCSMColoration(toggle) {
          const debugView = director.root.debugView;
          debugView.csmLayerColoration = toggle.isChecked;
        }
        enableAllCompositeMode(button) {
          const debugView = director.root.debugView;
          debugView.enableAllCompositeMode(true);
          for (let i = 0; i < this.compositeModeToggleList.length; i++) {
            const toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);
            toggleComponent.isChecked = true;
          }
          let toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
          toggleComponent.isChecked = false;
          debugView.csmLayerColoration = false;
          toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
          toggleComponent.isChecked = true;
          debugView.lightingWithAlbedo = true;
        }
        hideUI(button) {
          const titleNode = this.node.getChildByName('Titles');
          const activeValue = !titleNode.active;
          this.singleModeToggleList[0].parent.active = activeValue;
          this.miscModeToggleList[0].parent.active = activeValue;
          this.compositeModeToggleList[0].parent.active = activeValue;
          this.EnableAllCompositeModeButton.parent.active = activeValue;
          titleNode.active = activeValue;
          this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
        }
        changeTextColor(button) {
          this._currentColorIndex++;
          if (this._currentColorIndex >= this.strColor.length) {
            this._currentColorIndex = 0;
          }
          for (let i = 0; i < this.textComponentList.length; i++) {
            this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
          }
          for (let i = 0; i < this.labelComponentList.length; i++) {
            this.labelComponentList[i].color = this.color[this._currentColorIndex];
          }
        }
        onLoad() {}
        update(deltaTime) {}
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
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

System.register("chunks:///_virtual/Test1.ts", ['cc', './index.ts', './index2.mjs'], function (exports) {
  var cclegacy, Component, _decorator, __webpack_exports__Address, __webpack_exports__TonClient, __webpack_exports__TonConnectUI, __webpack_exports__GameFi, __webpack_exports__toNano, lib_default;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      _decorator = module._decorator;
    }, function (module) {
      __webpack_exports__Address = module.Address;
      __webpack_exports__TonClient = module.TonClient;
      __webpack_exports__TonConnectUI = module.TonConnectUI;
      __webpack_exports__GameFi = module.GameFi;
      __webpack_exports__toNano = module.toNano;
    }, function (module) {
      lib_default = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "7228aFTHCZBEIWdiTJJnYTB", "Test1", undefined);
      const {
        ccclass,
        property
      } = _decorator;
      let Test1 = exports('Test1', (_dec = ccclass('Test1'), _dec(_class = class Test1 extends Component {
        constructor() {
          super(...arguments);
          this._cocosGameFi = void 0;
          this._connectUI = void 0;
          this.tonAddressMerchant = __webpack_exports__Address.parse("0QCJhgYQw7SvqeeA3EBI_WOqvAVSZktSPvDxiXpi57hq86O2");
          this.jettonMasterAddress = __webpack_exports__Address.parse("kQAHKkZApqaYljlkBEzhzIvVLB7rYLLJy6pZYrRgHafU-VOy");
          this.Client = void 0;
          this.currentWallet = void 0;
          this.currentWalletString = void 0;
          this.botUserName = "acacAuthBot";
          this.botID = "7721688539";
        }
        start() {
          try {
            console.log("window.Telegram.WebApp.expand()");
            window.Telegram.WebApp.expand();
          } catch (e) {
            console.log(e);
          }
        }
        init() {
          console.log('Hello world');
          this._initTonConnect();
        }
        async _initTonConnect() {
          //https://testnet.toncenter.com/api/v2/jsonRPC
          //https://toncenter.com/api/v2/jsonRPC
          this.Client = new __webpack_exports__TonClient({
            endpoint: 'https://testnet.toncenter.com/api/v2/jsonRPC'
          });
          let uiconnector = new __webpack_exports__TonConnectUI({
            manifestUrl: 'https://ton-connect.github.io/demo-dapp-with-wallet/tonconnect-manifest.json'
          });
          const merchantParams = {
            tonAddress: this.tonAddressMerchant,
            jettonAddress: this.jettonMasterAddress
          };
          this._cocosGameFi = await __webpack_exports__GameFi.create({
            connector: uiconnector,
            network: "testnet",
            merchant: merchantParams
          });
          this._connectUI = this._cocosGameFi.walletConnector;
          const unsubscribeModal = this._connectUI.onModalStateChange(state => {
            // console.log("model state changed! : ", state);
            this.updateConnect();
          });
          const unsubscribeConnectUI = this._connectUI.onStatusChange(info => {
            console.log("wallet info status changed : ", info);
            this.currentWallet = __webpack_exports__Address.parse(info.account.address);
            this.currentWalletString = __webpack_exports__Address.normalize(info.account.address);
            this.updateConnect();
          });
          this.updateConnect();
        }
        onclick() {
          if (this.isConnected()) return;
          this._connectUI.openModal();
        }
        disconect() {
          if (!this.isConnected()) return;
          this._cocosGameFi.disconnectWallet();
        }
        isConnected() {
          if (!this._connectUI) {
            console.error("ton ui not inited!");
            return false;
          }
          return this._connectUI.connected;
        }
        updateConnect() {
          console.log("isConnected:  " + this.isConnected());
          if (this.isConnected()) ;
        }
        onTransferTon() {
          if (!this.isConnected()) return;
          const tonTransferReq = {
            to: this.tonAddressMerchant,
            amount: __webpack_exports__toNano(0.01)
          };
          this._cocosGameFi.transferTon(tonTransferReq).then(val => {
            console.log(val);
          });
        }
        onBuyWithTon() {
          if (!this.isConnected()) return;
          const tonTransferReq = {
            amount: __webpack_exports__toNano(0.01),
            customPayload: "aaaaaaaaaaaaaaa111"
          };
          this._cocosGameFi.buyWithTon(tonTransferReq).then(val => {
            console.log(val);
          });
        }
        onShowJetton() {
          if (!this.isConnected()) return;
          const show = async function (_gameFi, jettonMasterAddress, tonAddress) {
            const openJetton = _gameFi.assetsSdk.openJetton(jettonMasterAddress);
            const jettonContent = await openJetton.getContent();
            // const message = "jetton name: " + jettonContent.name + "\njetton decimals: " + jettonContent.decimals;
            // TelegramWebApp.Instance.alert(message)
            console.log(jettonContent);
            const jettonWallet = await openJetton.getWallet(tonAddress);
            const jettonWalletData = await jettonWallet.getData();
            console.log("jetton: ", jettonWalletData.balance);
          };
          show(this._cocosGameFi, this.jettonMasterAddress, this.currentWallet);
          this.Client.getBalance(this.currentWallet).then(val => {
            console.log("ton: ", val);
          });
        }
        async onTransferJetton() {
          if (!this.isConnected()) return;
          const jettonTransferRequest = {
            amount: __webpack_exports__toNano(0.000000002),
            customPayload: "customPayload-haha",
            forwardAmount: __webpack_exports__toNano(0.000000001),
            forwardPayload: "forwardPayload-haha"
          };
          try {
            await this._cocosGameFi.buyWithJetton(jettonTransferRequest);
          } catch (error) {
            console.log(error);
          }
        }
        async Telegram() {
          try {
            console.log(window.Telegram.WebApp.initData);
          } catch (error) {
            console.log(error);
            try {
              const result = await lib_default(this.botID, {
                windowFeatures: {
                  popup: true
                }
              });
              console.log(result);
            } catch (error) {
              console.log(error);
            }
          }
        }
      }) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Test2.ts", ['cc', './index.mjs'], function (exports) {
  var cclegacy, Component, _decorator, TonConnect;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      _decorator = module._decorator;
    }, function (module) {
      TonConnect = module.TonConnect;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "b3176AXdfpBCIm8ZQpRZ2zJ", "Test2", undefined);
      // import { TonConnectUI } from '@tonconnect/ui'

      const {
        ccclass,
        property
      } = _decorator;
      let Test2 = exports('Test2', (_dec = ccclass('Test2'), _dec(_class = class Test2 extends Component {
        constructor() {
          super(...arguments);
          // private tonConnectUI: TonConnectUI;
          this.connector = void 0;
          this.walletsList = void 0;
        }
        start() {}
        async Init() {
          this.connector = new TonConnect({
            manifestUrl: 'https://ton-connect.github.io/demo-dapp-with-wallet/tonconnect-manifest.json'
          });
          this.walletsList = await this.connector.getWallets();
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

          const unsubscribeConnectUI = this.connector.onStatusChange(info => {
            console.log("wallet info status changed : ", info);
          });
        }
        Connnect() {
          console.log("Connnect");
          // this.tonConnectUI.openModal();

          const sources = [{
            bridgeUrl: "https://bridge.tonapi.io/bridge" // Tonkeeper
          }, {
            bridgeUrl: "https://bridge.ton.space/bridge" // "telegram-wallet"
          }, {
            bridgeUrl: "https://tonconnectbridge.mytonwallet.org/bridge/" // "mytonwallet"
          }];

          const universalLink = this.connector.connect(sources);
          console.log(universalLink);
          try {
            console.log("Telegram.WebApp.openLink");
            Telegram.WebApp.openLink(universalLink, {
              try_instant_view: true
            });
          } catch (error) {
            console.log(error, "window.open");
            window.open(universalLink);
          }
        }
        Disconnect() {
          console.log("Disconnect");
          // this.tonConnectUI.disconnect();

          this.connector.disconnect();
        }
      }) || _class));
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