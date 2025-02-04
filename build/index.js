(window["webpackJsonp_generate_audiogram_block"] = window["webpackJsonp_generate_audiogram_block"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp_generate_audiogram_block"] = window["webpackJsonp_generate_audiogram_block"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@ffmpeg/ffmpeg/package.json":
/*!**************************************************!*\
  !*** ./node_modules/@ffmpeg/ffmpeg/package.json ***!
  \**************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, browser, bugs, bundleDependencies, dependencies, deprecated, description, devDependencies, directories, engines, homepage, keywords, license, main, name, repository, scripts, types, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_from\":\"@ffmpeg/ffmpeg@0.9.8\",\"_id\":\"@ffmpeg/ffmpeg@0.9.8\",\"_inBundle\":false,\"_integrity\":\"sha512-QradleJx78hHJBtI1wRsus1L1jxQB3v4h6k8c3CERI9fssm+NSSppuofmsOei7uq7iQEYq3oK9tJNAyEsRoNng==\",\"_location\":\"/@ffmpeg/ffmpeg\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"version\",\"registry\":true,\"raw\":\"@ffmpeg/ffmpeg@0.9.8\",\"name\":\"@ffmpeg/ffmpeg\",\"escapedName\":\"@ffmpeg%2fffmpeg\",\"scope\":\"@ffmpeg\",\"rawSpec\":\"0.9.8\",\"saveSpec\":null,\"fetchSpec\":\"0.9.8\"},\"_requiredBy\":[\"#USER\",\"/\"],\"_resolved\":\"https://registry.npmjs.org/@ffmpeg/ffmpeg/-/ffmpeg-0.9.8.tgz\",\"_shasum\":\"d0292ac1e31f6a070b35e18e50dbbd79f2e2bb08\",\"_spec\":\"@ffmpeg/ffmpeg@0.9.8\",\"_where\":\"/Users/allison/Github/audiogram\",\"author\":{\"name\":\"Jerome Wu\",\"email\":\"jeromewus@gmail.com\"},\"browser\":{\"./src/node/index.js\":\"./src/browser/index.js\"},\"bugs\":{\"url\":\"https://github.com/ffmpegwasm/ffmpeg.wasm/issues\"},\"bundleDependencies\":false,\"dependencies\":{\"is-url\":\"^1.2.4\",\"node-fetch\":\"^2.6.1\",\"regenerator-runtime\":\"^0.13.7\",\"resolve-url\":\"^0.2.1\"},\"deprecated\":false,\"description\":\"FFmpeg WebAssembly version\",\"devDependencies\":{\"@babel/core\":\"^7.12.3\",\"@babel/preset-env\":\"^7.12.1\",\"@ffmpeg/core\":\"^0.9.0\",\"@types/emscripten\":\"^1.39.4\",\"babel-loader\":\"^8.1.0\",\"chai\":\"^4.2.0\",\"cors\":\"^2.8.5\",\"eslint\":\"^7.12.1\",\"eslint-config-airbnb-base\":\"^14.1.0\",\"eslint-plugin-import\":\"^2.22.1\",\"express\":\"^4.17.1\",\"mocha\":\"^8.2.1\",\"mocha-headless-chrome\":\"^2.0.3\",\"npm-run-all\":\"^4.1.5\",\"wait-on\":\"^5.3.0\",\"webpack\":\"^5.3.2\",\"webpack-cli\":\"^4.1.0\",\"webpack-dev-middleware\":\"^4.0.0\"},\"directories\":{\"example\":\"examples\"},\"engines\":{\"node\":\">=12.16.1\"},\"homepage\":\"https://github.com/ffmpegwasm/ffmpeg.wasm#readme\",\"keywords\":[\"ffmpeg\",\"WebAssembly\",\"video\"],\"license\":\"MIT\",\"main\":\"src/index.js\",\"name\":\"@ffmpeg/ffmpeg\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/ffmpegwasm/ffmpeg.wasm.git\"},\"scripts\":{\"build\":\"rimraf dist && webpack --config scripts/webpack.config.prod.js\",\"lint\":\"eslint src\",\"prepublishOnly\":\"npm run build\",\"start\":\"node scripts/server.js\",\"test\":\"npm-run-all -p -r start test:all\",\"test:all\":\"npm-run-all wait test:browser:ffmpeg test:node:all\",\"test:browser\":\"mocha-headless-chrome -a allow-file-access-from-files -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000\",\"test:browser:ffmpeg\":\"npm run test:browser -- -f ./tests/ffmpeg.test.html\",\"test:node\":\"node --experimental-wasm-threads --experimental-wasm-bulk-memory node_modules/.bin/_mocha --exit --bail --require ./scripts/test-helper.js\",\"test:node:all\":\"npm run test:node -- ./tests/*.test.js\",\"wait\":\"rimraf dist && wait-on http://localhost:3000/dist/ffmpeg.dev.js\"},\"types\":\"src/index.d.ts\",\"version\":\"0.9.8\"}");

/***/ }),

