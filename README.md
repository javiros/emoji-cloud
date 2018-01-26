Emojicloud

A npm module for generating beautiful emojiclouds 😀

## Prerequisites
* node > 8.5

## Instalation

npm intall Emojicloud

## Usage

Call EmojiCloud() with the following arguments:

** Parameters:

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
