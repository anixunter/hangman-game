var ANIMES = [
  "gintama",
  "attackontitan",
  "hunterxhunter",
  "bleach",
  "codegeass",
  "monster",
  "jujutsukaisen",
  "kingdom",
  "vinlandsaga",
  "mobpsycho",
  "haikyuu",
  "cowboybebop",
  "onepiece",
  "deathnote",
  "naruto",
  "dragonballz",
  "sololeveling"
  ];
  
  let MOVIES = [
    'shawshank',
    'godfather',
    'thedarkknight',
    'pulpfiction',
    'dune',
    'forrestgump',
    'fightclub',
    'inception',
    'starwars',
    'thematrix',
    'kungfupanda',
    'interstellar',
    'savingprivateryan',
    'terminator',
    'parasite',
    "thelionking"
  ];
  
  let TVSERIES = [
    'breakingbad',
    'gameofthrones',
    'avatar',
    'rickandmorty',
    'sherlock',
    'bettercallsaul',
    'fargo',
    'friends',
    'narcos',
    'blackmirror',
    'thelastofus',
    'peakyblinders',
    'theboys',
    'strangerthings',
    "daredevil",
    "theoffice"
  ];
  
function randomWord(type) {
    switch (type) {
        
    case 'movies':
        return MOVIES[Math.floor(Math.random() * MOVIES.length)];

    case 'tvseries':
        return TVSERIES[Math.floor(Math.random() * TVSERIES.length)];
    
    case 'animes':
    default:
        return ANIMES[Math.floor(Math.random() * ANIMES.length)];
    }
}

export default randomWord;