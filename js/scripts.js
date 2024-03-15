// List of the first 151 Pokemon of the Kanto region 
let pokemonRepository = (function () {
    let pokemonList = [
        { name: "Bulbasaur", height: 0.7, weight: 69, types: ['grass', 'poison'], japaneseName: "フシギダネ" },
        { name: "Ivysaur", height: 1.0, weight: 130, types: ['grass', 'poison'], japaneseName: "フシギソウ" },
        { name: "Venusaur", height: 2.0, weight: 1000, types: ['grass', 'poison'], japaneseName: "フシギバナ" },
        { name: "Charmander", height: 0.6, weight: 85, types: ['fire'], japaneseName: "ヒトカゲ" },
        { name: "Charmeleon", height: 1.1, weight: 190, types: ['fire'], japaneseName: "リザード" },
        { name: "Charizard", height: 1.7, weight: 905, types: ['fire', 'flying'], japaneseName: "リザードン" },
        { name: "Squirtle", height: 0.5, weight: 90, types: ['water'], japaneseName: "ゼニガメ" },
        { name: "Wartortle", height: 1.0, weight: 225, types: ['water'], japaneseName: "カメール" },
        { name: "Blastoise", height: 1.6, weight: 855, types: ['water'], japaneseName: "カメックス" },
        { name: "Caterpie", height: 0.3, weight: 29, types: ['bug'], japaneseName: "キャタピー" },
        { name: "Metapod", height: 0.7, weight: 99, types: ['bug'], japaneseName: "トランセル" },
        { name: "Butterfree", height: 1.1, weight: 320, types: ['bug', 'flying'], japaneseName: "バタフリー" },
        { name: "Weedle", height: 0.3, weight: 32, types: ['bug', 'poison'], japaneseName: "ビードル" },
        { name: "Kakuna", height: 0.6, weight: 100, types: ['bug', 'poison'], japaneseName: "コクーン" },
        { name: "Beedrill", height: 1.0, weight: 295, types: ['bug', 'poison'], japaneseName: "スピアー" },
        { name: "Pidgey", height: 0.3, weight: 18, types: ['normal', 'flying'], japaneseName: "ポッポ" },
        { name: "Pidgeotto", height: 1.1, weight: 300, types: ['normal', 'flying'], japaneseName: "ピジョン" },
        { name: "Pidgeot", height: 1.5, weight: 395, types: ['normal', 'flying'], japaneseName: "ピジョット" },
        { name: "Rattata", height: 0.3, weight: 35, types: ['normal'], japaneseName: "コラッタ" },
        { name: "Raticate", height: 0.7, weight: 185, types: ['normal'], japaneseName: "ラッタ" },
        { name: "Spearow", height: 0.3, weight: 20, types: ['normal', 'flying'], japaneseName: "オニスズメ" },
        { name: "Fearow", height: 1.2, weight: 380, types: ['normal', 'flying'], japaneseName: "オニドリル" },
        { name: "Ekans", height: 2.0, weight: 69, types: ['poison'], japaneseName: "アーボ" },
        { name: "Arbok", height: 3.5, weight: 650, types: ['poison'], japaneseName: "アーボック" },
        { name: "Pikachu", height: 0.4, weight: 60, types: ['electric'], japaneseName: "ピカチュウ" },
        { name: "Raichu", height: 0.8, weight: 300, types: ['electric'], japaneseName: "ライチュウ" },
        { name: "Sandshrew", height: 0.6, weight: 120, types: ['ground'], japaneseName: "サンド" },
        { name: "Sandslash", height: 1.0, weight: 295, types: ['ground'], japaneseName: "サンドパン" },
        { name: "Nidoran♀", height: 0.4, weight: 70, types: ['poison'], japaneseName: "ニドラン♀" },
        { name: "Nidorina", height: 0.8, weight: 200, types: ['poison'], japaneseName: "ニドリーナ" },
        { name: "Nidoqueen", height: 1.3, weight: 600, types: ['poison', 'ground'], japaneseName: "ニドクイン" },
        { name: "Nidoking", height: 1.4, weight: 620, types: ['poison', 'ground'], japaneseName: "ニドキング" },
        { name: "Clefairy", height: 0.6, weight: 75, types: ['fairy'], japaneseName: "ピッピ" },
        { name: "Clefable", height: 1.3, weight: 400, types: ['fairy'], japaneseName: "ピクシー" },
        { name: "Vulpix", height: 0.6, weight: 99, types: ['fire'], japaneseName: "ロコン" },
        { name: "Ninetales", height: 1.1, weight: 199, types: ['fire'], japaneseName: "キュウコン" },
        { name: "Jigglypuff", height: 0.5, weight: 55, types: ['normal', 'fairy'], japaneseName: "プリン" },
        { name: "Wigglytuff", height: 1.0, weight: 120, types: ['normal', 'fairy'], japaneseName: "プクリン" },
        { name: "Zubat", height: 0.8, weight: 75, types: ['poison', 'flying'], japaneseName: "ズバット" },
        { name: "Golbat", height: 1.6, weight: 550, types: ['poison', 'flying'], japaneseName: "ゴルバット" },
        { name: "Oddish", height: 0.5, weight: 54, types: ['grass', 'poison'], japaneseName: "ナゾノクサ" },
        { name: "Gloom", height: 0.8, weight: 86, types: ['grass', 'poison'], japaneseName: "クサイハナ" },
        { name: "Vileplume", height: 1.2, weight: 186, types: ['grass', 'poison'], japaneseName: "ラフレシア" },
        { name: "Paras", height: 0.3, weight: 54, types: ['bug', 'grass'], japaneseName: "パラス" },
        { name: "Parasect", height: 1.0, weight: 295, types: ['bug', 'grass'], japaneseName: "パラセクト" },
        { name: "Venonat", height: 1.0, weight: 300, types: ['bug', 'poison'], japaneseName: "コンパン" },
        { name: "Venomoth", height: 1.5, weight: 125, types: ['bug', 'poison'], japaneseName: "モルフォン" },
        { name: "Diglett", height: 0.2, weight: 8, types: ['ground'], japaneseName: "ディグダ" },
        { name: "Dugtrio", height: 0.7, weight: 333, types: ['ground'], japaneseName: "ダグトリオ" },
        { name: "Meowth", height: 0.4, weight: 42, types: ['normal'], japaneseName: "ニャース" },
        { name: "Persian", height: 1.0, weight: 320, types: ['normal'], japaneseName: "ペルシアン" },
        { name: "Psyduck", height: 0.8, weight: 196, types: ['water'], japaneseName: "コダック" },
        { name: "Golduck", height: 1.7, weight: 766, types: ['water'], japaneseName: "ゴルダック" },
        { name: "Mankey", height: 0.5, weight: 280, types: ['fighting'], japaneseName: "マンキー" },
        { name: "Primeape", height: 1.0, weight: 320, types: ['fighting'], japaneseName: "オコリザル" },
        { name: "Growlithe", height: 0.7, weight: 190, types: ['fire'], japaneseName: "ガーディ" },
        { name: "Arcanine", height: 1.9, weight: 1550, types: ['fire'], japaneseName: "ウインディ" },
        { name: "Poliwag", height: 0.6, weight: 124, types: ['water'], japaneseName: "ニョロモ" },
        { name: "Poliwhirl", height: 1.0, weight: 200, types: ['water'], japaneseName: "ニョロゾ" },
        { name: "Poliwrath", height: 1.3, weight: 540, types: ['water', 'fighting'], japaneseName: "ニョロボン" },
        { name: "Abra", height: 0.9, weight: 195, types: ['psychic'], japaneseName: "ケーシィ" },
        { name: "Kadabra", height: 1.3, weight: 565, types: ['psychic'], japaneseName: "ユンゲラー" },
        { name: "Alakazam", height: 1.5, weight: 480, types: ['psychic'], japaneseName: "フーディン" },
        { name: "Machop", height: 0.8, weight: 195, types: ['fighting'], japaneseName: "ワンリキー" },
        { name: "Machoke", height: 1.5, weight: 705, types: ['fighting'], japaneseName: "ゴーリキー" },
        { name: "Machamp", height: 1.6, weight: 1300, types: ['fighting'], japaneseName: "カイリキー" },
        { name: "Bellsprout", height: 0.7, weight: 40, types: ['grass', 'poison'], japaneseName: "マダツボミ" },
        { name: "Weepinbell", height: 1.0, weight: 64, types: ['grass', 'poison'], japaneseName: "ウツドン" },
        { name: "Victreebel", height: 1.7, weight: 155, types: ['grass', 'poison'], japaneseName: "ウツボット" },
        { name: "Tentacool", height: 0.9, weight: 455, types: ['water', 'poison'], japaneseName: "メノクラゲ" },
        { name: "Tentacruel", height: 1.6, weight: 550, types: ['water', 'poison'], japaneseName: "ドククラゲ" },
        { name: "Geodude", height: 0.4, weight: 200, types: ['rock', 'ground'], japaneseName: "イシツブテ" },
        { name: "Graveler", height: 1.0, weight: 1050, types: ['rock', 'ground'], japaneseName: "ゴローン" },
        { name: "Golem", height: 1.4, weight: 3000, types: ['rock', 'ground'], japaneseName: "ゴローニャ" },
        { name: "Ponyta", height: 1.0, weight: 300, types: ['fire'], japaneseName: "ポニータ" },
        { name: "Rapidash", height: 1.7, weight: 950, types: ['fire'], japaneseName: "ギャロップ" },
        { name: "Slowpoke", height: 1.2, weight: 360, types: ['water', 'psychic'], japaneseName: "ヤドン" },
        { name: "Slowbro", height: 1.6, weight: 785, types: ['water', 'psychic'], japaneseName: "ヤドラン" },
        { name: "Magnemite", height: 0.3, weight: 60, types: ['electric', 'steel'], japaneseName: "コイル" },
        { name: "Magneton", height: 1.0, weight: 600, types: ['electric', 'steel'], japaneseName: "レアコイル" },
        { name: "Farfetch'd", height: 0.8, weight: 150, types: ['normal', 'flying'], japaneseName: "カモネギ" },
        { name: "Doduo", height: 1.4, weight: 392, types: ['normal', 'flying'], japaneseName: "ドードー" },
        { name: "Dodrio", height: 1.8, weight: 852, types: ['normal', 'flying'], japaneseName: "ドードリオ" },
        { name: "Seel", height: 1.1, weight: 900, types: ['water'], japaneseName: "パウワウ" },
        { name: "Dewgong", height: 1.7, weight: 1200, types: ['water', 'ice'], japaneseName: "ジュゴン" },
        { name: "Grimer", height: 0.9, weight: 300, types: ['poison'], japaneseName: "ベトベター" },
        { name: "Muk", height: 1.2, weight: 300, types: ['poison'], japaneseName: "ベトベトン" },
        { name: "Shellder", height: 0.3, weight: 40, types: ['water'], japaneseName: "シェルダー" },
        { name: "Cloyster", height: 1.5, weight: 1325, types: ['water', 'ice'], japaneseName: "パルシェン" },
        { name: "Electrode", height: 1.2, weight: 666, types: ['electric'], japaneseName: "マルマイン" },
        { name: "Exeggcute", height: 0.4, weight: 25, types: ['grass', 'psychic'], japaneseName: "タマタマ" },
        { name: "Exeggutor", height: 2.0, weight: 1200, types: ['grass', 'psychic'], japaneseName: "ナッシー" },
        { name: "Cubone", height: 0.4, weight: 65, types: ['ground'], japaneseName: "カラカラ" },
        { name: "Marowak", height: 1.0, weight: 450, types: ['ground'], japaneseName: "ガラガラ" },
        { name: "Hitmonlee", height: 1.5, weight: 498, types: ['fighting'], japaneseName: "サワムラー" },
        { name: "Hitmonchan", height: 1.4, weight: 502, types: ['fighting'], japaneseName: "エビワラー" },
        { name: "Lickitung", height: 1.2, weight: 655, types: ['normal'], japaneseName: "ベロリンガ" },
        { name: "Koffing", height: 0.6, weight: 10, types: ['poison'], japaneseName: "ドガース" },
        { name: "Weezing", height: 1.2, weight: 95, types: ['poison'], japaneseName: "マタドガス" },
        { name: "Rhyhorn", height: 1.0, weight: 1150, types: ['ground', 'rock'], japaneseName: "サイホーン" },
        { name: "Rhydon", height: 1.9, weight: 1200, types: ['ground', 'rock'], japaneseName: "サイドン" },
        { name: "Chansey", height: 1.1, weight: 346, types: ['normal'], japaneseName: "ラッキー" },
        { name: "Tangela", height: 1.0, weight: 350, types: ['grass'], japaneseName: "モンジャラ" },
        { name: "Kangaskhan", height: 2.2, weight: 800, types: ['normal'], japaneseName: "ガルーラ" },
        { name: "Horsea", height: 0.4, weight: 80, types: ['water'], japaneseName: "タッツー" },
        { name: "Seadra", height: 1.2, weight: 250, types: ['water'], japaneseName: "シードラ" },
        { name: "Goldeen", height: 0.6, weight: 150, types: ['water'], japaneseName: "トサキント" },
        { name: "Seaking", height: 1.3, weight: 390, types: ['water'], japaneseName: "アズマオウ" },
        { name: "Staryu", height: 0.8, weight: 345, types: ['water'], japaneseName: "ヒトデマン" },
        { name: "Starmie", height: 1.1, weight: 800, types: ['water', 'psychic'], japaneseName: "スターミー" },
        { name: "Mr. Mime", height: 1.3, weight: 545, types: ['psychic', 'fairy'], japaneseName: "バリヤード" },
        { name: "Scyther", height: 1.5, weight: 560, types: ['bug', 'flying'], japaneseName: "ストライク" },
        { name: "Jynx", height: 1.4, weight: 406, types: ['ice', 'psychic'], japaneseName: "ルージュラ" },
        { name: "Electabuzz", height: 1.1, weight: 300, types: ['electric'], japaneseName: "エレブー" },
        { name: "Magmar", height: 1.3, weight: 445, types: ['fire'], japaneseName: "ブーバー" },
        { name: "Pinsir", height: 1.5, weight: 550, types: ['bug'], japaneseName: "カイロス" },
        { name: "Tauros", height: 1.4, weight: 884, types: ['normal'], japaneseName: "ケンタロス" },
        { name: "Magikarp", height: 0.9, weight: 100, types: ['water'], japaneseName: "コイキング" },
        { name: "Gyarados", height: 6.5, weight: 2350, types: ['water', 'flying'], japaneseName: "ギャラドス" },
        { name: "Lapras", height: 2.5, weight: 2200, types: ['water', 'ice'], japaneseName: "ラプラス" },
        { name: "Ditto", height: 0.3, weight: 40, types: ['normal'], japaneseName: "メタモン" },
        { name: "Eevee", height: 0.3, weight: 65, types: ['normal'], japaneseName: "イーブイ" },
        { name: "Vaporeon", height: 1.0, weight: 290, types: ['water'], japaneseName: "シャワーズ" },
        { name: "Jolteon", height: 0.8, weight: 245, types: ['electric'], japaneseName: "サンダース" },
        { name: "Flareon", height: 0.9, weight: 250, types: ['fire'], japaneseName: "ブースター" },
        { name: "Porygon", height: 0.8, weight: 365, types: ['normal'], japaneseName: "ポリゴン" },
        { name: "Omanyte", height: 0.4, weight: 75, types: ['rock', 'water'], japaneseName: "オムナイト" },
        { name: "Omastar", height: 1.0, weight: 350, types: ['rock', 'water'], japaneseName: "オムスター" },
        { name: "Kabuto", height: 0.5, weight: 115, types: ['rock', 'water'], japaneseName: "カブト" },
        { name: "Kabutops", height: 1.3, weight: 405, types: ['rock', 'water'], japaneseName: "カブトプス" },
        { name: "Aerodactyl", height: 1.8, weight: 590, types: ['rock', 'flying'], japaneseName: "プテラ" },
        { name: "Snorlax", height: 2.1, weight: 4600, types: ['normal'], japaneseName: "カビゴン" },
        { name: "Articuno", height: 1.7, weight: 554, types: ['ice', 'flying'], japaneseName: "フリーザー" },
        { name: "Zapdos", height: 1.6, weight: 526, types: ['electric', 'flying'], japaneseName: "サンダー" },
        { name: "Moltres", height: 2.0, weight: 600, types: ['fire', 'flying'], japaneseName: "ファイヤー" },
        { name: "Dratini", height: 1.8, weight: 33, types: ['dragon'], japaneseName: "ミニリュウ" },
        { name: "Dragonair", height: 4.0, weight: 165, types: ['dragon'], japaneseName: "ハクリュー" },
        { name: "Dragonite", height: 2.2, weight: 2100, types: ['dragon', 'flying'], japaneseName: "カイリュー" },
        { name: "Mewtwo", height: 2.0, weight: 1220, types: ['psychic'], japaneseName: "ミュウツー" },
        { name: "Mew", height: 0.4, weight: 40, types: ['psychic'], japaneseName: "ミュウ" },
    ];


    // This loop iterates over each element in the pokemonList array.
    // It uses document.write() to display the name and height of each Pokémon on the webpage.
    // The loop runs as long as the index i is less than the length of the pokemonList array.
    // Inside the loop, pokemonList[i] accesses each Pokémon object, and the name and height properties are concatenated to form a string that is written to the document.

    /* for (let i = 0; i < pokemonList.length; i++) {
        
        // Display the name and height of each Pokémon
        document.write(pokemonList[i].name + " (Height: " + pokemonList[i].height + "m)");
    
        // Check if the height is above a certain threshold
        if (pokemonList[i].height >= 2.0) {
            document.write(" - Wow, that's big!");
        }
    
        // Add a line break after each Pokémon
        document.write("<br>");
    } */

    // Part 1: forEach() Loops
    document.write('<ul>'); // Opening <ul> tag

    pokemonList.forEach(function (pokemon) {
        // Display the name and height of each Pokémon as list items
        document.write('<li>' + pokemon.name + " (Height: " + pokemon.height + "m)");

        if (pokemon.height >= 2.0) {
            document.write(" - Wow, that's big!");
        }

        document.write('</li>'); // Closing </li> tag

    });

    document.write('</ul>'); // Closing </ul> tag

    // Part 2: IIFE
    /*  let pokemonRepository = (function() {
       let pokemonList = [];
     
       function getAll() {
         return pokemonList;
       }
     
       function add(pokemon) {
         if (typeof pokemon === 'object') {
           pokemonList.push(pokemon);
         } else {
           console.error('Only objects can be added to the pokemonList.');
         }
       }
     
       return {
         getAll: getAll,
         add: add
       };
     })(); */

    // Wrap pokemonList array in an IIFE

    let repository = [];

    // Public functions
    return {
        getAll: function () {
            return repository;
        },
        add: function (pokemon) {
            if (typeof pokemon === 'object' && Object.keys(pokemon).length === 3) {
                repository.push(pokemon);
            } else {
                console.error('Invalid pokemon data:', pokemon);
            }
        },
        findPokemonByName: function (name) {
            return repository.filter(function (pokemon) {
                return pokemon.name === name;
            });
        }
    };
})();