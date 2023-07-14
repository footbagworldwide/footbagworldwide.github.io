import freestyleIcon_green from '../../assets/images/games/freestyle/icon_freestyle_green.svg';
import freestyleIcon_white from '../../assets/images/games/freestyle/icon_freestyle_white.svg';
import freestyleVideo_webm from '../../assets/images/games/freestyle/video_freestyle.webm';
import freestyleVideo_mp4 from '../../assets/images/games/freestyle/video_freestyle.mp4';
import freestyleVideo_thumbnail from '../../assets/images/games/freestyle/thumbnail_freestyle.gif';

import bagIcon from '../../assets/images/icons/freestyle-page/freestyle-bag.svg';
import shoeIcon from '../../assets/images/icons/freestyle-page/freestyle-shoe.svg';
import listIcon from '../../assets/images/icons/freestyle-page/trick-list.svg';
import { VideoType } from "../../components/video/video.js";

function getDescriptionHtml() {
  return (
    <>
      Freestyle Footbag is a sport where players show off their skills by performing
      <strong className="highlighted-description"> sequences of acrobatic tricks</strong>. Freestyle tricks
      combine different components, such as <strong className="highlighted-description"> spinning</strong> the
      body, <strong className="highlighted-description">ducking</strong> the bag with the head and neck, and
      <strong className="highlighted-description"> dexterities</strong> (circling the bag with a leg).
      <br/><br/>Tricks are
      linked naturally from one to the next to create <strong className="highlighted-description">flowing, free-form,
      </strong> and <strong className="highlighted-description">expressive</strong> strings and combos. The list of
      tricks is nearly endless and can be combined in any order, leading to a limitless variety of combos and styles.
    </>
  );
}

function getHowToPlayHtml() {
  return (
    <>
      <p>
        Practicing freestyle footbag is like having a GYM in your pocket! When first learning the basics of the sport
        all you need is some casual clothes, shoes, and a FOOTBAG!
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
        Freestyle footbag is a great way to exercise due to its versability and can be practiced anywhere and anytime.
        However, freestyle footbag is not only a hobby, but has been a competitive Sport since 1979, when the first
        World Footbag Championships were held in Portland, Oregon (USA).
      </p>
      <p>Here are some examples of the competitive formats held during a freestyle footbag event:</p>
    </>
  );
}

const freestyleData = {
  title: 'FREESTYLE FOOTBAG',
  title_short: 'FREESTYLE',
  icon: freestyleIcon_white,
  icon_withBackground: freestyleIcon_green,
  pageRoute: '/games/freestyle',
  videos: [
    freestyleVideo_webm,
    freestyleVideo_mp4
  ],
  videoThumbnail: freestyleVideo_thumbnail,
  description: {
    short: "Freestyle footbag is a fast-paced, creative, and technical sport centered around doing tricks with a footbag and the legs. Great for exercising the body and the mind.",
    long_html: getDescriptionHtml()
  },
  howToPlay: {
    description_html: getHowToPlayHtml(),
    resources: [
      {
        icon: bagIcon,
        description: 'Where to buy footbags',
        link: "https://www.google.com/maps/d/u/1/viewer?ll=29.266980342843063%2C20.834407986080684&z=2&mid=1LRMnbHRgoKWllqSTuKL4RvfGmUmYDL6A"
      },
      {
        icon: shoeIcon,
        description: 'Where to buy freestyle footbag shoes',
        link: "https://docs.google.com/spreadsheets/d/11sJNAUOd8lOjcqc0l76r4wlP3mwc7ODS0G55nhdApws/edit#gid=0"
      },
      {
        icon: listIcon,
        description: 'Beginner freestyle tutorials',
        // Anz Trickz "Footbag Getting Started"
        link: "https://www.youtube.com/playlist?list=PLCB1E614589D7B975"
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
        description: 'Circle takes the traditional way that freestyle footbag is played with a group and puts a competitive spin on it. Players take turns with the bag to show off their technical skills in direct competition with each other.',
        video:  {
          // worlds 2017 circle final
          type: VideoType.Youtube,
          id: 'aMr5e5wlgeE'
        },
        rulesLink: "http://footbag.org/rules/chapter/500#507"
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
        description: 'Shred 30 is a short, timed, and scored event which tests competitors\' abilities to quickly link together as many difficult tricks as they can before their time is up.',
        video:  {
          // worlds 2020 Taishi shred 30
          type: VideoType.Youtube,
          id: 'wb75xzvAs68'
        },
        rulesLink: "https://docs.google.com/document/d/1TulSRHHuCiZx15-_Kwf_0pl631EpS9lo0dUfFru24wo/edit?usp=drive_link"
      }
    ]
  }
};

export default freestyleData;