/***/ "./node_modules/@ffmpeg/ffmpeg/src/browser/defaultOptions.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ffmpeg/ffmpeg/src/browser/defaultOptions.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {const resolveURL = __webpack_require__(/*! resolve-url */ "./node_modules/resolve-url/resolve-url.js");
const { devDependencies } = __webpack_require__(/*! ../../package.json */ "./node_modules/@ffmpeg/ffmpeg/package.json");

/*
 * Default options for browser environment
 */
module.exports = {
  corePath: (typeof process !== 'undefined' && process.env.FFMPEG_ENV === 'development')
    ? resolveURL('/node_modules/@ffmpeg/core/dist/ffmpeg-core.js')
    : `https://unpkg.com/@ffmpeg/core@${devDependencies['@ffmpeg/core'].substring(1)}/dist/ffmpeg-core.js`,
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/@ffmpeg/ffmpeg/src/browser/fetchFile.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ffmpeg/ffmpeg/src/browser/fetchFile.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const resolveURL = __webpack_require__(/*! resolve-url */ "./node_modules/resolve-url/resolve-url.js");

const readFromBlobOrFile = (blob) => (
  new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = ({ target: { error: { code } } }) => {
      reject(Error(`File could not be read! Code=${code}`));
    };
    fileReader.readAsArrayBuffer(blob);
  })
);

module.exports = async (_data) => {
  let data = _data;
  if (typeof _data === 'undefined') {
    return new Uint8Array();
  }

  if (typeof _data === 'string') {
    /* From base64 format */
    if (/data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(_data)) {
      data = atob(_data.split(',')[1])
        .split('')
        .map((c) => c.charCodeAt(0));
    /* From remote server/URL */
    } else {
      const res = await fetch(resolveURL(_data));
      data = await res.arrayBuffer();
    }
  /* From Blob or File */
  } else if (_data instanceof File || _data instanceof Blob) {
    data = await readFromBlobOrFile(_data);
  }

  return new Uint8Array(data);
};


/***/ }),

/***/ "./node_modules/@ffmpeg/ffmpeg/src/browser/getCreateFFmpegCore.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ffmpeg/ffmpeg/src/browser/getCreateFFmpegCore.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-undef */
const resolveURL = __webpack_require__(/*! resolve-url */ "./node_modules/resolve-url/resolve-url.js");
const { log } = __webpack_require__(/*! ../utils/log */ "./node_modules/@ffmpeg/ffmpeg/src/utils/log.js");

/*
 * Fetch data from remote URL and convert to blob URL
 * to avoid CORS issue
 */
const toBlobURL = async (url, mimeType) => {
  log('info', `fetch ${url}`);
  const buf = await (await fetch(url)).arrayBuffer();
  log('info', `${url} file size = ${buf.byteLength} bytes`);
  const blob = new Blob([buf], { type: mimeType });
  const blobURL = URL.createObjectURL(blob);
  log('info', `${url} blob URL = ${blobURL}`);
  return blobURL;
};

module.exports = async ({ corePath: _corePath }) => {
  if (typeof _corePath !== 'string') {
    throw Error('corePath should be a string!');
  }
  const coreRemotePath = resolveURL(_corePath);
  const corePath = await toBlobURL(
    coreRemotePath,
    'application/javascript',
  );
  const wasmPath = await toBlobURL(
    coreRemotePath.replace('ffmpeg-core.js', 'ffmpeg-core.wasm'),
    'application/wasm',
  );
  const workerPath = await toBlobURL(
    coreRemotePath.replace('ffmpeg-core.js', 'ffmpeg-core.worker.js'),
    'application/javascript',
  );
  if (typeof createFFmpegCore === 'undefined') {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      const eventHandler = () => {
        script.removeEventListener('load', eventHandler);
        log('info', 'ffmpeg-core.js script loaded');
        resolve({
          createFFmpegCore,
          corePath,
          wasmPath,
          workerPath,
        });
      };
      script.src = corePath;
      script.type = 'text/javascript';
      script.addEventListener('load', eventHandler);
      document.getElementsByTagName('head')[0].appendChild(script);
    });
  }
  log('info', 'ffmpeg-core.js script is loaded already');
  return Promise.resolve({
    createFFmpegCore,
    corePath,
    wasmPath,
    workerPath,
  });
};


