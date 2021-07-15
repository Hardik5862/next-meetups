import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetup() {
  function addMeetupHandler(meetupData) {
    console.log(meetupData);
  }

  return <NewMeetupForm onAddMeetup />;
}

export default NewMeetup;
