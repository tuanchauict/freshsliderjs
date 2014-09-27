# Fresh Slider JS
Fresh Slider is a `jQuery` plugin.

![Fresh Slider JS][1]

See [demo](http://tuanchauict.github.io/freshsliderjs/)

## Install
Just add `jQuery` and `freshslider.js` and `freshslider.css` to your `html` file. The `src` folder contains the original source code while the `build` folder contains the uglified/minified ones.

### Build the source
The source code (both `.js` and `.css` files) can now be built (ugligy/minify) with the help of [Grunt](http://gruntjs.com/) for the sake of automation. Follow the [Getting Started](http://gruntjs.com/getting-started) document to setup the tool, which requires [NodeJS](http://nodejs.org/). After that, type the following into the command-line:
```
npm install
grunt
```
If no problem occurs, you can now check the `build` folder for the output. The output when there is no problem should look similar to this:
```
Running "jshint:files" (jshint) task
>> 1 file lint free.

Running "qunit:all" (qunit) task
Testing http://localhost:8888/test/test.html ..OK
>> 4 assertions passed (30ms)

Running "uglify:build" (uglify) task

Running "cssmin:add_banner" (cssmin) task
File build/freshslider.min.css created: 1.33 kB → 1 kB

Done, without errors.
```
Note that the testing step may fail if you don't have a server running at your localhost, port 8888. If you have Python installed thatn just navigate to the root folder and type in the command:
```
python -m SimpleHTTPServer 8888
```
Then re-run Grunt.
## Constructor
    jQueryObject.freshslider(options)
    
 * `options.range`: `true` or `false`, [default: `false`]
 * `options.onchange`: callback function when slider caret's changed, `onchange(low, high)` for `ranged`, and `onchange(value)` for `unranged` 
 * `options.min`: minimum of value [default: `0`]
 * `options.max`: maximum of value [default: `100`]
 * `options.step` [default: 1]
 * `options.unit`: the unit which slider is considering, [default: `none`]
 * `options.enabled`: `true` or `false` [default: `true`]
 * `options.value`: a number if `unranged` , or 2 elements array contains low and high value if `ranged`
 * `options.text`: `true` or `false`, [default: `true`]
 * return `freshSliderObject`.

## Set Value
unranged:

    freshSliderObject.setValue(value)
    
or ranged:

    freshSliderObject.setValue(lowValue, highValue)
    
## Get Value
    freshSliderObject.getValue()

return value for unranged and 2 elements array value for ranged

## Set Enabled
    freshSliderObject.setEnable(enabled:boolean)


  [1]: https://dl.dropboxusercontent.com/u/36585213/OpenSource%20Resource/freshsliderjs/Screen%20Shot%202014-04-01%20at%206.25.37.png
