import hackySackIcon_White from '../../../assets/images/games/icon_hackysack_white.svg';
import hackySackIcon_Green from '../../../assets/images/games/icon_hackysack_green.svg';
import twoSquareIcon_White from '../../../assets/images/games/icon_twosquare_white.svg';
import twoSquareIcon_Green from '../../../assets/images/games/icon_twosquare_green.svg';
import golfIcon_White from '../../../assets/images/games/icon_golf_white.svg';
import golfIcon_Green from '../../../assets/images/games/icon_golf_green.svg';

import freestyleIcon from '../../../assets/images/games/icon_freestyle_green.svg';
import netIcon from '../../../assets/images/games/icon_net_green.svg';

const kickingGames = [
	{
		anchor: "hackysack",
		title: "HACKY SACK",
		icon_green: hackySackIcon_Green,
		icon_white: hackySackIcon_White,
		description: `Odit dolupti sitatias destio eaquiandunde pre mosam iasinctem. Expla vitate nis doluptas
aceria exeriorumet occullant. Idestoris duciaes tioratiati odipita siti bearum et int. Soluptasi
unte sectoremodit vellupt iorrorero et faceaquatia voloreperro tenihit eicid.`,
		gifPath: "https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif",
		links: [
			{
				label: 'more info 1',
				value: 'https://www.google.com'
			},
			{
				label: 'more info 2',
				value: 'https://www.google.com'
			},
			{
				label: 'more info 3',
				value: 'https://www.google.com'
			}
		]
	},
	{
		title: "TWO/FOUR SQUARE",
		icon_green: twoSquareIcon_Green,
		icon_white: twoSquareIcon_White,
		description: `Odit dolupti sitatias destio eaquiandunde pre mosam iasinctem. Expla vitate nis doluptas
aceria exeriorumet occullant. Idestoris duciaes tioratiati odipita siti bearum et int. Soluptasi
unte sectoremodit vellupt iorrorero et faceaquatia voloreperro tenihit eicid.`,
		gifPath: "https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif",
		links: [
			{
				label: 'more info 1',
				value: 'https://www.google.com'
			},
			{
				label: 'more info 2',
				value: 'https://www.google.com'
			},
			{
				label: 'more info 3',
				value: 'https://www.google.com'
			}
		]
	},
	{
		title: "FOOTBAG GOLF",
		icon_green: golfIcon_Green,
		icon_white: golfIcon_White,
		description: `Odit dolupti sitatias destio eaquiandunde pre mosam iasinctem. Expla vitate nis doluptas
aceria exeriorumet occullant. Idestoris duciaes tioratiati odipita siti bearum et int. Soluptasi
unte sectoremodit vellupt iorrorero et faceaquatia voloreperro tenihit eicid.`,
		gifPath: "https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif",
		links: [
			{
				label: 'more info 1',
				value: 'https://www.google.com'
			},
			{
				label: 'more info 2',
				value: 'https://www.google.com'
			},
			{
				label: 'more info 3',
				value: 'https://www.google.com'
			}
		]
	}
];

const kickingGameHeader = {
  title: 'KICKING GAMES',
  otherGames: [
    {
      title: 'FOOTBAG NET',
      icon: netIcon,
      route: '/games/net'
    },
    {
      title: 'FREESTYLE FOOTBAG',
      icon: freestyleIcon,
      route: '/games/freestyle'
    }    
  ],
};

export { kickingGames, kickingGameHeader };
