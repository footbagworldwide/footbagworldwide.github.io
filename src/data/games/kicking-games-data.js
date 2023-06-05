import hackySackIcon_green from '../../assets/images/games/icon_hackysack_green.svg';
import hackySackIcon_white from '../../assets/images/games/icon_hackysack_white.svg';

import twoSquareIcon_White from '../../assets/images/games/icon_twosquare_white.svg';
import twoSquareIcon_Green from '../../assets/images/games/icon_twosquare_green.svg';
import twoSquareGif from '../../assets/images/games/gif_twosquare.gif';

import golfIcon_White from '../../assets/images/games/icon_golf_white.svg';
import golfIcon_Green from '../../assets/images/games/icon_golf_green.svg';

const kickingGamesData = {
  title: 'KICKING GAMES',
  title_short: 'KICKING',
  icon: hackySackIcon_white,
  icon_withBackground: hackySackIcon_green,
  pageRoute: '/games/kicking'
}

function getHackySackDescriptionHtml() {
  return (
    <>
      Circle kicking, or more commonly known as "hacky sack" is a fun and casual footbag game
      typically played with a group. The main goal is to keep the footbag off the ground without
      using your hands, passing to other players in the circle, and trying to get everyone together
      kick the bag before it drops. 
    </>
  );
}

const hackySackData = {
  title: 'HACKY SACK',
  title_short: 'HACKY SACK',
  icon: hackySackIcon_white,
  icon_withBackground: hackySackIcon_green,
  pageRoute: kickingGamesData.pageRoute,
  gif: "https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif",
  description: {
    short: "Hacky sack is the original and most well-known footbag game. Fun and easy to pick-up; grab a bag with some friends, and keep it off the ground together.",
    long_html: getHackySackDescriptionHtml()
  }
};

function getTwoSquareDescriptionHtml() {
  return (
    <>
      Two or four (or any number) square takes the classic schoolyard game and combines it
      with footbag. Score points against your opponents by making the bag drop in their square
      and trying to stop it from dropping in your square.
    </>
  );
}

const twoSquareData = {
  title: 'TWO/FOUR SQUARE',
  title_short: '2 SQUARE',
  icon: twoSquareIcon_White,
  icon_withBackground: twoSquareIcon_Green,
  pageRoute: kickingGamesData.pageRoute,
  gif: twoSquareGif,
  description: {
    long_html: getTwoSquareDescriptionHtml()
  },
  howToPlay: {
    resources: [
      {
        description: 'Two Square Rules',
        link: 'https://docs.google.com/document/d/1yaIKMSnp1gHA5vJmYUeqq5K4kQkqQseS9Y9LPHFFz7U/edit'
      },
      {
        description: 'Four Square Rules',
        link: 'https://docs.google.com/document/d/1uvsuTLSKnEsdDmUeQYuvvKFBp-UDos3dnBl9kctFYHY/edit'
      },
      {
        description: 'Four Square Video Tutorial',
        link: 'https://www.youtube.com/watch?v=Q469SW9snoI'
      }
    ]
  }
};

function getGolfDescriptionHtml() {
  return (
    <>
      In the same way disc golf combines traditional golf with disc throwing, this game does the same with 
      footbag. Set up a small course with obstacles and attempt to kick the footbag into the hole in as
      few shots as possible.
    </>
  );
}

const golfData = {
  title: 'FOOTBAG GOLF',
  title_short: 'GOLF',
  icon: golfIcon_White,
  icon_withBackground: golfIcon_Green,
  pageRoute: kickingGamesData.pageRoute,
  gif: "https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif",
  description: {
    long_html: getGolfDescriptionHtml()
  },
  howToPlay: {
    resources: [
      {
        description: 'Rules',
        link: 'https://www.google.com'
      }
    ]
  }
};

export { kickingGamesData, hackySackData, twoSquareData, golfData };
