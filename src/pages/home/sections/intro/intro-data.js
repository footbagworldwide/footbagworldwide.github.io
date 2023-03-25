import hackySackIcon from '../../../../assets/images/footbag-games/icon_hackysack_white.svg';
import freestyleIcon from '../../../../assets/images/footbag-games/icon_freestyle_white.svg';
import netIcon from '../../../../assets/images/footbag-games/icon_net_white.svg';

const footbagGames = [
	{
		title: "HACKY SACK",
		imagePath: hackySackIcon,
		description: "Hacky sack is the original and most well-known footbag game. Fun and easy to pick-up; grab a bag with some friends, and keep it off the ground together.",
		route: "games/kicking"
	},
	{
		title: "FREESTYLE FOOTBAG",
		imagePath: freestyleIcon,
		description: "Freestyle footbag is a fast-paced, creative, and technical sport centered around doing tricks with a footbag and your legs. Great for exercising the body and the mind.",
		route: "games/freestyle"
	},
	{
		title: "FOOTBAG NET",
		imagePath: netIcon,
		description: "Footbag net is an acrobatic sport played over a net and using only your feet. Play solo or with a partner for an intense competitive experience.",
		route: "games/net"
	}
];

export { footbagGames };
