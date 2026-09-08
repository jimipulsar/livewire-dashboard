<?php


return [

    /*
    |--------------------------------------------------------------------------
    | Default Theme
    |--------------------------------------------------------------------------
    |
    | Visual theme applied to the slider.
    | This maps directly to CSS classes.
    |
    | Supported: slate,
    | indigo,
    | teal,
    | orange,
    | cyan,
    | emerald,
    | sky,
    | amber,
    | red,
    | rose,
    | pink,
    | purple
    |
    */
    'theme' => 'orange',

    /*
    |--------------------------------------------------------------------------
    | Default Size
    |--------------------------------------------------------------------------
    |
    | Controls slider height and handle size.
    |
    | Supported: small, medium, large
    |
    */
    'size' => 'medium',

    /*
    |--------------------------------------------------------------------------
    | Default Variant
    |--------------------------------------------------------------------------
    |
    | Shape of the slider and handles.
    |
    | Supported: square, rounded
    |
    */
    'variant' => 'rounded',

    /*
    |--------------------------------------------------------------------------
    | Default Direction
    |--------------------------------------------------------------------------
    |
    | Slider direction.
    |
    | Supported: ltr, rtl
    |
    */
    'direction' => 'ltr',

    /*
    |--------------------------------------------------------------------------
    | Default Behaviour
    |--------------------------------------------------------------------------
    |
    | Passed directly to noUiSlider.
    | See: https://refreshless.com/nouislider/behaviour-option/
    |
    | Common values:
    | - tap
    | - drag
    | - tap-drag
    | - fixed
    | - snap
    | - none
    |
    */
    'behaviour' => 'tap',

    /*
   |--------------------------------------------------------------------------
   | Default pips
   |--------------------------------------------------------------------------
   |
   | slider pips/scales
   |
   |
   | supported
   | - bool(true/false)
   | - array ([0,25,75,100])
   |
   */
    'pips'=>false,

    /*
   |--------------------------------------------------------------------------
   | Default step
   |--------------------------------------------------------------------------
   |
   | Controls slider steps.
   |
   | Supported: integer/float
   |
   */
    'step' => 1,

    /*
 |--------------------------------------------------------------------------
 | Default min
 |--------------------------------------------------------------------------
 |
 | Controls slider min value.
 |
 | Supported: integer/float
 |
 */
    'min' => 1,


/*
|--------------------------------------------------------------------------
| Default max
|--------------------------------------------------------------------------
|
| Controls slider max value.
|
| Supported: integer/float
|
*/
    'max' => 100,


    /*
 |--------------------------------------------------------------------------
 | Default tooltips
 |--------------------------------------------------------------------------
 |
 | Controls slider tooltips.
 |
 | Supported: bool(true, false)
 |
 */
    'tooltips' => true,


];
