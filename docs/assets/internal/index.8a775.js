System.register("chunks:///_virtual/builtin-pipeline-settings.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './builtin-pipeline-types.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Camera, CCBoolean, CCInteger, CCFloat, Material, Texture2D, _decorator, Component, rendering, fillRequiredPipelineSettings, makePipelineSettings;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Camera = module.Camera;
      CCBoolean = module.CCBoolean;
      CCInteger = module.CCInteger;
      CCFloat = module.CCFloat;
      Material = module.Material;
      Texture2D = module.Texture2D;
      _decorator = module._decorator;
      Component = module.Component;
      rendering = module.rendering;
    }, function (module) {
      fillRequiredPipelineSettings = module.fillRequiredPipelineSettings;
      makePipelineSettings = module.makePipelineSettings;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "de1c2EHcMhAIYRZY5nyTQHG", "builtin-pipeline-settings", undefined);
      const {
        ccclass,
        disallowMultiple,
        executeInEditMode,
        menu,
        property,
        requireComponent,
        type
      } = _decorator;
      let BuiltinPipelineSettings = exports('BuiltinPipelineSettings', (_dec = ccclass('BuiltinPipelineSettings'), _dec2 = menu('Rendering/BuiltinPipelineSettings'), _dec3 = requireComponent(Camera), _dec4 = property(CCBoolean), _dec5 = property({
        displayName: 'Editor Preview (Experimental)',
        type: CCBoolean
      }), _dec6 = property({
        group: {
          id: 'MSAA',
          name: 'Multisample Anti-Aliasing'
        },
        type: CCBoolean
      }), _dec7 = property({
        group: {
          id: 'MSAA',
          name: 'Multisample Anti-Aliasing',
          style: 'section'
        },
        type: CCInteger,
        range: [2, 4, 2]
      }), _dec8 = property({
        group: {
          id: 'ShadingScale',
          name: 'ShadingScale',
          style: 'section'
        },
        type: CCBoolean
      }), _dec9 = property({
        tooltip: 'i18n:postprocess.shadingScale',
        group: {
          id: 'ShadingScale',
          name: 'ShadingScale'
        },
        type: CCFloat,
        range: [0.01, 4, 0.01],
        slide: true
      }), _dec10 = property({
        group: {
          id: 'DepthOfField',
          name: 'DepthOfField (PostProcessing)',
          style: 'section'
        },
        type: CCBoolean,
        visible: false
      }), _dec11 = property({
        group: {
          id: 'DepthOfField',
          name: 'DepthOfField (PostProcessing)',
          style: 'section'
        },
        type: Material,
        visible: false
      }), _dec12 = property({
        group: {
          id: 'DepthOfField',
          name: 'DepthOfField (PostProcessing)',
          style: 'section'
        },
        type: CCFloat,
        min: 0,
        visible: false
      }), _dec13 = property({
        group: {
          id: 'DepthOfField',
          name: 'DepthOfField (PostProcessing)',
          style: 'section'
        },
        type: CCFloat,
        min: 0,
        visible: false
      }), _dec14 = type(CCFloat), _dec15 = property({
        group: {
          id: 'DepthOfField',
          name: 'DepthOfField (PostProcessing)',
          style: 'section'
        },
        type: CCFloat,
        range: [1, 10, 0.01],
        slide: true,
        visible: false
      }), _dec16 = property({
        group: {
          id: 'Bloom',
          name: 'Bloom (PostProcessing)',
          style: 'section'
        },
        type: CCBoolean
      }), _dec17 = property({
        group: {
          id: 'Bloom',
          name: 'Bloom (PostProcessing)',
          style: 'section'
        },
        type: Material
      }), _dec18 = property({
        tooltip: 'i18n:bloom.enableAlphaMask',
        group: {
          id: 'Bloom',
          name: 'Bloom (PostProcessing)',
          style: 'section'
        },
        type: CCBoolean
      }), _dec19 = property({
        tooltip: 'i18n:bloom.iterations',
        group: {
          id: 'Bloom',
          name: 'Bloom (PostProcessing)',
          style: 'section'
        },
        type: CCInteger,
        range: [1, 6, 1],
        slide: true
      }), _dec20 = property({
        tooltip: 'i18n:bloom.threshold',
        group: {
          id: 'Bloom',
          name: 'Bloom (PostProcessing)',
          style: 'section'
        },
        type: CCFloat,
        min: 0
      }), _dec21 = property({
        group: {
          id: 'Color Grading',
          name: 'ColorGrading (LDR) (PostProcessing)',
          style: 'section'
        },
        type: CCBoolean
      }), _dec22 = property({
        group: {
          id: 'Color Grading',
          name: 'ColorGrading (LDR) (PostProcessing)',
          style: 'section'
        },
        type: Material
      }), _dec23 = property({
        tooltip: 'i18n:color_grading.contribute',
        group: {
          id: 'Color Grading',
          name: 'ColorGrading (LDR) (PostProcessing)',
          style: 'section'
        },
        type: CCFloat,
        range: [0, 1, 0.01],
        slide: true
      }), _dec24 = property({
        tooltip: 'i18n:color_grading.originalMap',
        group: {
          id: 'Color Grading',
          name: 'ColorGrading (LDR) (PostProcessing)',
          style: 'section'
        },
        type: Texture2D
      }), _dec25 = property({
        group: {
          id: 'FXAA',
          name: 'Fast Approximate Anti-Aliasing (PostProcessing)',
          style: 'section'
        },
        type: CCBoolean
      }), _dec26 = property({
        group: {
          id: 'FXAA',
          name: 'Fast Approximate Anti-Aliasing (PostProcessing)',
          style: 'section'
        },
        type: Material
      }), _dec27 = property({
        group: {
          id: 'FSR',
          name: 'FidelityFX Super Resolution',
          style: 'section'
        },
        type: CCBoolean
      }), _dec28 = property({
        group: {
          id: 'FSR',
          name: 'FidelityFX Super Resolution',
          style: 'section'
        },
        type: Material
      }), _dec29 = property({
        group: {
          id: 'FSR',
          name: 'FidelityFX Super Resolution',
          style: 'section'
        },
        type: CCFloat,
        range: [0, 1, 0.01],
        slide: true
      }), _dec30 = property({
        group: {
          id: 'ToneMapping',
          name: 'ToneMapping',
          style: 'section'
        },
        type: Material
      }), _dec(_class = _dec2(_class = _dec3(_class = disallowMultiple(_class = executeInEditMode(_class = (_class2 = class BuiltinPipelineSettings extends Component {
        constructor() {
          super(...arguments);
          _initializerDefineProperty(this, "_settings", _descriptor, this);
          // Editor Preview
          _initializerDefineProperty(this, "_editorPreview", _descriptor2, this);
        }
        // Enable/Disable
        onEnable() {
          fillRequiredPipelineSettings(this._settings);
          const cameraComponent = this.getComponent(Camera);
          const camera = cameraComponent.camera;
          camera.pipelineSettings = this._settings;
        }
        onDisable() {
          const cameraComponent = this.getComponent(Camera);
          const camera = cameraComponent.camera;
          camera.pipelineSettings = null;
        }
        get editorPreview() {
          return this._editorPreview;
        }
        set editorPreview(v) {
          this._editorPreview = v;
        }
        _tryEnableEditorPreview() {
          if (rendering === undefined) {
            return;
          }
          if (this._editorPreview) {
            rendering.setEditorPipelineSettings(this._settings);
          } else {
            this._disableEditorPreview();
          }
        }
        _disableEditorPreview() {
          if (rendering === undefined) {
            return;
          }
          const current = rendering.getEditorPipelineSettings();
          if (current === this._settings) {
            rendering.setEditorPipelineSettings(null);
          }
        }

        // MSAA
        get MsaaEnable() {
          return this._settings.msaa.enabled;
        }
        set MsaaEnable(value) {
          this._settings.msaa.enabled = value;
        }
        set msaaSampleCount(value) {
          value = 2 ** Math.ceil(Math.log2(Math.max(value, 2)));
          value = Math.min(value, 4);
          this._settings.msaa.sampleCount = value;
        }
        get msaaSampleCount() {
          return this._settings.msaa.sampleCount;
        }

        // Shading Scale
        set shadingScaleEnable(value) {
          this._settings.enableShadingScale = value;
        }
        get shadingScaleEnable() {
          return this._settings.enableShadingScale;
        }
        set shadingScale(value) {
          this._settings.shadingScale = value;
        }
        get shadingScale() {
          return this._settings.shadingScale;
        }

        // DepthOfField
        set dofEnable(value) {
          this._settings.depthOfField.enabled = value;
        }
        get dofEnable() {
          return this._settings.depthOfField.enabled;
        }
        set dofMaterial(value) {
          if (this._settings.depthOfField.material === value) {
            return;
          }
          this._settings.depthOfField.material = value;
        }
        get dofMaterial() {
          return this._settings.depthOfField.material;
        }
        set dofFocusDistance(value) {
          this._settings.depthOfField.focusDistance = value;
        }
        get dofFocusDistance() {
          return this._settings.depthOfField.focusDistance;
        }
        set dofFocusRange(value) {
          this._settings.depthOfField.focusRange = value;
        }
        get dofFocusRange() {
          return this._settings.depthOfField.focusRange;
        }
        set dofBokehRadius(value) {
          this._settings.depthOfField.bokehRadius = value;
        }
        get dofBokehRadius() {
          return this._settings.depthOfField.bokehRadius;
        }

        // Bloom
        set bloomEnable(value) {
          this._settings.bloom.enabled = value;
        }
        get bloomEnable() {
          return this._settings.bloom.enabled;
        }
        set bloomMaterial(value) {
          if (this._settings.bloom.material === value) {
            return;
          }
          this._settings.bloom.material = value;
        }
        get bloomMaterial() {
          return this._settings.bloom.material;
        }
        set bloomEnableAlphaMask(value) {
          this._settings.bloom.enableAlphaMask = value;
        }
        get bloomEnableAlphaMask() {
          return this._settings.bloom.enableAlphaMask;
        }
        set bloomIterations(value) {
          this._settings.bloom.iterations = value;
        }
        get bloomIterations() {
          return this._settings.bloom.iterations;
        }
        set bloomThreshold(value) {
          this._settings.bloom.threshold = value;
        }
        get bloomThreshold() {
          return this._settings.bloom.threshold;
        }
        set bloomIntensity(value) {
          this._settings.bloom.intensity = value;
        }
        get bloomIntensity() {
          return this._settings.bloom.intensity;
        }

        // Color Grading (LDR)
        set colorGradingEnable(value) {
          this._settings.colorGrading.enabled = value;
        }
        get colorGradingEnable() {
          return this._settings.colorGrading.enabled;
        }
        set colorGradingMaterial(value) {
          if (this._settings.colorGrading.material === value) {
            return;
          }
          this._settings.colorGrading.material = value;
        }
        get colorGradingMaterial() {
          return this._settings.colorGrading.material;
        }
        set colorGradingContribute(value) {
          this._settings.colorGrading.contribute = value;
        }
        get colorGradingContribute() {
          return this._settings.colorGrading.contribute;
        }
        set colorGradingMap(val) {
          this._settings.colorGrading.colorGradingMap = val;
        }
        get colorGradingMap() {
          return this._settings.colorGrading.colorGradingMap;
        }

        // FXAA
        set fxaaEnable(value) {
          this._settings.fxaa.enabled = value;
        }
        get fxaaEnable() {
          return this._settings.fxaa.enabled;
        }
        set fxaaMaterial(value) {
          if (this._settings.fxaa.material === value) {
            return;
          }
          this._settings.fxaa.material = value;
        }
        get fxaaMaterial() {
          return this._settings.fxaa.material;
        }

        // FSR
        set fsrEnable(value) {
          this._settings.fsr.enabled = value;
        }
        get fsrEnable() {
          return this._settings.fsr.enabled;
        }
        set fsrMaterial(value) {
          if (this._settings.fsr.material === value) {
            return;
          }
          this._settings.fsr.material = value;
        }
        get fsrMaterial() {
          return this._settings.fsr.material;
        }
        set fsrSharpness(value) {
          this._settings.fsr.sharpness = value;
        }
        get fsrSharpness() {
          return this._settings.fsr.sharpness;
        }
        set toneMappingMaterial(value) {
          if (this._settings.toneMapping.material === value) {
            return;
          }
          this._settings.toneMapping.material = value;
        }
        get toneMappingMaterial() {
          return this._settings.toneMapping.material;
        }
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_settings", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return makePipelineSettings();
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_editorPreview", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "editorPreview", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "editorPreview"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "MsaaEnable", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "MsaaEnable"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "msaaSampleCount", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "msaaSampleCount"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "shadingScaleEnable", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "shadingScaleEnable"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "shadingScale", [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "shadingScale"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "dofEnable", [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "dofEnable"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "dofMaterial", [_dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "dofMaterial"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "dofFocusDistance", [_dec12], Object.getOwnPropertyDescriptor(_class2.prototype, "dofFocusDistance"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "dofFocusRange", [_dec13], Object.getOwnPropertyDescriptor(_class2.prototype, "dofFocusRange"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "dofBokehRadius", [_dec14, _dec15], Object.getOwnPropertyDescriptor(_class2.prototype, "dofBokehRadius"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "bloomEnable", [_dec16], Object.getOwnPropertyDescriptor(_class2.prototype, "bloomEnable"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "bloomMaterial", [_dec17], Object.getOwnPropertyDescriptor(_class2.prototype, "bloomMaterial"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "bloomEnableAlphaMask", [_dec18], Object.getOwnPropertyDescriptor(_class2.prototype, "bloomEnableAlphaMask"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "bloomIterations", [_dec19], Object.getOwnPropertyDescriptor(_class2.prototype, "bloomIterations"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "bloomThreshold", [_dec20], Object.getOwnPropertyDescriptor(_class2.prototype, "bloomThreshold"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "colorGradingEnable", [_dec21], Object.getOwnPropertyDescriptor(_class2.prototype, "colorGradingEnable"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "colorGradingMaterial", [_dec22], Object.getOwnPropertyDescriptor(_class2.prototype, "colorGradingMaterial"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "colorGradingContribute", [_dec23], Object.getOwnPropertyDescriptor(_class2.prototype, "colorGradingContribute"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "colorGradingMap", [_dec24], Object.getOwnPropertyDescriptor(_class2.prototype, "colorGradingMap"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "fxaaEnable", [_dec25], Object.getOwnPropertyDescriptor(_class2.prototype, "fxaaEnable"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "fxaaMaterial", [_dec26], Object.getOwnPropertyDescriptor(_class2.prototype, "fxaaMaterial"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "fsrEnable", [_dec27], Object.getOwnPropertyDescriptor(_class2.prototype, "fsrEnable"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "fsrMaterial", [_dec28], Object.getOwnPropertyDescriptor(_class2.prototype, "fsrMaterial"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "fsrSharpness", [_dec29], Object.getOwnPropertyDescriptor(_class2.prototype, "fsrSharpness"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "toneMappingMaterial", [_dec30], Object.getOwnPropertyDescriptor(_class2.prototype, "toneMappingMaterial"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/builtin-pipeline-types.ts", ['cc'], function (exports) {
  var cclegacy, gfx;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      gfx = module.gfx;
    }],
    execute: function () {
      exports({
        fillRequiredBloom: fillRequiredBloom,
        fillRequiredColorGrading: fillRequiredColorGrading,
        fillRequiredDepthOfField: fillRequiredDepthOfField,
        fillRequiredFSR: fillRequiredFSR,
        fillRequiredFXAA: fillRequiredFXAA,
        fillRequiredHBAO: fillRequiredHBAO,
        fillRequiredMSAA: fillRequiredMSAA,
        fillRequiredPipelineSettings: fillRequiredPipelineSettings,
        fillRequiredToneMapping: fillRequiredToneMapping,
        makeBloom: makeBloom,
        makeColorGrading: makeColorGrading,
        makeDepthOfField: makeDepthOfField,
        makeFSR: makeFSR,
        makeFXAA: makeFXAA,
        makeHBAO: makeHBAO,
        makeMSAA: makeMSAA,
        makePipelineSettings: makePipelineSettings,
        makeToneMapping: makeToneMapping
      });
      cclegacy._RF.push({}, "cbf30kCUX9A3K+QpVC6wnzx", "builtin-pipeline-types", undefined);
      const {
        SampleCount
      } = gfx;
      function makeMSAA() {
        return {
          enabled: false,
          sampleCount: SampleCount.X4
        };
      }
      function fillRequiredMSAA(value) {
        if (value.enabled === undefined) {
          value.enabled = false;
        }
        if (value.sampleCount === undefined) {
          value.sampleCount = SampleCount.X4;
        }
      }
      function makeHBAO() {
        return {
          enabled: false,
          radiusScale: 1,
          angleBiasDegree: 10,
          blurSharpness: 3,
          aoSaturation: 1,
          needBlur: false
        };
      }
      function fillRequiredHBAO(value) {
        if (value.enabled === undefined) {
          value.enabled = false;
        }
        if (value.radiusScale === undefined) {
          value.radiusScale = 1;
        }
        if (value.angleBiasDegree === undefined) {
          value.angleBiasDegree = 10;
        }
        if (value.blurSharpness === undefined) {
          value.blurSharpness = 3;
        }
        if (value.aoSaturation === undefined) {
          value.aoSaturation = 1;
        }
        if (value.needBlur === undefined) {
          value.needBlur = false;
        }
      }
      function makeDepthOfField() {
        return {
          enabled: false,
          material: null,
          focusDistance: 0,
          focusRange: 0,
          bokehRadius: 1
        };
      }
      function fillRequiredDepthOfField(value) {
        if (value.enabled === undefined) {
          value.enabled = false;
        }
        if (value.material === undefined) {
          value.material = null;
        }
        if (value.focusDistance === undefined) {
          value.focusDistance = 0;
        }
        if (value.focusRange === undefined) {
          value.focusRange = 0;
        }
        if (value.bokehRadius === undefined) {
          value.bokehRadius = 1;
        }
      }
      function makeBloom() {
        return {
          enabled: false,
          material: null,
          enableAlphaMask: false,
          iterations: 3,
          threshold: 0.8,
          intensity: 2.3
        };
      }
      function fillRequiredBloom(value) {
        if (value.enabled === undefined) {
          value.enabled = false;
        }
        if (value.material === undefined) {
          value.material = null;
        }
        if (value.enableAlphaMask === undefined) {
          value.enableAlphaMask = false;
        }
        if (value.iterations === undefined) {
          value.iterations = 3;
        }
        if (value.threshold === undefined) {
          value.threshold = 0.8;
        }
        if (value.intensity === undefined) {
          value.intensity = 2.3;
        }
      }
      function makeColorGrading() {
        return {
          enabled: false,
          material: null,
          contribute: 1,
          colorGradingMap: null
        };
      }
      function fillRequiredColorGrading(value) {
        if (value.enabled === undefined) {
          value.enabled = false;
        }
        if (value.material === undefined) {
          value.material = null;
        }
        if (value.contribute === undefined) {
          value.contribute = 1;
        }
        if (value.colorGradingMap === undefined) {
          value.colorGradingMap = null;
        }
      }
      function makeFSR() {
        return {
          enabled: false,
          material: null,
          sharpness: 0.8
        };
      }
      function fillRequiredFSR(value) {
        if (value.enabled === undefined) {
          value.enabled = false;
        }
        if (value.material === undefined) {
          value.material = null;
        }
        if (value.sharpness === undefined) {
          value.sharpness = 0.8;
        }
      }
      function makeFXAA() {
        return {
          enabled: false,
          material: null
        };
      }
      function fillRequiredFXAA(value) {
        if (value.enabled === undefined) {
          value.enabled = false;
        }
        if (value.material === undefined) {
          value.material = null;
        }
      }
      function makeToneMapping() {
        return {
          material: null
        };
      }
      function fillRequiredToneMapping(value) {
        if (value.material === undefined) {
          value.material = null;
        }
      }
      function makePipelineSettings() {
        return {
          msaa: makeMSAA(),
          enableShadingScale: false,
          shadingScale: 0.5,
          depthOfField: makeDepthOfField(),
          bloom: makeBloom(),
          toneMapping: makeToneMapping(),
          colorGrading: makeColorGrading(),
          fsr: makeFSR(),
          fxaa: makeFXAA()
        };
      }
      function fillRequiredPipelineSettings(value) {
        if (!value.msaa) {
          value.msaa = makeMSAA();
        } else {
          fillRequiredMSAA(value.msaa);
        }
        if (value.enableShadingScale === undefined) {
          value.enableShadingScale = false;
        }
        if (value.shadingScale === undefined) {
          value.shadingScale = 0.5;
        }
        if (!value.depthOfField) {
          value.depthOfField = makeDepthOfField();
        } else {
          fillRequiredDepthOfField(value.depthOfField);
        }
        if (!value.bloom) {
          value.bloom = makeBloom();
        } else {
          fillRequiredBloom(value.bloom);
        }
        if (!value.toneMapping) {
          value.toneMapping = makeToneMapping();
        } else {
          fillRequiredToneMapping(value.toneMapping);
        }
        if (!value.colorGrading) {
          value.colorGrading = makeColorGrading();
        } else {
          fillRequiredColorGrading(value.colorGrading);
        }
        if (!value.fsr) {
          value.fsr = makeFSR();
        } else {
          fillRequiredFSR(value.fsr);
        }
        if (!value.fxaa) {
          value.fxaa = makeFXAA();
        } else {
          fillRequiredFXAA(value.fxaa);
        }
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/builtin-pipeline.ts", ['cc', './builtin-pipeline-types.ts'], function () {
  var cclegacy, rendering, Vec3, Vec4, Vec2, Material, PipelineEventType, assert, warn, clamp, renderer, gfx, sys, pipeline, Layers, geometry, makePipelineSettings;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      rendering = module.rendering;
      Vec3 = module.Vec3;
      Vec4 = module.Vec4;
      Vec2 = module.Vec2;
      Material = module.Material;
      PipelineEventType = module.PipelineEventType;
      assert = module.assert;
      warn = module.warn;
      clamp = module.clamp;
      renderer = module.renderer;
      gfx = module.gfx;
      sys = module.sys;
      pipeline = module.pipeline;
      Layers = module.Layers;
      geometry = module.geometry;
    }, function (module) {
      makePipelineSettings = module.makePipelineSettings;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ff9b0GZzgRM/obMbHGfCNbk", "builtin-pipeline", undefined);
      const {
        AABB,
        Sphere,
        intersect
      } = geometry;
      const {
        ClearFlagBit,
        Color,
        Format,
        FormatFeatureBit,
        LoadOp,
        StoreOp,
        TextureType,
        Viewport
      } = gfx;
      const {
        scene
      } = renderer;
      const {
        CameraUsage,
        CSMLevel,
        LightType
      } = scene;
      function forwardNeedClearColor(camera) {
        return !!(camera.clearFlag & (ClearFlagBit.COLOR | ClearFlagBit.STENCIL << 1));
      }
      function getCsmMainLightViewport(light, w, h, level, vp, screenSpaceSignY) {
        if (light.shadowFixedArea || light.csmLevel === CSMLevel.LEVEL_1) {
          vp.left = 0;
          vp.top = 0;
          vp.width = Math.trunc(w);
          vp.height = Math.trunc(h);
        } else {
          vp.left = Math.trunc(level % 2 * 0.5 * w);
          if (screenSpaceSignY > 0) {
            vp.top = Math.trunc((1 - Math.floor(level / 2)) * 0.5 * h);
          } else {
            vp.top = Math.trunc(Math.floor(level / 2) * 0.5 * h);
          }
          vp.width = Math.trunc(0.5 * w);
          vp.height = Math.trunc(0.5 * h);
        }
        vp.left = Math.max(0, vp.left);
        vp.top = Math.max(0, vp.top);
        vp.width = Math.max(1, vp.width);
        vp.height = Math.max(1, vp.height);
      }
      class PipelineConfigs {
        constructor() {
          this.isWeb = false;
          this.isWebGL1 = false;
          this.isWebGPU = false;
          this.isMobile = false;
          this.isHDR = false;
          this.useFloatOutput = false;
          this.toneMappingType = 0;
          // 0: ACES, 1: None
          this.shadowEnabled = false;
          this.shadowMapFormat = Format.R32F;
          this.shadowMapSize = new Vec2(1, 1);
          this.usePlanarShadow = false;
          this.screenSpaceSignY = 1;
          this.supportDepthSample = false;
          this.mobileMaxSpotLightShadowMaps = 1;
          this.platform = new Vec4(0, 0, 0, 0);
        }
      }
      function setupPipelineConfigs(ppl, configs) {
        const sampleFeature = FormatFeatureBit.SAMPLED_TEXTURE | FormatFeatureBit.LINEAR_FILTER;
        const device = ppl.device;
        // Platform
        configs.isWeb = !sys.isNative;
        configs.isWebGL1 = device.gfxAPI === gfx.API.WEBGL;
        configs.isWebGPU = device.gfxAPI === gfx.API.WEBGPU;
        configs.isMobile = sys.isMobile;

        // Rendering
        configs.isHDR = ppl.pipelineSceneData.isHDR; // Has tone mapping
        configs.useFloatOutput = ppl.getMacroBool('CC_USE_FLOAT_OUTPUT');
        configs.toneMappingType = ppl.pipelineSceneData.postSettings.toneMappingType;
        // Shadow
        const shadowInfo = ppl.pipelineSceneData.shadows;
        configs.shadowEnabled = shadowInfo.enabled;
        configs.shadowMapFormat = pipeline.supportsR32FloatTexture(ppl.device) ? Format.R32F : Format.RGBA8;
        configs.shadowMapSize.set(shadowInfo.size);
        configs.usePlanarShadow = shadowInfo.enabled && shadowInfo.type === renderer.scene.ShadowType.Planar;
        // Device
        configs.screenSpaceSignY = ppl.device.capabilities.screenSpaceSignY;
        configs.supportDepthSample = (ppl.device.getFormatFeatures(Format.DEPTH_STENCIL) & sampleFeature) === sampleFeature;
        // Constants
        const screenSpaceSignY = device.capabilities.screenSpaceSignY;
        configs.platform.x = configs.isMobile ? 1.0 : 0.0;
        configs.platform.w = screenSpaceSignY * 0.5 + 0.5 << 1 | device.capabilities.clipSpaceSignY * 0.5 + 0.5;
      }
      const defaultSettings = makePipelineSettings();
      class CameraConfigs {
        constructor() {
          this.colorName = '';
          this.depthStencilName = '';
          this.enableMainLightShadowMap = false;
          this.enableMainLightPlanarShadowMap = false;
          this.enablePostProcess = false;
          this.enableProfiler = false;
          this.enableShadingScale = false;
          this.enableMSAA = false;
          this.enableDOF = false;
          this.enableBloom = false;
          this.enableColorGrading = false;
          this.enableFXAA = false;
          this.enableFSR = false;
          this.enableHDR = false;
          this.enablePlanarReflectionProbe = false;
          this.useFullPipeline = false;
          this.singleForwardRadiancePass = false;
          this.radianceFormat = gfx.Format.RGBA8;
          this.shadingScale = 0.5;
          this.settings = defaultSettings;
        }
      }
      function setupPostProcessConfigs(pipelineConfigs, settings, cameraConfigs) {
        cameraConfigs.enableDOF = pipelineConfigs.supportDepthSample && settings.depthOfField.enabled && !!settings.depthOfField.material;
        cameraConfigs.enableBloom = settings.bloom.enabled && !!settings.bloom.material;
        cameraConfigs.enableColorGrading = settings.colorGrading.enabled && !!settings.colorGrading.material && !!settings.colorGrading.colorGradingMap;
        cameraConfigs.enableFXAA = settings.fxaa.enabled && !!settings.fxaa.material;
        cameraConfigs.enablePostProcess = cameraConfigs.enableDOF || cameraConfigs.enableBloom || cameraConfigs.enableColorGrading || cameraConfigs.enableFXAA;
      }
      function setupCameraConfigs(camera, pipelineConfigs, cameraConfigs) {
        const window = camera.window;
        const isMainGameWindow = camera.cameraUsage === CameraUsage.GAME && !!window.swapchain;
        const isEditorView = camera.cameraUsage === CameraUsage.SCENE_VIEW || camera.cameraUsage === CameraUsage.PREVIEW;
        cameraConfigs.colorName = window.colorName;
        cameraConfigs.depthStencilName = window.depthStencilName;
        cameraConfigs.useFullPipeline = (camera.visibility & Layers.Enum.DEFAULT) !== 0;
        cameraConfigs.enableMainLightShadowMap = pipelineConfigs.shadowEnabled && !pipelineConfigs.usePlanarShadow && !!camera.scene && !!camera.scene.mainLight && camera.scene.mainLight.shadowEnabled;
        cameraConfigs.enableMainLightPlanarShadowMap = pipelineConfigs.shadowEnabled && pipelineConfigs.usePlanarShadow && !!camera.scene && !!camera.scene.mainLight && camera.scene.mainLight.shadowEnabled;
        cameraConfigs.enablePlanarReflectionProbe = isMainGameWindow || camera.cameraUsage === CameraUsage.SCENE_VIEW;
        cameraConfigs.enableProfiler = isMainGameWindow;
        cameraConfigs.settings = camera.pipelineSettings ? camera.pipelineSettings : defaultSettings;
        setupPostProcessConfigs(pipelineConfigs, cameraConfigs.settings, cameraConfigs);
        if (isEditorView) {
          const editorSettings = rendering.getEditorPipelineSettings();
          if (editorSettings) {
            cameraConfigs.settings = editorSettings;
            setupPostProcessConfigs(pipelineConfigs, cameraConfigs.settings, cameraConfigs);
          }
        }

        // MSAA
        cameraConfigs.enableMSAA = cameraConfigs.settings.msaa.enabled && !pipelineConfigs.isWeb // TODO(zhouzhenglong): remove this constraint
        && !pipelineConfigs.isWebGL1;

        // Shading scale
        cameraConfigs.shadingScale = cameraConfigs.settings.shadingScale;
        cameraConfigs.enableShadingScale = cameraConfigs.settings.enableShadingScale && cameraConfigs.shadingScale !== 1.0;

        // FSR (Depend on Shading scale)
        cameraConfigs.enableFSR = cameraConfigs.settings.fsr.enabled && !!cameraConfigs.settings.fsr.material && cameraConfigs.enableShadingScale && cameraConfigs.shadingScale < 1.0;

        // Forward rendering (Depend on MSAA and TBR)
        cameraConfigs.singleForwardRadiancePass = pipelineConfigs.isMobile || cameraConfigs.enableMSAA;
        cameraConfigs.enableHDR = cameraConfigs.useFullPipeline && pipelineConfigs.useFloatOutput;
        cameraConfigs.radianceFormat = cameraConfigs.enableHDR ? gfx.Format.RGBA16F : gfx.Format.RGBA8;
      }
      if (rendering) {
        const {
          QueueHint,
          SceneFlags,
          ResourceFlags,
          ResourceResidency
        } = rendering;
        class ForwardLighting {
          constructor() {
            // Active lights
            this.lights = [];
            // Active spot lights with shadows (Mutually exclusive with `lights`)
            this.shadowEnabledSpotLights = [];
            // Internal cached resources
            this._sphere = Sphere.create(0, 0, 0, 1);
            this._boundingBox = new AABB();
            this._rangedDirLightBoundingBox = new AABB(0.0, 0.0, 0.0, 0.5, 0.5, 0.5);
          }
          // ----------------------------------------------------------------
          // Interface
          // ----------------------------------------------------------------
          cullLights(scene, frustum, cameraPos) {
            // TODO(zhouzhenglong): Make light culling native
            this.lights.length = 0;
            this.shadowEnabledSpotLights.length = 0;
            // spot lights
            for (const light of scene.spotLights) {
              if (light.baked) {
                continue;
              }
              Sphere.set(this._sphere, light.position.x, light.position.y, light.position.z, light.range);
              if (intersect.sphereFrustum(this._sphere, frustum)) {
                if (light.shadowEnabled) {
                  this.shadowEnabledSpotLights.push(light);
                } else {
                  this.lights.push(light);
                }
              }
            }
            // sphere lights
            for (const light of scene.sphereLights) {
              if (light.baked) {
                continue;
              }
              Sphere.set(this._sphere, light.position.x, light.position.y, light.position.z, light.range);
              if (intersect.sphereFrustum(this._sphere, frustum)) {
                this.lights.push(light);
              }
            }
            // point lights
            for (const light of scene.pointLights) {
              if (light.baked) {
                continue;
              }
              Sphere.set(this._sphere, light.position.x, light.position.y, light.position.z, light.range);
              if (intersect.sphereFrustum(this._sphere, frustum)) {
                this.lights.push(light);
              }
            }
            // ranged dir lights
            for (const light of scene.rangedDirLights) {
              AABB.transform(this._boundingBox, this._rangedDirLightBoundingBox, light.node.getWorldMatrix());
              if (intersect.aabbFrustum(this._boundingBox, frustum)) {
                this.lights.push(light);
              }
            }
            if (cameraPos) {
              this.shadowEnabledSpotLights.sort((lhs, rhs) => Vec3.squaredDistance(cameraPos, lhs.position) - Vec3.squaredDistance(cameraPos, rhs.position));
            }
          }
          _addLightQueues(camera, pass) {
            for (const light of this.lights) {
              const queue = pass.addQueue(QueueHint.BLEND, 'forward-add');
              switch (light.type) {
                case LightType.SPHERE:
                  queue.name = 'sphere-light';
                  break;
                case LightType.SPOT:
                  queue.name = 'spot-light';
                  break;
                case LightType.POINT:
                  queue.name = 'point-light';
                  break;
                case LightType.RANGED_DIRECTIONAL:
                  queue.name = 'ranged-directional-light';
                  break;
                default:
                  queue.name = 'unknown-light';
              }
              queue.addScene(camera, SceneFlags.BLEND, light);
            }
          }
          addSpotlightShadowPasses(ppl, camera, maxNumShadowMaps) {
            let i = 0;
            for (const light of this.shadowEnabledSpotLights) {
              const shadowMapSize = ppl.pipelineSceneData.shadows.size;
              const shadowPass = ppl.addRenderPass(shadowMapSize.x, shadowMapSize.y, 'default');
              shadowPass.name = `SpotLightShadowPass${i}`;
              shadowPass.addRenderTarget(`SpotShadowMap${i}`, LoadOp.CLEAR, StoreOp.STORE, new Color(1, 1, 1, 1));
              shadowPass.addDepthStencil(`SpotShadowDepth${i}`, LoadOp.CLEAR, StoreOp.DISCARD);
              shadowPass.addQueue(QueueHint.NONE, 'shadow-caster').addScene(camera, SceneFlags.OPAQUE | SceneFlags.MASK | SceneFlags.SHADOW_CASTER).useLightFrustum(light);
              ++i;
              if (i >= maxNumShadowMaps) {
                break;
              }
            }
          }
          addLightQueues(pass, camera, maxNumShadowMaps) {
            this._addLightQueues(camera, pass);
            let i = 0;
            for (const light of this.shadowEnabledSpotLights) {
              // Add spot-light pass
              // Save last RenderPass to the `pass` variable
              // TODO(zhouzhenglong): Fix per queue addTexture
              pass.addTexture(`SpotShadowMap${i}`, 'cc_spotShadowMap');
              const queue = pass.addQueue(QueueHint.BLEND, 'forward-add');
              queue.addScene(camera, SceneFlags.BLEND, light);
              ++i;
              if (i >= maxNumShadowMaps) {
                break;
              }
            }
          }

          // Notice: ForwardLighting cannot handle a lot of lights.
          // If there are too many lights, the performance will be very poor.
          // If many lights are needed, please implement a forward+ or deferred rendering pipeline.
          addLightPasses(colorName, depthStencilName, depthStencilStoreOp, id,
          // window id
          width, height, camera, viewport, ppl, pass) {
            this._addLightQueues(camera, pass);
            let count = 0;
            const shadowMapSize = ppl.pipelineSceneData.shadows.size;
            for (const light of this.shadowEnabledSpotLights) {
              const shadowPass = ppl.addRenderPass(shadowMapSize.x, shadowMapSize.y, 'default');
              shadowPass.name = 'SpotlightShadowPass';
              // Reuse csm shadow map
              shadowPass.addRenderTarget(`ShadowMap${id}`, LoadOp.CLEAR, StoreOp.STORE, new Color(1, 1, 1, 1));
              shadowPass.addDepthStencil(`ShadowDepth${id}`, LoadOp.CLEAR, StoreOp.DISCARD);
              shadowPass.addQueue(QueueHint.NONE, 'shadow-caster').addScene(camera, SceneFlags.OPAQUE | SceneFlags.MASK | SceneFlags.SHADOW_CASTER).useLightFrustum(light);

              // Add spot-light pass
              // Save last RenderPass to the `pass` variable
              ++count;
              const storeOp = count === this.shadowEnabledSpotLights.length ? depthStencilStoreOp : StoreOp.STORE;
              pass = ppl.addRenderPass(width, height, 'default');
              pass.name = 'SpotlightWithShadowMap';
              pass.setViewport(viewport);
              pass.addRenderTarget(colorName, LoadOp.LOAD);
              pass.addDepthStencil(depthStencilName, LoadOp.LOAD, storeOp);
              pass.addTexture(`ShadowMap${id}`, 'cc_spotShadowMap');
              const queue = pass.addQueue(QueueHint.BLEND, 'forward-add');
              queue.addScene(camera, SceneFlags.BLEND, light);
            }
            return pass;
          }
          isMultipleLightPassesNeeded() {
            return this.shadowEnabledSpotLights.length > 0;
          }
        }
        class BuiltinPipelineBuilder {
          constructor() {
            this._pipelineEvent = cclegacy.director.root.pipelineEvent;
            // Internal cached resources
            this._clearColor = new Color(0, 0, 0, 1);
            this._clearColorTransparentBlack = new Color(0, 0, 0, 0);
            this._reflectionProbeClearColor = new Vec3(0, 0, 0);
            this._viewport = new Viewport();
            this._configs = new PipelineConfigs();
            this._cameraConfigs = new CameraConfigs();
            // DepthOfField
            this._cocParams = new Vec4(0, 0, 0, 0);
            this._cocTexSize = new Vec4(0, 0, 0, 0);
            // Bloom
            this._bloomParams = new Vec4(0, 0, 0, 0);
            this._bloomTexSize = new Vec4(0, 0, 0, 0);
            this._bloomWidths = [];
            this._bloomHeights = [];
            this._bloomTexNames = [];
            // Color Grading
            this._colorGradingTexSize = new Vec2(0, 0);
            // FXAA
            this._fxaaParams = new Vec4(0, 0, 0, 0);
            // FSR
            this._fsrParams = new Vec4(0, 0, 0, 0);
            this._fsrTexSize = new Vec4(0, 0, 0, 0);
            // Materials
            this._copyAndTonemapMaterial = new Material();
            // Internal States
            this._initialized = false;
            // TODO(zhouzhenglong): Make default effect asset loading earlier and remove this flag
            // Forward lighting
            this.forwardLighting = new ForwardLighting();
          }
          // ----------------------------------------------------------------
          // Interface
          // ----------------------------------------------------------------
          windowResize(ppl, window, camera, nativeWidth, nativeHeight) {
            setupPipelineConfigs(ppl, this._configs);
            setupCameraConfigs(camera, this._configs, this._cameraConfigs);
            const settings = this._cameraConfigs.settings;
            const id = window.renderWindowId;
            const width = this._cameraConfigs.enableShadingScale ? Math.max(Math.floor(nativeWidth * this._cameraConfigs.shadingScale), 1) : nativeWidth;
            const height = this._cameraConfigs.enableShadingScale ? Math.max(Math.floor(nativeHeight * this._cameraConfigs.shadingScale), 1) : nativeHeight;

            // Render Window (UI)
            ppl.addRenderWindow(this._cameraConfigs.colorName, Format.RGBA8, nativeWidth, nativeHeight, window, this._cameraConfigs.depthStencilName);
            if (this._cameraConfigs.enableShadingScale) {
              ppl.addDepthStencil(`ScaledSceneDepth${id}`, Format.DEPTH_STENCIL, width, height);
              ppl.addRenderTarget(`ScaledRadiance${id}`, this._cameraConfigs.radianceFormat, width, height);
              ppl.addRenderTarget(`ScaledLdrColor${id}`, Format.RGBA8, width, height);
            } else {
              ppl.addDepthStencil(`SceneDepth${id}`, Format.DEPTH_STENCIL, width, height);
              ppl.addRenderTarget(`Radiance${id}`, this._cameraConfigs.radianceFormat, width, height);
              ppl.addRenderTarget(`LdrColor${id}`, Format.RGBA8, width, height);
            }
            if (this._cameraConfigs.enableFSR) {
              ppl.addRenderTarget(`FsrColor${id}`, Format.RGBA8, nativeWidth, nativeHeight);
            }

            // MsaaRadiance
            if (this._cameraConfigs.enableMSAA) {
              // Notice: We never store multisample results.
              // These samples are always resolved and discarded at the end of the render pass.
              // So the ResourceResidency should be MEMORYLESS.
              if (this._cameraConfigs.enableHDR) {
                ppl.addTexture(`MsaaRadiance${id}`, TextureType.TEX2D, this._cameraConfigs.radianceFormat, width, height, 1, 1, 1, settings.msaa.sampleCount, ResourceFlags.COLOR_ATTACHMENT, ResourceResidency.MEMORYLESS);
              } else {
                ppl.addTexture(`MsaaRadiance${id}`, TextureType.TEX2D, Format.RGBA8, width, height, 1, 1, 1, settings.msaa.sampleCount, ResourceFlags.COLOR_ATTACHMENT, ResourceResidency.MEMORYLESS);
              }
              ppl.addTexture(`MsaaDepthStencil${id}`, TextureType.TEX2D, Format.DEPTH_STENCIL, width, height, 1, 1, 1, settings.msaa.sampleCount, ResourceFlags.DEPTH_STENCIL_ATTACHMENT, ResourceResidency.MEMORYLESS);
            }

            // Mainlight ShadowMap
            ppl.addRenderTarget(`ShadowMap${id}`, this._configs.shadowMapFormat, this._configs.shadowMapSize.x, this._configs.shadowMapSize.y);
            ppl.addDepthStencil(`ShadowDepth${id}`, Format.DEPTH_STENCIL, this._configs.shadowMapSize.x, this._configs.shadowMapSize.y);

            // Spot-light shadow maps
            if (this._cameraConfigs.singleForwardRadiancePass) {
              const count = this._configs.mobileMaxSpotLightShadowMaps;
              for (let i = 0; i !== count; ++i) {
                ppl.addRenderTarget(`SpotShadowMap${i}`, this._configs.shadowMapFormat, this._configs.shadowMapSize.x, this._configs.shadowMapSize.y);
                ppl.addDepthStencil(`SpotShadowDepth${i}`, Format.DEPTH_STENCIL, this._configs.shadowMapSize.x, this._configs.shadowMapSize.y);
              }
            }

            // ---------------------------------------------------------
            // Post Process
            // ---------------------------------------------------------
            // DepthOfField
            if (this._cameraConfigs.enableDOF) {
              const halfWidth = Math.max(Math.floor(width / 2), 1);
              const halfHeight = Math.max(Math.floor(height / 2), 1);
              // `DofCoc${id}` texture will reuse ldrColorName
              ppl.addRenderTarget(`DofRadiance${id}`, this._cameraConfigs.radianceFormat, width, height);
              ppl.addRenderTarget(`DofPrefilter${id}`, this._cameraConfigs.radianceFormat, halfWidth, halfHeight);
              ppl.addRenderTarget(`DofBokeh${id}`, this._cameraConfigs.radianceFormat, halfWidth, halfHeight);
              ppl.addRenderTarget(`DofFilter${id}`, this._cameraConfigs.radianceFormat, halfWidth, halfHeight);
            }
            // Bloom (Kawase Dual Filter)
            if (this._cameraConfigs.enableBloom) {
              let bloomWidth = width;
              let bloomHeight = height;
              for (let i = 0; i !== settings.bloom.iterations + 1; ++i) {
                bloomWidth = Math.max(Math.floor(bloomWidth / 2), 1);
                bloomHeight = Math.max(Math.floor(bloomHeight / 2), 1);
                ppl.addRenderTarget(`BloomTex${id}_${i}`, this._cameraConfigs.radianceFormat, bloomWidth, bloomHeight);
              }
            }
            // Color Grading
            if (this._cameraConfigs.enableColorGrading && settings.colorGrading.material && settings.colorGrading.colorGradingMap) {
              settings.colorGrading.material.setProperty('colorGradingMap', settings.colorGrading.colorGradingMap);
            }
            // FXAA
            if (this._cameraConfigs.enableFXAA && this._cameraConfigs.enableShadingScale) {
              ppl.addRenderTarget(`AaColor${id}`, Format.RGBA8, width, height);
            }
          }
          setup(cameras, ppl) {
            // TODO(zhouzhenglong): Make default effect asset loading earlier and remove _initMaterials
            if (this._initMaterials(ppl)) {
              return;
            }
            // Render cameras
            // log(`==================== One Frame ====================`);
            for (const camera of cameras) {
              // Skip invalid camera
              if (!camera.scene || !camera.window) {
                continue;
              }
              // Setup camera configs
              setupCameraConfigs(camera, this._configs, this._cameraConfigs);
              // log(`Setup camera: ${camera.node!.name}, window: ${camera.window.renderWindowId}, isFull: ${this._cameraConfigs.useFullPipeline}, `
              //     + `size: ${camera.window.width}x${camera.window.height}`);

              this._pipelineEvent.emit(PipelineEventType.RENDER_CAMERA_BEGIN, camera);

              // Build pipeline
              if (this._cameraConfigs.useFullPipeline) {
                this._buildForwardPipeline(ppl, camera, camera.scene);
              } else {
                this._buildSimplePipeline(ppl, camera);
              }
              this._pipelineEvent.emit(PipelineEventType.RENDER_CAMERA_END, camera);
            }
          }

          // ----------------------------------------------------------------
          // Pipelines
          // ----------------------------------------------------------------
          _buildSimplePipeline(ppl, camera) {
            const width = Math.max(Math.floor(camera.window.width), 1);
            const height = Math.max(Math.floor(camera.window.height), 1);
            const colorName = this._cameraConfigs.colorName;
            const depthStencilName = this._cameraConfigs.depthStencilName;
            const viewport = camera.viewport; // Reduce C++/TS interop
            this._viewport.left = Math.round(viewport.x * width);
            this._viewport.top = Math.round(viewport.y * height);
            // Here we must use camera.viewport.width instead of camera.viewport.z, which
            // is undefined on native platform. The same as camera.viewport.height.
            this._viewport.width = Math.max(Math.round(viewport.width * width), 1);
            this._viewport.height = Math.max(Math.round(viewport.height * height), 1);
            const clearColor = camera.clearColor; // Reduce C++/TS interop
            this._clearColor.x = clearColor.x;
            this._clearColor.y = clearColor.y;
            this._clearColor.z = clearColor.z;
            this._clearColor.w = clearColor.w;
            const pass = ppl.addRenderPass(width, height, 'default');

            // bind output render target
            if (forwardNeedClearColor(camera)) {
              pass.addRenderTarget(colorName, LoadOp.CLEAR, StoreOp.STORE, this._clearColor);
            } else {
              pass.addRenderTarget(colorName, LoadOp.LOAD, StoreOp.STORE);
            }

            // bind depth stencil buffer
            if (camera.clearFlag & ClearFlagBit.DEPTH_STENCIL) {
              pass.addDepthStencil(depthStencilName, LoadOp.CLEAR, StoreOp.DISCARD, camera.clearDepth, camera.clearStencil, camera.clearFlag & ClearFlagBit.DEPTH_STENCIL);
            } else {
              pass.addDepthStencil(depthStencilName, LoadOp.LOAD, StoreOp.DISCARD);
            }
            pass.setViewport(this._viewport);

            // The opaque queue is used for Reflection probe preview
            pass.addQueue(QueueHint.OPAQUE).addScene(camera, SceneFlags.OPAQUE);

            // The blend queue is used for UI and Gizmos
            let flags = SceneFlags.BLEND | SceneFlags.UI;
            if (this._cameraConfigs.enableProfiler) {
              flags |= SceneFlags.PROFILER;
              pass.showStatistics = true;
            }
            pass.addQueue(QueueHint.BLEND).addScene(camera, flags);
          }
          _buildForwardPipeline(ppl, camera, scene) {
            // Init
            const settings = this._cameraConfigs.settings;
            const nativeWidth = Math.max(Math.floor(camera.window.width), 1);
            const nativeHeight = Math.max(Math.floor(camera.window.height), 1);
            const width = this._cameraConfigs.enableShadingScale ? Math.max(Math.floor(nativeWidth * this._cameraConfigs.shadingScale), 1) : nativeWidth;
            const height = this._cameraConfigs.enableShadingScale ? Math.max(Math.floor(nativeHeight * this._cameraConfigs.shadingScale), 1) : nativeHeight;
            const id = camera.window.renderWindowId;
            const colorName = this._cameraConfigs.colorName;
            const sceneDepth = this._cameraConfigs.enableShadingScale ? `ScaledSceneDepth${id}` : `SceneDepth${id}`;
            const radianceName = this._cameraConfigs.enableShadingScale ? `ScaledRadiance${id}` : `Radiance${id}`;
            const ldrColorName = this._cameraConfigs.enableShadingScale ? `ScaledLdrColor${id}` : `LdrColor${id}`;
            const mainLight = scene.mainLight;

            // Forward Lighting (Light Culling)
            this.forwardLighting.cullLights(scene, camera.frustum);

            // Main Directional light CSM Shadow Map
            if (this._cameraConfigs.enableMainLightShadowMap) {
              assert(!!mainLight);
              this._addCascadedShadowMapPass(ppl, id, mainLight, camera);
            }

            // Spot light shadow maps (Mobile or MSAA)
            if (this._cameraConfigs.singleForwardRadiancePass) {
              // Currently, only support 1 spot light with shadow map on mobile platform.
              // TODO(zhouzhenglong): Relex this limitation.
              this.forwardLighting.addSpotlightShadowPasses(ppl, camera, this._configs.mobileMaxSpotLightShadowMaps);
            }
            this._tryAddReflectionProbePasses(ppl, id, mainLight, camera.scene);

            // Forward Lighting
            let lastPass;
            if (this._cameraConfigs.enablePostProcess) {
              // Post Process
              // Radiance and DoF
              if (this._cameraConfigs.enableDOF) {
                assert(!!settings.depthOfField.material);
                const dofRadianceName = `DofRadiance${id}`;
                // Disable MSAA, depth stencil cannot be resolved cross-platformly
                this._addForwardRadiancePasses(ppl, id, camera, width, height, mainLight, dofRadianceName, sceneDepth, true, StoreOp.STORE);
                this._addDepthOfFieldPasses(ppl, settings, settings.depthOfField.material, id, camera, width, height, dofRadianceName, sceneDepth, radianceName, ldrColorName);
              } else {
                this._addForwardRadiancePasses(ppl, id, camera, width, height, mainLight, radianceName, sceneDepth);
              }
              // Bloom
              if (this._cameraConfigs.enableBloom) {
                assert(!!settings.bloom.material);
                this._addKawaseDualFilterBloomPasses(ppl, settings, settings.bloom.material, id, width, height, radianceName);
              }
              // Tone Mapping and FXAA
              if (this._cameraConfigs.enableFXAA) {
                assert(!!settings.fxaa.material);
                const copyAndTonemapPassNeeded = this._cameraConfigs.enableHDR || this._cameraConfigs.enableColorGrading;
                const ldrColorBufferName = copyAndTonemapPassNeeded ? ldrColorName : radianceName;
                // FXAA is applied after tone mapping
                if (copyAndTonemapPassNeeded) {
                  this._addCopyAndTonemapPass(ppl, settings, width, height, radianceName, ldrColorBufferName);
                }
                // Apply FXAA
                if (this._cameraConfigs.enableShadingScale) {
                  const aaColorName = `AaColor${id}`;
                  // Apply FXAA on scaled image
                  this._addFxaaPass(ppl, settings.fxaa.material, width, height, ldrColorBufferName, aaColorName);
                  // Copy FXAA result to screen
                  if (this._cameraConfigs.enableFSR && settings.fsr.material) {
                    // Apply FSR
                    lastPass = this._addFsrPass(ppl, settings, settings.fsr.material, id, width, height, aaColorName, nativeWidth, nativeHeight, colorName);
                  } else {
                    // Scale FXAA result to screen
                    lastPass = this._addCopyPass(ppl, nativeWidth, nativeHeight, aaColorName, colorName);
                  }
                } else {
                  // Image not scaled, output FXAA result to screen directly
                  lastPass = this._addFxaaPass(ppl, settings.fxaa.material, nativeWidth, nativeHeight, ldrColorBufferName, colorName);
                }
              } else {
                // No FXAA (Size might be scaled)
                lastPass = this._addTonemapResizeOrSuperResolutionPasses(ppl, settings, id, width, height, radianceName, ldrColorName, nativeWidth, nativeHeight, colorName);
              }
            } else if (this._cameraConfigs.enableHDR || this._cameraConfigs.enableShadingScale) {
              // HDR or Scaled LDR
              this._addForwardRadiancePasses(ppl, id, camera, width, height, mainLight, radianceName, sceneDepth);
              lastPass = this._addTonemapResizeOrSuperResolutionPasses(ppl, settings, id, width, height, radianceName, ldrColorName, nativeWidth, nativeHeight, colorName);
            } else {
              // LDR (Size is not scaled)
              lastPass = this._addForwardRadiancePasses(ppl, id, camera, nativeWidth, nativeHeight, mainLight, colorName, this._cameraConfigs.depthStencilName);
            }

            // UI size is not scaled, does not have AA
            this._addUIQueue(camera, lastPass);
          }

          // ----------------------------------------------------------------
          // Common Passes
          // ----------------------------------------------------------------
          _addTonemapResizeOrSuperResolutionPasses(ppl, settings, id, width, height, radianceName, ldrColorName, nativeWidth, nativeHeight, colorName) {
            let lastPass;
            if (this._cameraConfigs.enableFSR && settings.fsr.material) {
              // Apply FSR
              this._addCopyAndTonemapPass(ppl, settings, width, height, radianceName, ldrColorName);
              lastPass = this._addFsrPass(ppl, settings, settings.fsr.material, id, width, height, ldrColorName, nativeWidth, nativeHeight, colorName);
            } else {
              // Output HDR/LDR result to screen directly (Size might be scaled)
              lastPass = this._addCopyAndTonemapPass(ppl, settings, nativeWidth, nativeHeight, radianceName, colorName);
            }
            return lastPass;
          }
          _addCascadedShadowMapPass(ppl, id, light, camera) {
            // ----------------------------------------------------------------
            // Dynamic states
            // ----------------------------------------------------------------
            const width = ppl.pipelineSceneData.shadows.size.x;
            const height = ppl.pipelineSceneData.shadows.size.y;
            this._viewport.left = 0;
            this._viewport.top = 0;
            this._viewport.width = width;
            this._viewport.height = height;

            // ----------------------------------------------------------------
            // CSM Shadow Map
            // ----------------------------------------------------------------
            const pass = ppl.addRenderPass(width, height, 'default');
            pass.name = 'CascadedShadowMap';
            pass.addRenderTarget(`ShadowMap${id}`, LoadOp.CLEAR, StoreOp.STORE, new Color(1, 1, 1, 1));
            pass.addDepthStencil(`ShadowDepth${id}`, LoadOp.CLEAR, StoreOp.DISCARD);
            const csmLevel = ppl.pipelineSceneData.csmSupported ? light.csmLevel : 1;

            // Add shadow map viewports
            for (let level = 0; level !== csmLevel; ++level) {
              getCsmMainLightViewport(light, width, height, level, this._viewport, this._configs.screenSpaceSignY);
              const queue = pass.addQueue(QueueHint.NONE, 'shadow-caster');
              if (!this._configs.isWebGPU) {
                // Temporary workaround for WebGPU
                queue.setViewport(this._viewport);
              }
              queue.addScene(camera, SceneFlags.OPAQUE | SceneFlags.MASK | SceneFlags.SHADOW_CASTER).useLightFrustum(light, level);
            }
          }
          _addCopyPass(ppl, width, height, input, output) {
            const pass = ppl.addRenderPass(width, height, 'cc-tone-mapping');
            pass.addRenderTarget(output, LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
            pass.addTexture(input, 'inputTexture');
            pass.setVec4('g_platform', this._configs.platform);
            pass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(this._copyAndTonemapMaterial, 1);
            return pass;
          }
          _addCopyAndTonemapPass(ppl, settings, width, height, radianceName, colorName) {
            let pass;
            if (this._cameraConfigs.enableColorGrading && settings.colorGrading.material && settings.colorGrading.colorGradingMap) {
              const lutTex = settings.colorGrading.colorGradingMap;
              this._colorGradingTexSize.x = lutTex.width;
              this._colorGradingTexSize.y = lutTex.height;
              const isSquareMap = lutTex.width === lutTex.height;
              if (isSquareMap) {
                pass = ppl.addRenderPass(width, height, 'cc-color-grading-8x8');
              } else {
                pass = ppl.addRenderPass(width, height, 'cc-color-grading-nx1');
              }
              pass.addRenderTarget(colorName, LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
              pass.addTexture(radianceName, 'sceneColorMap');
              pass.setVec4('g_platform', this._configs.platform);
              pass.setVec2('lutTextureSize', this._colorGradingTexSize);
              pass.setFloat('contribute', settings.colorGrading.contribute);
              pass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(settings.colorGrading.material, isSquareMap ? 1 : 0);
            } else {
              pass = ppl.addRenderPass(width, height, 'cc-tone-mapping');
              pass.addRenderTarget(colorName, LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
              pass.addTexture(radianceName, 'inputTexture');
              pass.setVec4('g_platform', this._configs.platform);
              if (settings.toneMapping.material) {
                pass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(settings.toneMapping.material, 0);
              } else {
                pass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(this._copyAndTonemapMaterial, 0);
              }
            }
            return pass;
          }
          _buildForwardMainLightPass(pass, id, camera, colorName, depthStencilName, depthStencilStoreOp, mainLight, scene) {
            if (scene === void 0) {
              scene = null;
            }
            // set viewport
            pass.setViewport(this._viewport);
            const colorStoreOp = this._cameraConfigs.enableMSAA ? StoreOp.DISCARD : StoreOp.STORE;

            // bind output render target
            if (forwardNeedClearColor(camera)) {
              pass.addRenderTarget(colorName, LoadOp.CLEAR, colorStoreOp, this._clearColor);
            } else {
              pass.addRenderTarget(colorName, LoadOp.LOAD, colorStoreOp);
            }

            // bind depth stencil buffer
            {
              if (colorName === this._cameraConfigs.colorName && depthStencilName !== this._cameraConfigs.depthStencilName) {
                warn('Default framebuffer cannot use custom depth stencil buffer');
              }
            }
            if (camera.clearFlag & ClearFlagBit.DEPTH_STENCIL) {
              pass.addDepthStencil(depthStencilName, LoadOp.CLEAR, depthStencilStoreOp, camera.clearDepth, camera.clearStencil, camera.clearFlag & ClearFlagBit.DEPTH_STENCIL);
            } else {
              pass.addDepthStencil(depthStencilName, LoadOp.LOAD, depthStencilStoreOp);
            }

            // Set shadow map if enabled
            if (this._cameraConfigs.enableMainLightShadowMap) {
              pass.addTexture(`ShadowMap${id}`, 'cc_shadowMap');
            }

            // TODO(zhouzhenglong): Separate OPAQUE and MASK queue

            // add opaque and mask queue
            pass.addQueue(QueueHint.NONE) // Currently we put OPAQUE and MASK into one queue, so QueueHint is NONE
            .addScene(camera, SceneFlags.OPAQUE | SceneFlags.MASK, mainLight || undefined, scene ? scene : undefined);
          }
          _addDepthOfFieldPasses(ppl, settings, dofMaterial, id, camera, width, height, dofRadianceName, depthStencil, radianceName, ldrColorName) {
            // https://catlikecoding.com/unity/tutorials/advanced-rendering/depth-of-field/

            this._cocParams.x = settings.depthOfField.focusDistance;
            this._cocParams.y = settings.depthOfField.focusRange;
            this._cocParams.z = settings.depthOfField.bokehRadius;
            this._cocParams.w = 0.0;
            this._cocTexSize.x = 1.0 / width;
            this._cocTexSize.y = 1.0 / height;
            this._cocTexSize.z = width;
            this._cocTexSize.w = height;
            const halfWidth = Math.max(Math.floor(width / 2), 1);
            const halfHeight = Math.max(Math.floor(height / 2), 1);
            const cocName = ldrColorName;
            const prefilterName = `DofPrefilter${id}`;
            const bokehName = `DofBokeh${id}`;
            const filterName = `DofFilter${id}`;

            // CoC
            const cocPass = ppl.addRenderPass(width, height, 'cc-dof-coc');
            cocPass.addRenderTarget(cocName, LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
            cocPass.addTexture(depthStencil, 'DepthTex');
            cocPass.setVec4('g_platform', this._configs.platform);
            cocPass.setMat4('proj', camera.matProj);
            cocPass.setVec4('cocParams', this._cocParams);
            cocPass.addQueue(QueueHint.OPAQUE).addCameraQuad(camera, dofMaterial, 0); // addCameraQuad will set camera related UBOs

            // Downsample and Prefilter
            const prefilterPass = ppl.addRenderPass(halfWidth, halfHeight, 'cc-dof-prefilter');
            prefilterPass.addRenderTarget(prefilterName, LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
            prefilterPass.addTexture(dofRadianceName, 'colorTex');
            prefilterPass.addTexture(cocName, 'cocTex');
            prefilterPass.setVec4('g_platform', this._configs.platform);
            prefilterPass.setVec4('mainTexTexelSize', this._cocTexSize);
            prefilterPass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(dofMaterial, 1);

            // Bokeh blur
            const bokehPass = ppl.addRenderPass(halfWidth, halfHeight, 'cc-dof-bokeh');
            bokehPass.addRenderTarget(bokehName, LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
            bokehPass.addTexture(prefilterName, 'prefilterTex');
            bokehPass.setVec4('g_platform', this._configs.platform);
            bokehPass.setVec4('mainTexTexelSize', this._cocTexSize);
            bokehPass.setVec4('cocParams', this._cocParams);
            bokehPass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(dofMaterial, 2);

            // Filtering
            const filterPass = ppl.addRenderPass(halfWidth, halfHeight, 'cc-dof-filter');
            filterPass.addRenderTarget(filterName, LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
            filterPass.addTexture(bokehName, 'bokehTex');
            filterPass.setVec4('g_platform', this._configs.platform);
            filterPass.setVec4('mainTexTexelSize', this._cocTexSize);
            filterPass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(dofMaterial, 3);

            // Combine
            const combinePass = ppl.addRenderPass(width, height, 'cc-dof-combine');
            combinePass.addRenderTarget(radianceName, LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
            combinePass.addTexture(dofRadianceName, 'colorTex');
            combinePass.addTexture(cocName, 'cocTex');
            combinePass.addTexture(filterName, 'filterTex');
            combinePass.setVec4('g_platform', this._configs.platform);
            combinePass.setVec4('cocParams', this._cocParams);
            combinePass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(dofMaterial, 4);
          }
          _addKawaseDualFilterBloomPasses(ppl, settings, bloomMaterial, id, width, height, radianceName) {
            // Based on Kawase Dual Filter Blur. Saves bandwidth on mobile devices.
            // eslint-disable-next-line max-len
            // https://community.arm.com/cfs-file/__key/communityserver-blogs-components-weblogfiles/00-00-00-20-66/siggraph2015_2D00_mmg_2D00_marius_2D00_slides.pdf

            // Size: [prefilter(1/2), downsample(1/4), downsample(1/8), downsample(1/16), ...]
            const iterations = settings.bloom.iterations;
            const sizeCount = iterations + 1;
            this._bloomWidths.length = sizeCount;
            this._bloomHeights.length = sizeCount;
            this._bloomWidths[0] = Math.max(Math.floor(width / 2), 1);
            this._bloomHeights[0] = Math.max(Math.floor(height / 2), 1);
            for (let i = 1; i !== sizeCount; ++i) {
              this._bloomWidths[i] = Math.max(Math.floor(this._bloomWidths[i - 1] / 2), 1);
              this._bloomHeights[i] = Math.max(Math.floor(this._bloomHeights[i - 1] / 2), 1);
            }

            // Bloom texture names
            this._bloomTexNames.length = sizeCount;
            for (let i = 0; i !== sizeCount; ++i) {
              this._bloomTexNames[i] = `BloomTex${id}_${i}`;
            }

            // Setup bloom parameters
            this._bloomParams.x = this._configs.useFloatOutput ? 1 : 0;
            this._bloomParams.x = 0; // unused
            this._bloomParams.z = settings.bloom.threshold;
            this._bloomParams.w = settings.bloom.enableAlphaMask ? 1 : 0;

            // Prefilter pass
            const prefilterPass = ppl.addRenderPass(this._bloomWidths[0], this._bloomHeights[0], 'cc-bloom-prefilter');
            prefilterPass.addRenderTarget(this._bloomTexNames[0], LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
            prefilterPass.addTexture(radianceName, 'inputTexture');
            prefilterPass.setVec4('g_platform', this._configs.platform);
            prefilterPass.setVec4('bloomParams', this._bloomParams);
            prefilterPass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(bloomMaterial, 0);

            // Downsample passes
            for (let i = 1; i !== sizeCount; ++i) {
              const downPass = ppl.addRenderPass(this._bloomWidths[i], this._bloomHeights[i], 'cc-bloom-downsample');
              downPass.addRenderTarget(this._bloomTexNames[i], LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
              downPass.addTexture(this._bloomTexNames[i - 1], 'bloomTexture');
              this._bloomTexSize.x = this._bloomWidths[i - 1];
              this._bloomTexSize.y = this._bloomHeights[i - 1];
              downPass.setVec4('g_platform', this._configs.platform);
              downPass.setVec4('bloomTexSize', this._bloomTexSize);
              downPass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(bloomMaterial, 1);
            }

            // Upsample passes
            for (let i = iterations; i-- > 0;) {
              const upPass = ppl.addRenderPass(this._bloomWidths[i], this._bloomHeights[i], 'cc-bloom-upsample');
              upPass.addRenderTarget(this._bloomTexNames[i], LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
              upPass.addTexture(this._bloomTexNames[i + 1], 'bloomTexture');
              this._bloomTexSize.x = this._bloomWidths[i + 1];
              this._bloomTexSize.y = this._bloomHeights[i + 1];
              upPass.setVec4('g_platform', this._configs.platform);
              upPass.setVec4('bloomTexSize', this._bloomTexSize);
              upPass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(bloomMaterial, 2);
            }

            // Combine pass
            const combinePass = ppl.addRenderPass(width, height, 'cc-bloom-combine');
            combinePass.addRenderTarget(radianceName, LoadOp.LOAD, StoreOp.STORE);
            combinePass.addTexture(this._bloomTexNames[0], 'bloomTexture');
            combinePass.setVec4('g_platform', this._configs.platform);
            combinePass.setVec4('bloomParams', this._bloomParams);
            combinePass.addQueue(QueueHint.BLEND).addFullscreenQuad(bloomMaterial, 3);
          }
          _addFsrPass(ppl, settings, fsrMaterial, id, width, height, ldrColorName, nativeWidth, nativeHeight, colorName) {
            this._fsrTexSize.x = width;
            this._fsrTexSize.y = height;
            this._fsrTexSize.z = nativeWidth;
            this._fsrTexSize.w = nativeHeight;
            this._fsrParams.x = clamp(1.0 - settings.fsr.sharpness, 0.02, 0.98);
            const fsrColorName = `FsrColor${id}`;
            const easuPass = ppl.addRenderPass(nativeWidth, nativeHeight, 'cc-fsr-easu');
            easuPass.addRenderTarget(fsrColorName, LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
            easuPass.addTexture(ldrColorName, 'outputResultMap');
            easuPass.setVec4('g_platform', this._configs.platform);
            easuPass.setVec4('fsrTexSize', this._fsrTexSize);
            easuPass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(fsrMaterial, 0);
            const rcasPass = ppl.addRenderPass(nativeWidth, nativeHeight, 'cc-fsr-rcas');
            rcasPass.addRenderTarget(colorName, LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
            rcasPass.addTexture(fsrColorName, 'outputResultMap');
            rcasPass.setVec4('g_platform', this._configs.platform);
            rcasPass.setVec4('fsrTexSize', this._fsrTexSize);
            rcasPass.setVec4('fsrParams', this._fsrParams);
            rcasPass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(fsrMaterial, 1);
            return rcasPass;
          }
          _addFxaaPass(ppl, fxaaMaterial, width, height, ldrColorName, colorName) {
            this._fxaaParams.x = width;
            this._fxaaParams.y = height;
            this._fxaaParams.z = 1 / width;
            this._fxaaParams.w = 1 / height;
            const pass = ppl.addRenderPass(width, height, 'cc-fxaa');
            pass.addRenderTarget(colorName, LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
            pass.addTexture(ldrColorName, 'sceneColorMap');
            pass.setVec4('g_platform', this._configs.platform);
            pass.setVec4('texSize', this._fxaaParams);
            pass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(fxaaMaterial, 0);
            return pass;
          }
          _addUIQueue(camera, pass) {
            let flags = SceneFlags.UI;
            if (this._cameraConfigs.enableProfiler) {
              flags |= SceneFlags.PROFILER;
              pass.showStatistics = true;
            }
            pass.addQueue(QueueHint.BLEND, 'default', 'default').addScene(camera, flags);
          }

          // ----------------------------------------------------------------
          // Forward
          // ----------------------------------------------------------------
          _addForwardRadiancePasses(ppl, id, camera, width, height, mainLight, colorName, depthStencilName, disableMSAA, depthStencilStoreOp) {
            if (disableMSAA === void 0) {
              disableMSAA = false;
            }
            if (depthStencilStoreOp === void 0) {
              depthStencilStoreOp = StoreOp.DISCARD;
            }
            // ----------------------------------------------------------------
            // Dynamic states
            // ----------------------------------------------------------------
            // Prepare camera clear color
            const clearColor = camera.clearColor; // Reduce C++/TS interop
            this._clearColor.x = clearColor.x;
            this._clearColor.y = clearColor.y;
            this._clearColor.z = clearColor.z;
            this._clearColor.w = clearColor.w;

            // Prepare camera viewport
            const viewport = camera.viewport; // Reduce C++/TS interop
            this._viewport.left = Math.round(viewport.x * width);
            this._viewport.top = Math.round(viewport.y * height);
            // Here we must use camera.viewport.width instead of camera.viewport.z, which
            // is undefined on native platform. The same as camera.viewport.height.
            this._viewport.width = Math.max(Math.round(viewport.width * width), 1);
            this._viewport.height = Math.max(Math.round(viewport.height * height), 1);

            // MSAA
            const enableMSAA = !disableMSAA && this._cameraConfigs.enableMSAA;
            assert(!enableMSAA || this._cameraConfigs.singleForwardRadiancePass);

            // ----------------------------------------------------------------
            // Forward Lighting (Main Directional Light)
            // ----------------------------------------------------------------
            const pass = this._cameraConfigs.singleForwardRadiancePass ? this._addForwardSingleRadiancePass(ppl, id, camera, enableMSAA, width, height, mainLight, colorName, depthStencilName, depthStencilStoreOp) : this._addForwardMultipleRadiancePasses(ppl, id, camera, width, height, mainLight, colorName, depthStencilName, depthStencilStoreOp);

            // Planar Shadow
            if (this._cameraConfigs.enableMainLightPlanarShadowMap) {
              this.addPlanarShadowQueue(camera, mainLight, pass);
            }

            // ----------------------------------------------------------------
            // Forward Lighting (Blend)
            // ----------------------------------------------------------------
            // Add transparent queue

            const sceneFlags = SceneFlags.BLEND | (camera.geometryRenderer ? SceneFlags.GEOMETRY : SceneFlags.NONE);
            pass.addQueue(QueueHint.BLEND).addScene(camera, sceneFlags, mainLight || undefined);
            return pass;
          }
          _addForwardSingleRadiancePass(ppl, id, camera, enableMSAA, width, height, mainLight, colorName, depthStencilName, depthStencilStoreOp) {
            assert(this._cameraConfigs.singleForwardRadiancePass);
            // ----------------------------------------------------------------
            // Forward Lighting (Main Directional Light)
            // ----------------------------------------------------------------
            let pass;
            if (enableMSAA) {
              const msaaRadianceName = `MsaaRadiance${id}`;
              const msaaDepthStencilName = `MsaaDepthStencil${id}`;
              const sampleCount = this._cameraConfigs.settings.msaa.sampleCount;
              const msPass = ppl.addMultisampleRenderPass(width, height, sampleCount, 0, 'default');
              msPass.name = 'MsaaForwardPass';

              // MSAA always discards depth stencil
              this._buildForwardMainLightPass(msPass, id, camera, msaaRadianceName, msaaDepthStencilName, StoreOp.DISCARD, mainLight);
              msPass.resolveRenderTarget(msaaRadianceName, colorName);
              pass = msPass;
            } else {
              pass = ppl.addRenderPass(width, height, 'default');
              pass.name = 'ForwardPass';
              this._buildForwardMainLightPass(pass, id, camera, colorName, depthStencilName, depthStencilStoreOp, mainLight);
            }
            assert(pass !== undefined);

            // Forward Lighting (Additive Lights)
            this.forwardLighting.addLightQueues(pass, camera, this._configs.mobileMaxSpotLightShadowMaps);
            return pass;
          }
          addPlanarShadowQueue(camera, mainLight, pass) {
            pass.addQueue(QueueHint.BLEND, 'planar-shadow').addScene(camera, SceneFlags.SHADOW_CASTER | SceneFlags.PLANAR_SHADOW | SceneFlags.BLEND, mainLight || undefined);
          }
          _addForwardMultipleRadiancePasses(ppl, id, camera, width, height, mainLight, colorName, depthStencilName, depthStencilStoreOp) {
            assert(!this._cameraConfigs.singleForwardRadiancePass);

            // Forward Lighting (Main Directional Light)
            let pass = ppl.addRenderPass(width, height, 'default');
            pass.name = 'ForwardPass';
            const firstStoreOp = this.forwardLighting.isMultipleLightPassesNeeded() ? StoreOp.STORE : depthStencilStoreOp;
            this._buildForwardMainLightPass(pass, id, camera, colorName, depthStencilName, firstStoreOp, mainLight);

            // Forward Lighting (Additive Lights)
            pass = this.forwardLighting.addLightPasses(colorName, depthStencilName, depthStencilStoreOp, id, width, height, camera, this._viewport, ppl, pass);
            return pass;
          }
          _buildReflectionProbePass(pass, id, camera, colorName, depthStencilName, mainLight, scene) {
            if (scene === void 0) {
              scene = null;
            }
            // set viewport
            const colorStoreOp = this._cameraConfigs.enableMSAA ? StoreOp.DISCARD : StoreOp.STORE;

            // bind output render target
            if (forwardNeedClearColor(camera)) {
              this._reflectionProbeClearColor.x = camera.clearColor.x;
              this._reflectionProbeClearColor.y = camera.clearColor.y;
              this._reflectionProbeClearColor.z = camera.clearColor.z;
              const clearColor = rendering.packRGBE(this._reflectionProbeClearColor);
              this._clearColor.x = clearColor.x;
              this._clearColor.y = clearColor.y;
              this._clearColor.z = clearColor.z;
              this._clearColor.w = clearColor.w;
              pass.addRenderTarget(colorName, LoadOp.CLEAR, colorStoreOp, this._clearColor);
            } else {
              pass.addRenderTarget(colorName, LoadOp.LOAD, colorStoreOp);
            }

            // bind depth stencil buffer
            if (camera.clearFlag & ClearFlagBit.DEPTH_STENCIL) {
              pass.addDepthStencil(depthStencilName, LoadOp.CLEAR, StoreOp.DISCARD, camera.clearDepth, camera.clearStencil, camera.clearFlag & ClearFlagBit.DEPTH_STENCIL);
            } else {
              pass.addDepthStencil(depthStencilName, LoadOp.LOAD, StoreOp.DISCARD);
            }

            // Set shadow map if enabled
            if (this._cameraConfigs.enableMainLightShadowMap) {
              pass.addTexture(`ShadowMap${id}`, 'cc_shadowMap');
            }

            // TODO(zhouzhenglong): Separate OPAQUE and MASK queue

            // add opaque and mask queue
            pass.addQueue(QueueHint.NONE, 'reflect-map') // Currently we put OPAQUE and MASK into one queue, so QueueHint is NONE
            .addScene(camera, SceneFlags.OPAQUE | SceneFlags.MASK | SceneFlags.REFLECTION_PROBE, mainLight || undefined, scene ? scene : undefined);
          }
          _tryAddReflectionProbePasses(ppl, id, mainLight, scene) {
            const reflectionProbeManager = cclegacy.internal.reflectionProbeManager;
            if (!reflectionProbeManager) {
              return;
            }
            const probes = reflectionProbeManager.getProbes();
            const maxProbeCount = 4;
            let probeID = 0;
            for (const probe of probes) {
              if (!probe.needRender) {
                continue;
              }
              const area = probe.renderArea();
              const width = Math.max(Math.floor(area.x), 1);
              const height = Math.max(Math.floor(area.y), 1);
              if (probe.probeType === renderer.scene.ProbeType.PLANAR) {
                if (!this._cameraConfigs.enablePlanarReflectionProbe) {
                  continue;
                }
                const window = probe.realtimePlanarTexture.window;
                const colorName = `PlanarProbeRT${probeID}`;
                const depthStencilName = `PlanarProbeDS${probeID}`;
                // ProbeResource
                ppl.addRenderWindow(colorName, this._cameraConfigs.radianceFormat, width, height, window);
                ppl.addDepthStencil(depthStencilName, gfx.Format.DEPTH_STENCIL, width, height, ResourceResidency.MEMORYLESS);

                // Rendering
                const probePass = ppl.addRenderPass(width, height, 'default');
                probePass.name = `PlanarReflectionProbe${probeID}`;
                this._buildReflectionProbePass(probePass, id, probe.camera, colorName, depthStencilName, mainLight, scene);
              }
              ++probeID;
              if (probeID === maxProbeCount) {
                break;
              }
            }
          }
          _initMaterials(ppl) {
            if (this._initialized) {
              return 0;
            }
            setupPipelineConfigs(ppl, this._configs);

            // When add new effect asset, please add its uuid to the dependentAssets in cc.config.json.
            this._copyAndTonemapMaterial._uuid = `builtin-pipeline-tone-mapping-material`;
            this._copyAndTonemapMaterial.initialize({
              effectName: 'pipeline/post-process/tone-mapping'
            });
            if (this._copyAndTonemapMaterial.effectAsset) {
              this._initialized = true;
            }
            return this._initialized ? 0 : 1;
          }
        }
        rendering.setCustomPipeline('Builtin', new BuiltinPipelineBuilder());
      } // if (rendering)
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/internal", ['./builtin-pipeline-settings.ts', './builtin-pipeline-types.ts', './builtin-pipeline.ts'], function () {
  return {
    setters: [null, null, null],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2ZpbGU6L0M6L1Byb2dyYW1EYXRhL2NvY29zL2VkaXRvcnMvQ3JlYXRvci8zLjguNC9yZXNvdXJjZXMvcmVzb3VyY2VzLzNkL2VuZ2luZS9lZGl0b3IvYXNzZXRzL2RlZmF1bHRfcmVuZGVycGlwZWxpbmUvZmlsZTovQzovUHJvZ3JhbURhdGEvY29jb3MvZWRpdG9ycy9DcmVhdG9yLzMuOC40L3Jlc291cmNlcy9yZXNvdXJjZXMvM2QvZW5naW5lL2VkaXRvci9hc3NldHMvZGVmYXVsdF9yZW5kZXJwaXBlbGluZS9idWlsdGluLXBpcGVsaW5lLXNldHRpbmdzLnRzIiwiLi4vZmlsZTovQzovUHJvZ3JhbURhdGEvY29jb3MvZWRpdG9ycy9DcmVhdG9yLzMuOC40L3Jlc291cmNlcy9yZXNvdXJjZXMvM2QvZW5naW5lL2VkaXRvci9hc3NldHMvZGVmYXVsdF9yZW5kZXJwaXBlbGluZS9maWxlOi9DOi9Qcm9ncmFtRGF0YS9jb2Nvcy9lZGl0b3JzL0NyZWF0b3IvMy44LjQvcmVzb3VyY2VzL3Jlc291cmNlcy8zZC9lbmdpbmUvZWRpdG9yL2Fzc2V0cy9kZWZhdWx0X3JlbmRlcnBpcGVsaW5lL2J1aWx0aW4tcGlwZWxpbmUtdHlwZXMudHMiLCIuLi9maWxlOi9DOi9Qcm9ncmFtRGF0YS9jb2Nvcy9lZGl0b3JzL0NyZWF0b3IvMy44LjQvcmVzb3VyY2VzL3Jlc291cmNlcy8zZC9lbmdpbmUvZWRpdG9yL2Fzc2V0cy9kZWZhdWx0X3JlbmRlcnBpcGVsaW5lL2ZpbGU6L0M6L1Byb2dyYW1EYXRhL2NvY29zL2VkaXRvcnMvQ3JlYXRvci8zLjguNC9yZXNvdXJjZXMvcmVzb3VyY2VzLzNkL2VuZ2luZS9lZGl0b3IvYXNzZXRzL2RlZmF1bHRfcmVuZGVycGlwZWxpbmUvYnVpbHRpbi1waXBlbGluZS50cyJdLCJuYW1lcyI6WyJjY2NsYXNzIiwiZGlzYWxsb3dNdWx0aXBsZSIsImV4ZWN1dGVJbkVkaXRNb2RlIiwibWVudSIsInByb3BlcnR5IiwicmVxdWlyZUNvbXBvbmVudCIsInR5cGUiLCJfZGVjb3JhdG9yIiwiQnVpbHRpblBpcGVsaW5lU2V0dGluZ3MiLCJfZGVjIiwiX2RlYzIiLCJfZGVjMyIsIkNhbWVyYSIsIl9kZWM0IiwiQ0NCb29sZWFuIiwiX2RlYzUiLCJkaXNwbGF5TmFtZSIsIl9kZWM2IiwiZ3JvdXAiLCJpZCIsIm5hbWUiLCJfZGVjNyIsInN0eWxlIiwiQ0NJbnRlZ2VyIiwicmFuZ2UiLCJfZGVjOCIsIl9kZWM5IiwidG9vbHRpcCIsIkNDRmxvYXQiLCJzbGlkZSIsIl9kZWMxMCIsInZpc2libGUiLCJfZGVjMTEiLCJNYXRlcmlhbCIsIl9kZWMxMiIsIm1pbiIsIl9kZWMxMyIsIl9kZWMxNCIsIl9kZWMxNSIsIl9kZWMxNiIsIl9kZWMxNyIsIl9kZWMxOCIsIl9kZWMxOSIsIl9kZWMyMCIsIl9kZWMyMSIsIl9kZWMyMiIsIl9kZWMyMyIsIl9kZWMyNCIsIlRleHR1cmUyRCIsIl9kZWMyNSIsIl9kZWMyNiIsIl9kZWMyNyIsIl9kZWMyOCIsIl9kZWMyOSIsIl9kZWMzMCIsIl9jbGFzcyIsIl9jbGFzczIiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsImFyZ3VtZW50cyIsIl9pbml0aWFsaXplckRlZmluZVByb3BlcnR5IiwiX2Rlc2NyaXB0b3IiLCJfZGVzY3JpcHRvcjIiLCJvbkVuYWJsZSIsImZpbGxSZXF1aXJlZFBpcGVsaW5lU2V0dGluZ3MiLCJfc2V0dGluZ3MiLCJjYW1lcmFDb21wb25lbnQiLCJnZXRDb21wb25lbnQiLCJjYW1lcmEiLCJwaXBlbGluZVNldHRpbmdzIiwib25EaXNhYmxlIiwiZWRpdG9yUHJldmlldyIsIl9lZGl0b3JQcmV2aWV3IiwidiIsIl90cnlFbmFibGVFZGl0b3JQcmV2aWV3IiwicmVuZGVyaW5nIiwidW5kZWZpbmVkIiwic2V0RWRpdG9yUGlwZWxpbmVTZXR0aW5ncyIsIl9kaXNhYmxlRWRpdG9yUHJldmlldyIsImN1cnJlbnQiLCJnZXRFZGl0b3JQaXBlbGluZVNldHRpbmdzIiwiTXNhYUVuYWJsZSIsIm1zYWEiLCJlbmFibGVkIiwidmFsdWUiLCJtc2FhU2FtcGxlQ291bnQiLCJNYXRoIiwiY2VpbCIsImxvZzIiLCJtYXgiLCJzYW1wbGVDb3VudCIsInNoYWRpbmdTY2FsZUVuYWJsZSIsImVuYWJsZVNoYWRpbmdTY2FsZSIsInNoYWRpbmdTY2FsZSIsImRvZkVuYWJsZSIsImRlcHRoT2ZGaWVsZCIsImRvZk1hdGVyaWFsIiwibWF0ZXJpYWwiLCJkb2ZGb2N1c0Rpc3RhbmNlIiwiZm9jdXNEaXN0YW5jZSIsImRvZkZvY3VzUmFuZ2UiLCJmb2N1c1JhbmdlIiwiZG9mQm9rZWhSYWRpdXMiLCJib2tlaFJhZGl1cyIsImJsb29tRW5hYmxlIiwiYmxvb20iLCJibG9vbU1hdGVyaWFsIiwiYmxvb21FbmFibGVBbHBoYU1hc2siLCJlbmFibGVBbHBoYU1hc2siLCJibG9vbUl0ZXJhdGlvbnMiLCJpdGVyYXRpb25zIiwiYmxvb21UaHJlc2hvbGQiLCJ0aHJlc2hvbGQiLCJibG9vbUludGVuc2l0eSIsImludGVuc2l0eSIsImNvbG9yR3JhZGluZ0VuYWJsZSIsImNvbG9yR3JhZGluZyIsImNvbG9yR3JhZGluZ01hdGVyaWFsIiwiY29sb3JHcmFkaW5nQ29udHJpYnV0ZSIsImNvbnRyaWJ1dGUiLCJjb2xvckdyYWRpbmdNYXAiLCJ2YWwiLCJmeGFhRW5hYmxlIiwiZnhhYSIsImZ4YWFNYXRlcmlhbCIsImZzckVuYWJsZSIsImZzciIsImZzck1hdGVyaWFsIiwiZnNyU2hhcnBuZXNzIiwic2hhcnBuZXNzIiwidG9uZU1hcHBpbmdNYXRlcmlhbCIsInRvbmVNYXBwaW5nIiwiX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvciIsInByb3RvdHlwZSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJ3cml0YWJsZSIsImluaXRpYWxpemVyIiwibWFrZVBpcGVsaW5lU2V0dGluZ3MiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfUkYiLCJwb3AiLCJTYW1wbGVDb3VudCIsImdmeCIsIm1ha2VNU0FBIiwiWDQiLCJmaWxsUmVxdWlyZWRNU0FBIiwibWFrZUhCQU8iLCJyYWRpdXNTY2FsZSIsImFuZ2xlQmlhc0RlZ3JlZSIsImJsdXJTaGFycG5lc3MiLCJhb1NhdHVyYXRpb24iLCJuZWVkQmx1ciIsImZpbGxSZXF1aXJlZEhCQU8iLCJtYWtlRGVwdGhPZkZpZWxkIiwiZmlsbFJlcXVpcmVkRGVwdGhPZkZpZWxkIiwibWFrZUJsb29tIiwiZmlsbFJlcXVpcmVkQmxvb20iLCJtYWtlQ29sb3JHcmFkaW5nIiwiZmlsbFJlcXVpcmVkQ29sb3JHcmFkaW5nIiwibWFrZUZTUiIsImZpbGxSZXF1aXJlZEZTUiIsIm1ha2VGWEFBIiwiZmlsbFJlcXVpcmVkRlhBQSIsIm1ha2VUb25lTWFwcGluZyIsImZpbGxSZXF1aXJlZFRvbmVNYXBwaW5nIiwiQUFCQiIsIlNwaGVyZSIsImludGVyc2VjdCIsImdlb21ldHJ5IiwiQ2xlYXJGbGFnQml0IiwiQ29sb3IiLCJGb3JtYXQiLCJGb3JtYXRGZWF0dXJlQml0IiwiTG9hZE9wIiwiU3RvcmVPcCIsIlRleHR1cmVUeXBlIiwiVmlld3BvcnQiLCJzY2VuZSIsInJlbmRlcmVyIiwiQ2FtZXJhVXNhZ2UiLCJDU01MZXZlbCIsIkxpZ2h0VHlwZSIsImZvcndhcmROZWVkQ2xlYXJDb2xvciIsImNsZWFyRmxhZyIsIkNPTE9SIiwiU1RFTkNJTCIsImdldENzbU1haW5MaWdodFZpZXdwb3J0IiwibGlnaHQiLCJ3IiwiaCIsImxldmVsIiwidnAiLCJzY3JlZW5TcGFjZVNpZ25ZIiwic2hhZG93Rml4ZWRBcmVhIiwiY3NtTGV2ZWwiLCJMRVZFTF8xIiwibGVmdCIsInRvcCIsIndpZHRoIiwidHJ1bmMiLCJoZWlnaHQiLCJmbG9vciIsIlBpcGVsaW5lQ29uZmlncyIsImlzV2ViIiwiaXNXZWJHTDEiLCJpc1dlYkdQVSIsImlzTW9iaWxlIiwiaXNIRFIiLCJ1c2VGbG9hdE91dHB1dCIsInRvbmVNYXBwaW5nVHlwZSIsInNoYWRvd0VuYWJsZWQiLCJzaGFkb3dNYXBGb3JtYXQiLCJSMzJGIiwic2hhZG93TWFwU2l6ZSIsIlZlYzIiLCJ1c2VQbGFuYXJTaGFkb3ciLCJzdXBwb3J0RGVwdGhTYW1wbGUiLCJtb2JpbGVNYXhTcG90TGlnaHRTaGFkb3dNYXBzIiwicGxhdGZvcm0iLCJWZWM0Iiwic2V0dXBQaXBlbGluZUNvbmZpZ3MiLCJwcGwiLCJjb25maWdzIiwic2FtcGxlRmVhdHVyZSIsIlNBTVBMRURfVEVYVFVSRSIsIkxJTkVBUl9GSUxURVIiLCJkZXZpY2UiLCJzeXMiLCJpc05hdGl2ZSIsImdmeEFQSSIsIkFQSSIsIldFQkdMIiwiV0VCR1BVIiwicGlwZWxpbmVTY2VuZURhdGEiLCJnZXRNYWNyb0Jvb2wiLCJwb3N0U2V0dGluZ3MiLCJzaGFkb3dJbmZvIiwic2hhZG93cyIsInBpcGVsaW5lIiwic3VwcG9ydHNSMzJGbG9hdFRleHR1cmUiLCJSR0JBOCIsInNldCIsInNpemUiLCJTaGFkb3dUeXBlIiwiUGxhbmFyIiwiY2FwYWJpbGl0aWVzIiwiZ2V0Rm9ybWF0RmVhdHVyZXMiLCJERVBUSF9TVEVOQ0lMIiwieCIsImNsaXBTcGFjZVNpZ25ZIiwiZGVmYXVsdFNldHRpbmdzIiwiQ2FtZXJhQ29uZmlncyIsImNvbG9yTmFtZSIsImRlcHRoU3RlbmNpbE5hbWUiLCJlbmFibGVNYWluTGlnaHRTaGFkb3dNYXAiLCJlbmFibGVNYWluTGlnaHRQbGFuYXJTaGFkb3dNYXAiLCJlbmFibGVQb3N0UHJvY2VzcyIsImVuYWJsZVByb2ZpbGVyIiwiZW5hYmxlTVNBQSIsImVuYWJsZURPRiIsImVuYWJsZUJsb29tIiwiZW5hYmxlQ29sb3JHcmFkaW5nIiwiZW5hYmxlRlhBQSIsImVuYWJsZUZTUiIsImVuYWJsZUhEUiIsImVuYWJsZVBsYW5hclJlZmxlY3Rpb25Qcm9iZSIsInVzZUZ1bGxQaXBlbGluZSIsInNpbmdsZUZvcndhcmRSYWRpYW5jZVBhc3MiLCJyYWRpYW5jZUZvcm1hdCIsInNldHRpbmdzIiwic2V0dXBQb3N0UHJvY2Vzc0NvbmZpZ3MiLCJwaXBlbGluZUNvbmZpZ3MiLCJjYW1lcmFDb25maWdzIiwic2V0dXBDYW1lcmFDb25maWdzIiwid2luZG93IiwiaXNNYWluR2FtZVdpbmRvdyIsImNhbWVyYVVzYWdlIiwiR0FNRSIsInN3YXBjaGFpbiIsImlzRWRpdG9yVmlldyIsIlNDRU5FX1ZJRVciLCJQUkVWSUVXIiwidmlzaWJpbGl0eSIsIkxheWVycyIsIkVudW0iLCJERUZBVUxUIiwibWFpbkxpZ2h0IiwiZWRpdG9yU2V0dGluZ3MiLCJSR0JBMTZGIiwiUXVldWVIaW50IiwiU2NlbmVGbGFncyIsIlJlc291cmNlRmxhZ3MiLCJSZXNvdXJjZVJlc2lkZW5jeSIsIkZvcndhcmRMaWdodGluZyIsImxpZ2h0cyIsInNoYWRvd0VuYWJsZWRTcG90TGlnaHRzIiwiX3NwaGVyZSIsImNyZWF0ZSIsIl9ib3VuZGluZ0JveCIsIl9yYW5nZWREaXJMaWdodEJvdW5kaW5nQm94IiwiY3VsbExpZ2h0cyIsImZydXN0dW0iLCJjYW1lcmFQb3MiLCJsZW5ndGgiLCJzcG90TGlnaHRzIiwiYmFrZWQiLCJwb3NpdGlvbiIsInkiLCJ6Iiwic3BoZXJlRnJ1c3R1bSIsInB1c2giLCJzcGhlcmVMaWdodHMiLCJwb2ludExpZ2h0cyIsInJhbmdlZERpckxpZ2h0cyIsInRyYW5zZm9ybSIsIm5vZGUiLCJnZXRXb3JsZE1hdHJpeCIsImFhYmJGcnVzdHVtIiwic29ydCIsImxocyIsInJocyIsIlZlYzMiLCJzcXVhcmVkRGlzdGFuY2UiLCJfYWRkTGlnaHRRdWV1ZXMiLCJwYXNzIiwicXVldWUiLCJhZGRRdWV1ZSIsIkJMRU5EIiwiU1BIRVJFIiwiU1BPVCIsIlBPSU5UIiwiUkFOR0VEX0RJUkVDVElPTkFMIiwiYWRkU2NlbmUiLCJhZGRTcG90bGlnaHRTaGFkb3dQYXNzZXMiLCJtYXhOdW1TaGFkb3dNYXBzIiwiaSIsInNoYWRvd1Bhc3MiLCJhZGRSZW5kZXJQYXNzIiwiYWRkUmVuZGVyVGFyZ2V0IiwiQ0xFQVIiLCJTVE9SRSIsImFkZERlcHRoU3RlbmNpbCIsIkRJU0NBUkQiLCJOT05FIiwiT1BBUVVFIiwiTUFTSyIsIlNIQURPV19DQVNURVIiLCJ1c2VMaWdodEZydXN0dW0iLCJhZGRMaWdodFF1ZXVlcyIsImFkZFRleHR1cmUiLCJhZGRMaWdodFBhc3NlcyIsImRlcHRoU3RlbmNpbFN0b3JlT3AiLCJ2aWV3cG9ydCIsImNvdW50Iiwic3RvcmVPcCIsInNldFZpZXdwb3J0IiwiTE9BRCIsImlzTXVsdGlwbGVMaWdodFBhc3Nlc05lZWRlZCIsIkJ1aWx0aW5QaXBlbGluZUJ1aWxkZXIiLCJfcGlwZWxpbmVFdmVudCIsImNjbGVnYWN5IiwiZGlyZWN0b3IiLCJyb290IiwicGlwZWxpbmVFdmVudCIsIl9jbGVhckNvbG9yIiwiX2NsZWFyQ29sb3JUcmFuc3BhcmVudEJsYWNrIiwiX3JlZmxlY3Rpb25Qcm9iZUNsZWFyQ29sb3IiLCJfdmlld3BvcnQiLCJfY29uZmlncyIsIl9jYW1lcmFDb25maWdzIiwiX2NvY1BhcmFtcyIsIl9jb2NUZXhTaXplIiwiX2Jsb29tUGFyYW1zIiwiX2Jsb29tVGV4U2l6ZSIsIl9ibG9vbVdpZHRocyIsIl9ibG9vbUhlaWdodHMiLCJfYmxvb21UZXhOYW1lcyIsIl9jb2xvckdyYWRpbmdUZXhTaXplIiwiX2Z4YWFQYXJhbXMiLCJfZnNyUGFyYW1zIiwiX2ZzclRleFNpemUiLCJfY29weUFuZFRvbmVtYXBNYXRlcmlhbCIsIl9pbml0aWFsaXplZCIsImZvcndhcmRMaWdodGluZyIsIndpbmRvd1Jlc2l6ZSIsIm5hdGl2ZVdpZHRoIiwibmF0aXZlSGVpZ2h0IiwicmVuZGVyV2luZG93SWQiLCJhZGRSZW5kZXJXaW5kb3ciLCJURVgyRCIsIkNPTE9SX0FUVEFDSE1FTlQiLCJNRU1PUllMRVNTIiwiREVQVEhfU1RFTkNJTF9BVFRBQ0hNRU5UIiwiaGFsZldpZHRoIiwiaGFsZkhlaWdodCIsImJsb29tV2lkdGgiLCJibG9vbUhlaWdodCIsInNldFByb3BlcnR5Iiwic2V0dXAiLCJjYW1lcmFzIiwiX2luaXRNYXRlcmlhbHMiLCJlbWl0IiwiUGlwZWxpbmVFdmVudFR5cGUiLCJSRU5ERVJfQ0FNRVJBX0JFR0lOIiwiX2J1aWxkRm9yd2FyZFBpcGVsaW5lIiwiX2J1aWxkU2ltcGxlUGlwZWxpbmUiLCJSRU5ERVJfQ0FNRVJBX0VORCIsInJvdW5kIiwiY2xlYXJDb2xvciIsImNsZWFyRGVwdGgiLCJjbGVhclN0ZW5jaWwiLCJmbGFncyIsIlVJIiwiUFJPRklMRVIiLCJzaG93U3RhdGlzdGljcyIsInNjZW5lRGVwdGgiLCJyYWRpYW5jZU5hbWUiLCJsZHJDb2xvck5hbWUiLCJhc3NlcnQiLCJfYWRkQ2FzY2FkZWRTaGFkb3dNYXBQYXNzIiwiX3RyeUFkZFJlZmxlY3Rpb25Qcm9iZVBhc3NlcyIsImxhc3RQYXNzIiwiZG9mUmFkaWFuY2VOYW1lIiwiX2FkZEZvcndhcmRSYWRpYW5jZVBhc3NlcyIsIl9hZGREZXB0aE9mRmllbGRQYXNzZXMiLCJfYWRkS2F3YXNlRHVhbEZpbHRlckJsb29tUGFzc2VzIiwiY29weUFuZFRvbmVtYXBQYXNzTmVlZGVkIiwibGRyQ29sb3JCdWZmZXJOYW1lIiwiX2FkZENvcHlBbmRUb25lbWFwUGFzcyIsImFhQ29sb3JOYW1lIiwiX2FkZEZ4YWFQYXNzIiwiX2FkZEZzclBhc3MiLCJfYWRkQ29weVBhc3MiLCJfYWRkVG9uZW1hcFJlc2l6ZU9yU3VwZXJSZXNvbHV0aW9uUGFzc2VzIiwiX2FkZFVJUXVldWUiLCJjc21TdXBwb3J0ZWQiLCJpbnB1dCIsIm91dHB1dCIsInNldFZlYzQiLCJhZGRGdWxsc2NyZWVuUXVhZCIsImx1dFRleCIsImlzU3F1YXJlTWFwIiwic2V0VmVjMiIsInNldEZsb2F0IiwiX2J1aWxkRm9yd2FyZE1haW5MaWdodFBhc3MiLCJjb2xvclN0b3JlT3AiLCJ3YXJuIiwiZGVwdGhTdGVuY2lsIiwiY29jTmFtZSIsInByZWZpbHRlck5hbWUiLCJib2tlaE5hbWUiLCJmaWx0ZXJOYW1lIiwiY29jUGFzcyIsInNldE1hdDQiLCJtYXRQcm9qIiwiYWRkQ2FtZXJhUXVhZCIsInByZWZpbHRlclBhc3MiLCJib2tlaFBhc3MiLCJmaWx0ZXJQYXNzIiwiY29tYmluZVBhc3MiLCJzaXplQ291bnQiLCJkb3duUGFzcyIsInVwUGFzcyIsImNsYW1wIiwiZnNyQ29sb3JOYW1lIiwiZWFzdVBhc3MiLCJyY2FzUGFzcyIsImRpc2FibGVNU0FBIiwiX2FkZEZvcndhcmRTaW5nbGVSYWRpYW5jZVBhc3MiLCJfYWRkRm9yd2FyZE11bHRpcGxlUmFkaWFuY2VQYXNzZXMiLCJhZGRQbGFuYXJTaGFkb3dRdWV1ZSIsInNjZW5lRmxhZ3MiLCJnZW9tZXRyeVJlbmRlcmVyIiwiR0VPTUVUUlkiLCJtc2FhUmFkaWFuY2VOYW1lIiwibXNhYURlcHRoU3RlbmNpbE5hbWUiLCJtc1Bhc3MiLCJhZGRNdWx0aXNhbXBsZVJlbmRlclBhc3MiLCJyZXNvbHZlUmVuZGVyVGFyZ2V0IiwiUExBTkFSX1NIQURPVyIsImZpcnN0U3RvcmVPcCIsIl9idWlsZFJlZmxlY3Rpb25Qcm9iZVBhc3MiLCJwYWNrUkdCRSIsIlJFRkxFQ1RJT05fUFJPQkUiLCJyZWZsZWN0aW9uUHJvYmVNYW5hZ2VyIiwiaW50ZXJuYWwiLCJwcm9iZXMiLCJnZXRQcm9iZXMiLCJtYXhQcm9iZUNvdW50IiwicHJvYmVJRCIsInByb2JlIiwibmVlZFJlbmRlciIsImFyZWEiLCJyZW5kZXJBcmVhIiwicHJvYmVUeXBlIiwiUHJvYmVUeXBlIiwiUExBTkFSIiwicmVhbHRpbWVQbGFuYXJUZXh0dXJlIiwicHJvYmVQYXNzIiwiX3V1aWQiLCJpbml0aWFsaXplIiwiZWZmZWN0TmFtZSIsImVmZmVjdEFzc2V0Iiwic2V0Q3VzdG9tUGlwZWxpbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQTRDQSxNQUFNO1FBQUVBLE9BQU87UUFBRUMsZ0JBQWdCO1FBQUVDLGlCQUFpQjtRQUFFQyxJQUFJO1FBQUVDLFFBQVE7UUFBRUMsZ0JBQWdCO1FBQUVDO01BQUssQ0FBQyxHQUFHQyxVQUFVO1VBTzlGQyx1QkFBdUIsdUNBQUFDLElBQUEsR0FMbkNULE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxFQUFBVSxLQUFBLEdBQ2xDUCxJQUFJ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LEtBQUssQ0FBQzs7Y0FxQnRELEVBQUV3VCxPQUFPO2NBQ1QsSUFBSUEsT0FBTyxLQUFLRCxhQUFhLEVBQUU7Z0JBQzNCOzs7O1VBS0p4RixjQUFjQSxDQUFDbkwsR0FBNEIsRUFBVTtZQUN6RCxJQUFJLElBQUksQ0FBQ2lLLFlBQVksRUFBRTtjQUNuQixPQUFPLENBQUM7O1lBR1psSyxvQkFBb0IsQ0FBQ0MsR0FBRyxFQUFFLElBQUksQ0FBQ21KLFFBQVEsQ0FBQzs7O1lBR3hDLElBQUksQ0FBQ2EsdUJBQXVCLENBQUNzSCxLQUFLLDJDQUEyQztZQUM3RSxJQUFJLENBQUN0SCx1QkFBdUIsQ0FBQ3VILFVBQVUsQ0FBQztjQUFFQyxVQUFVLEVBQUU7YUFBc0MsQ0FBQztZQUU3RixJQUFJLElBQUksQ0FBQ3hILHVCQUF1QixDQUFDeUgsV0FBVyxFQUFFO2NBQzFDLElBQUksQ0FBQ3hILFlBQVksR0FBRyxJQUFJOztZQUc1QixPQUFPLElBQUksQ0FBQ0EsWUFBWSxHQUFHLENBQUMsR0FBRyxDQUFDOzs7UUFJeENyVCxTQUFTLENBQUM4YSxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsSUFBSWpKLHNCQUFzQixFQUFFLENBQUM7TUFFeEUsQ0FBQztjQUFDLENBQUEzTixHQUFBLENBQUFDLEdBQUEiLCJmaWxlIjoiYWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuIENvcHlyaWdodCAoYykgMjAyMS0yMDI0IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxyXG5cclxuIGh0dHBzOi8vd3d3LmNvY29zLmNvbS9cclxuXHJcbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcbiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvXHJcbiB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllc1xyXG4gb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxyXG4gc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG4gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxyXG4gVEhFIFNPRlRXQVJFLlxyXG4qL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIF9kZWNvcmF0b3IsXHJcbiAgICBDYW1lcmEsXHJcbiAgICBDQ0Jvb2xlYW4sXHJcbiAgICBDQ0Zsb2F0LFxyXG4gICAgQ0NJbnRlZ2VyLFxyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTWF0ZXJpYWwsXHJcbiAgICByZW5kZXJpbmcsXHJcbiAgICBUZXh0dXJlMkQsXHJcbn0gZnJvbSAnY2MnO1xyXG5cclxuaW1wb3J0IHsgRURJVE9SIH0gZnJvbSAnY2MvZW52JztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBQaXBlbGluZVNldHRpbmdzLFxyXG4gICAgbWFrZVBpcGVsaW5lU2V0dGluZ3MsXHJcbiAgICBmaWxsUmVxdWlyZWRQaXBlbGluZVNldHRpbmdzLFxyXG59IGZyb20gJy4vYnVpbHRpbi1waXBlbGluZS10eXBlcyc7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIGRpc2FsbG93TXVsdGlwbGUsIGV4ZWN1dGVJbkVkaXRNb2RlLCBtZW51LCBwcm9wZXJ0eSwgcmVxdWlyZUNvbXBvbmVudCwgdHlwZSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdCdWlsdGluUGlwZWxpbmVTZXR0aW5ncycpXHJcbkBtZW51KCdSZW5kZXJpbmcvQnVpbHRpblBpcGVsaW5lU2V0dGluZ3MnKVxyXG5AcmVxdWlyZUNvbXBvbmVudChDYW1lcmEpXHJcbkBkaXNhbGxvd011bHRpcGxlXHJcbkBleGVjdXRlSW5FZGl0TW9kZVxyXG5leHBvcnQgY2xhc3MgQnVpbHRpblBpcGVsaW5lU2V0dGluZ3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9zZXR0aW5nczogUGlwZWxpbmVTZXR0aW5ncyA9IG1ha2VQaXBlbGluZVNldHRpbmdzKCk7XHJcblxyXG4gICAgLy8gRW5hYmxlL0Rpc2FibGVcclxuICAgIG9uRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIGZpbGxSZXF1aXJlZFBpcGVsaW5lU2V0dGluZ3ModGhpcy5fc2V0dGluZ3MpO1xyXG4gICAgICAgIGNvbnN0IGNhbWVyYUNvbXBvbmVudCA9IHRoaXMuZ2V0Q29tcG9uZW50KENhbWVyYSkhO1xyXG4gICAgICAgIGNvbnN0IGNhbWVyYSA9IGNhbWVyYUNvbXBvbmVudC5jYW1lcmE7XHJcbiAgICAgICAgY2FtZXJhLnBpcGVsaW5lU2V0dGluZ3MgPSB0aGlzLl9zZXR0aW5ncztcclxuXHJcbiAgICAgICAgaWYgKEVESVRPUikge1xyXG4gICAgICAgICAgICB0aGlzLl90cnlFbmFibGVFZGl0b3JQcmV2aWV3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25EaXNhYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGNhbWVyYUNvbXBvbmVudCA9IHRoaXMuZ2V0Q29tcG9uZW50KENhbWVyYSkhO1xyXG4gICAgICAgIGNvbnN0IGNhbWVyYSA9IGNhbWVyYUNvbXBvbmVudC5jYW1lcmE7XHJcbiAgICAgICAgY2FtZXJhLnBpcGVsaW5lU2V0dGluZ3MgPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAoRURJVE9SKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Rpc2FibGVFZGl0b3JQcmV2aWV3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEVkaXRvciBQcmV2aWV3XHJcbiAgICBAcHJvcGVydHkoQ0NCb29sZWFuKVxyXG4gICAgcHJvdGVjdGVkIF9lZGl0b3JQcmV2aWV3ID0gZmFsc2U7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICBkaXNwbGF5TmFtZTogJ0VkaXRvciBQcmV2aWV3IChFeHBlcmltZW50YWwpJyxcclxuICAgICAgICB0eXBlOiBDQ0Jvb2xlYW4sXHJcbiAgICB9KVxyXG4gICAgZ2V0IGVkaXRvclByZXZpZXcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VkaXRvclByZXZpZXc7XHJcbiAgICB9XHJcbiAgICBzZXQgZWRpdG9yUHJldmlldyh2OiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fZWRpdG9yUHJldmlldyA9IHY7XHJcbiAgICAgICAgaWYgKEVESVRPUikge1xyXG4gICAgICAgICAgICB0aGlzLl90cnlFbmFibGVFZGl0b3JQcmV2aWV3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfdHJ5RW5hYmxlRWRpdG9yUHJldmlldygpOiB2b2lkIHtcclxuICAgICAgICBpZiAocmVuZGVyaW5nID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fZWRpdG9yUHJldmlldykge1xyXG4gICAgICAgICAgICByZW5kZXJpbmcuc2V0RWRpdG9yUGlwZWxpbmVTZXR0aW5ncyh0aGlzLl9zZXR0aW5ncyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZGlzYWJsZUVkaXRvclByZXZpZXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9kaXNhYmxlRWRpdG9yUHJldmlldygpOiB2b2lkIHtcclxuICAgICAgICBpZiAocmVuZGVyaW5nID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjdXJyZW50ID0gcmVuZGVyaW5nLmdldEVkaXRvclBpcGVsaW5lU2V0dGluZ3MoKSBhcyBQaXBlbGluZVNldHRpbmdzIHwgbnVsbDtcclxuICAgICAgICBpZiAoY3VycmVudCA9PT0gdGhpcy5fc2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgcmVuZGVyaW5nLnNldEVkaXRvclBpcGVsaW5lU2V0dGluZ3MobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE1TQUFcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgZ3JvdXA6IHsgaWQ6ICdNU0FBJywgbmFtZTogJ011bHRpc2FtcGxlIEFudGktQWxpYXNpbmcnIH0sXHJcbiAgICAgICAgdHlwZTogQ0NCb29sZWFuLFxyXG4gICAgfSlcclxuICAgIGdldCBNc2FhRW5hYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5tc2FhLmVuYWJsZWQ7XHJcbiAgICB9XHJcbiAgICBzZXQgTXNhYUVuYWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldHRpbmdzLm1zYWEuZW5hYmxlZCA9IHZhbHVlO1xyXG4gICAgICAgIGlmIChFRElUT1IpIHtcclxuICAgICAgICAgICAgdGhpcy5fdHJ5RW5hYmxlRWRpdG9yUHJldmlldygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIGdyb3VwOiB7IGlkOiAnTVNBQScsIG5hbWU6ICdNdWx0aXNhbXBsZSBBbnRpLUFsaWFzaW5nJywgc3R5bGU6ICdzZWN0aW9uJyB9LFxyXG4gICAgICAgIHR5cGU6IENDSW50ZWdlcixcclxuICAgICAgICByYW5nZTogWzIsIDQsIDJdLFxyXG4gICAgfSlcclxuICAgIHNldCBtc2FhU2FtcGxlQ291bnQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHZhbHVlID0gMiAqKiBNYXRoLmNlaWwoTWF0aC5sb2cyKE1hdGgubWF4KHZhbHVlLCAyKSkpO1xyXG4gICAgICAgIHZhbHVlID0gTWF0aC5taW4odmFsdWUsIDQpO1xyXG4gICAgICAgIHRoaXMuX3NldHRpbmdzLm1zYWEuc2FtcGxlQ291bnQgPSB2YWx1ZTtcclxuICAgICAgICBpZiAoRURJVE9SKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyeUVuYWJsZUVkaXRvclByZXZpZXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgbXNhYVNhbXBsZUNvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLm1zYWEuc2FtcGxlQ291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2hhZGluZyBTY2FsZVxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICBncm91cDogeyBpZDogJ1NoYWRpbmdTY2FsZScsIG5hbWU6ICdTaGFkaW5nU2NhbGUnLCBzdHlsZTogJ3NlY3Rpb24nIH0sXHJcbiAgICAgICAgdHlwZTogQ0NCb29sZWFuLFxyXG4gICAgfSlcclxuICAgIHNldCBzaGFkaW5nU2NhbGVFbmFibGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXR0aW5ncy5lbmFibGVTaGFkaW5nU2NhbGUgPSB2YWx1ZTtcclxuICAgICAgICBpZiAoRURJVE9SKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyeUVuYWJsZUVkaXRvclByZXZpZXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgc2hhZGluZ1NjYWxlRW5hYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5lbmFibGVTaGFkaW5nU2NhbGU7XHJcbiAgICB9XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0b29sdGlwOiAnaTE4bjpwb3N0cHJvY2Vzcy5zaGFkaW5nU2NhbGUnLFxyXG4gICAgICAgIGdyb3VwOiB7IGlkOiAnU2hhZGluZ1NjYWxlJywgbmFtZTogJ1NoYWRpbmdTY2FsZScgfSxcclxuICAgICAgICB0eXBlOiBDQ0Zsb2F0LFxyXG4gICAgICAgIHJhbmdlOiBbMC4wMSwgNCwgMC4wMV0sXHJcbiAgICAgICAgc2xpZGU6IHRydWUsXHJcbiAgICB9KVxyXG4gICAgc2V0IHNoYWRpbmdTY2FsZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0dGluZ3Muc2hhZGluZ1NjYWxlID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKEVESVRPUikge1xyXG4gICAgICAgICAgICB0aGlzLl90cnlFbmFibGVFZGl0b3JQcmV2aWV3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IHNoYWRpbmdTY2FsZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5zaGFkaW5nU2NhbGU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGVwdGhPZkZpZWxkXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIGdyb3VwOiB7IGlkOiAnRGVwdGhPZkZpZWxkJywgbmFtZTogJ0RlcHRoT2ZGaWVsZCAoUG9zdFByb2Nlc3NpbmcpJywgc3R5bGU6ICdzZWN0aW9uJyB9LFxyXG4gICAgICAgIHR5cGU6IENDQm9vbGVhbixcclxuICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgIH0pXHJcbiAgICBzZXQgZG9mRW5hYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MuZGVwdGhPZkZpZWxkLmVuYWJsZWQgPSB2YWx1ZTtcclxuICAgICAgICBpZiAoRURJVE9SKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyeUVuYWJsZUVkaXRvclByZXZpZXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgZG9mRW5hYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5kZXB0aE9mRmllbGQuZW5hYmxlZDtcclxuICAgIH1cclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIGdyb3VwOiB7IGlkOiAnRGVwdGhPZkZpZWxkJywgbmFtZTogJ0RlcHRoT2ZGaWVsZCAoUG9zdFByb2Nlc3NpbmcpJywgc3R5bGU6ICdzZWN0aW9uJyB9LFxyXG4gICAgICAgIHR5cGU6IE1hdGVyaWFsLFxyXG4gICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgfSlcclxuICAgIHNldCBkb2ZNYXRlcmlhbCh2YWx1ZTogTWF0ZXJpYWwpIHtcclxuICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MuZGVwdGhPZkZpZWxkLm1hdGVyaWFsID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3NldHRpbmdzLmRlcHRoT2ZGaWVsZC5tYXRlcmlhbCA9IHZhbHVlO1xyXG4gICAgICAgIGlmIChFRElUT1IpIHtcclxuICAgICAgICAgICAgdGhpcy5fdHJ5RW5hYmxlRWRpdG9yUHJldmlldygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBkb2ZNYXRlcmlhbCgpOiBNYXRlcmlhbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLmRlcHRoT2ZGaWVsZC5tYXRlcmlhbCE7XHJcbiAgICB9XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICBncm91cDogeyBpZDogJ0RlcHRoT2ZGaWVsZCcsIG5hbWU6ICdEZXB0aE9mRmllbGQgKFBvc3RQcm9jZXNzaW5nKScsIHN0eWxlOiAnc2VjdGlvbicgfSxcclxuICAgICAgICB0eXBlOiBDQ0Zsb2F0LFxyXG4gICAgICAgIG1pbjogMCxcclxuICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgIH0pXHJcbiAgICBzZXQgZG9mRm9jdXNEaXN0YW5jZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MuZGVwdGhPZkZpZWxkLmZvY3VzRGlzdGFuY2UgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIGdldCBkb2ZGb2N1c0Rpc3RhbmNlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLmRlcHRoT2ZGaWVsZC5mb2N1c0Rpc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgZ3JvdXA6IHsgaWQ6ICdEZXB0aE9mRmllbGQnLCBuYW1lOiAnRGVwdGhPZkZpZWxkIChQb3N0UHJvY2Vzc2luZyknLCBzdHlsZTogJ3NlY3Rpb24nIH0sXHJcbiAgICAgICAgdHlwZTogQ0NGbG9hdCxcclxuICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICB9KVxyXG4gICAgc2V0IGRvZkZvY3VzUmFuZ2UodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldHRpbmdzLmRlcHRoT2ZGaWVsZC5mb2N1c1JhbmdlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBnZXQgZG9mRm9jdXNSYW5nZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5kZXB0aE9mRmllbGQuZm9jdXNSYW5nZTtcclxuICAgIH1cclxuXHJcbiAgICBAdHlwZShDQ0Zsb2F0KVxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICBncm91cDogeyBpZDogJ0RlcHRoT2ZGaWVsZCcsIG5hbWU6ICdEZXB0aE9mRmllbGQgKFBvc3RQcm9jZXNzaW5nKScsIHN0eWxlOiAnc2VjdGlvbicgfSxcclxuICAgICAgICB0eXBlOiBDQ0Zsb2F0LFxyXG4gICAgICAgIHJhbmdlOiBbMSwgMTAsIDAuMDFdLFxyXG4gICAgICAgIHNsaWRlOiB0cnVlLFxyXG4gICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgfSlcclxuICAgIHNldCBkb2ZCb2tlaFJhZGl1cyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MuZGVwdGhPZkZpZWxkLmJva2VoUmFkaXVzID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBnZXQgZG9mQm9rZWhSYWRpdXMoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MuZGVwdGhPZkZpZWxkLmJva2VoUmFkaXVzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEJsb29tXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIGdyb3VwOiB7IGlkOiAnQmxvb20nLCBuYW1lOiAnQmxvb20gKFBvc3RQcm9jZXNzaW5nKScsIHN0eWxlOiAnc2VjdGlvbicgfSxcclxuICAgICAgICB0eXBlOiBDQ0Jvb2xlYW4sXHJcbiAgICB9KVxyXG4gICAgc2V0IGJsb29tRW5hYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MuYmxvb20uZW5hYmxlZCA9IHZhbHVlO1xyXG4gICAgICAgIGlmIChFRElUT1IpIHtcclxuICAgICAgICAgICAgdGhpcy5fdHJ5RW5hYmxlRWRpdG9yUHJldmlldygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBibG9vbUVuYWJsZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MuYmxvb20uZW5hYmxlZDtcclxuICAgIH1cclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIGdyb3VwOiB7IGlkOiAnQmxvb20nLCBuYW1lOiAnQmxvb20gKFBvc3RQcm9jZXNzaW5nKScsIHN0eWxlOiAnc2VjdGlvbicgfSxcclxuICAgICAgICB0eXBlOiBNYXRlcmlhbCxcclxuICAgIH0pXHJcbiAgICBzZXQgYmxvb21NYXRlcmlhbCh2YWx1ZTogTWF0ZXJpYWwpIHtcclxuICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MuYmxvb20ubWF0ZXJpYWwgPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MuYmxvb20ubWF0ZXJpYWwgPSB2YWx1ZTtcclxuICAgICAgICBpZiAoRURJVE9SKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyeUVuYWJsZUVkaXRvclByZXZpZXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgYmxvb21NYXRlcmlhbCgpOiBNYXRlcmlhbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLmJsb29tLm1hdGVyaWFsITtcclxuICAgIH1cclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHRvb2x0aXA6ICdpMThuOmJsb29tLmVuYWJsZUFscGhhTWFzaycsXHJcbiAgICAgICAgZ3JvdXA6IHsgaWQ6ICdCbG9vbScsIG5hbWU6ICdCbG9vbSAoUG9zdFByb2Nlc3NpbmcpJywgc3R5bGU6ICdzZWN0aW9uJyB9LFxyXG4gICAgICAgIHR5cGU6IENDQm9vbGVhbixcclxuICAgIH0pXHJcbiAgICBzZXQgYmxvb21FbmFibGVBbHBoYU1hc2sodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXR0aW5ncy5ibG9vbS5lbmFibGVBbHBoYU1hc2sgPSB2YWx1ZTtcclxuICAgICAgICBpZiAoRURJVE9SKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyeUVuYWJsZUVkaXRvclByZXZpZXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgYmxvb21FbmFibGVBbHBoYU1hc2soKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLmJsb29tLmVuYWJsZUFscGhhTWFzaztcclxuICAgIH1cclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHRvb2x0aXA6ICdpMThuOmJsb29tLml0ZXJhdGlvbnMnLFxyXG4gICAgICAgIGdyb3VwOiB7IGlkOiAnQmxvb20nLCBuYW1lOiAnQmxvb20gKFBvc3RQcm9jZXNzaW5nKScsIHN0eWxlOiAnc2VjdGlvbicgfSxcclxuICAgICAgICB0eXBlOiBDQ0ludGVnZXIsXHJcbiAgICAgICAgcmFuZ2U6IFsxLCA2LCAxXSxcclxuICAgICAgICBzbGlkZTogdHJ1ZSxcclxuICAgIH0pXHJcbiAgICBzZXQgYmxvb21JdGVyYXRpb25zKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXR0aW5ncy5ibG9vbS5pdGVyYXRpb25zID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKEVESVRPUikge1xyXG4gICAgICAgICAgICB0aGlzLl90cnlFbmFibGVFZGl0b3JQcmV2aWV3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IGJsb29tSXRlcmF0aW9ucygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5ibG9vbS5pdGVyYXRpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdG9vbHRpcDogJ2kxOG46Ymxvb20udGhyZXNob2xkJyxcclxuICAgICAgICBncm91cDogeyBpZDogJ0Jsb29tJywgbmFtZTogJ0Jsb29tIChQb3N0UHJvY2Vzc2luZyknLCBzdHlsZTogJ3NlY3Rpb24nIH0sXHJcbiAgICAgICAgdHlwZTogQ0NGbG9hdCxcclxuICAgICAgICBtaW46IDAsXHJcbiAgICB9KVxyXG4gICAgc2V0IGJsb29tVGhyZXNob2xkKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXR0aW5ncy5ibG9vbS50aHJlc2hvbGQgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIGdldCBibG9vbVRocmVzaG9sZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5ibG9vbS50aHJlc2hvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGJsb29tSW50ZW5zaXR5KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXR0aW5ncy5ibG9vbS5pbnRlbnNpdHkgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIGdldCBibG9vbUludGVuc2l0eSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5ibG9vbS5pbnRlbnNpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ29sb3IgR3JhZGluZyAoTERSKVxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICBncm91cDogeyBpZDogJ0NvbG9yIEdyYWRpbmcnLCBuYW1lOiAnQ29sb3JHcmFkaW5nIChMRFIpIChQb3N0UHJvY2Vzc2luZyknLCBzdHlsZTogJ3NlY3Rpb24nIH0sXHJcbiAgICAgICAgdHlwZTogQ0NCb29sZWFuLFxyXG4gICAgfSlcclxuICAgIHNldCBjb2xvckdyYWRpbmdFbmFibGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXR0aW5ncy5jb2xvckdyYWRpbmcuZW5hYmxlZCA9IHZhbHVlO1xyXG4gICAgICAgIGlmIChFRElUT1IpIHtcclxuICAgICAgICAgICAgdGhpcy5fdHJ5RW5hYmxlRWRpdG9yUHJldmlldygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBjb2xvckdyYWRpbmdFbmFibGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLmNvbG9yR3JhZGluZy5lbmFibGVkO1xyXG4gICAgfVxyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgZ3JvdXA6IHsgaWQ6ICdDb2xvciBHcmFkaW5nJywgbmFtZTogJ0NvbG9yR3JhZGluZyAoTERSKSAoUG9zdFByb2Nlc3NpbmcpJywgc3R5bGU6ICdzZWN0aW9uJyB9LFxyXG4gICAgICAgIHR5cGU6IE1hdGVyaWFsLFxyXG4gICAgfSlcclxuICAgIHNldCBjb2xvckdyYWRpbmdNYXRlcmlhbCh2YWx1ZTogTWF0ZXJpYWwpIHtcclxuICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MuY29sb3JHcmFkaW5nLm1hdGVyaWFsID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3NldHRpbmdzLmNvbG9yR3JhZGluZy5tYXRlcmlhbCA9IHZhbHVlO1xyXG4gICAgICAgIGlmIChFRElUT1IpIHtcclxuICAgICAgICAgICAgdGhpcy5fdHJ5RW5hYmxlRWRpdG9yUHJldmlldygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBjb2xvckdyYWRpbmdNYXRlcmlhbCgpOiBNYXRlcmlhbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLmNvbG9yR3JhZGluZy5tYXRlcmlhbCE7XHJcbiAgICB9XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0b29sdGlwOiAnaTE4bjpjb2xvcl9ncmFkaW5nLmNvbnRyaWJ1dGUnLFxyXG4gICAgICAgIGdyb3VwOiB7IGlkOiAnQ29sb3IgR3JhZGluZycsIG5hbWU6ICdDb2xvckdyYWRpbmcgKExEUikgKFBvc3RQcm9jZXNzaW5nKScsIHN0eWxlOiAnc2VjdGlvbicgfSxcclxuICAgICAgICB0eXBlOiBDQ0Zsb2F0LFxyXG4gICAgICAgIHJhbmdlOiBbMCwgMSwgMC4wMV0sXHJcbiAgICAgICAgc2xpZGU6IHRydWUsXHJcbiAgICB9KVxyXG4gICAgc2V0IGNvbG9yR3JhZGluZ0NvbnRyaWJ1dGUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldHRpbmdzLmNvbG9yR3JhZGluZy5jb250cmlidXRlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBnZXQgY29sb3JHcmFkaW5nQ29udHJpYnV0ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5jb2xvckdyYWRpbmcuY29udHJpYnV0ZTtcclxuICAgIH1cclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHRvb2x0aXA6ICdpMThuOmNvbG9yX2dyYWRpbmcub3JpZ2luYWxNYXAnLFxyXG4gICAgICAgIGdyb3VwOiB7IGlkOiAnQ29sb3IgR3JhZGluZycsIG5hbWU6ICdDb2xvckdyYWRpbmcgKExEUikgKFBvc3RQcm9jZXNzaW5nKScsIHN0eWxlOiAnc2VjdGlvbicgfSxcclxuICAgICAgICB0eXBlOiBUZXh0dXJlMkQsXHJcbiAgICB9KVxyXG4gICAgc2V0IGNvbG9yR3JhZGluZ01hcCh2YWw6IFRleHR1cmUyRCkge1xyXG4gICAgICAgIHRoaXMuX3NldHRpbmdzLmNvbG9yR3JhZGluZy5jb2xvckdyYWRpbmdNYXAgPSB2YWw7XHJcbiAgICAgICAgaWYgKEVESVRPUikge1xyXG4gICAgICAgICAgICB0aGlzLl90cnlFbmFibGVFZGl0b3JQcmV2aWV3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IGNvbG9yR3JhZGluZ01hcCgpOiBUZXh0dXJlMkQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5jb2xvckdyYWRpbmcuY29sb3JHcmFkaW5nTWFwITtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGWEFBXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIGdyb3VwOiB7IGlkOiAnRlhBQScsIG5hbWU6ICdGYXN0IEFwcHJveGltYXRlIEFudGktQWxpYXNpbmcgKFBvc3RQcm9jZXNzaW5nKScsIHN0eWxlOiAnc2VjdGlvbicgfSxcclxuICAgICAgICB0eXBlOiBDQ0Jvb2xlYW4sXHJcbiAgICB9KVxyXG4gICAgc2V0IGZ4YWFFbmFibGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXR0aW5ncy5meGFhLmVuYWJsZWQgPSB2YWx1ZTtcclxuICAgICAgICBpZiAoRURJVE9SKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyeUVuYWJsZUVkaXRvclByZXZpZXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgZnhhYUVuYWJsZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MuZnhhYS5lbmFibGVkO1xyXG4gICAgfVxyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgZ3JvdXA6IHsgaWQ6ICdGWEFBJywgbmFtZTogJ0Zhc3QgQXBwcm94aW1hdGUgQW50aS1BbGlhc2luZyAoUG9zdFByb2Nlc3NpbmcpJywgc3R5bGU6ICdzZWN0aW9uJyB9LFxyXG4gICAgICAgIHR5cGU6IE1hdGVyaWFsLFxyXG4gICAgfSlcclxuICAgIHNldCBmeGFhTWF0ZXJpYWwodmFsdWU6IE1hdGVyaWFsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLmZ4YWEubWF0ZXJpYWwgPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MuZnhhYS5tYXRlcmlhbCA9IHZhbHVlO1xyXG4gICAgICAgIGlmIChFRElUT1IpIHtcclxuICAgICAgICAgICAgdGhpcy5fdHJ5RW5hYmxlRWRpdG9yUHJldmlldygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBmeGFhTWF0ZXJpYWwoKTogTWF0ZXJpYWwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5meGFhLm1hdGVyaWFsITtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGU1JcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgZ3JvdXA6IHsgaWQ6ICdGU1InLCBuYW1lOiAnRmlkZWxpdHlGWCBTdXBlciBSZXNvbHV0aW9uJywgc3R5bGU6ICdzZWN0aW9uJyB9LFxyXG4gICAgICAgIHR5cGU6IENDQm9vbGVhbixcclxuICAgIH0pXHJcbiAgICBzZXQgZnNyRW5hYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MuZnNyLmVuYWJsZWQgPSB2YWx1ZTtcclxuICAgICAgICBpZiAoRURJVE9SKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyeUVuYWJsZUVkaXRvclByZXZpZXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgZnNyRW5hYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5mc3IuZW5hYmxlZDtcclxuICAgIH1cclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIGdyb3VwOiB7IGlkOiAnRlNSJywgbmFtZTogJ0ZpZGVsaXR5RlggU3VwZXIgUmVzb2x1dGlvbicsIHN0eWxlOiAnc2VjdGlvbicgfSxcclxuICAgICAgICB0eXBlOiBNYXRlcmlhbCxcclxuICAgIH0pXHJcbiAgICBzZXQgZnNyTWF0ZXJpYWwodmFsdWU6IE1hdGVyaWFsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLmZzci5tYXRlcmlhbCA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zZXR0aW5ncy5mc3IubWF0ZXJpYWwgPSB2YWx1ZTtcclxuICAgICAgICBpZiAoRURJVE9SKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyeUVuYWJsZUVkaXRvclByZXZpZXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgZnNyTWF0ZXJpYWwoKTogTWF0ZXJpYWwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5mc3IubWF0ZXJpYWwhO1xyXG4gICAgfVxyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgZ3JvdXA6IHsgaWQ6ICdGU1InLCBuYW1lOiAnRmlkZWxpdHlGWCBTdXBlciBSZXNvbHV0aW9uJywgc3R5bGU6ICdzZWN0aW9uJyB9LFxyXG4gICAgICAgIHR5cGU6IENDRmxvYXQsXHJcbiAgICAgICAgcmFuZ2U6IFswLCAxLCAwLjAxXSxcclxuICAgICAgICBzbGlkZTogdHJ1ZSxcclxuICAgIH0pXHJcbiAgICBzZXQgZnNyU2hhcnBuZXNzKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXR0aW5ncy5mc3Iuc2hhcnBuZXNzID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBnZXQgZnNyU2hhcnBuZXNzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLmZzci5zaGFycG5lc3M7XHJcbiAgICB9XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICBncm91cDogeyBpZDogJ1RvbmVNYXBwaW5nJywgbmFtZTogJ1RvbmVNYXBwaW5nJywgc3R5bGU6ICdzZWN0aW9uJyB9LFxyXG4gICAgICAgIHR5cGU6IE1hdGVyaWFsLFxyXG4gICAgfSlcclxuICAgIHNldCB0b25lTWFwcGluZ01hdGVyaWFsKHZhbHVlOiBNYXRlcmlhbCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy50b25lTWFwcGluZy5tYXRlcmlhbCA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zZXR0aW5ncy50b25lTWFwcGluZy5tYXRlcmlhbCA9IHZhbHVlO1xyXG4gICAgICAgIGlmIChFRElUT1IpIHtcclxuICAgICAgICAgICAgdGhpcy5fdHJ5RW5hYmxlRWRpdG9yUHJldmlldygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCB0b25lTWFwcGluZ01hdGVyaWFsKCk6IE1hdGVyaWFsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MudG9uZU1hcHBpbmcubWF0ZXJpYWwhO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiBDb3B5cmlnaHQgKGMpIDIwMjEtMjAyNCBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cclxuXHJcbiBodHRwczovL3d3dy5jb2Nvcy5jb21cclxuXHJcbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcbiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvXHJcbiB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllc1xyXG4gb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxyXG4gc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG4gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxyXG4gVEhFIFNPRlRXQVJFLlxyXG4qL1xyXG5cclxuLyoqXHJcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT0gIURPIE5PVCBDSEFOR0UgVEhFIEZPTExPV0lORyBTRUNUSU9OIE1BTlVBTExZISA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAqIFRoZSBmb2xsb3dpbmcgc2VjdGlvbiBpcyBhdXRvLWdlbmVyYXRlZC5cclxuICogPT09PT09PT09PT09PT09PT09PT09PT09PSAhRE8gTk9UIENIQU5HRSBUSEUgRk9MTE9XSU5HIFNFQ1RJT04gTUFOVUFMTFkhID09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cclxuaW1wb3J0IHsgTWF0ZXJpYWwsIFRleHR1cmUyRCwgZ2Z4IH0gZnJvbSAnY2MnO1xyXG5cclxuY29uc3QgeyBTYW1wbGVDb3VudCB9ID0gZ2Z4O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNU0FBIHtcclxuICAgIGVuYWJsZWQ6IGJvb2xlYW47IC8qIGZhbHNlICovXHJcbiAgICBzYW1wbGVDb3VudDogZ2Z4LlNhbXBsZUNvdW50OyAvKiBTYW1wbGVDb3VudC5YNCAqL1xyXG4gICAgW25hbWU6IHN0cmluZ106IHVua25vd247XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlTVNBQSgpOiBNU0FBIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsXHJcbiAgICAgICAgc2FtcGxlQ291bnQ6IFNhbXBsZUNvdW50Llg0LFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbGxSZXF1aXJlZE1TQUEodmFsdWU6IE1TQUEpOiB2b2lkIHtcclxuICAgIGlmICh2YWx1ZS5lbmFibGVkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YWx1ZS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUuc2FtcGxlQ291bnQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHZhbHVlLnNhbXBsZUNvdW50ID0gU2FtcGxlQ291bnQuWDQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSEJBTyB7XHJcbiAgICBlbmFibGVkOiBib29sZWFuOyAvKiBmYWxzZSAqL1xyXG4gICAgcmFkaXVzU2NhbGU6IG51bWJlcjsgLyogMSAqL1xyXG4gICAgYW5nbGVCaWFzRGVncmVlOiBudW1iZXI7IC8qIDEwICovXHJcbiAgICBibHVyU2hhcnBuZXNzOiBudW1iZXI7IC8qIDMgKi9cclxuICAgIGFvU2F0dXJhdGlvbjogbnVtYmVyOyAvKiAxICovXHJcbiAgICBuZWVkQmx1cjogYm9vbGVhbjsgLyogZmFsc2UgKi9cclxuICAgIFtuYW1lOiBzdHJpbmddOiB1bmtub3duO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZUhCQU8oKTogSEJBTyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIHJhZGl1c1NjYWxlOiAxLFxyXG4gICAgICAgIGFuZ2xlQmlhc0RlZ3JlZTogMTAsXHJcbiAgICAgICAgYmx1clNoYXJwbmVzczogMyxcclxuICAgICAgICBhb1NhdHVyYXRpb246IDEsXHJcbiAgICAgICAgbmVlZEJsdXI6IGZhbHNlLFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbGxSZXF1aXJlZEhCQU8odmFsdWU6IEhCQU8pOiB2b2lkIHtcclxuICAgIGlmICh2YWx1ZS5lbmFibGVkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YWx1ZS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUucmFkaXVzU2NhbGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHZhbHVlLnJhZGl1c1NjYWxlID0gMTtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZS5hbmdsZUJpYXNEZWdyZWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHZhbHVlLmFuZ2xlQmlhc0RlZ3JlZSA9IDEwO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlLmJsdXJTaGFycG5lc3MgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHZhbHVlLmJsdXJTaGFycG5lc3MgPSAzO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlLmFvU2F0dXJhdGlvbiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdmFsdWUuYW9TYXR1cmF0aW9uID0gMTtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZS5uZWVkQmx1ciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdmFsdWUubmVlZEJsdXIgPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEZXB0aE9mRmllbGQge1xyXG4gICAgZW5hYmxlZDogYm9vbGVhbjsgLyogZmFsc2UgKi9cclxuICAgIC8qIHJlZmNvdW50ICovIG1hdGVyaWFsOiBNYXRlcmlhbCB8IG51bGw7XHJcbiAgICBmb2N1c0Rpc3RhbmNlOiBudW1iZXI7IC8qIDAgKi9cclxuICAgIGZvY3VzUmFuZ2U6IG51bWJlcjsgLyogMCAqL1xyXG4gICAgYm9rZWhSYWRpdXM6IG51bWJlcjsgLyogMSAqL1xyXG4gICAgW25hbWU6IHN0cmluZ106IHVua25vd247XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlRGVwdGhPZkZpZWxkKCk6IERlcHRoT2ZGaWVsZCB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIG1hdGVyaWFsOiBudWxsLFxyXG4gICAgICAgIGZvY3VzRGlzdGFuY2U6IDAsXHJcbiAgICAgICAgZm9jdXNSYW5nZTogMCxcclxuICAgICAgICBib2tlaFJhZGl1czogMSxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaWxsUmVxdWlyZWREZXB0aE9mRmllbGQodmFsdWU6IERlcHRoT2ZGaWVsZCk6IHZvaWQge1xyXG4gICAgaWYgKHZhbHVlLmVuYWJsZWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHZhbHVlLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZS5tYXRlcmlhbCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdmFsdWUubWF0ZXJpYWwgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlLmZvY3VzRGlzdGFuY2UgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHZhbHVlLmZvY3VzRGlzdGFuY2UgPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlLmZvY3VzUmFuZ2UgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHZhbHVlLmZvY3VzUmFuZ2UgPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlLmJva2VoUmFkaXVzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YWx1ZS5ib2tlaFJhZGl1cyA9IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmxvb20ge1xyXG4gICAgZW5hYmxlZDogYm9vbGVhbjsgLyogZmFsc2UgKi9cclxuICAgIC8qIHJlZmNvdW50ICovIG1hdGVyaWFsOiBNYXRlcmlhbCB8IG51bGw7XHJcbiAgICBlbmFibGVBbHBoYU1hc2s6IGJvb2xlYW47IC8qIGZhbHNlICovXHJcbiAgICBpdGVyYXRpb25zOiBudW1iZXI7IC8qIDMgKi9cclxuICAgIHRocmVzaG9sZDogbnVtYmVyOyAvKiAwLjggKi9cclxuICAgIGludGVuc2l0eTogbnVtYmVyOyAvKiAyLjMgKi9cclxuICAgIFtuYW1lOiBzdHJpbmddOiB1bmtub3duO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZUJsb29tKCk6IEJsb29tIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsXHJcbiAgICAgICAgbWF0ZXJpYWw6IG51bGwsXHJcbiAgICAgICAgZW5hYmxlQWxwaGFNYXNrOiBmYWxzZSxcclxuICAgICAgICBpdGVyYXRpb25zOiAzLFxyXG4gICAgICAgIHRocmVzaG9sZDogMC44LFxyXG4gICAgICAgIGludGVuc2l0eTogMi4zLFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbGxSZXF1aXJlZEJsb29tKHZhbHVlOiBCbG9vbSk6IHZvaWQge1xyXG4gICAgaWYgKHZhbHVlLmVuYWJsZWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHZhbHVlLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZS5tYXRlcmlhbCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdmFsdWUubWF0ZXJpYWwgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlLmVuYWJsZUFscGhhTWFzayA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdmFsdWUuZW5hYmxlQWxwaGFNYXNrID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUuaXRlcmF0aW9ucyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdmFsdWUuaXRlcmF0aW9ucyA9IDM7XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUudGhyZXNob2xkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YWx1ZS50aHJlc2hvbGQgPSAwLjg7XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUuaW50ZW5zaXR5ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YWx1ZS5pbnRlbnNpdHkgPSAyLjM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29sb3JHcmFkaW5nIHtcclxuICAgIGVuYWJsZWQ6IGJvb2xlYW47IC8qIGZhbHNlICovXHJcbiAgICAvKiByZWZjb3VudCAqLyBtYXRlcmlhbDogTWF0ZXJpYWwgfCBudWxsO1xyXG4gICAgY29udHJpYnV0ZTogbnVtYmVyOyAvKiAxICovXHJcbiAgICAvKiByZWZjb3VudCAqLyBjb2xvckdyYWRpbmdNYXA6IFRleHR1cmUyRCB8IG51bGw7XHJcbiAgICBbbmFtZTogc3RyaW5nXTogdW5rbm93bjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VDb2xvckdyYWRpbmcoKTogQ29sb3JHcmFkaW5nIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsXHJcbiAgICAgICAgbWF0ZXJpYWw6IG51bGwsXHJcbiAgICAgICAgY29udHJpYnV0ZTogMSxcclxuICAgICAgICBjb2xvckdyYWRpbmdNYXA6IG51bGwsXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmlsbFJlcXVpcmVkQ29sb3JHcmFkaW5nKHZhbHVlOiBDb2xvckdyYWRpbmcpOiB2b2lkIHtcclxuICAgIGlmICh2YWx1ZS5lbmFibGVkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YWx1ZS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUubWF0ZXJpYWwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHZhbHVlLm1hdGVyaWFsID0gbnVsbDtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZS5jb250cmlidXRlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YWx1ZS5jb250cmlidXRlID0gMTtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZS5jb2xvckdyYWRpbmdNYXAgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHZhbHVlLmNvbG9yR3JhZGluZ01hcCA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRlNSIHtcclxuICAgIGVuYWJsZWQ6IGJvb2xlYW47IC8qIGZhbHNlICovXHJcbiAgICAvKiByZWZjb3VudCAqLyBtYXRlcmlhbDogTWF0ZXJpYWwgfCBudWxsO1xyXG4gICAgc2hhcnBuZXNzOiBudW1iZXI7IC8qIDAuOCAqL1xyXG4gICAgW25hbWU6IHN0cmluZ106IHVua25vd247XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlRlNSKCk6IEZTUiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIG1hdGVyaWFsOiBudWxsLFxyXG4gICAgICAgIHNoYXJwbmVzczogMC44LFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbGxSZXF1aXJlZEZTUih2YWx1ZTogRlNSKTogdm9pZCB7XHJcbiAgICBpZiAodmFsdWUuZW5hYmxlZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdmFsdWUuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlLm1hdGVyaWFsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YWx1ZS5tYXRlcmlhbCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUuc2hhcnBuZXNzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YWx1ZS5zaGFycG5lc3MgPSAwLjg7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRlhBQSB7XHJcbiAgICBlbmFibGVkOiBib29sZWFuOyAvKiBmYWxzZSAqL1xyXG4gICAgLyogcmVmY291bnQgKi8gbWF0ZXJpYWw6IE1hdGVyaWFsIHwgbnVsbDtcclxuICAgIFtuYW1lOiBzdHJpbmddOiB1bmtub3duO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZUZYQUEoKTogRlhBQSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIG1hdGVyaWFsOiBudWxsLFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbGxSZXF1aXJlZEZYQUEodmFsdWU6IEZYQUEpOiB2b2lkIHtcclxuICAgIGlmICh2YWx1ZS5lbmFibGVkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YWx1ZS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUubWF0ZXJpYWwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHZhbHVlLm1hdGVyaWFsID0gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUb25lTWFwcGluZyB7XHJcbiAgICAvKiByZWZjb3VudCAqLyBtYXRlcmlhbDogTWF0ZXJpYWwgfCBudWxsO1xyXG4gICAgW25hbWU6IHN0cmluZ106IHVua25vd247XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlVG9uZU1hcHBpbmcoKTogVG9uZU1hcHBpbmcge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYXRlcmlhbDogbnVsbCxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaWxsUmVxdWlyZWRUb25lTWFwcGluZyh2YWx1ZTogVG9uZU1hcHBpbmcpOiB2b2lkIHtcclxuICAgIGlmICh2YWx1ZS5tYXRlcmlhbCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdmFsdWUubWF0ZXJpYWwgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBpcGVsaW5lU2V0dGluZ3Mge1xyXG4gICAgcmVhZG9ubHkgbXNhYTogTVNBQTtcclxuICAgIGVuYWJsZVNoYWRpbmdTY2FsZTogYm9vbGVhbjsgLyogZmFsc2UgKi9cclxuICAgIHNoYWRpbmdTY2FsZTogbnVtYmVyOyAvKiAwLjUgKi9cclxuICAgIHJlYWRvbmx5IGRlcHRoT2ZGaWVsZDogRGVwdGhPZkZpZWxkO1xyXG4gICAgcmVhZG9ubHkgYmxvb206IEJsb29tO1xyXG4gICAgcmVhZG9ubHkgdG9uZU1hcHBpbmc6IFRvbmVNYXBwaW5nO1xyXG4gICAgcmVhZG9ubHkgY29sb3JHcmFkaW5nOiBDb2xvckdyYWRpbmc7XHJcbiAgICByZWFkb25seSBmc3I6IEZTUjtcclxuICAgIHJlYWRvbmx5IGZ4YWE6IEZYQUE7XHJcbiAgICBbbmFtZTogc3RyaW5nXTogdW5rbm93bjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQaXBlbGluZVNldHRpbmdzKCk6IFBpcGVsaW5lU2V0dGluZ3Mge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtc2FhOiBtYWtlTVNBQSgpLFxyXG4gICAgICAgIGVuYWJsZVNoYWRpbmdTY2FsZTogZmFsc2UsXHJcbiAgICAgICAgc2hhZGluZ1NjYWxlOiAwLjUsXHJcbiAgICAgICAgZGVwdGhPZkZpZWxkOiBtYWtlRGVwdGhPZkZpZWxkKCksXHJcbiAgICAgICAgYmxvb206IG1ha2VCbG9vbSgpLFxyXG4gICAgICAgIHRvbmVNYXBwaW5nOiBtYWtlVG9uZU1hcHBpbmcoKSxcclxuICAgICAgICBjb2xvckdyYWRpbmc6IG1ha2VDb2xvckdyYWRpbmcoKSxcclxuICAgICAgICBmc3I6IG1ha2VGU1IoKSxcclxuICAgICAgICBmeGFhOiBtYWtlRlhBQSgpLFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbGxSZXF1aXJlZFBpcGVsaW5lU2V0dGluZ3ModmFsdWU6IFBpcGVsaW5lU2V0dGluZ3MpOiB2b2lkIHtcclxuICAgIGlmICghdmFsdWUubXNhYSkge1xyXG4gICAgICAgICh2YWx1ZS5tc2FhIGFzIE1TQUEpID0gbWFrZU1TQUEoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmlsbFJlcXVpcmVkTVNBQSh2YWx1ZS5tc2FhKTtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZS5lbmFibGVTaGFkaW5nU2NhbGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHZhbHVlLmVuYWJsZVNoYWRpbmdTY2FsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlLnNoYWRpbmdTY2FsZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdmFsdWUuc2hhZGluZ1NjYWxlID0gMC41O1xyXG4gICAgfVxyXG4gICAgaWYgKCF2YWx1ZS5kZXB0aE9mRmllbGQpIHtcclxuICAgICAgICAodmFsdWUuZGVwdGhPZkZpZWxkIGFzIERlcHRoT2ZGaWVsZCkgPSBtYWtlRGVwdGhPZkZpZWxkKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZpbGxSZXF1aXJlZERlcHRoT2ZGaWVsZCh2YWx1ZS5kZXB0aE9mRmllbGQpO1xyXG4gICAgfVxyXG4gICAgaWYgKCF2YWx1ZS5ibG9vbSkge1xyXG4gICAgICAgICh2YWx1ZS5ibG9vbSBhcyBCbG9vbSkgPSBtYWtlQmxvb20oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmlsbFJlcXVpcmVkQmxvb20odmFsdWUuYmxvb20pO1xyXG4gICAgfVxyXG4gICAgaWYgKCF2YWx1ZS50b25lTWFwcGluZykge1xyXG4gICAgICAgICh2YWx1ZS50b25lTWFwcGluZyBhcyBUb25lTWFwcGluZykgPSBtYWtlVG9uZU1hcHBpbmcoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmlsbFJlcXVpcmVkVG9uZU1hcHBpbmcodmFsdWUudG9uZU1hcHBpbmcpO1xyXG4gICAgfVxyXG4gICAgaWYgKCF2YWx1ZS5jb2xvckdyYWRpbmcpIHtcclxuICAgICAgICAodmFsdWUuY29sb3JHcmFkaW5nIGFzIENvbG9yR3JhZGluZykgPSBtYWtlQ29sb3JHcmFkaW5nKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZpbGxSZXF1aXJlZENvbG9yR3JhZGluZyh2YWx1ZS5jb2xvckdyYWRpbmcpO1xyXG4gICAgfVxyXG4gICAgaWYgKCF2YWx1ZS5mc3IpIHtcclxuICAgICAgICAodmFsdWUuZnNyIGFzIEZTUikgPSBtYWtlRlNSKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZpbGxSZXF1aXJlZEZTUih2YWx1ZS5mc3IpO1xyXG4gICAgfVxyXG4gICAgaWYgKCF2YWx1ZS5meGFhKSB7XHJcbiAgICAgICAgKHZhbHVlLmZ4YWEgYXMgRlhBQSkgPSBtYWtlRlhBQSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmaWxsUmVxdWlyZWRGWEFBKHZhbHVlLmZ4YWEpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiBDb3B5cmlnaHQgKGMpIDIwMjEtMjAyNCBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cclxuXHJcbiBodHRwczovL3d3dy5jb2Nvcy5jb20vXHJcblxyXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG4gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0b1xyXG4gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXNcclxuIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcclxuIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cclxuIFRIRSBTT0ZUV0FSRS5cclxuKi9cclxuXHJcbmltcG9ydCB7IERFQlVHLCBFRElUT1IgfSBmcm9tICdjYy9lbnYnO1xyXG5pbXBvcnQge1xyXG4gICAgYXNzZXJ0LFxyXG4gICAgY2xhbXAsXHJcbiAgICBnZW9tZXRyeSxcclxuICAgIGdmeCxcclxuICAgIExheWVycyxcclxuICAgIE1hdGVyaWFsLFxyXG4gICAgcGlwZWxpbmUsXHJcbiAgICByZW5kZXJlcixcclxuICAgIHJlbmRlcmluZyxcclxuICAgIHN5cyxcclxuICAgIFZlYzIsXHJcbiAgICBWZWMzLFxyXG4gICAgVmVjNCxcclxuICAgIGNjbGVnYWN5LFxyXG4gICAgUGlwZWxpbmVFdmVudFR5cGUsXHJcbiAgICBQaXBlbGluZUV2ZW50UHJvY2Vzc29yLFxyXG4gICAgUmVmbGVjdGlvblByb2JlTWFuYWdlcixcclxuICAgIHdhcm4sXHJcbn0gZnJvbSAnY2MnO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIFBpcGVsaW5lU2V0dGluZ3MsXHJcbiAgICBtYWtlUGlwZWxpbmVTZXR0aW5ncyxcclxufSBmcm9tICcuL2J1aWx0aW4tcGlwZWxpbmUtdHlwZXMnO1xyXG5cclxuY29uc3QgeyBBQUJCLCBTcGhlcmUsIGludGVyc2VjdCB9ID0gZ2VvbWV0cnk7XHJcbmNvbnN0IHsgQ2xlYXJGbGFnQml0LCBDb2xvciwgRm9ybWF0LCBGb3JtYXRGZWF0dXJlQml0LCBMb2FkT3AsIFN0b3JlT3AsIFRleHR1cmVUeXBlLCBWaWV3cG9ydCB9ID0gZ2Z4O1xyXG5jb25zdCB7IHNjZW5lIH0gPSByZW5kZXJlcjtcclxuY29uc3QgeyBDYW1lcmFVc2FnZSwgQ1NNTGV2ZWwsIExpZ2h0VHlwZSB9ID0gc2NlbmU7XHJcblxyXG5mdW5jdGlvbiBmb3J3YXJkTmVlZENsZWFyQ29sb3IoY2FtZXJhOiByZW5kZXJlci5zY2VuZS5DYW1lcmEpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIShjYW1lcmEuY2xlYXJGbGFnICYgKENsZWFyRmxhZ0JpdC5DT0xPUiB8IChDbGVhckZsYWdCaXQuU1RFTkNJTCA8PCAxKSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDc21NYWluTGlnaHRWaWV3cG9ydChcclxuICAgIGxpZ2h0OiByZW5kZXJlci5zY2VuZS5EaXJlY3Rpb25hbExpZ2h0LFxyXG4gICAgdzogbnVtYmVyLFxyXG4gICAgaDogbnVtYmVyLFxyXG4gICAgbGV2ZWw6IG51bWJlcixcclxuICAgIHZwOiBnZnguVmlld3BvcnQsXHJcbiAgICBzY3JlZW5TcGFjZVNpZ25ZOiBudW1iZXIsXHJcbik6IHZvaWQge1xyXG4gICAgaWYgKGxpZ2h0LnNoYWRvd0ZpeGVkQXJlYSB8fCBsaWdodC5jc21MZXZlbCA9PT0gQ1NNTGV2ZWwuTEVWRUxfMSkge1xyXG4gICAgICAgIHZwLmxlZnQgPSAwO1xyXG4gICAgICAgIHZwLnRvcCA9IDA7XHJcbiAgICAgICAgdnAud2lkdGggPSBNYXRoLnRydW5jKHcpO1xyXG4gICAgICAgIHZwLmhlaWdodCA9IE1hdGgudHJ1bmMoaCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZwLmxlZnQgPSBNYXRoLnRydW5jKGxldmVsICUgMiAqIDAuNSAqIHcpO1xyXG4gICAgICAgIGlmIChzY3JlZW5TcGFjZVNpZ25ZID4gMCkge1xyXG4gICAgICAgICAgICB2cC50b3AgPSBNYXRoLnRydW5jKCgxIC0gTWF0aC5mbG9vcihsZXZlbCAvIDIpKSAqIDAuNSAqIGgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZwLnRvcCA9IE1hdGgudHJ1bmMoTWF0aC5mbG9vcihsZXZlbCAvIDIpICogMC41ICogaCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZwLndpZHRoID0gTWF0aC50cnVuYygwLjUgKiB3KTtcclxuICAgICAgICB2cC5oZWlnaHQgPSBNYXRoLnRydW5jKDAuNSAqIGgpO1xyXG4gICAgfVxyXG4gICAgdnAubGVmdCA9IE1hdGgubWF4KDAsIHZwLmxlZnQpO1xyXG4gICAgdnAudG9wID0gTWF0aC5tYXgoMCwgdnAudG9wKTtcclxuICAgIHZwLndpZHRoID0gTWF0aC5tYXgoMSwgdnAud2lkdGgpO1xyXG4gICAgdnAuaGVpZ2h0ID0gTWF0aC5tYXgoMSwgdnAuaGVpZ2h0KTtcclxufVxyXG5cclxuY2xhc3MgUGlwZWxpbmVDb25maWdzIHtcclxuICAgIGlzV2ViID0gZmFsc2U7XHJcbiAgICBpc1dlYkdMMSA9IGZhbHNlO1xyXG4gICAgaXNXZWJHUFUgPSBmYWxzZTtcclxuICAgIGlzTW9iaWxlID0gZmFsc2U7XHJcbiAgICBpc0hEUiA9IGZhbHNlO1xyXG4gICAgdXNlRmxvYXRPdXRwdXQgPSBmYWxzZTtcclxuICAgIHRvbmVNYXBwaW5nVHlwZSA9IDA7IC8vIDA6IEFDRVMsIDE6IE5vbmVcclxuICAgIHNoYWRvd0VuYWJsZWQgPSBmYWxzZTtcclxuICAgIHNoYWRvd01hcEZvcm1hdCA9IEZvcm1hdC5SMzJGO1xyXG4gICAgc2hhZG93TWFwU2l6ZSA9IG5ldyBWZWMyKDEsIDEpO1xyXG4gICAgdXNlUGxhbmFyU2hhZG93ID0gZmFsc2U7XHJcbiAgICBzY3JlZW5TcGFjZVNpZ25ZID0gMTtcclxuICAgIHN1cHBvcnREZXB0aFNhbXBsZSA9IGZhbHNlO1xyXG4gICAgbW9iaWxlTWF4U3BvdExpZ2h0U2hhZG93TWFwcyA9IDE7XHJcblxyXG4gICAgcGxhdGZvcm0gPSBuZXcgVmVjNCgwLCAwLCAwLCAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0dXBQaXBlbGluZUNvbmZpZ3MoXHJcbiAgICBwcGw6IHJlbmRlcmluZy5CYXNpY1BpcGVsaW5lLFxyXG4gICAgY29uZmlnczogUGlwZWxpbmVDb25maWdzLFxyXG4pOiB2b2lkIHtcclxuICAgIGNvbnN0IHNhbXBsZUZlYXR1cmUgPSBGb3JtYXRGZWF0dXJlQml0LlNBTVBMRURfVEVYVFVSRSB8IEZvcm1hdEZlYXR1cmVCaXQuTElORUFSX0ZJTFRFUjtcclxuICAgIGNvbnN0IGRldmljZSA9IHBwbC5kZXZpY2U7XHJcbiAgICAvLyBQbGF0Zm9ybVxyXG4gICAgY29uZmlncy5pc1dlYiA9ICFzeXMuaXNOYXRpdmU7XHJcbiAgICBjb25maWdzLmlzV2ViR0wxID0gZGV2aWNlLmdmeEFQSSA9PT0gZ2Z4LkFQSS5XRUJHTDtcclxuICAgIGNvbmZpZ3MuaXNXZWJHUFUgPSBkZXZpY2UuZ2Z4QVBJID09PSBnZnguQVBJLldFQkdQVTtcclxuICAgIGNvbmZpZ3MuaXNNb2JpbGUgPSBzeXMuaXNNb2JpbGU7XHJcblxyXG4gICAgLy8gUmVuZGVyaW5nXHJcbiAgICBjb25maWdzLmlzSERSID0gcHBsLnBpcGVsaW5lU2NlbmVEYXRhLmlzSERSOyAvLyBIYXMgdG9uZSBtYXBwaW5nXHJcbiAgICBjb25maWdzLnVzZUZsb2F0T3V0cHV0ID0gcHBsLmdldE1hY3JvQm9vbCgnQ0NfVVNFX0ZMT0FUX09VVFBVVCcpO1xyXG4gICAgY29uZmlncy50b25lTWFwcGluZ1R5cGUgPSBwcGwucGlwZWxpbmVTY2VuZURhdGEucG9zdFNldHRpbmdzLnRvbmVNYXBwaW5nVHlwZTtcclxuICAgIC8vIFNoYWRvd1xyXG4gICAgY29uc3Qgc2hhZG93SW5mbyA9IHBwbC5waXBlbGluZVNjZW5lRGF0YS5zaGFkb3dzO1xyXG4gICAgY29uZmlncy5zaGFkb3dFbmFibGVkID0gc2hhZG93SW5mby5lbmFibGVkO1xyXG4gICAgY29uZmlncy5zaGFkb3dNYXBGb3JtYXQgPSBwaXBlbGluZS5zdXBwb3J0c1IzMkZsb2F0VGV4dHVyZShwcGwuZGV2aWNlKSA/IEZvcm1hdC5SMzJGIDogRm9ybWF0LlJHQkE4O1xyXG4gICAgY29uZmlncy5zaGFkb3dNYXBTaXplLnNldChzaGFkb3dJbmZvLnNpemUpO1xyXG4gICAgY29uZmlncy51c2VQbGFuYXJTaGFkb3cgPSBzaGFkb3dJbmZvLmVuYWJsZWQgJiYgc2hhZG93SW5mby50eXBlID09PSByZW5kZXJlci5zY2VuZS5TaGFkb3dUeXBlLlBsYW5hcjtcclxuICAgIC8vIERldmljZVxyXG4gICAgY29uZmlncy5zY3JlZW5TcGFjZVNpZ25ZID0gcHBsLmRldmljZS5jYXBhYmlsaXRpZXMuc2NyZWVuU3BhY2VTaWduWTtcclxuICAgIGNvbmZpZ3Muc3VwcG9ydERlcHRoU2FtcGxlID0gKHBwbC5kZXZpY2UuZ2V0Rm9ybWF0RmVhdHVyZXMoRm9ybWF0LkRFUFRIX1NURU5DSUwpICYgc2FtcGxlRmVhdHVyZSkgPT09IHNhbXBsZUZlYXR1cmU7XHJcbiAgICAvLyBDb25zdGFudHNcclxuICAgIGNvbnN0IHNjcmVlblNwYWNlU2lnblkgPSBkZXZpY2UuY2FwYWJpbGl0aWVzLnNjcmVlblNwYWNlU2lnblk7XHJcbiAgICBjb25maWdzLnBsYXRmb3JtLnggPSBjb25maWdzLmlzTW9iaWxlID8gMS4wIDogMC4wO1xyXG4gICAgY29uZmlncy5wbGF0Zm9ybS53ID0gKHNjcmVlblNwYWNlU2lnblkgKiAwLjUgKyAwLjUpIDw8IDEgfCAoZGV2aWNlLmNhcGFiaWxpdGllcy5jbGlwU3BhY2VTaWduWSAqIDAuNSArIDAuNSk7XHJcbn1cclxuXHJcbmNvbnN0IGRlZmF1bHRTZXR0aW5ncyA9IG1ha2VQaXBlbGluZVNldHRpbmdzKCk7XHJcblxyXG5jbGFzcyBDYW1lcmFDb25maWdzIHtcclxuICAgIGNvbG9yTmFtZSA9ICcnO1xyXG4gICAgZGVwdGhTdGVuY2lsTmFtZSA9ICcnO1xyXG4gICAgZW5hYmxlTWFpbkxpZ2h0U2hhZG93TWFwID0gZmFsc2U7XHJcbiAgICBlbmFibGVNYWluTGlnaHRQbGFuYXJTaGFkb3dNYXAgPSBmYWxzZTtcclxuICAgIGVuYWJsZVBvc3RQcm9jZXNzID0gZmFsc2U7XHJcbiAgICBlbmFibGVQcm9maWxlciA9IGZhbHNlO1xyXG4gICAgZW5hYmxlU2hhZGluZ1NjYWxlID0gZmFsc2U7XHJcbiAgICBlbmFibGVNU0FBID0gZmFsc2U7XHJcbiAgICBlbmFibGVET0YgPSBmYWxzZTtcclxuICAgIGVuYWJsZUJsb29tID0gZmFsc2U7XHJcbiAgICBlbmFibGVDb2xvckdyYWRpbmcgPSBmYWxzZTtcclxuICAgIGVuYWJsZUZYQUEgPSBmYWxzZTtcclxuICAgIGVuYWJsZUZTUiA9IGZhbHNlO1xyXG4gICAgZW5hYmxlSERSID0gZmFsc2U7XHJcbiAgICBlbmFibGVQbGFuYXJSZWZsZWN0aW9uUHJvYmUgPSBmYWxzZTtcclxuICAgIHVzZUZ1bGxQaXBlbGluZSA9IGZhbHNlO1xyXG4gICAgc2luZ2xlRm9yd2FyZFJhZGlhbmNlUGFzcyA9IGZhbHNlO1xyXG4gICAgcmFkaWFuY2VGb3JtYXQgPSBnZnguRm9ybWF0LlJHQkE4O1xyXG4gICAgc2hhZGluZ1NjYWxlID0gMC41O1xyXG4gICAgc2V0dGluZ3M6IFBpcGVsaW5lU2V0dGluZ3MgPSBkZWZhdWx0U2V0dGluZ3M7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldHVwUG9zdFByb2Nlc3NDb25maWdzKFxyXG4gICAgcGlwZWxpbmVDb25maWdzOiBQaXBlbGluZUNvbmZpZ3MsXHJcbiAgICBzZXR0aW5nczogUGlwZWxpbmVTZXR0aW5ncyxcclxuICAgIGNhbWVyYUNvbmZpZ3M6IENhbWVyYUNvbmZpZ3MsXHJcbikge1xyXG4gICAgY2FtZXJhQ29uZmlncy5lbmFibGVET0YgPSBwaXBlbGluZUNvbmZpZ3Muc3VwcG9ydERlcHRoU2FtcGxlXHJcbiAgICAgICAgJiYgc2V0dGluZ3MuZGVwdGhPZkZpZWxkLmVuYWJsZWRcclxuICAgICAgICAmJiAhIXNldHRpbmdzLmRlcHRoT2ZGaWVsZC5tYXRlcmlhbDtcclxuXHJcbiAgICBjYW1lcmFDb25maWdzLmVuYWJsZUJsb29tID0gc2V0dGluZ3MuYmxvb20uZW5hYmxlZFxyXG4gICAgICAgICYmICEhc2V0dGluZ3MuYmxvb20ubWF0ZXJpYWw7XHJcblxyXG4gICAgY2FtZXJhQ29uZmlncy5lbmFibGVDb2xvckdyYWRpbmcgPSBzZXR0aW5ncy5jb2xvckdyYWRpbmcuZW5hYmxlZFxyXG4gICAgICAgICYmICEhc2V0dGluZ3MuY29sb3JHcmFkaW5nLm1hdGVyaWFsXHJcbiAgICAgICAgJiYgISFzZXR0aW5ncy5jb2xvckdyYWRpbmcuY29sb3JHcmFkaW5nTWFwO1xyXG5cclxuICAgIGNhbWVyYUNvbmZpZ3MuZW5hYmxlRlhBQSA9IHNldHRpbmdzLmZ4YWEuZW5hYmxlZFxyXG4gICAgICAgICYmICEhc2V0dGluZ3MuZnhhYS5tYXRlcmlhbDtcclxuXHJcbiAgICBjYW1lcmFDb25maWdzLmVuYWJsZVBvc3RQcm9jZXNzID0gKGNhbWVyYUNvbmZpZ3MuZW5hYmxlRE9GXHJcbiAgICAgICAgfHwgY2FtZXJhQ29uZmlncy5lbmFibGVCbG9vbVxyXG4gICAgICAgIHx8IGNhbWVyYUNvbmZpZ3MuZW5hYmxlQ29sb3JHcmFkaW5nXHJcbiAgICAgICAgfHwgY2FtZXJhQ29uZmlncy5lbmFibGVGWEFBKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0dXBDYW1lcmFDb25maWdzKFxyXG4gICAgY2FtZXJhOiByZW5kZXJlci5zY2VuZS5DYW1lcmEsXHJcbiAgICBwaXBlbGluZUNvbmZpZ3M6IFBpcGVsaW5lQ29uZmlncyxcclxuICAgIGNhbWVyYUNvbmZpZ3M6IENhbWVyYUNvbmZpZ3MsXHJcbik6IHZvaWQge1xyXG4gICAgY29uc3Qgd2luZG93ID0gY2FtZXJhLndpbmRvdztcclxuICAgIGNvbnN0IGlzTWFpbkdhbWVXaW5kb3c6IGJvb2xlYW4gPSBjYW1lcmEuY2FtZXJhVXNhZ2UgPT09IENhbWVyYVVzYWdlLkdBTUUgJiYgISF3aW5kb3cuc3dhcGNoYWluO1xyXG4gICAgY29uc3QgaXNFZGl0b3JWaWV3OiBib29sZWFuID0gY2FtZXJhLmNhbWVyYVVzYWdlID09PSBDYW1lcmFVc2FnZS5TQ0VORV9WSUVXIHx8IGNhbWVyYS5jYW1lcmFVc2FnZSA9PT0gQ2FtZXJhVXNhZ2UuUFJFVklFVztcclxuXHJcbiAgICBjYW1lcmFDb25maWdzLmNvbG9yTmFtZSA9IHdpbmRvdy5jb2xvck5hbWU7XHJcbiAgICBjYW1lcmFDb25maWdzLmRlcHRoU3RlbmNpbE5hbWUgPSB3aW5kb3cuZGVwdGhTdGVuY2lsTmFtZTtcclxuXHJcbiAgICBjYW1lcmFDb25maWdzLnVzZUZ1bGxQaXBlbGluZSA9IChjYW1lcmEudmlzaWJpbGl0eSAmIChMYXllcnMuRW51bS5ERUZBVUxUKSkgIT09IDA7XHJcblxyXG4gICAgY2FtZXJhQ29uZmlncy5lbmFibGVNYWluTGlnaHRTaGFkb3dNYXAgPSBwaXBlbGluZUNvbmZpZ3Muc2hhZG93RW5hYmxlZFxyXG4gICAgICAgICYmICFwaXBlbGluZUNvbmZpZ3MudXNlUGxhbmFyU2hhZG93XHJcbiAgICAgICAgJiYgISFjYW1lcmEuc2NlbmVcclxuICAgICAgICAmJiAhIWNhbWVyYS5zY2VuZS5tYWluTGlnaHRcclxuICAgICAgICAmJiBjYW1lcmEuc2NlbmUubWFpbkxpZ2h0LnNoYWRvd0VuYWJsZWQ7XHJcblxyXG4gICAgY2FtZXJhQ29uZmlncy5lbmFibGVNYWluTGlnaHRQbGFuYXJTaGFkb3dNYXAgPSBwaXBlbGluZUNvbmZpZ3Muc2hhZG93RW5hYmxlZFxyXG4gICAgICAgICYmIHBpcGVsaW5lQ29uZmlncy51c2VQbGFuYXJTaGFkb3dcclxuICAgICAgICAmJiAhIWNhbWVyYS5zY2VuZVxyXG4gICAgICAgICYmICEhY2FtZXJhLnNjZW5lLm1haW5MaWdodFxyXG4gICAgICAgICYmIGNhbWVyYS5zY2VuZS5tYWluTGlnaHQuc2hhZG93RW5hYmxlZDtcclxuXHJcbiAgICBjYW1lcmFDb25maWdzLmVuYWJsZVBsYW5hclJlZmxlY3Rpb25Qcm9iZSA9IGlzTWFpbkdhbWVXaW5kb3cgfHwgY2FtZXJhLmNhbWVyYVVzYWdlID09PSBDYW1lcmFVc2FnZS5TQ0VORV9WSUVXO1xyXG5cclxuICAgIGNhbWVyYUNvbmZpZ3MuZW5hYmxlUHJvZmlsZXIgPSBERUJVRyAmJiBpc01haW5HYW1lV2luZG93O1xyXG5cclxuICAgIGNhbWVyYUNvbmZpZ3Muc2V0dGluZ3MgPSBjYW1lcmEucGlwZWxpbmVTZXR0aW5nc1xyXG4gICAgICAgID8gY2FtZXJhLnBpcGVsaW5lU2V0dGluZ3MgYXMgUGlwZWxpbmVTZXR0aW5ncyA6IGRlZmF1bHRTZXR0aW5ncztcclxuXHJcbiAgICBzZXR1cFBvc3RQcm9jZXNzQ29uZmlncyhwaXBlbGluZUNvbmZpZ3MsIGNhbWVyYUNvbmZpZ3Muc2V0dGluZ3MsIGNhbWVyYUNvbmZpZ3MpO1xyXG5cclxuICAgIGlmIChpc0VkaXRvclZpZXcpIHtcclxuICAgICAgICBjb25zdCBlZGl0b3JTZXR0aW5ncyA9IHJlbmRlcmluZy5nZXRFZGl0b3JQaXBlbGluZVNldHRpbmdzKCkgYXMgUGlwZWxpbmVTZXR0aW5ncyB8IG51bGw7XHJcbiAgICAgICAgaWYgKGVkaXRvclNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgIGNhbWVyYUNvbmZpZ3Muc2V0dGluZ3MgPSBlZGl0b3JTZXR0aW5ncztcclxuICAgICAgICAgICAgc2V0dXBQb3N0UHJvY2Vzc0NvbmZpZ3MocGlwZWxpbmVDb25maWdzLFxyXG4gICAgICAgICAgICAgICAgY2FtZXJhQ29uZmlncy5zZXR0aW5ncywgY2FtZXJhQ29uZmlncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE1TQUFcclxuICAgIGNhbWVyYUNvbmZpZ3MuZW5hYmxlTVNBQSA9IGNhbWVyYUNvbmZpZ3Muc2V0dGluZ3MubXNhYS5lbmFibGVkXHJcbiAgICAgICAgJiYgIXBpcGVsaW5lQ29uZmlncy5pc1dlYiAvLyBUT0RPKHpob3V6aGVuZ2xvbmcpOiByZW1vdmUgdGhpcyBjb25zdHJhaW50XHJcbiAgICAgICAgJiYgIXBpcGVsaW5lQ29uZmlncy5pc1dlYkdMMTtcclxuXHJcbiAgICAvLyBTaGFkaW5nIHNjYWxlXHJcbiAgICBjYW1lcmFDb25maWdzLnNoYWRpbmdTY2FsZSA9IGNhbWVyYUNvbmZpZ3Muc2V0dGluZ3Muc2hhZGluZ1NjYWxlO1xyXG4gICAgY2FtZXJhQ29uZmlncy5lbmFibGVTaGFkaW5nU2NhbGUgPSBjYW1lcmFDb25maWdzLnNldHRpbmdzLmVuYWJsZVNoYWRpbmdTY2FsZVxyXG4gICAgICAgICYmIGNhbWVyYUNvbmZpZ3Muc2hhZGluZ1NjYWxlICE9PSAxLjA7XHJcblxyXG4gICAgLy8gRlNSIChEZXBlbmQgb24gU2hhZGluZyBzY2FsZSlcclxuICAgIGNhbWVyYUNvbmZpZ3MuZW5hYmxlRlNSID0gY2FtZXJhQ29uZmlncy5zZXR0aW5ncy5mc3IuZW5hYmxlZFxyXG4gICAgICAgICYmICEhY2FtZXJhQ29uZmlncy5zZXR0aW5ncy5mc3IubWF0ZXJpYWxcclxuICAgICAgICAmJiBjYW1lcmFDb25maWdzLmVuYWJsZVNoYWRpbmdTY2FsZVxyXG4gICAgICAgICYmIGNhbWVyYUNvbmZpZ3Muc2hhZGluZ1NjYWxlIDwgMS4wO1xyXG5cclxuICAgIC8vIEZvcndhcmQgcmVuZGVyaW5nIChEZXBlbmQgb24gTVNBQSBhbmQgVEJSKVxyXG4gICAgY2FtZXJhQ29uZmlncy5zaW5nbGVGb3J3YXJkUmFkaWFuY2VQYXNzXHJcbiAgICAgICAgPSBwaXBlbGluZUNvbmZpZ3MuaXNNb2JpbGUgfHwgY2FtZXJhQ29uZmlncy5lbmFibGVNU0FBO1xyXG5cclxuICAgIGNhbWVyYUNvbmZpZ3MuZW5hYmxlSERSID0gY2FtZXJhQ29uZmlncy51c2VGdWxsUGlwZWxpbmVcclxuICAgICAgICAmJiBwaXBlbGluZUNvbmZpZ3MudXNlRmxvYXRPdXRwdXQ7XHJcblxyXG4gICAgY2FtZXJhQ29uZmlncy5yYWRpYW5jZUZvcm1hdCA9IGNhbWVyYUNvbmZpZ3MuZW5hYmxlSERSXHJcbiAgICAgICAgPyBnZnguRm9ybWF0LlJHQkExNkYgOiBnZnguRm9ybWF0LlJHQkE4O1xyXG59XHJcblxyXG5pZiAocmVuZGVyaW5nKSB7XHJcblxyXG4gICAgY29uc3QgeyBRdWV1ZUhpbnQsIFNjZW5lRmxhZ3MsIFJlc291cmNlRmxhZ3MsIFJlc291cmNlUmVzaWRlbmN5IH0gPSByZW5kZXJpbmc7XHJcblxyXG4gICAgY2xhc3MgRm9yd2FyZExpZ2h0aW5nIHtcclxuICAgICAgICAvLyBBY3RpdmUgbGlnaHRzXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBsaWdodHM6IHJlbmRlcmVyLnNjZW5lLkxpZ2h0W10gPSBbXTtcclxuICAgICAgICAvLyBBY3RpdmUgc3BvdCBsaWdodHMgd2l0aCBzaGFkb3dzIChNdXR1YWxseSBleGNsdXNpdmUgd2l0aCBgbGlnaHRzYClcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHNoYWRvd0VuYWJsZWRTcG90TGlnaHRzOiByZW5kZXJlci5zY2VuZS5TcG90TGlnaHRbXSA9IFtdO1xyXG5cclxuICAgICAgICAvLyBJbnRlcm5hbCBjYWNoZWQgcmVzb3VyY2VzXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfc3BoZXJlID0gU3BoZXJlLmNyZWF0ZSgwLCAwLCAwLCAxKTtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9ib3VuZGluZ0JveCA9IG5ldyBBQUJCKCk7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfcmFuZ2VkRGlyTGlnaHRCb3VuZGluZ0JveCA9IG5ldyBBQUJCKDAuMCwgMC4wLCAwLjAsIDAuNSwgMC41LCAwLjUpO1xyXG5cclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gSW50ZXJmYWNlXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIHB1YmxpYyBjdWxsTGlnaHRzKHNjZW5lOiByZW5kZXJlci5SZW5kZXJTY2VuZSwgZnJ1c3R1bTogZ2VvbWV0cnkuRnJ1c3R1bSwgY2FtZXJhUG9zPzogVmVjMyk6IHZvaWQge1xyXG4gICAgICAgICAgICAvLyBUT0RPKHpob3V6aGVuZ2xvbmcpOiBNYWtlIGxpZ2h0IGN1bGxpbmcgbmF0aXZlXHJcbiAgICAgICAgICAgIHRoaXMubGlnaHRzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuc2hhZG93RW5hYmxlZFNwb3RMaWdodHMubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgLy8gc3BvdCBsaWdodHNcclxuICAgICAgICAgICAgZm9yIChjb25zdCBsaWdodCBvZiBzY2VuZS5zcG90TGlnaHRzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobGlnaHQuYmFrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFNwaGVyZS5zZXQodGhpcy5fc3BoZXJlLCBsaWdodC5wb3NpdGlvbi54LCBsaWdodC5wb3NpdGlvbi55LCBsaWdodC5wb3NpdGlvbi56LCBsaWdodC5yYW5nZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW50ZXJzZWN0LnNwaGVyZUZydXN0dW0odGhpcy5fc3BoZXJlLCBmcnVzdHVtKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsaWdodC5zaGFkb3dFbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hhZG93RW5hYmxlZFNwb3RMaWdodHMucHVzaChsaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saWdodHMucHVzaChsaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHNwaGVyZSBsaWdodHNcclxuICAgICAgICAgICAgZm9yIChjb25zdCBsaWdodCBvZiBzY2VuZS5zcGhlcmVMaWdodHMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChsaWdodC5iYWtlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgU3BoZXJlLnNldCh0aGlzLl9zcGhlcmUsIGxpZ2h0LnBvc2l0aW9uLngsIGxpZ2h0LnBvc2l0aW9uLnksIGxpZ2h0LnBvc2l0aW9uLnosIGxpZ2h0LnJhbmdlKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbnRlcnNlY3Quc3BoZXJlRnJ1c3R1bSh0aGlzLl9zcGhlcmUsIGZydXN0dW0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saWdodHMucHVzaChsaWdodCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gcG9pbnQgbGlnaHRzXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbGlnaHQgb2Ygc2NlbmUucG9pbnRMaWdodHMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChsaWdodC5iYWtlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgU3BoZXJlLnNldCh0aGlzLl9zcGhlcmUsIGxpZ2h0LnBvc2l0aW9uLngsIGxpZ2h0LnBvc2l0aW9uLnksIGxpZ2h0LnBvc2l0aW9uLnosIGxpZ2h0LnJhbmdlKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbnRlcnNlY3Quc3BoZXJlRnJ1c3R1bSh0aGlzLl9zcGhlcmUsIGZydXN0dW0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saWdodHMucHVzaChsaWdodCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gcmFuZ2VkIGRpciBsaWdodHNcclxuICAgICAgICAgICAgZm9yIChjb25zdCBsaWdodCBvZiBzY2VuZS5yYW5nZWREaXJMaWdodHMpIHtcclxuICAgICAgICAgICAgICAgIEFBQkIudHJhbnNmb3JtKHRoaXMuX2JvdW5kaW5nQm94LCB0aGlzLl9yYW5nZWREaXJMaWdodEJvdW5kaW5nQm94LCBsaWdodC5ub2RlIS5nZXRXb3JsZE1hdHJpeCgpKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbnRlcnNlY3QuYWFiYkZydXN0dW0odGhpcy5fYm91bmRpbmdCb3gsIGZydXN0dW0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saWdodHMucHVzaChsaWdodCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjYW1lcmFQb3MpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhZG93RW5hYmxlZFNwb3RMaWdodHMuc29ydChcclxuICAgICAgICAgICAgICAgICAgICAobGhzLCByaHMpID0+IFZlYzMuc3F1YXJlZERpc3RhbmNlKGNhbWVyYVBvcywgbGhzLnBvc2l0aW9uKSAtIFZlYzMuc3F1YXJlZERpc3RhbmNlKGNhbWVyYVBvcywgcmhzLnBvc2l0aW9uKSxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcHJpdmF0ZSBfYWRkTGlnaHRRdWV1ZXMoY2FtZXJhOiByZW5kZXJlci5zY2VuZS5DYW1lcmEsIHBhc3M6IHJlbmRlcmluZy5CYXNpY1JlbmRlclBhc3NCdWlsZGVyKTogdm9pZCB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbGlnaHQgb2YgdGhpcy5saWdodHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXVlID0gcGFzcy5hZGRRdWV1ZShRdWV1ZUhpbnQuQkxFTkQsICdmb3J3YXJkLWFkZCcpO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChsaWdodC50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBMaWdodFR5cGUuU1BIRVJFOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWV1ZS5uYW1lID0gJ3NwaGVyZS1saWdodCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTGlnaHRUeXBlLlNQT1Q6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXVlLm5hbWUgPSAnc3BvdC1saWdodCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTGlnaHRUeXBlLlBPSU5UOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWV1ZS5uYW1lID0gJ3BvaW50LWxpZ2h0JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBMaWdodFR5cGUuUkFOR0VEX0RJUkVDVElPTkFMOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWV1ZS5uYW1lID0gJ3JhbmdlZC1kaXJlY3Rpb25hbC1saWdodCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXVlLm5hbWUgPSAndW5rbm93bi1saWdodCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBxdWV1ZS5hZGRTY2VuZShcclxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEsXHJcbiAgICAgICAgICAgICAgICAgICAgU2NlbmVGbGFncy5CTEVORCxcclxuICAgICAgICAgICAgICAgICAgICBsaWdodCxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIGFkZFNwb3RsaWdodFNoYWRvd1Bhc3NlcyhcclxuICAgICAgICAgICAgcHBsOiByZW5kZXJpbmcuQmFzaWNQaXBlbGluZSxcclxuICAgICAgICAgICAgY2FtZXJhOiByZW5kZXJlci5zY2VuZS5DYW1lcmEsXHJcbiAgICAgICAgICAgIG1heE51bVNoYWRvd01hcHM6IG51bWJlcixcclxuICAgICAgICApOiB2b2lkIHtcclxuICAgICAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGxpZ2h0IG9mIHRoaXMuc2hhZG93RW5hYmxlZFNwb3RMaWdodHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNoYWRvd01hcFNpemUgPSBwcGwucGlwZWxpbmVTY2VuZURhdGEuc2hhZG93cy5zaXplO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hhZG93UGFzcyA9IHBwbC5hZGRSZW5kZXJQYXNzKHNoYWRvd01hcFNpemUueCwgc2hhZG93TWFwU2l6ZS55LCAnZGVmYXVsdCcpO1xyXG4gICAgICAgICAgICAgICAgc2hhZG93UGFzcy5uYW1lID0gYFNwb3RMaWdodFNoYWRvd1Bhc3Mke2l9YDtcclxuICAgICAgICAgICAgICAgIHNoYWRvd1Bhc3MuYWRkUmVuZGVyVGFyZ2V0KGBTcG90U2hhZG93TWFwJHtpfWAsIExvYWRPcC5DTEVBUiwgU3RvcmVPcC5TVE9SRSwgbmV3IENvbG9yKDEsIDEsIDEsIDEpKTtcclxuICAgICAgICAgICAgICAgIHNoYWRvd1Bhc3MuYWRkRGVwdGhTdGVuY2lsKGBTcG90U2hhZG93RGVwdGgke2l9YCwgTG9hZE9wLkNMRUFSLCBTdG9yZU9wLkRJU0NBUkQpO1xyXG4gICAgICAgICAgICAgICAgc2hhZG93UGFzcy5hZGRRdWV1ZShRdWV1ZUhpbnQuTk9ORSwgJ3NoYWRvdy1jYXN0ZXInKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRTY2VuZShjYW1lcmEsIFNjZW5lRmxhZ3MuT1BBUVVFIHwgU2NlbmVGbGFncy5NQVNLIHwgU2NlbmVGbGFncy5TSEFET1dfQ0FTVEVSKVxyXG4gICAgICAgICAgICAgICAgICAgIC51c2VMaWdodEZydXN0dW0obGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgKytpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPj0gbWF4TnVtU2hhZG93TWFwcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBhZGRMaWdodFF1ZXVlcyhwYXNzOiByZW5kZXJpbmcuQmFzaWNSZW5kZXJQYXNzQnVpbGRlcixcclxuICAgICAgICAgICAgY2FtZXJhOiByZW5kZXJlci5zY2VuZS5DYW1lcmEsIG1heE51bVNoYWRvd01hcHM6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgICAgICB0aGlzLl9hZGRMaWdodFF1ZXVlcyhjYW1lcmEsIHBhc3MpO1xyXG4gICAgICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbGlnaHQgb2YgdGhpcy5zaGFkb3dFbmFibGVkU3BvdExpZ2h0cykge1xyXG4gICAgICAgICAgICAgICAgLy8gQWRkIHNwb3QtbGlnaHQgcGFzc1xyXG4gICAgICAgICAgICAgICAgLy8gU2F2ZSBsYXN0IFJlbmRlclBhc3MgdG8gdGhlIGBwYXNzYCB2YXJpYWJsZVxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETyh6aG91emhlbmdsb25nKTogRml4IHBlciBxdWV1ZSBhZGRUZXh0dXJlXHJcbiAgICAgICAgICAgICAgICBwYXNzLmFkZFRleHR1cmUoYFNwb3RTaGFkb3dNYXAke2l9YCwgJ2NjX3Nwb3RTaGFkb3dNYXAnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXVlID0gcGFzcy5hZGRRdWV1ZShRdWV1ZUhpbnQuQkxFTkQsICdmb3J3YXJkLWFkZCcpO1xyXG4gICAgICAgICAgICAgICAgcXVldWUuYWRkU2NlbmUoY2FtZXJhLCBTY2VuZUZsYWdzLkJMRU5ELCBsaWdodCk7XHJcbiAgICAgICAgICAgICAgICArK2k7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA+PSBtYXhOdW1TaGFkb3dNYXBzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE5vdGljZTogRm9yd2FyZExpZ2h0aW5nIGNhbm5vdCBoYW5kbGUgYSBsb3Qgb2YgbGlnaHRzLlxyXG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSB0b28gbWFueSBsaWdodHMsIHRoZSBwZXJmb3JtYW5jZSB3aWxsIGJlIHZlcnkgcG9vci5cclxuICAgICAgICAvLyBJZiBtYW55IGxpZ2h0cyBhcmUgbmVlZGVkLCBwbGVhc2UgaW1wbGVtZW50IGEgZm9yd2FyZCsgb3IgZGVmZXJyZWQgcmVuZGVyaW5nIHBpcGVsaW5lLlxyXG4gICAgICAgIHB1YmxpYyBhZGRMaWdodFBhc3NlcyhcclxuICAgICAgICAgICAgY29sb3JOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIGRlcHRoU3RlbmNpbE5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgZGVwdGhTdGVuY2lsU3RvcmVPcDogZ2Z4LlN0b3JlT3AsXHJcbiAgICAgICAgICAgIGlkOiBudW1iZXIsIC8vIHdpbmRvdyBpZFxyXG4gICAgICAgICAgICB3aWR0aDogbnVtYmVyLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IG51bWJlcixcclxuICAgICAgICAgICAgY2FtZXJhOiByZW5kZXJlci5zY2VuZS5DYW1lcmEsXHJcbiAgICAgICAgICAgIHZpZXdwb3J0OiBnZnguVmlld3BvcnQsXHJcbiAgICAgICAgICAgIHBwbDogcmVuZGVyaW5nLkJhc2ljUGlwZWxpbmUsXHJcbiAgICAgICAgICAgIHBhc3M6IHJlbmRlcmluZy5CYXNpY1JlbmRlclBhc3NCdWlsZGVyLFxyXG4gICAgICAgICk6IHJlbmRlcmluZy5CYXNpY1JlbmRlclBhc3NCdWlsZGVyIHtcclxuICAgICAgICAgICAgdGhpcy5fYWRkTGlnaHRRdWV1ZXMoY2FtZXJhLCBwYXNzKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IHNoYWRvd01hcFNpemUgPSBwcGwucGlwZWxpbmVTY2VuZURhdGEuc2hhZG93cy5zaXplO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGxpZ2h0IG9mIHRoaXMuc2hhZG93RW5hYmxlZFNwb3RMaWdodHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNoYWRvd1Bhc3MgPSBwcGwuYWRkUmVuZGVyUGFzcyhzaGFkb3dNYXBTaXplLngsIHNoYWRvd01hcFNpemUueSwgJ2RlZmF1bHQnKTtcclxuICAgICAgICAgICAgICAgIHNoYWRvd1Bhc3MubmFtZSA9ICdTcG90bGlnaHRTaGFkb3dQYXNzJztcclxuICAgICAgICAgICAgICAgIC8vIFJldXNlIGNzbSBzaGFkb3cgbWFwXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dQYXNzLmFkZFJlbmRlclRhcmdldChgU2hhZG93TWFwJHtpZH1gLCBMb2FkT3AuQ0xFQVIsIFN0b3JlT3AuU1RPUkUsIG5ldyBDb2xvcigxLCAxLCAxLCAxKSk7XHJcbiAgICAgICAgICAgICAgICBzaGFkb3dQYXNzLmFkZERlcHRoU3RlbmNpbChgU2hhZG93RGVwdGgke2lkfWAsIExvYWRPcC5DTEVBUiwgU3RvcmVPcC5ESVNDQVJEKTtcclxuICAgICAgICAgICAgICAgIHNoYWRvd1Bhc3MuYWRkUXVldWUoUXVldWVIaW50Lk5PTkUsICdzaGFkb3ctY2FzdGVyJylcclxuICAgICAgICAgICAgICAgICAgICAuYWRkU2NlbmUoY2FtZXJhLCBTY2VuZUZsYWdzLk9QQVFVRSB8IFNjZW5lRmxhZ3MuTUFTSyB8IFNjZW5lRmxhZ3MuU0hBRE9XX0NBU1RFUilcclxuICAgICAgICAgICAgICAgICAgICAudXNlTGlnaHRGcnVzdHVtKGxpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBBZGQgc3BvdC1saWdodCBwYXNzXHJcbiAgICAgICAgICAgICAgICAvLyBTYXZlIGxhc3QgUmVuZGVyUGFzcyB0byB0aGUgYHBhc3NgIHZhcmlhYmxlXHJcbiAgICAgICAgICAgICAgICArK2NvdW50O1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RvcmVPcCA9IGNvdW50ID09PSB0aGlzLnNoYWRvd0VuYWJsZWRTcG90TGlnaHRzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgID8gZGVwdGhTdGVuY2lsU3RvcmVPcFxyXG4gICAgICAgICAgICAgICAgICAgIDogU3RvcmVPcC5TVE9SRTtcclxuXHJcbiAgICAgICAgICAgICAgICBwYXNzID0gcHBsLmFkZFJlbmRlclBhc3Mod2lkdGgsIGhlaWdodCwgJ2RlZmF1bHQnKTtcclxuICAgICAgICAgICAgICAgIHBhc3MubmFtZSA9ICdTcG90bGlnaHRXaXRoU2hhZG93TWFwJztcclxuICAgICAgICAgICAgICAgIHBhc3Muc2V0Vmlld3BvcnQodmlld3BvcnQpO1xyXG4gICAgICAgICAgICAgICAgcGFzcy5hZGRSZW5kZXJUYXJnZXQoY29sb3JOYW1lLCBMb2FkT3AuTE9BRCk7XHJcbiAgICAgICAgICAgICAgICBwYXNzLmFkZERlcHRoU3RlbmNpbChkZXB0aFN0ZW5jaWxOYW1lLCBMb2FkT3AuTE9BRCwgc3RvcmVPcCk7XHJcbiAgICAgICAgICAgICAgICBwYXNzLmFkZFRleHR1cmUoYFNoYWRvd01hcCR7aWR9YCwgJ2NjX3Nwb3RTaGFkb3dNYXAnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXVlID0gcGFzcy5hZGRRdWV1ZShRdWV1ZUhpbnQuQkxFTkQsICdmb3J3YXJkLWFkZCcpO1xyXG4gICAgICAgICAgICAgICAgcXVldWUuYWRkU2NlbmUoXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLFxyXG4gICAgICAgICAgICAgICAgICAgIFNjZW5lRmxhZ3MuQkxFTkQsXHJcbiAgICAgICAgICAgICAgICAgICAgbGlnaHQsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBwYXNzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGlzTXVsdGlwbGVMaWdodFBhc3Nlc05lZWRlZCgpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hhZG93RW5hYmxlZFNwb3RMaWdodHMubGVuZ3RoID4gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3MgQnVpbHRpblBpcGVsaW5lQnVpbGRlciBpbXBsZW1lbnRzIHJlbmRlcmluZy5QaXBlbGluZUJ1aWxkZXIge1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX3BpcGVsaW5lRXZlbnQ6IFBpcGVsaW5lRXZlbnRQcm9jZXNzb3IgPSBjY2xlZ2FjeS5kaXJlY3Rvci5yb290LnBpcGVsaW5lRXZlbnQgYXMgUGlwZWxpbmVFdmVudFByb2Nlc3NvcjtcclxuICAgICAgICAvLyBJbnRlcm5hbCBjYWNoZWQgcmVzb3VyY2VzXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfY2xlYXJDb2xvciA9IG5ldyBDb2xvcigwLCAwLCAwLCAxKTtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9jbGVhckNvbG9yVHJhbnNwYXJlbnRCbGFjayA9IG5ldyBDb2xvcigwLCAwLCAwLCAwKTtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9yZWZsZWN0aW9uUHJvYmVDbGVhckNvbG9yID0gbmV3IFZlYzMoMCwgMCwgMCk7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfdmlld3BvcnQgPSBuZXcgVmlld3BvcnQoKTtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9jb25maWdzID0gbmV3IFBpcGVsaW5lQ29uZmlncygpO1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2NhbWVyYUNvbmZpZ3MgPSBuZXcgQ2FtZXJhQ29uZmlncygpO1xyXG4gICAgICAgIC8vIERlcHRoT2ZGaWVsZFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2NvY1BhcmFtcyA9IG5ldyBWZWM0KDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2NvY1RleFNpemUgPSBuZXcgVmVjNCgwLCAwLCAwLCAwKTtcclxuICAgICAgICAvLyBCbG9vbVxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2Jsb29tUGFyYW1zID0gbmV3IFZlYzQoMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfYmxvb21UZXhTaXplID0gbmV3IFZlYzQoMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfYmxvb21XaWR0aHM6IEFycmF5PG51bWJlcj4gPSBbXTtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9ibG9vbUhlaWdodHM6IEFycmF5PG51bWJlcj4gPSBbXTtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9ibG9vbVRleE5hbWVzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgICAgICAgLy8gQ29sb3IgR3JhZGluZ1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2NvbG9yR3JhZGluZ1RleFNpemUgPSBuZXcgVmVjMigwLCAwKTtcclxuICAgICAgICAvLyBGWEFBXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfZnhhYVBhcmFtcyA9IG5ldyBWZWM0KDAsIDAsIDAsIDApO1xyXG4gICAgICAgIC8vIEZTUlxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2ZzclBhcmFtcyA9IG5ldyBWZWM0KDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2ZzclRleFNpemUgPSBuZXcgVmVjNCgwLCAwLCAwLCAwKTtcclxuICAgICAgICAvLyBNYXRlcmlhbHNcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9jb3B5QW5kVG9uZW1hcE1hdGVyaWFsID0gbmV3IE1hdGVyaWFsKCk7XHJcblxyXG4gICAgICAgIC8vIEludGVybmFsIFN0YXRlc1xyXG4gICAgICAgIHByaXZhdGUgX2luaXRpYWxpemVkID0gZmFsc2U7IC8vIFRPRE8oemhvdXpoZW5nbG9uZyk6IE1ha2UgZGVmYXVsdCBlZmZlY3QgYXNzZXQgbG9hZGluZyBlYXJsaWVyIGFuZCByZW1vdmUgdGhpcyBmbGFnXHJcblxyXG4gICAgICAgIC8vIEZvcndhcmQgbGlnaHRpbmdcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGZvcndhcmRMaWdodGluZyA9IG5ldyBGb3J3YXJkTGlnaHRpbmcoKTtcclxuXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIEludGVyZmFjZVxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICB3aW5kb3dSZXNpemUoXHJcbiAgICAgICAgICAgIHBwbDogcmVuZGVyaW5nLkJhc2ljUGlwZWxpbmUsXHJcbiAgICAgICAgICAgIHdpbmRvdzogcmVuZGVyZXIuUmVuZGVyV2luZG93LFxyXG4gICAgICAgICAgICBjYW1lcmE6IHJlbmRlcmVyLnNjZW5lLkNhbWVyYSxcclxuICAgICAgICAgICAgbmF0aXZlV2lkdGg6IG51bWJlcixcclxuICAgICAgICAgICAgbmF0aXZlSGVpZ2h0OiBudW1iZXIsXHJcbiAgICAgICAgKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHNldHVwUGlwZWxpbmVDb25maWdzKHBwbCwgdGhpcy5fY29uZmlncyk7XHJcbiAgICAgICAgICAgIHNldHVwQ2FtZXJhQ29uZmlncyhjYW1lcmEsIHRoaXMuX2NvbmZpZ3MsIHRoaXMuX2NhbWVyYUNvbmZpZ3MpO1xyXG4gICAgICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMuX2NhbWVyYUNvbmZpZ3Muc2V0dGluZ3M7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gd2luZG93LnJlbmRlcldpbmRvd0lkO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLl9jYW1lcmFDb25maWdzLmVuYWJsZVNoYWRpbmdTY2FsZVxyXG4gICAgICAgICAgICAgICAgPyBNYXRoLm1heChNYXRoLmZsb29yKG5hdGl2ZVdpZHRoICogdGhpcy5fY2FtZXJhQ29uZmlncy5zaGFkaW5nU2NhbGUpLCAxKVxyXG4gICAgICAgICAgICAgICAgOiBuYXRpdmVXaWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5fY2FtZXJhQ29uZmlncy5lbmFibGVTaGFkaW5nU2NhbGVcclxuICAgICAgICAgICAgICAgID8gTWF0aC5tYXgoTWF0aC5mbG9vcihuYXRpdmVIZWlnaHQgKiB0aGlzLl9jYW1lcmFDb25maWdzLnNoYWRpbmdTY2FsZSksIDEpXHJcbiAgICAgICAgICAgICAgICA6IG5hdGl2ZUhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlbmRlciBXaW5kb3cgKFVJKVxyXG4gICAgICAgICAgICBwcGwuYWRkUmVuZGVyV2luZG93KHRoaXMuX2NhbWVyYUNvbmZpZ3MuY29sb3JOYW1lLFxyXG4gICAgICAgICAgICAgICAgRm9ybWF0LlJHQkE4LCBuYXRpdmVXaWR0aCwgbmF0aXZlSGVpZ2h0LCB3aW5kb3csXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW1lcmFDb25maWdzLmRlcHRoU3RlbmNpbE5hbWUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NhbWVyYUNvbmZpZ3MuZW5hYmxlU2hhZGluZ1NjYWxlKSB7XHJcbiAgICAgICAgICAgICAgICBwcGwuYWRkRGVwdGhTdGVuY2lsKGBTY2FsZWRTY2VuZURlcHRoJHtpZH1gLCBGb3JtYXQuREVQVEhfU1RFTkNJTCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICBwcGwuYWRkUmVuZGVyVGFyZ2V0KGBTY2FsZWRSYWRpYW5jZSR7aWR9YCwgdGhpcy5fY2FtZXJhQ29uZmlncy5yYWRpYW5jZUZvcm1hdCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICBwcGwuYWRkUmVuZGVyVGFyZ2V0KGBTY2FsZWRMZHJDb2xvciR7aWR9YCwgRm9ybWF0LlJHQkE4LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBwbC5hZGREZXB0aFN0ZW5jaWwoYFNjZW5lRGVwdGgke2lkfWAsIEZvcm1hdC5ERVBUSF9TVEVOQ0lMLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIHBwbC5hZGRSZW5kZXJUYXJnZXQoYFJhZGlhbmNlJHtpZH1gLCB0aGlzLl9jYW1lcmFDb25maWdzLnJhZGlhbmNlRm9ybWF0LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIHBwbC5hZGRSZW5kZXJUYXJnZXQoYExkckNvbG9yJHtpZH1gLCBGb3JtYXQuUkdCQTgsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fY2FtZXJhQ29uZmlncy5lbmFibGVGU1IpIHtcclxuICAgICAgICAgICAgICAgIHBwbC5hZGRSZW5kZXJUYXJnZXQoYEZzckNvbG9yJHtpZH1gLCBGb3JtYXQuUkdCQTgsIG5hdGl2ZVdpZHRoLCBuYXRpdmVIZWlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBNc2FhUmFkaWFuY2VcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NhbWVyYUNvbmZpZ3MuZW5hYmxlTVNBQSkge1xyXG4gICAgICAgICAgICAgICAgLy8gTm90aWNlOiBXZSBuZXZlciBzdG9yZSBtdWx0aXNhbXBsZSByZXN1bHRzLlxyXG4gICAgICAgICAgICAgICAgLy8gVGhlc2Ugc2FtcGxlcyBhcmUgYWx3YXlzIHJlc29sdmVkIGFuZCBkaXNjYXJkZWQgYXQgdGhlIGVuZCBvZiB0aGUgcmVuZGVyIHBhc3MuXHJcbiAgICAgICAgICAgICAgICAvLyBTbyB0aGUgUmVzb3VyY2VSZXNpZGVuY3kgc2hvdWxkIGJlIE1FTU9SWUxFU1MuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY2FtZXJhQ29uZmlncy5lbmFibGVIRFIpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcGwuYWRkVGV4dHVyZShgTXNhYVJhZGlhbmNlJHtpZH1gLCBUZXh0dXJlVHlwZS5URVgyRCwgdGhpcy5fY2FtZXJhQ29uZmlncy5yYWRpYW5jZUZvcm1hdCwgd2lkdGgsIGhlaWdodCwgMSwgMSwgMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MubXNhYS5zYW1wbGVDb3VudCwgUmVzb3VyY2VGbGFncy5DT0xPUl9BVFRBQ0hNRU5ULCBSZXNvdXJjZVJlc2lkZW5jeS5NRU1PUllMRVNTKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHBsLmFkZFRleHR1cmUoYE1zYWFSYWRpYW5jZSR7aWR9YCwgVGV4dHVyZVR5cGUuVEVYMkQsIEZvcm1hdC5SR0JBOCwgd2lkdGgsIGhlaWdodCwgMSwgMSwgMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MubXNhYS5zYW1wbGVDb3VudCwgUmVzb3VyY2VGbGFncy5DT0xPUl9BVFRBQ0hNRU5ULCBSZXNvdXJjZVJlc2lkZW5jeS5NRU1PUllMRVNTKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBwbC5hZGRUZXh0dXJlKGBNc2FhRGVwdGhTdGVuY2lsJHtpZH1gLCBUZXh0dXJlVHlwZS5URVgyRCwgRm9ybWF0LkRFUFRIX1NURU5DSUwsIHdpZHRoLCBoZWlnaHQsIDEsIDEsIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MubXNhYS5zYW1wbGVDb3VudCwgUmVzb3VyY2VGbGFncy5ERVBUSF9TVEVOQ0lMX0FUVEFDSE1FTlQsIFJlc291cmNlUmVzaWRlbmN5Lk1FTU9SWUxFU1MpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBNYWlubGlnaHQgU2hhZG93TWFwXHJcbiAgICAgICAgICAgIHBwbC5hZGRSZW5kZXJUYXJnZXQoXHJcbiAgICAgICAgICAgICAgICBgU2hhZG93TWFwJHtpZH1gLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29uZmlncy5zaGFkb3dNYXBGb3JtYXQsXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25maWdzLnNoYWRvd01hcFNpemUueCxcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbmZpZ3Muc2hhZG93TWFwU2l6ZS55LFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBwcGwuYWRkRGVwdGhTdGVuY2lsKFxyXG4gICAgICAgICAgICAgICAgYFNoYWRvd0RlcHRoJHtpZH1gLFxyXG4gICAgICAgICAgICAgICAgRm9ybWF0LkRFUFRIX1NURU5DSUwsXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25maWdzLnNoYWRvd01hcFNpemUueCxcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbmZpZ3Muc2hhZG93TWFwU2l6ZS55LFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgLy8gU3BvdC1saWdodCBzaGFkb3cgbWFwc1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fY2FtZXJhQ29uZmlncy5zaW5nbGVGb3J3YXJkUmFkaWFuY2VQYXNzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb3VudCA9IHRoaXMuX2NvbmZpZ3MubW9iaWxlTWF4U3BvdExpZ2h0U2hhZG93TWFwcztcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpICE9PSBjb3VudDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHBsLmFkZFJlbmRlclRhcmdldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgYFNwb3RTaGFkb3dNYXAke2l9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29uZmlncy5zaGFkb3dNYXBGb3JtYXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbmZpZ3Muc2hhZG93TWFwU2l6ZS54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb25maWdzLnNoYWRvd01hcFNpemUueSxcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHBwbC5hZGREZXB0aFN0ZW5jaWwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBTcG90U2hhZG93RGVwdGgke2l9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgRm9ybWF0LkRFUFRIX1NURU5DSUwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbmZpZ3Muc2hhZG93TWFwU2l6ZS54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb25maWdzLnNoYWRvd01hcFNpemUueSxcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgLy8gUG9zdCBQcm9jZXNzXHJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAvLyBEZXB0aE9mRmllbGRcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NhbWVyYUNvbmZpZ3MuZW5hYmxlRE9GKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoYWxmV2lkdGggPSBNYXRoLm1heChNYXRoLmZsb29yKHdpZHRoIC8gMiksIDEpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGFsZkhlaWdodCA9IE1hdGgubWF4KE1hdGguZmxvb3IoaGVpZ2h0IC8gMiksIDEpO1xyXG4gICAgICAgICAgICAgICAgLy8gYERvZkNvYyR7aWR9YCB0ZXh0dXJlIHdpbGwgcmV1c2UgbGRyQ29sb3JOYW1lXHJcbiAgICAgICAgICAgICAgICBwcGwuYWRkUmVuZGVyVGFyZ2V0KGBEb2ZSYWRpYW5jZSR7aWR9YCwgdGhpcy5fY2FtZXJhQ29uZmlncy5yYWRpYW5jZUZvcm1hdCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICBwcGwuYWRkUmVuZGVyVGFyZ2V0KGBEb2ZQcmVmaWx0ZXIke2lkfWAsIHRoaXMuX2NhbWVyYUNvbmZpZ3MucmFkaWFuY2VGb3JtYXQsIGhhbGZXaWR0aCwgaGFsZkhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICBwcGwuYWRkUmVuZGVyVGFyZ2V0KGBEb2ZCb2tlaCR7aWR9YCwgdGhpcy5fY2FtZXJhQ29uZmlncy5yYWRpYW5jZUZvcm1hdCwgaGFsZldpZHRoLCBoYWxmSGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIHBwbC5hZGRSZW5kZXJUYXJnZXQoYERvZkZpbHRlciR7aWR9YCwgdGhpcy5fY2FtZXJhQ29uZmlncy5yYWRpYW5jZUZvcm1hdCwgaGFsZldpZHRoLCBoYWxmSGVpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBCbG9vbSAoS2F3YXNlIER1YWwgRmlsdGVyKVxyXG4gICAgICAgICAgICBpZiAodGhpcy5fY2FtZXJhQ29uZmlncy5lbmFibGVCbG9vbSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJsb29tV2lkdGggPSB3aWR0aDtcclxuICAgICAgICAgICAgICAgIGxldCBibG9vbUhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpICE9PSBzZXR0aW5ncy5ibG9vbS5pdGVyYXRpb25zICsgMTsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmxvb21XaWR0aCA9IE1hdGgubWF4KE1hdGguZmxvb3IoYmxvb21XaWR0aCAvIDIpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBibG9vbUhlaWdodCA9IE1hdGgubWF4KE1hdGguZmxvb3IoYmxvb21IZWlnaHQgLyAyKSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHBsLmFkZFJlbmRlclRhcmdldChgQmxvb21UZXgke2lkfV8ke2l9YCwgdGhpcy5fY2FtZXJhQ29uZmlncy5yYWRpYW5jZUZvcm1hdCwgYmxvb21XaWR0aCwgYmxvb21IZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIENvbG9yIEdyYWRpbmdcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NhbWVyYUNvbmZpZ3MuZW5hYmxlQ29sb3JHcmFkaW5nICYmIHNldHRpbmdzLmNvbG9yR3JhZGluZy5tYXRlcmlhbCAmJiBzZXR0aW5ncy5jb2xvckdyYWRpbmcuY29sb3JHcmFkaW5nTWFwKSB7XHJcbiAgICAgICAgICAgICAgICBzZXR0aW5ncy5jb2xvckdyYWRpbmcubWF0ZXJpYWwuc2V0UHJvcGVydHkoXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NvbG9yR3JhZGluZ01hcCcsIHNldHRpbmdzLmNvbG9yR3JhZGluZy5jb2xvckdyYWRpbmdNYXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIEZYQUFcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NhbWVyYUNvbmZpZ3MuZW5hYmxlRlhBQSAmJiB0aGlzLl9jYW1lcmFDb25maWdzLmVuYWJsZVNoYWRpbmdTY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgcHBsLmFkZFJlbmRlclRhcmdldChgQWFDb2xvciR7aWR9YCwgRm9ybWF0LlJHQkE4LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXR1cChjYW1lcmFzOiByZW5kZXJlci5zY2VuZS5DYW1lcmFbXSwgcHBsOiByZW5kZXJpbmcuQmFzaWNQaXBlbGluZSk6IHZvaWQge1xyXG4gICAgICAgICAgICAvLyBUT0RPKHpob3V6aGVuZ2xvbmcpOiBNYWtlIGRlZmF1bHQgZWZmZWN0IGFzc2V0IGxvYWRpbmcgZWFybGllciBhbmQgcmVtb3ZlIF9pbml0TWF0ZXJpYWxzXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pbml0TWF0ZXJpYWxzKHBwbCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBSZW5kZXIgY2FtZXJhc1xyXG4gICAgICAgICAgICAvLyBsb2coYD09PT09PT09PT09PT09PT09PT09IE9uZSBGcmFtZSA9PT09PT09PT09PT09PT09PT09PWApO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNhbWVyYSBvZiBjYW1lcmFzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTa2lwIGludmFsaWQgY2FtZXJhXHJcbiAgICAgICAgICAgICAgICBpZiAoIWNhbWVyYS5zY2VuZSB8fCAhY2FtZXJhLndpbmRvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gU2V0dXAgY2FtZXJhIGNvbmZpZ3NcclxuICAgICAgICAgICAgICAgIHNldHVwQ2FtZXJhQ29uZmlncyhjYW1lcmEsIHRoaXMuX2NvbmZpZ3MsIHRoaXMuX2NhbWVyYUNvbmZpZ3MpO1xyXG4gICAgICAgICAgICAgICAgLy8gbG9nKGBTZXR1cCBjYW1lcmE6ICR7Y2FtZXJhLm5vZGUhLm5hbWV9LCB3aW5kb3c6ICR7Y2FtZXJhLndpbmRvdy5yZW5kZXJXaW5kb3dJZH0sIGlzRnVsbDogJHt0aGlzLl9jYW1lcmFDb25maWdzLnVzZUZ1bGxQaXBlbGluZX0sIGBcclxuICAgICAgICAgICAgICAgIC8vICAgICArIGBzaXplOiAke2NhbWVyYS53aW5kb3cud2lkdGh9eCR7Y2FtZXJhLndpbmRvdy5oZWlnaHR9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGlwZWxpbmVFdmVudC5lbWl0KFBpcGVsaW5lRXZlbnRUeXBlLlJFTkRFUl9DQU1FUkFfQkVHSU4sIGNhbWVyYSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQnVpbGQgcGlwZWxpbmVcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jYW1lcmFDb25maWdzLnVzZUZ1bGxQaXBlbGluZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2J1aWxkRm9yd2FyZFBpcGVsaW5lKHBwbCwgY2FtZXJhLCBjYW1lcmEuc2NlbmUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9idWlsZFNpbXBsZVBpcGVsaW5lKHBwbCwgY2FtZXJhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9waXBlbGluZUV2ZW50LmVtaXQoUGlwZWxpbmVFdmVudFR5cGUuUkVOREVSX0NBTUVSQV9FTkQsIGNhbWVyYSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBQaXBlbGluZXNcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgcHJpdmF0ZSBfYnVpbGRTaW1wbGVQaXBlbGluZShcclxuICAgICAgICAgICAgcHBsOiByZW5kZXJpbmcuQmFzaWNQaXBlbGluZSxcclxuICAgICAgICAgICAgY2FtZXJhOiByZW5kZXJlci5zY2VuZS5DYW1lcmEsXHJcbiAgICAgICAgKTogdm9pZCB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gTWF0aC5tYXgoTWF0aC5mbG9vcihjYW1lcmEud2luZG93LndpZHRoKSwgMSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IE1hdGgubWF4KE1hdGguZmxvb3IoY2FtZXJhLndpbmRvdy5oZWlnaHQpLCAxKTtcclxuICAgICAgICAgICAgY29uc3QgY29sb3JOYW1lID0gdGhpcy5fY2FtZXJhQ29uZmlncy5jb2xvck5hbWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlcHRoU3RlbmNpbE5hbWUgPSB0aGlzLl9jYW1lcmFDb25maWdzLmRlcHRoU3RlbmNpbE5hbWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2aWV3cG9ydCA9IGNhbWVyYS52aWV3cG9ydDsgIC8vIFJlZHVjZSBDKysvVFMgaW50ZXJvcFxyXG4gICAgICAgICAgICB0aGlzLl92aWV3cG9ydC5sZWZ0ID0gTWF0aC5yb3VuZCh2aWV3cG9ydC54ICogd2lkdGgpO1xyXG4gICAgICAgICAgICB0aGlzLl92aWV3cG9ydC50b3AgPSBNYXRoLnJvdW5kKHZpZXdwb3J0LnkgKiBoZWlnaHQpO1xyXG4gICAgICAgICAgICAvLyBIZXJlIHdlIG11c3QgdXNlIGNhbWVyYS52aWV3cG9ydC53aWR0aCBpbnN0ZWFkIG9mIGNhbWVyYS52aWV3cG9ydC56LCB3aGljaFxyXG4gICAgICAgICAgICAvLyBpcyB1bmRlZmluZWQgb24gbmF0aXZlIHBsYXRmb3JtLiBUaGUgc2FtZSBhcyBjYW1lcmEudmlld3BvcnQuaGVpZ2h0LlxyXG4gICAgICAgICAgICB0aGlzLl92aWV3cG9ydC53aWR0aCA9IE1hdGgubWF4KE1hdGgucm91bmQodmlld3BvcnQud2lkdGggKiB3aWR0aCksIDEpO1xyXG4gICAgICAgICAgICB0aGlzLl92aWV3cG9ydC5oZWlnaHQgPSBNYXRoLm1heChNYXRoLnJvdW5kKHZpZXdwb3J0LmhlaWdodCAqIGhlaWdodCksIDEpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2xlYXJDb2xvciA9IGNhbWVyYS5jbGVhckNvbG9yOyAgLy8gUmVkdWNlIEMrKy9UUyBpbnRlcm9wXHJcbiAgICAgICAgICAgIHRoaXMuX2NsZWFyQ29sb3IueCA9IGNsZWFyQ29sb3IueDtcclxuICAgICAgICAgICAgdGhpcy5fY2xlYXJDb2xvci55ID0gY2xlYXJDb2xvci55O1xyXG4gICAgICAgICAgICB0aGlzLl9jbGVhckNvbG9yLnogPSBjbGVhckNvbG9yLno7XHJcbiAgICAgICAgICAgIHRoaXMuX2NsZWFyQ29sb3IudyA9IGNsZWFyQ29sb3IudztcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBhc3MgPSBwcGwuYWRkUmVuZGVyUGFzcyh3aWR0aCwgaGVpZ2h0LCAnZGVmYXVsdCcpO1xyXG5cclxuICAgICAgICAgICAgLy8gYmluZCBvdXRwdXQgcmVuZGVyIHRhcmdldFxyXG4gICAgICAgICAgICBpZiAoZm9yd2FyZE5lZWRDbGVhckNvbG9yKGNhbWVyYSkpIHtcclxuICAgICAgICAgICAgICAgIHBhc3MuYWRkUmVuZGVyVGFyZ2V0KGNvbG9yTmFtZSwgTG9hZE9wLkNMRUFSLCBTdG9yZU9wLlNUT1JFLCB0aGlzLl9jbGVhckNvbG9yKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhc3MuYWRkUmVuZGVyVGFyZ2V0KGNvbG9yTmFtZSwgTG9hZE9wLkxPQUQsIFN0b3JlT3AuU1RPUkUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBiaW5kIGRlcHRoIHN0ZW5jaWwgYnVmZmVyXHJcbiAgICAgICAgICAgIGlmIChjYW1lcmEuY2xlYXJGbGFnICYgQ2xlYXJGbGFnQml0LkRFUFRIX1NURU5DSUwpIHtcclxuICAgICAgICAgICAgICAgIHBhc3MuYWRkRGVwdGhTdGVuY2lsKFxyXG4gICAgICAgICAgICAgICAgICAgIGRlcHRoU3RlbmNpbE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgTG9hZE9wLkNMRUFSLFxyXG4gICAgICAgICAgICAgICAgICAgIFN0b3JlT3AuRElTQ0FSRCxcclxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEuY2xlYXJEZXB0aCxcclxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEuY2xlYXJTdGVuY2lsLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5jbGVhckZsYWcgJiBDbGVhckZsYWdCaXQuREVQVEhfU1RFTkNJTCxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXNzLmFkZERlcHRoU3RlbmNpbChkZXB0aFN0ZW5jaWxOYW1lLCBMb2FkT3AuTE9BRCwgU3RvcmVPcC5ESVNDQVJEKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGFzcy5zZXRWaWV3cG9ydCh0aGlzLl92aWV3cG9ydCk7XHJcblxyXG4gICAgICAgICAgICAvLyBUaGUgb3BhcXVlIHF1ZXVlIGlzIHVzZWQgZm9yIFJlZmxlY3Rpb24gcHJvYmUgcHJldmlld1xyXG4gICAgICAgICAgICBwYXNzLmFkZFF1ZXVlKFF1ZXVlSGludC5PUEFRVUUpXHJcbiAgICAgICAgICAgICAgICAuYWRkU2NlbmUoY2FtZXJhLCBTY2VuZUZsYWdzLk9QQVFVRSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUaGUgYmxlbmQgcXVldWUgaXMgdXNlZCBmb3IgVUkgYW5kIEdpem1vc1xyXG4gICAgICAgICAgICBsZXQgZmxhZ3MgPSBTY2VuZUZsYWdzLkJMRU5EIHwgU2NlbmVGbGFncy5VSTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NhbWVyYUNvbmZpZ3MuZW5hYmxlUHJvZmlsZXIpIHtcclxuICAgICAgICAgICAgICAgIGZsYWdzIHw9IFNjZW5lRmxhZ3MuUFJPRklMRVI7XHJcbiAgICAgICAgICAgICAgICBwYXNzLnNob3dTdGF0aXN0aWNzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwYXNzLmFkZFF1ZXVlKFF1ZXVlSGludC5CTEVORClcclxuICAgICAgICAgICAgICAgIC5hZGRTY2VuZShjYW1lcmEsIGZsYWdzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgX2J1aWxkRm9yd2FyZFBpcGVsaW5lKFxyXG4gICAgICAgICAgICBwcGw6IHJlbmRlcmluZy5CYXNpY1BpcGVsaW5lLFxyXG4gICAgICAgICAgICBjYW1lcmE6IHJlbmRlcmVyLnNjZW5lLkNhbWVyYSxcclxuICAgICAgICAgICAgc2NlbmU6IHJlbmRlcmVyLlJlbmRlclNjZW5lLFxyXG4gICAgICAgICk6IHZvaWQge1xyXG4gICAgICAgICAgICAvLyBJbml0XHJcbiAgICAgICAgICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5fY2FtZXJhQ29uZmlncy5zZXR0aW5ncztcclxuICAgICAgICAgICAgY29uc3QgbmF0aXZlV2lkdGggPSBNYXRoLm1heChNYXRoLmZsb29yKGNhbWVyYS53aW5kb3cud2lkdGgpLCAxKTtcclxuICAgICAgICAgICAgY29uc3QgbmF0aXZlSGVpZ2h0ID0gTWF0aC5tYXgoTWF0aC5mbG9vcihjYW1lcmEud2luZG93LmhlaWdodCksIDEpO1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuX2NhbWVyYUNvbmZpZ3MuZW5hYmxlU2hhZGluZ1NjYWxlXHJcbiAgICAgICAgICAgICAgICA/IE1hdGgubWF4KE1hdGguZmxvb3IobmF0aXZlV2lkdGggKiB0aGlzLl9jYW1lcmFDb25maWdzLnNoYWRpbmdTY2FsZSksIDEpXHJcbiAgICAgICAgICAgICAgICA6IG5hdGl2ZVdpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLl9jYW1lcmFDb25maWdzLmVuYWJsZVNoYWRpbmdTY2FsZVxyXG4gICAgICAgICAgICAgICAgPyBNYXRoLm1heChNYXRoLmZsb29yKG5hdGl2ZUhlaWdodCAqIHRoaXMuX2NhbWVyYUNvbmZpZ3Muc2hhZGluZ1NjYWxlKSwgMSlcclxuICAgICAgICAgICAgICAgIDogbmF0aXZlSGVpZ2h0O1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9IGNhbWVyYS53aW5kb3cucmVuZGVyV2luZG93SWQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yTmFtZSA9IHRoaXMuX2NhbWVyYUNvbmZpZ3MuY29sb3JOYW1lO1xyXG4gICAgICAgICAgICBjb25zdCBzY2VuZURlcHRoID0gdGhpcy5fY2FtZXJhQ29uZmlncy5lbmFibGVTaGFkaW5nU2NhbGVcclxuICAgICAgICAgICAgICAgID8gYFNjYWxlZFNjZW5lRGVwdGgke2lkfWBcclxuICAgICAgICAgICAgICAgIDogYFNjZW5lRGVwdGgke2lkfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhZGlhbmNlTmFtZSA9IHRoaXMuX2NhbWVyYUNvbmZpZ3MuZW5hYmxlU2hhZGluZ1NjYWxlXHJcbiAgICAgICAgICAgICAgICA/IGBTY2FsZWRSYWRpYW5jZSR7aWR9YFxyXG4gICAgICAgICAgICAgICAgOiBgUmFkaWFuY2Uke2lkfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IGxkckNvbG9yTmFtZSA9IHRoaXMuX2NhbWVyYUNvbmZpZ3MuZW5hYmxlU2hhZGluZ1NjYWxlXHJcbiAgICAgICAgICAgICAgICA/IGBTY2FsZWRMZHJDb2xvciR7aWR9YFxyXG4gICAgICAgICAgICAgICAgOiBgTGRyQ29sb3Ike2lkfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5MaWdodCA9IHNjZW5lLm1haW5MaWdodDtcclxuXHJcbiAgICAgICAgICAgIC8vIEZvcndhcmQgTGlnaHRpbmcgKExpZ2h0IEN1bGxpbmcpXHJcbiAgICAgICAgICAgIHRoaXMuZm9yd2FyZExpZ2h0aW5nLmN1bGxMaWdodHMoc2NlbmUsIGNhbWVyYS5mcnVzdHVtKTtcclxuXHJcbiAgICAgICAgICAgIC8vIE1haW4gRGlyZWN0aW9uYWwgbGlnaHQgQ1NNIFNoYWRvdyBNYXBcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NhbWVyYUNvbmZpZ3MuZW5hYmxlTWFpbkxpZ2h0U2hhZG93TWFwKSB7XHJcbiAgICAgICAgICAgICAgICBhc3NlcnQoISFtYWluTGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWRkQ2FzY2FkZWRTaGFkb3dNYXBQYXNzKHBwbCwgaWQsIG1haW5MaWdodCwgY2FtZXJhKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gU3BvdCBsaWdodCBzaGFkb3cgbWFwcyAoTW9iaWxlIG9yIE1TQUEpXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYW1lcmFDb25maWdzLnNpbmdsZUZvcndhcmRSYWRpYW5jZVBhc3MpIHtcclxuICAgICAgICAgICAgICAgIC8vIEN1cnJlbnRseSwgb25seSBzdXBwb3J0IDEgc3BvdCBsaWdodCB3aXRoIHNoYWRvdyBtYXAgb24gbW9iaWxlIHBsYXRmb3JtLlxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETyh6aG91emhlbmdsb25nKTogUmVsZXggdGhpcyBsaW1pdGF0aW9uLlxyXG4gICAgICAgICAgICAgICAgdGhpcy5mb3J3YXJkTGlnaHRpbmcuYWRkU3BvdGxpZ2h0U2hhZG93UGFzc2VzKHBwbCwgY2FtZXJhLCB0aGlzLl9jb25maWdzLm1vYmlsZU1heFNwb3RMaWdodFNoYWRvd01hcHMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl90cnlBZGRSZWZsZWN0aW9uUHJvYmVQYXNzZXMocHBsLCBpZCwgbWFpbkxpZ2h0LCBjYW1lcmEuc2NlbmUpO1xyXG5cclxuICAgICAgICAgICAgLy8gRm9yd2FyZCBMaWdodGluZ1xyXG4gICAgICAgICAgICBsZXQgbGFzdFBhc3M6IHJlbmRlcmluZy5CYXNpY1JlbmRlclBhc3NCdWlsZGVyO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fY2FtZXJhQ29uZmlncy5lbmFibGVQb3N0UHJvY2VzcykgeyAvLyBQb3N0IFByb2Nlc3NcclxuICAgICAgICAgICAgICAgIC8vIFJhZGlhbmNlIGFuZCBEb0ZcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jYW1lcmFDb25maWdzLmVuYWJsZURPRikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFzc2VydCghIXNldHRpbmdzLmRlcHRoT2ZGaWVsZC5tYXRlcmlhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZG9mUmFkaWFuY2VOYW1lID0gYERvZlJhZGlhbmNlJHtpZH1gO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIERpc2FibGUgTVNBQSwgZGVwdGggc3RlbmNpbCBjYW5ub3QgYmUgcmVzb2x2ZWQgY3Jvc3MtcGxhdGZvcm1seVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FkZEZvcndhcmRSYWRpYW5jZVBhc3NlcyhwcGwsIGlkLCBjYW1lcmEsIHdpZHRoLCBoZWlnaHQsIG1haW5MaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9mUmFkaWFuY2VOYW1lLCBzY2VuZURlcHRoLCB0cnVlLCBTdG9yZU9wLlNUT1JFKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hZGREZXB0aE9mRmllbGRQYXNzZXMocHBsLCBzZXR0aW5ncywgc2V0dGluZ3MuZGVwdGhPZkZpZWxkLm1hdGVyaWFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZCwgY2FtZXJhLCB3aWR0aCwgaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2ZSYWRpYW5jZU5hbWUsIHNjZW5lRGVwdGgsIHJhZGlhbmNlTmFtZSwgbGRyQ29sb3JOYW1lKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWRkRm9yd2FyZFJhZGlhbmNlUGFzc2VzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcGwsIGlkLCBjYW1lcmEsIHdpZHRoLCBoZWlnaHQsIG1haW5MaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFkaWFuY2VOYW1lLCBzY2VuZURlcHRoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIEJsb29tXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY2FtZXJhQ29uZmlncy5lbmFibGVCbG9vbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFzc2VydCghIXNldHRpbmdzLmJsb29tLm1hdGVyaWFsKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hZGRLYXdhc2VEdWFsRmlsdGVyQmxvb21QYXNzZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBwbCwgc2V0dGluZ3MsIHNldHRpbmdzLmJsb29tLm1hdGVyaWFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZCwgd2lkdGgsIGhlaWdodCwgcmFkaWFuY2VOYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIFRvbmUgTWFwcGluZyBhbmQgRlhBQVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NhbWVyYUNvbmZpZ3MuZW5hYmxlRlhBQSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFzc2VydCghIXNldHRpbmdzLmZ4YWEubWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvcHlBbmRUb25lbWFwUGFzc05lZWRlZCA9IHRoaXMuX2NhbWVyYUNvbmZpZ3MuZW5hYmxlSERSXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8IHRoaXMuX2NhbWVyYUNvbmZpZ3MuZW5hYmxlQ29sb3JHcmFkaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxkckNvbG9yQnVmZmVyTmFtZSA9IGNvcHlBbmRUb25lbWFwUGFzc05lZWRlZCA/IGxkckNvbG9yTmFtZSA6IHJhZGlhbmNlTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBGWEFBIGlzIGFwcGxpZWQgYWZ0ZXIgdG9uZSBtYXBwaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvcHlBbmRUb25lbWFwUGFzc05lZWRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9hZGRDb3B5QW5kVG9uZW1hcFBhc3MocHBsLCBzZXR0aW5ncywgd2lkdGgsIGhlaWdodCwgcmFkaWFuY2VOYW1lLCBsZHJDb2xvckJ1ZmZlck5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBBcHBseSBGWEFBXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NhbWVyYUNvbmZpZ3MuZW5hYmxlU2hhZGluZ1NjYWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFhQ29sb3JOYW1lID0gYEFhQ29sb3Ike2lkfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFwcGx5IEZYQUEgb24gc2NhbGVkIGltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2FkZEZ4YWFQYXNzKHBwbCwgc2V0dGluZ3MuZnhhYS5tYXRlcmlhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoLCBoZWlnaHQsIGxkckNvbG9yQnVmZmVyTmFtZSwgYWFDb2xvck5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDb3B5IEZYQUEgcmVzdWx0IHRvIHNjcmVlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fY2FtZXJhQ29uZmlncy5lbmFibGVGU1IgJiYgc2V0dGluZ3MuZnNyLm1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBcHBseSBGU1JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RQYXNzID0gdGhpcy5fYWRkRnNyUGFzcyhwcGwsIHNldHRpbmdzLCBzZXR0aW5ncy5mc3IubWF0ZXJpYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsIHdpZHRoLCBoZWlnaHQsIGFhQ29sb3JOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZVdpZHRoLCBuYXRpdmVIZWlnaHQsIGNvbG9yTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTY2FsZSBGWEFBIHJlc3VsdCB0byBzY3JlZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RQYXNzID0gdGhpcy5fYWRkQ29weVBhc3MocHBsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZVdpZHRoLCBuYXRpdmVIZWlnaHQsIGFhQ29sb3JOYW1lLCBjb2xvck5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSW1hZ2Ugbm90IHNjYWxlZCwgb3V0cHV0IEZYQUEgcmVzdWx0IHRvIHNjcmVlbiBkaXJlY3RseVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0UGFzcyA9IHRoaXMuX2FkZEZ4YWFQYXNzKHBwbCwgc2V0dGluZ3MuZnhhYS5tYXRlcmlhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZVdpZHRoLCBuYXRpdmVIZWlnaHQsIGxkckNvbG9yQnVmZmVyTmFtZSwgY29sb3JOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vIEZYQUEgKFNpemUgbWlnaHQgYmUgc2NhbGVkKVxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RQYXNzID0gdGhpcy5fYWRkVG9uZW1hcFJlc2l6ZU9yU3VwZXJSZXNvbHV0aW9uUGFzc2VzKHBwbCwgc2V0dGluZ3MsIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCwgaGVpZ2h0LCByYWRpYW5jZU5hbWUsIGxkckNvbG9yTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlV2lkdGgsIG5hdGl2ZUhlaWdodCwgY29sb3JOYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9jYW1lcmFDb25maWdzLmVuYWJsZUhEUiB8fCB0aGlzLl9jYW1lcmFDb25maWdzLmVuYWJsZVNoYWRpbmdTY2FsZSkgeyAvLyBIRFIgb3IgU2NhbGVkIExEUlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWRkRm9yd2FyZFJhZGlhbmNlUGFzc2VzKHBwbCwgaWQsIGNhbWVyYSxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aCwgaGVpZ2h0LCBtYWluTGlnaHQsIHJhZGlhbmNlTmFtZSwgc2NlbmVEZXB0aCk7XHJcbiAgICAgICAgICAgICAgICBsYXN0UGFzcyA9IHRoaXMuX2FkZFRvbmVtYXBSZXNpemVPclN1cGVyUmVzb2x1dGlvblBhc3NlcyhwcGwsIHNldHRpbmdzLCBpZCxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aCwgaGVpZ2h0LCByYWRpYW5jZU5hbWUsIGxkckNvbG9yTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBuYXRpdmVXaWR0aCwgbmF0aXZlSGVpZ2h0LCBjb2xvck5hbWUpO1xyXG4gICAgICAgICAgICB9IGVsc2UgeyAvLyBMRFIgKFNpemUgaXMgbm90IHNjYWxlZClcclxuICAgICAgICAgICAgICAgIGxhc3RQYXNzID0gdGhpcy5fYWRkRm9yd2FyZFJhZGlhbmNlUGFzc2VzKHBwbCwgaWQsIGNhbWVyYSxcclxuICAgICAgICAgICAgICAgICAgICBuYXRpdmVXaWR0aCwgbmF0aXZlSGVpZ2h0LCBtYWluTGlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JOYW1lLCB0aGlzLl9jYW1lcmFDb25maWdzLmRlcHRoU3RlbmNpbE5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBVSSBzaXplIGlzIG5vdCBzY2FsZWQsIGRvZXMgbm90IGhhdmUgQUFcclxuICAgICAgICAgICAgdGhpcy5fYWRkVUlRdWV1ZShjYW1lcmEsIGxhc3RQYXNzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBDb21tb24gUGFzc2VzXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIHByaXZhdGUgX2FkZFRvbmVtYXBSZXNpemVPclN1cGVyUmVzb2x1dGlvblBhc3NlcyhcclxuICAgICAgICAgICAgcHBsOiByZW5kZXJpbmcuQmFzaWNQaXBlbGluZSxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IFBpcGVsaW5lU2V0dGluZ3MsXHJcbiAgICAgICAgICAgIGlkOiBudW1iZXIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBudW1iZXIsXHJcbiAgICAgICAgICAgIGhlaWdodDogbnVtYmVyLFxyXG4gICAgICAgICAgICByYWRpYW5jZU5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgbGRyQ29sb3JOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIG5hdGl2ZVdpZHRoOiBudW1iZXIsXHJcbiAgICAgICAgICAgIG5hdGl2ZUhlaWdodDogbnVtYmVyLFxyXG4gICAgICAgICAgICBjb2xvck5hbWU6IHN0cmluZyxcclxuICAgICAgICApOiByZW5kZXJpbmcuQmFzaWNSZW5kZXJQYXNzQnVpbGRlciB7XHJcbiAgICAgICAgICAgIGxldCBsYXN0UGFzczogcmVuZGVyaW5nLkJhc2ljUmVuZGVyUGFzc0J1aWxkZXI7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYW1lcmFDb25maWdzLmVuYWJsZUZTUiAmJiBzZXR0aW5ncy5mc3IubWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgIC8vIEFwcGx5IEZTUlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWRkQ29weUFuZFRvbmVtYXBQYXNzKHBwbCwgc2V0dGluZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGgsIGhlaWdodCwgcmFkaWFuY2VOYW1lLCBsZHJDb2xvck5hbWUpO1xyXG4gICAgICAgICAgICAgICAgbGFzdFBhc3MgPSB0aGlzLl9hZGRGc3JQYXNzKHBwbCwgc2V0dGluZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MuZnNyLm1hdGVyaWFsLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkLCB3aWR0aCwgaGVpZ2h0LCBsZHJDb2xvck5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbmF0aXZlV2lkdGgsIG5hdGl2ZUhlaWdodCwgY29sb3JOYW1lKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIE91dHB1dCBIRFIvTERSIHJlc3VsdCB0byBzY3JlZW4gZGlyZWN0bHkgKFNpemUgbWlnaHQgYmUgc2NhbGVkKVxyXG4gICAgICAgICAgICAgICAgbGFzdFBhc3MgPSB0aGlzLl9hZGRDb3B5QW5kVG9uZW1hcFBhc3MocHBsLCBzZXR0aW5ncyxcclxuICAgICAgICAgICAgICAgICAgICBuYXRpdmVXaWR0aCwgbmF0aXZlSGVpZ2h0LCByYWRpYW5jZU5hbWUsIGNvbG9yTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGxhc3RQYXNzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfYWRkQ2FzY2FkZWRTaGFkb3dNYXBQYXNzKFxyXG4gICAgICAgICAgICBwcGw6IHJlbmRlcmluZy5CYXNpY1BpcGVsaW5lLFxyXG4gICAgICAgICAgICBpZDogbnVtYmVyLFxyXG4gICAgICAgICAgICBsaWdodDogcmVuZGVyZXIuc2NlbmUuRGlyZWN0aW9uYWxMaWdodCxcclxuICAgICAgICAgICAgY2FtZXJhOiByZW5kZXJlci5zY2VuZS5DYW1lcmEsXHJcbiAgICAgICAgKTogdm9pZCB7XHJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgLy8gRHluYW1pYyBzdGF0ZXNcclxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IHBwbC5waXBlbGluZVNjZW5lRGF0YS5zaGFkb3dzLnNpemUueDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gcHBsLnBpcGVsaW5lU2NlbmVEYXRhLnNoYWRvd3Muc2l6ZS55O1xyXG4gICAgICAgICAgICB0aGlzLl92aWV3cG9ydC5sZWZ0ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5fdmlld3BvcnQudG9wID0gMDtcclxuICAgICAgICAgICAgdGhpcy5fdmlld3BvcnQud2lkdGggPSB3aWR0aDtcclxuICAgICAgICAgICAgdGhpcy5fdmlld3BvcnQuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAvLyBDU00gU2hhZG93IE1hcFxyXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIGNvbnN0IHBhc3MgPSBwcGwuYWRkUmVuZGVyUGFzcyh3aWR0aCwgaGVpZ2h0LCAnZGVmYXVsdCcpO1xyXG4gICAgICAgICAgICBwYXNzLm5hbWUgPSAnQ2FzY2FkZWRTaGFkb3dNYXAnO1xyXG4gICAgICAgICAgICBwYXNzLmFkZFJlbmRlclRhcmdldChgU2hhZG93TWFwJHtpZH1gLCBMb2FkT3AuQ0xFQVIsIFN0b3JlT3AuU1RPUkUsIG5ldyBDb2xvcigxLCAxLCAxLCAxKSk7XHJcbiAgICAgICAgICAgIHBhc3MuYWRkRGVwdGhTdGVuY2lsKGBTaGFkb3dEZXB0aCR7aWR9YCwgTG9hZE9wLkNMRUFSLCBTdG9yZU9wLkRJU0NBUkQpO1xyXG4gICAgICAgICAgICBjb25zdCBjc21MZXZlbCA9IHBwbC5waXBlbGluZVNjZW5lRGF0YS5jc21TdXBwb3J0ZWQgPyBsaWdodC5jc21MZXZlbCA6IDE7XHJcblxyXG4gICAgICAgICAgICAvLyBBZGQgc2hhZG93IG1hcCB2aWV3cG9ydHNcclxuICAgICAgICAgICAgZm9yIChsZXQgbGV2ZWwgPSAwOyBsZXZlbCAhPT0gY3NtTGV2ZWw7ICsrbGV2ZWwpIHtcclxuICAgICAgICAgICAgICAgIGdldENzbU1haW5MaWdodFZpZXdwb3J0KGxpZ2h0LCB3aWR0aCwgaGVpZ2h0LCBsZXZlbCwgdGhpcy5fdmlld3BvcnQsIHRoaXMuX2NvbmZpZ3Muc2NyZWVuU3BhY2VTaWduWSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBxdWV1ZSA9IHBhc3MuYWRkUXVldWUoUXVldWVIaW50Lk5PTkUsICdzaGFkb3ctY2FzdGVyJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2NvbmZpZ3MuaXNXZWJHUFUpIHsgLy8gVGVtcG9yYXJ5IHdvcmthcm91bmQgZm9yIFdlYkdQVVxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXVlLnNldFZpZXdwb3J0KHRoaXMuX3ZpZXdwb3J0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHF1ZXVlXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZFNjZW5lKGNhbWVyYSwgU2NlbmVGbGFncy5PUEFRVUUgfCBTY2VuZUZsYWdzLk1BU0sgfCBTY2VuZUZsYWdzLlNIQURPV19DQVNURVIpXHJcbiAgICAgICAgICAgICAgICAgICAgLnVzZUxpZ2h0RnJ1c3R1bShsaWdodCwgbGV2ZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIF9hZGRDb3B5UGFzcyhcclxuICAgICAgICAgICAgcHBsOiByZW5kZXJpbmcuQmFzaWNQaXBlbGluZSxcclxuICAgICAgICAgICAgd2lkdGg6IG51bWJlcixcclxuICAgICAgICAgICAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgICAgICAgICAgIGlucHV0OiBzdHJpbmcsXHJcbiAgICAgICAgICAgIG91dHB1dDogc3RyaW5nLFxyXG4gICAgICAgICk6IHJlbmRlcmluZy5CYXNpY1JlbmRlclBhc3NCdWlsZGVyIHtcclxuICAgICAgICAgICAgY29uc3QgcGFzcyA9IHBwbC5hZGRSZW5kZXJQYXNzKHdpZHRoLCBoZWlnaHQsICdjYy10b25lLW1hcHBpbmcnKTtcclxuICAgICAgICAgICAgcGFzcy5hZGRSZW5kZXJUYXJnZXQob3V0cHV0LCBMb2FkT3AuQ0xFQVIsIFN0b3JlT3AuU1RPUkUsIHRoaXMuX2NsZWFyQ29sb3JUcmFuc3BhcmVudEJsYWNrKTtcclxuICAgICAgICAgICAgcGFzcy5hZGRUZXh0dXJlKGlucHV0LCAnaW5wdXRUZXh0dXJlJyk7XHJcbiAgICAgICAgICAgIHBhc3Muc2V0VmVjNCgnZ19wbGF0Zm9ybScsIHRoaXMuX2NvbmZpZ3MucGxhdGZvcm0pO1xyXG4gICAgICAgICAgICBwYXNzLmFkZFF1ZXVlKFF1ZXVlSGludC5PUEFRVUUpXHJcbiAgICAgICAgICAgICAgICAuYWRkRnVsbHNjcmVlblF1YWQodGhpcy5fY29weUFuZFRvbmVtYXBNYXRlcmlhbCwgMSk7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXNzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfYWRkQ29weUFuZFRvbmVtYXBQYXNzKFxyXG4gICAgICAgICAgICBwcGw6IHJlbmRlcmluZy5CYXNpY1BpcGVsaW5lLFxyXG4gICAgICAgICAgICBzZXR0aW5nczogUGlwZWxpbmVTZXR0aW5ncyxcclxuICAgICAgICAgICAgd2lkdGg6IG51bWJlcixcclxuICAgICAgICAgICAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgICAgICAgICAgIHJhZGlhbmNlTmFtZTogc3RyaW5nLFxyXG4gICAgICAgICAgICBjb2xvck5hbWU6IHN0cmluZyxcclxuICAgICAgICApOiByZW5kZXJpbmcuQmFzaWNSZW5kZXJQYXNzQnVpbGRlciB7XHJcbiAgICAgICAgICAgIGxldCBwYXNzOiByZW5kZXJpbmcuQmFzaWNSZW5kZXJQYXNzQnVpbGRlcjtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NhbWVyYUNvbmZpZ3MuZW5hYmxlQ29sb3JHcmFkaW5nXHJcbiAgICAgICAgICAgICAgICAmJiBzZXR0aW5ncy5jb2xvckdyYWRpbmcubWF0ZXJpYWxcclxuICAgICAgICAgICAgICAgICYmIHNldHRpbmdzLmNvbG9yR3JhZGluZy5jb2xvckdyYWRpbmdNYXApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGx1dFRleCA9IHNldHRpbmdzLmNvbG9yR3JhZGluZy5jb2xvckdyYWRpbmdNYXA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xvckdyYWRpbmdUZXhTaXplLnggPSBsdXRUZXgud2lkdGg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xvckdyYWRpbmdUZXhTaXplLnkgPSBsdXRUZXguaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzU3F1YXJlTWFwID0gbHV0VGV4LndpZHRoID09PSBsdXRUZXguaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzU3F1YXJlTWFwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFzcyA9IHBwbC5hZGRSZW5kZXJQYXNzKHdpZHRoLCBoZWlnaHQsICdjYy1jb2xvci1ncmFkaW5nLTh4OCcpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXNzID0gcHBsLmFkZFJlbmRlclBhc3Mod2lkdGgsIGhlaWdodCwgJ2NjLWNvbG9yLWdyYWRpbmctbngxJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwYXNzLmFkZFJlbmRlclRhcmdldChjb2xvck5hbWUsIExvYWRPcC5DTEVBUiwgU3RvcmVPcC5TVE9SRSwgdGhpcy5fY2xlYXJDb2xvclRyYW5zcGFyZW50QmxhY2spO1xyXG4gICAgICAgICAgICAgICAgcGFzcy5hZGRUZXh0dXJlKHJhZGlhbmNlTmFtZSwgJ3NjZW5lQ29sb3JNYXAnKTtcclxuICAgICAgICAgICAgICAgIHBhc3Muc2V0VmVjNCgnZ19wbGF0Zm9ybScsIHRoaXMuX2NvbmZpZ3MucGxhdGZvcm0pO1xyXG4gICAgICAgICAgICAgICAgcGFzcy5zZXRWZWMyKCdsdXRUZXh0dXJlU2l6ZScsIHRoaXMuX2NvbG9yR3JhZGluZ1RleFNpemUpO1xyXG4gICAgICAgICAgICAgICAgcGFzcy5zZXRGbG9hdCgnY29udHJpYnV0ZScsIHNldHRpbmdzLmNvbG9yR3JhZGluZy5jb250cmlidXRlKTtcclxuICAgICAgICAgICAgICAgIHBhc3MuYWRkUXVldWUoUXVldWVIaW50Lk9QQVFVRSlcclxuICAgICAgICAgICAgICAgICAgICAuYWRkRnVsbHNjcmVlblF1YWQoc2V0dGluZ3MuY29sb3JHcmFkaW5nLm1hdGVyaWFsLCBpc1NxdWFyZU1hcCA/IDEgOiAwKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhc3MgPSBwcGwuYWRkUmVuZGVyUGFzcyh3aWR0aCwgaGVpZ2h0LCAnY2MtdG9uZS1tYXBwaW5nJyk7XHJcbiAgICAgICAgICAgICAgICBwYXNzLmFkZFJlbmRlclRhcmdldChjb2xvck5hbWUsIExvYWRPcC5DTEVBUiwgU3RvcmVPcC5TVE9SRSwgdGhpcy5fY2xlYXJDb2xvclRyYW5zcGFyZW50QmxhY2spO1xyXG4gICAgICAgICAgICAgICAgcGFzcy5hZGRUZXh0dXJlKHJhZGlhbmNlTmFtZSwgJ2lucHV0VGV4dHVyZScpO1xyXG4gICAgICAgICAgICAgICAgcGFzcy5zZXRWZWM0KCdnX3BsYXRmb3JtJywgdGhpcy5fY29uZmlncy5wbGF0Zm9ybSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3MudG9uZU1hcHBpbmcubWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXNzLmFkZFF1ZXVlKFF1ZXVlSGludC5PUEFRVUUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRGdWxsc2NyZWVuUXVhZChzZXR0aW5ncy50b25lTWFwcGluZy5tYXRlcmlhbCwgMCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhc3MuYWRkUXVldWUoUXVldWVIaW50Lk9QQVFVRSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZEZ1bGxzY3JlZW5RdWFkKHRoaXMuX2NvcHlBbmRUb25lbWFwTWF0ZXJpYWwsIDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBwYXNzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfYnVpbGRGb3J3YXJkTWFpbkxpZ2h0UGFzcyhcclxuICAgICAgICAgICAgcGFzczogcmVuZGVyaW5nLkJhc2ljUmVuZGVyUGFzc0J1aWxkZXIsXHJcbiAgICAgICAgICAgIGlkOiBudW1iZXIsXHJcbiAgICAgICAgICAgIGNhbWVyYTogcmVuZGVyZXIuc2NlbmUuQ2FtZXJhLFxyXG4gICAgICAgICAgICBjb2xvck5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgZGVwdGhTdGVuY2lsTmFtZTogc3RyaW5nLFxyXG4gICAgICAgICAgICBkZXB0aFN0ZW5jaWxTdG9yZU9wOiBnZnguU3RvcmVPcCxcclxuICAgICAgICAgICAgbWFpbkxpZ2h0OiByZW5kZXJlci5zY2VuZS5EaXJlY3Rpb25hbExpZ2h0IHwgbnVsbCxcclxuICAgICAgICAgICAgc2NlbmU6IHJlbmRlcmVyLlJlbmRlclNjZW5lIHwgbnVsbCA9IG51bGwsXHJcbiAgICAgICAgKTogdm9pZCB7XHJcbiAgICAgICAgICAgIC8vIHNldCB2aWV3cG9ydFxyXG4gICAgICAgICAgICBwYXNzLnNldFZpZXdwb3J0KHRoaXMuX3ZpZXdwb3J0KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yU3RvcmVPcCA9IHRoaXMuX2NhbWVyYUNvbmZpZ3MuZW5hYmxlTVNBQSA/IFN0b3JlT3AuRElTQ0FSRCA6IFN0b3JlT3AuU1RPUkU7XHJcblxyXG4gICAgICAgICAgICAvLyBiaW5kIG91dHB1dCByZW5kZXIgdGFyZ2V0XHJcbiAgICAgICAgICAgIGlmIChmb3J3YXJkTmVlZENsZWFyQ29sb3IoY2FtZXJhKSkge1xyXG4gICAgICAgICAgICAgICAgcGFzcy5hZGRSZW5kZXJUYXJnZXQoY29sb3JOYW1lLCBMb2FkT3AuQ0xFQVIsIGNvbG9yU3RvcmVPcCwgdGhpcy5fY2xlYXJDb2xvcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXNzLmFkZFJlbmRlclRhcmdldChjb2xvck5hbWUsIExvYWRPcC5MT0FELCBjb2xvclN0b3JlT3ApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBiaW5kIGRlcHRoIHN0ZW5jaWwgYnVmZmVyXHJcbiAgICAgICAgICAgIGlmIChERUJVRykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbG9yTmFtZSA9PT0gdGhpcy5fY2FtZXJhQ29uZmlncy5jb2xvck5hbWUgJiZcclxuICAgICAgICAgICAgICAgICAgICBkZXB0aFN0ZW5jaWxOYW1lICE9PSB0aGlzLl9jYW1lcmFDb25maWdzLmRlcHRoU3RlbmNpbE5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB3YXJuKCdEZWZhdWx0IGZyYW1lYnVmZmVyIGNhbm5vdCB1c2UgY3VzdG9tIGRlcHRoIHN0ZW5jaWwgYnVmZmVyJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjYW1lcmEuY2xlYXJGbGFnICYgQ2xlYXJGbGFnQml0LkRFUFRIX1NURU5DSUwpIHtcclxuICAgICAgICAgICAgICAgIHBhc3MuYWRkRGVwdGhTdGVuY2lsKFxyXG4gICAgICAgICAgICAgICAgICAgIGRlcHRoU3RlbmNpbE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgTG9hZE9wLkNMRUFSLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlcHRoU3RlbmNpbFN0b3JlT3AsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLmNsZWFyRGVwdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLmNsZWFyU3RlbmNpbCxcclxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEuY2xlYXJGbGFnICYgQ2xlYXJGbGFnQml0LkRFUFRIX1NURU5DSUwsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGFzcy5hZGREZXB0aFN0ZW5jaWwoZGVwdGhTdGVuY2lsTmFtZSwgTG9hZE9wLkxPQUQsIGRlcHRoU3RlbmNpbFN0b3JlT3ApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBTZXQgc2hhZG93IG1hcCBpZiBlbmFibGVkXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYW1lcmFDb25maWdzLmVuYWJsZU1haW5MaWdodFNoYWRvd01hcCkge1xyXG4gICAgICAgICAgICAgICAgcGFzcy5hZGRUZXh0dXJlKGBTaGFkb3dNYXAke2lkfWAsICdjY19zaGFkb3dNYXAnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gVE9ETyh6aG91emhlbmdsb25nKTogU2VwYXJhdGUgT1BBUVVFIGFuZCBNQVNLIHF1ZXVlXHJcblxyXG4gICAgICAgICAgICAvLyBhZGQgb3BhcXVlIGFuZCBtYXNrIHF1ZXVlXHJcbiAgICAgICAgICAgIHBhc3MuYWRkUXVldWUoUXVldWVIaW50Lk5PTkUpIC8vIEN1cnJlbnRseSB3ZSBwdXQgT1BBUVVFIGFuZCBNQVNLIGludG8gb25lIHF1ZXVlLCBzbyBRdWV1ZUhpbnQgaXMgTk9ORVxyXG4gICAgICAgICAgICAgICAgLmFkZFNjZW5lKGNhbWVyYSxcclxuICAgICAgICAgICAgICAgICAgICBTY2VuZUZsYWdzLk9QQVFVRSB8IFNjZW5lRmxhZ3MuTUFTSyxcclxuICAgICAgICAgICAgICAgICAgICBtYWluTGlnaHQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgIHNjZW5lID8gc2NlbmUgOiB1bmRlZmluZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfYWRkRGVwdGhPZkZpZWxkUGFzc2VzKFxyXG4gICAgICAgICAgICBwcGw6IHJlbmRlcmluZy5CYXNpY1BpcGVsaW5lLFxyXG4gICAgICAgICAgICBzZXR0aW5nczogUGlwZWxpbmVTZXR0aW5ncyxcclxuICAgICAgICAgICAgZG9mTWF0ZXJpYWw6IE1hdGVyaWFsLFxyXG4gICAgICAgICAgICBpZDogbnVtYmVyLFxyXG4gICAgICAgICAgICBjYW1lcmE6IHJlbmRlcmVyLnNjZW5lLkNhbWVyYSxcclxuICAgICAgICAgICAgd2lkdGg6IG51bWJlcixcclxuICAgICAgICAgICAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgICAgICAgICAgIGRvZlJhZGlhbmNlTmFtZTogc3RyaW5nLFxyXG4gICAgICAgICAgICBkZXB0aFN0ZW5jaWw6IHN0cmluZyxcclxuICAgICAgICAgICAgcmFkaWFuY2VOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIGxkckNvbG9yTmFtZTogc3RyaW5nLFxyXG4gICAgICAgICk6IHZvaWQge1xyXG4gICAgICAgICAgICAvLyBodHRwczovL2NhdGxpa2Vjb2RpbmcuY29tL3VuaXR5L3R1dG9yaWFscy9hZHZhbmNlZC1yZW5kZXJpbmcvZGVwdGgtb2YtZmllbGQvXHJcblxyXG4gICAgICAgICAgICB0aGlzLl9jb2NQYXJhbXMueCA9IHNldHRpbmdzLmRlcHRoT2ZGaWVsZC5mb2N1c0Rpc3RhbmNlO1xyXG4gICAgICAgICAgICB0aGlzLl9jb2NQYXJhbXMueSA9IHNldHRpbmdzLmRlcHRoT2ZGaWVsZC5mb2N1c1JhbmdlO1xyXG4gICAgICAgICAgICB0aGlzLl9jb2NQYXJhbXMueiA9IHNldHRpbmdzLmRlcHRoT2ZGaWVsZC5ib2tlaFJhZGl1cztcclxuICAgICAgICAgICAgdGhpcy5fY29jUGFyYW1zLncgPSAwLjA7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvY1RleFNpemUueCA9IDEuMCAvIHdpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLl9jb2NUZXhTaXplLnkgPSAxLjAgLyBoZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvY1RleFNpemUueiA9IHdpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLl9jb2NUZXhTaXplLncgPSBoZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBoYWxmV2lkdGggPSBNYXRoLm1heChNYXRoLmZsb29yKHdpZHRoIC8gMiksIDEpO1xyXG4gICAgICAgICAgICBjb25zdCBoYWxmSGVpZ2h0ID0gTWF0aC5tYXgoTWF0aC5mbG9vcihoZWlnaHQgLyAyKSwgMSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb2NOYW1lID0gbGRyQ29sb3JOYW1lO1xyXG4gICAgICAgICAgICBjb25zdCBwcmVmaWx0ZXJOYW1lID0gYERvZlByZWZpbHRlciR7aWR9YDtcclxuICAgICAgICAgICAgY29uc3QgYm9rZWhOYW1lID0gYERvZkJva2VoJHtpZH1gO1xyXG4gICAgICAgICAgICBjb25zdCBmaWx0ZXJOYW1lID0gYERvZkZpbHRlciR7aWR9YDtcclxuXHJcbiAgICAgICAgICAgIC8vIENvQ1xyXG4gICAgICAgICAgICBjb25zdCBjb2NQYXNzID0gcHBsLmFkZFJlbmRlclBhc3Mod2lkdGgsIGhlaWdodCwgJ2NjLWRvZi1jb2MnKTtcclxuICAgICAgICAgICAgY29jUGFzcy5hZGRSZW5kZXJUYXJnZXQoY29jTmFtZSwgTG9hZE9wLkNMRUFSLCBTdG9yZU9wLlNUT1JFLCB0aGlzLl9jbGVhckNvbG9yVHJhbnNwYXJlbnRCbGFjayk7XHJcbiAgICAgICAgICAgIGNvY1Bhc3MuYWRkVGV4dHVyZShkZXB0aFN0ZW5jaWwsICdEZXB0aFRleCcpO1xyXG4gICAgICAgICAgICBjb2NQYXNzLnNldFZlYzQoJ2dfcGxhdGZvcm0nLCB0aGlzLl9jb25maWdzLnBsYXRmb3JtKTtcclxuICAgICAgICAgICAgY29jUGFzcy5zZXRNYXQ0KCdwcm9qJywgY2FtZXJhLm1hdFByb2opO1xyXG4gICAgICAgICAgICBjb2NQYXNzLnNldFZlYzQoJ2NvY1BhcmFtcycsIHRoaXMuX2NvY1BhcmFtcyk7XHJcbiAgICAgICAgICAgIGNvY1Bhc3NcclxuICAgICAgICAgICAgICAgIC5hZGRRdWV1ZShRdWV1ZUhpbnQuT1BBUVVFKVxyXG4gICAgICAgICAgICAgICAgLmFkZENhbWVyYVF1YWQoY2FtZXJhLCBkb2ZNYXRlcmlhbCwgMCk7IC8vIGFkZENhbWVyYVF1YWQgd2lsbCBzZXQgY2FtZXJhIHJlbGF0ZWQgVUJPc1xyXG5cclxuICAgICAgICAgICAgLy8gRG93bnNhbXBsZSBhbmQgUHJlZmlsdGVyXHJcbiAgICAgICAgICAgIGNvbnN0IHByZWZpbHRlclBhc3MgPSBwcGwuYWRkUmVuZGVyUGFzcyhoYWxmV2lkdGgsIGhhbGZIZWlnaHQsICdjYy1kb2YtcHJlZmlsdGVyJyk7XHJcbiAgICAgICAgICAgIHByZWZpbHRlclBhc3MuYWRkUmVuZGVyVGFyZ2V0KHByZWZpbHRlck5hbWUsIExvYWRPcC5DTEVBUiwgU3RvcmVPcC5TVE9SRSwgdGhpcy5fY2xlYXJDb2xvclRyYW5zcGFyZW50QmxhY2spO1xyXG4gICAgICAgICAgICBwcmVmaWx0ZXJQYXNzLmFkZFRleHR1cmUoZG9mUmFkaWFuY2VOYW1lLCAnY29sb3JUZXgnKTtcclxuICAgICAgICAgICAgcHJlZmlsdGVyUGFzcy5hZGRUZXh0dXJlKGNvY05hbWUsICdjb2NUZXgnKTtcclxuICAgICAgICAgICAgcHJlZmlsdGVyUGFzcy5zZXRWZWM0KCdnX3BsYXRmb3JtJywgdGhpcy5fY29uZmlncy5wbGF0Zm9ybSk7XHJcbiAgICAgICAgICAgIHByZWZpbHRlclBhc3Muc2V0VmVjNCgnbWFpblRleFRleGVsU2l6ZScsIHRoaXMuX2NvY1RleFNpemUpO1xyXG4gICAgICAgICAgICBwcmVmaWx0ZXJQYXNzXHJcbiAgICAgICAgICAgICAgICAuYWRkUXVldWUoUXVldWVIaW50Lk9QQVFVRSlcclxuICAgICAgICAgICAgICAgIC5hZGRGdWxsc2NyZWVuUXVhZChkb2ZNYXRlcmlhbCwgMSk7XHJcblxyXG4gICAgICAgICAgICAvLyBCb2tlaCBibHVyXHJcbiAgICAgICAgICAgIGNvbnN0IGJva2VoUGFzcyA9IHBwbC5hZGRSZW5kZXJQYXNzKGhhbGZXaWR0aCwgaGFsZkhlaWdodCwgJ2NjLWRvZi1ib2tlaCcpO1xyXG4gICAgICAgICAgICBib2tlaFBhc3MuYWRkUmVuZGVyVGFyZ2V0KGJva2VoTmFtZSwgTG9hZE9wLkNMRUFSLCBTdG9yZU9wLlNUT1JFLCB0aGlzLl9jbGVhckNvbG9yVHJhbnNwYXJlbnRCbGFjayk7XHJcbiAgICAgICAgICAgIGJva2VoUGFzcy5hZGRUZXh0dXJlKHByZWZpbHRlck5hbWUsICdwcmVmaWx0ZXJUZXgnKTtcclxuICAgICAgICAgICAgYm9rZWhQYXNzLnNldFZlYzQoJ2dfcGxhdGZvcm0nLCB0aGlzLl9jb25maWdzLnBsYXRmb3JtKTtcclxuICAgICAgICAgICAgYm9rZWhQYXNzLnNldFZlYzQoJ21haW5UZXhUZXhlbFNpemUnLCB0aGlzLl9jb2NUZXhTaXplKTtcclxuICAgICAgICAgICAgYm9rZWhQYXNzLnNldFZlYzQoJ2NvY1BhcmFtcycsIHRoaXMuX2NvY1BhcmFtcyk7XHJcbiAgICAgICAgICAgIGJva2VoUGFzc1xyXG4gICAgICAgICAgICAgICAgLmFkZFF1ZXVlKFF1ZXVlSGludC5PUEFRVUUpXHJcbiAgICAgICAgICAgICAgICAuYWRkRnVsbHNjcmVlblF1YWQoZG9mTWF0ZXJpYWwsIDIpO1xyXG5cclxuICAgICAgICAgICAgLy8gRmlsdGVyaW5nXHJcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlclBhc3MgPSBwcGwuYWRkUmVuZGVyUGFzcyhoYWxmV2lkdGgsIGhhbGZIZWlnaHQsICdjYy1kb2YtZmlsdGVyJyk7XHJcbiAgICAgICAgICAgIGZpbHRlclBhc3MuYWRkUmVuZGVyVGFyZ2V0KGZpbHRlck5hbWUsIExvYWRPcC5DTEVBUiwgU3RvcmVPcC5TVE9SRSwgdGhpcy5fY2xlYXJDb2xvclRyYW5zcGFyZW50QmxhY2spO1xyXG4gICAgICAgICAgICBmaWx0ZXJQYXNzLmFkZFRleHR1cmUoYm9rZWhOYW1lLCAnYm9rZWhUZXgnKTtcclxuICAgICAgICAgICAgZmlsdGVyUGFzcy5zZXRWZWM0KCdnX3BsYXRmb3JtJywgdGhpcy5fY29uZmlncy5wbGF0Zm9ybSk7XHJcbiAgICAgICAgICAgIGZpbHRlclBhc3Muc2V0VmVjNCgnbWFpblRleFRleGVsU2l6ZScsIHRoaXMuX2NvY1RleFNpemUpO1xyXG4gICAgICAgICAgICBmaWx0ZXJQYXNzXHJcbiAgICAgICAgICAgICAgICAuYWRkUXVldWUoUXVldWVIaW50Lk9QQVFVRSlcclxuICAgICAgICAgICAgICAgIC5hZGRGdWxsc2NyZWVuUXVhZChkb2ZNYXRlcmlhbCwgMyk7XHJcblxyXG4gICAgICAgICAgICAvLyBDb21iaW5lXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbWJpbmVQYXNzID0gcHBsLmFkZFJlbmRlclBhc3Mod2lkdGgsIGhlaWdodCwgJ2NjLWRvZi1jb21iaW5lJyk7XHJcbiAgICAgICAgICAgIGNvbWJpbmVQYXNzLmFkZFJlbmRlclRhcmdldChyYWRpYW5jZU5hbWUsIExvYWRPcC5DTEVBUiwgU3RvcmVPcC5TVE9SRSwgdGhpcy5fY2xlYXJDb2xvclRyYW5zcGFyZW50QmxhY2spO1xyXG4gICAgICAgICAgICBjb21iaW5lUGFzcy5hZGRUZXh0dXJlKGRvZlJhZGlhbmNlTmFtZSwgJ2NvbG9yVGV4Jyk7XHJcbiAgICAgICAgICAgIGNvbWJpbmVQYXNzLmFkZFRleHR1cmUoY29jTmFtZSwgJ2NvY1RleCcpO1xyXG4gICAgICAgICAgICBjb21iaW5lUGFzcy5hZGRUZXh0dXJlKGZpbHRlck5hbWUsICdmaWx0ZXJUZXgnKTtcclxuICAgICAgICAgICAgY29tYmluZVBhc3Muc2V0VmVjNCgnZ19wbGF0Zm9ybScsIHRoaXMuX2NvbmZpZ3MucGxhdGZvcm0pO1xyXG4gICAgICAgICAgICBjb21iaW5lUGFzcy5zZXRWZWM0KCdjb2NQYXJhbXMnLCB0aGlzLl9jb2NQYXJhbXMpO1xyXG4gICAgICAgICAgICBjb21iaW5lUGFzc1xyXG4gICAgICAgICAgICAgICAgLmFkZFF1ZXVlKFF1ZXVlSGludC5PUEFRVUUpXHJcbiAgICAgICAgICAgICAgICAuYWRkRnVsbHNjcmVlblF1YWQoZG9mTWF0ZXJpYWwsIDQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfYWRkS2F3YXNlRHVhbEZpbHRlckJsb29tUGFzc2VzKFxyXG4gICAgICAgICAgICBwcGw6IHJlbmRlcmluZy5CYXNpY1BpcGVsaW5lLFxyXG4gICAgICAgICAgICBzZXR0aW5nczogUGlwZWxpbmVTZXR0aW5ncyxcclxuICAgICAgICAgICAgYmxvb21NYXRlcmlhbDogTWF0ZXJpYWwsXHJcbiAgICAgICAgICAgIGlkOiBudW1iZXIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBudW1iZXIsXHJcbiAgICAgICAgICAgIGhlaWdodDogbnVtYmVyLFxyXG4gICAgICAgICAgICByYWRpYW5jZU5hbWU6IHN0cmluZyxcclxuICAgICAgICApOiB2b2lkIHtcclxuICAgICAgICAgICAgLy8gQmFzZWQgb24gS2F3YXNlIER1YWwgRmlsdGVyIEJsdXIuIFNhdmVzIGJhbmR3aWR0aCBvbiBtb2JpbGUgZGV2aWNlcy5cclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cclxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9jb21tdW5pdHkuYXJtLmNvbS9jZnMtZmlsZS9fX2tleS9jb21tdW5pdHlzZXJ2ZXItYmxvZ3MtY29tcG9uZW50cy13ZWJsb2dmaWxlcy8wMC0wMC0wMC0yMC02Ni9zaWdncmFwaDIwMTVfMkQwMF9tbWdfMkQwMF9tYXJpdXNfMkQwMF9zbGlkZXMucGRmXHJcblxyXG4gICAgICAgICAgICAvLyBTaXplOiBbcHJlZmlsdGVyKDEvMiksIGRvd25zYW1wbGUoMS80KSwgZG93bnNhbXBsZSgxLzgpLCBkb3duc2FtcGxlKDEvMTYpLCAuLi5dXHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZXJhdGlvbnMgPSBzZXR0aW5ncy5ibG9vbS5pdGVyYXRpb25zO1xyXG4gICAgICAgICAgICBjb25zdCBzaXplQ291bnQgPSBpdGVyYXRpb25zICsgMTtcclxuICAgICAgICAgICAgdGhpcy5fYmxvb21XaWR0aHMubGVuZ3RoID0gc2l6ZUNvdW50O1xyXG4gICAgICAgICAgICB0aGlzLl9ibG9vbUhlaWdodHMubGVuZ3RoID0gc2l6ZUNvdW50O1xyXG4gICAgICAgICAgICB0aGlzLl9ibG9vbVdpZHRoc1swXSA9IE1hdGgubWF4KE1hdGguZmxvb3Iod2lkdGggLyAyKSwgMSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2Jsb29tSGVpZ2h0c1swXSA9IE1hdGgubWF4KE1hdGguZmxvb3IoaGVpZ2h0IC8gMiksIDEpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSAhPT0gc2l6ZUNvdW50OyArK2kpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Jsb29tV2lkdGhzW2ldID0gTWF0aC5tYXgoTWF0aC5mbG9vcih0aGlzLl9ibG9vbVdpZHRoc1tpIC0gMV0gLyAyKSwgMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ibG9vbUhlaWdodHNbaV0gPSBNYXRoLm1heChNYXRoLmZsb29yKHRoaXMuX2Jsb29tSGVpZ2h0c1tpIC0gMV0gLyAyKSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEJsb29tIHRleHR1cmUgbmFtZXNcclxuICAgICAgICAgICAgdGhpcy5fYmxvb21UZXhOYW1lcy5sZW5ndGggPSBzaXplQ291bnQ7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpICE9PSBzaXplQ291bnQ7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmxvb21UZXhOYW1lc1tpXSA9IGBCbG9vbVRleCR7aWR9XyR7aX1gO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBTZXR1cCBibG9vbSBwYXJhbWV0ZXJzXHJcbiAgICAgICAgICAgIHRoaXMuX2Jsb29tUGFyYW1zLnggPSB0aGlzLl9jb25maWdzLnVzZUZsb2F0T3V0cHV0ID8gMSA6IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX2Jsb29tUGFyYW1zLnggPSAwOyAvLyB1bnVzZWRcclxuICAgICAgICAgICAgdGhpcy5fYmxvb21QYXJhbXMueiA9IHNldHRpbmdzLmJsb29tLnRocmVzaG9sZDtcclxuICAgICAgICAgICAgdGhpcy5fYmxvb21QYXJhbXMudyA9IHNldHRpbmdzLmJsb29tLmVuYWJsZUFscGhhTWFzayA/IDEgOiAwO1xyXG5cclxuICAgICAgICAgICAgLy8gUHJlZmlsdGVyIHBhc3NcclxuICAgICAgICAgICAgY29uc3QgcHJlZmlsdGVyUGFzcyA9IHBwbC5hZGRSZW5kZXJQYXNzKHRoaXMuX2Jsb29tV2lkdGhzWzBdLCB0aGlzLl9ibG9vbUhlaWdodHNbMF0sICdjYy1ibG9vbS1wcmVmaWx0ZXInKTtcclxuICAgICAgICAgICAgcHJlZmlsdGVyUGFzcy5hZGRSZW5kZXJUYXJnZXQoXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ibG9vbVRleE5hbWVzWzBdLFxyXG4gICAgICAgICAgICAgICAgTG9hZE9wLkNMRUFSLFxyXG4gICAgICAgICAgICAgICAgU3RvcmVPcC5TVE9SRSxcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NsZWFyQ29sb3JUcmFuc3BhcmVudEJsYWNrLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBwcmVmaWx0ZXJQYXNzLmFkZFRleHR1cmUocmFkaWFuY2VOYW1lLCAnaW5wdXRUZXh0dXJlJyk7XHJcbiAgICAgICAgICAgIHByZWZpbHRlclBhc3Muc2V0VmVjNCgnZ19wbGF0Zm9ybScsIHRoaXMuX2NvbmZpZ3MucGxhdGZvcm0pO1xyXG4gICAgICAgICAgICBwcmVmaWx0ZXJQYXNzLnNldFZlYzQoJ2Jsb29tUGFyYW1zJywgdGhpcy5fYmxvb21QYXJhbXMpO1xyXG4gICAgICAgICAgICBwcmVmaWx0ZXJQYXNzXHJcbiAgICAgICAgICAgICAgICAuYWRkUXVldWUoUXVldWVIaW50Lk9QQVFVRSlcclxuICAgICAgICAgICAgICAgIC5hZGRGdWxsc2NyZWVuUXVhZChibG9vbU1hdGVyaWFsLCAwKTtcclxuXHJcbiAgICAgICAgICAgIC8vIERvd25zYW1wbGUgcGFzc2VzXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpICE9PSBzaXplQ291bnQ7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZG93blBhc3MgPSBwcGwuYWRkUmVuZGVyUGFzcyh0aGlzLl9ibG9vbVdpZHRoc1tpXSwgdGhpcy5fYmxvb21IZWlnaHRzW2ldLCAnY2MtYmxvb20tZG93bnNhbXBsZScpO1xyXG4gICAgICAgICAgICAgICAgZG93blBhc3MuYWRkUmVuZGVyVGFyZ2V0KHRoaXMuX2Jsb29tVGV4TmFtZXNbaV0sIExvYWRPcC5DTEVBUiwgU3RvcmVPcC5TVE9SRSwgdGhpcy5fY2xlYXJDb2xvclRyYW5zcGFyZW50QmxhY2spO1xyXG4gICAgICAgICAgICAgICAgZG93blBhc3MuYWRkVGV4dHVyZSh0aGlzLl9ibG9vbVRleE5hbWVzW2kgLSAxXSwgJ2Jsb29tVGV4dHVyZScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmxvb21UZXhTaXplLnggPSB0aGlzLl9ibG9vbVdpZHRoc1tpIC0gMV07XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ibG9vbVRleFNpemUueSA9IHRoaXMuX2Jsb29tSGVpZ2h0c1tpIC0gMV07XHJcbiAgICAgICAgICAgICAgICBkb3duUGFzcy5zZXRWZWM0KCdnX3BsYXRmb3JtJywgdGhpcy5fY29uZmlncy5wbGF0Zm9ybSk7XHJcbiAgICAgICAgICAgICAgICBkb3duUGFzcy5zZXRWZWM0KCdibG9vbVRleFNpemUnLCB0aGlzLl9ibG9vbVRleFNpemUpO1xyXG4gICAgICAgICAgICAgICAgZG93blBhc3NcclxuICAgICAgICAgICAgICAgICAgICAuYWRkUXVldWUoUXVldWVIaW50Lk9QQVFVRSlcclxuICAgICAgICAgICAgICAgICAgICAuYWRkRnVsbHNjcmVlblF1YWQoYmxvb21NYXRlcmlhbCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFVwc2FtcGxlIHBhc3Nlc1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gaXRlcmF0aW9uczsgaS0tID4gMDspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVwUGFzcyA9IHBwbC5hZGRSZW5kZXJQYXNzKHRoaXMuX2Jsb29tV2lkdGhzW2ldLCB0aGlzLl9ibG9vbUhlaWdodHNbaV0sICdjYy1ibG9vbS11cHNhbXBsZScpO1xyXG4gICAgICAgICAgICAgICAgdXBQYXNzLmFkZFJlbmRlclRhcmdldCh0aGlzLl9ibG9vbVRleE5hbWVzW2ldLCBMb2FkT3AuQ0xFQVIsIFN0b3JlT3AuU1RPUkUsIHRoaXMuX2NsZWFyQ29sb3JUcmFuc3BhcmVudEJsYWNrKTtcclxuICAgICAgICAgICAgICAgIHVwUGFzcy5hZGRUZXh0dXJlKHRoaXMuX2Jsb29tVGV4TmFtZXNbaSArIDFdLCAnYmxvb21UZXh0dXJlJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ibG9vbVRleFNpemUueCA9IHRoaXMuX2Jsb29tV2lkdGhzW2kgKyAxXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Jsb29tVGV4U2l6ZS55ID0gdGhpcy5fYmxvb21IZWlnaHRzW2kgKyAxXTtcclxuICAgICAgICAgICAgICAgIHVwUGFzcy5zZXRWZWM0KCdnX3BsYXRmb3JtJywgdGhpcy5fY29uZmlncy5wbGF0Zm9ybSk7XHJcbiAgICAgICAgICAgICAgICB1cFBhc3Muc2V0VmVjNCgnYmxvb21UZXhTaXplJywgdGhpcy5fYmxvb21UZXhTaXplKTtcclxuICAgICAgICAgICAgICAgIHVwUGFzc1xyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRRdWV1ZShRdWV1ZUhpbnQuT1BBUVVFKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRGdWxsc2NyZWVuUXVhZChibG9vbU1hdGVyaWFsLCAyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ29tYmluZSBwYXNzXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbWJpbmVQYXNzID0gcHBsLmFkZFJlbmRlclBhc3Mod2lkdGgsIGhlaWdodCwgJ2NjLWJsb29tLWNvbWJpbmUnKTtcclxuICAgICAgICAgICAgY29tYmluZVBhc3MuYWRkUmVuZGVyVGFyZ2V0KHJhZGlhbmNlTmFtZSwgTG9hZE9wLkxPQUQsIFN0b3JlT3AuU1RPUkUpO1xyXG4gICAgICAgICAgICBjb21iaW5lUGFzcy5hZGRUZXh0dXJlKHRoaXMuX2Jsb29tVGV4TmFtZXNbMF0sICdibG9vbVRleHR1cmUnKTtcclxuICAgICAgICAgICAgY29tYmluZVBhc3Muc2V0VmVjNCgnZ19wbGF0Zm9ybScsIHRoaXMuX2NvbmZpZ3MucGxhdGZvcm0pO1xyXG4gICAgICAgICAgICBjb21iaW5lUGFzcy5zZXRWZWM0KCdibG9vbVBhcmFtcycsIHRoaXMuX2Jsb29tUGFyYW1zKTtcclxuICAgICAgICAgICAgY29tYmluZVBhc3NcclxuICAgICAgICAgICAgICAgIC5hZGRRdWV1ZShRdWV1ZUhpbnQuQkxFTkQpXHJcbiAgICAgICAgICAgICAgICAuYWRkRnVsbHNjcmVlblF1YWQoYmxvb21NYXRlcmlhbCwgMyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIF9hZGRGc3JQYXNzKFxyXG4gICAgICAgICAgICBwcGw6IHJlbmRlcmluZy5CYXNpY1BpcGVsaW5lLFxyXG4gICAgICAgICAgICBzZXR0aW5nczogUGlwZWxpbmVTZXR0aW5ncyxcclxuICAgICAgICAgICAgZnNyTWF0ZXJpYWw6IE1hdGVyaWFsLFxyXG4gICAgICAgICAgICBpZDogbnVtYmVyLFxyXG4gICAgICAgICAgICB3aWR0aDogbnVtYmVyLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IG51bWJlcixcclxuICAgICAgICAgICAgbGRyQ29sb3JOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIG5hdGl2ZVdpZHRoOiBudW1iZXIsXHJcbiAgICAgICAgICAgIG5hdGl2ZUhlaWdodDogbnVtYmVyLFxyXG4gICAgICAgICAgICBjb2xvck5hbWU6IHN0cmluZyxcclxuICAgICAgICApOiByZW5kZXJpbmcuQmFzaWNSZW5kZXJQYXNzQnVpbGRlciB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZzclRleFNpemUueCA9IHdpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLl9mc3JUZXhTaXplLnkgPSBoZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZzclRleFNpemUueiA9IG5hdGl2ZVdpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLl9mc3JUZXhTaXplLncgPSBuYXRpdmVIZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZzclBhcmFtcy54ID0gY2xhbXAoMS4wIC0gc2V0dGluZ3MuZnNyLnNoYXJwbmVzcywgMC4wMiwgMC45OCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBmc3JDb2xvck5hbWUgPSBgRnNyQ29sb3Ike2lkfWA7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBlYXN1UGFzcyA9IHBwbC5hZGRSZW5kZXJQYXNzKG5hdGl2ZVdpZHRoLCBuYXRpdmVIZWlnaHQsICdjYy1mc3ItZWFzdScpO1xyXG4gICAgICAgICAgICBlYXN1UGFzcy5hZGRSZW5kZXJUYXJnZXQoZnNyQ29sb3JOYW1lLCBMb2FkT3AuQ0xFQVIsIFN0b3JlT3AuU1RPUkUsIHRoaXMuX2NsZWFyQ29sb3JUcmFuc3BhcmVudEJsYWNrKTtcclxuICAgICAgICAgICAgZWFzdVBhc3MuYWRkVGV4dHVyZShsZHJDb2xvck5hbWUsICdvdXRwdXRSZXN1bHRNYXAnKTtcclxuICAgICAgICAgICAgZWFzdVBhc3Muc2V0VmVjNCgnZ19wbGF0Zm9ybScsIHRoaXMuX2NvbmZpZ3MucGxhdGZvcm0pO1xyXG4gICAgICAgICAgICBlYXN1UGFzcy5zZXRWZWM0KCdmc3JUZXhTaXplJywgdGhpcy5fZnNyVGV4U2l6ZSk7XHJcbiAgICAgICAgICAgIGVhc3VQYXNzXHJcbiAgICAgICAgICAgICAgICAuYWRkUXVldWUoUXVldWVIaW50Lk9QQVFVRSlcclxuICAgICAgICAgICAgICAgIC5hZGRGdWxsc2NyZWVuUXVhZChmc3JNYXRlcmlhbCwgMCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByY2FzUGFzcyA9IHBwbC5hZGRSZW5kZXJQYXNzKG5hdGl2ZVdpZHRoLCBuYXRpdmVIZWlnaHQsICdjYy1mc3ItcmNhcycpO1xyXG4gICAgICAgICAgICByY2FzUGFzcy5hZGRSZW5kZXJUYXJnZXQoY29sb3JOYW1lLCBMb2FkT3AuQ0xFQVIsIFN0b3JlT3AuU1RPUkUsIHRoaXMuX2NsZWFyQ29sb3JUcmFuc3BhcmVudEJsYWNrKTtcclxuICAgICAgICAgICAgcmNhc1Bhc3MuYWRkVGV4dHVyZShmc3JDb2xvck5hbWUsICdvdXRwdXRSZXN1bHRNYXAnKTtcclxuICAgICAgICAgICAgcmNhc1Bhc3Muc2V0VmVjNCgnZ19wbGF0Zm9ybScsIHRoaXMuX2NvbmZpZ3MucGxhdGZvcm0pO1xyXG4gICAgICAgICAgICByY2FzUGFzcy5zZXRWZWM0KCdmc3JUZXhTaXplJywgdGhpcy5fZnNyVGV4U2l6ZSk7XHJcbiAgICAgICAgICAgIHJjYXNQYXNzLnNldFZlYzQoJ2ZzclBhcmFtcycsIHRoaXMuX2ZzclBhcmFtcyk7XHJcbiAgICAgICAgICAgIHJjYXNQYXNzXHJcbiAgICAgICAgICAgICAgICAuYWRkUXVldWUoUXVldWVIaW50Lk9QQVFVRSlcclxuICAgICAgICAgICAgICAgIC5hZGRGdWxsc2NyZWVuUXVhZChmc3JNYXRlcmlhbCwgMSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmNhc1Bhc3M7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIF9hZGRGeGFhUGFzcyhcclxuICAgICAgICAgICAgcHBsOiByZW5kZXJpbmcuQmFzaWNQaXBlbGluZSxcclxuICAgICAgICAgICAgZnhhYU1hdGVyaWFsOiBNYXRlcmlhbCxcclxuICAgICAgICAgICAgd2lkdGg6IG51bWJlcixcclxuICAgICAgICAgICAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgICAgICAgICAgIGxkckNvbG9yTmFtZTogc3RyaW5nLFxyXG4gICAgICAgICAgICBjb2xvck5hbWU6IHN0cmluZyxcclxuICAgICAgICApOiByZW5kZXJpbmcuQmFzaWNSZW5kZXJQYXNzQnVpbGRlciB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Z4YWFQYXJhbXMueCA9IHdpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLl9meGFhUGFyYW1zLnkgPSBoZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMuX2Z4YWFQYXJhbXMueiA9IDEgLyB3aWR0aDtcclxuICAgICAgICAgICAgdGhpcy5fZnhhYVBhcmFtcy53ID0gMSAvIGhlaWdodDtcclxuICAgICAgICAgICAgY29uc3QgcGFzcyA9IHBwbC5hZGRSZW5kZXJQYXNzKHdpZHRoLCBoZWlnaHQsICdjYy1meGFhJyk7XHJcbiAgICAgICAgICAgIHBhc3MuYWRkUmVuZGVyVGFyZ2V0KGNvbG9yTmFtZSwgTG9hZE9wLkNMRUFSLCBTdG9yZU9wLlNUT1JFLCB0aGlzLl9jbGVhckNvbG9yVHJhbnNwYXJlbnRCbGFjayk7XHJcbiAgICAgICAgICAgIHBhc3MuYWRkVGV4dHVyZShsZHJDb2xvck5hbWUsICdzY2VuZUNvbG9yTWFwJyk7XHJcbiAgICAgICAgICAgIHBhc3Muc2V0VmVjNCgnZ19wbGF0Zm9ybScsIHRoaXMuX2NvbmZpZ3MucGxhdGZvcm0pO1xyXG4gICAgICAgICAgICBwYXNzLnNldFZlYzQoJ3RleFNpemUnLCB0aGlzLl9meGFhUGFyYW1zKTtcclxuICAgICAgICAgICAgcGFzcy5hZGRRdWV1ZShRdWV1ZUhpbnQuT1BBUVVFKVxyXG4gICAgICAgICAgICAgICAgLmFkZEZ1bGxzY3JlZW5RdWFkKGZ4YWFNYXRlcmlhbCwgMCk7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXNzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfYWRkVUlRdWV1ZShjYW1lcmE6IHJlbmRlcmVyLnNjZW5lLkNhbWVyYSwgcGFzczogcmVuZGVyaW5nLkJhc2ljUmVuZGVyUGFzc0J1aWxkZXIpOiB2b2lkIHtcclxuICAgICAgICAgICAgbGV0IGZsYWdzID0gU2NlbmVGbGFncy5VSTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NhbWVyYUNvbmZpZ3MuZW5hYmxlUHJvZmlsZXIpIHtcclxuICAgICAgICAgICAgICAgIGZsYWdzIHw9IFNjZW5lRmxhZ3MuUFJPRklMRVI7XHJcbiAgICAgICAgICAgICAgICBwYXNzLnNob3dTdGF0aXN0aWNzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwYXNzXHJcbiAgICAgICAgICAgICAgICAuYWRkUXVldWUoUXVldWVIaW50LkJMRU5ELCAnZGVmYXVsdCcsICdkZWZhdWx0JylcclxuICAgICAgICAgICAgICAgIC5hZGRTY2VuZShjYW1lcmEsIGZsYWdzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBGb3J3YXJkXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIHByaXZhdGUgX2FkZEZvcndhcmRSYWRpYW5jZVBhc3NlcyhcclxuICAgICAgICAgICAgcHBsOiByZW5kZXJpbmcuQmFzaWNQaXBlbGluZSxcclxuICAgICAgICAgICAgaWQ6IG51bWJlcixcclxuICAgICAgICAgICAgY2FtZXJhOiByZW5kZXJlci5zY2VuZS5DYW1lcmEsXHJcbiAgICAgICAgICAgIHdpZHRoOiBudW1iZXIsXHJcbiAgICAgICAgICAgIGhlaWdodDogbnVtYmVyLFxyXG4gICAgICAgICAgICBtYWluTGlnaHQ6IHJlbmRlcmVyLnNjZW5lLkRpcmVjdGlvbmFsTGlnaHQgfCBudWxsLFxyXG4gICAgICAgICAgICBjb2xvck5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgZGVwdGhTdGVuY2lsTmFtZTogc3RyaW5nLFxyXG4gICAgICAgICAgICBkaXNhYmxlTVNBQTogYm9vbGVhbiA9IGZhbHNlLFxyXG4gICAgICAgICAgICBkZXB0aFN0ZW5jaWxTdG9yZU9wOiBnZnguU3RvcmVPcCA9IFN0b3JlT3AuRElTQ0FSRCxcclxuICAgICAgICApOiByZW5kZXJpbmcuQmFzaWNSZW5kZXJQYXNzQnVpbGRlciB7XHJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgLy8gRHluYW1pYyBzdGF0ZXNcclxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAvLyBQcmVwYXJlIGNhbWVyYSBjbGVhciBjb2xvclxyXG4gICAgICAgICAgICBjb25zdCBjbGVhckNvbG9yID0gY2FtZXJhLmNsZWFyQ29sb3I7IC8vIFJlZHVjZSBDKysvVFMgaW50ZXJvcFxyXG4gICAgICAgICAgICB0aGlzLl9jbGVhckNvbG9yLnggPSBjbGVhckNvbG9yLng7XHJcbiAgICAgICAgICAgIHRoaXMuX2NsZWFyQ29sb3IueSA9IGNsZWFyQ29sb3IueTtcclxuICAgICAgICAgICAgdGhpcy5fY2xlYXJDb2xvci56ID0gY2xlYXJDb2xvci56O1xyXG4gICAgICAgICAgICB0aGlzLl9jbGVhckNvbG9yLncgPSBjbGVhckNvbG9yLnc7XHJcblxyXG4gICAgICAgICAgICAvLyBQcmVwYXJlIGNhbWVyYSB2aWV3cG9ydFxyXG4gICAgICAgICAgICBjb25zdCB2aWV3cG9ydCA9IGNhbWVyYS52aWV3cG9ydDsgLy8gUmVkdWNlIEMrKy9UUyBpbnRlcm9wXHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZXdwb3J0LmxlZnQgPSBNYXRoLnJvdW5kKHZpZXdwb3J0LnggKiB3aWR0aCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZXdwb3J0LnRvcCA9IE1hdGgucm91bmQodmlld3BvcnQueSAqIGhlaWdodCk7XHJcbiAgICAgICAgICAgIC8vIEhlcmUgd2UgbXVzdCB1c2UgY2FtZXJhLnZpZXdwb3J0LndpZHRoIGluc3RlYWQgb2YgY2FtZXJhLnZpZXdwb3J0LnosIHdoaWNoXHJcbiAgICAgICAgICAgIC8vIGlzIHVuZGVmaW5lZCBvbiBuYXRpdmUgcGxhdGZvcm0uIFRoZSBzYW1lIGFzIGNhbWVyYS52aWV3cG9ydC5oZWlnaHQuXHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZXdwb3J0LndpZHRoID0gTWF0aC5tYXgoTWF0aC5yb3VuZCh2aWV3cG9ydC53aWR0aCAqIHdpZHRoKSwgMSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZXdwb3J0LmhlaWdodCA9IE1hdGgubWF4KE1hdGgucm91bmQodmlld3BvcnQuaGVpZ2h0ICogaGVpZ2h0KSwgMSk7XHJcblxyXG4gICAgICAgICAgICAvLyBNU0FBXHJcbiAgICAgICAgICAgIGNvbnN0IGVuYWJsZU1TQUEgPSAhZGlzYWJsZU1TQUEgJiYgdGhpcy5fY2FtZXJhQ29uZmlncy5lbmFibGVNU0FBO1xyXG4gICAgICAgICAgICBhc3NlcnQoIWVuYWJsZU1TQUEgfHwgdGhpcy5fY2FtZXJhQ29uZmlncy5zaW5nbGVGb3J3YXJkUmFkaWFuY2VQYXNzKTtcclxuXHJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgLy8gRm9yd2FyZCBMaWdodGluZyAoTWFpbiBEaXJlY3Rpb25hbCBMaWdodClcclxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICBjb25zdCBwYXNzID0gdGhpcy5fY2FtZXJhQ29uZmlncy5zaW5nbGVGb3J3YXJkUmFkaWFuY2VQYXNzXHJcbiAgICAgICAgICAgICAgICA/IHRoaXMuX2FkZEZvcndhcmRTaW5nbGVSYWRpYW5jZVBhc3MocHBsLCBpZCwgY2FtZXJhLCBlbmFibGVNU0FBLCB3aWR0aCwgaGVpZ2h0LCBtYWluTGlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JOYW1lLCBkZXB0aFN0ZW5jaWxOYW1lLCBkZXB0aFN0ZW5jaWxTdG9yZU9wKVxyXG4gICAgICAgICAgICAgICAgOiB0aGlzLl9hZGRGb3J3YXJkTXVsdGlwbGVSYWRpYW5jZVBhc3NlcyhwcGwsIGlkLCBjYW1lcmEsIHdpZHRoLCBoZWlnaHQsIG1haW5MaWdodCxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvck5hbWUsIGRlcHRoU3RlbmNpbE5hbWUsIGRlcHRoU3RlbmNpbFN0b3JlT3ApO1xyXG5cclxuICAgICAgICAgICAgLy8gUGxhbmFyIFNoYWRvd1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fY2FtZXJhQ29uZmlncy5lbmFibGVNYWluTGlnaHRQbGFuYXJTaGFkb3dNYXApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkUGxhbmFyU2hhZG93UXVldWUoY2FtZXJhLCBtYWluTGlnaHQsIHBhc3MpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIC8vIEZvcndhcmQgTGlnaHRpbmcgKEJsZW5kKVxyXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIC8vIEFkZCB0cmFuc3BhcmVudCBxdWV1ZVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2NlbmVGbGFncyA9IFNjZW5lRmxhZ3MuQkxFTkQgfFxyXG4gICAgICAgICAgICAgICAgKGNhbWVyYS5nZW9tZXRyeVJlbmRlcmVyXHJcbiAgICAgICAgICAgICAgICAgICAgPyBTY2VuZUZsYWdzLkdFT01FVFJZXHJcbiAgICAgICAgICAgICAgICAgICAgOiBTY2VuZUZsYWdzLk5PTkUpO1xyXG5cclxuICAgICAgICAgICAgcGFzc1xyXG4gICAgICAgICAgICAgICAgLmFkZFF1ZXVlKFF1ZXVlSGludC5CTEVORClcclxuICAgICAgICAgICAgICAgIC5hZGRTY2VuZShjYW1lcmEsIHNjZW5lRmxhZ3MsIG1haW5MaWdodCB8fCB1bmRlZmluZWQpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHBhc3M7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIF9hZGRGb3J3YXJkU2luZ2xlUmFkaWFuY2VQYXNzKFxyXG4gICAgICAgICAgICBwcGw6IHJlbmRlcmluZy5CYXNpY1BpcGVsaW5lLFxyXG4gICAgICAgICAgICBpZDogbnVtYmVyLFxyXG4gICAgICAgICAgICBjYW1lcmE6IHJlbmRlcmVyLnNjZW5lLkNhbWVyYSxcclxuICAgICAgICAgICAgZW5hYmxlTVNBQTogYm9vbGVhbixcclxuICAgICAgICAgICAgd2lkdGg6IG51bWJlcixcclxuICAgICAgICAgICAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgICAgICAgICAgIG1haW5MaWdodDogcmVuZGVyZXIuc2NlbmUuRGlyZWN0aW9uYWxMaWdodCB8IG51bGwsXHJcbiAgICAgICAgICAgIGNvbG9yTmFtZTogc3RyaW5nLFxyXG4gICAgICAgICAgICBkZXB0aFN0ZW5jaWxOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIGRlcHRoU3RlbmNpbFN0b3JlT3A6IGdmeC5TdG9yZU9wXHJcbiAgICAgICAgKTogcmVuZGVyaW5nLkJhc2ljUmVuZGVyUGFzc0J1aWxkZXIge1xyXG4gICAgICAgICAgICBhc3NlcnQodGhpcy5fY2FtZXJhQ29uZmlncy5zaW5nbGVGb3J3YXJkUmFkaWFuY2VQYXNzKTtcclxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAvLyBGb3J3YXJkIExpZ2h0aW5nIChNYWluIERpcmVjdGlvbmFsIExpZ2h0KVxyXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIGxldCBwYXNzOiByZW5kZXJpbmcuQmFzaWNSZW5kZXJQYXNzQnVpbGRlcjtcclxuICAgICAgICAgICAgaWYgKGVuYWJsZU1TQUEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1zYWFSYWRpYW5jZU5hbWUgPSBgTXNhYVJhZGlhbmNlJHtpZH1gO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbXNhYURlcHRoU3RlbmNpbE5hbWUgPSBgTXNhYURlcHRoU3RlbmNpbCR7aWR9YDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNhbXBsZUNvdW50ID0gdGhpcy5fY2FtZXJhQ29uZmlncy5zZXR0aW5ncy5tc2FhLnNhbXBsZUNvdW50O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG1zUGFzcyA9IHBwbC5hZGRNdWx0aXNhbXBsZVJlbmRlclBhc3Mod2lkdGgsIGhlaWdodCwgc2FtcGxlQ291bnQsIDAsICdkZWZhdWx0Jyk7XHJcbiAgICAgICAgICAgICAgICBtc1Bhc3MubmFtZSA9ICdNc2FhRm9yd2FyZFBhc3MnO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIE1TQUEgYWx3YXlzIGRpc2NhcmRzIGRlcHRoIHN0ZW5jaWxcclxuICAgICAgICAgICAgICAgIHRoaXMuX2J1aWxkRm9yd2FyZE1haW5MaWdodFBhc3MobXNQYXNzLCBpZCwgY2FtZXJhLFxyXG4gICAgICAgICAgICAgICAgICAgIG1zYWFSYWRpYW5jZU5hbWUsIG1zYWFEZXB0aFN0ZW5jaWxOYW1lLCBTdG9yZU9wLkRJU0NBUkQsIG1haW5MaWdodCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbXNQYXNzLnJlc29sdmVSZW5kZXJUYXJnZXQobXNhYVJhZGlhbmNlTmFtZSwgY29sb3JOYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICBwYXNzID0gbXNQYXNzO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGFzcyA9IHBwbC5hZGRSZW5kZXJQYXNzKHdpZHRoLCBoZWlnaHQsICdkZWZhdWx0Jyk7XHJcbiAgICAgICAgICAgICAgICBwYXNzLm5hbWUgPSAnRm9yd2FyZFBhc3MnO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2J1aWxkRm9yd2FyZE1haW5MaWdodFBhc3MocGFzcywgaWQsIGNhbWVyYSxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvck5hbWUsIGRlcHRoU3RlbmNpbE5hbWUsIGRlcHRoU3RlbmNpbFN0b3JlT3AsIG1haW5MaWdodCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXNzZXJ0KHBhc3MgIT09IHVuZGVmaW5lZCk7XHJcblxyXG4gICAgICAgICAgICAvLyBGb3J3YXJkIExpZ2h0aW5nIChBZGRpdGl2ZSBMaWdodHMpXHJcbiAgICAgICAgICAgIHRoaXMuZm9yd2FyZExpZ2h0aW5nLmFkZExpZ2h0UXVldWVzKFxyXG4gICAgICAgICAgICAgICAgcGFzcyxcclxuICAgICAgICAgICAgICAgIGNhbWVyYSxcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbmZpZ3MubW9iaWxlTWF4U3BvdExpZ2h0U2hhZG93TWFwcyxcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwYXNzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgYWRkUGxhbmFyU2hhZG93UXVldWUoXHJcbiAgICAgICAgICAgIGNhbWVyYTogcmVuZGVyZXIuc2NlbmUuQ2FtZXJhLFxyXG4gICAgICAgICAgICBtYWluTGlnaHQ6IHJlbmRlcmVyLnNjZW5lLkRpcmVjdGlvbmFsTGlnaHQgfCBudWxsLFxyXG4gICAgICAgICAgICBwYXNzOiByZW5kZXJpbmcuQmFzaWNSZW5kZXJQYXNzQnVpbGRlcixcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcGFzcy5hZGRRdWV1ZShRdWV1ZUhpbnQuQkxFTkQsICdwbGFuYXItc2hhZG93JylcclxuICAgICAgICAgICAgICAgIC5hZGRTY2VuZShcclxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEsXHJcbiAgICAgICAgICAgICAgICAgICAgU2NlbmVGbGFncy5TSEFET1dfQ0FTVEVSIHwgU2NlbmVGbGFncy5QTEFOQVJfU0hBRE9XIHwgU2NlbmVGbGFncy5CTEVORCxcclxuICAgICAgICAgICAgICAgICAgICBtYWluTGlnaHQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJpdmF0ZSBfYWRkRm9yd2FyZE11bHRpcGxlUmFkaWFuY2VQYXNzZXMoXHJcbiAgICAgICAgICAgIHBwbDogcmVuZGVyaW5nLkJhc2ljUGlwZWxpbmUsXHJcbiAgICAgICAgICAgIGlkOiBudW1iZXIsXHJcbiAgICAgICAgICAgIGNhbWVyYTogcmVuZGVyZXIuc2NlbmUuQ2FtZXJhLFxyXG4gICAgICAgICAgICB3aWR0aDogbnVtYmVyLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IG51bWJlcixcclxuICAgICAgICAgICAgbWFpbkxpZ2h0OiByZW5kZXJlci5zY2VuZS5EaXJlY3Rpb25hbExpZ2h0IHwgbnVsbCxcclxuICAgICAgICAgICAgY29sb3JOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIGRlcHRoU3RlbmNpbE5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgZGVwdGhTdGVuY2lsU3RvcmVPcDogZ2Z4LlN0b3JlT3BcclxuICAgICAgICApOiByZW5kZXJpbmcuQmFzaWNSZW5kZXJQYXNzQnVpbGRlciB7XHJcbiAgICAgICAgICAgIGFzc2VydCghdGhpcy5fY2FtZXJhQ29uZmlncy5zaW5nbGVGb3J3YXJkUmFkaWFuY2VQYXNzKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEZvcndhcmQgTGlnaHRpbmcgKE1haW4gRGlyZWN0aW9uYWwgTGlnaHQpXHJcbiAgICAgICAgICAgIGxldCBwYXNzID0gcHBsLmFkZFJlbmRlclBhc3Mod2lkdGgsIGhlaWdodCwgJ2RlZmF1bHQnKTtcclxuICAgICAgICAgICAgcGFzcy5uYW1lID0gJ0ZvcndhcmRQYXNzJztcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0U3RvcmVPcCA9IHRoaXMuZm9yd2FyZExpZ2h0aW5nLmlzTXVsdGlwbGVMaWdodFBhc3Nlc05lZWRlZCgpXHJcbiAgICAgICAgICAgICAgICA/IFN0b3JlT3AuU1RPUkVcclxuICAgICAgICAgICAgICAgIDogZGVwdGhTdGVuY2lsU3RvcmVPcDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2J1aWxkRm9yd2FyZE1haW5MaWdodFBhc3MocGFzcywgaWQsIGNhbWVyYSxcclxuICAgICAgICAgICAgICAgIGNvbG9yTmFtZSwgZGVwdGhTdGVuY2lsTmFtZSwgZmlyc3RTdG9yZU9wLCBtYWluTGlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gRm9yd2FyZCBMaWdodGluZyAoQWRkaXRpdmUgTGlnaHRzKVxyXG4gICAgICAgICAgICBwYXNzID0gdGhpcy5mb3J3YXJkTGlnaHRpbmdcclxuICAgICAgICAgICAgICAgIC5hZGRMaWdodFBhc3Nlcyhjb2xvck5hbWUsIGRlcHRoU3RlbmNpbE5hbWUsIGRlcHRoU3RlbmNpbFN0b3JlT3AsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQsIHdpZHRoLCBoZWlnaHQsIGNhbWVyYSwgdGhpcy5fdmlld3BvcnQsIHBwbCwgcGFzcyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcGFzcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgX2J1aWxkUmVmbGVjdGlvblByb2JlUGFzcyhcclxuICAgICAgICAgICAgcGFzczogcmVuZGVyaW5nLkJhc2ljUmVuZGVyUGFzc0J1aWxkZXIsXHJcbiAgICAgICAgICAgIGlkOiBudW1iZXIsXHJcbiAgICAgICAgICAgIGNhbWVyYTogcmVuZGVyZXIuc2NlbmUuQ2FtZXJhLFxyXG4gICAgICAgICAgICBjb2xvck5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgZGVwdGhTdGVuY2lsTmFtZTogc3RyaW5nLFxyXG4gICAgICAgICAgICBtYWluTGlnaHQ6IHJlbmRlcmVyLnNjZW5lLkRpcmVjdGlvbmFsTGlnaHQgfCBudWxsLFxyXG4gICAgICAgICAgICBzY2VuZTogcmVuZGVyZXIuUmVuZGVyU2NlbmUgfCBudWxsID0gbnVsbCxcclxuICAgICAgICApOiB2b2lkIHtcclxuICAgICAgICAgICAgLy8gc2V0IHZpZXdwb3J0XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yU3RvcmVPcCA9IHRoaXMuX2NhbWVyYUNvbmZpZ3MuZW5hYmxlTVNBQSA/IFN0b3JlT3AuRElTQ0FSRCA6IFN0b3JlT3AuU1RPUkU7XHJcblxyXG4gICAgICAgICAgICAvLyBiaW5kIG91dHB1dCByZW5kZXIgdGFyZ2V0XHJcbiAgICAgICAgICAgIGlmIChmb3J3YXJkTmVlZENsZWFyQ29sb3IoY2FtZXJhKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVmbGVjdGlvblByb2JlQ2xlYXJDb2xvci54ID0gY2FtZXJhLmNsZWFyQ29sb3IueDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlZmxlY3Rpb25Qcm9iZUNsZWFyQ29sb3IueSA9IGNhbWVyYS5jbGVhckNvbG9yLnk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWZsZWN0aW9uUHJvYmVDbGVhckNvbG9yLnogPSBjYW1lcmEuY2xlYXJDb2xvci56O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2xlYXJDb2xvciA9IHJlbmRlcmluZy5wYWNrUkdCRSh0aGlzLl9yZWZsZWN0aW9uUHJvYmVDbGVhckNvbG9yKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NsZWFyQ29sb3IueCA9IGNsZWFyQ29sb3IueDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NsZWFyQ29sb3IueSA9IGNsZWFyQ29sb3IueTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NsZWFyQ29sb3IueiA9IGNsZWFyQ29sb3IuejtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NsZWFyQ29sb3IudyA9IGNsZWFyQ29sb3IudztcclxuICAgICAgICAgICAgICAgIHBhc3MuYWRkUmVuZGVyVGFyZ2V0KGNvbG9yTmFtZSwgTG9hZE9wLkNMRUFSLCBjb2xvclN0b3JlT3AsIHRoaXMuX2NsZWFyQ29sb3IpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGFzcy5hZGRSZW5kZXJUYXJnZXQoY29sb3JOYW1lLCBMb2FkT3AuTE9BRCwgY29sb3JTdG9yZU9wKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gYmluZCBkZXB0aCBzdGVuY2lsIGJ1ZmZlclxyXG4gICAgICAgICAgICBpZiAoY2FtZXJhLmNsZWFyRmxhZyAmIENsZWFyRmxhZ0JpdC5ERVBUSF9TVEVOQ0lMKSB7XHJcbiAgICAgICAgICAgICAgICBwYXNzLmFkZERlcHRoU3RlbmNpbChcclxuICAgICAgICAgICAgICAgICAgICBkZXB0aFN0ZW5jaWxOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIExvYWRPcC5DTEVBUixcclxuICAgICAgICAgICAgICAgICAgICBTdG9yZU9wLkRJU0NBUkQsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLmNsZWFyRGVwdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLmNsZWFyU3RlbmNpbCxcclxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEuY2xlYXJGbGFnICYgQ2xlYXJGbGFnQml0LkRFUFRIX1NURU5DSUwsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGFzcy5hZGREZXB0aFN0ZW5jaWwoZGVwdGhTdGVuY2lsTmFtZSwgTG9hZE9wLkxPQUQsIFN0b3JlT3AuRElTQ0FSRCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFNldCBzaGFkb3cgbWFwIGlmIGVuYWJsZWRcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NhbWVyYUNvbmZpZ3MuZW5hYmxlTWFpbkxpZ2h0U2hhZG93TWFwKSB7XHJcbiAgICAgICAgICAgICAgICBwYXNzLmFkZFRleHR1cmUoYFNoYWRvd01hcCR7aWR9YCwgJ2NjX3NoYWRvd01hcCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBUT0RPKHpob3V6aGVuZ2xvbmcpOiBTZXBhcmF0ZSBPUEFRVUUgYW5kIE1BU0sgcXVldWVcclxuXHJcbiAgICAgICAgICAgIC8vIGFkZCBvcGFxdWUgYW5kIG1hc2sgcXVldWVcclxuICAgICAgICAgICAgcGFzcy5hZGRRdWV1ZShRdWV1ZUhpbnQuTk9ORSwgJ3JlZmxlY3QtbWFwJykgLy8gQ3VycmVudGx5IHdlIHB1dCBPUEFRVUUgYW5kIE1BU0sgaW50byBvbmUgcXVldWUsIHNvIFF1ZXVlSGludCBpcyBOT05FXHJcbiAgICAgICAgICAgICAgICAuYWRkU2NlbmUoY2FtZXJhLFxyXG4gICAgICAgICAgICAgICAgICAgIFNjZW5lRmxhZ3MuT1BBUVVFIHwgU2NlbmVGbGFncy5NQVNLIHwgU2NlbmVGbGFncy5SRUZMRUNUSU9OX1BST0JFLFxyXG4gICAgICAgICAgICAgICAgICAgIG1haW5MaWdodCB8fCB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgc2NlbmUgPyBzY2VuZSA6IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIF90cnlBZGRSZWZsZWN0aW9uUHJvYmVQYXNzZXMocHBsOiByZW5kZXJpbmcuQmFzaWNQaXBlbGluZSwgaWQ6IG51bWJlcixcclxuICAgICAgICAgICAgbWFpbkxpZ2h0OiByZW5kZXJlci5zY2VuZS5EaXJlY3Rpb25hbExpZ2h0IHwgbnVsbCxcclxuICAgICAgICAgICAgc2NlbmU6IHJlbmRlcmVyLlJlbmRlclNjZW5lIHwgbnVsbCxcclxuICAgICAgICApOiB2b2lkIHtcclxuICAgICAgICAgICAgY29uc3QgcmVmbGVjdGlvblByb2JlTWFuYWdlciA9IGNjbGVnYWN5LmludGVybmFsLnJlZmxlY3Rpb25Qcm9iZU1hbmFnZXIgYXMgUmVmbGVjdGlvblByb2JlTWFuYWdlciB8IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgaWYgKCFyZWZsZWN0aW9uUHJvYmVNYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgcHJvYmVzID0gcmVmbGVjdGlvblByb2JlTWFuYWdlci5nZXRQcm9iZXMoKTtcclxuICAgICAgICAgICAgY29uc3QgbWF4UHJvYmVDb3VudCA9IDQ7XHJcbiAgICAgICAgICAgIGxldCBwcm9iZUlEID0gMDtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBwcm9iZSBvZiBwcm9iZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmICghcHJvYmUubmVlZFJlbmRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJlYSA9IHByb2JlLnJlbmRlckFyZWEoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gTWF0aC5tYXgoTWF0aC5mbG9vcihhcmVhLngpLCAxKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IE1hdGgubWF4KE1hdGguZmxvb3IoYXJlYS55KSwgMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHByb2JlLnByb2JlVHlwZSA9PT0gcmVuZGVyZXIuc2NlbmUuUHJvYmVUeXBlLlBMQU5BUikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5fY2FtZXJhQ29uZmlncy5lbmFibGVQbGFuYXJSZWZsZWN0aW9uUHJvYmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdpbmRvdzogcmVuZGVyZXIuUmVuZGVyV2luZG93ID0gcHJvYmUucmVhbHRpbWVQbGFuYXJUZXh0dXJlIS53aW5kb3chO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yTmFtZSA9IGBQbGFuYXJQcm9iZVJUJHtwcm9iZUlEfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVwdGhTdGVuY2lsTmFtZSA9IGBQbGFuYXJQcm9iZURTJHtwcm9iZUlEfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUHJvYmVSZXNvdXJjZVxyXG4gICAgICAgICAgICAgICAgICAgIHBwbC5hZGRSZW5kZXJXaW5kb3coY29sb3JOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYW1lcmFDb25maWdzLnJhZGlhbmNlRm9ybWF0LCB3aWR0aCwgaGVpZ2h0LCB3aW5kb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBwbC5hZGREZXB0aFN0ZW5jaWwoZGVwdGhTdGVuY2lsTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2Z4LkZvcm1hdC5ERVBUSF9TVEVOQ0lMLCB3aWR0aCwgaGVpZ2h0LCBSZXNvdXJjZVJlc2lkZW5jeS5NRU1PUllMRVNTKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVuZGVyaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvYmVQYXNzID0gcHBsLmFkZFJlbmRlclBhc3Mod2lkdGgsIGhlaWdodCwgJ2RlZmF1bHQnKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9iZVBhc3MubmFtZSA9IGBQbGFuYXJSZWZsZWN0aW9uUHJvYmUke3Byb2JlSUR9YDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9idWlsZFJlZmxlY3Rpb25Qcm9iZVBhc3MocHJvYmVQYXNzLCBpZCwgcHJvYmUuY2FtZXJhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvck5hbWUsIGRlcHRoU3RlbmNpbE5hbWUsIG1haW5MaWdodCwgc2NlbmUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChFRElUT1IpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBmYWNlSWR4ID0gMDsgZmFjZUlkeCA8IHByb2JlLmJha2VkQ3ViZVRleHR1cmVzLmxlbmd0aDsgZmFjZUlkeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2JlLnVwZGF0ZUNhbWVyYURpcihmYWNlSWR4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgd2luZG93OiByZW5kZXJlci5SZW5kZXJXaW5kb3cgPSBwcm9iZS5iYWtlZEN1YmVUZXh0dXJlc1tmYWNlSWR4XS53aW5kb3chO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xvck5hbWUgPSBgQ3ViZVByb2JlUlQke3Byb2JlSUR9JHtmYWNlSWR4fWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlcHRoU3RlbmNpbE5hbWUgPSBgQ3ViZVByb2JlRFMke3Byb2JlSUR9JHtmYWNlSWR4fWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFByb2JlUmVzb3VyY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHBsLmFkZFJlbmRlcldpbmRvdyhjb2xvck5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYW1lcmFDb25maWdzLnJhZGlhbmNlRm9ybWF0LCB3aWR0aCwgaGVpZ2h0LCB3aW5kb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcGwuYWRkRGVwdGhTdGVuY2lsKGRlcHRoU3RlbmNpbE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZnguRm9ybWF0LkRFUFRIX1NURU5DSUwsIHdpZHRoLCBoZWlnaHQsIFJlc291cmNlUmVzaWRlbmN5Lk1FTU9SWUxFU1MpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVuZGVyaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2JlUGFzcyA9IHBwbC5hZGRSZW5kZXJQYXNzKHdpZHRoLCBoZWlnaHQsICdkZWZhdWx0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2JlUGFzcy5uYW1lID0gYEN1YmVQcm9iZSR7cHJvYmVJRH0ke2ZhY2VJZHh9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYnVpbGRSZWZsZWN0aW9uUHJvYmVQYXNzKHByb2JlUGFzcywgaWQsIHByb2JlLmNhbWVyYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yTmFtZSwgZGVwdGhTdGVuY2lsTmFtZSwgbWFpbkxpZ2h0LCBzY2VuZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2JlLm5lZWRSZW5kZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICsrcHJvYmVJRDtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9iZUlEID09PSBtYXhQcm9iZUNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgX2luaXRNYXRlcmlhbHMocHBsOiByZW5kZXJpbmcuQmFzaWNQaXBlbGluZSk6IG51bWJlciB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pbml0aWFsaXplZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNldHVwUGlwZWxpbmVDb25maWdzKHBwbCwgdGhpcy5fY29uZmlncyk7XHJcblxyXG4gICAgICAgICAgICAvLyBXaGVuIGFkZCBuZXcgZWZmZWN0IGFzc2V0LCBwbGVhc2UgYWRkIGl0cyB1dWlkIHRvIHRoZSBkZXBlbmRlbnRBc3NldHMgaW4gY2MuY29uZmlnLmpzb24uXHJcbiAgICAgICAgICAgIHRoaXMuX2NvcHlBbmRUb25lbWFwTWF0ZXJpYWwuX3V1aWQgPSBgYnVpbHRpbi1waXBlbGluZS10b25lLW1hcHBpbmctbWF0ZXJpYWxgO1xyXG4gICAgICAgICAgICB0aGlzLl9jb3B5QW5kVG9uZW1hcE1hdGVyaWFsLmluaXRpYWxpemUoeyBlZmZlY3ROYW1lOiAncGlwZWxpbmUvcG9zdC1wcm9jZXNzL3RvbmUtbWFwcGluZycgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fY29weUFuZFRvbmVtYXBNYXRlcmlhbC5lZmZlY3RBc3NldCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5pdGlhbGl6ZWQgPyAwIDogMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyaW5nLnNldEN1c3RvbVBpcGVsaW5lKCdCdWlsdGluJywgbmV3IEJ1aWx0aW5QaXBlbGluZUJ1aWxkZXIoKSk7XHJcblxyXG59IC8vIGlmIChyZW5kZXJpbmcpXHJcbiJdfQ==