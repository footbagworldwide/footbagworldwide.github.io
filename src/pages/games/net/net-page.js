import SingleSportGamePage from "../single-sport-games/single-sport-game-page.js";
import { freestyleData, kickingGamesData, netData } from "../footbag-games.data.js";
import bagIcon from '../../../assets/images/icons/freestyle-page/freestyle-bag.svg';
import shoeIcon from '../../../assets/images/icons/freestyle-page/freestyle-shoe.svg';
import listIcon from '../../../assets/images/icons/freestyle-page/trick-list.svg';
import { VideoType } from "../../../components/video/video.js";

function getDescriptionHtml() {
  return (
    <>
      Freestyle Footbag is a footbag sport where players demonstrate their abilities by performing sequences of acrobatic tricks. The ending position of the bag on one trick becomes the starting position of the bag on the next trick. Tricks are created by combining different components between contacts (stalls or kicks, usually stalls). Components can be spins, dexterities (wrapping a leg around the bag in mid-air), or ducks (letting the bag pass a few inches above the neck). Contacts are usually on the inside of the foot behind the opposite support leg (clipper stall) or on the toe, however many inventive possibilities remain and are used to create a near-endless list of tricks.
    </>
  );
}

function getHowToPlayHtml() {
  return (
    <>
      <p>Practicing freestyle footbag is like having a GYM in your pocket! For basic tricks and a first approach to the sport, you can wear casual clothers and shoes and a FOOTBAG!</p>
      <p>Once you gain experience and the tricks you aim are harder, you should purchase a professional footbag and wear sportif clothes. There are also shoes more suitable for footbag practice.</p>
    </>
  );
}

function getCompetitionDescriptionHtml() {
  return (
    <>
      <p>Freestyle footbag is a great way to esercise due to its versability. You can practice it everywhere in any time. However, it is not only a hobby. Footbag is a competitive Sport since 1979, when the first World Footbag Championships where held in Oregon (USA). There are many competitive categories during a freestyle championships.</p>
      <p>Here there are some examples:</p>
    </>
  );
}

const netSport = {
  title: netData.title,
  icon: netData.icon_green,
  otherGames: [ freestyleData, kickingGamesData ],
  gif: "https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif",
  descriptionHtml: getDescriptionHtml(),
  howToPlayHtml: getHowToPlayHtml(),
  howToPlayItems: [
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
  ],
  competitionDescriptionHtml: getCompetitionDescriptionHtml(),
  competitiveEvents: [
    {
      title: 'SINGLES',
      description: 'Odit dolupti sitatias destio eaquiandunde pre mosam. Expla aceria exeriorumet occullant. Et ommodigenis eatet officid et auditem repuda doluptae num cus, quaspis es atate. Conseque magnihi llaboriberit et laut auditat acepudi ra vid quo coreprehenis dolorehenim doloriberio odi voluptas dellectur.',
      video:  {
        // worlds 2022
        type: VideoType.Youtube,
        id: 'SzroZ78NKQs'
      }
    },
    {
      title: 'DOUBLES',
      description: 'Odit dolupti sitatias destio eaquiandunde pre mosam. Expla aceria exeriorumet occullant. Et ommodigenis eatet officid et auditem repuda doluptae num cus, quaspis es atate. Conseque magnihi llaboriberit et laut auditat acepudi ra vid quo coreprehenis dolorehenim doloriberio odi voluptas dellectur.',
      video:  {
        // worlds 2022
        type: VideoType.Youtube,
        id: 'SzroZ78NKQs'
      }
    }
  ]
};

function NetPage() {
  return (
    <SingleSportGamePage singleSportGame={netSport} />
  );
}

export default NetPage;
