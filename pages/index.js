import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    name: "First meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Castelli.JPG/1280px-Castelli.JPG",
    address: "new city, pandora, 22342",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    name: "Second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Castelli.JPG/1280px-Castelli.JPG",
    address: "citadel, pandora, 22352",
    description: "This is a second meetup!",
  },
];

function Home() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default Home;
