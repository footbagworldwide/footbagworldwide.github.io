import { freestyleData, kickingGamesData, hackySackData, twoSquareData, golfData, netData } from "../footbag-games.data.js";

const kickingGames = [
	{
		anchor: "hackysack",
		title: hackySackData.title,
		icon_green: hackySackData.icon_green,
		icon_white: hackySackData.icon_white,
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
		title: twoSquareData.title,
		icon_green: twoSquareData.icon_green,
		icon_white: twoSquareData.icon_white,
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
		title: golfData.title,
		icon_green: golfData.icon_green,
		icon_white: golfData.icon_white,
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
  title: kickingGamesData.title,
  otherGames: [ netData, freestyleData],
};

export { kickingGames, kickingGameHeader };