/***/ }),

/***/ "./node_modules/@ffmpeg/ffmpeg/src/browser/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@ffmpeg/ffmpeg/src/browser/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const defaultOptions = __webpack_require__(/*! ./defaultOptions */ "./node_modules/@ffmpeg/ffmpeg/src/browser/defaultOptions.js");
const getCreateFFmpegCore = __webpack_require__(/*! ./getCreateFFmpegCore */ "./node_modules/@ffmpeg/ffmpeg/src/browser/getCreateFFmpegCore.js");
const fetchFile = __webpack_require__(/*! ./fetchFile */ "./node_modules/@ffmpeg/ffmpeg/src/browser/fetchFile.js");

module.exports = {
  defaultOptions,
  getCreateFFmpegCore,
  fetchFile,
};


/***/ }),

/***/ "./node_modules/@ffmpeg/ffmpeg/src/config.js":
/*!***************************************************!*\
  !*** ./node_modules/@ffmpeg/ffmpeg/src/config.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  defaultArgs: [
    /* args[0] is always the binary path */
    './ffmpeg',
    /* Disable interaction mode */
    '-nostdin',
    /* Force to override output file */
    '-y',
  ],
  baseOptions: {
    /* Flag to turn on/off log messages in console */
    log: false,
    /*
     * Custom logger to get ffmpeg.wasm output messages.
     * a sample logger looks like this:
     *
     * ```
     * logger = ({ type, message }) => {
     *   console.log(type, message);
     * }
     * ```
     *
     * type can be one of following:
     *
     * info: internal workflow debug messages
     * fferr: ffmpeg native stderr output
     * ffout: ffmpeg native stdout output
     */
    logger: () => {},
    /*
     * Progress handler to get current progress of ffmpeg command.
     * a sample progress handler looks like this:
     *
     * ```
     * progress = ({ ratio }) => {
     *   console.log(ratio);
     * }
     * ```
     *
     * ratio is a float number between 0 to 1.
     */
    progress: () => {},
    /*
     * Path to find/download ffmpeg.wasm-core,
     * this value should be overwriten by `defaultOptions` in
     * each environment.
     */
    corePath: '',
  },
};


/***/ }),

/***/ "./node_modules/@ffmpeg/ffmpeg/src/createFFmpeg.js":
/*!*********************************************************!*\
  !*** ./node_modules/@ffmpeg/ffmpeg/src/createFFmpeg.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const { defaultArgs, baseOptions } = __webpack_require__(/*! ./config */ "./node_modules/@ffmpeg/ffmpeg/src/config.js");
const { setLogging, setCustomLogger, log } = __webpack_require__(/*! ./utils/log */ "./node_modules/@ffmpeg/ffmpeg/src/utils/log.js");
const parseProgress = __webpack_require__(/*! ./utils/parseProgress */ "./node_modules/@ffmpeg/ffmpeg/src/utils/parseProgress.js");
const parseArgs = __webpack_require__(/*! ./utils/parseArgs */ "./node_modules/@ffmpeg/ffmpeg/src/utils/parseArgs.js");
const { defaultOptions, getCreateFFmpegCore } = __webpack_require__(/*! ./node */ "./node_modules/@ffmpeg/ffmpeg/src/browser/index.js");
const { version } = __webpack_require__(/*! ../package.json */ "./node_modules/@ffmpeg/ffmpeg/package.json");

const NO_LOAD = Error('ffmpeg.wasm is not ready, make sure you have completed load().');

