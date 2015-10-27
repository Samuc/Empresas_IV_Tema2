var _ = require('underscore');

// TODO: This shoul be read from a database
var heroes = [
  {
    name: 'Empresa inventada 1',
    facts: [
      'Puntuación: 10 , muy buen trato',
      'Puntuación: 6.5 , no está mal',
      'Puntuación: 8 , le doy mi aprovación',
      'Puntuación: 7.5 , tenemos mucha libertad.']
  },
  {
    name: 'Empresa inventada 2',
    facts: [
      'Puntuación: 1 , no me ha gustado un pelo',
      'Puntuación: 4.5 , pss, pasable',
      'Puntuación: 4 , no vuelvo ahí ni muerto',
      'Puntuación: 7.5 , al final he acabado contento.']
  },
  {
    name: 'Empresa inventada 3',
    facts: [
      'Puntuación: 8 , muy buen trato',
      'Puntuación: 7 , no está mal']

  },
{
    name: 'Empresa inventada 4',
    facts: [
      'Puntuación: 0 , un bodrio',
      'Puntuación: 2 , no se merece ni nombrarla',
      'Puntuación: 1 , arrepetido',
      'Puntuación: 7.5 , a mi me han pagado bien.']
  },
  {
    name: 'Empresa inventada 5',
    facts: [
      'Puntuación: 10 , perfecta',
      'Puntuación: 10 , espléndida',
      'Puntuación: 10 , genial',
      'Puntuación: 10 , sobresaliente',
      'Puntuación: 7.5 , piden muchos requisitos.']
}
];


exports.index = function(req, res) {
  var names = heroes.map(function(p) { return p.name; });
  res.render('index', { heroes: names })
};

exports.hero = function(req, res) {
  var facts = _(heroes).detect(function (p) {
    return p.name == req.params.name;
  }).facts;
  res.json(facts);
}

exports.addFact = function(req, res) {
  var hero = _(heroes).detect(function(p) {
    return p.name == req.body.name;
  });

  hero.facts.push(req.body.fact);

  console.log('New fact for ' + hero.name + ': ' + req.body.fact);

  res.json({status: 'ok' });
}
