import freestyleIcon_green from '../../assets/images/games/icon_freestyle_green.svg';
import freestyleIcon_white from '../../assets/images/games/icon_freestyle_white.svg';
import bagIcon from '../../assets/images/icons/freestyle-page/freestyle-bag.svg';
import shoeIcon from '../../assets/images/icons/freestyle-page/freestyle-shoe.svg';
import listIcon from '../../assets/images/icons/freestyle-page/trick-list.svg';
import { VideoType } from "../../components/video/video.js";

function getDescriptionHtml() {
  return (
    <>
      Freestyle Footbag is a footbag sport where players demonstrate their abilities by performing
      <strong className="highlighted-description"> sequences of acrobatic tricks</strong>. Tricks flow
      naturally from one to the next, creating flowing and free-form strings and combos. Tricks
      are created by combining different components between moments when the bag touches the body, such as
      <strong className="highlighted-description"> spins</strong>,
      <strong className="highlighted-description"> dexterities</strong> (circling the bag with a leg),
      or <strong className="highlighted-description">ducking</strong> the bag with the head and neck.
      The list of tricks is nearly endless and can be combined in any order, leading to a limitless
      variety of combos and styles.
    </>
  );
}

function getHowToPlayHtml() {
  return (
    <>
      <p>
        Practicing freestyle footbag is like having a GYM in your pocket! When first learning the basics of the sport
        all you is some casual clothes, shoes, and a FOOTBAG!
      </p>
      <p>
        Once you gain experience and begin to learn more difficult tricks, you will need equipment suited for the sport. 
        You should wear athletic clothes, and purchase a professional footbag and shoes that will help you play your best.
      </p>
    </>
  );
}

function getCompetitionHtml() {
  return (
    <>
      <p>
        Freestyle footbag is a great way to esercise due to its versability and can be practiced anywhere and anytime.
        However, freestyle footbag is not only a hobby, but has been a competitive Sport since 1979, when the first
        World Footbag Championships where held in Portland, Oregon (USA). During a freestyle footbag event, there are
        many competitive categories that are held.
      </p>
      <p>Here are some examples:</p>
    </>
  );
}

const freestyleData = {
  title: 'FREESTYLE FOOTBAG',
  title_short: 'FREESTYLE',
  icon: freestyleIcon_white,
  icon_withBackground: freestyleIcon_green,
  pageRoute: '/games/freestyle',
  gif: "https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif",
  description: {
    short: "Freestyle footbag is a fast-paced, creative, and technical sport centered around doing tricks with a footbag and your legs. Great for exercising the body and the mind.",
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
        title: 'ROUTINE',
        description: 'Routine is a timed event in which players choreograph a freestyle footbag performance to music. Competitors are judged on both their artistic and technical abilities.',
        video:  {
          // worlds 2020 Yosshi qualify routine
          type: VideoType.Youtube,
          id: 'Z-KkyOpoBhM'
        },
        rulesLink: "https://docs.google.com/document/d/1I1R08D9Dxh7Akyv75S5bqGsEcbf8MWUQrufwhrGs1GM/edit?usp=drive_link"
      },
      {
        title: 'CIRCLE',
        description: 'Circle takes the traditional way that freestyle footbag is played with a group a puts a competitive spin on it. Players take turns with the bag to show off their technical skills in direct competition with each other.',
        video:  {
          // worlds 2017 circle final
          type: VideoType.Youtube,
          id: 'aMr5e5wlgeE'
        }
      },
      {
        title: 'SICK 3',
        description: 'Sick 3 is freestyle footbag\'s version of a best trick competition. Players combine their three best tricks and are judged on their difficulty, variety, and execution.',
        video:  {
          // worlds 2022 sick 3 final
          type: VideoType.Youtube,
          id: 'h6F0aPIpC1o'
        },
        rulesLink: "https://docs.google.com/document/d/1STzVruVdKn-YHXLM9KcT5fRMr4htuBA5ru7_TcBAiMM/edit?usp=drive_link"
      },
      {
        title: 'SHRED 30',
        description: 'Shred 30 is a short, timed, and scored event which tests competitor\s abilities to quickly link together as many difficult tricks as they can before their time is up.',
        video:  {
          // worlds 2019 Taishi shred 30
          type: VideoType.Youtube,
          id: 'U2wuykwGbQQ'
        },
        rulesLink: "https://docs.google.com/document/d/1TulSRHHuCiZx15-_Kwf_0pl631EpS9lo0dUfFru24wo/edit?usp=drive_link"
      }
    ]
  }
};

export default freestyleData;