module.exports = (_options = {}) => {
  const {
    log: logging,
    logger,
    progress: optProgress,
    ...options
  } = {
    ...baseOptions,
    ...defaultOptions,
    ..._options,
  };
  let Core = null;
  let ffmpeg = null;
  let runResolve = null;
  let running = false;
  let progress = optProgress;
  const detectCompletion = (message) => {
    if (message === 'FFMPEG_END' && runResolve !== null) {
      runResolve();
      runResolve = null;
      running = false;
    }
  };
  const parseMessage = ({ type, message }) => {
    log(type, message);
    parseProgress(message, progress);
    detectCompletion(message);
  };

  /*
   * Load ffmpeg.wasm-core script.
   * In browser environment, the ffmpeg.wasm-core script is fetch from
   * CDN and can be assign to a local path by assigning `corePath`.
   * In node environment, we use dynamic require and the default `corePath`
   * is `$ffmpeg/core`.
   *
   * Typically the load() func might take few seconds to minutes to complete,
   * better to do it as early as possible.
   *
   */
  const load = async () => {
    log('info', 'load ffmpeg-core');
    if (Core === null) {
      log('info', 'loading ffmpeg-core');
      /*
       * In node environment, all paths are undefined as there
       * is no need to set them.
       */
      const {
        createFFmpegCore,
        corePath,
        workerPath,
        wasmPath,
      } = await getCreateFFmpegCore(options);
      Core = await createFFmpegCore({
        /*
         * Assign mainScriptUrlOrBlob fixes chrome extension web worker issue
         * as there is no document.currentScript in the context of content_scripts
         */
        mainScriptUrlOrBlob: corePath,
        printErr: (message) => parseMessage({ type: 'fferr', message }),
        print: (message) => parseMessage({ type: 'ffout', message }),
        /*
         * locateFile overrides paths of files that is loaded by main script (ffmpeg-core.js).
         * It is critical for browser environment and we override both wasm and worker paths
         * as we are using blob URL instead of original URL to avoid cross origin issues.
         */
        locateFile: (path, prefix) => {
          if (typeof window !== 'undefined') {
            if (typeof wasmPath !== 'undefined'
              && path.endsWith('ffmpeg-core.wasm')) {
              return wasmPath;
            }
            if (typeof workerPath !== 'undefined'
              && path.endsWith('ffmpeg-core.worker.js')) {
              return workerPath;
            }
          }
          return prefix + path;
        },
      });
      ffmpeg = Core.cwrap('proxy_main', 'number', ['number', 'number']);
      log('info', 'ffmpeg-core loaded');
    } else {
      throw Error('ffmpeg.wasm was loaded, you should not load it again, use ffmpeg.isLoaded() to check next time.');
    }
  };


  /*
   * Determine whether the Core is loaded.
   */
  const isLoaded = () => Core !== null;

  /*
   * Run ffmpeg command.
   * This is the major function in ffmpeg.wasm, you can just imagine it
   * as ffmpeg native cli and what you need to pass is the same.
   *
   * For example, you can convert native command below:
   *
   * ```
   * $ ffmpeg -i video.avi -c:v libx264 video.mp4
   * ```
   *
   * To
   *
   * ```
   * await ffmpeg.run('-i', 'video.avi', '-c:v', 'libx264', 'video.mp4');
   * ```
   *
   */
  const run = (..._args) => {
    log('info', `run ffmpeg command: ${_args.join(' ')}`);
    if (Core === null) {
      throw NO_LOAD;
    } else if (running) {
      throw Error('ffmpeg.wasm can only run one command at a time');
    } else {
      running = true;
      return new Promise((resolve) => {
        const args = [...defaultArgs, ..._args].filter((s) => s.length !== 0);
        runResolve = resolve;
        ffmpeg(...parseArgs(Core, args));
      });
    }
  };

  /*
   * Run FS operations.
   * For input/output file of ffmpeg.wasm, it is required to save them to MEMFS
   * first so that ffmpeg.wasm is able to consume them. Here we rely on the FS
   * methods provided by Emscripten.
   *
   * Common methods to use are:
   * ffmpeg.FS('writeFile', 'video.avi', new Uint8Array(...)): writeFile writes
   * data to MEMFS. You need to use Uint8Array for binary data.
   * ffmpeg.FS('readFile', 'video.mp4'): readFile from MEMFS.
   * ffmpeg.FS('unlink', 'video.map'): delete file from MEMFS.
   *
   * For more info, check https://emscripten.org/docs/api_reference/Filesystem-API.html
   *
   */
  const FS = (method, ...args) => {
    log('info', `run FS.${method} ${args.map((arg) => (typeof arg === 'string' ? arg : `<${arg.length} bytes binary file>`)).join(' ')}`);
    if (Core === null) {
      throw NO_LOAD;
    } else {
      let ret = null;
      try {
        ret = Core.FS[method](...args);
      } catch (e) {
        if (method === 'readdir') {
          throw Error(`ffmpeg.FS('readdir', '${args[0]}') error. Check if the path exists, ex: ffmpeg.FS('readdir', '/')`);
        } else if (method === 'readFile') {
          throw Error(`ffmpeg.FS('readFile', '${args[0]}') error. Check if the path exists`);
        } else {
          throw Error('Oops, something went wrong in FS operation.');
        }
      }
      return ret;
    }
  };

  const setProgress = (_progress) => {
    progress = _progress;
  };

  const setLogger = (_logger) => {
    setCustomLogger(_logger);
  };

  setLogging(logging);
  setCustomLogger(logger);

  log('info', `use ffmpeg.wasm v${version}`);

  return {
    setProgress,
    setLogger,
    setLogging,
    load,
    isLoaded,
    run,
    FS,
  };
};


