import hackySackIcon_green from '../../assets/images/games/icon_hackysack_green.svg';
import hackySackIcon_white from '../../assets/images/games/icon_hackysack_white.svg';

import twoSquareIcon_White from '../../assets/images/games/icon_twosquare_white.svg';
import twoSquareIcon_Green from '../../assets/images/games/icon_twosquare_green.svg';

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
      Odit dolupti sitatias destio eaquiandunde pre mosam iasinctem. Expla vitate nis doluptas aceria exeriorumet occullant. Idestoris duciaes tioratiati odipita siti bearum et int. Soluptasi unte sectoremodit vellupt iorrorero et faceaquatia voloreperro tenihit eicid.
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
  },
  howToPlay: {
    resources: [
      {
        description: 'more info 1',
        link: 'https://www.google.com'
      },
      {
        description: 'more info 2',
        link: 'https://www.google.com'
      },
      {
        description: 'more info 3',
        link: 'https://www.google.com'
      }
    ]
  }
};

function getTwoSquareDescriptionHtml() {
  return (
    <>
      Odit dolupti sitatias destio eaquiandunde pre mosam iasinctem. Expla vitate nis doluptas aceria exeriorumet occullant. Idestoris duciaes tioratiati odipita siti bearum et int. Soluptasi unte sectoremodit vellupt iorrorero et faceaquatia voloreperro tenihit eicid.
    </>
  );
}

const twoSquareData = {
  title: 'TWO/FOUR SQUARE',
  title_short: '2 SQUARE',
  icon: twoSquareIcon_White,
  icon_withBackground: twoSquareIcon_Green,
  pageRoute: kickingGamesData.pageRoute,
  gif: "https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif",
  description: {
    long_html: getTwoSquareDescriptionHtml()
  },
  howToPlay: {
    resources: [
      {
        description: 'more info 1',
        link: 'https://www.google.com'
      },
      {
        description: 'more info 2',
        link: 'https://www.google.com'
      },
      {
        description: 'more info 3',
        link: 'https://www.google.com'
      }
    ]
  }
};

function getGolfDescriptionHtml() {
  return (
    <>
      Odit dolupti sitatias destio eaquiandunde pre mosam iasinctem. Expla vitate nis doluptas aceria exeriorumet occullant. Idestoris duciaes tioratiati odipita siti bearum et int. Soluptasi unte sectoremodit vellupt iorrorero et faceaquatia voloreperro tenihit eicid.
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
        description: 'more info 1',
        link: 'https://www.google.com'
      },
      {
        description: 'more info 2',
        link: 'https://www.google.com'
      },
      {
        description: 'more info 3',
        link: 'https://www.google.com'
      }
    ]
  }
};

export { kickingGamesData, hackySackData, twoSquareData, golfData };
