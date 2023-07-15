import netIcon_green from '../../assets/images/games/net/icon_net_green.svg';
import netIcon_white from '../../assets/images/games/net/icon_net_white.svg';
import netVideo_webm from '../../assets/images/games/net/video_net.webm';
import netVideo_mp4 from '../../assets/images/games/net/video_net.mp4';
import netVideo_thumbnail from '../../assets/images/games/net/thumbnail_net.gif';

import bagIcon from '../../assets/images/icons/freestyle-page/freestyle-bag.svg';
import shoeIcon from '../../assets/images/icons/freestyle-page/freestyle-shoe.svg';
import { VideoType } from "../../components/video/video.js";

function getDescriptionHtml() {
  return (
    <>
      Footbag Net is an <strong className="highlighted-description">acrobatic</strong> sport played on a badminton court over a 5 foot high net.
      Players volley the footbag back and forth over the net using only their feet or any part of their lower leg (below the knee). Footbag Net combines
      the <strong className="highlighted-description">court strategy</strong> of beach volleyball, jumping and kicking skills from martial arts, and elements from tennis. Players demonstrate remarkable agility
      by <strong className="highlighted-description">flying through the air</strong> to spike the footbag over the net, leading to amazing foot-to-foot battles as defenders attempt to block it.
      <br/>
      <br/>
      Footbag Net is a recreational activity and a competitive sport. Competitions are held throughout the year almost all over the world. Play in Footbag
      Net is very similar to <a href="https://en.wikipedia.org/wiki/Sepak_Takraw" target="_blank" rel="noreferrer">Sepak Takraw</a> and shuttlecock. However,
      in Footbag Net, it is an "upper-body foul" if the footbag touches any part of a player's body above the shin.
    </>
  );
}

function getHowToPlayHtml() {
  return (
    <>
      Footbag Net is a great way to exercise due to the countless kicking drills. For basic kicks and a first approach to the sport
      you can wear casual clothes, shoes with flat surfaces and all you need is a net footbag. It's much more fun to practice your
      basic kicks with at least one partner as you can attempt countless kicking drills.
    </>
  );
}

function getCompetitionHtml() {
  return (
    <>
      <p>Footbag Net can be played singles (1 vs 1), doubles (2 vs 2), or mixed doubles.</p>

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
  videos: [
    netVideo_webm,
    netVideo_mp4
  ],
  videoThumbnail: netVideo_thumbnail,
  description: {
    short: "Footbag net is an acrobatic sport played over a net and using only the feet to kick the bag. Play solo or with a partner for an intense competitive experience.",
    long_html: getDescriptionHtml()
  },
  howToPlay: {
    description_html: getHowToPlayHtml(),
    resources: [
      {
        icon: bagIcon,
        description: 'Where to buy footbags',
        link: 'https://www.google.com/maps/d/u/1/viewer?ll=29.266980342843063%2C20.834407986080684&z=2&mid=1LRMnbHRgoKWllqSTuKL4RvfGmUmYDL6A'
      },
      {
        icon: shoeIcon,
        description: 'Where to buy footbag net shoes',
        link: 'http://footbag.org/reference/-/Footbag_Net#Equipment'
      }
    ]
  },
  competition: {
    description_html: getCompetitionHtml(),
    events: [
      {
        title: 'SINGLES',
        description:
          'In singles, each player has a maximum of 2 kicks to return the footbag over ' +
          'the net into the opponent\'s side of the court. The best-case scenario is that ' +
          'a player\'s first kick is a set so that they can spike the footbag with the second kick into the ' +
          'opponent\'s court, or chooses to return the footbag with the first kick. Frequently ' +
          'players are chasing the footbag and using their two kicks to return the footbag.',
        video:  {
          // worlds 2019 singles finals
          type: VideoType.Youtube,
          id: 'Rep-1rQbX-o'
        },
        rulesLink: 'http://footbag.org/rules/chapter/300#303'
      },
      {
        title: 'DOUBLES',
        description:
          'In doubles, teams of two players on opposing sides of the net have a total of three ' +
          'kicks to return the footbag to the opposite side. In addition, each team must alternate ' +
          'kicks, meaning the same player may not kick the footbag twice in a row before returning ' +
          'the footbag to the opposite side. It is not necessary for a team to use all three kicks to ' +
          'return the footbag to the opposite side of the net.',
        video:  {
          // worlds 2019 mixed doubles finals
          type: VideoType.Youtube,          
          id: 'lcDP3JGvkP0'
        },
        rulesLink: 'http://footbag.org/rules/chapter/300#303'
      }
    ]
  }
};

export default netData;