/***/ }),

/***/ "./node_modules/@ffmpeg/ffmpeg/src/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@ffmpeg/ffmpeg/src/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
const createFFmpeg = __webpack_require__(/*! ./createFFmpeg */ "./node_modules/@ffmpeg/ffmpeg/src/createFFmpeg.js");
const { fetchFile } = __webpack_require__(/*! ./node */ "./node_modules/@ffmpeg/ffmpeg/src/browser/index.js");

module.exports = {
  /*
   * Create ffmpeg instance.
   * Each ffmpeg instance owns an isolated MEMFS and works
   * independently.
   *
   * For example:
   *
   * ```
   * const ffmpeg = createFFmpeg({
   *  log: true,
   *  logger: () => {},
   *  progress: () => {},
   *  corePath: '',
   * })
   * ```
   *
   * For the usage of these four arguments, check config.js
   *
   */
  createFFmpeg,
  /*
   * Helper function for fetching files from various resource.
   * Sometimes the video/audio file you want to process may located
   * in a remote URL and somewhere in your local file system.
   *
   * This helper function helps you to fetch to file and return an
   * Uint8Array variable for ffmpeg.wasm to consume.
   *
   */
  fetchFile,
};


/***/ }),

/***/ "./node_modules/@ffmpeg/ffmpeg/src/utils/log.js":
/*!******************************************************!*\
  !*** ./node_modules/@ffmpeg/ffmpeg/src/utils/log.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

let logging = false;
let customLogger = () => {};

const setLogging = (_logging) => {
  logging = _logging;
};

const setCustomLogger = (logger) => {
  customLogger = logger;
};

const log = (type, message) => {
  customLogger({ type, message });
  if (logging) {
    console.log(`[${type}] ${message}`);
  }
};

module.exports = {
  logging,
  setLogging,
  setCustomLogger,
  log,
};


/***/ }),

/***/ "./node_modules/@ffmpeg/ffmpeg/src/utils/parseArgs.js":
/*!************************************************************!*\
  !*** ./node_modules/@ffmpeg/ffmpeg/src/utils/parseArgs.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = (Core, args) => {
  const argsPtr = Core._malloc(args.length * Uint32Array.BYTES_PER_ELEMENT);
  args.forEach((s, idx) => {
    const buf = Core._malloc(s.length + 1);
    Core.writeAsciiToMemory(s, buf);
    Core.setValue(argsPtr + (Uint32Array.BYTES_PER_ELEMENT * idx), buf, 'i32');
  });
  return [args.length, argsPtr];
};


/***/ }),

/***/ "./node_modules/@ffmpeg/ffmpeg/src/utils/parseProgress.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ffmpeg/ffmpeg/src/utils/parseProgress.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

let duration = 0;
let ratio = 0;

const ts2sec = (ts) => {
  const [h, m, s] = ts.split(':');
  return (parseFloat(h) * 60 * 60) + (parseFloat(m) * 60) + parseFloat(s);
};

