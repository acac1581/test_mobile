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

System.register("chunks:///_virtual/internal", ['./debug-view-runtime-control.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/internal', 'chunks:///_virtual/internal'); 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2ZpbGU6L0M6L1Byb2dyYW1EYXRhL2NvY29zL2VkaXRvcnMvQ3JlYXRvci8zLjguNC9yZXNvdXJjZXMvcmVzb3VyY2VzLzNkL2VuZ2luZS9lZGl0b3IvYXNzZXRzL3Rvb2xzL2ZpbGU6L0M6L1Byb2dyYW1EYXRhL2NvY29zL2VkaXRvcnMvQ3JlYXRvci8zLjguNC9yZXNvdXJjZXMvcmVzb3VyY2VzLzNkL2VuZ2luZS9lZGl0b3IvYXNzZXRzL3Rvb2xzL2RlYnVnLXZpZXctcnVudGltZS1jb250cm9sLnRzIl0sIm5hbWVzIjpbImNjY2xhc3MiLCJwcm9wZXJ0eSIsIl9kZWNvcmF0b3IiLCJEZWJ1Z1ZpZXdSdW50aW1lQ29udHJvbCIsIl9kZWMiLCJfZGVjMiIsIk5vZGUiLCJfZGVjMyIsIl9kZWM0IiwiX2NsYXNzIiwiX2NsYXNzMiIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwiYXJndW1lbnRzIiwiX2luaXRpYWxpemVyRGVmaW5lUHJvcGVydHkiLCJfZGVzY3JpcHRvciIsIl9kZXNjcmlwdG9yMiIsIl9kZXNjcmlwdG9yMyIsIl9zaW5nbGUiLCJzdHJTaW5nbGUiLCJzdHJDb21wb3NpdGUiLCJzdHJNaXNjIiwiY29tcG9zaXRlTW9kZVRvZ2dsZUxpc3QiLCJzaW5nbGVNb2RlVG9nZ2xlTGlzdCIsIm1pc2NNb2RlVG9nZ2xlTGlzdCIsInRleHRDb21wb25lbnRMaXN0IiwibGFiZWxDb21wb25lbnRMaXN0IiwidGV4dENvbnRlbnRMaXN0IiwiaGlkZUJ1dHRvbkxhYmVsIiwiX2N1cnJlbnRDb2xvckluZGV4Iiwic3RyQ29sb3IiLCJjb2xvciIsIkNvbG9yIiwiV0hJVEUiLCJCTEFDSyIsIlJFRCIsIkdSRUVOIiwiQkxVRSIsInN0YXJ0IiwiY2FudmFzIiwibm9kZSIsInBhcmVudCIsImdldENvbXBvbmVudCIsIkNhbnZhcyIsImNvbnNvbGUiLCJlcnJvciIsInVpVHJhbnNmb3JtIiwiVUlUcmFuc2Zvcm0iLCJoYWxmU2NyZWVuV2lkdGgiLCJ3aWR0aCIsImhhbGZTY3JlZW5IZWlnaHQiLCJoZWlnaHQiLCJ4IiwieSIsIm1pc2NOb2RlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJidXR0b25Ob2RlIiwiaW5zdGFudGlhdGUiLCJuYW1lIiwidGl0bGVOb2RlIiwiaSIsIm5ld0xhYmVsIiwiRW5hYmxlQWxsQ29tcG9zaXRlTW9kZUJ1dHRvbiIsInNldFBvc2l0aW9uIiwic2V0U2NhbGUiLCJsYWJlbENvbXBvbmVudCIsIkxhYmVsIiwic3RyaW5nIiwib3ZlcmZsb3ciLCJsZW5ndGgiLCJjdXJyZW50Um93IiwibmV3Tm9kZSIsInNpbmdsZU1vZGVUb2dnbGUiLCJ0ZXh0Q29tcG9uZW50IiwiZ2V0Q29tcG9uZW50SW5DaGlsZHJlbiIsIlJpY2hUZXh0Iiwib24iLCJUb2dnbGUiLCJFdmVudFR5cGUiLCJUT0dHTEUiLCJ0b2dnbGVTaW5nbGVNb2RlIiwiQnV0dG9uIiwiQ0xJQ0siLCJlbmFibGVBbGxDb21wb3NpdGVNb2RlIiwiY2hhbmdlQ29sb3JCdXR0b24iLCJjaGFuZ2VUZXh0Q29sb3IiLCJIaWRlQnV0dG9uIiwiaGlkZVVJIiwiY29tcG9zaXRlTW9kZVRvZ2dsZSIsInRvZ2dsZUNvbXBvbmVudCIsImlzQ2hlY2tlZCIsInRvZ2dsZUxpZ2h0aW5nV2l0aEFsYmVkbyIsInRvZ2dsZUNTTUNvbG9yYXRpb24iLCJ0b2dnbGVDb21wb3NpdGVNb2RlIiwiaXNUZXh0TWF0Y2hlZCIsInRleHRVSSIsInRleHREZXNjcmlwdGlvbiIsInRlbXBUZXh0IiwiU3RyaW5nIiwiZmluZEluZGV4Iiwic2VhcmNoIiwic3Vic3RyIiwidG9nZ2xlIiwiZGVidWdWaWV3IiwiZGlyZWN0b3IiLCJyb290Iiwic2luZ2xlTW9kZSIsImVuYWJsZUNvbXBvc2l0ZU1vZGUiLCJsaWdodGluZ1dpdGhBbGJlZG8iLCJjc21MYXllckNvbG9yYXRpb24iLCJidXR0b24iLCJhY3RpdmVWYWx1ZSIsImFjdGl2ZSIsIm9uTG9hZCIsInVwZGF0ZSIsImRlbHRhVGltZSIsIl9hcHBseURlY29yYXRlZERlc2NyaXB0b3IiLCJwcm90b3R5cGUiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiLCJpbml0aWFsaXplciIsIl9SRiIsInBvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BQ0EsTUFBTTtRQUFFQSxPQUFPO1FBQUVDO01BQVMsQ0FBQyxHQUFHQyxVQUFVO1VBRzNCQyx1QkFBdUIsdUNBQUFDLElBQUEsR0FEbkNKLE9BQU8sQ0FBQyxrQ0FBa0MsQ0FBQyxFQUFBSyxLQUFBLEdBRXZDSixRQUFRLENBQUNLLElBQUksQ0FBQyxFQUFBQyxLQUFBLEdBRWROLFFBQVEsQ0FBQ0ssSUFBSSxDQUFDLEVBQUFFLEtBQUEsR0FFZFAsUUFBUSxDQUFDSyxJQUFJLENBQUMsRUFBQUYsSUFBQSxDQUFBSyxNQUFBLElBQUFDLE9BQUEsR0FObkIsTUFDYVAsdUJBQXVCLFNBQVNRLFNBQVMsQ0FBQztRQUFBQztVQUFBLFNBQUFDLFNBQUE7VUFBQUMsMEJBQUEsOEJBQUFDLFdBQUE7VUFBQUQsMEJBQUEsMkJBQUFFLFlBQUE7VUFBQUYsMEJBQUEsdUNBQUFHLFlBQUE7VUFBQSxLQU90REMsT0FBTyxHQUFXLENBQUM7VUFBQSxLQUVSQyxTQUFTLEdBQWEsQ0FDMUIsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCxlQUFlLEVBQ2YsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixlQUFlLEVBQ2YsV0FBVyxFQUNYLEtBQUssRUFDTCxLQUFLLEVBQ0wsYUFBYSxFQUNiLGVBQWUsRUFDZixjQUFjLEVBRWQsaUJBQWlCLEVBQ2pCLGtCQUFrQixFQUNsQixtQkFBbUIsRUFDbkIsWUFBWSxFQUNaLGVBQWUsRUFDZixnQkFBZ0IsRUFDaEIsY0FBYyxFQUNkLFVBQVUsRUFDVixXQUFXLEVBQ1gsb0JBQW9CLEVBQ3BCLEtBQUssRUFFTCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLFlBQVksRUFDWixhQUFhLEVBQ2IsY0FBYyxFQUNkLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLFFB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cEcsV0FBQSxHQUFBcUcseUJBQUEsQ0FBQTFHLE9BQUEsQ0FBQTJHLFNBQUEsMEJBQUFoSCxLQUFBO1FBQUFpSCxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsUUFBQTtRQUFBQyxXQUFBO1VBQUEsT0F2VHNDLElBQUk7O01BQUEsSUFBQXpHLFlBQUEsR0FBQW9HLHlCQUFBLENBQUExRyxPQUFBLENBQUEyRyxTQUFBLHVCQUFBOUcsS0FBQTtRQUFBK0csWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFFBQUE7UUFBQUMsV0FBQTtVQUFBLE9BRVAsSUFBSTs7TUFBQSxJQUFBeEcsWUFBQSxHQUFBbUcseUJBQUEsQ0FBQTFHLE9BQUEsQ0FBQTJHLFNBQUEsbUNBQUE3RyxLQUFBO1FBQUE4RyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsUUFBQTtRQUFBQyxXQUFBO1VBQUEsT0FFUSxJQUFJOztNQUFBLEtBQUEvRyxPQUFBLE1BQUFELE1BQUE7Y0FtVG5ELENBQUFpSCxHQUFBLENBQUFDLEdBQUEiLCJmaWxlIjoiYWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sb3IsIENhbnZhcywgVUlUcmFuc2Zvcm0sIGluc3RhbnRpYXRlLCBtYXRoLCBUb2dnbGUsIFRleHR1cmVDdWJlLCBfZGVjb3JhdG9yLCBDb21wb25lbnQsIEJ1dHRvbiwgbGFiZWxBc3NlbWJsZXIsIGdhbWUsIGRpcmVjdG9yLCBOb2RlLCBTY2VuZSwgcmVuZGVyZXIsIENhbWVyYUNvbXBvbmVudCwgTGFiZWwsIEZvcndhcmRQaXBlbGluZSwgUmljaFRleHQgfSBmcm9tICdjYyc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnaW50ZXJuYWwuRGVidWdWaWV3UnVudGltZUNvbnRyb2wnKVxyXG5leHBvcnQgY2xhc3MgRGVidWdWaWV3UnVudGltZUNvbnRyb2wgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KE5vZGUpXHJcbiAgICBjb21wb3NpdGVNb2RlVG9nZ2xlOiBOb2RlIHwgbnVsbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoTm9kZSlcclxuICAgIHNpbmdsZU1vZGVUb2dnbGU6IE5vZGUgfCBudWxsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShOb2RlKVxyXG4gICAgRW5hYmxlQWxsQ29tcG9zaXRlTW9kZUJ1dHRvbjogTm9kZSB8IG51bGwgPSBudWxsO1xyXG5cdF9zaW5nbGU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBzdHJTaW5nbGU6IHN0cmluZ1tdID0gW1xyXG4gICAgICAgICdObyBTaW5nbGUgRGVidWcnLFxyXG4gICAgICAgICdWZXJ0ZXggQ29sb3InLFxyXG4gICAgICAgICdWZXJ0ZXggTm9ybWFsJyxcclxuICAgICAgICAnVmVydGV4IFRhbmdlbnQnLFxyXG4gICAgICAgICdXb3JsZCBQb3NpdGlvbicsXHJcbiAgICAgICAgJ1ZlcnRleCBNaXJyb3InLFxyXG4gICAgICAgICdGYWNlIFNpZGUnLFxyXG4gICAgICAgICdVVjAnLFxyXG4gICAgICAgICdVVjEnLFxyXG4gICAgICAgICdVViBMaWdodG1hcCcsXHJcbiAgICAgICAgJ1Byb2plY3QgRGVwdGgnLFxyXG4gICAgICAgICdMaW5lYXIgRGVwdGgnLFxyXG5cclxuICAgICAgICAnRnJhZ21lbnQgTm9ybWFsJyxcclxuICAgICAgICAnRnJhZ21lbnQgVGFuZ2VudCcsXHJcbiAgICAgICAgJ0ZyYWdtZW50IEJpbm9ybWFsJyxcclxuICAgICAgICAnQmFzZSBDb2xvcicsXHJcbiAgICAgICAgJ0RpZmZ1c2UgQ29sb3InLFxyXG4gICAgICAgICdTcGVjdWxhciBDb2xvcicsXHJcbiAgICAgICAgJ1RyYW5zcGFyZW5jeScsXHJcbiAgICAgICAgJ01ldGFsbGljJyxcclxuICAgICAgICAnUm91Z2huZXNzJyxcclxuICAgICAgICAnU3BlY3VsYXIgSW50ZW5zaXR5JyxcclxuICAgICAgICAnSU9SJyxcclxuXHJcbiAgICAgICAgJ0RpcmVjdCBEaWZmdXNlJyxcclxuICAgICAgICAnRGlyZWN0IFNwZWN1bGFyJyxcclxuICAgICAgICAnRGlyZWN0IEFsbCcsXHJcbiAgICAgICAgJ0VudiBEaWZmdXNlJyxcclxuICAgICAgICAnRW52IFNwZWN1bGFyJyxcclxuICAgICAgICAnRW52IEFsbCcsXHJcbiAgICAgICAgJ0VtaXNzaXZlJyxcclxuICAgICAgICAnTGlnaHQgTWFwJyxcclxuICAgICAgICAnU2hhZG93JyxcclxuICAgICAgICAnQU8nLFxyXG5cclxuICAgICAgICAnRnJlc25lbCcsXHJcbiAgICAgICAgJ0RpcmVjdCBUcmFuc21pdCBEaWZmdXNlJyxcclxuICAgICAgICAnRGlyZWN0IFRyYW5zbWl0IFNwZWN1bGFyJyxcclxuICAgICAgICAnRW52IFRyYW5zbWl0IERpZmZ1c2UnLFxyXG4gICAgICAgICdFbnYgVHJhbnNtaXQgU3BlY3VsYXInLFxyXG4gICAgICAgICdUcmFuc21pdCBBbGwnLFxyXG4gICAgICAgICdEaXJlY3QgSW50ZXJuYWwgU3BlY3VsYXInLFxyXG4gICAgICAgICdFbnYgSW50ZXJuYWwgU3BlY3VsYXInLFxyXG4gICAgICAgICdJbnRlcm5hbCBBbGwnLFxyXG5cclxuICAgICAgICAnRm9nJyxcclxuICAgIF07XHJcbiAgICBwcml2YXRlIHN0ckNvbXBvc2l0ZTogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgJ0RpcmVjdCBEaWZmdXNlJyxcclxuICAgICAgICAnRGlyZWN0IFNwZWN1bGFyJyxcclxuICAgICAgICAnRW52IERpZmZ1c2UnLFxyXG4gICAgICAgICdFbnYgU3BlY3VsYXInLFxyXG4gICAgICAgICdFbWlzc2l2ZScsXHJcbiAgICAgICAgJ0xpZ2h0IE1hcCcsXHJcbiAgICAgICAgJ1NoYWRvdycsXHJcbiAgICAgICAgJ0FPJyxcclxuXHJcbiAgICAgICAgJ05vcm1hbCBNYXAnLFxyXG4gICAgICAgICdGb2cnLFxyXG5cclxuICAgICAgICAnVG9uZSBNYXBwaW5nJyxcclxuICAgICAgICAnR2FtbWEgQ29ycmVjdGlvbicsXHJcblxyXG4gICAgICAgICdGcmVzbmVsJyxcclxuICAgICAgICAnVHJhbnNtaXQgRGlmZnVzZScsXHJcbiAgICAgICAgJ1RyYW5zbWl0IFNwZWN1bGFyJyxcclxuICAgICAgICAnSW50ZXJuYWwgU3BlY3VsYXInLFxyXG4gICAgICAgICdUVCcsXHJcbiAgICBdO1xyXG4gICAgcHJpdmF0ZSBzdHJNaXNjOiBzdHJpbmdbXSA9IFtcclxuICAgICAgICAnQ1NNIExheWVyIENvbG9yYXRpb24nLFxyXG4gICAgICAgICdMaWdodGluZyBXaXRoIEFsYmVkbycsXHJcbiAgICBdO1xyXG5cclxuICAgIHByaXZhdGUgY29tcG9zaXRlTW9kZVRvZ2dsZUxpc3Q6IE5vZGVbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBzaW5nbGVNb2RlVG9nZ2xlTGlzdDogTm9kZVtdID0gW107XHJcbiAgICBwcml2YXRlIG1pc2NNb2RlVG9nZ2xlTGlzdDogTm9kZVtdID0gW107XHJcbiAgICBwcml2YXRlIHRleHRDb21wb25lbnRMaXN0OiBSaWNoVGV4dFtdID0gW107XHJcbiAgICBwcml2YXRlIGxhYmVsQ29tcG9uZW50TGlzdDogTGFiZWxbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSB0ZXh0Q29udGVudExpc3Q6IHN0cmluZ1tdID0gW107XHJcbiAgICBwcml2YXRlIGhpZGVCdXR0b25MYWJlbDogTGFiZWw7XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyBnZXQgY2FudmFzIHJlc29sdXRpb25cclxuICAgICAgICBjb25zdCBjYW52YXMgPSB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChDYW52YXMpO1xyXG4gICAgICAgIGlmICghY2FudmFzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2RlYnVnLXZpZXctcnVudGltZS1jb250cm9sIHNob3VsZCBiZSBjaGlsZCBvZiBDYW52YXMnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdWlUcmFuc2Zvcm0gPSB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChVSVRyYW5zZm9ybSk7XHJcbiAgICAgICAgY29uc3QgaGFsZlNjcmVlbldpZHRoID0gdWlUcmFuc2Zvcm0ud2lkdGggKiAwLjU7XHJcbiAgICAgICAgY29uc3QgaGFsZlNjcmVlbkhlaWdodCA9IHVpVHJhbnNmb3JtLmhlaWdodCAqIDAuNTtcclxuXHJcbiAgICAgICAgbGV0IHggPSAtaGFsZlNjcmVlbldpZHRoICsgaGFsZlNjcmVlbldpZHRoICogMC4xLCB5ID0gaGFsZlNjcmVlbkhlaWdodCAtIGhhbGZTY3JlZW5IZWlnaHQgKiAwLjE7XHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSAyMDAsIGhlaWdodCA9IDIwO1xyXG5cclxuICAgICAgICAvLyBuZXcgbm9kZXNcclxuICAgICAgICBjb25zdCBtaXNjTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnTWlzY01vZGUnKTtcclxuICAgICAgICBjb25zdCBidXR0b25Ob2RlID0gaW5zdGFudGlhdGUobWlzY05vZGUpO1xyXG4gICAgICAgIGJ1dHRvbk5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGJ1dHRvbk5vZGUubmFtZSA9ICdCdXR0b25zJztcclxuICAgICAgICBjb25zdCB0aXRsZU5vZGUgPSBpbnN0YW50aWF0ZShtaXNjTm9kZSk7XHJcbiAgICAgICAgdGl0bGVOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICB0aXRsZU5vZGUubmFtZSA9ICdUaXRsZXMnO1xyXG5cclxuICAgICAgICAvLyB0aXRsZVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0xhYmVsID0gaW5zdGFudGlhdGUodGhpcy5FbmFibGVBbGxDb21wb3NpdGVNb2RlQnV0dG9uLmdldENoaWxkQnlOYW1lKCdMYWJlbCcpKTtcclxuICAgICAgICAgICAgbmV3TGFiZWwuc2V0UG9zaXRpb24oeCArIChpID4gMCA/IDUwICsgd2lkdGggKiAyIDogMTUwKSwgeSwgMC4wKTtcclxuICAgICAgICAgICAgbmV3TGFiZWwuc2V0U2NhbGUoMC43NSwgMC43NSwgMC43NSk7XHJcbiAgICAgICAgICAgIG5ld0xhYmVsLnBhcmVudCA9IHRpdGxlTm9kZTtcclxuICAgICAgICAgICAgY29uc3QgbGFiZWxDb21wb25lbnQgPSBuZXdMYWJlbC5nZXRDb21wb25lbnQoTGFiZWwpO1xyXG4gICAgICAgICAgICBsYWJlbENvbXBvbmVudC5zdHJpbmcgPSBpID8gJy0tLS0tLS0tLS1Db21wb3NpdGUgTW9kZS0tLS0tLS0tLS0nIDogJy0tLS0tLS0tLS1TaW5nbGUgTW9kZS0tLS0tLS0tLS0nO1xyXG4gICAgICAgICAgICBsYWJlbENvbXBvbmVudC5jb2xvciA9IENvbG9yLldISVRFO1xyXG4gICAgICAgICAgICBsYWJlbENvbXBvbmVudC5vdmVyZmxvdyA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWxDb21wb25lbnRMaXN0W3RoaXMubGFiZWxDb21wb25lbnRMaXN0Lmxlbmd0aF0gPSBsYWJlbENvbXBvbmVudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHkgLT0gaGVpZ2h0O1xyXG4gICAgICAgIC8vIHNpbmdsZVxyXG4gICAgICAgIGxldCBjdXJyZW50Um93ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RyU2luZ2xlLmxlbmd0aDsgaSsrLCBjdXJyZW50Um93KyspIHtcclxuICAgICAgICAgICAgaWYgKGkgPT09IHRoaXMuc3RyU2luZ2xlLmxlbmd0aCA+PiAxKSB7XHJcbiAgICAgICAgICAgICAgICB4ICs9IHdpZHRoO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFJvdyA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbmV3Tm9kZSA9IGkgPyBpbnN0YW50aWF0ZSh0aGlzLnNpbmdsZU1vZGVUb2dnbGUpIDogdGhpcy5zaW5nbGVNb2RlVG9nZ2xlO1xyXG4gICAgICAgICAgICBuZXdOb2RlLnNldFBvc2l0aW9uKHgsIHkgLSBoZWlnaHQgKiBjdXJyZW50Um93LCAwLjApO1xyXG4gICAgICAgICAgICBuZXdOb2RlLnNldFNjYWxlKDAuNSwgMC41LCAwLjUpO1xyXG4gICAgICAgICAgICBuZXdOb2RlLnBhcmVudCA9IHRoaXMuc2luZ2xlTW9kZVRvZ2dsZS5wYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0ZXh0Q29tcG9uZW50ID0gbmV3Tm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKFJpY2hUZXh0KTtcclxuICAgICAgICAgICAgdGV4dENvbXBvbmVudC5zdHJpbmcgPSB0aGlzLnN0clNpbmdsZVtpXTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0Q29tcG9uZW50TGlzdFt0aGlzLnRleHRDb21wb25lbnRMaXN0Lmxlbmd0aF0gPSB0ZXh0Q29tcG9uZW50O1xyXG4gICAgICAgICAgICB0aGlzLnRleHRDb250ZW50TGlzdFt0aGlzLnRleHRDb250ZW50TGlzdC5sZW5ndGhdID0gdGV4dENvbXBvbmVudC5zdHJpbmc7XHJcblxyXG4gICAgICAgICAgICBuZXdOb2RlLm9uKFRvZ2dsZS5FdmVudFR5cGUuVE9HR0xFLCB0aGlzLnRvZ2dsZVNpbmdsZU1vZGUsIHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zaW5nbGVNb2RlVG9nZ2xlTGlzdFtpXSA9IG5ld05vZGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB4ICs9IHdpZHRoO1xyXG4gICAgICAgIC8vIGJ1dHRvbnNcclxuICAgICAgICB0aGlzLkVuYWJsZUFsbENvbXBvc2l0ZU1vZGVCdXR0b24uc2V0UG9zaXRpb24oeCArIDE1LCB5LCAwLjApO1xyXG4gICAgICAgIHRoaXMuRW5hYmxlQWxsQ29tcG9zaXRlTW9kZUJ1dHRvbi5zZXRTY2FsZSgwLjUsIDAuNSwgMC41KTtcclxuICAgICAgICB0aGlzLkVuYWJsZUFsbENvbXBvc2l0ZU1vZGVCdXR0b24ub24oQnV0dG9uLkV2ZW50VHlwZS5DTElDSywgdGhpcy5lbmFibGVBbGxDb21wb3NpdGVNb2RlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLkVuYWJsZUFsbENvbXBvc2l0ZU1vZGVCdXR0b24ucGFyZW50ID0gYnV0dG9uTm9kZTtcclxuICAgICAgICBsZXQgbGFiZWxDb21wb25lbnQgPSB0aGlzLkVuYWJsZUFsbENvbXBvc2l0ZU1vZGVCdXR0b24uZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihMYWJlbCk7XHJcbiAgICAgICAgdGhpcy5sYWJlbENvbXBvbmVudExpc3RbdGhpcy5sYWJlbENvbXBvbmVudExpc3QubGVuZ3RoXSA9IGxhYmVsQ29tcG9uZW50O1xyXG5cclxuICAgICAgICBjb25zdCBjaGFuZ2VDb2xvckJ1dHRvbiA9IGluc3RhbnRpYXRlKHRoaXMuRW5hYmxlQWxsQ29tcG9zaXRlTW9kZUJ1dHRvbik7XHJcbiAgICAgICAgY2hhbmdlQ29sb3JCdXR0b24uc2V0UG9zaXRpb24oeCArIDkwLCB5LCAwLjApO1xyXG4gICAgICAgIGNoYW5nZUNvbG9yQnV0dG9uLnNldFNjYWxlKDAuNSwgMC41LCAwLjUpO1xyXG4gICAgICAgIGNoYW5nZUNvbG9yQnV0dG9uLm9uKEJ1dHRvbi5FdmVudFR5cGUuQ0xJQ0ssIHRoaXMuY2hhbmdlVGV4dENvbG9yLCB0aGlzKTtcclxuICAgICAgICBjaGFuZ2VDb2xvckJ1dHRvbi5wYXJlbnQgPSBidXR0b25Ob2RlO1xyXG4gICAgICAgIGxhYmVsQ29tcG9uZW50ID0gY2hhbmdlQ29sb3JCdXR0b24uZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihMYWJlbCk7XHJcbiAgICAgICAgbGFiZWxDb21wb25lbnQuc3RyaW5nID0gJ1RleHRDb2xvcic7XHJcbiAgICAgICAgdGhpcy5sYWJlbENvbXBvbmVudExpc3RbdGhpcy5sYWJlbENvbXBvbmVudExpc3QubGVuZ3RoXSA9IGxhYmVsQ29tcG9uZW50O1xyXG5cclxuICAgICAgICBjb25zdCBIaWRlQnV0dG9uID0gaW5zdGFudGlhdGUodGhpcy5FbmFibGVBbGxDb21wb3NpdGVNb2RlQnV0dG9uKTtcclxuICAgICAgICBIaWRlQnV0dG9uLnNldFBvc2l0aW9uKHggKyAyMDAsIHksIDAuMCk7XHJcbiAgICAgICAgSGlkZUJ1dHRvbi5zZXRTY2FsZSgwLjUsIDAuNSwgMC41KTtcclxuICAgICAgICBIaWRlQnV0dG9uLm9uKEJ1dHRvbi5FdmVudFR5cGUuQ0xJQ0ssIHRoaXMuaGlkZVVJLCB0aGlzKTtcclxuICAgICAgICBIaWRlQnV0dG9uLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgbGFiZWxDb21wb25lbnQgPSBIaWRlQnV0dG9uLmdldENvbXBvbmVudEluQ2hpbGRyZW4oTGFiZWwpO1xyXG4gICAgICAgIGxhYmVsQ29tcG9uZW50LnN0cmluZyA9ICdIaWRlIFVJJztcclxuICAgICAgICB0aGlzLmxhYmVsQ29tcG9uZW50TGlzdFt0aGlzLmxhYmVsQ29tcG9uZW50TGlzdC5sZW5ndGhdID0gbGFiZWxDb21wb25lbnQ7XHJcbiAgICAgICAgdGhpcy5oaWRlQnV0dG9uTGFiZWwgPSBsYWJlbENvbXBvbmVudDtcclxuXHJcbiAgICAgICAgLy8gbWlzY1xyXG4gICAgICAgIHkgLT0gNDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0ck1pc2MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3Tm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuY29tcG9zaXRlTW9kZVRvZ2dsZSk7XHJcbiAgICAgICAgICAgIG5ld05vZGUuc2V0UG9zaXRpb24oeCwgeSAtIGhlaWdodCAqIGksIDAuMCk7XHJcbiAgICAgICAgICAgIG5ld05vZGUuc2V0U2NhbGUoMC41LCAwLjUsIDAuNSk7XHJcbiAgICAgICAgICAgIG5ld05vZGUucGFyZW50ID0gbWlzY05vZGU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0ZXh0Q29tcG9uZW50ID0gbmV3Tm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKFJpY2hUZXh0KTtcclxuICAgICAgICAgICAgdGV4dENvbXBvbmVudC5zdHJpbmcgPSB0aGlzLnN0ck1pc2NbaV07XHJcbiAgICAgICAgICAgIHRoaXMudGV4dENvbXBvbmVudExpc3RbdGhpcy50ZXh0Q29tcG9uZW50TGlzdC5sZW5ndGhdID0gdGV4dENvbXBvbmVudDtcclxuICAgICAgICAgICAgdGhpcy50ZXh0Q29udGVudExpc3RbdGhpcy50ZXh0Q29udGVudExpc3QubGVuZ3RoXSA9IHRleHRDb21wb25lbnQuc3RyaW5nO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdG9nZ2xlQ29tcG9uZW50ID0gbmV3Tm9kZS5nZXRDb21wb25lbnQoVG9nZ2xlKTtcclxuICAgICAgICAgICAgdG9nZ2xlQ29tcG9uZW50LmlzQ2hlY2tlZCA9IGkgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgIG5ld05vZGUub24oVG9nZ2xlLkV2ZW50VHlwZS5UT0dHTEUsIGkgPyB0aGlzLnRvZ2dsZUxpZ2h0aW5nV2l0aEFsYmVkbyA6IHRoaXMudG9nZ2xlQ1NNQ29sb3JhdGlvbiwgdGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMubWlzY01vZGVUb2dnbGVMaXN0W2ldID0gbmV3Tm9kZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNvbXBvc2l0ZVxyXG4gICAgICAgIHkgLT0gMTUwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdHJDb21wb3NpdGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3Tm9kZSA9IGkgPyBpbnN0YW50aWF0ZSh0aGlzLmNvbXBvc2l0ZU1vZGVUb2dnbGUpIDogdGhpcy5jb21wb3NpdGVNb2RlVG9nZ2xlO1xyXG4gICAgICAgICAgICBuZXdOb2RlLnNldFBvc2l0aW9uKHgsIHkgLSBoZWlnaHQgKiBpLCAwLjApO1xyXG4gICAgICAgICAgICBuZXdOb2RlLnNldFNjYWxlKDAuNSwgMC41LCAwLjUpO1xyXG4gICAgICAgICAgICBuZXdOb2RlLnBhcmVudCA9IHRoaXMuY29tcG9zaXRlTW9kZVRvZ2dsZS5wYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0ZXh0Q29tcG9uZW50ID0gbmV3Tm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKFJpY2hUZXh0KTtcclxuICAgICAgICAgICAgdGV4dENvbXBvbmVudC5zdHJpbmcgPSB0aGlzLnN0ckNvbXBvc2l0ZVtpXTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0Q29tcG9uZW50TGlzdFt0aGlzLnRleHRDb21wb25lbnRMaXN0Lmxlbmd0aF0gPSB0ZXh0Q29tcG9uZW50O1xyXG4gICAgICAgICAgICB0aGlzLnRleHRDb250ZW50TGlzdFt0aGlzLnRleHRDb250ZW50TGlzdC5sZW5ndGhdID0gdGV4dENvbXBvbmVudC5zdHJpbmc7XHJcblxyXG4gICAgICAgICAgICBuZXdOb2RlLm9uKFRvZ2dsZS5FdmVudFR5cGUuVE9HR0xFLCB0aGlzLnRvZ2dsZUNvbXBvc2l0ZU1vZGUsIHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb21wb3NpdGVNb2RlVG9nZ2xlTGlzdFtpXSA9IG5ld05vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlzVGV4dE1hdGNoZWQodGV4dFVJLCB0ZXh0RGVzY3JpcHRpb24pIDogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IHRlbXBUZXh0ID0gbmV3IFN0cmluZyh0ZXh0VUkpO1xyXG4gICAgICAgIGNvbnN0IGZpbmRJbmRleCA9IHRlbXBUZXh0LnNlYXJjaCgnPicpO1xyXG4gICAgICAgIGlmIChmaW5kSW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0ZXh0VUkgPT09IHRleHREZXNjcmlwdGlvbjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0ZW1wVGV4dCA9IHRlbXBUZXh0LnN1YnN0cihmaW5kSW5kZXggKyAxKTtcclxuICAgICAgICAgICAgdGVtcFRleHQgPSB0ZW1wVGV4dC5zdWJzdHIoMCwgdGVtcFRleHQuc2VhcmNoKCc8JykpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGVtcFRleHQgPT09IHRleHREZXNjcmlwdGlvbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0b2dnbGVTaW5nbGVNb2RlKHRvZ2dsZTogVG9nZ2xlKSB7XHJcbiAgICAgICAgY29uc3QgZGVidWdWaWV3ID0gZGlyZWN0b3Iucm9vdCEuZGVidWdWaWV3O1xyXG4gICAgICAgIGNvbnN0IHRleHRDb21wb25lbnQgPSB0b2dnbGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihSaWNoVGV4dCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0clNpbmdsZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1RleHRNYXRjaGVkKHRleHRDb21wb25lbnQuc3RyaW5nLCB0aGlzLnN0clNpbmdsZVtpXSkpIHtcclxuICAgICAgICAgICAgICAgIGRlYnVnVmlldy5zaW5nbGVNb2RlID0gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRvZ2dsZUNvbXBvc2l0ZU1vZGUodG9nZ2xlOiBUb2dnbGUpIHtcclxuICAgICAgICBjb25zdCBkZWJ1Z1ZpZXcgPSBkaXJlY3Rvci5yb290IS5kZWJ1Z1ZpZXc7XHJcbiAgICAgICAgY29uc3QgdGV4dENvbXBvbmVudCA9IHRvZ2dsZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKFJpY2hUZXh0KTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RyQ29tcG9zaXRlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVGV4dE1hdGNoZWQodGV4dENvbXBvbmVudC5zdHJpbmcsIHRoaXMuc3RyQ29tcG9zaXRlW2ldKSkge1xyXG4gICAgICAgICAgICAgICAgZGVidWdWaWV3LmVuYWJsZUNvbXBvc2l0ZU1vZGUoaSwgdG9nZ2xlLmlzQ2hlY2tlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0b2dnbGVMaWdodGluZ1dpdGhBbGJlZG8odG9nZ2xlOiBUb2dnbGUpIHtcclxuICAgICAgICBjb25zdCBkZWJ1Z1ZpZXcgPSBkaXJlY3Rvci5yb290IS5kZWJ1Z1ZpZXc7XHJcbiAgICAgICAgZGVidWdWaWV3LmxpZ2h0aW5nV2l0aEFsYmVkbyA9IHRvZ2dsZS5pc0NoZWNrZWQ7XHJcbiAgICB9XHJcbiAgICB0b2dnbGVDU01Db2xvcmF0aW9uKHRvZ2dsZTogVG9nZ2xlKSB7XHJcbiAgICAgICAgY29uc3QgZGVidWdWaWV3ID0gZGlyZWN0b3Iucm9vdCEuZGVidWdWaWV3O1xyXG4gICAgICAgIGRlYnVnVmlldy5jc21MYXllckNvbG9yYXRpb24gPSB0b2dnbGUuaXNDaGVja2VkO1xyXG4gICAgfVxyXG4gICAgZW5hYmxlQWxsQ29tcG9zaXRlTW9kZShidXR0b246IEJ1dHRvbikge1xyXG4gICAgICAgIGNvbnN0IGRlYnVnVmlldyA9IGRpcmVjdG9yLnJvb3QhLmRlYnVnVmlldztcclxuICAgICAgICBkZWJ1Z1ZpZXcuZW5hYmxlQWxsQ29tcG9zaXRlTW9kZSh0cnVlKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29tcG9zaXRlTW9kZVRvZ2dsZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgdG9nZ2xlQ29tcG9uZW50ID0gdGhpcy5jb21wb3NpdGVNb2RlVG9nZ2xlTGlzdFtpXS5nZXRDb21wb25lbnQoVG9nZ2xlKTtcclxuICAgICAgICAgICAgdG9nZ2xlQ29tcG9uZW50LmlzQ2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdG9nZ2xlQ29tcG9uZW50ID0gdGhpcy5taXNjTW9kZVRvZ2dsZUxpc3RbMF0uZ2V0Q29tcG9uZW50KFRvZ2dsZSk7XHJcbiAgICAgICAgdG9nZ2xlQ29tcG9uZW50LmlzQ2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIGRlYnVnVmlldy5jc21MYXllckNvbG9yYXRpb24gPSBmYWxzZTtcclxuICAgICAgICB0b2dnbGVDb21wb25lbnQgPSB0aGlzLm1pc2NNb2RlVG9nZ2xlTGlzdFsxXS5nZXRDb21wb25lbnQoVG9nZ2xlKTtcclxuICAgICAgICB0b2dnbGVDb21wb25lbnQuaXNDaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICBkZWJ1Z1ZpZXcubGlnaHRpbmdXaXRoQWxiZWRvID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGhpZGVVSShidXR0b246IEJ1dHRvbikge1xyXG4gICAgICAgIGNvbnN0IHRpdGxlTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnVGl0bGVzJyk7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlVmFsdWUgPSAhdGl0bGVOb2RlLmFjdGl2ZTtcclxuICAgICAgICB0aGlzLnNpbmdsZU1vZGVUb2dnbGVMaXN0WzBdLnBhcmVudC5hY3RpdmUgPSBhY3RpdmVWYWx1ZTtcclxuICAgICAgICB0aGlzLm1pc2NNb2RlVG9nZ2xlTGlzdFswXS5wYXJlbnQuYWN0aXZlID0gYWN0aXZlVmFsdWU7XHJcbiAgICAgICAgdGhpcy5jb21wb3NpdGVNb2RlVG9nZ2xlTGlzdFswXS5wYXJlbnQuYWN0aXZlID0gYWN0aXZlVmFsdWU7XHJcbiAgICAgICAgdGhpcy5FbmFibGVBbGxDb21wb3NpdGVNb2RlQnV0dG9uLnBhcmVudC5hY3RpdmUgPSBhY3RpdmVWYWx1ZTtcclxuICAgICAgICB0aXRsZU5vZGUuYWN0aXZlID0gYWN0aXZlVmFsdWU7XHJcbiAgICAgICAgdGhpcy5oaWRlQnV0dG9uTGFiZWwuc3RyaW5nID0gYWN0aXZlVmFsdWUgPyAnSGlkZSBVSScgOiAnU2hvdyBVSSc7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY3VycmVudENvbG9ySW5kZXggPSAwO1xyXG4gICAgcHJpdmF0ZSBzdHJDb2xvcjogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgJzxjb2xvcj0jZmZmZmZmPicsXHJcbiAgICAgICAgJzxjb2xvcj0jMDAwMDAwPicsXHJcbiAgICAgICAgJzxjb2xvcj0jZmYwMDAwPicsXHJcbiAgICAgICAgJzxjb2xvcj0jMDBmZjAwPicsXHJcbiAgICAgICAgJzxjb2xvcj0jMDAwMGZmPicsXHJcbiAgICBdO1xyXG4gICAgcHJpdmF0ZSBjb2xvcjogQ29sb3JbXSA9IFtcclxuICAgICAgICBDb2xvci5XSElURSxcclxuICAgICAgICBDb2xvci5CTEFDSyxcclxuICAgICAgICBDb2xvci5SRUQsXHJcbiAgICAgICAgQ29sb3IuR1JFRU4sXHJcbiAgICAgICAgQ29sb3IuQkxVRSxcclxuICAgIF07XHJcbiAgICBjaGFuZ2VUZXh0Q29sb3IoYnV0dG9uOiBCdXR0b24pIHtcclxuICAgICAgICB0aGlzLl9jdXJyZW50Q29sb3JJbmRleCsrO1xyXG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50Q29sb3JJbmRleCA+PSB0aGlzLnN0ckNvbG9yLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50Q29sb3JJbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50ZXh0Q29tcG9uZW50TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnRleHRDb21wb25lbnRMaXN0W2ldLnN0cmluZyA9IHRoaXMuc3RyQ29sb3JbdGhpcy5fY3VycmVudENvbG9ySW5kZXhdICsgdGhpcy50ZXh0Q29udGVudExpc3RbaV0gKyAnPC9jb2xvcj4nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGFiZWxDb21wb25lbnRMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWxDb21wb25lbnRMaXN0W2ldLmNvbG9yID0gdGhpcy5jb2xvclt0aGlzLl9jdXJyZW50Q29sb3JJbmRleF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgIH1cclxuICAgIHVwZGF0ZShkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgfVxyXG59XHJcbiJdfQ==