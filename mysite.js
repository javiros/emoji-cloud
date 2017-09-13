$(document).ready(function() {

  // { data: [{'count': 123, 'unicode': 'U+1F600'}, {'count': 153, 'unicode': 'U+1F605'} }
  console.log(EmojiCloud);
  EmojiCloud.build('#emoji-cloud', {
    title: 'Sample title',
    data: [
      {'count': 123, 'unicode': 'U+1F600'},
      {'count': 153, 'unicode': 'U+1F605'}
    ]}
  )
});