module.exports = (message, progress) => {
  if (typeof message === 'string') {
    if (message.startsWith('  Duration')) {
      const ts = message.split(', ')[0].split(': ')[1];
      const d = ts2sec(ts);
      progress({ duration: d, ratio });
      if (duration === 0 || duration > d) {
        duration = d;
      }
    } else if (message.startsWith('frame') || message.startsWith('size')) {
      const ts = message.split('time=')[1].split(' ')[0];
      const t = ts2sec(ts);
      ratio = t / duration;
      progress({ ratio, time: t });
    } else if (message.startsWith('video:')) {
      progress({ ratio: 1 });
      duration = 0;
    }
  }
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/resolve-url/resolve-url.js":
/*!*************************************************!*\
  !*** ./node_modules/resolve-url/resolve-url.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;// Copyright 2014 Simon Lydell
// X11 (“MIT”) Licensed. (See LICENSE.)

void (function(root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else {}
}(this, function() {

  function resolveUrl(/* ...urls */) {
    var numUrls = arguments.length

    if (numUrls === 0) {
      throw new Error("resolveUrl requires at least one argument; got none.")
    }

    var base = document.createElement("base")
    base.href = arguments[0]

    if (numUrls === 1) {
      return base.href
    }

    var head = document.getElementsByTagName("head")[0]
    head.insertBefore(base, head.firstChild)

    var a = document.createElement("a")
    var resolved

    for (var index = 1; index < numUrls; index++) {
      a.href = arguments[index]
      resolved = a.href
      base.href = resolved
    }

    head.removeChild(base)

    return resolved
  }

  return resolveUrl

}));


/***/ }),

/***/ "./src/AudiogramPreview.js":
/*!*********************************!*\
  !*** ./src/AudiogramPreview.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);


/**
 * External dependencies
 */




const AudiogramPreview = props => {
  const {
    doTranscode,
    onUpdateImage,
    onSelectFile,
    onSelectAudio,
    onSelectURL,
    onUploadError,
    id,
    src,
    imageSrc,
    imageWidth,
    imageHeight,
    imageID,
    audiogramUrl,
    audiogramId,
    captionsSrc,
    message,
    processing,
    ALLOWED_MEDIA_TYPES,
    imageSizeMessage
  } = props;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, audiogramUrl && audiogramId ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("video", {
    controls: true,
    src: audiogramUrl,
    crossOrigin: "anonymous"
  }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, processing && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Spinner"], null), " ", message), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["BlockControls"], {
    group: "other"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaReplaceFlow"], {
    mediaId: id,
    mediaURL: src,
    allowedTypes: ALLOWED_MEDIA_TYPES,
    accept: "audio/*",
    onSelect: onSelectAudio,
    onSelectURL: onSelectURL,
    onError: onUploadError,
    name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Replace Audio')
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Audiogram Background Image')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, imageSizeMessage), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUpload"], {
    title: 'audiogram-bg',
    onSelect: onUpdateImage,
    allowedTypes: ['image'],
    render: ({
      open
    }) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      isPrimary: true,
      onClick: open
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Select image'))),
    value: imageID
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Audiogram Captions')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Must be a .vtt captions file."), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["FormFileUpload"], {
    multiple: false,
    onChange: onSelectFile,
    accept: '.vtt',
    isPrimary: true,
    title: `${Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Accepted file formats: vtt', 'media-manager')}`
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Upload subtitles', 'media-manager')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: `audiogram-preview ${processing ? 'processing' : ''}`,
    style: {
      backgroundImage: `url(${imageSrc})`,
      width: `${imageWidth}px`,
      height: `${imageHeight}px`
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "captions"
  }, captionsSrc ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Captions go here...') : ''), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("audio", {
    controls: "controls",
    src: src
  })), !processing && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    isPrimary: true,
    onClick: doTranscode,
    disabled: !imageSrc
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Create Audiogram'))));
};

/* harmony default export */ __webpack_exports__["default"] = (AudiogramPreview);

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blob */ "@wordpress/blob");
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blob__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icon */ "./src/icon.js");
/* harmony import */ var _AudiogramPreview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AudiogramPreview */ "./src/AudiogramPreview.js");


/**
 * External dependencies
 */


const {
  createFFmpeg,
  fetchFile
} = __webpack_require__(/*! @ffmpeg/ffmpeg */ "./node_modules/@ffmpeg/ffmpeg/src/index.js");







/**
 * Internal dependencies
 */



/**
 * Edit function for Generate Audiogram Block.
 *
 * @return {WPElement} Element to render.
 */

