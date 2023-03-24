import {
  Card,
  CardContent,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";
import './Reviews.scss';

type Props = {};

type Review = {
  name: string;
  text: string;
};

const Reviews = (props: Props) => {
  const arrReviews: Review[] = [
    {
      name: "Max",
      text: "It's incredible!! if you click on the author, you will go to his page. I'm glad I saw this post",
    },
    {
      name: "Anna",
      text: "I really liked the author, he is sexy",
    },
  ];

  const [reviews, setReviews] = useState<Review[]>(arrReviews);
  const [newReview, setNewReview] = useState<Review>({
    name: "",
    text: "",
  });

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewReview((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
  };

  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewReview((prevState) => ({
      ...prevState,
      text: e.target.value,
    }));
  };

  const onSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newReview.name === "" || newReview.text === "") {
      alert("All fields are required!");
    } else {
      setNewReview({
        name: "",
        text: "",
      });

      setReviews((prevState) => {
        return [...prevState, newReview];
      });
    }
  };

  return (
    <div className="rev">
      <h3 className="rev-title">Reviews</h3>
      <div className="revi">
        {reviews.map((item, i) => (
          <Card
            variant="outlined"
            sx={{
              margin: "20px 0",
            }}
            key={i}
          >
            <CardContent>
              <div>{item.name}:</div>
              <div>{item.text}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      <form onSubmit={onSend}>
        <h3 className="rev-title">Please leave a review</h3>
        <div>
          <TextField
            label="Name"
            sx={{
              margin: "20px 0 0",
            }}
            value={newReview.name}
            onChange={handleName}
          />
        </div>
        <br />
        <div>
          <TextField
            multiline
            minRows={3}
            label="Text"
            sx={{
                width: "350px",
              margin: "0 0 20px",
            }}
            value={newReview.text}
            onChange={handleText}
          />
        </div>
        <Button variant="contained" type="submit">
          Send
        </Button>
      </form>
    </div>
  );
};

export default Reviews;
