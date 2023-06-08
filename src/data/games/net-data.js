import netIcon_green from '../../assets/images/games/icon_net_green.svg';
import netIcon_white from '../../assets/images/games/icon_net_white.svg';
import bagIcon from '../../assets/images/icons/freestyle-page/freestyle-bag.svg';
import shoeIcon from '../../assets/images/icons/freestyle-page/freestyle-shoe.svg';
import listIcon from '../../assets/images/icons/freestyle-page/trick-list.svg';
import { VideoType } from "../../components/video/video.js";

function getDescriptionHtml() {
  return (
    <>
      <p>
        Footbag Net is played on a badminton court over a 5 feet high net. Players volley the footbag back and forth over the net using only their feet
        or any part of their lower leg (i.e. below the knee). Footbag Net combines the court strategy of beach-volleyball, jumping and kicking skills
        from martial arts and elements from tennis as serves must be diagonal. Players demonstrate remarkable agility by spiking the footbag over the net,
        using any part of the foot (toe, sole, inside or outside). Defending spikes can be done either by digging shots before the footbag hits the ground
        or blocking spikes in the air with amazing foot-to-foot battles over the net.
      </p>

      <p>
        Footbag Net is a recreational activity and a competitive sport. Competitions are held throughout the year almost all over the world. Play in Footbag
        Net is very similar to <a href="https://en.wikipedia.org/wiki/Sepak_Takraw" target="_blank" rel="noreferrer">Sepak Takraw</a> and shuttlecock. However,
        in Footbag Net, it is an "upper-body foul" if the footbag touches any part of a player's body above the shin.
      </p>
    </>
  );
}

function getHowToPlayHtml() {
  return (
    <>
      Footbag Net is a great way to exercise due to the countless kicking drills. All you need is a footbag net bag and a mostly plane surface. For basic
      kicks and a first approach to the sport you can wear casual clothes, shoes with flat surfaces and all you need is a footbag net bag. It\'s much more
      fun to practice your basic kicks with at least one partner as you can attempt countless kicking drills.
    </>
  );
}

function getCompetitionHtml() {
  return (
    <>
      <p>Footbag Net can be played singles (1 vs 1), doubles (2 vs 2) or mixed doubles.</p>

      <p>There are 2 scoring systems:</p>
      <p>1. Rally scoring: the winner of every rally will be awarded 1 point.</p>
      <p>2. Sideout scoring: a player/team must be serving to score (similar to the old scoring system in volleyball).</p>
      <p>
        Footbag net games can be played to 11, 15 or 21 points and usually matches are played best of 3 or 5 games.
        Each game must be won with at least 2 points difference.
      </p>
    </>
  );
}

const netData = {
  title: 'FOOTBAG NET',
  title_short: 'NET',
  icon: netIcon_white,
  icon_withBackground: netIcon_green,
  pageRoute: '/games/net',
  gif: "https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif",
  description: {
    short: "Footbag net is an acrobatic sport played over a net and using only your feet. Play solo or with a partner for an intense competitive experience.",
    long_html: getDescriptionHtml()
  },
  howToPlay: {
    description_html: getHowToPlayHtml(),
    resources: [
      {
        icon: bagIcon,
        description: 'Where to buy footbags'
      },
      {
        icon: shoeIcon,
        description: 'Where to buy footbag shoes'
      },
      {
        icon: listIcon,
        description: 'Trick list'
      },
    ]
  },
  competition: {
    description_html: getCompetitionHtml(),
    events: [
      {
        title: 'SINGLES',
        description: 'In singles, each player has a maximum of 2 kicks to return the footbag over the net into the opponent\'s side of the court. The best-case scenario is that a player uses his 1st kick as a set to spike the footbag with his 2nd kick into the opponent\'s court, or he chooses to return the footbag with his 1st kick. Frequently players are chasing the footbag and using their 2 kicks to return the footbag.',
        video:  {
          // worlds 2022
          type: VideoType.Youtube,
          id: 'SzroZ78NKQs'
        }
      },
      {
        title: 'DOUBLES',
        description: 'In doubles, teams of two players on opposing sides of the net have a total of three kicks to return the footbag to the opposite side. In addition, each team must alternate kicks, meaning the same player may not kick the footbag twice in a row before returning the footbag to the opposite side. It is not necessary for a team to use all three kicks to return the footbag to the opposite side of the net (they may return in one, two, or three kicks; so long as they alternate).',
        video:  {
          // worlds 2022
          type: VideoType.Youtube,
          id: 'SzroZ78NKQs'
        }
      }
    ]
  }
};

export default netData;