function Edit({
  noticeOperations,
  noticeUI,
  attributes,
  setAttributes
}) {
  // State
  const [message, setMessage] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Add an image and captions, then click Create Audiogram.'));
  const [processing, setProcessing] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    id,
    src,
    imageID,
    imageSrc,
    imageHeight,
    imageWidth,
    captionsSrc,
    audiogramSrc,
    audiogramId,
    audiogramUrl,
    fontSrc
  } = attributes;
  const ALLOWED_MEDIA_TYPES = ['audio'];
  const ALLOWED_IMAGE_SIZES = [{
    width: 1080,
    height: 1080
  }, {
    width: 720,
    height: 720
  }, {
    width: 1920,
    height: 1080
  }, {
    width: 1280,
    height: 720
  }, {
    width: 1080,
    height: 1920
  }, {
    width: 720,
    height: 1280
  }];

  const imageSizeMessage = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Image size must be: 1080x1080, 720x720, 1920x1080, 1280x720, 1080x1920, or 720x1280.');

  const mediaUpload = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["useSelect"])(select => {
    const {
      getSettings
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["store"]);
    return getSettings().mediaUpload;
  }, []); // Check for SharedArrayBuffer support.

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    var _window;

    const isFeatureSupported = Boolean((_window = window) === null || _window === void 0 ? void 0 : _window.crossOriginIsolated);

    if (!isFeatureSupported) {
      noticeOperations.createErrorNotice(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Sorry, your browser doesn't support generating an audiogram. Please try using a different one."));
    }
  }, []); // Upload the audio.

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!id && Object(_wordpress_blob__WEBPACK_IMPORTED_MODULE_4__["isBlobURL"])(src)) {
      const file = Object(_wordpress_blob__WEBPACK_IMPORTED_MODULE_4__["getBlobByURL"])(src);

      if (file) {
        mediaUpload({
          filesList: [file],
          onFileChange: ([{
            id: mediaId,
            url
          }]) => {
            setAttributes({
              id: mediaId,
              src: url
            });
          },
          onError: e => {
            setAttributes({
              src: undefined,
              id: undefined
            });
            noticeOperations.createErrorNotice(e);
          },
          allowedTypes: ALLOWED_MEDIA_TYPES
        });
      }
    }
  }, []); // Upload the audiogram.

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (audiogramSrc) {
      const blobURL = Object(_wordpress_blob__WEBPACK_IMPORTED_MODULE_4__["createBlobURL"])(audiogramSrc);
      const file = Object(_wordpress_blob__WEBPACK_IMPORTED_MODULE_4__["getBlobByURL"])(blobURL);

      if (file) {
        mediaUpload({
          filesList: [file],
          onFileChange: ([{
            id,
            url
          }]) => {
            setAttributes({
              audiogramId: id,
              audiogramUrl: url
            });
          },
          onError: e => {
            setAttributes({
              audiogramUrl: undefined
            });
            noticeOperations.createErrorNotice(e);
          },
          allowedTypes: ['video']
        });
      }
    }
  }, [audiogramSrc]); // Load ffmpeg.

  const ffmpeg = createFFmpeg(); // Create the audiogram

  const doTranscode = async () => {
    setMessage(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Loading generator...'));
    setProcessing(true);
    await ffmpeg.load();
    setMessage(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Creating audiogram. This may take a few minutes.'));
    ffmpeg.FS('writeFile', 'audio.mp3', await fetchFile(src));
    ffmpeg.FS('writeFile', 'captions.vtt', await fetchFile(captionsSrc));
    ffmpeg.FS('writeFile', 'tmp/SourceSansPro-Bold', await fetchFile(fontSrc));
    ffmpeg.FS('writeFile', 'bg.png', await fetchFile(imageSrc));
    await ffmpeg.run('-i', 'audio.mp3', '-loop', '1', '-i', 'bg.png', '-filter_complex', `[0:a]showwaves=mode=line:colors=White:s=${imageWidth}x200[sw];[1:v][sw]overlay=shortest=1:format=auto:y=H-h,format=yuv420p,subtitles=captions.vtt:fontsdir=/tmp:force_style='Fontname=Source Sans Pro,Fontsize=25,Alignment=8,Outline=0,Shadow=0'[out]`, '-map', '[out]', '-map', '0:a', '-c:v', 'libx264', '-c:a', 'aac', 'audiogram.mp4');
    setMessage('');
    setProcessing(false);
    const audiogram = ffmpeg.FS('readFile', 'audiogram.mp4');
    setAttributes({
      audiogramSrc: new Blob([audiogram.buffer], {
        type: 'video/mp4'
      })
    });
  };

  function onUploadError(message) {
    noticeOperations.removeAllNotices();
    noticeOperations.createErrorNotice(message);
  }

  function onSelectURL(newSrc) {
    if (newSrc !== src) {
      setAttributes({
        src: newSrc,
        id: undefined
      });
    }
  }

  function onSelectAudio(media) {
    if (!media || !media.url) {
      // in this case there was an error and we should continue in the editing state
      // previous attributes should be removed because they may be temporary blob urls
      setAttributes({
        src: undefined,
        id: undefined
      });
      return;
    } // sets the block's attribute and updates the edit component from the
    // selected media, then switches off the editing UI


    setAttributes({
      src: media.url,
      id: media.id
    });
  }

  function onUpdateImage(image) {
    noticeOperations.removeAllNotices(); // If the image isn't one of the allowed sizes, throw an error.

    const imageSizeAllowed = ALLOWED_IMAGE_SIZES.some(size => {
      return size.width === image.width && size.height === image.height;
    });

    if (imageSizeAllowed) {
      setAttributes({
        imageID: image.id,
        imageSrc: image.url,
        imageHeight: image.height,
        imageWidth: image.width
      });
    } else {
      noticeOperations.createErrorNotice(imageSizeMessage);
    }
  }

  const onSelectFile = event => {
    var _event$target$files;

    setAttributes({
      captionsSrc: (_event$target$files = event.target.files) === null || _event$target$files === void 0 ? void 0 : _event$target$files[0],
      fontSrc: _index__WEBPACK_IMPORTED_MODULE_6__["fontUrl"]
    });
  };

  const childProps = {
    doTranscode,
    onUpdateImage,
    onSelectFile,
    onSelectAudio,
    onSelectURL,
    onUploadError,
    message,
    processing,
    ALLOWED_MEDIA_TYPES,
    imageSizeMessage,
    ...attributes
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"])(), noticeUI, !src ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaPlaceholder"], {
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["BlockIcon"], {
      icon: _icon__WEBPACK_IMPORTED_MODULE_7__["AudiogramIcon"]
    }),
    onSelect: onSelectAudio,
    onSelectURL: onSelectURL,
    accept: "audio/*",
    allowedTypes: ALLOWED_MEDIA_TYPES,
    value: attributes,
    notices: noticeUI,
    onError: onUploadError,
    labels: {
      title: 'Audiogram'
    }
  })) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_AudiogramPreview__WEBPACK_IMPORTED_MODULE_8__["default"], childProps));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["withNotices"])(Edit));

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/*! exports provided: AudiogramIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudiogramIcon", function() { return AudiogramIcon; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const AudiogramIcon = () => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 199 166.5",
  width: "24",
  height: "24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("defs", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("style", null, '.prefix__cls-1{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:13px}')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  className: "prefix__cls-1",
  d: "M6.5 0v166M130.5.5v166M37.5 23.5v115M99.5 23.5v115M161.5 23.5v115M68.5 52.5v61M192.5 50.5v61"
}));

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: name, title, blockName, fontUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "title", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockName", function() { return blockName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontUrl", function() { return fontUrl; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icon */ "./src/icon.js");


