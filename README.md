# Fresh Slider JS
Fresh Slider is a `jQuery` plugin.

![Fresh Slider JS][1]

See [demo](https://dl.dropboxusercontent.com/u/36585213/OpenSource%20Resource/freshsliderjs/demo.html)

## Install
Just add `jQuery` and `freshslider.js` and `freshslider.css` to your `html` file

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
