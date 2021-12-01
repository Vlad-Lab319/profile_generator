const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profile = {
  name: 'name',
  activity: 'activity',
  music: 'music',
  meal: 'meal',
  dish: 'dish',
  sport: 'sport',
  superpower: 'superpower'
}

// rl.question('What is your name? ', (answer) => {profile.name = answer;
//   console.log(`Thank you for your valuable feedback: ${profile.name}`);
 
// });

rl.question('What is your name? ', (answer1) => {profile.name = answer1;
  rl.question('What is your favorite music? ', (answer2) => {profile.music = answer2;
    rl.question('What is your favorite activity? ', (answer3) => {profile.activity = answer3;
      rl.question('What is your favorite meal? ', (answer4) => {profile.meal = answer4;
        rl.question('What is your favorite dish? ', (answer5) => {profile.dish = answer5;
          rl.question('What is your favorite sport? ', (answer6) => {profile.sport = answer6;
            rl.question('What is your favorite superpower? ', (answer7) => {profile.superpower = answer7;

    // console.log(`Thank you for your valuable feedback: name ${profile.name} music ${profile.music} activity `);
    console.log(`${profile.name} loves listening to ${profile.music} while ${profile.activity}, devouring ${profile.dish} for ${profile.meal}, prefers ${profile.sport} over any other sport, and is amazing at ${profile.superpower}.`)
    
    rl.close();
          });
        });
      });
    });
  });
});
  
});

// https://stackoverflow.com/questions/36540996/how-to-take-two-consecutive-input-with-the-readline-module-of-node-js