/**
 * External dependencies
 */




/**
 * Internal dependencies
 */





const name = 'audiogram';
const title = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Audiogram', 'generate-audiogram-block');
const blockName = 'generate-audiogram-block/audiogram';
const fontUrl = jsData.font_url;
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__["registerBlockType"])(blockName, {
  title,
  description: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Audiogram', 'generate-audiogram-block')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ExternalLink"], {
    href: "#"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Learn more about Audiogram', 'generate-audiogram-block'))),
  icon: _icon__WEBPACK_IMPORTED_MODULE_7__["AudiogramIcon"],
  category: 'media',
  keywords: [],
  supports: {
    align: true
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_5__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_6__["default"],
  attributes: {
    src: {
      type: 'string'
    },
    id: {
      type: 'string'
    },
    imageID: {
      type: 'string'
    },
    imageSrc: {
      type: 'string'
    },
    imageHeight: {
      type: 'number'
    },
    imageWidth: {
      type: 'number'
    },
    captionsSrc: {
      type: 'string'
    },
    audiogramSrc: {
      type: 'string'
    },
    audiogramUrl: {
      type: 'string'
    },
    audiogramId: {
      type: 'string'
    },
    fontSrc: {
      type: 'string'
    }
  },
  example: {
    attributes: {// @TODO: Add default values for block attributes, for generating the block preview.
    }
  }
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


/**
 * External dependencies
 */

/**
 * Generate Audiogram Block save function.
 *
 * @return {WPElement} Element to render.
 */

function save({
  attributes
}) {
  const {
    audiogramUrl
  } = attributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"].save(), audiogramUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("video", {
    src: audiogramUrl,
    controls: true
  }));
}

/***/ }),

/***/ "@wordpress/blob":
/*!******************************!*\
  !*** external ["wp","blob"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blob"]; }());

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map