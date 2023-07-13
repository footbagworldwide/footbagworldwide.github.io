import hackySackIcon_green from '../../assets/images/games/hackysack/icon_hackysack_green.svg';
import hackySackIcon_white from '../../assets/images/games/hackysack/icon_hackysack_white.svg';
import hackySackVideo_webm from '../../assets/images/games/hackysack/video_hackysack.webm';
import hackySackVideo_ogv from '../../assets/images/games/hackysack/video_hackysack.ogv';

import twoSquareIcon_White from '../../assets/images/games/square/icon_twosquare_white.svg';
import twoSquareIcon_Green from '../../assets/images/games/square/icon_twosquare_green.svg';
import twoSquareVideo from '../../assets/images/games/square/video_4square.webm';

import golfIcon_White from '../../assets/images/games/golf/icon_golf_white.svg';
import golfIcon_Green from '../../assets/images/games/golf/icon_golf_green.svg';
import golfVideo from '../../assets/images/games/golf/video_golf.webm'

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
  videos: [
    hackySackVideo_webm,
    hackySackVideo_ogv
  ],
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
  video: twoSquareVideo,
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
  video: golfVideo,
  description: {
    long_html: getGolfDescriptionHtml()
  },
  howToPlay: {
    resources: [
      {
        description: 'Rules',
        link: 'http://www.footbag.org/rules/chapter/400'
      }
    ]
  }
};

export { kickingGamesData, hackySackData, twoSquareData, golfData };
