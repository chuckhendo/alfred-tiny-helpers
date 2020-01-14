const alfy = require('alfy');

const data = await alfy.fetch('https://raw.githubusercontent.com/stefanjudis/tiny-helpers/master/helpers.json');

const items = alfy
  .inputMatches(data, 'name')
  .map(element => ({
    title: element.name,
    subtitle: element.desc,
    arg: element.url
  }));

alfy.output(items);