import freestyleIcon_green from '../../assets/images/games/icon_freestyle_green.svg';
import freestyleIcon_white from '../../assets/images/games/icon_freestyle_white.svg';

import hackySackIcon_green from '../../assets/images/games/icon_hackysack_green.svg';
import hackySackIcon_white from '../../assets/images/games/icon_hackysack_white.svg';

import netIcon_green from '../../assets/images/games/icon_net_green.svg';
import netIcon_white from '../../assets/images/games/icon_net_white.svg';

import twoSquareIcon_White from '../../assets/images/games/icon_twosquare_white.svg';
import twoSquareIcon_Green from '../../assets/images/games/icon_twosquare_green.svg';

import golfIcon_White from '../../assets/images/games/icon_golf_white.svg';
import golfIcon_Green from '../../assets/images/games/icon_golf_green.svg';

const freestyleData = {
  title: 'FREESTYLE FOOTBAG',
  icon_green: freestyleIcon_green,
  icon_white: freestyleIcon_white,
  route: '/games/freestyle',
  description: "Freestyle footbag is a fast-paced, creative, and technical sport centered around doing tricks with a footbag and your legs. Great for exercising the body and the mind."
};

const kickingGamesData = {
  title: 'KICKING GAMES',
  icon_green: hackySackIcon_green,
  icon_white: hackySackIcon_white,
  route: '/games/kicking'
}

const hackySackData = {
  title: 'HACKY SACK',
  icon_green: hackySackIcon_green,
  icon_white: hackySackIcon_white,
  route: kickingGamesData.route,
  description: "Hacky sack is the original and most well-known footbag game. Fun and easy to pick-up; grab a bag with some friends, and keep it off the ground together."
};

const twoSquareData = {
  title: 'TWO/FOUR SQUARE',
  icon_green: twoSquareIcon_Green,
  icon_white: twoSquareIcon_White,
  route: kickingGamesData.route
};

const golfData = {
  title: 'FOOTBAG GOLF',
  icon_green: golfIcon_Green,
  icon_white: golfIcon_White,
  route: kickingGamesData.route
};

const netData = {
  title: 'FOOTBAG NET',
  icon_green: netIcon_green,
  icon_white: netIcon_white,
  route: '/games/net',
  description: "Footbag net is an acrobatic sport played over a net and using only your feet. Play solo or with a partner for an intense competitive experience."
};

export { freestyleData, kickingGamesData, hackySackData, twoSquareData, golfData, netData };
