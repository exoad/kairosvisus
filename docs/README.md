# Kairos Visus Docs

> This page titles the **global** functions used throughout the aspect of the code.

## Modularity
The program is designed to be modular meaning you can add and remove things to your heart's desire without causing any significant errors.

**One of these modularities** is the avaliable cities that the program loads at once. Due to the inability to dynamically fetch locations on demand through Lens Studio, I had to hardcode avaliable cities
into the program. You can view them in `locale_stuffs.js` or under the global scope `global.cities`.

If you want to add a city, simply follow the previous format:

```json
"cityName" : {
  latitude: 69,
  longitude: 420
}
```

**Another aspect of thee modularities** is the plugin ability for new flags and new weather icons, these are all located in the functions, so I will not be covering them (mostly because I am too annoyed at the hardcoding aspect
of coding in Lens studio :<)

## `global.countryFlagEmoji`

Used for displaying country flags.

Parameters: `country:String` -> Represents the country name (e.g. `"France"`)

Returns: `String` -> The unicode emoji of the country's flag

**Note** This function is not complete and is hardcoded

## `global.flagImgMatch`

Primarily used to preload all flag textures into the Lens.

Parameters: `country:String` -> Represents the country name

Returns: `Component.Image` -> The Object of the flag image

**Note** This function is not complete and is hardcoded
