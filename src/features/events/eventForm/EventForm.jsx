import React from "react";
import { Button, Header, Segment } from "semantic-ui-react";
import cuid from "cuid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createEvent, updateEvent } from "../eventActions";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "../../../app/api/common/form/MyTextInput";
import MyTextArea from "../../../app/api/common/form/MyTextArea";
import MySelectInput from "../../../app/api/common/form/MySelectInput";
import MyDateInput from "../../../app/api/common/form/MyDateInput";
import { categoryData } from "../../../app/api/categoryOptions";

function EventForm({ match, history }) {
  const dispatch = useDispatch();
  const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );

  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };

  // エラーメッセージ（無記入)
  const validationSchema = Yup.object({
    title: Yup.string().required("タイトルを記入して下さい"),
    category: Yup.string().required("カテゴリーを記入して下さい"),
    description: Yup.string().required("内容を記入して下さい"),
    city: Yup.string().required("場所を記入して下さい"),
    venue: Yup.string().required("通りを記入して下さい"),
    date: Yup.string().required("日付を記入して下さい"),
  });

  return (
    <Segment clearing>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          selectedEvent
            ? dispatch(updateEvent({ ...selectedEvent, ...values }))
            : dispatch(
                createEvent({
                  ...values,
                  id: cuid(),
                  hostedBy: "Bob",
                  attendees: [],
                  hostPhotoURL: "/assets/user.png",
                })
              );
          history.push("/events");
        }}
      >
        {({ isSubmitting, dirty, isValid }) => (
          <Form className="ui form">
            <Header sub color="teal" content="Event Details" />

            <MyTextInput name="title" placeholder="Event title" />
            <MySelectInput
              name="category"
              placeholder="Event category"
              options={categoryData}
            />
            <MyTextArea name="description" placeholder="Description" rows={3} />

            <Header sub color="teal" content="Event Location Details" />

            <MyTextInput name="city" placeholder="City" />
            <MyTextInput name="venue" placeholder="Venue" />
            <MyDateInput
              name="date"
              placeholderText="Event date"
              timeFormat="HH:mm"
              showTimeSelect
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm a"
            />

            <Button
              loading={isSubmitting}
              disabled={!isValid || !dirty || isSubmitting}
              type="submit"
              floated="right"
              positive
              content="Submit"
            />
            <Button
              disabled={isSubmitting}
              as={Link}
              to="/events"
              type="submit"
              floated="right"
              content="Cancel"
            />
          </Form>
        )}
      </Formik>
    </Segment>
  );
}

export default EventForm;
