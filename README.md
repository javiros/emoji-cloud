# Emojicloud

## info
A npm module for generating beautiful emojiclouds 😀

[![Travis](https://img.shields.io/travis/javiros/emoji-cloud.svg)](https://travis-ci.org/javiros/emoji-cloud)
[![Github All Releases](https://img.shields.io/github/downloads/javiros/emoji-cloud/total.svg)]()
[![GitHub tag](https://img.shields.io/github/tag/javiros/emoji-cloud.svg)]()
[![GitHub tag](https://img.shields.io/github/last-commit/javiros/emoji-cloud/gh-pages.svg?label=last%20deployed)]()

![emoji-cloud](https://github.com/javiros/emoji-cloud/blob/master/emoji-cloud.png)

## Requirements
* node > 8.7

## Instalation

`npm intall Emojicloud`

## Usage

Place a div with an `id = emoji-cloud` like so:

```
<div id="emoji-cloud"></div>
```

Then in your js file call EmojiCloud() with the following:

 Parameters:

- selector, where you want your emojicloud to be rendered i.e.: `'#emoji-cloud'`

- data and cssOptions

```
  {
    data: [
      {'count': 123, 'unicode': '1F448'},
      {'count': 153, 'unicode': '1F44C'},
      ...
      ]
    cssOptions: { height: 'string', width: 'string' } // optional
  }
```

Where `data` is an array of objects.
  - count: represents the size of the emoji
  - unicode: emoji unicode representation (currently there are some known issues supporting flag unicodes)


cssOptions allows you to adjust the height and width of the canvas where EmojiCloud is rendered. It defaults to: `height: 600px`, `width: 600px`.

## Contributing

* If you'd like to contribute to this project get in contact with the author to discuss the change.
* Create a pull request off `master`
* Submit your pull request provided you:
- have agreed new feature with author
- have fully tested your new feature and most importantly...
- are proud of your work

