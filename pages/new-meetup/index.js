import { useRouter } from "next/router";
import { Fragment } from "react";
import Head from "next/head";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetup() {
  const router = useRouter();

  async function addMeetupHandler(meetupData) {
    const res = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    router.replace("/");
  }

  return (
    <Fragment>
      <Head>
        <title>Add a new meetup</title>
        <meta
          name="description"
          content="Add your meetups and create amazing networking opportunities"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}

export default NewMeetup;
