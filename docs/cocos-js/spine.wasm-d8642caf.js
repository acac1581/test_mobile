System.register([], (function (exports) {
  'use strict';
  return {
    execute: (function () {

      var spineWasm = exports('default', (() => {
        var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
        return function (spineWasm) {
          if (spineWasm === void 0) {
            spineWasm = {};
          }
          var Module = typeof spineWasm != "undefined" ? spineWasm : {};
          var readyPromiseResolve, readyPromiseReject;
          Module["ready"] = new Promise((resolve, reject) => {
            readyPromiseResolve = resolve;
            readyPromiseReject = reject;
          });
          var moduleOverrides = Object.assign({}, Module);
          var ENVIRONMENT_IS_WEB = true;
          var scriptDirectory = "";
          function locateFile(path) {
            if (Module["locateFile"]) {
              return Module["locateFile"](path, scriptDirectory);
            }
            return scriptDirectory + path;
          }
          var readBinary;
          {
            if (typeof document != "undefined" && document.currentScript) {
              scriptDirectory = document.currentScript.src;
            }
            if (_scriptDir) {
              scriptDirectory = _scriptDir;
            }
            if (scriptDirectory.indexOf("blob:") !== 0) {
              scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1);
            } else {
              scriptDirectory = "";
            }
          }
          var out = Module["print"] || console.log.bind(console);
          var err = Module["printErr"] || console.error.bind(console);
          Object.assign(Module, moduleOverrides);
          moduleOverrides = null;
          if (Module["arguments"]) Module["arguments"];
          if (Module["thisProgram"]) Module["thisProgram"];
          if (Module["quit"]) Module["quit"];
          var wasmBinary;
          if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
          Module["noExitRuntime"] || true;
          if (typeof WebAssembly != "object") {
            abort("no native wasm support detected");
          }
          var wasmMemory;
          var ABORT = false;
          function assert(condition, text) {
            if (!condition) {
              abort(text);
            }
          }
          var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
          function updateMemoryViews() {
            var b = wasmMemory.buffer;
            Module["HEAP8"] = HEAP8 = new Int8Array(b);
            Module["HEAP16"] = HEAP16 = new Int16Array(b);
            Module["HEAP32"] = HEAP32 = new Int32Array(b);
            Module["HEAPU8"] = HEAPU8 = new Uint8Array(b);
            Module["HEAPU16"] = HEAPU16 = new Uint16Array(b);
            Module["HEAPU32"] = HEAPU32 = new Uint32Array(b);
            Module["HEAPF32"] = HEAPF32 = new Float32Array(b);
            Module["HEAPF64"] = HEAPF64 = new Float64Array(b);
          }
          var wasmTable;
          var __ATPRERUN__ = [];
          var __ATINIT__ = [];
          var __ATPOSTRUN__ = [];
          function preRun() {
            if (Module["preRun"]) {
              if (typeof Module["preRun"] == "function") Module["preRun"] = [Module["preRun"]];
              while (Module["preRun"].length) {
                addOnPreRun(Module["preRun"].shift());
              }
            }
            callRuntimeCallbacks(__ATPRERUN__);
          }
          function initRuntime() {
            callRuntimeCallbacks(__ATINIT__);
          }
          function postRun() {
            if (Module["postRun"]) {
              if (typeof Module["postRun"] == "function") Module["postRun"] = [Module["postRun"]];
              while (Module["postRun"].length) {
                addOnPostRun(Module["postRun"].shift());
              }
            }
            callRuntimeCallbacks(__ATPOSTRUN__);
          }
          function addOnPreRun(cb) {
            __ATPRERUN__.unshift(cb);
          }
          function addOnInit(cb) {
            __ATINIT__.unshift(cb);
          }
          function addOnPostRun(cb) {
            __ATPOSTRUN__.unshift(cb);
          }
          var runDependencies = 0;
          var dependenciesFulfilled = null;
          function addRunDependency(id) {
            runDependencies++;
            if (Module["monitorRunDependencies"]) {
              Module["monitorRunDependencies"](runDependencies);
            }
          }
          function removeRunDependency(id) {
            runDependencies--;
            if (Module["monitorRunDependencies"]) {
              Module["monitorRunDependencies"](runDependencies);
            }
            if (runDependencies == 0) {
              if (dependenciesFulfilled) {
                var callback = dependenciesFulfilled;
                dependenciesFulfilled = null;
                callback();
              }
            }
          }
          function abort(what) {
            if (Module["onAbort"]) {
              Module["onAbort"](what);
            }
            what = "Aborted(" + what + ")";
            err(what);
            ABORT = true;
            what += ". Build with -sASSERTIONS for more info.";
            var e = new WebAssembly.RuntimeError(what);
            readyPromiseReject(e);
            throw e;
          }
          var dataURIPrefix = "data:application/octet-stream;base64,";
          function isDataURI(filename) {
            return filename.startsWith(dataURIPrefix);
          }
          var wasmBinaryFile;
          wasmBinaryFile = "spine.wasm";
          if (!isDataURI(wasmBinaryFile)) {
            wasmBinaryFile = locateFile(wasmBinaryFile);
          }
          function getBinary(file) {
            try {
              if (file == wasmBinaryFile && wasmBinary) {
                return new Uint8Array(wasmBinary);
              }
              if (readBinary) ;
              throw "both async and sync fetching of the wasm failed";
            } catch (err) {
              abort(err);
            }
          }
          function getBinaryPromise(binaryFile) {
            if (!wasmBinary && (ENVIRONMENT_IS_WEB )) {
              if (typeof fetch == "function") {
                return fetch(binaryFile, {
                  credentials: "same-origin"
                }).then(response => {
                  if (!response["ok"]) {
                    throw "failed to load wasm binary file at '" + binaryFile + "'";
                  }
                  return response["arrayBuffer"]();
                }).catch(() => getBinary(binaryFile));
              }
            }
            return Promise.resolve().then(() => getBinary(binaryFile));
          }
          function instantiateArrayBuffer(binaryFile, imports, receiver) {
            return getBinaryPromise(binaryFile).then(binary => {
              return WebAssembly.instantiate(binary, imports);
            }).then(instance => {
              return instance;
            }).then(receiver, reason => {
              err("failed to asynchronously prepare wasm: " + reason);
              abort(reason);
            });
          }
          function instantiateAsync(binary, binaryFile, imports, callback) {
            if (!binary && typeof WebAssembly.instantiateStreaming == "function" && !isDataURI(binaryFile) && typeof fetch == "function") {
              return fetch(binaryFile, {
                credentials: "same-origin"
              }).then(response => {
                var result = WebAssembly.instantiateStreaming(response, imports);
                return result.then(callback, function (reason) {
                  err("wasm streaming compile failed: " + reason);
                  err("falling back to ArrayBuffer instantiation");
                  return instantiateArrayBuffer(binaryFile, imports, callback);
                });
              });
            } else {
              return instantiateArrayBuffer(binaryFile, imports, callback);
            }
          }
          function createWasm() {
            var info = {
              "a": wasmImports
            };
            function receiveInstance(instance, module) {
              var exports = instance.exports;
              Module["asm"] = exports;
              wasmMemory = Module["asm"]["I"];
              updateMemoryViews();
              wasmTable = Module["asm"]["K"];
              addOnInit(Module["asm"]["J"]);
              removeRunDependency();
              return exports;
            }
            addRunDependency();
            function receiveInstantiationResult(result) {
              receiveInstance(result["instance"]);
            }
            if (Module["instantiateWasm"]) {
              try {
                return Module["instantiateWasm"](info, receiveInstance);
              } catch (e) {
                err("Module.instantiateWasm callback failed with error: " + e);
                readyPromiseReject(e);
              }
            }
            instantiateAsync(wasmBinary, wasmBinaryFile, info, receiveInstantiationResult).catch(readyPromiseReject);
            return {};
          }
          function callRuntimeCallbacks(callbacks) {
            while (callbacks.length > 0) {
              callbacks.shift()(Module);
            }
          }
          var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : undefined;
          function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead) {
            var endIdx = idx + maxBytesToRead;
            var endPtr = idx;
            while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
            if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
              return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
            }
            var str = "";
            while (idx < endPtr) {
              var u0 = heapOrArray[idx++];
              if (!(u0 & 128)) {
                str += String.fromCharCode(u0);
                continue;
              }
              var u1 = heapOrArray[idx++] & 63;
              if ((u0 & 224) == 192) {
                str += String.fromCharCode((u0 & 31) << 6 | u1);
                continue;
              }
              var u2 = heapOrArray[idx++] & 63;
              if ((u0 & 240) == 224) {
                u0 = (u0 & 15) << 12 | u1 << 6 | u2;
              } else {
                u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
              }
              if (u0 < 65536) {
                str += String.fromCharCode(u0);
              } else {
                var ch = u0 - 65536;
                str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
              }
            }
            return str;
          }
          function UTF8ToString(ptr, maxBytesToRead) {
            return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
          }
          function ___syscall_fcntl64(fd, cmd, varargs) {
            return 0;
          }
          function ___syscall_ioctl(fd, op, varargs) {
            return 0;
          }
          function ___syscall_openat(dirfd, path, flags, varargs) {
          }
          function __embind_register_bigint(primitiveType, name, size, minRange, maxRange) {}
          function getShiftFromSize(size) {
            switch (size) {
              case 1:
                return 0;
              case 2:
                return 1;
              case 4:
                return 2;
              case 8:
                return 3;
              default:
                throw new TypeError(`Unknown type size: ${size}`);
            }
          }
          function embind_init_charCodes() {
            var codes = new Array(256);
            for (var i = 0; i < 256; ++i) {
              codes[i] = String.fromCharCode(i);
            }
            embind_charCodes = codes;
          }
          var embind_charCodes = undefined;
          function readLatin1String(ptr) {
            var ret = "";
            var c = ptr;
            while (HEAPU8[c]) {
              ret += embind_charCodes[HEAPU8[c++]];
            }
            return ret;
          }
          var awaitingDependencies = {};
          var registeredTypes = {};
          var typeDependencies = {};
          var char_0 = 48;
          var char_9 = 57;
          function makeLegalFunctionName(name) {
            if (undefined === name) {
              return "_unknown";
            }
            name = name.replace(/[^a-zA-Z0-9_]/g, "$");
            var f = name.charCodeAt(0);
            if (f >= char_0 && f <= char_9) {
              return `_${name}`;
            }
            return name;
          }
          function createNamedFunction(name, body) {
            name = makeLegalFunctionName(name);
            return {
              [name]: function () {
                return body.apply(this, arguments);
              }
            }[name];
          }
          function extendError(baseErrorType, errorName) {
            var errorClass = createNamedFunction(errorName, function (message) {
              this.name = errorName;
              this.message = message;
              var stack = new Error(message).stack;
              if (stack !== undefined) {
                this.stack = this.toString() + "\n" + stack.replace(/^Error(:[^\n]*)?\n/, "");
              }
            });
            errorClass.prototype = Object.create(baseErrorType.prototype);
            errorClass.prototype.constructor = errorClass;
            errorClass.prototype.toString = function () {
              if (this.message === undefined) {
                return this.name;
              } else {
                return `${this.name}: ${this.message}`;
              }
            };
            return errorClass;
          }
          var BindingError = undefined;
          function throwBindingError(message) {
            throw new BindingError(message);
          }
          var InternalError = undefined;
          function throwInternalError(message) {
            throw new InternalError(message);
          }
          function whenDependentTypesAreResolved(myTypes, dependentTypes, getTypeConverters) {
            myTypes.forEach(function (type) {
              typeDependencies[type] = dependentTypes;
            });
            function onComplete(typeConverters) {
              var myTypeConverters = getTypeConverters(typeConverters);
              if (myTypeConverters.length !== myTypes.length) {
                throwInternalError("Mismatched type converter count");
              }
              for (var i = 0; i < myTypes.length; ++i) {
                registerType(myTypes[i], myTypeConverters[i]);
              }
            }
            var typeConverters = new Array(dependentTypes.length);
            var unregisteredTypes = [];
            var registered = 0;
            dependentTypes.forEach((dt, i) => {
              if (registeredTypes.hasOwnProperty(dt)) {
                typeConverters[i] = registeredTypes[dt];
              } else {
                unregisteredTypes.push(dt);
                if (!awaitingDependencies.hasOwnProperty(dt)) {
                  awaitingDependencies[dt] = [];
                }
                awaitingDependencies[dt].push(() => {
                  typeConverters[i] = registeredTypes[dt];
                  ++registered;
                  if (registered === unregisteredTypes.length) {
                    onComplete(typeConverters);
                  }
                });
              }
            });
            if (0 === unregisteredTypes.length) {
              onComplete(typeConverters);
            }
          }
          function registerType(rawType, registeredInstance, options) {
            if (options === void 0) {
              options = {};
            }
            if (!("argPackAdvance" in registeredInstance)) {
              throw new TypeError("registerType registeredInstance requires argPackAdvance");
            }
            var name = registeredInstance.name;
            if (!rawType) {
              throwBindingError(`type "${name}" must have a positive integer typeid pointer`);
            }
            if (registeredTypes.hasOwnProperty(rawType)) {
              if (options.ignoreDuplicateRegistrations) {
                return;
              } else {
                throwBindingError(`Cannot register type '${name}' twice`);
              }
            }
            registeredTypes[rawType] = registeredInstance;
            delete typeDependencies[rawType];
            if (awaitingDependencies.hasOwnProperty(rawType)) {
              var callbacks = awaitingDependencies[rawType];
              delete awaitingDependencies[rawType];
              callbacks.forEach(cb => cb());
            }
          }
          function __embind_register_bool(rawType, name, size, trueValue, falseValue) {
            var shift = getShiftFromSize(size);
            name = readLatin1String(name);
            registerType(rawType, {
              name: name,
              "fromWireType": function (wt) {
                return !!wt;
              },
              "toWireType": function (destructors, o) {
                return o ? trueValue : falseValue;
              },
              "argPackAdvance": 8,
              "readValueFromPointer": function (pointer) {
                var heap;
                if (size === 1) {
                  heap = HEAP8;
                } else if (size === 2) {
                  heap = HEAP16;
                } else if (size === 4) {
                  heap = HEAP32;
                } else {
                  throw new TypeError("Unknown boolean type size: " + name);
                }
                return this["fromWireType"](heap[pointer >> shift]);
              },
              destructorFunction: null
            });
          }
          function ClassHandle_isAliasOf(other) {
            if (!(this instanceof ClassHandle)) {
              return false;
            }
            if (!(other instanceof ClassHandle)) {
              return false;
            }
            var leftClass = this.$$.ptrType.registeredClass;
            var left = this.$$.ptr;
            var rightClass = other.$$.ptrType.registeredClass;
            var right = other.$$.ptr;
            while (leftClass.baseClass) {
              left = leftClass.upcast(left);
              leftClass = leftClass.baseClass;
            }
            while (rightClass.baseClass) {
              right = rightClass.upcast(right);
              rightClass = rightClass.baseClass;
            }
            return leftClass === rightClass && left === right;
          }
          function shallowCopyInternalPointer(o) {
            return {
              count: o.count,
              deleteScheduled: o.deleteScheduled,
              preservePointerOnDelete: o.preservePointerOnDelete,
              ptr: o.ptr,
              ptrType: o.ptrType,
              smartPtr: o.smartPtr,
              smartPtrType: o.smartPtrType
            };
          }
          function throwInstanceAlreadyDeleted(obj) {
            function getInstanceTypeName(handle) {
              return handle.$$.ptrType.registeredClass.name;
            }
            throwBindingError(getInstanceTypeName(obj) + " instance already deleted");
          }
          var finalizationRegistry = false;
          function detachFinalizer(handle) {}
          function runDestructor($$) {
            if ($$.smartPtr) {
              $$.smartPtrType.rawDestructor($$.smartPtr);
            } else {
              $$.ptrType.registeredClass.rawDestructor($$.ptr);
            }
          }
          function releaseClassHandle($$) {
            $$.count.value -= 1;
            var toDelete = 0 === $$.count.value;
            if (toDelete) {
              runDestructor($$);
            }
          }
          function downcastPointer(ptr, ptrClass, desiredClass) {
            if (ptrClass === desiredClass) {
              return ptr;
            }
            if (undefined === desiredClass.baseClass) {
              return null;
            }
            var rv = downcastPointer(ptr, ptrClass, desiredClass.baseClass);
            if (rv === null) {
              return null;
            }
            return desiredClass.downcast(rv);
          }
          var registeredPointers = {};
          function getInheritedInstanceCount() {
            return Object.keys(registeredInstances).length;
          }
          function getLiveInheritedInstances() {
            var rv = [];
            for (var k in registeredInstances) {
              if (registeredInstances.hasOwnProperty(k)) {
                rv.push(registeredInstances[k]);
              }
            }
            return rv;
          }
          var deletionQueue = [];
          function flushPendingDeletes() {
            while (deletionQueue.length) {
              var obj = deletionQueue.pop();
              obj.$$.deleteScheduled = false;
              obj["delete"]();
            }
          }
          var delayFunction = undefined;
          function setDelayFunction(fn) {
            delayFunction = fn;
            if (deletionQueue.length && delayFunction) {
              delayFunction(flushPendingDeletes);
            }
          }
          function init_embind() {
            Module["getInheritedInstanceCount"] = getInheritedInstanceCount;
            Module["getLiveInheritedInstances"] = getLiveInheritedInstances;
            Module["flushPendingDeletes"] = flushPendingDeletes;
            Module["setDelayFunction"] = setDelayFunction;
          }
          var registeredInstances = {};
          function getBasestPointer(class_, ptr) {
            if (ptr === undefined) {
              throwBindingError("ptr should not be undefined");
            }
            while (class_.baseClass) {
              ptr = class_.upcast(ptr);
              class_ = class_.baseClass;
            }
            return ptr;
          }
          function getInheritedInstance(class_, ptr) {
            ptr = getBasestPointer(class_, ptr);
            return registeredInstances[ptr];
          }
          function makeClassHandle(prototype, record) {
            if (!record.ptrType || !record.ptr) {
              throwInternalError("makeClassHandle requires ptr and ptrType");
            }
            var hasSmartPtrType = !!record.smartPtrType;
            var hasSmartPtr = !!record.smartPtr;
            if (hasSmartPtrType !== hasSmartPtr) {
              throwInternalError("Both smartPtrType and smartPtr must be specified");
            }
            record.count = {
              value: 1
            };
            return attachFinalizer(Object.create(prototype, {
              $$: {
                value: record
              }
            }));
          }
          function RegisteredPointer_fromWireType(ptr) {
            var rawPointer = this.getPointee(ptr);
            if (!rawPointer) {
              this.destructor(ptr);
              return null;
            }
            var registeredInstance = getInheritedInstance(this.registeredClass, rawPointer);
            if (undefined !== registeredInstance) {
              if (0 === registeredInstance.$$.count.value) {
                registeredInstance.$$.ptr = rawPointer;
                registeredInstance.$$.smartPtr = ptr;
                return registeredInstance["clone"]();
              } else {
                var rv = registeredInstance["clone"]();
                this.destructor(ptr);
                return rv;
              }
            }
            function makeDefaultHandle() {
              if (this.isSmartPointer) {
                return makeClassHandle(this.registeredClass.instancePrototype, {
                  ptrType: this.pointeeType,
                  ptr: rawPointer,
                  smartPtrType: this,
                  smartPtr: ptr
                });
              } else {
                return makeClassHandle(this.registeredClass.instancePrototype, {
                  ptrType: this,
                  ptr: ptr
                });
              }
            }
            var actualType = this.registeredClass.getActualType(rawPointer);
            var registeredPointerRecord = registeredPointers[actualType];
            if (!registeredPointerRecord) {
              return makeDefaultHandle.call(this);
            }
            var toType;
            if (this.isConst) {
              toType = registeredPointerRecord.constPointerType;
            } else {
              toType = registeredPointerRecord.pointerType;
            }
            var dp = downcastPointer(rawPointer, this.registeredClass, toType.registeredClass);
            if (dp === null) {
              return makeDefaultHandle.call(this);
            }
            if (this.isSmartPointer) {
              return makeClassHandle(toType.registeredClass.instancePrototype, {
                ptrType: toType,
                ptr: dp,
                smartPtrType: this,
                smartPtr: ptr
              });
            } else {
              return makeClassHandle(toType.registeredClass.instancePrototype, {
                ptrType: toType,
                ptr: dp
              });
            }
          }
          function attachFinalizer(handle) {
            if ("undefined" === typeof FinalizationRegistry) {
              attachFinalizer = handle => handle;
              return handle;
            }
            finalizationRegistry = new FinalizationRegistry(info => {
              releaseClassHandle(info.$$);
            });
            attachFinalizer = handle => {
              var $$ = handle.$$;
              var hasSmartPtr = !!$$.smartPtr;
              if (hasSmartPtr) {
                var info = {
                  $$: $$
                };
                finalizationRegistry.register(handle, info, handle);
              }
              return handle;
            };
            detachFinalizer = handle => finalizationRegistry.unregister(handle);
            return attachFinalizer(handle);
          }
          function ClassHandle_clone() {
            if (!this.$$.ptr) {
              throwInstanceAlreadyDeleted(this);
            }
            if (this.$$.preservePointerOnDelete) {
              this.$$.count.value += 1;
              return this;
            } else {
              var clone = attachFinalizer(Object.create(Object.getPrototypeOf(this), {
                $$: {
                  value: shallowCopyInternalPointer(this.$$)
                }
              }));
              clone.$$.count.value += 1;
              clone.$$.deleteScheduled = false;
              return clone;
            }
          }
          function ClassHandle_delete() {
            if (!this.$$.ptr) {
              throwInstanceAlreadyDeleted(this);
            }
            if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
              throwBindingError("Object already scheduled for deletion");
            }
            detachFinalizer(this);
            releaseClassHandle(this.$$);
            if (!this.$$.preservePointerOnDelete) {
              this.$$.smartPtr = undefined;
              this.$$.ptr = undefined;
            }
          }
          function ClassHandle_isDeleted() {
            return !this.$$.ptr;
          }
          function ClassHandle_deleteLater() {
            if (!this.$$.ptr) {
              throwInstanceAlreadyDeleted(this);
            }
            if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
              throwBindingError("Object already scheduled for deletion");
            }
            deletionQueue.push(this);
            if (deletionQueue.length === 1 && delayFunction) {
              delayFunction(flushPendingDeletes);
            }
            this.$$.deleteScheduled = true;
            return this;
          }
          function init_ClassHandle() {
            ClassHandle.prototype["isAliasOf"] = ClassHandle_isAliasOf;
            ClassHandle.prototype["clone"] = ClassHandle_clone;
            ClassHandle.prototype["delete"] = ClassHandle_delete;
            ClassHandle.prototype["isDeleted"] = ClassHandle_isDeleted;
            ClassHandle.prototype["deleteLater"] = ClassHandle_deleteLater;
          }
          function ClassHandle() {}
          function ensureOverloadTable(proto, methodName, humanName) {
            if (undefined === proto[methodName].overloadTable) {
              var prevFunc = proto[methodName];
              proto[methodName] = function () {
                if (!proto[methodName].overloadTable.hasOwnProperty(arguments.length)) {
                  throwBindingError(`Function '${humanName}' called with an invalid number of arguments (${arguments.length}) - expects one of (${proto[methodName].overloadTable})!`);
                }
                return proto[methodName].overloadTable[arguments.length].apply(this, arguments);
              };
              proto[methodName].overloadTable = [];
              proto[methodName].overloadTable[prevFunc.argCount] = prevFunc;
            }
          }
          function exposePublicSymbol(name, value, numArguments) {
            if (Module.hasOwnProperty(name)) {
              if (undefined === numArguments || undefined !== Module[name].overloadTable && undefined !== Module[name].overloadTable[numArguments]) {
                throwBindingError(`Cannot register public name '${name}' twice`);
              }
              ensureOverloadTable(Module, name, name);
              if (Module.hasOwnProperty(numArguments)) {
                throwBindingError(`Cannot register multiple overloads of a function with the same number of arguments (${numArguments})!`);
              }
              Module[name].overloadTable[numArguments] = value;
            } else {
              Module[name] = value;
              if (undefined !== numArguments) {
                Module[name].numArguments = numArguments;
              }
            }
          }
          function RegisteredClass(name, constructor, instancePrototype, rawDestructor, baseClass, getActualType, upcast, downcast) {
            this.name = name;
            this.constructor = constructor;
            this.instancePrototype = instancePrototype;
            this.rawDestructor = rawDestructor;
            this.baseClass = baseClass;
            this.getActualType = getActualType;
            this.upcast = upcast;
            this.downcast = downcast;
            this.pureVirtualFunctions = [];
          }
          function upcastPointer(ptr, ptrClass, desiredClass) {
            while (ptrClass !== desiredClass) {
              if (!ptrClass.upcast) {
                throwBindingError(`Expected null or instance of ${desiredClass.name}, got an instance of ${ptrClass.name}`);
              }
              ptr = ptrClass.upcast(ptr);
              ptrClass = ptrClass.baseClass;
            }
            return ptr;
          }
          function constNoSmartPtrRawPointerToWireType(destructors, handle) {
            if (handle === null) {
              if (this.isReference) {
                throwBindingError(`null is not a valid ${this.name}`);
              }
              return 0;
            }
            if (!handle.$$) {
              throwBindingError(`Cannot pass "${embindRepr(handle)}" as a ${this.name}`);
            }
            if (!handle.$$.ptr) {
              throwBindingError(`Cannot pass deleted object as a pointer of type ${this.name}`);
            }
            var handleClass = handle.$$.ptrType.registeredClass;
            var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
            return ptr;
          }
          function genericPointerToWireType(destructors, handle) {
            var ptr;
            if (handle === null) {
              if (this.isReference) {
                throwBindingError(`null is not a valid ${this.name}`);
              }
              if (this.isSmartPointer) {
                ptr = this.rawConstructor();
                if (destructors !== null) {
                  destructors.push(this.rawDestructor, ptr);
                }
                return ptr;
              } else {
                return 0;
              }
            }
            if (!handle.$$) {
              throwBindingError(`Cannot pass "${embindRepr(handle)}" as a ${this.name}`);
            }
            if (!handle.$$.ptr) {
              throwBindingError(`Cannot pass deleted object as a pointer of type ${this.name}`);
            }
            if (!this.isConst && handle.$$.ptrType.isConst) {
              throwBindingError(`Cannot convert argument of type ${handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name} to parameter type ${this.name}`);
            }
            var handleClass = handle.$$.ptrType.registeredClass;
            ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
            if (this.isSmartPointer) {
              if (undefined === handle.$$.smartPtr) {
                throwBindingError("Passing raw pointer to smart pointer is illegal");
              }
              switch (this.sharingPolicy) {
                case 0:
                  if (handle.$$.smartPtrType === this) {
                    ptr = handle.$$.smartPtr;
                  } else {
                    throwBindingError(`Cannot convert argument of type ${handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name} to parameter type ${this.name}`);
                  }
                  break;
                case 1:
                  ptr = handle.$$.smartPtr;
                  break;
                case 2:
                  if (handle.$$.smartPtrType === this) {
                    ptr = handle.$$.smartPtr;
                  } else {
                    var clonedHandle = handle["clone"]();
                    ptr = this.rawShare(ptr, Emval.toHandle(function () {
                      clonedHandle["delete"]();
                    }));
                    if (destructors !== null) {
                      destructors.push(this.rawDestructor, ptr);
                    }
                  }
                  break;
                default:
                  throwBindingError("Unsupporting sharing policy");
              }
            }
            return ptr;
          }
          function nonConstNoSmartPtrRawPointerToWireType(destructors, handle) {
            if (handle === null) {
              if (this.isReference) {
                throwBindingError(`null is not a valid ${this.name}`);
              }
              return 0;
            }
            if (!handle.$$) {
              throwBindingError(`Cannot pass "${embindRepr(handle)}" as a ${this.name}`);
            }
            if (!handle.$$.ptr) {
              throwBindingError(`Cannot pass deleted object as a pointer of type ${this.name}`);
            }
            if (handle.$$.ptrType.isConst) {
              throwBindingError(`Cannot convert argument of type ${handle.$$.ptrType.name} to parameter type ${this.name}`);
            }
            var handleClass = handle.$$.ptrType.registeredClass;
            var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
            return ptr;
          }
          function simpleReadValueFromPointer(pointer) {
            return this["fromWireType"](HEAP32[pointer >> 2]);
          }
          function RegisteredPointer_getPointee(ptr) {
            if (this.rawGetPointee) {
              ptr = this.rawGetPointee(ptr);
            }
            return ptr;
          }
          function RegisteredPointer_destructor(ptr) {
            if (this.rawDestructor) {
              this.rawDestructor(ptr);
            }
          }
          function RegisteredPointer_deleteObject(handle) {
            if (handle !== null) {
              handle["delete"]();
            }
          }
          function init_RegisteredPointer() {
            RegisteredPointer.prototype.getPointee = RegisteredPointer_getPointee;
            RegisteredPointer.prototype.destructor = RegisteredPointer_destructor;
            RegisteredPointer.prototype["argPackAdvance"] = 8;
            RegisteredPointer.prototype["readValueFromPointer"] = simpleReadValueFromPointer;
            RegisteredPointer.prototype["deleteObject"] = RegisteredPointer_deleteObject;
            RegisteredPointer.prototype["fromWireType"] = RegisteredPointer_fromWireType;
          }
          function RegisteredPointer(name, registeredClass, isReference, isConst, isSmartPointer, pointeeType, sharingPolicy, rawGetPointee, rawConstructor, rawShare, rawDestructor) {
            this.name = name;
            this.registeredClass = registeredClass;
            this.isReference = isReference;
            this.isConst = isConst;
            this.isSmartPointer = isSmartPointer;
            this.pointeeType = pointeeType;
            this.sharingPolicy = sharingPolicy;
            this.rawGetPointee = rawGetPointee;
            this.rawConstructor = rawConstructor;
            this.rawShare = rawShare;
            this.rawDestructor = rawDestructor;
            if (!isSmartPointer && registeredClass.baseClass === undefined) {
              if (isConst) {
                this["toWireType"] = constNoSmartPtrRawPointerToWireType;
                this.destructorFunction = null;
              } else {
                this["toWireType"] = nonConstNoSmartPtrRawPointerToWireType;
                this.destructorFunction = null;
              }
            } else {
              this["toWireType"] = genericPointerToWireType;
            }
          }
          function replacePublicSymbol(name, value, numArguments) {
            if (!Module.hasOwnProperty(name)) {
              throwInternalError("Replacing nonexistant public symbol");
            }
            if (undefined !== Module[name].overloadTable && undefined !== numArguments) {
              Module[name].overloadTable[numArguments] = value;
            } else {
              Module[name] = value;
              Module[name].argCount = numArguments;
            }
          }
          function dynCallLegacy(sig, ptr, args) {
            var f = Module["dynCall_" + sig];
            return args && args.length ? f.apply(null, [ptr].concat(args)) : f.call(null, ptr);
          }
          var wasmTableMirror = [];
          function getWasmTableEntry(funcPtr) {
            var func = wasmTableMirror[funcPtr];
            if (!func) {
              if (funcPtr >= wasmTableMirror.length) wasmTableMirror.length = funcPtr + 1;
              wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
            }
            return func;
          }
          function dynCall(sig, ptr, args) {
            if (sig.includes("j")) {
              return dynCallLegacy(sig, ptr, args);
            }
            var rtn = getWasmTableEntry(ptr).apply(null, args);
            return rtn;
          }
          function getDynCaller(sig, ptr) {
            var argCache = [];
            return function () {
              argCache.length = 0;
              Object.assign(argCache, arguments);
              return dynCall(sig, ptr, argCache);
            };
          }
          function embind__requireFunction(signature, rawFunction) {
            signature = readLatin1String(signature);
            function makeDynCaller() {
              if (signature.includes("j")) {
                return getDynCaller(signature, rawFunction);
              }
              return getWasmTableEntry(rawFunction);
            }
            var fp = makeDynCaller();
            if (typeof fp != "function") {
              throwBindingError(`unknown function pointer with signature ${signature}: ${rawFunction}`);
            }
            return fp;
          }
          var UnboundTypeError = undefined;
          function getTypeName(type) {
            var ptr = ___getTypeName(type);
            var rv = readLatin1String(ptr);
            _free(ptr);
            return rv;
          }
          function throwUnboundTypeError(message, types) {
            var unboundTypes = [];
            var seen = {};
            function visit(type) {
              if (seen[type]) {
                return;
              }
              if (registeredTypes[type]) {
                return;
              }
              if (typeDependencies[type]) {
                typeDependencies[type].forEach(visit);
                return;
              }
              unboundTypes.push(type);
              seen[type] = true;
            }
            types.forEach(visit);
            throw new UnboundTypeError(`${message}: ` + unboundTypes.map(getTypeName).join([", "]));
          }
          function __embind_register_class(rawType, rawPointerType, rawConstPointerType, baseClassRawType, getActualTypeSignature, getActualType, upcastSignature, upcast, downcastSignature, downcast, name, destructorSignature, rawDestructor) {
            name = readLatin1String(name);
            getActualType = embind__requireFunction(getActualTypeSignature, getActualType);
            if (upcast) {
              upcast = embind__requireFunction(upcastSignature, upcast);
            }
            if (downcast) {
              downcast = embind__requireFunction(downcastSignature, downcast);
            }
            rawDestructor = embind__requireFunction(destructorSignature, rawDestructor);
            var legalFunctionName = makeLegalFunctionName(name);
            exposePublicSymbol(legalFunctionName, function () {
              throwUnboundTypeError(`Cannot construct ${name} due to unbound types`, [baseClassRawType]);
            });
            whenDependentTypesAreResolved([rawType, rawPointerType, rawConstPointerType], baseClassRawType ? [baseClassRawType] : [], function (base) {
              base = base[0];
              var baseClass;
              var basePrototype;
              if (baseClassRawType) {
                baseClass = base.registeredClass;
                basePrototype = baseClass.instancePrototype;
              } else {
                basePrototype = ClassHandle.prototype;
              }
              var constructor = createNamedFunction(legalFunctionName, function () {
                if (Object.getPrototypeOf(this) !== instancePrototype) {
                  throw new BindingError("Use 'new' to construct " + name);
                }
                if (undefined === registeredClass.constructor_body) {
                  throw new BindingError(name + " has no accessible constructor");
                }
                var body = registeredClass.constructor_body[arguments.length];
                if (undefined === body) {
                  throw new BindingError(`Tried to invoke ctor of ${name} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(registeredClass.constructor_body).toString()}) parameters instead!`);
                }
                return body.apply(this, arguments);
              });
              var instancePrototype = Object.create(basePrototype, {
                constructor: {
                  value: constructor
                }
              });
              constructor.prototype = instancePrototype;
              var registeredClass = new RegisteredClass(name, constructor, instancePrototype, rawDestructor, baseClass, getActualType, upcast, downcast);
              if (registeredClass.baseClass) {
                if (registeredClass.baseClass.__derivedClasses === undefined) {
                  registeredClass.baseClass.__derivedClasses = [];
                }
                registeredClass.baseClass.__derivedClasses.push(registeredClass);
              }
              var referenceConverter = new RegisteredPointer(name, registeredClass, true, false, false);
              var pointerConverter = new RegisteredPointer(name + "*", registeredClass, false, false, false);
              var constPointerConverter = new RegisteredPointer(name + " const*", registeredClass, false, true, false);
              registeredPointers[rawType] = {
                pointerType: pointerConverter,
                constPointerType: constPointerConverter
              };
              replacePublicSymbol(legalFunctionName, constructor);
              return [referenceConverter, pointerConverter, constPointerConverter];
            });
          }
          function runDestructors(destructors) {
            while (destructors.length) {
              var ptr = destructors.pop();
              var del = destructors.pop();
              del(ptr);
            }
          }
          function craftInvokerFunction(humanName, argTypes, classType, cppInvokerFunc, cppTargetFunc, isAsync) {
            var argCount = argTypes.length;
            if (argCount < 2) {
              throwBindingError("argTypes array size mismatch! Must at least get return value and 'this' types!");
            }
            var isClassMethodFunc = argTypes[1] !== null && classType !== null;
            var needsDestructorStack = false;
            for (var i = 1; i < argTypes.length; ++i) {
              if (argTypes[i] !== null && argTypes[i].destructorFunction === undefined) {
                needsDestructorStack = true;
                break;
              }
            }
            var returns = argTypes[0].name !== "void";
            var expectedArgCount = argCount - 2;
            var argsWired = new Array(expectedArgCount);
            var invokerFuncArgs = [];
            var destructors = [];
            return function () {
              if (arguments.length !== expectedArgCount) {
                throwBindingError(`function ${humanName} called with ${arguments.length} arguments, expected ${expectedArgCount} args!`);
              }
              destructors.length = 0;
              var thisWired;
              invokerFuncArgs.length = isClassMethodFunc ? 2 : 1;
              invokerFuncArgs[0] = cppTargetFunc;
              if (isClassMethodFunc) {
                thisWired = argTypes[1]["toWireType"](destructors, this);
                invokerFuncArgs[1] = thisWired;
              }
              for (var i = 0; i < expectedArgCount; ++i) {
                argsWired[i] = argTypes[i + 2]["toWireType"](destructors, arguments[i]);
                invokerFuncArgs.push(argsWired[i]);
              }
              var rv = cppInvokerFunc.apply(null, invokerFuncArgs);
              function onDone(rv) {
                if (needsDestructorStack) {
                  runDestructors(destructors);
                } else {
                  for (var i = isClassMethodFunc ? 1 : 2; i < argTypes.length; i++) {
                    var param = i === 1 ? thisWired : argsWired[i - 2];
                    if (argTypes[i].destructorFunction !== null) {
                      argTypes[i].destructorFunction(param);
                    }
                  }
                }
                if (returns) {
                  return argTypes[0]["fromWireType"](rv);
                }
              }
              return onDone(rv);
            };
          }
          function heap32VectorToArray(count, firstElement) {
            var array = [];
            for (var i = 0; i < count; i++) {
              array.push(HEAPU32[firstElement + i * 4 >> 2]);
            }
            return array;
          }
          function __embind_register_class_class_function(rawClassType, methodName, argCount, rawArgTypesAddr, invokerSignature, rawInvoker, fn, isAsync) {
            var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
            methodName = readLatin1String(methodName);
            rawInvoker = embind__requireFunction(invokerSignature, rawInvoker);
            whenDependentTypesAreResolved([], [rawClassType], function (classType) {
              classType = classType[0];
              var humanName = `${classType.name}.${methodName}`;
              function unboundTypesHandler() {
                throwUnboundTypeError(`Cannot call ${humanName} due to unbound types`, rawArgTypes);
              }
              if (methodName.startsWith("@@")) {
                methodName = Symbol[methodName.substring(2)];
              }
              var proto = classType.registeredClass.constructor;
              if (undefined === proto[methodName]) {
                unboundTypesHandler.argCount = argCount - 1;
                proto[methodName] = unboundTypesHandler;
              } else {
                ensureOverloadTable(proto, methodName, humanName);
                proto[methodName].overloadTable[argCount - 1] = unboundTypesHandler;
              }
              whenDependentTypesAreResolved([], rawArgTypes, function (argTypes) {
                var invokerArgsArray = [argTypes[0], null].concat(argTypes.slice(1));
                var func = craftInvokerFunction(humanName, invokerArgsArray, null, rawInvoker, fn);
                if (undefined === proto[methodName].overloadTable) {
                  func.argCount = argCount - 1;
                  proto[methodName] = func;
                } else {
                  proto[methodName].overloadTable[argCount - 1] = func;
                }
                if (classType.registeredClass.__derivedClasses) {
                  for (const derivedClass of classType.registeredClass.__derivedClasses) {
                    if (!derivedClass.constructor.hasOwnProperty(methodName)) {
                      derivedClass.constructor[methodName] = func;
                    }
                  }
                }
                return [];
              });
              return [];
            });
          }
          function validateThis(this_, classType, humanName) {
            if (!(this_ instanceof Object)) {
              throwBindingError(`${humanName} with invalid "this": ${this_}`);
            }
            if (!(this_ instanceof classType.registeredClass.constructor)) {
              throwBindingError(`${humanName} incompatible with "this" of type ${this_.constructor.name}`);
            }
            if (!this_.$$.ptr) {
              throwBindingError(`cannot call emscripten binding method ${humanName} on deleted object`);
            }
            return upcastPointer(this_.$$.ptr, this_.$$.ptrType.registeredClass, classType.registeredClass);
          }
          function __embind_register_class_class_property(rawClassType, fieldName, rawFieldType, rawFieldPtr, getterSignature, getter, setterSignature, setter) {
            fieldName = readLatin1String(fieldName);
            getter = embind__requireFunction(getterSignature, getter);
            whenDependentTypesAreResolved([], [rawClassType], function (classType) {
              classType = classType[0];
              var humanName = `${classType.name}.${fieldName}`;
              var desc = {
                get: function () {
                  throwUnboundTypeError(`Cannot access ${humanName} due to unbound types`, [rawFieldType]);
                },
                enumerable: true,
                configurable: true
              };
              if (setter) {
                desc.set = () => {
                  throwUnboundTypeError(`Cannot access ${humanName} due to unbound types`, [rawFieldType]);
                };
              } else {
                desc.set = v => {
                  throwBindingError(`${humanName} is a read-only property`);
                };
              }
              Object.defineProperty(classType.registeredClass.constructor, fieldName, desc);
              whenDependentTypesAreResolved([], [rawFieldType], function (fieldType) {
                fieldType = fieldType[0];
                var desc = {
                  get: function () {
                    return fieldType["fromWireType"](getter(rawFieldPtr));
                  },
                  enumerable: true
                };
                if (setter) {
                  setter = embind__requireFunction(setterSignature, setter);
                  desc.set = v => {
                    var destructors = [];
                    setter(rawFieldPtr, fieldType["toWireType"](destructors, v));
                    runDestructors(destructors);
                  };
                }
                Object.defineProperty(classType.registeredClass.constructor, fieldName, desc);
                return [];
              });
              return [];
            });
          }
          function __embind_register_class_constructor(rawClassType, argCount, rawArgTypesAddr, invokerSignature, invoker, rawConstructor) {
            assert(argCount > 0);
            var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
            invoker = embind__requireFunction(invokerSignature, invoker);
            whenDependentTypesAreResolved([], [rawClassType], function (classType) {
              classType = classType[0];
              var humanName = `constructor ${classType.name}`;
              if (undefined === classType.registeredClass.constructor_body) {
                classType.registeredClass.constructor_body = [];
              }
              if (undefined !== classType.registeredClass.constructor_body[argCount - 1]) {
                throw new BindingError(`Cannot register multiple constructors with identical number of parameters (${argCount - 1}) for class '${classType.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
              }
              classType.registeredClass.constructor_body[argCount - 1] = () => {
                throwUnboundTypeError(`Cannot construct ${classType.name} due to unbound types`, rawArgTypes);
              };
              whenDependentTypesAreResolved([], rawArgTypes, function (argTypes) {
                argTypes.splice(1, 0, null);
                classType.registeredClass.constructor_body[argCount - 1] = craftInvokerFunction(humanName, argTypes, null, invoker, rawConstructor);
                return [];
              });
              return [];
            });
          }
          function __embind_register_class_function(rawClassType, methodName, argCount, rawArgTypesAddr, invokerSignature, rawInvoker, context, isPureVirtual, isAsync) {
            var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
            methodName = readLatin1String(methodName);
            rawInvoker = embind__requireFunction(invokerSignature, rawInvoker);
            whenDependentTypesAreResolved([], [rawClassType], function (classType) {
              classType = classType[0];
              var humanName = `${classType.name}.${methodName}`;
              if (methodName.startsWith("@@")) {
                methodName = Symbol[methodName.substring(2)];
              }
              if (isPureVirtual) {
                classType.registeredClass.pureVirtualFunctions.push(methodName);
              }
              function unboundTypesHandler() {
                throwUnboundTypeError(`Cannot call ${humanName} due to unbound types`, rawArgTypes);
              }
              var proto = classType.registeredClass.instancePrototype;
              var method = proto[methodName];
              if (undefined === method || undefined === method.overloadTable && method.className !== classType.name && method.argCount === argCount - 2) {
                unboundTypesHandler.argCount = argCount - 2;
                unboundTypesHandler.className = classType.name;
                proto[methodName] = unboundTypesHandler;
              } else {
                ensureOverloadTable(proto, methodName, humanName);
                proto[methodName].overloadTable[argCount - 2] = unboundTypesHandler;
              }
              whenDependentTypesAreResolved([], rawArgTypes, function (argTypes) {
                var memberFunction = craftInvokerFunction(humanName, argTypes, classType, rawInvoker, context);
                if (undefined === proto[methodName].overloadTable) {
                  memberFunction.argCount = argCount - 2;
                  proto[methodName] = memberFunction;
                } else {
                  proto[methodName].overloadTable[argCount - 2] = memberFunction;
                }
                return [];
              });
              return [];
            });
          }
          function __embind_register_class_property(classType, fieldName, getterReturnType, getterSignature, getter, getterContext, setterArgumentType, setterSignature, setter, setterContext) {
            fieldName = readLatin1String(fieldName);
            getter = embind__requireFunction(getterSignature, getter);
            whenDependentTypesAreResolved([], [classType], function (classType) {
              classType = classType[0];
              var humanName = `${classType.name}.${fieldName}`;
              var desc = {
                get: function () {
                  throwUnboundTypeError(`Cannot access ${humanName} due to unbound types`, [getterReturnType, setterArgumentType]);
                },
                enumerable: true,
                configurable: true
              };
              if (setter) {
                desc.set = () => {
                  throwUnboundTypeError(`Cannot access ${humanName} due to unbound types`, [getterReturnType, setterArgumentType]);
                };
              } else {
                desc.set = v => {
                  throwBindingError(humanName + " is a read-only property");
                };
              }
              Object.defineProperty(classType.registeredClass.instancePrototype, fieldName, desc);
              whenDependentTypesAreResolved([], setter ? [getterReturnType, setterArgumentType] : [getterReturnType], function (types) {
                var getterReturnType = types[0];
                var desc = {
                  get: function () {
                    var ptr = validateThis(this, classType, humanName + " getter");
                    return getterReturnType["fromWireType"](getter(getterContext, ptr));
                  },
                  enumerable: true
                };
                if (setter) {
                  setter = embind__requireFunction(setterSignature, setter);
                  var setterArgumentType = types[1];
                  desc.set = function (v) {
                    var ptr = validateThis(this, classType, humanName + " setter");
                    var destructors = [];
                    setter(setterContext, ptr, setterArgumentType["toWireType"](destructors, v));
                    runDestructors(destructors);
                  };
                }
                Object.defineProperty(classType.registeredClass.instancePrototype, fieldName, desc);
                return [];
              });
              return [];
            });
          }
          function HandleAllocator() {
            this.allocated = [undefined];
            this.freelist = [];
            this.get = function (id) {
              return this.allocated[id];
            };
            this.has = function (id) {
              return this.allocated[id] !== undefined;
            };
            this.allocate = function (handle) {
              var id = this.freelist.pop() || this.allocated.length;
              this.allocated[id] = handle;
              return id;
            };
            this.free = function (id) {
              this.allocated[id] = undefined;
              this.freelist.push(id);
            };
          }
          var emval_handles = new HandleAllocator();
          function __emval_decref(handle) {
            if (handle >= emval_handles.reserved && 0 === --emval_handles.get(handle).refcount) {
              emval_handles.free(handle);
            }
          }
          function count_emval_handles() {
            var count = 0;
            for (var i = emval_handles.reserved; i < emval_handles.allocated.length; ++i) {
              if (emval_handles.allocated[i] !== undefined) {
                ++count;
              }
            }
            return count;
          }
          function init_emval() {
            emval_handles.allocated.push({
              value: undefined
            }, {
              value: null
            }, {
              value: true
            }, {
              value: false
            });
            emval_handles.reserved = emval_handles.allocated.length;
            Module["count_emval_handles"] = count_emval_handles;
          }
          var Emval = {
            toValue: handle => {
              if (!handle) {
                throwBindingError("Cannot use deleted val. handle = " + handle);
              }
              return emval_handles.get(handle).value;
            },
            toHandle: value => {
              switch (value) {
                case undefined:
                  return 1;
                case null:
                  return 2;
                case true:
                  return 3;
                case false:
                  return 4;
                default:
                  {
                    return emval_handles.allocate({
                      refcount: 1,
                      value: value
                    });
                  }
              }
            }
          };
          function __embind_register_emval(rawType, name) {
            name = readLatin1String(name);
            registerType(rawType, {
              name: name,
              "fromWireType": function (handle) {
                var rv = Emval.toValue(handle);
                __emval_decref(handle);
                return rv;
              },
              "toWireType": function (destructors, value) {
                return Emval.toHandle(value);
              },
              "argPackAdvance": 8,
              "readValueFromPointer": simpleReadValueFromPointer,
              destructorFunction: null
            });
          }
          function enumReadValueFromPointer(name, shift, signed) {
            switch (shift) {
              case 0:
                return function (pointer) {
                  var heap = signed ? HEAP8 : HEAPU8;
                  return this["fromWireType"](heap[pointer]);
                };
              case 1:
                return function (pointer) {
                  var heap = signed ? HEAP16 : HEAPU16;
                  return this["fromWireType"](heap[pointer >> 1]);
                };
              case 2:
                return function (pointer) {
                  var heap = signed ? HEAP32 : HEAPU32;
                  return this["fromWireType"](heap[pointer >> 2]);
                };
              default:
                throw new TypeError("Unknown integer type: " + name);
            }
          }
          function __embind_register_enum(rawType, name, size, isSigned) {
            var shift = getShiftFromSize(size);
            name = readLatin1String(name);
            function ctor() {}
            ctor.values = {};
            registerType(rawType, {
              name: name,
              constructor: ctor,
              "fromWireType": function (c) {
                return this.constructor.values[c];
              },
              "toWireType": function (destructors, c) {
                return c.value;
              },
              "argPackAdvance": 8,
              "readValueFromPointer": enumReadValueFromPointer(name, shift, isSigned),
              destructorFunction: null
            });
            exposePublicSymbol(name, ctor);
          }
          function requireRegisteredType(rawType, humanName) {
            var impl = registeredTypes[rawType];
            if (undefined === impl) {
              throwBindingError(humanName + " has unknown type " + getTypeName(rawType));
            }
            return impl;
          }
          function __embind_register_enum_value(rawEnumType, name, enumValue) {
            var enumType = requireRegisteredType(rawEnumType, "enum");
            name = readLatin1String(name);
            var Enum = enumType.constructor;
            var Value = Object.create(enumType.constructor.prototype, {
              value: {
                value: enumValue
              },
              constructor: {
                value: createNamedFunction(`${enumType.name}_${name}`, function () {})
              }
            });
            Enum.values[enumValue] = Value;
            Enum[name] = Value;
          }
          function embindRepr(v) {
            if (v === null) {
              return "null";
            }
            var t = typeof v;
            if (t === "object" || t === "array" || t === "function") {
              return v.toString();
            } else {
              return "" + v;
            }
          }
          function floatReadValueFromPointer(name, shift) {
            switch (shift) {
              case 2:
                return function (pointer) {
                  return this["fromWireType"](HEAPF32[pointer >> 2]);
                };
              case 3:
                return function (pointer) {
                  return this["fromWireType"](HEAPF64[pointer >> 3]);
                };
              default:
                throw new TypeError("Unknown float type: " + name);
            }
          }
          function __embind_register_float(rawType, name, size) {
            var shift = getShiftFromSize(size);
            name = readLatin1String(name);
            registerType(rawType, {
              name: name,
              "fromWireType": function (value) {
                return value;
              },
              "toWireType": function (destructors, value) {
                return value;
              },
              "argPackAdvance": 8,
              "readValueFromPointer": floatReadValueFromPointer(name, shift),
              destructorFunction: null
            });
          }
          function integerReadValueFromPointer(name, shift, signed) {
            switch (shift) {
              case 0:
                return signed ? function readS8FromPointer(pointer) {
                  return HEAP8[pointer];
                } : function readU8FromPointer(pointer) {
                  return HEAPU8[pointer];
                };
              case 1:
                return signed ? function readS16FromPointer(pointer) {
                  return HEAP16[pointer >> 1];
                } : function readU16FromPointer(pointer) {
                  return HEAPU16[pointer >> 1];
                };
              case 2:
                return signed ? function readS32FromPointer(pointer) {
                  return HEAP32[pointer >> 2];
                } : function readU32FromPointer(pointer) {
                  return HEAPU32[pointer >> 2];
                };
              default:
                throw new TypeError("Unknown integer type: " + name);
            }
          }
          function __embind_register_integer(primitiveType, name, size, minRange, maxRange) {
            name = readLatin1String(name);
            var shift = getShiftFromSize(size);
            var fromWireType = value => value;
            if (minRange === 0) {
              var bitshift = 32 - 8 * size;
              fromWireType = value => value << bitshift >>> bitshift;
            }
            var isUnsignedType = name.includes("unsigned");
            var checkAssertions = (value, toTypeName) => {};
            var toWireType;
            if (isUnsignedType) {
              toWireType = function (destructors, value) {
                checkAssertions(value, this.name);
                return value >>> 0;
              };
            } else {
              toWireType = function (destructors, value) {
                checkAssertions(value, this.name);
                return value;
              };
            }
            registerType(primitiveType, {
              name: name,
              "fromWireType": fromWireType,
              "toWireType": toWireType,
              "argPackAdvance": 8,
              "readValueFromPointer": integerReadValueFromPointer(name, shift, minRange !== 0),
              destructorFunction: null
            });
          }
          function __embind_register_memory_view(rawType, dataTypeIndex, name) {
            var typeMapping = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array];
            var TA = typeMapping[dataTypeIndex];
            function decodeMemoryView(handle) {
              handle = handle >> 2;
              var heap = HEAPU32;
              var size = heap[handle];
              var data = heap[handle + 1];
              return new TA(heap.buffer, data, size);
            }
            name = readLatin1String(name);
            registerType(rawType, {
              name: name,
              "fromWireType": decodeMemoryView,
              "argPackAdvance": 8,
              "readValueFromPointer": decodeMemoryView
            }, {
              ignoreDuplicateRegistrations: true
            });
          }
          function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
            if (!(maxBytesToWrite > 0)) return 0;
            var startIdx = outIdx;
            var endIdx = outIdx + maxBytesToWrite - 1;
            for (var i = 0; i < str.length; ++i) {
              var u = str.charCodeAt(i);
              if (u >= 55296 && u <= 57343) {
                var u1 = str.charCodeAt(++i);
                u = 65536 + ((u & 1023) << 10) | u1 & 1023;
              }
              if (u <= 127) {
                if (outIdx >= endIdx) break;
                heap[outIdx++] = u;
              } else if (u <= 2047) {
                if (outIdx + 1 >= endIdx) break;
                heap[outIdx++] = 192 | u >> 6;
                heap[outIdx++] = 128 | u & 63;
              } else if (u <= 65535) {
                if (outIdx + 2 >= endIdx) break;
                heap[outIdx++] = 224 | u >> 12;
                heap[outIdx++] = 128 | u >> 6 & 63;
                heap[outIdx++] = 128 | u & 63;
              } else {
                if (outIdx + 3 >= endIdx) break;
                heap[outIdx++] = 240 | u >> 18;
                heap[outIdx++] = 128 | u >> 12 & 63;
                heap[outIdx++] = 128 | u >> 6 & 63;
                heap[outIdx++] = 128 | u & 63;
              }
            }
            heap[outIdx] = 0;
            return outIdx - startIdx;
          }
          function stringToUTF8(str, outPtr, maxBytesToWrite) {
            return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
          }
          function lengthBytesUTF8(str) {
            var len = 0;
            for (var i = 0; i < str.length; ++i) {
              var c = str.charCodeAt(i);
              if (c <= 127) {
                len++;
              } else if (c <= 2047) {
                len += 2;
              } else if (c >= 55296 && c <= 57343) {
                len += 4;
                ++i;
              } else {
                len += 3;
              }
            }
            return len;
          }
          function __embind_register_std_string(rawType, name) {
            name = readLatin1String(name);
            var stdStringIsUTF8 = name === "std::string";
            registerType(rawType, {
              name: name,
              "fromWireType": function (value) {
                var length = HEAPU32[value >> 2];
                var payload = value + 4;
                var str;
                if (stdStringIsUTF8) {
                  var decodeStartPtr = payload;
                  for (var i = 0; i <= length; ++i) {
                    var currentBytePtr = payload + i;
                    if (i == length || HEAPU8[currentBytePtr] == 0) {
                      var maxRead = currentBytePtr - decodeStartPtr;
                      var stringSegment = UTF8ToString(decodeStartPtr, maxRead);
                      if (str === undefined) {
                        str = stringSegment;
                      } else {
                        str += String.fromCharCode(0);
                        str += stringSegment;
                      }
                      decodeStartPtr = currentBytePtr + 1;
                    }
                  }
                } else {
                  var a = new Array(length);
                  for (var i = 0; i < length; ++i) {
                    a[i] = String.fromCharCode(HEAPU8[payload + i]);
                  }
                  str = a.join("");
                }
                _free(value);
                return str;
              },
              "toWireType": function (destructors, value) {
                if (value instanceof ArrayBuffer) {
                  value = new Uint8Array(value);
                }
                var length;
                var valueIsOfTypeString = typeof value == "string";
                if (!(valueIsOfTypeString || value instanceof Uint8Array || value instanceof Uint8ClampedArray || value instanceof Int8Array)) {
                  throwBindingError("Cannot pass non-string to std::string");
                }
                if (stdStringIsUTF8 && valueIsOfTypeString) {
                  length = lengthBytesUTF8(value);
                } else {
                  length = value.length;
                }
                var base = _malloc(4 + length + 1);
                var ptr = base + 4;
                HEAPU32[base >> 2] = length;
                if (stdStringIsUTF8 && valueIsOfTypeString) {
                  stringToUTF8(value, ptr, length + 1);
                } else {
                  if (valueIsOfTypeString) {
                    for (var i = 0; i < length; ++i) {
                      var charCode = value.charCodeAt(i);
                      if (charCode > 255) {
                        _free(ptr);
                        throwBindingError("String has UTF-16 code units that do not fit in 8 bits");
                      }
                      HEAPU8[ptr + i] = charCode;
                    }
                  } else {
                    for (var i = 0; i < length; ++i) {
                      HEAPU8[ptr + i] = value[i];
                    }
                  }
                }
                if (destructors !== null) {
                  destructors.push(_free, base);
                }
                return base;
              },
              "argPackAdvance": 8,
              "readValueFromPointer": simpleReadValueFromPointer,
              destructorFunction: function (ptr) {
                _free(ptr);
              }
            });
          }
          var UTF16Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf-16le") : undefined;
          function UTF16ToString(ptr, maxBytesToRead) {
            var endPtr = ptr;
            var idx = endPtr >> 1;
            var maxIdx = idx + maxBytesToRead / 2;
            while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
            endPtr = idx << 1;
            if (endPtr - ptr > 32 && UTF16Decoder) return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
            var str = "";
            for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
              var codeUnit = HEAP16[ptr + i * 2 >> 1];
              if (codeUnit == 0) break;
              str += String.fromCharCode(codeUnit);
            }
            return str;
          }
          function stringToUTF16(str, outPtr, maxBytesToWrite) {
            if (maxBytesToWrite === undefined) {
              maxBytesToWrite = 2147483647;
            }
            if (maxBytesToWrite < 2) return 0;
            maxBytesToWrite -= 2;
            var startPtr = outPtr;
            var numCharsToWrite = maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;
            for (var i = 0; i < numCharsToWrite; ++i) {
              var codeUnit = str.charCodeAt(i);
              HEAP16[outPtr >> 1] = codeUnit;
              outPtr += 2;
            }
            HEAP16[outPtr >> 1] = 0;
            return outPtr - startPtr;
          }
          function lengthBytesUTF16(str) {
            return str.length * 2;
          }
          function UTF32ToString(ptr, maxBytesToRead) {
            var i = 0;
            var str = "";
            while (!(i >= maxBytesToRead / 4)) {
              var utf32 = HEAP32[ptr + i * 4 >> 2];
              if (utf32 == 0) break;
              ++i;
              if (utf32 >= 65536) {
                var ch = utf32 - 65536;
                str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
              } else {
                str += String.fromCharCode(utf32);
              }
            }
            return str;
          }
          function stringToUTF32(str, outPtr, maxBytesToWrite) {
            if (maxBytesToWrite === undefined) {
              maxBytesToWrite = 2147483647;
            }
            if (maxBytesToWrite < 4) return 0;
            var startPtr = outPtr;
            var endPtr = startPtr + maxBytesToWrite - 4;
            for (var i = 0; i < str.length; ++i) {
              var codeUnit = str.charCodeAt(i);
              if (codeUnit >= 55296 && codeUnit <= 57343) {
                var trailSurrogate = str.charCodeAt(++i);
                codeUnit = 65536 + ((codeUnit & 1023) << 10) | trailSurrogate & 1023;
              }
              HEAP32[outPtr >> 2] = codeUnit;
              outPtr += 4;
              if (outPtr + 4 > endPtr) break;
            }
            HEAP32[outPtr >> 2] = 0;
            return outPtr - startPtr;
          }
          function lengthBytesUTF32(str) {
            var len = 0;
            for (var i = 0; i < str.length; ++i) {
              var codeUnit = str.charCodeAt(i);
              if (codeUnit >= 55296 && codeUnit <= 57343) ++i;
              len += 4;
            }
            return len;
          }
          function __embind_register_std_wstring(rawType, charSize, name) {
            name = readLatin1String(name);
            var decodeString, encodeString, getHeap, lengthBytesUTF, shift;
            if (charSize === 2) {
              decodeString = UTF16ToString;
              encodeString = stringToUTF16;
              lengthBytesUTF = lengthBytesUTF16;
              getHeap = () => HEAPU16;
              shift = 1;
            } else if (charSize === 4) {
              decodeString = UTF32ToString;
              encodeString = stringToUTF32;
              lengthBytesUTF = lengthBytesUTF32;
              getHeap = () => HEAPU32;
              shift = 2;
            }
            registerType(rawType, {
              name: name,
              "fromWireType": function (value) {
                var length = HEAPU32[value >> 2];
                var HEAP = getHeap();
                var str;
                var decodeStartPtr = value + 4;
                for (var i = 0; i <= length; ++i) {
                  var currentBytePtr = value + 4 + i * charSize;
                  if (i == length || HEAP[currentBytePtr >> shift] == 0) {
                    var maxReadBytes = currentBytePtr - decodeStartPtr;
                    var stringSegment = decodeString(decodeStartPtr, maxReadBytes);
                    if (str === undefined) {
                      str = stringSegment;
                    } else {
                      str += String.fromCharCode(0);
                      str += stringSegment;
                    }
                    decodeStartPtr = currentBytePtr + charSize;
                  }
                }
                _free(value);
                return str;
              },
              "toWireType": function (destructors, value) {
                if (!(typeof value == "string")) {
                  throwBindingError(`Cannot pass non-string to C++ string type ${name}`);
                }
                var length = lengthBytesUTF(value);
                var ptr = _malloc(4 + length + charSize);
                HEAPU32[ptr >> 2] = length >> shift;
                encodeString(value, ptr + 4, length + charSize);
                if (destructors !== null) {
                  destructors.push(_free, ptr);
                }
                return ptr;
              },
              "argPackAdvance": 8,
              "readValueFromPointer": simpleReadValueFromPointer,
              destructorFunction: function (ptr) {
                _free(ptr);
              }
            });
          }
          function __embind_register_void(rawType, name) {
            name = readLatin1String(name);
            registerType(rawType, {
              isVoid: true,
              name: name,
              "argPackAdvance": 0,
              "fromWireType": function () {
                return undefined;
              },
              "toWireType": function (destructors, o) {
                return undefined;
              }
            });
          }
          function __emval_as(handle, returnType, destructorsRef) {
            handle = Emval.toValue(handle);
            returnType = requireRegisteredType(returnType, "emval::as");
            var destructors = [];
            var rd = Emval.toHandle(destructors);
            HEAPU32[destructorsRef >> 2] = rd;
            return returnType["toWireType"](destructors, handle);
          }
          function __emval_incref(handle) {
            if (handle > 4) {
              emval_handles.get(handle).refcount += 1;
            }
          }
          function __emval_run_destructors(handle) {
            var destructors = Emval.toValue(handle);
            runDestructors(destructors);
            __emval_decref(handle);
          }
          function __emval_take_value(type, arg) {
            type = requireRegisteredType(type, "_emval_take_value");
            var v = type["readValueFromPointer"](arg);
            return Emval.toHandle(v);
          }
          function _abort() {
            abort("");
          }
          function _emscripten_memcpy_big(dest, src, num) {
            HEAPU8.copyWithin(dest, src, src + num);
          }
          function getHeapMax() {
            return 2147483648;
          }
          function emscripten_realloc_buffer(size) {
            var b = wasmMemory.buffer;
            var pages = size - b.byteLength + 65535 >>> 16;
            try {
              wasmMemory.grow(pages);
              updateMemoryViews();
              return 1;
            } catch (e) {}
          }
          function _emscripten_resize_heap(requestedSize) {
            var oldSize = HEAPU8.length;
            requestedSize = requestedSize >>> 0;
            var maxHeapSize = getHeapMax();
            if (requestedSize > maxHeapSize) {
              return false;
            }
            var alignUp = (x, multiple) => x + (multiple - x % multiple) % multiple;
            for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
              var overGrownHeapSize = oldSize * (1 + .2 / cutDown);
              overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
              var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
              var replacement = emscripten_realloc_buffer(newSize);
              if (replacement) {
                return true;
              }
            }
            return false;
          }
          function _fd_close(fd) {
            return 52;
          }
          function _fd_read(fd, iov, iovcnt, pnum) {
            return 52;
          }
          function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
            return 70;
          }
          var printCharBuffers = [null, [], []];
          function printChar(stream, curr) {
            var buffer = printCharBuffers[stream];
            if (curr === 0 || curr === 10) {
              (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
              buffer.length = 0;
            } else {
              buffer.push(curr);
            }
          }
          function _fd_write(fd, iov, iovcnt, pnum) {
            var num = 0;
            for (var i = 0; i < iovcnt; i++) {
              var ptr = HEAPU32[iov >> 2];
              var len = HEAPU32[iov + 4 >> 2];
              iov += 8;
              for (var j = 0; j < len; j++) {
                printChar(fd, HEAPU8[ptr + j]);
              }
              num += len;
            }
            HEAPU32[pnum >> 2] = num;
            return 0;
          }
          function _spineListenerCallBackFromJS() {
            var wasmUtil = Module["SpineWasmUtil"];
            var listenerID = wasmUtil.getCurrentListenerID();
            var trackEntry = wasmUtil.getCurrentTrackEntry();
            var event = wasmUtil.getCurrentEvent();
            var eventType = wasmUtil.getCurrentEventType();
            globalThis.TrackEntryListeners.emitListener(listenerID, trackEntry, event, eventType.value);
          }
          function _spineTrackListenerCallback() {
            var wasmUtil = Module["SpineWasmUtil"];
            var listenerID = wasmUtil.getCurrentListenerID();
            var eventType = wasmUtil.getCurrentEventType();
            var trackEntry = wasmUtil.getCurrentTrackEntry();
            var event = wasmUtil.getCurrentEvent();
            globalThis.TrackEntryListeners.emitTrackEntryListener(listenerID, trackEntry, event, eventType.value);
          }
          embind_init_charCodes();
          BindingError = Module["BindingError"] = extendError(Error, "BindingError");
          InternalError = Module["InternalError"] = extendError(Error, "InternalError");
          init_ClassHandle();
          init_embind();
          init_RegisteredPointer();
          UnboundTypeError = Module["UnboundTypeError"] = extendError(Error, "UnboundTypeError");
          init_emval();
          var wasmImports = {
            "o": ___syscall_fcntl64,
            "x": ___syscall_ioctl,
            "y": ___syscall_openat,
            "t": __embind_register_bigint,
            "C": __embind_register_bool,
            "b": __embind_register_class,
            "f": __embind_register_class_class_function,
            "j": __embind_register_class_class_property,
            "c": __embind_register_class_constructor,
            "a": __embind_register_class_function,
            "e": __embind_register_class_property,
            "A": __embind_register_emval,
            "k": __embind_register_enum,
            "d": __embind_register_enum_value,
            "p": __embind_register_float,
            "l": __embind_register_integer,
            "i": __embind_register_memory_view,
            "q": __embind_register_std_string,
            "m": __embind_register_std_wstring,
            "D": __embind_register_void,
            "F": __emval_as,
            "r": __emval_decref,
            "G": __emval_incref,
            "E": __emval_run_destructors,
            "h": __emval_take_value,
            "g": _abort,
            "z": _emscripten_memcpy_big,
            "u": _emscripten_resize_heap,
            "n": _fd_close,
            "w": _fd_read,
            "s": _fd_seek,
            "v": _fd_write,
            "H": _spineListenerCallBackFromJS,
            "B": _spineTrackListenerCallback
          };
          createWasm();
          var _malloc = function () {
            return (_malloc = Module["asm"]["L"]).apply(null, arguments);
          };
          var _free = function () {
            return (_free = Module["asm"]["M"]).apply(null, arguments);
          };
          var ___getTypeName = function () {
            return (___getTypeName = Module["asm"]["N"]).apply(null, arguments);
          };
          Module["__embind_initialize_bindings"] = function () {
            return (Module["__embind_initialize_bindings"] = Module["asm"]["O"]).apply(null, arguments);
          };
          Module["dynCall_jiji"] = function () {
            return (Module["dynCall_jiji"] = Module["asm"]["P"]).apply(null, arguments);
          };
          var calledRun;
          dependenciesFulfilled = function runCaller() {
            if (!calledRun) run();
            if (!calledRun) dependenciesFulfilled = runCaller;
          };
          function run() {
            if (runDependencies > 0) {
              return;
            }
            preRun();
            if (runDependencies > 0) {
              return;
            }
            function doRun() {
              if (calledRun) return;
              calledRun = true;
              Module["calledRun"] = true;
              if (ABORT) return;
              initRuntime();
              readyPromiseResolve(Module);
              if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
              postRun();
            }
            if (Module["setStatus"]) {
              Module["setStatus"]("Running...");
              setTimeout(function () {
                setTimeout(function () {
                  Module["setStatus"]("");
                }, 1);
                doRun();
              }, 1);
            } else {
              doRun();
            }
          }
          if (Module["preInit"]) {
            if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]];
            while (Module["preInit"].length > 0) {
              Module["preInit"].pop()();
            }
          }
          run();
          return spineWasm.ready;
        };
      })());

    })
  };
}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BpbmUud2FzbS1kODY0MmNhZi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbURhdGEvY29jb3MvZWRpdG9ycy9DcmVhdG9yLzMuOC40L2V4dGVybmFsOmVtc2NyaXB0ZW4vc3BpbmUvc3BpbmUud2FzbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbnZhciBzcGluZVdhc20gPSAoKCkgPT4ge1xuICB2YXIgX3NjcmlwdERpciA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdCA/IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjIDogdW5kZWZpbmVkO1xuICBcbiAgcmV0dXJuIChcbmZ1bmN0aW9uKHNwaW5lV2FzbSA9IHt9KSAge1xuXG52YXIgTW9kdWxlPXR5cGVvZiBzcGluZVdhc20hPVwidW5kZWZpbmVkXCI/c3BpbmVXYXNtOnt9O3ZhciByZWFkeVByb21pc2VSZXNvbHZlLHJlYWR5UHJvbWlzZVJlamVjdDtNb2R1bGVbXCJyZWFkeVwiXT1uZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57cmVhZHlQcm9taXNlUmVzb2x2ZT1yZXNvbHZlO3JlYWR5UHJvbWlzZVJlamVjdD1yZWplY3R9KTt2YXIgbW9kdWxlT3ZlcnJpZGVzPU9iamVjdC5hc3NpZ24oe30sTW9kdWxlKTt2YXIgYXJndW1lbnRzXz1bXTt2YXIgdGhpc1Byb2dyYW09XCIuL3RoaXMucHJvZ3JhbVwiO3ZhciBxdWl0Xz0oc3RhdHVzLHRvVGhyb3cpPT57dGhyb3cgdG9UaHJvd307dmFyIEVOVklST05NRU5UX0lTX1dFQj10cnVlO3ZhciBFTlZJUk9OTUVOVF9JU19XT1JLRVI9ZmFsc2U7dmFyIHNjcmlwdERpcmVjdG9yeT1cIlwiO2Z1bmN0aW9uIGxvY2F0ZUZpbGUocGF0aCl7aWYoTW9kdWxlW1wibG9jYXRlRmlsZVwiXSl7cmV0dXJuIE1vZHVsZVtcImxvY2F0ZUZpbGVcIl0ocGF0aCxzY3JpcHREaXJlY3RvcnkpfXJldHVybiBzY3JpcHREaXJlY3RvcnkrcGF0aH12YXIgcmVhZF8scmVhZEFzeW5jLHJlYWRCaW5hcnksc2V0V2luZG93VGl0bGU7aWYoRU5WSVJPTk1FTlRfSVNfV0VCfHxFTlZJUk9OTUVOVF9JU19XT1JLRVIpe2lmKEVOVklST05NRU5UX0lTX1dPUktFUil7c2NyaXB0RGlyZWN0b3J5PXNlbGYubG9jYXRpb24uaHJlZn1lbHNlIGlmKHR5cGVvZiBkb2N1bWVudCE9XCJ1bmRlZmluZWRcIiYmZG9jdW1lbnQuY3VycmVudFNjcmlwdCl7c2NyaXB0RGlyZWN0b3J5PWRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjfWlmKF9zY3JpcHREaXIpe3NjcmlwdERpcmVjdG9yeT1fc2NyaXB0RGlyfWlmKHNjcmlwdERpcmVjdG9yeS5pbmRleE9mKFwiYmxvYjpcIikhPT0wKXtzY3JpcHREaXJlY3Rvcnk9c2NyaXB0RGlyZWN0b3J5LnN1YnN0cigwLHNjcmlwdERpcmVjdG9yeS5yZXBsYWNlKC9bPyNdLiovLFwiXCIpLmxhc3RJbmRleE9mKFwiL1wiKSsxKX1lbHNle3NjcmlwdERpcmVjdG9yeT1cIlwifXtyZWFkXz11cmw9Pnt2YXIgeGhyPW5ldyBYTUxIdHRwUmVxdWVzdDt4aHIub3BlbihcIkdFVFwiLHVybCxmYWxzZSk7eGhyLnNlbmQobnVsbCk7cmV0dXJuIHhoci5yZXNwb25zZVRleHR9O2lmKEVOVklST05NRU5UX0lTX1dPUktFUil7cmVhZEJpbmFyeT11cmw9Pnt2YXIgeGhyPW5ldyBYTUxIdHRwUmVxdWVzdDt4aHIub3BlbihcIkdFVFwiLHVybCxmYWxzZSk7eGhyLnJlc3BvbnNlVHlwZT1cImFycmF5YnVmZmVyXCI7eGhyLnNlbmQobnVsbCk7cmV0dXJuIG5ldyBVaW50OEFycmF5KHhoci5yZXNwb25zZSl9fXJlYWRBc3luYz0odXJsLG9ubG9hZCxvbmVycm9yKT0+e3ZhciB4aHI9bmV3IFhNTEh0dHBSZXF1ZXN0O3hoci5vcGVuKFwiR0VUXCIsdXJsLHRydWUpO3hoci5yZXNwb25zZVR5cGU9XCJhcnJheWJ1ZmZlclwiO3hoci5vbmxvYWQ9KCk9PntpZih4aHIuc3RhdHVzPT0yMDB8fHhoci5zdGF0dXM9PTAmJnhoci5yZXNwb25zZSl7b25sb2FkKHhoci5yZXNwb25zZSk7cmV0dXJufW9uZXJyb3IoKX07eGhyLm9uZXJyb3I9b25lcnJvcjt4aHIuc2VuZChudWxsKX19c2V0V2luZG93VGl0bGU9dGl0bGU9PmRvY3VtZW50LnRpdGxlPXRpdGxlfWVsc2V7fXZhciBvdXQ9TW9kdWxlW1wicHJpbnRcIl18fGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSk7dmFyIGVycj1Nb2R1bGVbXCJwcmludEVyclwiXXx8Y29uc29sZS5lcnJvci5iaW5kKGNvbnNvbGUpO09iamVjdC5hc3NpZ24oTW9kdWxlLG1vZHVsZU92ZXJyaWRlcyk7bW9kdWxlT3ZlcnJpZGVzPW51bGw7aWYoTW9kdWxlW1wiYXJndW1lbnRzXCJdKWFyZ3VtZW50c189TW9kdWxlW1wiYXJndW1lbnRzXCJdO2lmKE1vZHVsZVtcInRoaXNQcm9ncmFtXCJdKXRoaXNQcm9ncmFtPU1vZHVsZVtcInRoaXNQcm9ncmFtXCJdO2lmKE1vZHVsZVtcInF1aXRcIl0pcXVpdF89TW9kdWxlW1wicXVpdFwiXTt2YXIgd2FzbUJpbmFyeTtpZihNb2R1bGVbXCJ3YXNtQmluYXJ5XCJdKXdhc21CaW5hcnk9TW9kdWxlW1wid2FzbUJpbmFyeVwiXTt2YXIgbm9FeGl0UnVudGltZT1Nb2R1bGVbXCJub0V4aXRSdW50aW1lXCJdfHx0cnVlO2lmKHR5cGVvZiBXZWJBc3NlbWJseSE9XCJvYmplY3RcIil7YWJvcnQoXCJubyBuYXRpdmUgd2FzbSBzdXBwb3J0IGRldGVjdGVkXCIpfXZhciB3YXNtTWVtb3J5O3ZhciBBQk9SVD1mYWxzZTt2YXIgRVhJVFNUQVRVUztmdW5jdGlvbiBhc3NlcnQoY29uZGl0aW9uLHRleHQpe2lmKCFjb25kaXRpb24pe2Fib3J0KHRleHQpfX12YXIgSEVBUDgsSEVBUFU4LEhFQVAxNixIRUFQVTE2LEhFQVAzMixIRUFQVTMyLEhFQVBGMzIsSEVBUEY2NDtmdW5jdGlvbiB1cGRhdGVNZW1vcnlWaWV3cygpe3ZhciBiPXdhc21NZW1vcnkuYnVmZmVyO01vZHVsZVtcIkhFQVA4XCJdPUhFQVA4PW5ldyBJbnQ4QXJyYXkoYik7TW9kdWxlW1wiSEVBUDE2XCJdPUhFQVAxNj1uZXcgSW50MTZBcnJheShiKTtNb2R1bGVbXCJIRUFQMzJcIl09SEVBUDMyPW5ldyBJbnQzMkFycmF5KGIpO01vZHVsZVtcIkhFQVBVOFwiXT1IRUFQVTg9bmV3IFVpbnQ4QXJyYXkoYik7TW9kdWxlW1wiSEVBUFUxNlwiXT1IRUFQVTE2PW5ldyBVaW50MTZBcnJheShiKTtNb2R1bGVbXCJIRUFQVTMyXCJdPUhFQVBVMzI9bmV3IFVpbnQzMkFycmF5KGIpO01vZHVsZVtcIkhFQVBGMzJcIl09SEVBUEYzMj1uZXcgRmxvYXQzMkFycmF5KGIpO01vZHVsZVtcIkhFQVBGNjRcIl09SEVBUEY2ND1uZXcgRmxvYXQ2NEFycmF5KGIpfXZhciB3YXNtVGFibGU7dmFyIF9fQVRQUkVSVU5fXz1bXTt2YXIgX19BVElOSVRfXz1bXTt2YXIgX19BVFBPU1RSVU5fXz1bXTt2YXIgcnVudGltZUluaXRpYWxpemVkPWZhbHNlO2Z1bmN0aW9uIHByZVJ1bigpe2lmKE1vZHVsZVtcInByZVJ1blwiXSl7aWYodHlwZW9mIE1vZHVsZVtcInByZVJ1blwiXT09XCJmdW5jdGlvblwiKU1vZHVsZVtcInByZVJ1blwiXT1bTW9kdWxlW1wicHJlUnVuXCJdXTt3aGlsZShNb2R1bGVbXCJwcmVSdW5cIl0ubGVuZ3RoKXthZGRPblByZVJ1bihNb2R1bGVbXCJwcmVSdW5cIl0uc2hpZnQoKSl9fWNhbGxSdW50aW1lQ2FsbGJhY2tzKF9fQVRQUkVSVU5fXyl9ZnVuY3Rpb24gaW5pdFJ1bnRpbWUoKXtydW50aW1lSW5pdGlhbGl6ZWQ9dHJ1ZTtjYWxsUnVudGltZUNhbGxiYWNrcyhfX0FUSU5JVF9fKX1mdW5jdGlvbiBwb3N0UnVuKCl7aWYoTW9kdWxlW1wicG9zdFJ1blwiXSl7aWYodHlwZW9mIE1vZHVsZVtcInBvc3RSdW5cIl09PVwiZnVuY3Rpb25cIilNb2R1bGVbXCJwb3N0UnVuXCJdPVtNb2R1bGVbXCJwb3N0UnVuXCJdXTt3aGlsZShNb2R1bGVbXCJwb3N0UnVuXCJdLmxlbmd0aCl7YWRkT25Qb3N0UnVuKE1vZHVsZVtcInBvc3RSdW5cIl0uc2hpZnQoKSl9fWNhbGxSdW50aW1lQ2FsbGJhY2tzKF9fQVRQT1NUUlVOX18pfWZ1bmN0aW9uIGFkZE9uUHJlUnVuKGNiKXtfX0FUUFJFUlVOX18udW5zaGlmdChjYil9ZnVuY3Rpb24gYWRkT25Jbml0KGNiKXtfX0FUSU5JVF9fLnVuc2hpZnQoY2IpfWZ1bmN0aW9uIGFkZE9uUG9zdFJ1bihjYil7X19BVFBPU1RSVU5fXy51bnNoaWZ0KGNiKX12YXIgcnVuRGVwZW5kZW5jaWVzPTA7dmFyIHJ1bkRlcGVuZGVuY3lXYXRjaGVyPW51bGw7dmFyIGRlcGVuZGVuY2llc0Z1bGZpbGxlZD1udWxsO2Z1bmN0aW9uIGFkZFJ1bkRlcGVuZGVuY3koaWQpe3J1bkRlcGVuZGVuY2llcysrO2lmKE1vZHVsZVtcIm1vbml0b3JSdW5EZXBlbmRlbmNpZXNcIl0pe01vZHVsZVtcIm1vbml0b3JSdW5EZXBlbmRlbmNpZXNcIl0ocnVuRGVwZW5kZW5jaWVzKX19ZnVuY3Rpb24gcmVtb3ZlUnVuRGVwZW5kZW5jeShpZCl7cnVuRGVwZW5kZW5jaWVzLS07aWYoTW9kdWxlW1wibW9uaXRvclJ1bkRlcGVuZGVuY2llc1wiXSl7TW9kdWxlW1wibW9uaXRvclJ1bkRlcGVuZGVuY2llc1wiXShydW5EZXBlbmRlbmNpZXMpfWlmKHJ1bkRlcGVuZGVuY2llcz09MCl7aWYocnVuRGVwZW5kZW5jeVdhdGNoZXIhPT1udWxsKXtjbGVhckludGVydmFsKHJ1bkRlcGVuZGVuY3lXYXRjaGVyKTtydW5EZXBlbmRlbmN5V2F0Y2hlcj1udWxsfWlmKGRlcGVuZGVuY2llc0Z1bGZpbGxlZCl7dmFyIGNhbGxiYWNrPWRlcGVuZGVuY2llc0Z1bGZpbGxlZDtkZXBlbmRlbmNpZXNGdWxmaWxsZWQ9bnVsbDtjYWxsYmFjaygpfX19ZnVuY3Rpb24gYWJvcnQod2hhdCl7aWYoTW9kdWxlW1wib25BYm9ydFwiXSl7TW9kdWxlW1wib25BYm9ydFwiXSh3aGF0KX13aGF0PVwiQWJvcnRlZChcIit3aGF0K1wiKVwiO2Vycih3aGF0KTtBQk9SVD10cnVlO0VYSVRTVEFUVVM9MTt3aGF0Kz1cIi4gQnVpbGQgd2l0aCAtc0FTU0VSVElPTlMgZm9yIG1vcmUgaW5mby5cIjt2YXIgZT1uZXcgV2ViQXNzZW1ibHkuUnVudGltZUVycm9yKHdoYXQpO3JlYWR5UHJvbWlzZVJlamVjdChlKTt0aHJvdyBlfXZhciBkYXRhVVJJUHJlZml4PVwiZGF0YTphcHBsaWNhdGlvbi9vY3RldC1zdHJlYW07YmFzZTY0LFwiO2Z1bmN0aW9uIGlzRGF0YVVSSShmaWxlbmFtZSl7cmV0dXJuIGZpbGVuYW1lLnN0YXJ0c1dpdGgoZGF0YVVSSVByZWZpeCl9dmFyIHdhc21CaW5hcnlGaWxlO3dhc21CaW5hcnlGaWxlPVwic3BpbmUud2FzbVwiO2lmKCFpc0RhdGFVUkkod2FzbUJpbmFyeUZpbGUpKXt3YXNtQmluYXJ5RmlsZT1sb2NhdGVGaWxlKHdhc21CaW5hcnlGaWxlKX1mdW5jdGlvbiBnZXRCaW5hcnkoZmlsZSl7dHJ5e2lmKGZpbGU9PXdhc21CaW5hcnlGaWxlJiZ3YXNtQmluYXJ5KXtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkod2FzbUJpbmFyeSl9aWYocmVhZEJpbmFyeSl7cmV0dXJuIHJlYWRCaW5hcnkoZmlsZSl9dGhyb3dcImJvdGggYXN5bmMgYW5kIHN5bmMgZmV0Y2hpbmcgb2YgdGhlIHdhc20gZmFpbGVkXCJ9Y2F0Y2goZXJyKXthYm9ydChlcnIpfX1mdW5jdGlvbiBnZXRCaW5hcnlQcm9taXNlKGJpbmFyeUZpbGUpe2lmKCF3YXNtQmluYXJ5JiYoRU5WSVJPTk1FTlRfSVNfV0VCfHxFTlZJUk9OTUVOVF9JU19XT1JLRVIpKXtpZih0eXBlb2YgZmV0Y2g9PVwiZnVuY3Rpb25cIil7cmV0dXJuIGZldGNoKGJpbmFyeUZpbGUse2NyZWRlbnRpYWxzOlwic2FtZS1vcmlnaW5cIn0pLnRoZW4ocmVzcG9uc2U9PntpZighcmVzcG9uc2VbXCJva1wiXSl7dGhyb3dcImZhaWxlZCB0byBsb2FkIHdhc20gYmluYXJ5IGZpbGUgYXQgJ1wiK2JpbmFyeUZpbGUrXCInXCJ9cmV0dXJuIHJlc3BvbnNlW1wiYXJyYXlCdWZmZXJcIl0oKX0pLmNhdGNoKCgpPT5nZXRCaW5hcnkoYmluYXJ5RmlsZSkpfX1yZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+Z2V0QmluYXJ5KGJpbmFyeUZpbGUpKX1mdW5jdGlvbiBpbnN0YW50aWF0ZUFycmF5QnVmZmVyKGJpbmFyeUZpbGUsaW1wb3J0cyxyZWNlaXZlcil7cmV0dXJuIGdldEJpbmFyeVByb21pc2UoYmluYXJ5RmlsZSkudGhlbihiaW5hcnk9PntyZXR1cm4gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUoYmluYXJ5LGltcG9ydHMpfSkudGhlbihpbnN0YW5jZT0+e3JldHVybiBpbnN0YW5jZX0pLnRoZW4ocmVjZWl2ZXIscmVhc29uPT57ZXJyKFwiZmFpbGVkIHRvIGFzeW5jaHJvbm91c2x5IHByZXBhcmUgd2FzbTogXCIrcmVhc29uKTthYm9ydChyZWFzb24pfSl9ZnVuY3Rpb24gaW5zdGFudGlhdGVBc3luYyhiaW5hcnksYmluYXJ5RmlsZSxpbXBvcnRzLGNhbGxiYWNrKXtpZighYmluYXJ5JiZ0eXBlb2YgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmc9PVwiZnVuY3Rpb25cIiYmIWlzRGF0YVVSSShiaW5hcnlGaWxlKSYmdHlwZW9mIGZldGNoPT1cImZ1bmN0aW9uXCIpe3JldHVybiBmZXRjaChiaW5hcnlGaWxlLHtjcmVkZW50aWFsczpcInNhbWUtb3JpZ2luXCJ9KS50aGVuKHJlc3BvbnNlPT57dmFyIHJlc3VsdD1XZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZyhyZXNwb25zZSxpbXBvcnRzKTtyZXR1cm4gcmVzdWx0LnRoZW4oY2FsbGJhY2ssZnVuY3Rpb24ocmVhc29uKXtlcnIoXCJ3YXNtIHN0cmVhbWluZyBjb21waWxlIGZhaWxlZDogXCIrcmVhc29uKTtlcnIoXCJmYWxsaW5nIGJhY2sgdG8gQXJyYXlCdWZmZXIgaW5zdGFudGlhdGlvblwiKTtyZXR1cm4gaW5zdGFudGlhdGVBcnJheUJ1ZmZlcihiaW5hcnlGaWxlLGltcG9ydHMsY2FsbGJhY2spfSl9KX1lbHNle3JldHVybiBpbnN0YW50aWF0ZUFycmF5QnVmZmVyKGJpbmFyeUZpbGUsaW1wb3J0cyxjYWxsYmFjayl9fWZ1bmN0aW9uIGNyZWF0ZVdhc20oKXt2YXIgaW5mbz17XCJhXCI6d2FzbUltcG9ydHN9O2Z1bmN0aW9uIHJlY2VpdmVJbnN0YW5jZShpbnN0YW5jZSxtb2R1bGUpe3ZhciBleHBvcnRzPWluc3RhbmNlLmV4cG9ydHM7TW9kdWxlW1wiYXNtXCJdPWV4cG9ydHM7d2FzbU1lbW9yeT1Nb2R1bGVbXCJhc21cIl1bXCJJXCJdO3VwZGF0ZU1lbW9yeVZpZXdzKCk7d2FzbVRhYmxlPU1vZHVsZVtcImFzbVwiXVtcIktcIl07YWRkT25Jbml0KE1vZHVsZVtcImFzbVwiXVtcIkpcIl0pO3JlbW92ZVJ1bkRlcGVuZGVuY3koXCJ3YXNtLWluc3RhbnRpYXRlXCIpO3JldHVybiBleHBvcnRzfWFkZFJ1bkRlcGVuZGVuY3koXCJ3YXNtLWluc3RhbnRpYXRlXCIpO2Z1bmN0aW9uIHJlY2VpdmVJbnN0YW50aWF0aW9uUmVzdWx0KHJlc3VsdCl7cmVjZWl2ZUluc3RhbmNlKHJlc3VsdFtcImluc3RhbmNlXCJdKX1pZihNb2R1bGVbXCJpbnN0YW50aWF0ZVdhc21cIl0pe3RyeXtyZXR1cm4gTW9kdWxlW1wiaW5zdGFudGlhdGVXYXNtXCJdKGluZm8scmVjZWl2ZUluc3RhbmNlKX1jYXRjaChlKXtlcnIoXCJNb2R1bGUuaW5zdGFudGlhdGVXYXNtIGNhbGxiYWNrIGZhaWxlZCB3aXRoIGVycm9yOiBcIitlKTtyZWFkeVByb21pc2VSZWplY3QoZSl9fWluc3RhbnRpYXRlQXN5bmMod2FzbUJpbmFyeSx3YXNtQmluYXJ5RmlsZSxpbmZvLHJlY2VpdmVJbnN0YW50aWF0aW9uUmVzdWx0KS5jYXRjaChyZWFkeVByb21pc2VSZWplY3QpO3JldHVybnt9fWZ1bmN0aW9uIGNhbGxSdW50aW1lQ2FsbGJhY2tzKGNhbGxiYWNrcyl7d2hpbGUoY2FsbGJhY2tzLmxlbmd0aD4wKXtjYWxsYmFja3Muc2hpZnQoKShNb2R1bGUpfX12YXIgVVRGOERlY29kZXI9dHlwZW9mIFRleHREZWNvZGVyIT1cInVuZGVmaW5lZFwiP25ldyBUZXh0RGVjb2RlcihcInV0ZjhcIik6dW5kZWZpbmVkO2Z1bmN0aW9uIFVURjhBcnJheVRvU3RyaW5nKGhlYXBPckFycmF5LGlkeCxtYXhCeXRlc1RvUmVhZCl7dmFyIGVuZElkeD1pZHgrbWF4Qnl0ZXNUb1JlYWQ7dmFyIGVuZFB0cj1pZHg7d2hpbGUoaGVhcE9yQXJyYXlbZW5kUHRyXSYmIShlbmRQdHI+PWVuZElkeCkpKytlbmRQdHI7aWYoZW5kUHRyLWlkeD4xNiYmaGVhcE9yQXJyYXkuYnVmZmVyJiZVVEY4RGVjb2Rlcil7cmV0dXJuIFVURjhEZWNvZGVyLmRlY29kZShoZWFwT3JBcnJheS5zdWJhcnJheShpZHgsZW5kUHRyKSl9dmFyIHN0cj1cIlwiO3doaWxlKGlkeDxlbmRQdHIpe3ZhciB1MD1oZWFwT3JBcnJheVtpZHgrK107aWYoISh1MCYxMjgpKXtzdHIrPVN0cmluZy5mcm9tQ2hhckNvZGUodTApO2NvbnRpbnVlfXZhciB1MT1oZWFwT3JBcnJheVtpZHgrK10mNjM7aWYoKHUwJjIyNCk9PTE5Mil7c3RyKz1TdHJpbmcuZnJvbUNoYXJDb2RlKCh1MCYzMSk8PDZ8dTEpO2NvbnRpbnVlfXZhciB1Mj1oZWFwT3JBcnJheVtpZHgrK10mNjM7aWYoKHUwJjI0MCk9PTIyNCl7dTA9KHUwJjE1KTw8MTJ8dTE8PDZ8dTJ9ZWxzZXt1MD0odTAmNyk8PDE4fHUxPDwxMnx1Mjw8NnxoZWFwT3JBcnJheVtpZHgrK10mNjN9aWYodTA8NjU1MzYpe3N0cis9U3RyaW5nLmZyb21DaGFyQ29kZSh1MCl9ZWxzZXt2YXIgY2g9dTAtNjU1MzY7c3RyKz1TdHJpbmcuZnJvbUNoYXJDb2RlKDU1Mjk2fGNoPj4xMCw1NjMyMHxjaCYxMDIzKX19cmV0dXJuIHN0cn1mdW5jdGlvbiBVVEY4VG9TdHJpbmcocHRyLG1heEJ5dGVzVG9SZWFkKXtyZXR1cm4gcHRyP1VURjhBcnJheVRvU3RyaW5nKEhFQVBVOCxwdHIsbWF4Qnl0ZXNUb1JlYWQpOlwiXCJ9dmFyIFNZU0NBTExTPXt2YXJhcmdzOnVuZGVmaW5lZCxnZXQ6ZnVuY3Rpb24oKXtTWVNDQUxMUy52YXJhcmdzKz00O3ZhciByZXQ9SEVBUDMyW1NZU0NBTExTLnZhcmFyZ3MtND4+Ml07cmV0dXJuIHJldH0sZ2V0U3RyOmZ1bmN0aW9uKHB0cil7dmFyIHJldD1VVEY4VG9TdHJpbmcocHRyKTtyZXR1cm4gcmV0fX07ZnVuY3Rpb24gX19fc3lzY2FsbF9mY250bDY0KGZkLGNtZCx2YXJhcmdzKXtTWVNDQUxMUy52YXJhcmdzPXZhcmFyZ3M7cmV0dXJuIDB9ZnVuY3Rpb24gX19fc3lzY2FsbF9pb2N0bChmZCxvcCx2YXJhcmdzKXtTWVNDQUxMUy52YXJhcmdzPXZhcmFyZ3M7cmV0dXJuIDB9ZnVuY3Rpb24gX19fc3lzY2FsbF9vcGVuYXQoZGlyZmQscGF0aCxmbGFncyx2YXJhcmdzKXtTWVNDQUxMUy52YXJhcmdzPXZhcmFyZ3N9ZnVuY3Rpb24gX19lbWJpbmRfcmVnaXN0ZXJfYmlnaW50KHByaW1pdGl2ZVR5cGUsbmFtZSxzaXplLG1pblJhbmdlLG1heFJhbmdlKXt9ZnVuY3Rpb24gZ2V0U2hpZnRGcm9tU2l6ZShzaXplKXtzd2l0Y2goc2l6ZSl7Y2FzZSAxOnJldHVybiAwO2Nhc2UgMjpyZXR1cm4gMTtjYXNlIDQ6cmV0dXJuIDI7Y2FzZSA4OnJldHVybiAzO2RlZmF1bHQ6dGhyb3cgbmV3IFR5cGVFcnJvcihgVW5rbm93biB0eXBlIHNpemU6ICR7c2l6ZX1gKX19ZnVuY3Rpb24gZW1iaW5kX2luaXRfY2hhckNvZGVzKCl7dmFyIGNvZGVzPW5ldyBBcnJheSgyNTYpO2Zvcih2YXIgaT0wO2k8MjU2OysraSl7Y29kZXNbaV09U3RyaW5nLmZyb21DaGFyQ29kZShpKX1lbWJpbmRfY2hhckNvZGVzPWNvZGVzfXZhciBlbWJpbmRfY2hhckNvZGVzPXVuZGVmaW5lZDtmdW5jdGlvbiByZWFkTGF0aW4xU3RyaW5nKHB0cil7dmFyIHJldD1cIlwiO3ZhciBjPXB0cjt3aGlsZShIRUFQVThbY10pe3JldCs9ZW1iaW5kX2NoYXJDb2Rlc1tIRUFQVThbYysrXV19cmV0dXJuIHJldH12YXIgYXdhaXRpbmdEZXBlbmRlbmNpZXM9e307dmFyIHJlZ2lzdGVyZWRUeXBlcz17fTt2YXIgdHlwZURlcGVuZGVuY2llcz17fTt2YXIgY2hhcl8wPTQ4O3ZhciBjaGFyXzk9NTc7ZnVuY3Rpb24gbWFrZUxlZ2FsRnVuY3Rpb25OYW1lKG5hbWUpe2lmKHVuZGVmaW5lZD09PW5hbWUpe3JldHVyblwiX3Vua25vd25cIn1uYW1lPW5hbWUucmVwbGFjZSgvW15hLXpBLVowLTlfXS9nLFwiJFwiKTt2YXIgZj1uYW1lLmNoYXJDb2RlQXQoMCk7aWYoZj49Y2hhcl8wJiZmPD1jaGFyXzkpe3JldHVybmBfJHtuYW1lfWB9cmV0dXJuIG5hbWV9ZnVuY3Rpb24gY3JlYXRlTmFtZWRGdW5jdGlvbihuYW1lLGJvZHkpe25hbWU9bWFrZUxlZ2FsRnVuY3Rpb25OYW1lKG5hbWUpO3JldHVybntbbmFtZV06ZnVuY3Rpb24oKXtyZXR1cm4gYm9keS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fVtuYW1lXX1mdW5jdGlvbiBleHRlbmRFcnJvcihiYXNlRXJyb3JUeXBlLGVycm9yTmFtZSl7dmFyIGVycm9yQ2xhc3M9Y3JlYXRlTmFtZWRGdW5jdGlvbihlcnJvck5hbWUsZnVuY3Rpb24obWVzc2FnZSl7dGhpcy5uYW1lPWVycm9yTmFtZTt0aGlzLm1lc3NhZ2U9bWVzc2FnZTt2YXIgc3RhY2s9bmV3IEVycm9yKG1lc3NhZ2UpLnN0YWNrO2lmKHN0YWNrIT09dW5kZWZpbmVkKXt0aGlzLnN0YWNrPXRoaXMudG9TdHJpbmcoKStcIlxcblwiK3N0YWNrLnJlcGxhY2UoL15FcnJvcig6W15cXG5dKik/XFxuLyxcIlwiKX19KTtlcnJvckNsYXNzLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGJhc2VFcnJvclR5cGUucHJvdG90eXBlKTtlcnJvckNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1lcnJvckNsYXNzO2Vycm9yQ2xhc3MucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7aWYodGhpcy5tZXNzYWdlPT09dW5kZWZpbmVkKXtyZXR1cm4gdGhpcy5uYW1lfWVsc2V7cmV0dXJuYCR7dGhpcy5uYW1lfTogJHt0aGlzLm1lc3NhZ2V9YH19O3JldHVybiBlcnJvckNsYXNzfXZhciBCaW5kaW5nRXJyb3I9dW5kZWZpbmVkO2Z1bmN0aW9uIHRocm93QmluZGluZ0Vycm9yKG1lc3NhZ2Upe3Rocm93IG5ldyBCaW5kaW5nRXJyb3IobWVzc2FnZSl9dmFyIEludGVybmFsRXJyb3I9dW5kZWZpbmVkO2Z1bmN0aW9uIHRocm93SW50ZXJuYWxFcnJvcihtZXNzYWdlKXt0aHJvdyBuZXcgSW50ZXJuYWxFcnJvcihtZXNzYWdlKX1mdW5jdGlvbiB3aGVuRGVwZW5kZW50VHlwZXNBcmVSZXNvbHZlZChteVR5cGVzLGRlcGVuZGVudFR5cGVzLGdldFR5cGVDb252ZXJ0ZXJzKXtteVR5cGVzLmZvckVhY2goZnVuY3Rpb24odHlwZSl7dHlwZURlcGVuZGVuY2llc1t0eXBlXT1kZXBlbmRlbnRUeXBlc30pO2Z1bmN0aW9uIG9uQ29tcGxldGUodHlwZUNvbnZlcnRlcnMpe3ZhciBteVR5cGVDb252ZXJ0ZXJzPWdldFR5cGVDb252ZXJ0ZXJzKHR5cGVDb252ZXJ0ZXJzKTtpZihteVR5cGVDb252ZXJ0ZXJzLmxlbmd0aCE9PW15VHlwZXMubGVuZ3RoKXt0aHJvd0ludGVybmFsRXJyb3IoXCJNaXNtYXRjaGVkIHR5cGUgY29udmVydGVyIGNvdW50XCIpfWZvcih2YXIgaT0wO2k8bXlUeXBlcy5sZW5ndGg7KytpKXtyZWdpc3RlclR5cGUobXlUeXBlc1tpXSxteVR5cGVDb252ZXJ0ZXJzW2ldKX19dmFyIHR5cGVDb252ZXJ0ZXJzPW5ldyBBcnJheShkZXBlbmRlbnRUeXBlcy5sZW5ndGgpO3ZhciB1bnJlZ2lzdGVyZWRUeXBlcz1bXTt2YXIgcmVnaXN0ZXJlZD0wO2RlcGVuZGVudFR5cGVzLmZvckVhY2goKGR0LGkpPT57aWYocmVnaXN0ZXJlZFR5cGVzLmhhc093blByb3BlcnR5KGR0KSl7dHlwZUNvbnZlcnRlcnNbaV09cmVnaXN0ZXJlZFR5cGVzW2R0XX1lbHNle3VucmVnaXN0ZXJlZFR5cGVzLnB1c2goZHQpO2lmKCFhd2FpdGluZ0RlcGVuZGVuY2llcy5oYXNPd25Qcm9wZXJ0eShkdCkpe2F3YWl0aW5nRGVwZW5kZW5jaWVzW2R0XT1bXX1hd2FpdGluZ0RlcGVuZGVuY2llc1tkdF0ucHVzaCgoKT0+e3R5cGVDb252ZXJ0ZXJzW2ldPXJlZ2lzdGVyZWRUeXBlc1tkdF07KytyZWdpc3RlcmVkO2lmKHJlZ2lzdGVyZWQ9PT11bnJlZ2lzdGVyZWRUeXBlcy5sZW5ndGgpe29uQ29tcGxldGUodHlwZUNvbnZlcnRlcnMpfX0pfX0pO2lmKDA9PT11bnJlZ2lzdGVyZWRUeXBlcy5sZW5ndGgpe29uQ29tcGxldGUodHlwZUNvbnZlcnRlcnMpfX1mdW5jdGlvbiByZWdpc3RlclR5cGUocmF3VHlwZSxyZWdpc3RlcmVkSW5zdGFuY2Usb3B0aW9ucz17fSl7aWYoIShcImFyZ1BhY2tBZHZhbmNlXCJpbiByZWdpc3RlcmVkSW5zdGFuY2UpKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwicmVnaXN0ZXJUeXBlIHJlZ2lzdGVyZWRJbnN0YW5jZSByZXF1aXJlcyBhcmdQYWNrQWR2YW5jZVwiKX12YXIgbmFtZT1yZWdpc3RlcmVkSW5zdGFuY2UubmFtZTtpZighcmF3VHlwZSl7dGhyb3dCaW5kaW5nRXJyb3IoYHR5cGUgXCIke25hbWV9XCIgbXVzdCBoYXZlIGEgcG9zaXRpdmUgaW50ZWdlciB0eXBlaWQgcG9pbnRlcmApfWlmKHJlZ2lzdGVyZWRUeXBlcy5oYXNPd25Qcm9wZXJ0eShyYXdUeXBlKSl7aWYob3B0aW9ucy5pZ25vcmVEdXBsaWNhdGVSZWdpc3RyYXRpb25zKXtyZXR1cm59ZWxzZXt0aHJvd0JpbmRpbmdFcnJvcihgQ2Fubm90IHJlZ2lzdGVyIHR5cGUgJyR7bmFtZX0nIHR3aWNlYCl9fXJlZ2lzdGVyZWRUeXBlc1tyYXdUeXBlXT1yZWdpc3RlcmVkSW5zdGFuY2U7ZGVsZXRlIHR5cGVEZXBlbmRlbmNpZXNbcmF3VHlwZV07aWYoYXdhaXRpbmdEZXBlbmRlbmNpZXMuaGFzT3duUHJvcGVydHkocmF3VHlwZSkpe3ZhciBjYWxsYmFja3M9YXdhaXRpbmdEZXBlbmRlbmNpZXNbcmF3VHlwZV07ZGVsZXRlIGF3YWl0aW5nRGVwZW5kZW5jaWVzW3Jhd1R5cGVdO2NhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKX19ZnVuY3Rpb24gX19lbWJpbmRfcmVnaXN0ZXJfYm9vbChyYXdUeXBlLG5hbWUsc2l6ZSx0cnVlVmFsdWUsZmFsc2VWYWx1ZSl7dmFyIHNoaWZ0PWdldFNoaWZ0RnJvbVNpemUoc2l6ZSk7bmFtZT1yZWFkTGF0aW4xU3RyaW5nKG5hbWUpO3JlZ2lzdGVyVHlwZShyYXdUeXBlLHtuYW1lOm5hbWUsXCJmcm9tV2lyZVR5cGVcIjpmdW5jdGlvbih3dCl7cmV0dXJuISF3dH0sXCJ0b1dpcmVUeXBlXCI6ZnVuY3Rpb24oZGVzdHJ1Y3RvcnMsbyl7cmV0dXJuIG8/dHJ1ZVZhbHVlOmZhbHNlVmFsdWV9LFwiYXJnUGFja0FkdmFuY2VcIjo4LFwicmVhZFZhbHVlRnJvbVBvaW50ZXJcIjpmdW5jdGlvbihwb2ludGVyKXt2YXIgaGVhcDtpZihzaXplPT09MSl7aGVhcD1IRUFQOH1lbHNlIGlmKHNpemU9PT0yKXtoZWFwPUhFQVAxNn1lbHNlIGlmKHNpemU9PT00KXtoZWFwPUhFQVAzMn1lbHNle3Rocm93IG5ldyBUeXBlRXJyb3IoXCJVbmtub3duIGJvb2xlYW4gdHlwZSBzaXplOiBcIituYW1lKX1yZXR1cm4gdGhpc1tcImZyb21XaXJlVHlwZVwiXShoZWFwW3BvaW50ZXI+PnNoaWZ0XSl9LGRlc3RydWN0b3JGdW5jdGlvbjpudWxsfSl9ZnVuY3Rpb24gQ2xhc3NIYW5kbGVfaXNBbGlhc09mKG90aGVyKXtpZighKHRoaXMgaW5zdGFuY2VvZiBDbGFzc0hhbmRsZSkpe3JldHVybiBmYWxzZX1pZighKG90aGVyIGluc3RhbmNlb2YgQ2xhc3NIYW5kbGUpKXtyZXR1cm4gZmFsc2V9dmFyIGxlZnRDbGFzcz10aGlzLiQkLnB0clR5cGUucmVnaXN0ZXJlZENsYXNzO3ZhciBsZWZ0PXRoaXMuJCQucHRyO3ZhciByaWdodENsYXNzPW90aGVyLiQkLnB0clR5cGUucmVnaXN0ZXJlZENsYXNzO3ZhciByaWdodD1vdGhlci4kJC5wdHI7d2hpbGUobGVmdENsYXNzLmJhc2VDbGFzcyl7bGVmdD1sZWZ0Q2xhc3MudXBjYXN0KGxlZnQpO2xlZnRDbGFzcz1sZWZ0Q2xhc3MuYmFzZUNsYXNzfXdoaWxlKHJpZ2h0Q2xhc3MuYmFzZUNsYXNzKXtyaWdodD1yaWdodENsYXNzLnVwY2FzdChyaWdodCk7cmlnaHRDbGFzcz1yaWdodENsYXNzLmJhc2VDbGFzc31yZXR1cm4gbGVmdENsYXNzPT09cmlnaHRDbGFzcyYmbGVmdD09PXJpZ2h0fWZ1bmN0aW9uIHNoYWxsb3dDb3B5SW50ZXJuYWxQb2ludGVyKG8pe3JldHVybntjb3VudDpvLmNvdW50LGRlbGV0ZVNjaGVkdWxlZDpvLmRlbGV0ZVNjaGVkdWxlZCxwcmVzZXJ2ZVBvaW50ZXJPbkRlbGV0ZTpvLnByZXNlcnZlUG9pbnRlck9uRGVsZXRlLHB0cjpvLnB0cixwdHJUeXBlOm8ucHRyVHlwZSxzbWFydFB0cjpvLnNtYXJ0UHRyLHNtYXJ0UHRyVHlwZTpvLnNtYXJ0UHRyVHlwZX19ZnVuY3Rpb24gdGhyb3dJbnN0YW5jZUFscmVhZHlEZWxldGVkKG9iail7ZnVuY3Rpb24gZ2V0SW5zdGFuY2VUeXBlTmFtZShoYW5kbGUpe3JldHVybiBoYW5kbGUuJCQucHRyVHlwZS5yZWdpc3RlcmVkQ2xhc3MubmFtZX10aHJvd0JpbmRpbmdFcnJvcihnZXRJbnN0YW5jZVR5cGVOYW1lKG9iaikrXCIgaW5zdGFuY2UgYWxyZWFkeSBkZWxldGVkXCIpfXZhciBmaW5hbGl6YXRpb25SZWdpc3RyeT1mYWxzZTtmdW5jdGlvbiBkZXRhY2hGaW5hbGl6ZXIoaGFuZGxlKXt9ZnVuY3Rpb24gcnVuRGVzdHJ1Y3RvcigkJCl7aWYoJCQuc21hcnRQdHIpeyQkLnNtYXJ0UHRyVHlwZS5yYXdEZXN0cnVjdG9yKCQkLnNtYXJ0UHRyKX1lbHNleyQkLnB0clR5cGUucmVnaXN0ZXJlZENsYXNzLnJhd0Rlc3RydWN0b3IoJCQucHRyKX19ZnVuY3Rpb24gcmVsZWFzZUNsYXNzSGFuZGxlKCQkKXskJC5jb3VudC52YWx1ZS09MTt2YXIgdG9EZWxldGU9MD09PSQkLmNvdW50LnZhbHVlO2lmKHRvRGVsZXRlKXtydW5EZXN0cnVjdG9yKCQkKX19ZnVuY3Rpb24gZG93bmNhc3RQb2ludGVyKHB0cixwdHJDbGFzcyxkZXNpcmVkQ2xhc3Mpe2lmKHB0ckNsYXNzPT09ZGVzaXJlZENsYXNzKXtyZXR1cm4gcHRyfWlmKHVuZGVmaW5lZD09PWRlc2lyZWRDbGFzcy5iYXNlQ2xhc3Mpe3JldHVybiBudWxsfXZhciBydj1kb3duY2FzdFBvaW50ZXIocHRyLHB0ckNsYXNzLGRlc2lyZWRDbGFzcy5iYXNlQ2xhc3MpO2lmKHJ2PT09bnVsbCl7cmV0dXJuIG51bGx9cmV0dXJuIGRlc2lyZWRDbGFzcy5kb3duY2FzdChydil9dmFyIHJlZ2lzdGVyZWRQb2ludGVycz17fTtmdW5jdGlvbiBnZXRJbmhlcml0ZWRJbnN0YW5jZUNvdW50KCl7cmV0dXJuIE9iamVjdC5rZXlzKHJlZ2lzdGVyZWRJbnN0YW5jZXMpLmxlbmd0aH1mdW5jdGlvbiBnZXRMaXZlSW5oZXJpdGVkSW5zdGFuY2VzKCl7dmFyIHJ2PVtdO2Zvcih2YXIgayBpbiByZWdpc3RlcmVkSW5zdGFuY2VzKXtpZihyZWdpc3RlcmVkSW5zdGFuY2VzLmhhc093blByb3BlcnR5KGspKXtydi5wdXNoKHJlZ2lzdGVyZWRJbnN0YW5jZXNba10pfX1yZXR1cm4gcnZ9dmFyIGRlbGV0aW9uUXVldWU9W107ZnVuY3Rpb24gZmx1c2hQZW5kaW5nRGVsZXRlcygpe3doaWxlKGRlbGV0aW9uUXVldWUubGVuZ3RoKXt2YXIgb2JqPWRlbGV0aW9uUXVldWUucG9wKCk7b2JqLiQkLmRlbGV0ZVNjaGVkdWxlZD1mYWxzZTtvYmpbXCJkZWxldGVcIl0oKX19dmFyIGRlbGF5RnVuY3Rpb249dW5kZWZpbmVkO2Z1bmN0aW9uIHNldERlbGF5RnVuY3Rpb24oZm4pe2RlbGF5RnVuY3Rpb249Zm47aWYoZGVsZXRpb25RdWV1ZS5sZW5ndGgmJmRlbGF5RnVuY3Rpb24pe2RlbGF5RnVuY3Rpb24oZmx1c2hQZW5kaW5nRGVsZXRlcyl9fWZ1bmN0aW9uIGluaXRfZW1iaW5kKCl7TW9kdWxlW1wiZ2V0SW5oZXJpdGVkSW5zdGFuY2VDb3VudFwiXT1nZXRJbmhlcml0ZWRJbnN0YW5jZUNvdW50O01vZHVsZVtcImdldExpdmVJbmhlcml0ZWRJbnN0YW5jZXNcIl09Z2V0TGl2ZUluaGVyaXRlZEluc3RhbmNlcztNb2R1bGVbXCJmbHVzaFBlbmRpbmdEZWxldGVzXCJdPWZsdXNoUGVuZGluZ0RlbGV0ZXM7TW9kdWxlW1wic2V0RGVsYXlGdW5jdGlvblwiXT1zZXREZWxheUZ1bmN0aW9ufXZhciByZWdpc3RlcmVkSW5zdGFuY2VzPXt9O2Z1bmN0aW9uIGdldEJhc2VzdFBvaW50ZXIoY2xhc3NfLHB0cil7aWYocHRyPT09dW5kZWZpbmVkKXt0aHJvd0JpbmRpbmdFcnJvcihcInB0ciBzaG91bGQgbm90IGJlIHVuZGVmaW5lZFwiKX13aGlsZShjbGFzc18uYmFzZUNsYXNzKXtwdHI9Y2xhc3NfLnVwY2FzdChwdHIpO2NsYXNzXz1jbGFzc18uYmFzZUNsYXNzfXJldHVybiBwdHJ9ZnVuY3Rpb24gZ2V0SW5oZXJpdGVkSW5zdGFuY2UoY2xhc3NfLHB0cil7cHRyPWdldEJhc2VzdFBvaW50ZXIoY2xhc3NfLHB0cik7cmV0dXJuIHJlZ2lzdGVyZWRJbnN0YW5jZXNbcHRyXX1mdW5jdGlvbiBtYWtlQ2xhc3NIYW5kbGUocHJvdG90eXBlLHJlY29yZCl7aWYoIXJlY29yZC5wdHJUeXBlfHwhcmVjb3JkLnB0cil7dGhyb3dJbnRlcm5hbEVycm9yKFwibWFrZUNsYXNzSGFuZGxlIHJlcXVpcmVzIHB0ciBhbmQgcHRyVHlwZVwiKX12YXIgaGFzU21hcnRQdHJUeXBlPSEhcmVjb3JkLnNtYXJ0UHRyVHlwZTt2YXIgaGFzU21hcnRQdHI9ISFyZWNvcmQuc21hcnRQdHI7aWYoaGFzU21hcnRQdHJUeXBlIT09aGFzU21hcnRQdHIpe3Rocm93SW50ZXJuYWxFcnJvcihcIkJvdGggc21hcnRQdHJUeXBlIGFuZCBzbWFydFB0ciBtdXN0IGJlIHNwZWNpZmllZFwiKX1yZWNvcmQuY291bnQ9e3ZhbHVlOjF9O3JldHVybiBhdHRhY2hGaW5hbGl6ZXIoT2JqZWN0LmNyZWF0ZShwcm90b3R5cGUseyQkOnt2YWx1ZTpyZWNvcmR9fSkpfWZ1bmN0aW9uIFJlZ2lzdGVyZWRQb2ludGVyX2Zyb21XaXJlVHlwZShwdHIpe3ZhciByYXdQb2ludGVyPXRoaXMuZ2V0UG9pbnRlZShwdHIpO2lmKCFyYXdQb2ludGVyKXt0aGlzLmRlc3RydWN0b3IocHRyKTtyZXR1cm4gbnVsbH12YXIgcmVnaXN0ZXJlZEluc3RhbmNlPWdldEluaGVyaXRlZEluc3RhbmNlKHRoaXMucmVnaXN0ZXJlZENsYXNzLHJhd1BvaW50ZXIpO2lmKHVuZGVmaW5lZCE9PXJlZ2lzdGVyZWRJbnN0YW5jZSl7aWYoMD09PXJlZ2lzdGVyZWRJbnN0YW5jZS4kJC5jb3VudC52YWx1ZSl7cmVnaXN0ZXJlZEluc3RhbmNlLiQkLnB0cj1yYXdQb2ludGVyO3JlZ2lzdGVyZWRJbnN0YW5jZS4kJC5zbWFydFB0cj1wdHI7cmV0dXJuIHJlZ2lzdGVyZWRJbnN0YW5jZVtcImNsb25lXCJdKCl9ZWxzZXt2YXIgcnY9cmVnaXN0ZXJlZEluc3RhbmNlW1wiY2xvbmVcIl0oKTt0aGlzLmRlc3RydWN0b3IocHRyKTtyZXR1cm4gcnZ9fWZ1bmN0aW9uIG1ha2VEZWZhdWx0SGFuZGxlKCl7aWYodGhpcy5pc1NtYXJ0UG9pbnRlcil7cmV0dXJuIG1ha2VDbGFzc0hhbmRsZSh0aGlzLnJlZ2lzdGVyZWRDbGFzcy5pbnN0YW5jZVByb3RvdHlwZSx7cHRyVHlwZTp0aGlzLnBvaW50ZWVUeXBlLHB0cjpyYXdQb2ludGVyLHNtYXJ0UHRyVHlwZTp0aGlzLHNtYXJ0UHRyOnB0cn0pfWVsc2V7cmV0dXJuIG1ha2VDbGFzc0hhbmRsZSh0aGlzLnJlZ2lzdGVyZWRDbGFzcy5pbnN0YW5jZVByb3RvdHlwZSx7cHRyVHlwZTp0aGlzLHB0cjpwdHJ9KX19dmFyIGFjdHVhbFR5cGU9dGhpcy5yZWdpc3RlcmVkQ2xhc3MuZ2V0QWN0dWFsVHlwZShyYXdQb2ludGVyKTt2YXIgcmVnaXN0ZXJlZFBvaW50ZXJSZWNvcmQ9cmVnaXN0ZXJlZFBvaW50ZXJzW2FjdHVhbFR5cGVdO2lmKCFyZWdpc3RlcmVkUG9pbnRlclJlY29yZCl7cmV0dXJuIG1ha2VEZWZhdWx0SGFuZGxlLmNhbGwodGhpcyl9dmFyIHRvVHlwZTtpZih0aGlzLmlzQ29uc3Qpe3RvVHlwZT1yZWdpc3RlcmVkUG9pbnRlclJlY29yZC5jb25zdFBvaW50ZXJUeXBlfWVsc2V7dG9UeXBlPXJlZ2lzdGVyZWRQb2ludGVyUmVjb3JkLnBvaW50ZXJUeXBlfXZhciBkcD1kb3duY2FzdFBvaW50ZXIocmF3UG9pbnRlcix0aGlzLnJlZ2lzdGVyZWRDbGFzcyx0b1R5cGUucmVnaXN0ZXJlZENsYXNzKTtpZihkcD09PW51bGwpe3JldHVybiBtYWtlRGVmYXVsdEhhbmRsZS5jYWxsKHRoaXMpfWlmKHRoaXMuaXNTbWFydFBvaW50ZXIpe3JldHVybiBtYWtlQ2xhc3NIYW5kbGUodG9UeXBlLnJlZ2lzdGVyZWRDbGFzcy5pbnN0YW5jZVByb3RvdHlwZSx7cHRyVHlwZTp0b1R5cGUscHRyOmRwLHNtYXJ0UHRyVHlwZTp0aGlzLHNtYXJ0UHRyOnB0cn0pfWVsc2V7cmV0dXJuIG1ha2VDbGFzc0hhbmRsZSh0b1R5cGUucmVnaXN0ZXJlZENsYXNzLmluc3RhbmNlUHJvdG90eXBlLHtwdHJUeXBlOnRvVHlwZSxwdHI6ZHB9KX19ZnVuY3Rpb24gYXR0YWNoRmluYWxpemVyKGhhbmRsZSl7aWYoXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBGaW5hbGl6YXRpb25SZWdpc3RyeSl7YXR0YWNoRmluYWxpemVyPWhhbmRsZT0+aGFuZGxlO3JldHVybiBoYW5kbGV9ZmluYWxpemF0aW9uUmVnaXN0cnk9bmV3IEZpbmFsaXphdGlvblJlZ2lzdHJ5KGluZm89PntyZWxlYXNlQ2xhc3NIYW5kbGUoaW5mby4kJCl9KTthdHRhY2hGaW5hbGl6ZXI9aGFuZGxlPT57dmFyICQkPWhhbmRsZS4kJDt2YXIgaGFzU21hcnRQdHI9ISEkJC5zbWFydFB0cjtpZihoYXNTbWFydFB0cil7dmFyIGluZm89eyQkOiQkfTtmaW5hbGl6YXRpb25SZWdpc3RyeS5yZWdpc3RlcihoYW5kbGUsaW5mbyxoYW5kbGUpfXJldHVybiBoYW5kbGV9O2RldGFjaEZpbmFsaXplcj1oYW5kbGU9PmZpbmFsaXphdGlvblJlZ2lzdHJ5LnVucmVnaXN0ZXIoaGFuZGxlKTtyZXR1cm4gYXR0YWNoRmluYWxpemVyKGhhbmRsZSl9ZnVuY3Rpb24gQ2xhc3NIYW5kbGVfY2xvbmUoKXtpZighdGhpcy4kJC5wdHIpe3Rocm93SW5zdGFuY2VBbHJlYWR5RGVsZXRlZCh0aGlzKX1pZih0aGlzLiQkLnByZXNlcnZlUG9pbnRlck9uRGVsZXRlKXt0aGlzLiQkLmNvdW50LnZhbHVlKz0xO3JldHVybiB0aGlzfWVsc2V7dmFyIGNsb25lPWF0dGFjaEZpbmFsaXplcihPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKSx7JCQ6e3ZhbHVlOnNoYWxsb3dDb3B5SW50ZXJuYWxQb2ludGVyKHRoaXMuJCQpfX0pKTtjbG9uZS4kJC5jb3VudC52YWx1ZSs9MTtjbG9uZS4kJC5kZWxldGVTY2hlZHVsZWQ9ZmFsc2U7cmV0dXJuIGNsb25lfX1mdW5jdGlvbiBDbGFzc0hhbmRsZV9kZWxldGUoKXtpZighdGhpcy4kJC5wdHIpe3Rocm93SW5zdGFuY2VBbHJlYWR5RGVsZXRlZCh0aGlzKX1pZih0aGlzLiQkLmRlbGV0ZVNjaGVkdWxlZCYmIXRoaXMuJCQucHJlc2VydmVQb2ludGVyT25EZWxldGUpe3Rocm93QmluZGluZ0Vycm9yKFwiT2JqZWN0IGFscmVhZHkgc2NoZWR1bGVkIGZvciBkZWxldGlvblwiKX1kZXRhY2hGaW5hbGl6ZXIodGhpcyk7cmVsZWFzZUNsYXNzSGFuZGxlKHRoaXMuJCQpO2lmKCF0aGlzLiQkLnByZXNlcnZlUG9pbnRlck9uRGVsZXRlKXt0aGlzLiQkLnNtYXJ0UHRyPXVuZGVmaW5lZDt0aGlzLiQkLnB0cj11bmRlZmluZWR9fWZ1bmN0aW9uIENsYXNzSGFuZGxlX2lzRGVsZXRlZCgpe3JldHVybiF0aGlzLiQkLnB0cn1mdW5jdGlvbiBDbGFzc0hhbmRsZV9kZWxldGVMYXRlcigpe2lmKCF0aGlzLiQkLnB0cil7dGhyb3dJbnN0YW5jZUFscmVhZHlEZWxldGVkKHRoaXMpfWlmKHRoaXMuJCQuZGVsZXRlU2NoZWR1bGVkJiYhdGhpcy4kJC5wcmVzZXJ2ZVBvaW50ZXJPbkRlbGV0ZSl7dGhyb3dCaW5kaW5nRXJyb3IoXCJPYmplY3QgYWxyZWFkeSBzY2hlZHVsZWQgZm9yIGRlbGV0aW9uXCIpfWRlbGV0aW9uUXVldWUucHVzaCh0aGlzKTtpZihkZWxldGlvblF1ZXVlLmxlbmd0aD09PTEmJmRlbGF5RnVuY3Rpb24pe2RlbGF5RnVuY3Rpb24oZmx1c2hQZW5kaW5nRGVsZXRlcyl9dGhpcy4kJC5kZWxldGVTY2hlZHVsZWQ9dHJ1ZTtyZXR1cm4gdGhpc31mdW5jdGlvbiBpbml0X0NsYXNzSGFuZGxlKCl7Q2xhc3NIYW5kbGUucHJvdG90eXBlW1wiaXNBbGlhc09mXCJdPUNsYXNzSGFuZGxlX2lzQWxpYXNPZjtDbGFzc0hhbmRsZS5wcm90b3R5cGVbXCJjbG9uZVwiXT1DbGFzc0hhbmRsZV9jbG9uZTtDbGFzc0hhbmRsZS5wcm90b3R5cGVbXCJkZWxldGVcIl09Q2xhc3NIYW5kbGVfZGVsZXRlO0NsYXNzSGFuZGxlLnByb3RvdHlwZVtcImlzRGVsZXRlZFwiXT1DbGFzc0hhbmRsZV9pc0RlbGV0ZWQ7Q2xhc3NIYW5kbGUucHJvdG90eXBlW1wiZGVsZXRlTGF0ZXJcIl09Q2xhc3NIYW5kbGVfZGVsZXRlTGF0ZXJ9ZnVuY3Rpb24gQ2xhc3NIYW5kbGUoKXt9ZnVuY3Rpb24gZW5zdXJlT3ZlcmxvYWRUYWJsZShwcm90byxtZXRob2ROYW1lLGh1bWFuTmFtZSl7aWYodW5kZWZpbmVkPT09cHJvdG9bbWV0aG9kTmFtZV0ub3ZlcmxvYWRUYWJsZSl7dmFyIHByZXZGdW5jPXByb3RvW21ldGhvZE5hbWVdO3Byb3RvW21ldGhvZE5hbWVdPWZ1bmN0aW9uKCl7aWYoIXByb3RvW21ldGhvZE5hbWVdLm92ZXJsb2FkVGFibGUuaGFzT3duUHJvcGVydHkoYXJndW1lbnRzLmxlbmd0aCkpe3Rocm93QmluZGluZ0Vycm9yKGBGdW5jdGlvbiAnJHtodW1hbk5hbWV9JyBjYWxsZWQgd2l0aCBhbiBpbnZhbGlkIG51bWJlciBvZiBhcmd1bWVudHMgKCR7YXJndW1lbnRzLmxlbmd0aH0pIC0gZXhwZWN0cyBvbmUgb2YgKCR7cHJvdG9bbWV0aG9kTmFtZV0ub3ZlcmxvYWRUYWJsZX0pIWApfXJldHVybiBwcm90b1ttZXRob2ROYW1lXS5vdmVybG9hZFRhYmxlW2FyZ3VtZW50cy5sZW5ndGhdLmFwcGx5KHRoaXMsYXJndW1lbnRzKX07cHJvdG9bbWV0aG9kTmFtZV0ub3ZlcmxvYWRUYWJsZT1bXTtwcm90b1ttZXRob2ROYW1lXS5vdmVybG9hZFRhYmxlW3ByZXZGdW5jLmFyZ0NvdW50XT1wcmV2RnVuY319ZnVuY3Rpb24gZXhwb3NlUHVibGljU3ltYm9sKG5hbWUsdmFsdWUsbnVtQXJndW1lbnRzKXtpZihNb2R1bGUuaGFzT3duUHJvcGVydHkobmFtZSkpe2lmKHVuZGVmaW5lZD09PW51bUFyZ3VtZW50c3x8dW5kZWZpbmVkIT09TW9kdWxlW25hbWVdLm92ZXJsb2FkVGFibGUmJnVuZGVmaW5lZCE9PU1vZHVsZVtuYW1lXS5vdmVybG9hZFRhYmxlW251bUFyZ3VtZW50c10pe3Rocm93QmluZGluZ0Vycm9yKGBDYW5ub3QgcmVnaXN0ZXIgcHVibGljIG5hbWUgJyR7bmFtZX0nIHR3aWNlYCl9ZW5zdXJlT3ZlcmxvYWRUYWJsZShNb2R1bGUsbmFtZSxuYW1lKTtpZihNb2R1bGUuaGFzT3duUHJvcGVydHkobnVtQXJndW1lbnRzKSl7dGhyb3dCaW5kaW5nRXJyb3IoYENhbm5vdCByZWdpc3RlciBtdWx0aXBsZSBvdmVybG9hZHMgb2YgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIG51bWJlciBvZiBhcmd1bWVudHMgKCR7bnVtQXJndW1lbnRzfSkhYCl9TW9kdWxlW25hbWVdLm92ZXJsb2FkVGFibGVbbnVtQXJndW1lbnRzXT12YWx1ZX1lbHNle01vZHVsZVtuYW1lXT12YWx1ZTtpZih1bmRlZmluZWQhPT1udW1Bcmd1bWVudHMpe01vZHVsZVtuYW1lXS5udW1Bcmd1bWVudHM9bnVtQXJndW1lbnRzfX19ZnVuY3Rpb24gUmVnaXN0ZXJlZENsYXNzKG5hbWUsY29uc3RydWN0b3IsaW5zdGFuY2VQcm90b3R5cGUscmF3RGVzdHJ1Y3RvcixiYXNlQ2xhc3MsZ2V0QWN0dWFsVHlwZSx1cGNhc3QsZG93bmNhc3Qpe3RoaXMubmFtZT1uYW1lO3RoaXMuY29uc3RydWN0b3I9Y29uc3RydWN0b3I7dGhpcy5pbnN0YW5jZVByb3RvdHlwZT1pbnN0YW5jZVByb3RvdHlwZTt0aGlzLnJhd0Rlc3RydWN0b3I9cmF3RGVzdHJ1Y3Rvcjt0aGlzLmJhc2VDbGFzcz1iYXNlQ2xhc3M7dGhpcy5nZXRBY3R1YWxUeXBlPWdldEFjdHVhbFR5cGU7dGhpcy51cGNhc3Q9dXBjYXN0O3RoaXMuZG93bmNhc3Q9ZG93bmNhc3Q7dGhpcy5wdXJlVmlydHVhbEZ1bmN0aW9ucz1bXX1mdW5jdGlvbiB1cGNhc3RQb2ludGVyKHB0cixwdHJDbGFzcyxkZXNpcmVkQ2xhc3Mpe3doaWxlKHB0ckNsYXNzIT09ZGVzaXJlZENsYXNzKXtpZighcHRyQ2xhc3MudXBjYXN0KXt0aHJvd0JpbmRpbmdFcnJvcihgRXhwZWN0ZWQgbnVsbCBvciBpbnN0YW5jZSBvZiAke2Rlc2lyZWRDbGFzcy5uYW1lfSwgZ290IGFuIGluc3RhbmNlIG9mICR7cHRyQ2xhc3MubmFtZX1gKX1wdHI9cHRyQ2xhc3MudXBjYXN0KHB0cik7cHRyQ2xhc3M9cHRyQ2xhc3MuYmFzZUNsYXNzfXJldHVybiBwdHJ9ZnVuY3Rpb24gY29uc3ROb1NtYXJ0UHRyUmF3UG9pbnRlclRvV2lyZVR5cGUoZGVzdHJ1Y3RvcnMsaGFuZGxlKXtpZihoYW5kbGU9PT1udWxsKXtpZih0aGlzLmlzUmVmZXJlbmNlKXt0aHJvd0JpbmRpbmdFcnJvcihgbnVsbCBpcyBub3QgYSB2YWxpZCAke3RoaXMubmFtZX1gKX1yZXR1cm4gMH1pZighaGFuZGxlLiQkKXt0aHJvd0JpbmRpbmdFcnJvcihgQ2Fubm90IHBhc3MgXCIke2VtYmluZFJlcHIoaGFuZGxlKX1cIiBhcyBhICR7dGhpcy5uYW1lfWApfWlmKCFoYW5kbGUuJCQucHRyKXt0aHJvd0JpbmRpbmdFcnJvcihgQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgJHt0aGlzLm5hbWV9YCl9dmFyIGhhbmRsZUNsYXNzPWhhbmRsZS4kJC5wdHJUeXBlLnJlZ2lzdGVyZWRDbGFzczt2YXIgcHRyPXVwY2FzdFBvaW50ZXIoaGFuZGxlLiQkLnB0cixoYW5kbGVDbGFzcyx0aGlzLnJlZ2lzdGVyZWRDbGFzcyk7cmV0dXJuIHB0cn1mdW5jdGlvbiBnZW5lcmljUG9pbnRlclRvV2lyZVR5cGUoZGVzdHJ1Y3RvcnMsaGFuZGxlKXt2YXIgcHRyO2lmKGhhbmRsZT09PW51bGwpe2lmKHRoaXMuaXNSZWZlcmVuY2Upe3Rocm93QmluZGluZ0Vycm9yKGBudWxsIGlzIG5vdCBhIHZhbGlkICR7dGhpcy5uYW1lfWApfWlmKHRoaXMuaXNTbWFydFBvaW50ZXIpe3B0cj10aGlzLnJhd0NvbnN0cnVjdG9yKCk7aWYoZGVzdHJ1Y3RvcnMhPT1udWxsKXtkZXN0cnVjdG9ycy5wdXNoKHRoaXMucmF3RGVzdHJ1Y3RvcixwdHIpfXJldHVybiBwdHJ9ZWxzZXtyZXR1cm4gMH19aWYoIWhhbmRsZS4kJCl7dGhyb3dCaW5kaW5nRXJyb3IoYENhbm5vdCBwYXNzIFwiJHtlbWJpbmRSZXByKGhhbmRsZSl9XCIgYXMgYSAke3RoaXMubmFtZX1gKX1pZighaGFuZGxlLiQkLnB0cil7dGhyb3dCaW5kaW5nRXJyb3IoYENhbm5vdCBwYXNzIGRlbGV0ZWQgb2JqZWN0IGFzIGEgcG9pbnRlciBvZiB0eXBlICR7dGhpcy5uYW1lfWApfWlmKCF0aGlzLmlzQ29uc3QmJmhhbmRsZS4kJC5wdHJUeXBlLmlzQ29uc3Qpe3Rocm93QmluZGluZ0Vycm9yKGBDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICR7aGFuZGxlLiQkLnNtYXJ0UHRyVHlwZT9oYW5kbGUuJCQuc21hcnRQdHJUeXBlLm5hbWU6aGFuZGxlLiQkLnB0clR5cGUubmFtZX0gdG8gcGFyYW1ldGVyIHR5cGUgJHt0aGlzLm5hbWV9YCl9dmFyIGhhbmRsZUNsYXNzPWhhbmRsZS4kJC5wdHJUeXBlLnJlZ2lzdGVyZWRDbGFzcztwdHI9dXBjYXN0UG9pbnRlcihoYW5kbGUuJCQucHRyLGhhbmRsZUNsYXNzLHRoaXMucmVnaXN0ZXJlZENsYXNzKTtpZih0aGlzLmlzU21hcnRQb2ludGVyKXtpZih1bmRlZmluZWQ9PT1oYW5kbGUuJCQuc21hcnRQdHIpe3Rocm93QmluZGluZ0Vycm9yKFwiUGFzc2luZyByYXcgcG9pbnRlciB0byBzbWFydCBwb2ludGVyIGlzIGlsbGVnYWxcIil9c3dpdGNoKHRoaXMuc2hhcmluZ1BvbGljeSl7Y2FzZSAwOmlmKGhhbmRsZS4kJC5zbWFydFB0clR5cGU9PT10aGlzKXtwdHI9aGFuZGxlLiQkLnNtYXJ0UHRyfWVsc2V7dGhyb3dCaW5kaW5nRXJyb3IoYENhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgJHtoYW5kbGUuJCQuc21hcnRQdHJUeXBlP2hhbmRsZS4kJC5zbWFydFB0clR5cGUubmFtZTpoYW5kbGUuJCQucHRyVHlwZS5uYW1lfSB0byBwYXJhbWV0ZXIgdHlwZSAke3RoaXMubmFtZX1gKX1icmVhaztjYXNlIDE6cHRyPWhhbmRsZS4kJC5zbWFydFB0cjticmVhaztjYXNlIDI6aWYoaGFuZGxlLiQkLnNtYXJ0UHRyVHlwZT09PXRoaXMpe3B0cj1oYW5kbGUuJCQuc21hcnRQdHJ9ZWxzZXt2YXIgY2xvbmVkSGFuZGxlPWhhbmRsZVtcImNsb25lXCJdKCk7cHRyPXRoaXMucmF3U2hhcmUocHRyLEVtdmFsLnRvSGFuZGxlKGZ1bmN0aW9uKCl7Y2xvbmVkSGFuZGxlW1wiZGVsZXRlXCJdKCl9KSk7aWYoZGVzdHJ1Y3RvcnMhPT1udWxsKXtkZXN0cnVjdG9ycy5wdXNoKHRoaXMucmF3RGVzdHJ1Y3RvcixwdHIpfX1icmVhaztkZWZhdWx0OnRocm93QmluZGluZ0Vycm9yKFwiVW5zdXBwb3J0aW5nIHNoYXJpbmcgcG9saWN5XCIpfX1yZXR1cm4gcHRyfWZ1bmN0aW9uIG5vbkNvbnN0Tm9TbWFydFB0clJhd1BvaW50ZXJUb1dpcmVUeXBlKGRlc3RydWN0b3JzLGhhbmRsZSl7aWYoaGFuZGxlPT09bnVsbCl7aWYodGhpcy5pc1JlZmVyZW5jZSl7dGhyb3dCaW5kaW5nRXJyb3IoYG51bGwgaXMgbm90IGEgdmFsaWQgJHt0aGlzLm5hbWV9YCl9cmV0dXJuIDB9aWYoIWhhbmRsZS4kJCl7dGhyb3dCaW5kaW5nRXJyb3IoYENhbm5vdCBwYXNzIFwiJHtlbWJpbmRSZXByKGhhbmRsZSl9XCIgYXMgYSAke3RoaXMubmFtZX1gKX1pZighaGFuZGxlLiQkLnB0cil7dGhyb3dCaW5kaW5nRXJyb3IoYENhbm5vdCBwYXNzIGRlbGV0ZWQgb2JqZWN0IGFzIGEgcG9pbnRlciBvZiB0eXBlICR7dGhpcy5uYW1lfWApfWlmKGhhbmRsZS4kJC5wdHJUeXBlLmlzQ29uc3Qpe3Rocm93QmluZGluZ0Vycm9yKGBDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICR7aGFuZGxlLiQkLnB0clR5cGUubmFtZX0gdG8gcGFyYW1ldGVyIHR5cGUgJHt0aGlzLm5hbWV9YCl9dmFyIGhhbmRsZUNsYXNzPWhhbmRsZS4kJC5wdHJUeXBlLnJlZ2lzdGVyZWRDbGFzczt2YXIgcHRyPXVwY2FzdFBvaW50ZXIoaGFuZGxlLiQkLnB0cixoYW5kbGVDbGFzcyx0aGlzLnJlZ2lzdGVyZWRDbGFzcyk7cmV0dXJuIHB0cn1mdW5jdGlvbiBzaW1wbGVSZWFkVmFsdWVGcm9tUG9pbnRlcihwb2ludGVyKXtyZXR1cm4gdGhpc1tcImZyb21XaXJlVHlwZVwiXShIRUFQMzJbcG9pbnRlcj4+Ml0pfWZ1bmN0aW9uIFJlZ2lzdGVyZWRQb2ludGVyX2dldFBvaW50ZWUocHRyKXtpZih0aGlzLnJhd0dldFBvaW50ZWUpe3B0cj10aGlzLnJhd0dldFBvaW50ZWUocHRyKX1yZXR1cm4gcHRyfWZ1bmN0aW9uIFJlZ2lzdGVyZWRQb2ludGVyX2Rlc3RydWN0b3IocHRyKXtpZih0aGlzLnJhd0Rlc3RydWN0b3Ipe3RoaXMucmF3RGVzdHJ1Y3RvcihwdHIpfX1mdW5jdGlvbiBSZWdpc3RlcmVkUG9pbnRlcl9kZWxldGVPYmplY3QoaGFuZGxlKXtpZihoYW5kbGUhPT1udWxsKXtoYW5kbGVbXCJkZWxldGVcIl0oKX19ZnVuY3Rpb24gaW5pdF9SZWdpc3RlcmVkUG9pbnRlcigpe1JlZ2lzdGVyZWRQb2ludGVyLnByb3RvdHlwZS5nZXRQb2ludGVlPVJlZ2lzdGVyZWRQb2ludGVyX2dldFBvaW50ZWU7UmVnaXN0ZXJlZFBvaW50ZXIucHJvdG90eXBlLmRlc3RydWN0b3I9UmVnaXN0ZXJlZFBvaW50ZXJfZGVzdHJ1Y3RvcjtSZWdpc3RlcmVkUG9pbnRlci5wcm90b3R5cGVbXCJhcmdQYWNrQWR2YW5jZVwiXT04O1JlZ2lzdGVyZWRQb2ludGVyLnByb3RvdHlwZVtcInJlYWRWYWx1ZUZyb21Qb2ludGVyXCJdPXNpbXBsZVJlYWRWYWx1ZUZyb21Qb2ludGVyO1JlZ2lzdGVyZWRQb2ludGVyLnByb3RvdHlwZVtcImRlbGV0ZU9iamVjdFwiXT1SZWdpc3RlcmVkUG9pbnRlcl9kZWxldGVPYmplY3Q7UmVnaXN0ZXJlZFBvaW50ZXIucHJvdG90eXBlW1wiZnJvbVdpcmVUeXBlXCJdPVJlZ2lzdGVyZWRQb2ludGVyX2Zyb21XaXJlVHlwZX1mdW5jdGlvbiBSZWdpc3RlcmVkUG9pbnRlcihuYW1lLHJlZ2lzdGVyZWRDbGFzcyxpc1JlZmVyZW5jZSxpc0NvbnN0LGlzU21hcnRQb2ludGVyLHBvaW50ZWVUeXBlLHNoYXJpbmdQb2xpY3kscmF3R2V0UG9pbnRlZSxyYXdDb25zdHJ1Y3RvcixyYXdTaGFyZSxyYXdEZXN0cnVjdG9yKXt0aGlzLm5hbWU9bmFtZTt0aGlzLnJlZ2lzdGVyZWRDbGFzcz1yZWdpc3RlcmVkQ2xhc3M7dGhpcy5pc1JlZmVyZW5jZT1pc1JlZmVyZW5jZTt0aGlzLmlzQ29uc3Q9aXNDb25zdDt0aGlzLmlzU21hcnRQb2ludGVyPWlzU21hcnRQb2ludGVyO3RoaXMucG9pbnRlZVR5cGU9cG9pbnRlZVR5cGU7dGhpcy5zaGFyaW5nUG9saWN5PXNoYXJpbmdQb2xpY3k7dGhpcy5yYXdHZXRQb2ludGVlPXJhd0dldFBvaW50ZWU7dGhpcy5yYXdDb25zdHJ1Y3Rvcj1yYXdDb25zdHJ1Y3Rvcjt0aGlzLnJhd1NoYXJlPXJhd1NoYXJlO3RoaXMucmF3RGVzdHJ1Y3Rvcj1yYXdEZXN0cnVjdG9yO2lmKCFpc1NtYXJ0UG9pbnRlciYmcmVnaXN0ZXJlZENsYXNzLmJhc2VDbGFzcz09PXVuZGVmaW5lZCl7aWYoaXNDb25zdCl7dGhpc1tcInRvV2lyZVR5cGVcIl09Y29uc3ROb1NtYXJ0UHRyUmF3UG9pbnRlclRvV2lyZVR5cGU7dGhpcy5kZXN0cnVjdG9yRnVuY3Rpb249bnVsbH1lbHNle3RoaXNbXCJ0b1dpcmVUeXBlXCJdPW5vbkNvbnN0Tm9TbWFydFB0clJhd1BvaW50ZXJUb1dpcmVUeXBlO3RoaXMuZGVzdHJ1Y3RvckZ1bmN0aW9uPW51bGx9fWVsc2V7dGhpc1tcInRvV2lyZVR5cGVcIl09Z2VuZXJpY1BvaW50ZXJUb1dpcmVUeXBlfX1mdW5jdGlvbiByZXBsYWNlUHVibGljU3ltYm9sKG5hbWUsdmFsdWUsbnVtQXJndW1lbnRzKXtpZighTW9kdWxlLmhhc093blByb3BlcnR5KG5hbWUpKXt0aHJvd0ludGVybmFsRXJyb3IoXCJSZXBsYWNpbmcgbm9uZXhpc3RhbnQgcHVibGljIHN5bWJvbFwiKX1pZih1bmRlZmluZWQhPT1Nb2R1bGVbbmFtZV0ub3ZlcmxvYWRUYWJsZSYmdW5kZWZpbmVkIT09bnVtQXJndW1lbnRzKXtNb2R1bGVbbmFtZV0ub3ZlcmxvYWRUYWJsZVtudW1Bcmd1bWVudHNdPXZhbHVlfWVsc2V7TW9kdWxlW25hbWVdPXZhbHVlO01vZHVsZVtuYW1lXS5hcmdDb3VudD1udW1Bcmd1bWVudHN9fWZ1bmN0aW9uIGR5bkNhbGxMZWdhY3koc2lnLHB0cixhcmdzKXt2YXIgZj1Nb2R1bGVbXCJkeW5DYWxsX1wiK3NpZ107cmV0dXJuIGFyZ3MmJmFyZ3MubGVuZ3RoP2YuYXBwbHkobnVsbCxbcHRyXS5jb25jYXQoYXJncykpOmYuY2FsbChudWxsLHB0cil9dmFyIHdhc21UYWJsZU1pcnJvcj1bXTtmdW5jdGlvbiBnZXRXYXNtVGFibGVFbnRyeShmdW5jUHRyKXt2YXIgZnVuYz13YXNtVGFibGVNaXJyb3JbZnVuY1B0cl07aWYoIWZ1bmMpe2lmKGZ1bmNQdHI+PXdhc21UYWJsZU1pcnJvci5sZW5ndGgpd2FzbVRhYmxlTWlycm9yLmxlbmd0aD1mdW5jUHRyKzE7d2FzbVRhYmxlTWlycm9yW2Z1bmNQdHJdPWZ1bmM9d2FzbVRhYmxlLmdldChmdW5jUHRyKX1yZXR1cm4gZnVuY31mdW5jdGlvbiBkeW5DYWxsKHNpZyxwdHIsYXJncyl7aWYoc2lnLmluY2x1ZGVzKFwialwiKSl7cmV0dXJuIGR5bkNhbGxMZWdhY3koc2lnLHB0cixhcmdzKX12YXIgcnRuPWdldFdhc21UYWJsZUVudHJ5KHB0cikuYXBwbHkobnVsbCxhcmdzKTtyZXR1cm4gcnRufWZ1bmN0aW9uIGdldER5bkNhbGxlcihzaWcscHRyKXt2YXIgYXJnQ2FjaGU9W107cmV0dXJuIGZ1bmN0aW9uKCl7YXJnQ2FjaGUubGVuZ3RoPTA7T2JqZWN0LmFzc2lnbihhcmdDYWNoZSxhcmd1bWVudHMpO3JldHVybiBkeW5DYWxsKHNpZyxwdHIsYXJnQ2FjaGUpfX1mdW5jdGlvbiBlbWJpbmRfX3JlcXVpcmVGdW5jdGlvbihzaWduYXR1cmUscmF3RnVuY3Rpb24pe3NpZ25hdHVyZT1yZWFkTGF0aW4xU3RyaW5nKHNpZ25hdHVyZSk7ZnVuY3Rpb24gbWFrZUR5bkNhbGxlcigpe2lmKHNpZ25hdHVyZS5pbmNsdWRlcyhcImpcIikpe3JldHVybiBnZXREeW5DYWxsZXIoc2lnbmF0dXJlLHJhd0Z1bmN0aW9uKX1yZXR1cm4gZ2V0V2FzbVRhYmxlRW50cnkocmF3RnVuY3Rpb24pfXZhciBmcD1tYWtlRHluQ2FsbGVyKCk7aWYodHlwZW9mIGZwIT1cImZ1bmN0aW9uXCIpe3Rocm93QmluZGluZ0Vycm9yKGB1bmtub3duIGZ1bmN0aW9uIHBvaW50ZXIgd2l0aCBzaWduYXR1cmUgJHtzaWduYXR1cmV9OiAke3Jhd0Z1bmN0aW9ufWApfXJldHVybiBmcH12YXIgVW5ib3VuZFR5cGVFcnJvcj11bmRlZmluZWQ7ZnVuY3Rpb24gZ2V0VHlwZU5hbWUodHlwZSl7dmFyIHB0cj1fX19nZXRUeXBlTmFtZSh0eXBlKTt2YXIgcnY9cmVhZExhdGluMVN0cmluZyhwdHIpO19mcmVlKHB0cik7cmV0dXJuIHJ2fWZ1bmN0aW9uIHRocm93VW5ib3VuZFR5cGVFcnJvcihtZXNzYWdlLHR5cGVzKXt2YXIgdW5ib3VuZFR5cGVzPVtdO3ZhciBzZWVuPXt9O2Z1bmN0aW9uIHZpc2l0KHR5cGUpe2lmKHNlZW5bdHlwZV0pe3JldHVybn1pZihyZWdpc3RlcmVkVHlwZXNbdHlwZV0pe3JldHVybn1pZih0eXBlRGVwZW5kZW5jaWVzW3R5cGVdKXt0eXBlRGVwZW5kZW5jaWVzW3R5cGVdLmZvckVhY2godmlzaXQpO3JldHVybn11bmJvdW5kVHlwZXMucHVzaCh0eXBlKTtzZWVuW3R5cGVdPXRydWV9dHlwZXMuZm9yRWFjaCh2aXNpdCk7dGhyb3cgbmV3IFVuYm91bmRUeXBlRXJyb3IoYCR7bWVzc2FnZX06IGArdW5ib3VuZFR5cGVzLm1hcChnZXRUeXBlTmFtZSkuam9pbihbXCIsIFwiXSkpfWZ1bmN0aW9uIF9fZW1iaW5kX3JlZ2lzdGVyX2NsYXNzKHJhd1R5cGUscmF3UG9pbnRlclR5cGUscmF3Q29uc3RQb2ludGVyVHlwZSxiYXNlQ2xhc3NSYXdUeXBlLGdldEFjdHVhbFR5cGVTaWduYXR1cmUsZ2V0QWN0dWFsVHlwZSx1cGNhc3RTaWduYXR1cmUsdXBjYXN0LGRvd25jYXN0U2lnbmF0dXJlLGRvd25jYXN0LG5hbWUsZGVzdHJ1Y3RvclNpZ25hdHVyZSxyYXdEZXN0cnVjdG9yKXtuYW1lPXJlYWRMYXRpbjFTdHJpbmcobmFtZSk7Z2V0QWN0dWFsVHlwZT1lbWJpbmRfX3JlcXVpcmVGdW5jdGlvbihnZXRBY3R1YWxUeXBlU2lnbmF0dXJlLGdldEFjdHVhbFR5cGUpO2lmKHVwY2FzdCl7dXBjYXN0PWVtYmluZF9fcmVxdWlyZUZ1bmN0aW9uKHVwY2FzdFNpZ25hdHVyZSx1cGNhc3QpfWlmKGRvd25jYXN0KXtkb3duY2FzdD1lbWJpbmRfX3JlcXVpcmVGdW5jdGlvbihkb3duY2FzdFNpZ25hdHVyZSxkb3duY2FzdCl9cmF3RGVzdHJ1Y3Rvcj1lbWJpbmRfX3JlcXVpcmVGdW5jdGlvbihkZXN0cnVjdG9yU2lnbmF0dXJlLHJhd0Rlc3RydWN0b3IpO3ZhciBsZWdhbEZ1bmN0aW9uTmFtZT1tYWtlTGVnYWxGdW5jdGlvbk5hbWUobmFtZSk7ZXhwb3NlUHVibGljU3ltYm9sKGxlZ2FsRnVuY3Rpb25OYW1lLGZ1bmN0aW9uKCl7dGhyb3dVbmJvdW5kVHlwZUVycm9yKGBDYW5ub3QgY29uc3RydWN0ICR7bmFtZX0gZHVlIHRvIHVuYm91bmQgdHlwZXNgLFtiYXNlQ2xhc3NSYXdUeXBlXSl9KTt3aGVuRGVwZW5kZW50VHlwZXNBcmVSZXNvbHZlZChbcmF3VHlwZSxyYXdQb2ludGVyVHlwZSxyYXdDb25zdFBvaW50ZXJUeXBlXSxiYXNlQ2xhc3NSYXdUeXBlP1tiYXNlQ2xhc3NSYXdUeXBlXTpbXSxmdW5jdGlvbihiYXNlKXtiYXNlPWJhc2VbMF07dmFyIGJhc2VDbGFzczt2YXIgYmFzZVByb3RvdHlwZTtpZihiYXNlQ2xhc3NSYXdUeXBlKXtiYXNlQ2xhc3M9YmFzZS5yZWdpc3RlcmVkQ2xhc3M7YmFzZVByb3RvdHlwZT1iYXNlQ2xhc3MuaW5zdGFuY2VQcm90b3R5cGV9ZWxzZXtiYXNlUHJvdG90eXBlPUNsYXNzSGFuZGxlLnByb3RvdHlwZX12YXIgY29uc3RydWN0b3I9Y3JlYXRlTmFtZWRGdW5jdGlvbihsZWdhbEZ1bmN0aW9uTmFtZSxmdW5jdGlvbigpe2lmKE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKSE9PWluc3RhbmNlUHJvdG90eXBlKXt0aHJvdyBuZXcgQmluZGluZ0Vycm9yKFwiVXNlICduZXcnIHRvIGNvbnN0cnVjdCBcIituYW1lKX1pZih1bmRlZmluZWQ9PT1yZWdpc3RlcmVkQ2xhc3MuY29uc3RydWN0b3JfYm9keSl7dGhyb3cgbmV3IEJpbmRpbmdFcnJvcihuYW1lK1wiIGhhcyBubyBhY2Nlc3NpYmxlIGNvbnN0cnVjdG9yXCIpfXZhciBib2R5PXJlZ2lzdGVyZWRDbGFzcy5jb25zdHJ1Y3Rvcl9ib2R5W2FyZ3VtZW50cy5sZW5ndGhdO2lmKHVuZGVmaW5lZD09PWJvZHkpe3Rocm93IG5ldyBCaW5kaW5nRXJyb3IoYFRyaWVkIHRvIGludm9rZSBjdG9yIG9mICR7bmFtZX0gd2l0aCBpbnZhbGlkIG51bWJlciBvZiBwYXJhbWV0ZXJzICgke2FyZ3VtZW50cy5sZW5ndGh9KSAtIGV4cGVjdGVkICgke09iamVjdC5rZXlzKHJlZ2lzdGVyZWRDbGFzcy5jb25zdHJ1Y3Rvcl9ib2R5KS50b1N0cmluZygpfSkgcGFyYW1ldGVycyBpbnN0ZWFkIWApfXJldHVybiBib2R5LmFwcGx5KHRoaXMsYXJndW1lbnRzKX0pO3ZhciBpbnN0YW5jZVByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGJhc2VQcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTpjb25zdHJ1Y3Rvcn19KTtjb25zdHJ1Y3Rvci5wcm90b3R5cGU9aW5zdGFuY2VQcm90b3R5cGU7dmFyIHJlZ2lzdGVyZWRDbGFzcz1uZXcgUmVnaXN0ZXJlZENsYXNzKG5hbWUsY29uc3RydWN0b3IsaW5zdGFuY2VQcm90b3R5cGUscmF3RGVzdHJ1Y3RvcixiYXNlQ2xhc3MsZ2V0QWN0dWFsVHlwZSx1cGNhc3QsZG93bmNhc3QpO2lmKHJlZ2lzdGVyZWRDbGFzcy5iYXNlQ2xhc3Mpe2lmKHJlZ2lzdGVyZWRDbGFzcy5iYXNlQ2xhc3MuX19kZXJpdmVkQ2xhc3Nlcz09PXVuZGVmaW5lZCl7cmVnaXN0ZXJlZENsYXNzLmJhc2VDbGFzcy5fX2Rlcml2ZWRDbGFzc2VzPVtdfXJlZ2lzdGVyZWRDbGFzcy5iYXNlQ2xhc3MuX19kZXJpdmVkQ2xhc3Nlcy5wdXNoKHJlZ2lzdGVyZWRDbGFzcyl9dmFyIHJlZmVyZW5jZUNvbnZlcnRlcj1uZXcgUmVnaXN0ZXJlZFBvaW50ZXIobmFtZSxyZWdpc3RlcmVkQ2xhc3MsdHJ1ZSxmYWxzZSxmYWxzZSk7dmFyIHBvaW50ZXJDb252ZXJ0ZXI9bmV3IFJlZ2lzdGVyZWRQb2ludGVyKG5hbWUrXCIqXCIscmVnaXN0ZXJlZENsYXNzLGZhbHNlLGZhbHNlLGZhbHNlKTt2YXIgY29uc3RQb2ludGVyQ29udmVydGVyPW5ldyBSZWdpc3RlcmVkUG9pbnRlcihuYW1lK1wiIGNvbnN0KlwiLHJlZ2lzdGVyZWRDbGFzcyxmYWxzZSx0cnVlLGZhbHNlKTtyZWdpc3RlcmVkUG9pbnRlcnNbcmF3VHlwZV09e3BvaW50ZXJUeXBlOnBvaW50ZXJDb252ZXJ0ZXIsY29uc3RQb2ludGVyVHlwZTpjb25zdFBvaW50ZXJDb252ZXJ0ZXJ9O3JlcGxhY2VQdWJsaWNTeW1ib2wobGVnYWxGdW5jdGlvbk5hbWUsY29uc3RydWN0b3IpO3JldHVybltyZWZlcmVuY2VDb252ZXJ0ZXIscG9pbnRlckNvbnZlcnRlcixjb25zdFBvaW50ZXJDb252ZXJ0ZXJdfSl9ZnVuY3Rpb24gcnVuRGVzdHJ1Y3RvcnMoZGVzdHJ1Y3RvcnMpe3doaWxlKGRlc3RydWN0b3JzLmxlbmd0aCl7dmFyIHB0cj1kZXN0cnVjdG9ycy5wb3AoKTt2YXIgZGVsPWRlc3RydWN0b3JzLnBvcCgpO2RlbChwdHIpfX1mdW5jdGlvbiBjcmFmdEludm9rZXJGdW5jdGlvbihodW1hbk5hbWUsYXJnVHlwZXMsY2xhc3NUeXBlLGNwcEludm9rZXJGdW5jLGNwcFRhcmdldEZ1bmMsaXNBc3luYyl7dmFyIGFyZ0NvdW50PWFyZ1R5cGVzLmxlbmd0aDtpZihhcmdDb3VudDwyKXt0aHJvd0JpbmRpbmdFcnJvcihcImFyZ1R5cGVzIGFycmF5IHNpemUgbWlzbWF0Y2ghIE11c3QgYXQgbGVhc3QgZ2V0IHJldHVybiB2YWx1ZSBhbmQgJ3RoaXMnIHR5cGVzIVwiKX12YXIgaXNDbGFzc01ldGhvZEZ1bmM9YXJnVHlwZXNbMV0hPT1udWxsJiZjbGFzc1R5cGUhPT1udWxsO3ZhciBuZWVkc0Rlc3RydWN0b3JTdGFjaz1mYWxzZTtmb3IodmFyIGk9MTtpPGFyZ1R5cGVzLmxlbmd0aDsrK2kpe2lmKGFyZ1R5cGVzW2ldIT09bnVsbCYmYXJnVHlwZXNbaV0uZGVzdHJ1Y3RvckZ1bmN0aW9uPT09dW5kZWZpbmVkKXtuZWVkc0Rlc3RydWN0b3JTdGFjaz10cnVlO2JyZWFrfX12YXIgcmV0dXJucz1hcmdUeXBlc1swXS5uYW1lIT09XCJ2b2lkXCI7dmFyIGV4cGVjdGVkQXJnQ291bnQ9YXJnQ291bnQtMjt2YXIgYXJnc1dpcmVkPW5ldyBBcnJheShleHBlY3RlZEFyZ0NvdW50KTt2YXIgaW52b2tlckZ1bmNBcmdzPVtdO3ZhciBkZXN0cnVjdG9ycz1bXTtyZXR1cm4gZnVuY3Rpb24oKXtpZihhcmd1bWVudHMubGVuZ3RoIT09ZXhwZWN0ZWRBcmdDb3VudCl7dGhyb3dCaW5kaW5nRXJyb3IoYGZ1bmN0aW9uICR7aHVtYW5OYW1lfSBjYWxsZWQgd2l0aCAke2FyZ3VtZW50cy5sZW5ndGh9IGFyZ3VtZW50cywgZXhwZWN0ZWQgJHtleHBlY3RlZEFyZ0NvdW50fSBhcmdzIWApfWRlc3RydWN0b3JzLmxlbmd0aD0wO3ZhciB0aGlzV2lyZWQ7aW52b2tlckZ1bmNBcmdzLmxlbmd0aD1pc0NsYXNzTWV0aG9kRnVuYz8yOjE7aW52b2tlckZ1bmNBcmdzWzBdPWNwcFRhcmdldEZ1bmM7aWYoaXNDbGFzc01ldGhvZEZ1bmMpe3RoaXNXaXJlZD1hcmdUeXBlc1sxXVtcInRvV2lyZVR5cGVcIl0oZGVzdHJ1Y3RvcnMsdGhpcyk7aW52b2tlckZ1bmNBcmdzWzFdPXRoaXNXaXJlZH1mb3IodmFyIGk9MDtpPGV4cGVjdGVkQXJnQ291bnQ7KytpKXthcmdzV2lyZWRbaV09YXJnVHlwZXNbaSsyXVtcInRvV2lyZVR5cGVcIl0oZGVzdHJ1Y3RvcnMsYXJndW1lbnRzW2ldKTtpbnZva2VyRnVuY0FyZ3MucHVzaChhcmdzV2lyZWRbaV0pfXZhciBydj1jcHBJbnZva2VyRnVuYy5hcHBseShudWxsLGludm9rZXJGdW5jQXJncyk7ZnVuY3Rpb24gb25Eb25lKHJ2KXtpZihuZWVkc0Rlc3RydWN0b3JTdGFjayl7cnVuRGVzdHJ1Y3RvcnMoZGVzdHJ1Y3RvcnMpfWVsc2V7Zm9yKHZhciBpPWlzQ2xhc3NNZXRob2RGdW5jPzE6MjtpPGFyZ1R5cGVzLmxlbmd0aDtpKyspe3ZhciBwYXJhbT1pPT09MT90aGlzV2lyZWQ6YXJnc1dpcmVkW2ktMl07aWYoYXJnVHlwZXNbaV0uZGVzdHJ1Y3RvckZ1bmN0aW9uIT09bnVsbCl7YXJnVHlwZXNbaV0uZGVzdHJ1Y3RvckZ1bmN0aW9uKHBhcmFtKX19fWlmKHJldHVybnMpe3JldHVybiBhcmdUeXBlc1swXVtcImZyb21XaXJlVHlwZVwiXShydil9fXJldHVybiBvbkRvbmUocnYpfX1mdW5jdGlvbiBoZWFwMzJWZWN0b3JUb0FycmF5KGNvdW50LGZpcnN0RWxlbWVudCl7dmFyIGFycmF5PVtdO2Zvcih2YXIgaT0wO2k8Y291bnQ7aSsrKXthcnJheS5wdXNoKEhFQVBVMzJbZmlyc3RFbGVtZW50K2kqND4+Ml0pfXJldHVybiBhcnJheX1mdW5jdGlvbiBfX2VtYmluZF9yZWdpc3Rlcl9jbGFzc19jbGFzc19mdW5jdGlvbihyYXdDbGFzc1R5cGUsbWV0aG9kTmFtZSxhcmdDb3VudCxyYXdBcmdUeXBlc0FkZHIsaW52b2tlclNpZ25hdHVyZSxyYXdJbnZva2VyLGZuLGlzQXN5bmMpe3ZhciByYXdBcmdUeXBlcz1oZWFwMzJWZWN0b3JUb0FycmF5KGFyZ0NvdW50LHJhd0FyZ1R5cGVzQWRkcik7bWV0aG9kTmFtZT1yZWFkTGF0aW4xU3RyaW5nKG1ldGhvZE5hbWUpO3Jhd0ludm9rZXI9ZW1iaW5kX19yZXF1aXJlRnVuY3Rpb24oaW52b2tlclNpZ25hdHVyZSxyYXdJbnZva2VyKTt3aGVuRGVwZW5kZW50VHlwZXNBcmVSZXNvbHZlZChbXSxbcmF3Q2xhc3NUeXBlXSxmdW5jdGlvbihjbGFzc1R5cGUpe2NsYXNzVHlwZT1jbGFzc1R5cGVbMF07dmFyIGh1bWFuTmFtZT1gJHtjbGFzc1R5cGUubmFtZX0uJHttZXRob2ROYW1lfWA7ZnVuY3Rpb24gdW5ib3VuZFR5cGVzSGFuZGxlcigpe3Rocm93VW5ib3VuZFR5cGVFcnJvcihgQ2Fubm90IGNhbGwgJHtodW1hbk5hbWV9IGR1ZSB0byB1bmJvdW5kIHR5cGVzYCxyYXdBcmdUeXBlcyl9aWYobWV0aG9kTmFtZS5zdGFydHNXaXRoKFwiQEBcIikpe21ldGhvZE5hbWU9U3ltYm9sW21ldGhvZE5hbWUuc3Vic3RyaW5nKDIpXX12YXIgcHJvdG89Y2xhc3NUeXBlLnJlZ2lzdGVyZWRDbGFzcy5jb25zdHJ1Y3RvcjtpZih1bmRlZmluZWQ9PT1wcm90b1ttZXRob2ROYW1lXSl7dW5ib3VuZFR5cGVzSGFuZGxlci5hcmdDb3VudD1hcmdDb3VudC0xO3Byb3RvW21ldGhvZE5hbWVdPXVuYm91bmRUeXBlc0hhbmRsZXJ9ZWxzZXtlbnN1cmVPdmVybG9hZFRhYmxlKHByb3RvLG1ldGhvZE5hbWUsaHVtYW5OYW1lKTtwcm90b1ttZXRob2ROYW1lXS5vdmVybG9hZFRhYmxlW2FyZ0NvdW50LTFdPXVuYm91bmRUeXBlc0hhbmRsZXJ9d2hlbkRlcGVuZGVudFR5cGVzQXJlUmVzb2x2ZWQoW10scmF3QXJnVHlwZXMsZnVuY3Rpb24oYXJnVHlwZXMpe3ZhciBpbnZva2VyQXJnc0FycmF5PVthcmdUeXBlc1swXSxudWxsXS5jb25jYXQoYXJnVHlwZXMuc2xpY2UoMSkpO3ZhciBmdW5jPWNyYWZ0SW52b2tlckZ1bmN0aW9uKGh1bWFuTmFtZSxpbnZva2VyQXJnc0FycmF5LG51bGwscmF3SW52b2tlcixmbixpc0FzeW5jKTtpZih1bmRlZmluZWQ9PT1wcm90b1ttZXRob2ROYW1lXS5vdmVybG9hZFRhYmxlKXtmdW5jLmFyZ0NvdW50PWFyZ0NvdW50LTE7cHJvdG9bbWV0aG9kTmFtZV09ZnVuY31lbHNle3Byb3RvW21ldGhvZE5hbWVdLm92ZXJsb2FkVGFibGVbYXJnQ291bnQtMV09ZnVuY31pZihjbGFzc1R5cGUucmVnaXN0ZXJlZENsYXNzLl9fZGVyaXZlZENsYXNzZXMpe2Zvcihjb25zdCBkZXJpdmVkQ2xhc3Mgb2YgY2xhc3NUeXBlLnJlZ2lzdGVyZWRDbGFzcy5fX2Rlcml2ZWRDbGFzc2VzKXtpZighZGVyaXZlZENsYXNzLmNvbnN0cnVjdG9yLmhhc093blByb3BlcnR5KG1ldGhvZE5hbWUpKXtkZXJpdmVkQ2xhc3MuY29uc3RydWN0b3JbbWV0aG9kTmFtZV09ZnVuY319fXJldHVybltdfSk7cmV0dXJuW119KX1mdW5jdGlvbiB2YWxpZGF0ZVRoaXModGhpc18sY2xhc3NUeXBlLGh1bWFuTmFtZSl7aWYoISh0aGlzXyBpbnN0YW5jZW9mIE9iamVjdCkpe3Rocm93QmluZGluZ0Vycm9yKGAke2h1bWFuTmFtZX0gd2l0aCBpbnZhbGlkIFwidGhpc1wiOiAke3RoaXNffWApfWlmKCEodGhpc18gaW5zdGFuY2VvZiBjbGFzc1R5cGUucmVnaXN0ZXJlZENsYXNzLmNvbnN0cnVjdG9yKSl7dGhyb3dCaW5kaW5nRXJyb3IoYCR7aHVtYW5OYW1lfSBpbmNvbXBhdGlibGUgd2l0aCBcInRoaXNcIiBvZiB0eXBlICR7dGhpc18uY29uc3RydWN0b3IubmFtZX1gKX1pZighdGhpc18uJCQucHRyKXt0aHJvd0JpbmRpbmdFcnJvcihgY2Fubm90IGNhbGwgZW1zY3JpcHRlbiBiaW5kaW5nIG1ldGhvZCAke2h1bWFuTmFtZX0gb24gZGVsZXRlZCBvYmplY3RgKX1yZXR1cm4gdXBjYXN0UG9pbnRlcih0aGlzXy4kJC5wdHIsdGhpc18uJCQucHRyVHlwZS5yZWdpc3RlcmVkQ2xhc3MsY2xhc3NUeXBlLnJlZ2lzdGVyZWRDbGFzcyl9ZnVuY3Rpb24gX19lbWJpbmRfcmVnaXN0ZXJfY2xhc3NfY2xhc3NfcHJvcGVydHkocmF3Q2xhc3NUeXBlLGZpZWxkTmFtZSxyYXdGaWVsZFR5cGUscmF3RmllbGRQdHIsZ2V0dGVyU2lnbmF0dXJlLGdldHRlcixzZXR0ZXJTaWduYXR1cmUsc2V0dGVyKXtmaWVsZE5hbWU9cmVhZExhdGluMVN0cmluZyhmaWVsZE5hbWUpO2dldHRlcj1lbWJpbmRfX3JlcXVpcmVGdW5jdGlvbihnZXR0ZXJTaWduYXR1cmUsZ2V0dGVyKTt3aGVuRGVwZW5kZW50VHlwZXNBcmVSZXNvbHZlZChbXSxbcmF3Q2xhc3NUeXBlXSxmdW5jdGlvbihjbGFzc1R5cGUpe2NsYXNzVHlwZT1jbGFzc1R5cGVbMF07dmFyIGh1bWFuTmFtZT1gJHtjbGFzc1R5cGUubmFtZX0uJHtmaWVsZE5hbWV9YDt2YXIgZGVzYz17Z2V0OmZ1bmN0aW9uKCl7dGhyb3dVbmJvdW5kVHlwZUVycm9yKGBDYW5ub3QgYWNjZXNzICR7aHVtYW5OYW1lfSBkdWUgdG8gdW5ib3VuZCB0eXBlc2AsW3Jhd0ZpZWxkVHlwZV0pfSxlbnVtZXJhYmxlOnRydWUsY29uZmlndXJhYmxlOnRydWV9O2lmKHNldHRlcil7ZGVzYy5zZXQ9KCk9Pnt0aHJvd1VuYm91bmRUeXBlRXJyb3IoYENhbm5vdCBhY2Nlc3MgJHtodW1hbk5hbWV9IGR1ZSB0byB1bmJvdW5kIHR5cGVzYCxbcmF3RmllbGRUeXBlXSl9fWVsc2V7ZGVzYy5zZXQ9dj0+e3Rocm93QmluZGluZ0Vycm9yKGAke2h1bWFuTmFtZX0gaXMgYSByZWFkLW9ubHkgcHJvcGVydHlgKX19T2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzVHlwZS5yZWdpc3RlcmVkQ2xhc3MuY29uc3RydWN0b3IsZmllbGROYW1lLGRlc2MpO3doZW5EZXBlbmRlbnRUeXBlc0FyZVJlc29sdmVkKFtdLFtyYXdGaWVsZFR5cGVdLGZ1bmN0aW9uKGZpZWxkVHlwZSl7ZmllbGRUeXBlPWZpZWxkVHlwZVswXTt2YXIgZGVzYz17Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGZpZWxkVHlwZVtcImZyb21XaXJlVHlwZVwiXShnZXR0ZXIocmF3RmllbGRQdHIpKX0sZW51bWVyYWJsZTp0cnVlfTtpZihzZXR0ZXIpe3NldHRlcj1lbWJpbmRfX3JlcXVpcmVGdW5jdGlvbihzZXR0ZXJTaWduYXR1cmUsc2V0dGVyKTtkZXNjLnNldD12PT57dmFyIGRlc3RydWN0b3JzPVtdO3NldHRlcihyYXdGaWVsZFB0cixmaWVsZFR5cGVbXCJ0b1dpcmVUeXBlXCJdKGRlc3RydWN0b3JzLHYpKTtydW5EZXN0cnVjdG9ycyhkZXN0cnVjdG9ycyl9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc1R5cGUucmVnaXN0ZXJlZENsYXNzLmNvbnN0cnVjdG9yLGZpZWxkTmFtZSxkZXNjKTtyZXR1cm5bXX0pO3JldHVybltdfSl9ZnVuY3Rpb24gX19lbWJpbmRfcmVnaXN0ZXJfY2xhc3NfY29uc3RydWN0b3IocmF3Q2xhc3NUeXBlLGFyZ0NvdW50LHJhd0FyZ1R5cGVzQWRkcixpbnZva2VyU2lnbmF0dXJlLGludm9rZXIscmF3Q29uc3RydWN0b3Ipe2Fzc2VydChhcmdDb3VudD4wKTt2YXIgcmF3QXJnVHlwZXM9aGVhcDMyVmVjdG9yVG9BcnJheShhcmdDb3VudCxyYXdBcmdUeXBlc0FkZHIpO2ludm9rZXI9ZW1iaW5kX19yZXF1aXJlRnVuY3Rpb24oaW52b2tlclNpZ25hdHVyZSxpbnZva2VyKTt3aGVuRGVwZW5kZW50VHlwZXNBcmVSZXNvbHZlZChbXSxbcmF3Q2xhc3NUeXBlXSxmdW5jdGlvbihjbGFzc1R5cGUpe2NsYXNzVHlwZT1jbGFzc1R5cGVbMF07dmFyIGh1bWFuTmFtZT1gY29uc3RydWN0b3IgJHtjbGFzc1R5cGUubmFtZX1gO2lmKHVuZGVmaW5lZD09PWNsYXNzVHlwZS5yZWdpc3RlcmVkQ2xhc3MuY29uc3RydWN0b3JfYm9keSl7Y2xhc3NUeXBlLnJlZ2lzdGVyZWRDbGFzcy5jb25zdHJ1Y3Rvcl9ib2R5PVtdfWlmKHVuZGVmaW5lZCE9PWNsYXNzVHlwZS5yZWdpc3RlcmVkQ2xhc3MuY29uc3RydWN0b3JfYm9keVthcmdDb3VudC0xXSl7dGhyb3cgbmV3IEJpbmRpbmdFcnJvcihgQ2Fubm90IHJlZ2lzdGVyIG11bHRpcGxlIGNvbnN0cnVjdG9ycyB3aXRoIGlkZW50aWNhbCBudW1iZXIgb2YgcGFyYW1ldGVycyAoJHthcmdDb3VudC0xfSkgZm9yIGNsYXNzICcke2NsYXNzVHlwZS5uYW1lfSchIE92ZXJsb2FkIHJlc29sdXRpb24gaXMgY3VycmVudGx5IG9ubHkgcGVyZm9ybWVkIHVzaW5nIHRoZSBwYXJhbWV0ZXIgY291bnQsIG5vdCBhY3R1YWwgdHlwZSBpbmZvIWApfWNsYXNzVHlwZS5yZWdpc3RlcmVkQ2xhc3MuY29uc3RydWN0b3JfYm9keVthcmdDb3VudC0xXT0oKT0+e3Rocm93VW5ib3VuZFR5cGVFcnJvcihgQ2Fubm90IGNvbnN0cnVjdCAke2NsYXNzVHlwZS5uYW1lfSBkdWUgdG8gdW5ib3VuZCB0eXBlc2AscmF3QXJnVHlwZXMpfTt3aGVuRGVwZW5kZW50VHlwZXNBcmVSZXNvbHZlZChbXSxyYXdBcmdUeXBlcyxmdW5jdGlvbihhcmdUeXBlcyl7YXJnVHlwZXMuc3BsaWNlKDEsMCxudWxsKTtjbGFzc1R5cGUucmVnaXN0ZXJlZENsYXNzLmNvbnN0cnVjdG9yX2JvZHlbYXJnQ291bnQtMV09Y3JhZnRJbnZva2VyRnVuY3Rpb24oaHVtYW5OYW1lLGFyZ1R5cGVzLG51bGwsaW52b2tlcixyYXdDb25zdHJ1Y3Rvcik7cmV0dXJuW119KTtyZXR1cm5bXX0pfWZ1bmN0aW9uIF9fZW1iaW5kX3JlZ2lzdGVyX2NsYXNzX2Z1bmN0aW9uKHJhd0NsYXNzVHlwZSxtZXRob2ROYW1lLGFyZ0NvdW50LHJhd0FyZ1R5cGVzQWRkcixpbnZva2VyU2lnbmF0dXJlLHJhd0ludm9rZXIsY29udGV4dCxpc1B1cmVWaXJ0dWFsLGlzQXN5bmMpe3ZhciByYXdBcmdUeXBlcz1oZWFwMzJWZWN0b3JUb0FycmF5KGFyZ0NvdW50LHJhd0FyZ1R5cGVzQWRkcik7bWV0aG9kTmFtZT1yZWFkTGF0aW4xU3RyaW5nKG1ldGhvZE5hbWUpO3Jhd0ludm9rZXI9ZW1iaW5kX19yZXF1aXJlRnVuY3Rpb24oaW52b2tlclNpZ25hdHVyZSxyYXdJbnZva2VyKTt3aGVuRGVwZW5kZW50VHlwZXNBcmVSZXNvbHZlZChbXSxbcmF3Q2xhc3NUeXBlXSxmdW5jdGlvbihjbGFzc1R5cGUpe2NsYXNzVHlwZT1jbGFzc1R5cGVbMF07dmFyIGh1bWFuTmFtZT1gJHtjbGFzc1R5cGUubmFtZX0uJHttZXRob2ROYW1lfWA7aWYobWV0aG9kTmFtZS5zdGFydHNXaXRoKFwiQEBcIikpe21ldGhvZE5hbWU9U3ltYm9sW21ldGhvZE5hbWUuc3Vic3RyaW5nKDIpXX1pZihpc1B1cmVWaXJ0dWFsKXtjbGFzc1R5cGUucmVnaXN0ZXJlZENsYXNzLnB1cmVWaXJ0dWFsRnVuY3Rpb25zLnB1c2gobWV0aG9kTmFtZSl9ZnVuY3Rpb24gdW5ib3VuZFR5cGVzSGFuZGxlcigpe3Rocm93VW5ib3VuZFR5cGVFcnJvcihgQ2Fubm90IGNhbGwgJHtodW1hbk5hbWV9IGR1ZSB0byB1bmJvdW5kIHR5cGVzYCxyYXdBcmdUeXBlcyl9dmFyIHByb3RvPWNsYXNzVHlwZS5yZWdpc3RlcmVkQ2xhc3MuaW5zdGFuY2VQcm90b3R5cGU7dmFyIG1ldGhvZD1wcm90b1ttZXRob2ROYW1lXTtpZih1bmRlZmluZWQ9PT1tZXRob2R8fHVuZGVmaW5lZD09PW1ldGhvZC5vdmVybG9hZFRhYmxlJiZtZXRob2QuY2xhc3NOYW1lIT09Y2xhc3NUeXBlLm5hbWUmJm1ldGhvZC5hcmdDb3VudD09PWFyZ0NvdW50LTIpe3VuYm91bmRUeXBlc0hhbmRsZXIuYXJnQ291bnQ9YXJnQ291bnQtMjt1bmJvdW5kVHlwZXNIYW5kbGVyLmNsYXNzTmFtZT1jbGFzc1R5cGUubmFtZTtwcm90b1ttZXRob2ROYW1lXT11bmJvdW5kVHlwZXNIYW5kbGVyfWVsc2V7ZW5zdXJlT3ZlcmxvYWRUYWJsZShwcm90byxtZXRob2ROYW1lLGh1bWFuTmFtZSk7cHJvdG9bbWV0aG9kTmFtZV0ub3ZlcmxvYWRUYWJsZVthcmdDb3VudC0yXT11bmJvdW5kVHlwZXNIYW5kbGVyfXdoZW5EZXBlbmRlbnRUeXBlc0FyZVJlc29sdmVkKFtdLHJhd0FyZ1R5cGVzLGZ1bmN0aW9uKGFyZ1R5cGVzKXt2YXIgbWVtYmVyRnVuY3Rpb249Y3JhZnRJbnZva2VyRnVuY3Rpb24oaHVtYW5OYW1lLGFyZ1R5cGVzLGNsYXNzVHlwZSxyYXdJbnZva2VyLGNvbnRleHQsaXNBc3luYyk7aWYodW5kZWZpbmVkPT09cHJvdG9bbWV0aG9kTmFtZV0ub3ZlcmxvYWRUYWJsZSl7bWVtYmVyRnVuY3Rpb24uYXJnQ291bnQ9YXJnQ291bnQtMjtwcm90b1ttZXRob2ROYW1lXT1tZW1iZXJGdW5jdGlvbn1lbHNle3Byb3RvW21ldGhvZE5hbWVdLm92ZXJsb2FkVGFibGVbYXJnQ291bnQtMl09bWVtYmVyRnVuY3Rpb259cmV0dXJuW119KTtyZXR1cm5bXX0pfWZ1bmN0aW9uIF9fZW1iaW5kX3JlZ2lzdGVyX2NsYXNzX3Byb3BlcnR5KGNsYXNzVHlwZSxmaWVsZE5hbWUsZ2V0dGVyUmV0dXJuVHlwZSxnZXR0ZXJTaWduYXR1cmUsZ2V0dGVyLGdldHRlckNvbnRleHQsc2V0dGVyQXJndW1lbnRUeXBlLHNldHRlclNpZ25hdHVyZSxzZXR0ZXIsc2V0dGVyQ29udGV4dCl7ZmllbGROYW1lPXJlYWRMYXRpbjFTdHJpbmcoZmllbGROYW1lKTtnZXR0ZXI9ZW1iaW5kX19yZXF1aXJlRnVuY3Rpb24oZ2V0dGVyU2lnbmF0dXJlLGdldHRlcik7d2hlbkRlcGVuZGVudFR5cGVzQXJlUmVzb2x2ZWQoW10sW2NsYXNzVHlwZV0sZnVuY3Rpb24oY2xhc3NUeXBlKXtjbGFzc1R5cGU9Y2xhc3NUeXBlWzBdO3ZhciBodW1hbk5hbWU9YCR7Y2xhc3NUeXBlLm5hbWV9LiR7ZmllbGROYW1lfWA7dmFyIGRlc2M9e2dldDpmdW5jdGlvbigpe3Rocm93VW5ib3VuZFR5cGVFcnJvcihgQ2Fubm90IGFjY2VzcyAke2h1bWFuTmFtZX0gZHVlIHRvIHVuYm91bmQgdHlwZXNgLFtnZXR0ZXJSZXR1cm5UeXBlLHNldHRlckFyZ3VtZW50VHlwZV0pfSxlbnVtZXJhYmxlOnRydWUsY29uZmlndXJhYmxlOnRydWV9O2lmKHNldHRlcil7ZGVzYy5zZXQ9KCk9Pnt0aHJvd1VuYm91bmRUeXBlRXJyb3IoYENhbm5vdCBhY2Nlc3MgJHtodW1hbk5hbWV9IGR1ZSB0byB1bmJvdW5kIHR5cGVzYCxbZ2V0dGVyUmV0dXJuVHlwZSxzZXR0ZXJBcmd1bWVudFR5cGVdKX19ZWxzZXtkZXNjLnNldD12PT57dGhyb3dCaW5kaW5nRXJyb3IoaHVtYW5OYW1lK1wiIGlzIGEgcmVhZC1vbmx5IHByb3BlcnR5XCIpfX1PYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NUeXBlLnJlZ2lzdGVyZWRDbGFzcy5pbnN0YW5jZVByb3RvdHlwZSxmaWVsZE5hbWUsZGVzYyk7d2hlbkRlcGVuZGVudFR5cGVzQXJlUmVzb2x2ZWQoW10sc2V0dGVyP1tnZXR0ZXJSZXR1cm5UeXBlLHNldHRlckFyZ3VtZW50VHlwZV06W2dldHRlclJldHVyblR5cGVdLGZ1bmN0aW9uKHR5cGVzKXt2YXIgZ2V0dGVyUmV0dXJuVHlwZT10eXBlc1swXTt2YXIgZGVzYz17Z2V0OmZ1bmN0aW9uKCl7dmFyIHB0cj12YWxpZGF0ZVRoaXModGhpcyxjbGFzc1R5cGUsaHVtYW5OYW1lK1wiIGdldHRlclwiKTtyZXR1cm4gZ2V0dGVyUmV0dXJuVHlwZVtcImZyb21XaXJlVHlwZVwiXShnZXR0ZXIoZ2V0dGVyQ29udGV4dCxwdHIpKX0sZW51bWVyYWJsZTp0cnVlfTtpZihzZXR0ZXIpe3NldHRlcj1lbWJpbmRfX3JlcXVpcmVGdW5jdGlvbihzZXR0ZXJTaWduYXR1cmUsc2V0dGVyKTt2YXIgc2V0dGVyQXJndW1lbnRUeXBlPXR5cGVzWzFdO2Rlc2Muc2V0PWZ1bmN0aW9uKHYpe3ZhciBwdHI9dmFsaWRhdGVUaGlzKHRoaXMsY2xhc3NUeXBlLGh1bWFuTmFtZStcIiBzZXR0ZXJcIik7dmFyIGRlc3RydWN0b3JzPVtdO3NldHRlcihzZXR0ZXJDb250ZXh0LHB0cixzZXR0ZXJBcmd1bWVudFR5cGVbXCJ0b1dpcmVUeXBlXCJdKGRlc3RydWN0b3JzLHYpKTtydW5EZXN0cnVjdG9ycyhkZXN0cnVjdG9ycyl9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc1R5cGUucmVnaXN0ZXJlZENsYXNzLmluc3RhbmNlUHJvdG90eXBlLGZpZWxkTmFtZSxkZXNjKTtyZXR1cm5bXX0pO3JldHVybltdfSl9ZnVuY3Rpb24gSGFuZGxlQWxsb2NhdG9yKCl7dGhpcy5hbGxvY2F0ZWQ9W3VuZGVmaW5lZF07dGhpcy5mcmVlbGlzdD1bXTt0aGlzLmdldD1mdW5jdGlvbihpZCl7cmV0dXJuIHRoaXMuYWxsb2NhdGVkW2lkXX07dGhpcy5oYXM9ZnVuY3Rpb24oaWQpe3JldHVybiB0aGlzLmFsbG9jYXRlZFtpZF0hPT11bmRlZmluZWR9O3RoaXMuYWxsb2NhdGU9ZnVuY3Rpb24oaGFuZGxlKXt2YXIgaWQ9dGhpcy5mcmVlbGlzdC5wb3AoKXx8dGhpcy5hbGxvY2F0ZWQubGVuZ3RoO3RoaXMuYWxsb2NhdGVkW2lkXT1oYW5kbGU7cmV0dXJuIGlkfTt0aGlzLmZyZWU9ZnVuY3Rpb24oaWQpe3RoaXMuYWxsb2NhdGVkW2lkXT11bmRlZmluZWQ7dGhpcy5mcmVlbGlzdC5wdXNoKGlkKX19dmFyIGVtdmFsX2hhbmRsZXM9bmV3IEhhbmRsZUFsbG9jYXRvcjtmdW5jdGlvbiBfX2VtdmFsX2RlY3JlZihoYW5kbGUpe2lmKGhhbmRsZT49ZW12YWxfaGFuZGxlcy5yZXNlcnZlZCYmMD09PS0tZW12YWxfaGFuZGxlcy5nZXQoaGFuZGxlKS5yZWZjb3VudCl7ZW12YWxfaGFuZGxlcy5mcmVlKGhhbmRsZSl9fWZ1bmN0aW9uIGNvdW50X2VtdmFsX2hhbmRsZXMoKXt2YXIgY291bnQ9MDtmb3IodmFyIGk9ZW12YWxfaGFuZGxlcy5yZXNlcnZlZDtpPGVtdmFsX2hhbmRsZXMuYWxsb2NhdGVkLmxlbmd0aDsrK2kpe2lmKGVtdmFsX2hhbmRsZXMuYWxsb2NhdGVkW2ldIT09dW5kZWZpbmVkKXsrK2NvdW50fX1yZXR1cm4gY291bnR9ZnVuY3Rpb24gaW5pdF9lbXZhbCgpe2VtdmFsX2hhbmRsZXMuYWxsb2NhdGVkLnB1c2goe3ZhbHVlOnVuZGVmaW5lZH0se3ZhbHVlOm51bGx9LHt2YWx1ZTp0cnVlfSx7dmFsdWU6ZmFsc2V9KTtlbXZhbF9oYW5kbGVzLnJlc2VydmVkPWVtdmFsX2hhbmRsZXMuYWxsb2NhdGVkLmxlbmd0aDtNb2R1bGVbXCJjb3VudF9lbXZhbF9oYW5kbGVzXCJdPWNvdW50X2VtdmFsX2hhbmRsZXN9dmFyIEVtdmFsPXt0b1ZhbHVlOmhhbmRsZT0+e2lmKCFoYW5kbGUpe3Rocm93QmluZGluZ0Vycm9yKFwiQ2Fubm90IHVzZSBkZWxldGVkIHZhbC4gaGFuZGxlID0gXCIraGFuZGxlKX1yZXR1cm4gZW12YWxfaGFuZGxlcy5nZXQoaGFuZGxlKS52YWx1ZX0sdG9IYW5kbGU6dmFsdWU9Pntzd2l0Y2godmFsdWUpe2Nhc2UgdW5kZWZpbmVkOnJldHVybiAxO2Nhc2UgbnVsbDpyZXR1cm4gMjtjYXNlIHRydWU6cmV0dXJuIDM7Y2FzZSBmYWxzZTpyZXR1cm4gNDtkZWZhdWx0OntyZXR1cm4gZW12YWxfaGFuZGxlcy5hbGxvY2F0ZSh7cmVmY291bnQ6MSx2YWx1ZTp2YWx1ZX0pfX19fTtmdW5jdGlvbiBfX2VtYmluZF9yZWdpc3Rlcl9lbXZhbChyYXdUeXBlLG5hbWUpe25hbWU9cmVhZExhdGluMVN0cmluZyhuYW1lKTtyZWdpc3RlclR5cGUocmF3VHlwZSx7bmFtZTpuYW1lLFwiZnJvbVdpcmVUeXBlXCI6ZnVuY3Rpb24oaGFuZGxlKXt2YXIgcnY9RW12YWwudG9WYWx1ZShoYW5kbGUpO19fZW12YWxfZGVjcmVmKGhhbmRsZSk7cmV0dXJuIHJ2fSxcInRvV2lyZVR5cGVcIjpmdW5jdGlvbihkZXN0cnVjdG9ycyx2YWx1ZSl7cmV0dXJuIEVtdmFsLnRvSGFuZGxlKHZhbHVlKX0sXCJhcmdQYWNrQWR2YW5jZVwiOjgsXCJyZWFkVmFsdWVGcm9tUG9pbnRlclwiOnNpbXBsZVJlYWRWYWx1ZUZyb21Qb2ludGVyLGRlc3RydWN0b3JGdW5jdGlvbjpudWxsfSl9ZnVuY3Rpb24gZW51bVJlYWRWYWx1ZUZyb21Qb2ludGVyKG5hbWUsc2hpZnQsc2lnbmVkKXtzd2l0Y2goc2hpZnQpe2Nhc2UgMDpyZXR1cm4gZnVuY3Rpb24ocG9pbnRlcil7dmFyIGhlYXA9c2lnbmVkP0hFQVA4OkhFQVBVODtyZXR1cm4gdGhpc1tcImZyb21XaXJlVHlwZVwiXShoZWFwW3BvaW50ZXJdKX07Y2FzZSAxOnJldHVybiBmdW5jdGlvbihwb2ludGVyKXt2YXIgaGVhcD1zaWduZWQ/SEVBUDE2OkhFQVBVMTY7cmV0dXJuIHRoaXNbXCJmcm9tV2lyZVR5cGVcIl0oaGVhcFtwb2ludGVyPj4xXSl9O2Nhc2UgMjpyZXR1cm4gZnVuY3Rpb24ocG9pbnRlcil7dmFyIGhlYXA9c2lnbmVkP0hFQVAzMjpIRUFQVTMyO3JldHVybiB0aGlzW1wiZnJvbVdpcmVUeXBlXCJdKGhlYXBbcG9pbnRlcj4+Ml0pfTtkZWZhdWx0OnRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmtub3duIGludGVnZXIgdHlwZTogXCIrbmFtZSl9fWZ1bmN0aW9uIF9fZW1iaW5kX3JlZ2lzdGVyX2VudW0ocmF3VHlwZSxuYW1lLHNpemUsaXNTaWduZWQpe3ZhciBzaGlmdD1nZXRTaGlmdEZyb21TaXplKHNpemUpO25hbWU9cmVhZExhdGluMVN0cmluZyhuYW1lKTtmdW5jdGlvbiBjdG9yKCl7fWN0b3IudmFsdWVzPXt9O3JlZ2lzdGVyVHlwZShyYXdUeXBlLHtuYW1lOm5hbWUsY29uc3RydWN0b3I6Y3RvcixcImZyb21XaXJlVHlwZVwiOmZ1bmN0aW9uKGMpe3JldHVybiB0aGlzLmNvbnN0cnVjdG9yLnZhbHVlc1tjXX0sXCJ0b1dpcmVUeXBlXCI6ZnVuY3Rpb24oZGVzdHJ1Y3RvcnMsYyl7cmV0dXJuIGMudmFsdWV9LFwiYXJnUGFja0FkdmFuY2VcIjo4LFwicmVhZFZhbHVlRnJvbVBvaW50ZXJcIjplbnVtUmVhZFZhbHVlRnJvbVBvaW50ZXIobmFtZSxzaGlmdCxpc1NpZ25lZCksZGVzdHJ1Y3RvckZ1bmN0aW9uOm51bGx9KTtleHBvc2VQdWJsaWNTeW1ib2wobmFtZSxjdG9yKX1mdW5jdGlvbiByZXF1aXJlUmVnaXN0ZXJlZFR5cGUocmF3VHlwZSxodW1hbk5hbWUpe3ZhciBpbXBsPXJlZ2lzdGVyZWRUeXBlc1tyYXdUeXBlXTtpZih1bmRlZmluZWQ9PT1pbXBsKXt0aHJvd0JpbmRpbmdFcnJvcihodW1hbk5hbWUrXCIgaGFzIHVua25vd24gdHlwZSBcIitnZXRUeXBlTmFtZShyYXdUeXBlKSl9cmV0dXJuIGltcGx9ZnVuY3Rpb24gX19lbWJpbmRfcmVnaXN0ZXJfZW51bV92YWx1ZShyYXdFbnVtVHlwZSxuYW1lLGVudW1WYWx1ZSl7dmFyIGVudW1UeXBlPXJlcXVpcmVSZWdpc3RlcmVkVHlwZShyYXdFbnVtVHlwZSxcImVudW1cIik7bmFtZT1yZWFkTGF0aW4xU3RyaW5nKG5hbWUpO3ZhciBFbnVtPWVudW1UeXBlLmNvbnN0cnVjdG9yO3ZhciBWYWx1ZT1PYmplY3QuY3JlYXRlKGVudW1UeXBlLmNvbnN0cnVjdG9yLnByb3RvdHlwZSx7dmFsdWU6e3ZhbHVlOmVudW1WYWx1ZX0sY29uc3RydWN0b3I6e3ZhbHVlOmNyZWF0ZU5hbWVkRnVuY3Rpb24oYCR7ZW51bVR5cGUubmFtZX1fJHtuYW1lfWAsZnVuY3Rpb24oKXt9KX19KTtFbnVtLnZhbHVlc1tlbnVtVmFsdWVdPVZhbHVlO0VudW1bbmFtZV09VmFsdWV9ZnVuY3Rpb24gZW1iaW5kUmVwcih2KXtpZih2PT09bnVsbCl7cmV0dXJuXCJudWxsXCJ9dmFyIHQ9dHlwZW9mIHY7aWYodD09PVwib2JqZWN0XCJ8fHQ9PT1cImFycmF5XCJ8fHQ9PT1cImZ1bmN0aW9uXCIpe3JldHVybiB2LnRvU3RyaW5nKCl9ZWxzZXtyZXR1cm5cIlwiK3Z9fWZ1bmN0aW9uIGZsb2F0UmVhZFZhbHVlRnJvbVBvaW50ZXIobmFtZSxzaGlmdCl7c3dpdGNoKHNoaWZ0KXtjYXNlIDI6cmV0dXJuIGZ1bmN0aW9uKHBvaW50ZXIpe3JldHVybiB0aGlzW1wiZnJvbVdpcmVUeXBlXCJdKEhFQVBGMzJbcG9pbnRlcj4+Ml0pfTtjYXNlIDM6cmV0dXJuIGZ1bmN0aW9uKHBvaW50ZXIpe3JldHVybiB0aGlzW1wiZnJvbVdpcmVUeXBlXCJdKEhFQVBGNjRbcG9pbnRlcj4+M10pfTtkZWZhdWx0OnRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmtub3duIGZsb2F0IHR5cGU6IFwiK25hbWUpfX1mdW5jdGlvbiBfX2VtYmluZF9yZWdpc3Rlcl9mbG9hdChyYXdUeXBlLG5hbWUsc2l6ZSl7dmFyIHNoaWZ0PWdldFNoaWZ0RnJvbVNpemUoc2l6ZSk7bmFtZT1yZWFkTGF0aW4xU3RyaW5nKG5hbWUpO3JlZ2lzdGVyVHlwZShyYXdUeXBlLHtuYW1lOm5hbWUsXCJmcm9tV2lyZVR5cGVcIjpmdW5jdGlvbih2YWx1ZSl7cmV0dXJuIHZhbHVlfSxcInRvV2lyZVR5cGVcIjpmdW5jdGlvbihkZXN0cnVjdG9ycyx2YWx1ZSl7cmV0dXJuIHZhbHVlfSxcImFyZ1BhY2tBZHZhbmNlXCI6OCxcInJlYWRWYWx1ZUZyb21Qb2ludGVyXCI6ZmxvYXRSZWFkVmFsdWVGcm9tUG9pbnRlcihuYW1lLHNoaWZ0KSxkZXN0cnVjdG9yRnVuY3Rpb246bnVsbH0pfWZ1bmN0aW9uIGludGVnZXJSZWFkVmFsdWVGcm9tUG9pbnRlcihuYW1lLHNoaWZ0LHNpZ25lZCl7c3dpdGNoKHNoaWZ0KXtjYXNlIDA6cmV0dXJuIHNpZ25lZD9mdW5jdGlvbiByZWFkUzhGcm9tUG9pbnRlcihwb2ludGVyKXtyZXR1cm4gSEVBUDhbcG9pbnRlcl19OmZ1bmN0aW9uIHJlYWRVOEZyb21Qb2ludGVyKHBvaW50ZXIpe3JldHVybiBIRUFQVThbcG9pbnRlcl19O2Nhc2UgMTpyZXR1cm4gc2lnbmVkP2Z1bmN0aW9uIHJlYWRTMTZGcm9tUG9pbnRlcihwb2ludGVyKXtyZXR1cm4gSEVBUDE2W3BvaW50ZXI+PjFdfTpmdW5jdGlvbiByZWFkVTE2RnJvbVBvaW50ZXIocG9pbnRlcil7cmV0dXJuIEhFQVBVMTZbcG9pbnRlcj4+MV19O2Nhc2UgMjpyZXR1cm4gc2lnbmVkP2Z1bmN0aW9uIHJlYWRTMzJGcm9tUG9pbnRlcihwb2ludGVyKXtyZXR1cm4gSEVBUDMyW3BvaW50ZXI+PjJdfTpmdW5jdGlvbiByZWFkVTMyRnJvbVBvaW50ZXIocG9pbnRlcil7cmV0dXJuIEhFQVBVMzJbcG9pbnRlcj4+Ml19O2RlZmF1bHQ6dGhyb3cgbmV3IFR5cGVFcnJvcihcIlVua25vd24gaW50ZWdlciB0eXBlOiBcIituYW1lKX19ZnVuY3Rpb24gX19lbWJpbmRfcmVnaXN0ZXJfaW50ZWdlcihwcmltaXRpdmVUeXBlLG5hbWUsc2l6ZSxtaW5SYW5nZSxtYXhSYW5nZSl7bmFtZT1yZWFkTGF0aW4xU3RyaW5nKG5hbWUpO2lmKG1heFJhbmdlPT09LTEpe21heFJhbmdlPTQyOTQ5NjcyOTV9dmFyIHNoaWZ0PWdldFNoaWZ0RnJvbVNpemUoc2l6ZSk7dmFyIGZyb21XaXJlVHlwZT12YWx1ZT0+dmFsdWU7aWYobWluUmFuZ2U9PT0wKXt2YXIgYml0c2hpZnQ9MzItOCpzaXplO2Zyb21XaXJlVHlwZT12YWx1ZT0+dmFsdWU8PGJpdHNoaWZ0Pj4+Yml0c2hpZnR9dmFyIGlzVW5zaWduZWRUeXBlPW5hbWUuaW5jbHVkZXMoXCJ1bnNpZ25lZFwiKTt2YXIgY2hlY2tBc3NlcnRpb25zPSh2YWx1ZSx0b1R5cGVOYW1lKT0+e307dmFyIHRvV2lyZVR5cGU7aWYoaXNVbnNpZ25lZFR5cGUpe3RvV2lyZVR5cGU9ZnVuY3Rpb24oZGVzdHJ1Y3RvcnMsdmFsdWUpe2NoZWNrQXNzZXJ0aW9ucyh2YWx1ZSx0aGlzLm5hbWUpO3JldHVybiB2YWx1ZT4+PjB9fWVsc2V7dG9XaXJlVHlwZT1mdW5jdGlvbihkZXN0cnVjdG9ycyx2YWx1ZSl7Y2hlY2tBc3NlcnRpb25zKHZhbHVlLHRoaXMubmFtZSk7cmV0dXJuIHZhbHVlfX1yZWdpc3RlclR5cGUocHJpbWl0aXZlVHlwZSx7bmFtZTpuYW1lLFwiZnJvbVdpcmVUeXBlXCI6ZnJvbVdpcmVUeXBlLFwidG9XaXJlVHlwZVwiOnRvV2lyZVR5cGUsXCJhcmdQYWNrQWR2YW5jZVwiOjgsXCJyZWFkVmFsdWVGcm9tUG9pbnRlclwiOmludGVnZXJSZWFkVmFsdWVGcm9tUG9pbnRlcihuYW1lLHNoaWZ0LG1pblJhbmdlIT09MCksZGVzdHJ1Y3RvckZ1bmN0aW9uOm51bGx9KX1mdW5jdGlvbiBfX2VtYmluZF9yZWdpc3Rlcl9tZW1vcnlfdmlldyhyYXdUeXBlLGRhdGFUeXBlSW5kZXgsbmFtZSl7dmFyIHR5cGVNYXBwaW5nPVtJbnQ4QXJyYXksVWludDhBcnJheSxJbnQxNkFycmF5LFVpbnQxNkFycmF5LEludDMyQXJyYXksVWludDMyQXJyYXksRmxvYXQzMkFycmF5LEZsb2F0NjRBcnJheV07dmFyIFRBPXR5cGVNYXBwaW5nW2RhdGFUeXBlSW5kZXhdO2Z1bmN0aW9uIGRlY29kZU1lbW9yeVZpZXcoaGFuZGxlKXtoYW5kbGU9aGFuZGxlPj4yO3ZhciBoZWFwPUhFQVBVMzI7dmFyIHNpemU9aGVhcFtoYW5kbGVdO3ZhciBkYXRhPWhlYXBbaGFuZGxlKzFdO3JldHVybiBuZXcgVEEoaGVhcC5idWZmZXIsZGF0YSxzaXplKX1uYW1lPXJlYWRMYXRpbjFTdHJpbmcobmFtZSk7cmVnaXN0ZXJUeXBlKHJhd1R5cGUse25hbWU6bmFtZSxcImZyb21XaXJlVHlwZVwiOmRlY29kZU1lbW9yeVZpZXcsXCJhcmdQYWNrQWR2YW5jZVwiOjgsXCJyZWFkVmFsdWVGcm9tUG9pbnRlclwiOmRlY29kZU1lbW9yeVZpZXd9LHtpZ25vcmVEdXBsaWNhdGVSZWdpc3RyYXRpb25zOnRydWV9KX1mdW5jdGlvbiBzdHJpbmdUb1VURjhBcnJheShzdHIsaGVhcCxvdXRJZHgsbWF4Qnl0ZXNUb1dyaXRlKXtpZighKG1heEJ5dGVzVG9Xcml0ZT4wKSlyZXR1cm4gMDt2YXIgc3RhcnRJZHg9b3V0SWR4O3ZhciBlbmRJZHg9b3V0SWR4K21heEJ5dGVzVG9Xcml0ZS0xO2Zvcih2YXIgaT0wO2k8c3RyLmxlbmd0aDsrK2kpe3ZhciB1PXN0ci5jaGFyQ29kZUF0KGkpO2lmKHU+PTU1Mjk2JiZ1PD01NzM0Myl7dmFyIHUxPXN0ci5jaGFyQ29kZUF0KCsraSk7dT02NTUzNisoKHUmMTAyMyk8PDEwKXx1MSYxMDIzfWlmKHU8PTEyNyl7aWYob3V0SWR4Pj1lbmRJZHgpYnJlYWs7aGVhcFtvdXRJZHgrK109dX1lbHNlIGlmKHU8PTIwNDcpe2lmKG91dElkeCsxPj1lbmRJZHgpYnJlYWs7aGVhcFtvdXRJZHgrK109MTkyfHU+PjY7aGVhcFtvdXRJZHgrK109MTI4fHUmNjN9ZWxzZSBpZih1PD02NTUzNSl7aWYob3V0SWR4KzI+PWVuZElkeClicmVhaztoZWFwW291dElkeCsrXT0yMjR8dT4+MTI7aGVhcFtvdXRJZHgrK109MTI4fHU+PjYmNjM7aGVhcFtvdXRJZHgrK109MTI4fHUmNjN9ZWxzZXtpZihvdXRJZHgrMz49ZW5kSWR4KWJyZWFrO2hlYXBbb3V0SWR4KytdPTI0MHx1Pj4xODtoZWFwW291dElkeCsrXT0xMjh8dT4+MTImNjM7aGVhcFtvdXRJZHgrK109MTI4fHU+PjYmNjM7aGVhcFtvdXRJZHgrK109MTI4fHUmNjN9fWhlYXBbb3V0SWR4XT0wO3JldHVybiBvdXRJZHgtc3RhcnRJZHh9ZnVuY3Rpb24gc3RyaW5nVG9VVEY4KHN0cixvdXRQdHIsbWF4Qnl0ZXNUb1dyaXRlKXtyZXR1cm4gc3RyaW5nVG9VVEY4QXJyYXkoc3RyLEhFQVBVOCxvdXRQdHIsbWF4Qnl0ZXNUb1dyaXRlKX1mdW5jdGlvbiBsZW5ndGhCeXRlc1VURjgoc3RyKXt2YXIgbGVuPTA7Zm9yKHZhciBpPTA7aTxzdHIubGVuZ3RoOysraSl7dmFyIGM9c3RyLmNoYXJDb2RlQXQoaSk7aWYoYzw9MTI3KXtsZW4rK31lbHNlIGlmKGM8PTIwNDcpe2xlbis9Mn1lbHNlIGlmKGM+PTU1Mjk2JiZjPD01NzM0Myl7bGVuKz00OysraX1lbHNle2xlbis9M319cmV0dXJuIGxlbn1mdW5jdGlvbiBfX2VtYmluZF9yZWdpc3Rlcl9zdGRfc3RyaW5nKHJhd1R5cGUsbmFtZSl7bmFtZT1yZWFkTGF0aW4xU3RyaW5nKG5hbWUpO3ZhciBzdGRTdHJpbmdJc1VURjg9bmFtZT09PVwic3RkOjpzdHJpbmdcIjtyZWdpc3RlclR5cGUocmF3VHlwZSx7bmFtZTpuYW1lLFwiZnJvbVdpcmVUeXBlXCI6ZnVuY3Rpb24odmFsdWUpe3ZhciBsZW5ndGg9SEVBUFUzMlt2YWx1ZT4+Ml07dmFyIHBheWxvYWQ9dmFsdWUrNDt2YXIgc3RyO2lmKHN0ZFN0cmluZ0lzVVRGOCl7dmFyIGRlY29kZVN0YXJ0UHRyPXBheWxvYWQ7Zm9yKHZhciBpPTA7aTw9bGVuZ3RoOysraSl7dmFyIGN1cnJlbnRCeXRlUHRyPXBheWxvYWQraTtpZihpPT1sZW5ndGh8fEhFQVBVOFtjdXJyZW50Qnl0ZVB0cl09PTApe3ZhciBtYXhSZWFkPWN1cnJlbnRCeXRlUHRyLWRlY29kZVN0YXJ0UHRyO3ZhciBzdHJpbmdTZWdtZW50PVVURjhUb1N0cmluZyhkZWNvZGVTdGFydFB0cixtYXhSZWFkKTtpZihzdHI9PT11bmRlZmluZWQpe3N0cj1zdHJpbmdTZWdtZW50fWVsc2V7c3RyKz1TdHJpbmcuZnJvbUNoYXJDb2RlKDApO3N0cis9c3RyaW5nU2VnbWVudH1kZWNvZGVTdGFydFB0cj1jdXJyZW50Qnl0ZVB0cisxfX19ZWxzZXt2YXIgYT1uZXcgQXJyYXkobGVuZ3RoKTtmb3IodmFyIGk9MDtpPGxlbmd0aDsrK2kpe2FbaV09U3RyaW5nLmZyb21DaGFyQ29kZShIRUFQVThbcGF5bG9hZCtpXSl9c3RyPWEuam9pbihcIlwiKX1fZnJlZSh2YWx1ZSk7cmV0dXJuIHN0cn0sXCJ0b1dpcmVUeXBlXCI6ZnVuY3Rpb24oZGVzdHJ1Y3RvcnMsdmFsdWUpe2lmKHZhbHVlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpe3ZhbHVlPW5ldyBVaW50OEFycmF5KHZhbHVlKX12YXIgbGVuZ3RoO3ZhciB2YWx1ZUlzT2ZUeXBlU3RyaW5nPXR5cGVvZiB2YWx1ZT09XCJzdHJpbmdcIjtpZighKHZhbHVlSXNPZlR5cGVTdHJpbmd8fHZhbHVlIGluc3RhbmNlb2YgVWludDhBcnJheXx8dmFsdWUgaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheXx8dmFsdWUgaW5zdGFuY2VvZiBJbnQ4QXJyYXkpKXt0aHJvd0JpbmRpbmdFcnJvcihcIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gc3RkOjpzdHJpbmdcIil9aWYoc3RkU3RyaW5nSXNVVEY4JiZ2YWx1ZUlzT2ZUeXBlU3RyaW5nKXtsZW5ndGg9bGVuZ3RoQnl0ZXNVVEY4KHZhbHVlKX1lbHNle2xlbmd0aD12YWx1ZS5sZW5ndGh9dmFyIGJhc2U9X21hbGxvYyg0K2xlbmd0aCsxKTt2YXIgcHRyPWJhc2UrNDtIRUFQVTMyW2Jhc2U+PjJdPWxlbmd0aDtpZihzdGRTdHJpbmdJc1VURjgmJnZhbHVlSXNPZlR5cGVTdHJpbmcpe3N0cmluZ1RvVVRGOCh2YWx1ZSxwdHIsbGVuZ3RoKzEpfWVsc2V7aWYodmFsdWVJc09mVHlwZVN0cmluZyl7Zm9yKHZhciBpPTA7aTxsZW5ndGg7KytpKXt2YXIgY2hhckNvZGU9dmFsdWUuY2hhckNvZGVBdChpKTtpZihjaGFyQ29kZT4yNTUpe19mcmVlKHB0cik7dGhyb3dCaW5kaW5nRXJyb3IoXCJTdHJpbmcgaGFzIFVURi0xNiBjb2RlIHVuaXRzIHRoYXQgZG8gbm90IGZpdCBpbiA4IGJpdHNcIil9SEVBUFU4W3B0citpXT1jaGFyQ29kZX19ZWxzZXtmb3IodmFyIGk9MDtpPGxlbmd0aDsrK2kpe0hFQVBVOFtwdHIraV09dmFsdWVbaV19fX1pZihkZXN0cnVjdG9ycyE9PW51bGwpe2Rlc3RydWN0b3JzLnB1c2goX2ZyZWUsYmFzZSl9cmV0dXJuIGJhc2V9LFwiYXJnUGFja0FkdmFuY2VcIjo4LFwicmVhZFZhbHVlRnJvbVBvaW50ZXJcIjpzaW1wbGVSZWFkVmFsdWVGcm9tUG9pbnRlcixkZXN0cnVjdG9yRnVuY3Rpb246ZnVuY3Rpb24ocHRyKXtfZnJlZShwdHIpfX0pfXZhciBVVEYxNkRlY29kZXI9dHlwZW9mIFRleHREZWNvZGVyIT1cInVuZGVmaW5lZFwiP25ldyBUZXh0RGVjb2RlcihcInV0Zi0xNmxlXCIpOnVuZGVmaW5lZDtmdW5jdGlvbiBVVEYxNlRvU3RyaW5nKHB0cixtYXhCeXRlc1RvUmVhZCl7dmFyIGVuZFB0cj1wdHI7dmFyIGlkeD1lbmRQdHI+PjE7dmFyIG1heElkeD1pZHgrbWF4Qnl0ZXNUb1JlYWQvMjt3aGlsZSghKGlkeD49bWF4SWR4KSYmSEVBUFUxNltpZHhdKSsraWR4O2VuZFB0cj1pZHg8PDE7aWYoZW5kUHRyLXB0cj4zMiYmVVRGMTZEZWNvZGVyKXJldHVybiBVVEYxNkRlY29kZXIuZGVjb2RlKEhFQVBVOC5zdWJhcnJheShwdHIsZW5kUHRyKSk7dmFyIHN0cj1cIlwiO2Zvcih2YXIgaT0wOyEoaT49bWF4Qnl0ZXNUb1JlYWQvMik7KytpKXt2YXIgY29kZVVuaXQ9SEVBUDE2W3B0citpKjI+PjFdO2lmKGNvZGVVbml0PT0wKWJyZWFrO3N0cis9U3RyaW5nLmZyb21DaGFyQ29kZShjb2RlVW5pdCl9cmV0dXJuIHN0cn1mdW5jdGlvbiBzdHJpbmdUb1VURjE2KHN0cixvdXRQdHIsbWF4Qnl0ZXNUb1dyaXRlKXtpZihtYXhCeXRlc1RvV3JpdGU9PT11bmRlZmluZWQpe21heEJ5dGVzVG9Xcml0ZT0yMTQ3NDgzNjQ3fWlmKG1heEJ5dGVzVG9Xcml0ZTwyKXJldHVybiAwO21heEJ5dGVzVG9Xcml0ZS09Mjt2YXIgc3RhcnRQdHI9b3V0UHRyO3ZhciBudW1DaGFyc1RvV3JpdGU9bWF4Qnl0ZXNUb1dyaXRlPHN0ci5sZW5ndGgqMj9tYXhCeXRlc1RvV3JpdGUvMjpzdHIubGVuZ3RoO2Zvcih2YXIgaT0wO2k8bnVtQ2hhcnNUb1dyaXRlOysraSl7dmFyIGNvZGVVbml0PXN0ci5jaGFyQ29kZUF0KGkpO0hFQVAxNltvdXRQdHI+PjFdPWNvZGVVbml0O291dFB0cis9Mn1IRUFQMTZbb3V0UHRyPj4xXT0wO3JldHVybiBvdXRQdHItc3RhcnRQdHJ9ZnVuY3Rpb24gbGVuZ3RoQnl0ZXNVVEYxNihzdHIpe3JldHVybiBzdHIubGVuZ3RoKjJ9ZnVuY3Rpb24gVVRGMzJUb1N0cmluZyhwdHIsbWF4Qnl0ZXNUb1JlYWQpe3ZhciBpPTA7dmFyIHN0cj1cIlwiO3doaWxlKCEoaT49bWF4Qnl0ZXNUb1JlYWQvNCkpe3ZhciB1dGYzMj1IRUFQMzJbcHRyK2kqND4+Ml07aWYodXRmMzI9PTApYnJlYWs7KytpO2lmKHV0ZjMyPj02NTUzNil7dmFyIGNoPXV0ZjMyLTY1NTM2O3N0cis9U3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NnxjaD4+MTAsNTYzMjB8Y2gmMTAyMyl9ZWxzZXtzdHIrPVN0cmluZy5mcm9tQ2hhckNvZGUodXRmMzIpfX1yZXR1cm4gc3RyfWZ1bmN0aW9uIHN0cmluZ1RvVVRGMzIoc3RyLG91dFB0cixtYXhCeXRlc1RvV3JpdGUpe2lmKG1heEJ5dGVzVG9Xcml0ZT09PXVuZGVmaW5lZCl7bWF4Qnl0ZXNUb1dyaXRlPTIxNDc0ODM2NDd9aWYobWF4Qnl0ZXNUb1dyaXRlPDQpcmV0dXJuIDA7dmFyIHN0YXJ0UHRyPW91dFB0cjt2YXIgZW5kUHRyPXN0YXJ0UHRyK21heEJ5dGVzVG9Xcml0ZS00O2Zvcih2YXIgaT0wO2k8c3RyLmxlbmd0aDsrK2kpe3ZhciBjb2RlVW5pdD1zdHIuY2hhckNvZGVBdChpKTtpZihjb2RlVW5pdD49NTUyOTYmJmNvZGVVbml0PD01NzM0Myl7dmFyIHRyYWlsU3Vycm9nYXRlPXN0ci5jaGFyQ29kZUF0KCsraSk7Y29kZVVuaXQ9NjU1MzYrKChjb2RlVW5pdCYxMDIzKTw8MTApfHRyYWlsU3Vycm9nYXRlJjEwMjN9SEVBUDMyW291dFB0cj4+Ml09Y29kZVVuaXQ7b3V0UHRyKz00O2lmKG91dFB0cis0PmVuZFB0cilicmVha31IRUFQMzJbb3V0UHRyPj4yXT0wO3JldHVybiBvdXRQdHItc3RhcnRQdHJ9ZnVuY3Rpb24gbGVuZ3RoQnl0ZXNVVEYzMihzdHIpe3ZhciBsZW49MDtmb3IodmFyIGk9MDtpPHN0ci5sZW5ndGg7KytpKXt2YXIgY29kZVVuaXQ9c3RyLmNoYXJDb2RlQXQoaSk7aWYoY29kZVVuaXQ+PTU1Mjk2JiZjb2RlVW5pdDw9NTczNDMpKytpO2xlbis9NH1yZXR1cm4gbGVufWZ1bmN0aW9uIF9fZW1iaW5kX3JlZ2lzdGVyX3N0ZF93c3RyaW5nKHJhd1R5cGUsY2hhclNpemUsbmFtZSl7bmFtZT1yZWFkTGF0aW4xU3RyaW5nKG5hbWUpO3ZhciBkZWNvZGVTdHJpbmcsZW5jb2RlU3RyaW5nLGdldEhlYXAsbGVuZ3RoQnl0ZXNVVEYsc2hpZnQ7aWYoY2hhclNpemU9PT0yKXtkZWNvZGVTdHJpbmc9VVRGMTZUb1N0cmluZztlbmNvZGVTdHJpbmc9c3RyaW5nVG9VVEYxNjtsZW5ndGhCeXRlc1VURj1sZW5ndGhCeXRlc1VURjE2O2dldEhlYXA9KCk9PkhFQVBVMTY7c2hpZnQ9MX1lbHNlIGlmKGNoYXJTaXplPT09NCl7ZGVjb2RlU3RyaW5nPVVURjMyVG9TdHJpbmc7ZW5jb2RlU3RyaW5nPXN0cmluZ1RvVVRGMzI7bGVuZ3RoQnl0ZXNVVEY9bGVuZ3RoQnl0ZXNVVEYzMjtnZXRIZWFwPSgpPT5IRUFQVTMyO3NoaWZ0PTJ9cmVnaXN0ZXJUeXBlKHJhd1R5cGUse25hbWU6bmFtZSxcImZyb21XaXJlVHlwZVwiOmZ1bmN0aW9uKHZhbHVlKXt2YXIgbGVuZ3RoPUhFQVBVMzJbdmFsdWU+PjJdO3ZhciBIRUFQPWdldEhlYXAoKTt2YXIgc3RyO3ZhciBkZWNvZGVTdGFydFB0cj12YWx1ZSs0O2Zvcih2YXIgaT0wO2k8PWxlbmd0aDsrK2kpe3ZhciBjdXJyZW50Qnl0ZVB0cj12YWx1ZSs0K2kqY2hhclNpemU7aWYoaT09bGVuZ3RofHxIRUFQW2N1cnJlbnRCeXRlUHRyPj5zaGlmdF09PTApe3ZhciBtYXhSZWFkQnl0ZXM9Y3VycmVudEJ5dGVQdHItZGVjb2RlU3RhcnRQdHI7dmFyIHN0cmluZ1NlZ21lbnQ9ZGVjb2RlU3RyaW5nKGRlY29kZVN0YXJ0UHRyLG1heFJlYWRCeXRlcyk7aWYoc3RyPT09dW5kZWZpbmVkKXtzdHI9c3RyaW5nU2VnbWVudH1lbHNle3N0cis9U3RyaW5nLmZyb21DaGFyQ29kZSgwKTtzdHIrPXN0cmluZ1NlZ21lbnR9ZGVjb2RlU3RhcnRQdHI9Y3VycmVudEJ5dGVQdHIrY2hhclNpemV9fV9mcmVlKHZhbHVlKTtyZXR1cm4gc3RyfSxcInRvV2lyZVR5cGVcIjpmdW5jdGlvbihkZXN0cnVjdG9ycyx2YWx1ZSl7aWYoISh0eXBlb2YgdmFsdWU9PVwic3RyaW5nXCIpKXt0aHJvd0JpbmRpbmdFcnJvcihgQ2Fubm90IHBhc3Mgbm9uLXN0cmluZyB0byBDKysgc3RyaW5nIHR5cGUgJHtuYW1lfWApfXZhciBsZW5ndGg9bGVuZ3RoQnl0ZXNVVEYodmFsdWUpO3ZhciBwdHI9X21hbGxvYyg0K2xlbmd0aCtjaGFyU2l6ZSk7SEVBUFUzMltwdHI+PjJdPWxlbmd0aD4+c2hpZnQ7ZW5jb2RlU3RyaW5nKHZhbHVlLHB0cis0LGxlbmd0aCtjaGFyU2l6ZSk7aWYoZGVzdHJ1Y3RvcnMhPT1udWxsKXtkZXN0cnVjdG9ycy5wdXNoKF9mcmVlLHB0cil9cmV0dXJuIHB0cn0sXCJhcmdQYWNrQWR2YW5jZVwiOjgsXCJyZWFkVmFsdWVGcm9tUG9pbnRlclwiOnNpbXBsZVJlYWRWYWx1ZUZyb21Qb2ludGVyLGRlc3RydWN0b3JGdW5jdGlvbjpmdW5jdGlvbihwdHIpe19mcmVlKHB0cil9fSl9ZnVuY3Rpb24gX19lbWJpbmRfcmVnaXN0ZXJfdm9pZChyYXdUeXBlLG5hbWUpe25hbWU9cmVhZExhdGluMVN0cmluZyhuYW1lKTtyZWdpc3RlclR5cGUocmF3VHlwZSx7aXNWb2lkOnRydWUsbmFtZTpuYW1lLFwiYXJnUGFja0FkdmFuY2VcIjowLFwiZnJvbVdpcmVUeXBlXCI6ZnVuY3Rpb24oKXtyZXR1cm4gdW5kZWZpbmVkfSxcInRvV2lyZVR5cGVcIjpmdW5jdGlvbihkZXN0cnVjdG9ycyxvKXtyZXR1cm4gdW5kZWZpbmVkfX0pfWZ1bmN0aW9uIF9fZW12YWxfYXMoaGFuZGxlLHJldHVyblR5cGUsZGVzdHJ1Y3RvcnNSZWYpe2hhbmRsZT1FbXZhbC50b1ZhbHVlKGhhbmRsZSk7cmV0dXJuVHlwZT1yZXF1aXJlUmVnaXN0ZXJlZFR5cGUocmV0dXJuVHlwZSxcImVtdmFsOjphc1wiKTt2YXIgZGVzdHJ1Y3RvcnM9W107dmFyIHJkPUVtdmFsLnRvSGFuZGxlKGRlc3RydWN0b3JzKTtIRUFQVTMyW2Rlc3RydWN0b3JzUmVmPj4yXT1yZDtyZXR1cm4gcmV0dXJuVHlwZVtcInRvV2lyZVR5cGVcIl0oZGVzdHJ1Y3RvcnMsaGFuZGxlKX1mdW5jdGlvbiBfX2VtdmFsX2luY3JlZihoYW5kbGUpe2lmKGhhbmRsZT40KXtlbXZhbF9oYW5kbGVzLmdldChoYW5kbGUpLnJlZmNvdW50Kz0xfX1mdW5jdGlvbiBfX2VtdmFsX3J1bl9kZXN0cnVjdG9ycyhoYW5kbGUpe3ZhciBkZXN0cnVjdG9ycz1FbXZhbC50b1ZhbHVlKGhhbmRsZSk7cnVuRGVzdHJ1Y3RvcnMoZGVzdHJ1Y3RvcnMpO19fZW12YWxfZGVjcmVmKGhhbmRsZSl9ZnVuY3Rpb24gX19lbXZhbF90YWtlX3ZhbHVlKHR5cGUsYXJnKXt0eXBlPXJlcXVpcmVSZWdpc3RlcmVkVHlwZSh0eXBlLFwiX2VtdmFsX3Rha2VfdmFsdWVcIik7dmFyIHY9dHlwZVtcInJlYWRWYWx1ZUZyb21Qb2ludGVyXCJdKGFyZyk7cmV0dXJuIEVtdmFsLnRvSGFuZGxlKHYpfWZ1bmN0aW9uIF9hYm9ydCgpe2Fib3J0KFwiXCIpfWZ1bmN0aW9uIF9lbXNjcmlwdGVuX21lbWNweV9iaWcoZGVzdCxzcmMsbnVtKXtIRUFQVTguY29weVdpdGhpbihkZXN0LHNyYyxzcmMrbnVtKX1mdW5jdGlvbiBnZXRIZWFwTWF4KCl7cmV0dXJuIDIxNDc0ODM2NDh9ZnVuY3Rpb24gZW1zY3JpcHRlbl9yZWFsbG9jX2J1ZmZlcihzaXplKXt2YXIgYj13YXNtTWVtb3J5LmJ1ZmZlcjt2YXIgcGFnZXM9c2l6ZS1iLmJ5dGVMZW5ndGgrNjU1MzU+Pj4xNjt0cnl7d2FzbU1lbW9yeS5ncm93KHBhZ2VzKTt1cGRhdGVNZW1vcnlWaWV3cygpO3JldHVybiAxfWNhdGNoKGUpe319ZnVuY3Rpb24gX2Vtc2NyaXB0ZW5fcmVzaXplX2hlYXAocmVxdWVzdGVkU2l6ZSl7dmFyIG9sZFNpemU9SEVBUFU4Lmxlbmd0aDtyZXF1ZXN0ZWRTaXplPXJlcXVlc3RlZFNpemU+Pj4wO3ZhciBtYXhIZWFwU2l6ZT1nZXRIZWFwTWF4KCk7aWYocmVxdWVzdGVkU2l6ZT5tYXhIZWFwU2l6ZSl7cmV0dXJuIGZhbHNlfXZhciBhbGlnblVwPSh4LG11bHRpcGxlKT0+eCsobXVsdGlwbGUteCVtdWx0aXBsZSklbXVsdGlwbGU7Zm9yKHZhciBjdXREb3duPTE7Y3V0RG93bjw9NDtjdXREb3duKj0yKXt2YXIgb3Zlckdyb3duSGVhcFNpemU9b2xkU2l6ZSooMSsuMi9jdXREb3duKTtvdmVyR3Jvd25IZWFwU2l6ZT1NYXRoLm1pbihvdmVyR3Jvd25IZWFwU2l6ZSxyZXF1ZXN0ZWRTaXplKzEwMDY2MzI5Nik7dmFyIG5ld1NpemU9TWF0aC5taW4obWF4SGVhcFNpemUsYWxpZ25VcChNYXRoLm1heChyZXF1ZXN0ZWRTaXplLG92ZXJHcm93bkhlYXBTaXplKSw2NTUzNikpO3ZhciByZXBsYWNlbWVudD1lbXNjcmlwdGVuX3JlYWxsb2NfYnVmZmVyKG5ld1NpemUpO2lmKHJlcGxhY2VtZW50KXtyZXR1cm4gdHJ1ZX19cmV0dXJuIGZhbHNlfWZ1bmN0aW9uIF9mZF9jbG9zZShmZCl7cmV0dXJuIDUyfWZ1bmN0aW9uIF9mZF9yZWFkKGZkLGlvdixpb3ZjbnQscG51bSl7cmV0dXJuIDUyfWZ1bmN0aW9uIF9mZF9zZWVrKGZkLG9mZnNldF9sb3csb2Zmc2V0X2hpZ2gsd2hlbmNlLG5ld09mZnNldCl7cmV0dXJuIDcwfXZhciBwcmludENoYXJCdWZmZXJzPVtudWxsLFtdLFtdXTtmdW5jdGlvbiBwcmludENoYXIoc3RyZWFtLGN1cnIpe3ZhciBidWZmZXI9cHJpbnRDaGFyQnVmZmVyc1tzdHJlYW1dO2lmKGN1cnI9PT0wfHxjdXJyPT09MTApeyhzdHJlYW09PT0xP291dDplcnIpKFVURjhBcnJheVRvU3RyaW5nKGJ1ZmZlciwwKSk7YnVmZmVyLmxlbmd0aD0wfWVsc2V7YnVmZmVyLnB1c2goY3Vycil9fWZ1bmN0aW9uIF9mZF93cml0ZShmZCxpb3YsaW92Y250LHBudW0pe3ZhciBudW09MDtmb3IodmFyIGk9MDtpPGlvdmNudDtpKyspe3ZhciBwdHI9SEVBUFUzMltpb3Y+PjJdO3ZhciBsZW49SEVBUFUzMltpb3YrND4+Ml07aW92Kz04O2Zvcih2YXIgaj0wO2o8bGVuO2orKyl7cHJpbnRDaGFyKGZkLEhFQVBVOFtwdHIral0pfW51bSs9bGVufUhFQVBVMzJbcG51bT4+Ml09bnVtO3JldHVybiAwfWZ1bmN0aW9uIF9zcGluZUxpc3RlbmVyQ2FsbEJhY2tGcm9tSlMoKXt2YXIgd2FzbVV0aWw9TW9kdWxlW1wiU3BpbmVXYXNtVXRpbFwiXTt2YXIgbGlzdGVuZXJJRD13YXNtVXRpbC5nZXRDdXJyZW50TGlzdGVuZXJJRCgpO3ZhciB0cmFja0VudHJ5PXdhc21VdGlsLmdldEN1cnJlbnRUcmFja0VudHJ5KCk7dmFyIGV2ZW50PXdhc21VdGlsLmdldEN1cnJlbnRFdmVudCgpO3ZhciBldmVudFR5cGU9d2FzbVV0aWwuZ2V0Q3VycmVudEV2ZW50VHlwZSgpO2dsb2JhbFRoaXMuVHJhY2tFbnRyeUxpc3RlbmVycy5lbWl0TGlzdGVuZXIobGlzdGVuZXJJRCx0cmFja0VudHJ5LGV2ZW50LGV2ZW50VHlwZS52YWx1ZSl9ZnVuY3Rpb24gX3NwaW5lVHJhY2tMaXN0ZW5lckNhbGxiYWNrKCl7dmFyIHdhc21VdGlsPU1vZHVsZVtcIlNwaW5lV2FzbVV0aWxcIl07dmFyIGxpc3RlbmVySUQ9d2FzbVV0aWwuZ2V0Q3VycmVudExpc3RlbmVySUQoKTt2YXIgZXZlbnRUeXBlPXdhc21VdGlsLmdldEN1cnJlbnRFdmVudFR5cGUoKTt2YXIgdHJhY2tFbnRyeT13YXNtVXRpbC5nZXRDdXJyZW50VHJhY2tFbnRyeSgpO3ZhciBldmVudD13YXNtVXRpbC5nZXRDdXJyZW50RXZlbnQoKTtnbG9iYWxUaGlzLlRyYWNrRW50cnlMaXN0ZW5lcnMuZW1pdFRyYWNrRW50cnlMaXN0ZW5lcihsaXN0ZW5lcklELHRyYWNrRW50cnksZXZlbnQsZXZlbnRUeXBlLnZhbHVlKX1lbWJpbmRfaW5pdF9jaGFyQ29kZXMoKTtCaW5kaW5nRXJyb3I9TW9kdWxlW1wiQmluZGluZ0Vycm9yXCJdPWV4dGVuZEVycm9yKEVycm9yLFwiQmluZGluZ0Vycm9yXCIpO0ludGVybmFsRXJyb3I9TW9kdWxlW1wiSW50ZXJuYWxFcnJvclwiXT1leHRlbmRFcnJvcihFcnJvcixcIkludGVybmFsRXJyb3JcIik7aW5pdF9DbGFzc0hhbmRsZSgpO2luaXRfZW1iaW5kKCk7aW5pdF9SZWdpc3RlcmVkUG9pbnRlcigpO1VuYm91bmRUeXBlRXJyb3I9TW9kdWxlW1wiVW5ib3VuZFR5cGVFcnJvclwiXT1leHRlbmRFcnJvcihFcnJvcixcIlVuYm91bmRUeXBlRXJyb3JcIik7aW5pdF9lbXZhbCgpO3ZhciB3YXNtSW1wb3J0cz17XCJvXCI6X19fc3lzY2FsbF9mY250bDY0LFwieFwiOl9fX3N5c2NhbGxfaW9jdGwsXCJ5XCI6X19fc3lzY2FsbF9vcGVuYXQsXCJ0XCI6X19lbWJpbmRfcmVnaXN0ZXJfYmlnaW50LFwiQ1wiOl9fZW1iaW5kX3JlZ2lzdGVyX2Jvb2wsXCJiXCI6X19lbWJpbmRfcmVnaXN0ZXJfY2xhc3MsXCJmXCI6X19lbWJpbmRfcmVnaXN0ZXJfY2xhc3NfY2xhc3NfZnVuY3Rpb24sXCJqXCI6X19lbWJpbmRfcmVnaXN0ZXJfY2xhc3NfY2xhc3NfcHJvcGVydHksXCJjXCI6X19lbWJpbmRfcmVnaXN0ZXJfY2xhc3NfY29uc3RydWN0b3IsXCJhXCI6X19lbWJpbmRfcmVnaXN0ZXJfY2xhc3NfZnVuY3Rpb24sXCJlXCI6X19lbWJpbmRfcmVnaXN0ZXJfY2xhc3NfcHJvcGVydHksXCJBXCI6X19lbWJpbmRfcmVnaXN0ZXJfZW12YWwsXCJrXCI6X19lbWJpbmRfcmVnaXN0ZXJfZW51bSxcImRcIjpfX2VtYmluZF9yZWdpc3Rlcl9lbnVtX3ZhbHVlLFwicFwiOl9fZW1iaW5kX3JlZ2lzdGVyX2Zsb2F0LFwibFwiOl9fZW1iaW5kX3JlZ2lzdGVyX2ludGVnZXIsXCJpXCI6X19lbWJpbmRfcmVnaXN0ZXJfbWVtb3J5X3ZpZXcsXCJxXCI6X19lbWJpbmRfcmVnaXN0ZXJfc3RkX3N0cmluZyxcIm1cIjpfX2VtYmluZF9yZWdpc3Rlcl9zdGRfd3N0cmluZyxcIkRcIjpfX2VtYmluZF9yZWdpc3Rlcl92b2lkLFwiRlwiOl9fZW12YWxfYXMsXCJyXCI6X19lbXZhbF9kZWNyZWYsXCJHXCI6X19lbXZhbF9pbmNyZWYsXCJFXCI6X19lbXZhbF9ydW5fZGVzdHJ1Y3RvcnMsXCJoXCI6X19lbXZhbF90YWtlX3ZhbHVlLFwiZ1wiOl9hYm9ydCxcInpcIjpfZW1zY3JpcHRlbl9tZW1jcHlfYmlnLFwidVwiOl9lbXNjcmlwdGVuX3Jlc2l6ZV9oZWFwLFwiblwiOl9mZF9jbG9zZSxcIndcIjpfZmRfcmVhZCxcInNcIjpfZmRfc2VlayxcInZcIjpfZmRfd3JpdGUsXCJIXCI6X3NwaW5lTGlzdGVuZXJDYWxsQmFja0Zyb21KUyxcIkJcIjpfc3BpbmVUcmFja0xpc3RlbmVyQ2FsbGJhY2t9O3ZhciBhc209Y3JlYXRlV2FzbSgpO3ZhciBfX193YXNtX2NhbGxfY3RvcnM9ZnVuY3Rpb24oKXtyZXR1cm4oX19fd2FzbV9jYWxsX2N0b3JzPU1vZHVsZVtcImFzbVwiXVtcIkpcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9tYWxsb2M9ZnVuY3Rpb24oKXtyZXR1cm4oX21hbGxvYz1Nb2R1bGVbXCJhc21cIl1bXCJMXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfZnJlZT1mdW5jdGlvbigpe3JldHVybihfZnJlZT1Nb2R1bGVbXCJhc21cIl1bXCJNXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfX19nZXRUeXBlTmFtZT1mdW5jdGlvbigpe3JldHVybihfX19nZXRUeXBlTmFtZT1Nb2R1bGVbXCJhc21cIl1bXCJOXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfX2VtYmluZF9pbml0aWFsaXplX2JpbmRpbmdzPU1vZHVsZVtcIl9fZW1iaW5kX2luaXRpYWxpemVfYmluZGluZ3NcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX19lbWJpbmRfaW5pdGlhbGl6ZV9iaW5kaW5ncz1Nb2R1bGVbXCJfX2VtYmluZF9pbml0aWFsaXplX2JpbmRpbmdzXCJdPU1vZHVsZVtcImFzbVwiXVtcIk9cIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9fX2Vycm5vX2xvY2F0aW9uPWZ1bmN0aW9uKCl7cmV0dXJuKF9fX2Vycm5vX2xvY2F0aW9uPU1vZHVsZVtcImFzbVwiXVtcIl9fZXJybm9fbG9jYXRpb25cIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIGR5bkNhbGxfamlqaT1Nb2R1bGVbXCJkeW5DYWxsX2ppamlcIl09ZnVuY3Rpb24oKXtyZXR1cm4oZHluQ2FsbF9qaWppPU1vZHVsZVtcImR5bkNhbGxfamlqaVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJQXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBjYWxsZWRSdW47ZGVwZW5kZW5jaWVzRnVsZmlsbGVkPWZ1bmN0aW9uIHJ1bkNhbGxlcigpe2lmKCFjYWxsZWRSdW4pcnVuKCk7aWYoIWNhbGxlZFJ1bilkZXBlbmRlbmNpZXNGdWxmaWxsZWQ9cnVuQ2FsbGVyfTtmdW5jdGlvbiBydW4oKXtpZihydW5EZXBlbmRlbmNpZXM+MCl7cmV0dXJufXByZVJ1bigpO2lmKHJ1bkRlcGVuZGVuY2llcz4wKXtyZXR1cm59ZnVuY3Rpb24gZG9SdW4oKXtpZihjYWxsZWRSdW4pcmV0dXJuO2NhbGxlZFJ1bj10cnVlO01vZHVsZVtcImNhbGxlZFJ1blwiXT10cnVlO2lmKEFCT1JUKXJldHVybjtpbml0UnVudGltZSgpO3JlYWR5UHJvbWlzZVJlc29sdmUoTW9kdWxlKTtpZihNb2R1bGVbXCJvblJ1bnRpbWVJbml0aWFsaXplZFwiXSlNb2R1bGVbXCJvblJ1bnRpbWVJbml0aWFsaXplZFwiXSgpO3Bvc3RSdW4oKX1pZihNb2R1bGVbXCJzZXRTdGF0dXNcIl0pe01vZHVsZVtcInNldFN0YXR1c1wiXShcIlJ1bm5pbmcuLi5cIik7c2V0VGltZW91dChmdW5jdGlvbigpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXtNb2R1bGVbXCJzZXRTdGF0dXNcIl0oXCJcIil9LDEpO2RvUnVuKCl9LDEpfWVsc2V7ZG9SdW4oKX19aWYoTW9kdWxlW1wicHJlSW5pdFwiXSl7aWYodHlwZW9mIE1vZHVsZVtcInByZUluaXRcIl09PVwiZnVuY3Rpb25cIilNb2R1bGVbXCJwcmVJbml0XCJdPVtNb2R1bGVbXCJwcmVJbml0XCJdXTt3aGlsZShNb2R1bGVbXCJwcmVJbml0XCJdLmxlbmd0aD4wKXtNb2R1bGVbXCJwcmVJbml0XCJdLnBvcCgpKCl9fXJ1bigpO1xuXG5cbiAgcmV0dXJuIHNwaW5lV2FzbS5yZWFkeVxufVxuXG4pO1xufSkoKTtcbmV4cG9ydCBkZWZhdWx0IHNwaW5lV2FzbTsiXSwibmFtZXMiOlsic3BpbmVXYXNtIiwiX3NjcmlwdERpciIsImRvY3VtZW50IiwiY3VycmVudFNjcmlwdCIsInNyYyIsInVuZGVmaW5lZCIsIk1vZHVsZSIsInJlYWR5UHJvbWlzZVJlc29sdmUiLCJyZWFkeVByb21pc2VSZWplY3QiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm1vZHVsZU92ZXJyaWRlcyIsIk9iamVjdCIsImFzc2lnbiIsIkVOVklST05NRU5UX0lTX1dFQiIsInNjcmlwdERpcmVjdG9yeSIsImxvY2F0ZUZpbGUiLCJwYXRoIiwicmVhZEJpbmFyeSIsImluZGV4T2YiLCJzdWJzdHIiLCJyZXBsYWNlIiwibGFzdEluZGV4T2YiLCJvdXQiLCJjb25zb2xlIiwibG9nIiwiYmluZCIsImVyciIsImVycm9yIiwid2FzbUJpbmFyeSIsIldlYkFzc2VtYmx5IiwiYWJvcnQiLCJ3YXNtTWVtb3J5IiwiQUJPUlQiLCJhc3NlcnQiLCJjb25kaXRpb24iLCJ0ZXh0IiwiSEVBUDgiLCJIRUFQVTgiLCJIRUFQMTYiLCJIRUFQVTE2IiwiSEVBUDMyIiwiSEVBUFUzMiIsIkhFQVBGMzIiLCJIRUFQRjY0IiwidXBkYXRlTWVtb3J5Vmlld3MiLCJiIiwiYnVmZmVyIiwiSW50OEFycmF5IiwiSW50MTZBcnJheSIsIkludDMyQXJyYXkiLCJVaW50OEFycmF5IiwiVWludDE2QXJyYXkiLCJVaW50MzJBcnJheSIsIkZsb2F0MzJBcnJheSIsIkZsb2F0NjRBcnJheSIsIndhc21UYWJsZSIsIl9fQVRQUkVSVU5fXyIsIl9fQVRJTklUX18iLCJfX0FUUE9TVFJVTl9fIiwicHJlUnVuIiwibGVuZ3RoIiwiYWRkT25QcmVSdW4iLCJzaGlmdCIsImNhbGxSdW50aW1lQ2FsbGJhY2tzIiwiaW5pdFJ1bnRpbWUiLCJwb3N0UnVuIiwiYWRkT25Qb3N0UnVuIiwiY2IiLCJ1bnNoaWZ0IiwiYWRkT25Jbml0IiwicnVuRGVwZW5kZW5jaWVzIiwiZGVwZW5kZW5jaWVzRnVsZmlsbGVkIiwiYWRkUnVuRGVwZW5kZW5jeSIsImlkIiwicmVtb3ZlUnVuRGVwZW5kZW5jeSIsImNhbGxiYWNrIiwid2hhdCIsImUiLCJSdW50aW1lRXJyb3IiLCJkYXRhVVJJUHJlZml4IiwiaXNEYXRhVVJJIiwiZmlsZW5hbWUiLCJzdGFydHNXaXRoIiwid2FzbUJpbmFyeUZpbGUiLCJnZXRCaW5hcnkiLCJmaWxlIiwiZ2V0QmluYXJ5UHJvbWlzZSIsImJpbmFyeUZpbGUiLCJmZXRjaCIsImNyZWRlbnRpYWxzIiwidGhlbiIsInJlc3BvbnNlIiwiY2F0Y2giLCJpbnN0YW50aWF0ZUFycmF5QnVmZmVyIiwiaW1wb3J0cyIsInJlY2VpdmVyIiwiYmluYXJ5IiwiaW5zdGFudGlhdGUiLCJpbnN0YW5jZSIsInJlYXNvbiIsImluc3RhbnRpYXRlQXN5bmMiLCJpbnN0YW50aWF0ZVN0cmVhbWluZyIsInJlc3VsdCIsImNyZWF0ZVdhc20iLCJpbmZvIiwid2FzbUltcG9ydHMiLCJyZWNlaXZlSW5zdGFuY2UiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVjZWl2ZUluc3RhbnRpYXRpb25SZXN1bHQiLCJjYWxsYmFja3MiLCJVVEY4RGVjb2RlciIsIlRleHREZWNvZGVyIiwiVVRGOEFycmF5VG9TdHJpbmciLCJoZWFwT3JBcnJheSIsImlkeCIsIm1heEJ5dGVzVG9SZWFkIiwiZW5kSWR4IiwiZW5kUHRyIiwiZGVjb2RlIiwic3ViYXJyYXkiLCJzdHIiLCJ1MCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInUxIiwidTIiLCJjaCIsIlVURjhUb1N0cmluZyIsInB0ciIsIl9fX3N5c2NhbGxfZmNudGw2NCIsImZkIiwiY21kIiwidmFyYXJncyIsIl9fX3N5c2NhbGxfaW9jdGwiLCJvcCIsIl9fX3N5c2NhbGxfb3BlbmF0IiwiZGlyZmQiLCJmbGFncyIsIl9fZW1iaW5kX3JlZ2lzdGVyX2JpZ2ludCIsInByaW1pdGl2ZVR5cGUiLCJuYW1lIiwic2l6ZSIsIm1pblJhbmdlIiwibWF4UmFuZ2UiLCJnZXRTaGlmdEZyb21TaXplIiwiVHlwZUVycm9yIiwiZW1iaW5kX2luaXRfY2hhckNvZGVzIiwiY29kZXMiLCJBcnJheSIsImkiLCJlbWJpbmRfY2hhckNvZGVzIiwicmVhZExhdGluMVN0cmluZyIsInJldCIsImMiLCJhd2FpdGluZ0RlcGVuZGVuY2llcyIsInJlZ2lzdGVyZWRUeXBlcyIsInR5cGVEZXBlbmRlbmNpZXMiLCJjaGFyXzAiLCJjaGFyXzkiLCJtYWtlTGVnYWxGdW5jdGlvbk5hbWUiLCJmIiwiY2hhckNvZGVBdCIsImNyZWF0ZU5hbWVkRnVuY3Rpb24iLCJib2R5IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJleHRlbmRFcnJvciIsImJhc2VFcnJvclR5cGUiLCJlcnJvck5hbWUiLCJlcnJvckNsYXNzIiwibWVzc2FnZSIsInN0YWNrIiwiRXJyb3IiLCJ0b1N0cmluZyIsInByb3RvdHlwZSIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwiQmluZGluZ0Vycm9yIiwidGhyb3dCaW5kaW5nRXJyb3IiLCJJbnRlcm5hbEVycm9yIiwidGhyb3dJbnRlcm5hbEVycm9yIiwid2hlbkRlcGVuZGVudFR5cGVzQXJlUmVzb2x2ZWQiLCJteVR5cGVzIiwiZGVwZW5kZW50VHlwZXMiLCJnZXRUeXBlQ29udmVydGVycyIsImZvckVhY2giLCJ0eXBlIiwib25Db21wbGV0ZSIsInR5cGVDb252ZXJ0ZXJzIiwibXlUeXBlQ29udmVydGVycyIsInJlZ2lzdGVyVHlwZSIsInVucmVnaXN0ZXJlZFR5cGVzIiwicmVnaXN0ZXJlZCIsImR0IiwiaGFzT3duUHJvcGVydHkiLCJwdXNoIiwicmF3VHlwZSIsInJlZ2lzdGVyZWRJbnN0YW5jZSIsIm9wdGlvbnMiLCJpZ25vcmVEdXBsaWNhdGVSZWdpc3RyYXRpb25zIiwiX19lbWJpbmRfcmVnaXN0ZXJfYm9vbCIsInRydWVWYWx1ZSIsImZhbHNlVmFsdWUiLCJ3dCIsImRlc3RydWN0b3JzIiwibyIsInBvaW50ZXIiLCJoZWFwIiwiZGVzdHJ1Y3RvckZ1bmN0aW9uIiwiQ2xhc3NIYW5kbGVfaXNBbGlhc09mIiwib3RoZXIiLCJDbGFzc0hhbmRsZSIsImxlZnRDbGFzcyIsIiQkIiwicHRyVHlwZSIsInJlZ2lzdGVyZWRDbGFzcyIsImxlZnQiLCJyaWdodENsYXNzIiwicmlnaHQiLCJiYXNlQ2xhc3MiLCJ1cGNhc3QiLCJzaGFsbG93Q29weUludGVybmFsUG9pbnRlciIsImNvdW50IiwiZGVsZXRlU2NoZWR1bGVkIiwicHJlc2VydmVQb2ludGVyT25EZWxldGUiLCJzbWFydFB0ciIsInNtYXJ0UHRyVHlwZSIsInRocm93SW5zdGFuY2VBbHJlYWR5RGVsZXRlZCIsIm9iaiIsImdldEluc3RhbmNlVHlwZU5hbWUiLCJoYW5kbGUiLCJmaW5hbGl6YXRpb25SZWdpc3RyeSIsImRldGFjaEZpbmFsaXplciIsInJ1bkRlc3RydWN0b3IiLCJyYXdEZXN0cnVjdG9yIiwicmVsZWFzZUNsYXNzSGFuZGxlIiwidmFsdWUiLCJ0b0RlbGV0ZSIsImRvd25jYXN0UG9pbnRlciIsInB0ckNsYXNzIiwiZGVzaXJlZENsYXNzIiwicnYiLCJkb3duY2FzdCIsInJlZ2lzdGVyZWRQb2ludGVycyIsImdldEluaGVyaXRlZEluc3RhbmNlQ291bnQiLCJrZXlzIiwicmVnaXN0ZXJlZEluc3RhbmNlcyIsImdldExpdmVJbmhlcml0ZWRJbnN0YW5jZXMiLCJrIiwiZGVsZXRpb25RdWV1ZSIsImZsdXNoUGVuZGluZ0RlbGV0ZXMiLCJwb3AiLCJkZWxheUZ1bmN0aW9uIiwic2V0RGVsYXlGdW5jdGlvbiIsImZuIiwiaW5pdF9lbWJpbmQiLCJnZXRCYXNlc3RQb2ludGVyIiwiY2xhc3NfIiwiZ2V0SW5oZXJpdGVkSW5zdGFuY2UiLCJtYWtlQ2xhc3NIYW5kbGUiLCJyZWNvcmQiLCJoYXNTbWFydFB0clR5cGUiLCJoYXNTbWFydFB0ciIsImF0dGFjaEZpbmFsaXplciIsIlJlZ2lzdGVyZWRQb2ludGVyX2Zyb21XaXJlVHlwZSIsInJhd1BvaW50ZXIiLCJnZXRQb2ludGVlIiwiZGVzdHJ1Y3RvciIsIm1ha2VEZWZhdWx0SGFuZGxlIiwiaXNTbWFydFBvaW50ZXIiLCJpbnN0YW5jZVByb3RvdHlwZSIsInBvaW50ZWVUeXBlIiwiYWN0dWFsVHlwZSIsImdldEFjdHVhbFR5cGUiLCJyZWdpc3RlcmVkUG9pbnRlclJlY29yZCIsImNhbGwiLCJ0b1R5cGUiLCJpc0NvbnN0IiwiY29uc3RQb2ludGVyVHlwZSIsInBvaW50ZXJUeXBlIiwiZHAiLCJGaW5hbGl6YXRpb25SZWdpc3RyeSIsInJlZ2lzdGVyIiwidW5yZWdpc3RlciIsIkNsYXNzSGFuZGxlX2Nsb25lIiwiY2xvbmUiLCJnZXRQcm90b3R5cGVPZiIsIkNsYXNzSGFuZGxlX2RlbGV0ZSIsIkNsYXNzSGFuZGxlX2lzRGVsZXRlZCIsIkNsYXNzSGFuZGxlX2RlbGV0ZUxhdGVyIiwiaW5pdF9DbGFzc0hhbmRsZSIsImVuc3VyZU92ZXJsb2FkVGFibGUiLCJwcm90byIsIm1ldGhvZE5hbWUiLCJodW1hbk5hbWUiLCJvdmVybG9hZFRhYmxlIiwicHJldkZ1bmMiLCJhcmdDb3VudCIsImV4cG9zZVB1YmxpY1N5bWJvbCIsIm51bUFyZ3VtZW50cyIsIlJlZ2lzdGVyZWRDbGFzcyIsInB1cmVWaXJ0dWFsRnVuY3Rpb25zIiwidXBjYXN0UG9pbnRlciIsImNvbnN0Tm9TbWFydFB0clJhd1BvaW50ZXJUb1dpcmVUeXBlIiwiaXNSZWZlcmVuY2UiLCJlbWJpbmRSZXByIiwiaGFuZGxlQ2xhc3MiLCJnZW5lcmljUG9pbnRlclRvV2lyZVR5cGUiLCJyYXdDb25zdHJ1Y3RvciIsInNoYXJpbmdQb2xpY3kiLCJjbG9uZWRIYW5kbGUiLCJyYXdTaGFyZSIsIkVtdmFsIiwidG9IYW5kbGUiLCJub25Db25zdE5vU21hcnRQdHJSYXdQb2ludGVyVG9XaXJlVHlwZSIsInNpbXBsZVJlYWRWYWx1ZUZyb21Qb2ludGVyIiwiUmVnaXN0ZXJlZFBvaW50ZXJfZ2V0UG9pbnRlZSIsInJhd0dldFBvaW50ZWUiLCJSZWdpc3RlcmVkUG9pbnRlcl9kZXN0cnVjdG9yIiwiUmVnaXN0ZXJlZFBvaW50ZXJfZGVsZXRlT2JqZWN0IiwiaW5pdF9SZWdpc3RlcmVkUG9pbnRlciIsIlJlZ2lzdGVyZWRQb2ludGVyIiwicmVwbGFjZVB1YmxpY1N5bWJvbCIsImR5bkNhbGxMZWdhY3kiLCJzaWciLCJhcmdzIiwiY29uY2F0Iiwid2FzbVRhYmxlTWlycm9yIiwiZ2V0V2FzbVRhYmxlRW50cnkiLCJmdW5jUHRyIiwiZnVuYyIsImdldCIsImR5bkNhbGwiLCJpbmNsdWRlcyIsInJ0biIsImdldER5bkNhbGxlciIsImFyZ0NhY2hlIiwiZW1iaW5kX19yZXF1aXJlRnVuY3Rpb24iLCJzaWduYXR1cmUiLCJyYXdGdW5jdGlvbiIsIm1ha2VEeW5DYWxsZXIiLCJmcCIsIlVuYm91bmRUeXBlRXJyb3IiLCJnZXRUeXBlTmFtZSIsIl9fX2dldFR5cGVOYW1lIiwiX2ZyZWUiLCJ0aHJvd1VuYm91bmRUeXBlRXJyb3IiLCJ0eXBlcyIsInVuYm91bmRUeXBlcyIsInNlZW4iLCJ2aXNpdCIsIm1hcCIsImpvaW4iLCJfX2VtYmluZF9yZWdpc3Rlcl9jbGFzcyIsInJhd1BvaW50ZXJUeXBlIiwicmF3Q29uc3RQb2ludGVyVHlwZSIsImJhc2VDbGFzc1Jhd1R5cGUiLCJnZXRBY3R1YWxUeXBlU2lnbmF0dXJlIiwidXBjYXN0U2lnbmF0dXJlIiwiZG93bmNhc3RTaWduYXR1cmUiLCJkZXN0cnVjdG9yU2lnbmF0dXJlIiwibGVnYWxGdW5jdGlvbk5hbWUiLCJiYXNlIiwiYmFzZVByb3RvdHlwZSIsImNvbnN0cnVjdG9yX2JvZHkiLCJfX2Rlcml2ZWRDbGFzc2VzIiwicmVmZXJlbmNlQ29udmVydGVyIiwicG9pbnRlckNvbnZlcnRlciIsImNvbnN0UG9pbnRlckNvbnZlcnRlciIsInJ1bkRlc3RydWN0b3JzIiwiZGVsIiwiY3JhZnRJbnZva2VyRnVuY3Rpb24iLCJhcmdUeXBlcyIsImNsYXNzVHlwZSIsImNwcEludm9rZXJGdW5jIiwiY3BwVGFyZ2V0RnVuYyIsImlzQXN5bmMiLCJpc0NsYXNzTWV0aG9kRnVuYyIsIm5lZWRzRGVzdHJ1Y3RvclN0YWNrIiwicmV0dXJucyIsImV4cGVjdGVkQXJnQ291bnQiLCJhcmdzV2lyZWQiLCJpbnZva2VyRnVuY0FyZ3MiLCJ0aGlzV2lyZWQiLCJvbkRvbmUiLCJwYXJhbSIsImhlYXAzMlZlY3RvclRvQXJyYXkiLCJmaXJzdEVsZW1lbnQiLCJhcnJheSIsIl9fZW1iaW5kX3JlZ2lzdGVyX2NsYXNzX2NsYXNzX2Z1bmN0aW9uIiwicmF3Q2xhc3NUeXBlIiwicmF3QXJnVHlwZXNBZGRyIiwiaW52b2tlclNpZ25hdHVyZSIsInJhd0ludm9rZXIiLCJyYXdBcmdUeXBlcyIsInVuYm91bmRUeXBlc0hhbmRsZXIiLCJTeW1ib2wiLCJzdWJzdHJpbmciLCJpbnZva2VyQXJnc0FycmF5Iiwic2xpY2UiLCJkZXJpdmVkQ2xhc3MiLCJ2YWxpZGF0ZVRoaXMiLCJ0aGlzXyIsIl9fZW1iaW5kX3JlZ2lzdGVyX2NsYXNzX2NsYXNzX3Byb3BlcnR5IiwiZmllbGROYW1lIiwicmF3RmllbGRUeXBlIiwicmF3RmllbGRQdHIiLCJnZXR0ZXJTaWduYXR1cmUiLCJnZXR0ZXIiLCJzZXR0ZXJTaWduYXR1cmUiLCJzZXR0ZXIiLCJkZXNjIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsInNldCIsInYiLCJkZWZpbmVQcm9wZXJ0eSIsImZpZWxkVHlwZSIsIl9fZW1iaW5kX3JlZ2lzdGVyX2NsYXNzX2NvbnN0cnVjdG9yIiwiaW52b2tlciIsInNwbGljZSIsIl9fZW1iaW5kX3JlZ2lzdGVyX2NsYXNzX2Z1bmN0aW9uIiwiY29udGV4dCIsImlzUHVyZVZpcnR1YWwiLCJtZXRob2QiLCJjbGFzc05hbWUiLCJtZW1iZXJGdW5jdGlvbiIsIl9fZW1iaW5kX3JlZ2lzdGVyX2NsYXNzX3Byb3BlcnR5IiwiZ2V0dGVyUmV0dXJuVHlwZSIsImdldHRlckNvbnRleHQiLCJzZXR0ZXJBcmd1bWVudFR5cGUiLCJzZXR0ZXJDb250ZXh0IiwiSGFuZGxlQWxsb2NhdG9yIiwiYWxsb2NhdGVkIiwiZnJlZWxpc3QiLCJoYXMiLCJhbGxvY2F0ZSIsImZyZWUiLCJlbXZhbF9oYW5kbGVzIiwiX19lbXZhbF9kZWNyZWYiLCJyZXNlcnZlZCIsInJlZmNvdW50IiwiY291bnRfZW12YWxfaGFuZGxlcyIsImluaXRfZW12YWwiLCJ0b1ZhbHVlIiwiX19lbWJpbmRfcmVnaXN0ZXJfZW12YWwiLCJlbnVtUmVhZFZhbHVlRnJvbVBvaW50ZXIiLCJzaWduZWQiLCJfX2VtYmluZF9yZWdpc3Rlcl9lbnVtIiwiaXNTaWduZWQiLCJjdG9yIiwidmFsdWVzIiwicmVxdWlyZVJlZ2lzdGVyZWRUeXBlIiwiaW1wbCIsIl9fZW1iaW5kX3JlZ2lzdGVyX2VudW1fdmFsdWUiLCJyYXdFbnVtVHlwZSIsImVudW1WYWx1ZSIsImVudW1UeXBlIiwiRW51bSIsIlZhbHVlIiwidCIsImZsb2F0UmVhZFZhbHVlRnJvbVBvaW50ZXIiLCJfX2VtYmluZF9yZWdpc3Rlcl9mbG9hdCIsImludGVnZXJSZWFkVmFsdWVGcm9tUG9pbnRlciIsInJlYWRTOEZyb21Qb2ludGVyIiwicmVhZFU4RnJvbVBvaW50ZXIiLCJyZWFkUzE2RnJvbVBvaW50ZXIiLCJyZWFkVTE2RnJvbVBvaW50ZXIiLCJyZWFkUzMyRnJvbVBvaW50ZXIiLCJyZWFkVTMyRnJvbVBvaW50ZXIiLCJfX2VtYmluZF9yZWdpc3Rlcl9pbnRlZ2VyIiwiZnJvbVdpcmVUeXBlIiwiYml0c2hpZnQiLCJpc1Vuc2lnbmVkVHlwZSIsImNoZWNrQXNzZXJ0aW9ucyIsInRvVHlwZU5hbWUiLCJ0b1dpcmVUeXBlIiwiX19lbWJpbmRfcmVnaXN0ZXJfbWVtb3J5X3ZpZXciLCJkYXRhVHlwZUluZGV4IiwidHlwZU1hcHBpbmciLCJUQSIsImRlY29kZU1lbW9yeVZpZXciLCJkYXRhIiwic3RyaW5nVG9VVEY4QXJyYXkiLCJvdXRJZHgiLCJtYXhCeXRlc1RvV3JpdGUiLCJzdGFydElkeCIsInUiLCJzdHJpbmdUb1VURjgiLCJvdXRQdHIiLCJsZW5ndGhCeXRlc1VURjgiLCJsZW4iLCJfX2VtYmluZF9yZWdpc3Rlcl9zdGRfc3RyaW5nIiwic3RkU3RyaW5nSXNVVEY4IiwicGF5bG9hZCIsImRlY29kZVN0YXJ0UHRyIiwiY3VycmVudEJ5dGVQdHIiLCJtYXhSZWFkIiwic3RyaW5nU2VnbWVudCIsImEiLCJBcnJheUJ1ZmZlciIsInZhbHVlSXNPZlR5cGVTdHJpbmciLCJVaW50OENsYW1wZWRBcnJheSIsIl9tYWxsb2MiLCJjaGFyQ29kZSIsIlVURjE2RGVjb2RlciIsIlVURjE2VG9TdHJpbmciLCJtYXhJZHgiLCJjb2RlVW5pdCIsInN0cmluZ1RvVVRGMTYiLCJzdGFydFB0ciIsIm51bUNoYXJzVG9Xcml0ZSIsImxlbmd0aEJ5dGVzVVRGMTYiLCJVVEYzMlRvU3RyaW5nIiwidXRmMzIiLCJzdHJpbmdUb1VURjMyIiwidHJhaWxTdXJyb2dhdGUiLCJsZW5ndGhCeXRlc1VURjMyIiwiX19lbWJpbmRfcmVnaXN0ZXJfc3RkX3dzdHJpbmciLCJjaGFyU2l6ZSIsImRlY29kZVN0cmluZyIsImVuY29kZVN0cmluZyIsImdldEhlYXAiLCJsZW5ndGhCeXRlc1VURiIsIkhFQVAiLCJtYXhSZWFkQnl0ZXMiLCJfX2VtYmluZF9yZWdpc3Rlcl92b2lkIiwiaXNWb2lkIiwiX19lbXZhbF9hcyIsInJldHVyblR5cGUiLCJkZXN0cnVjdG9yc1JlZiIsInJkIiwiX19lbXZhbF9pbmNyZWYiLCJfX2VtdmFsX3J1bl9kZXN0cnVjdG9ycyIsIl9fZW12YWxfdGFrZV92YWx1ZSIsImFyZyIsIl9hYm9ydCIsIl9lbXNjcmlwdGVuX21lbWNweV9iaWciLCJkZXN0IiwibnVtIiwiY29weVdpdGhpbiIsImdldEhlYXBNYXgiLCJlbXNjcmlwdGVuX3JlYWxsb2NfYnVmZmVyIiwicGFnZXMiLCJieXRlTGVuZ3RoIiwiZ3JvdyIsIl9lbXNjcmlwdGVuX3Jlc2l6ZV9oZWFwIiwicmVxdWVzdGVkU2l6ZSIsIm9sZFNpemUiLCJtYXhIZWFwU2l6ZSIsImFsaWduVXAiLCJ4IiwibXVsdGlwbGUiLCJjdXREb3duIiwib3Zlckdyb3duSGVhcFNpemUiLCJNYXRoIiwibWluIiwibmV3U2l6ZSIsIm1heCIsInJlcGxhY2VtZW50IiwiX2ZkX2Nsb3NlIiwiX2ZkX3JlYWQiLCJpb3YiLCJpb3ZjbnQiLCJwbnVtIiwiX2ZkX3NlZWsiLCJvZmZzZXRfbG93Iiwib2Zmc2V0X2hpZ2giLCJ3aGVuY2UiLCJuZXdPZmZzZXQiLCJwcmludENoYXJCdWZmZXJzIiwicHJpbnRDaGFyIiwic3RyZWFtIiwiY3VyciIsIl9mZF93cml0ZSIsImoiLCJfc3BpbmVMaXN0ZW5lckNhbGxCYWNrRnJvbUpTIiwid2FzbVV0aWwiLCJsaXN0ZW5lcklEIiwiZ2V0Q3VycmVudExpc3RlbmVySUQiLCJ0cmFja0VudHJ5IiwiZ2V0Q3VycmVudFRyYWNrRW50cnkiLCJldmVudCIsImdldEN1cnJlbnRFdmVudCIsImV2ZW50VHlwZSIsImdldEN1cnJlbnRFdmVudFR5cGUiLCJnbG9iYWxUaGlzIiwiVHJhY2tFbnRyeUxpc3RlbmVycyIsImVtaXRMaXN0ZW5lciIsIl9zcGluZVRyYWNrTGlzdGVuZXJDYWxsYmFjayIsImVtaXRUcmFja0VudHJ5TGlzdGVuZXIiLCJjYWxsZWRSdW4iLCJydW5DYWxsZXIiLCJydW4iLCJkb1J1biIsInNldFRpbWVvdXQiLCJyZWFkeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDSUEsVUFBQUEsU0FBUyxzQkFBRyxDQUFDLE1BQU07TUFDckIsRUFBQSxJQUFJQyxVQUFVLEdBQUcsT0FBT0MsUUFBUSxLQUFLLFdBQVcsSUFBSUEsUUFBUSxDQUFDQyxhQUFhLEdBQUdELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDQyxHQUFHLEdBQUdDLFNBQVMsQ0FBQTtRQUVuSCxPQUNGLFVBQVNMLFNBQVMsRUFBUTtNQUFBLElBQUEsSUFBakJBLFNBQVMsS0FBQSxLQUFBLENBQUEsRUFBQTtZQUFUQSxTQUFTLEdBQUcsRUFBRSxDQUFBO01BQUEsS0FBQTtVQUV2QixJQUFJTSxNQUFNLEdBQUMsT0FBT04sU0FBUyxJQUFFLFdBQVcsR0FBQ0EsU0FBUyxHQUFDLEVBQUUsQ0FBQTtVQUFDLElBQUlPLG1CQUFtQixFQUFDQyxrQkFBa0IsQ0FBQTtVQUFDRixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUMsSUFBSUcsT0FBTyxDQUFDLENBQUNDLE9BQU8sRUFBQ0MsTUFBTSxLQUFHO01BQUNKLE1BQUFBLG1CQUFtQixHQUFDRyxPQUFPLENBQUE7TUFBQ0YsTUFBQUEsa0JBQWtCLEdBQUNHLE1BQU0sQ0FBQTtNQUFBLEtBQUMsQ0FBQyxDQUFBO1VBQUMsSUFBSUMsZUFBZSxHQUFDQyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxFQUFFLEVBQUNSLE1BQU0sQ0FBQyxDQUFBO1VBQWdHLElBQUlTLGtCQUFrQixHQUFDLElBQUksQ0FBQTtVQUFpQyxJQUFJQyxlQUFlLEdBQUMsRUFBRSxDQUFBO1VBQUMsU0FBU0MsVUFBVUEsQ0FBQ0MsSUFBSSxFQUFDO01BQUMsTUFBQSxJQUFHWixNQUFNLENBQUMsWUFBWSxDQUFDLEVB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
