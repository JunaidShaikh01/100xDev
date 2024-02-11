import React from "react";

import { redirect } from "react-router-dom";
import axios from "axios";
import Transfer from "../components/Transfer/Transfer";

export default function TransferPage() {
  return <Transfer />;
}

export const action = async ({ request }) => {
  const data = await request.formData();
  const amount = data.get("amount");

  const searchParams = new URL(request.url).searchParams;
  const id = searchParams.get("id");

  const token = localStorage.getItem("token");

  console.log("amount: ", amount);
  console.log("id: ", id);
  console.log("token:", token);

  try {
    console.log("Runnig 1");
    const response = await axios.post(
      "http://localhost:3000/api/v1/account/transfer",

      { to: id, amount },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    console.log(response);
    // console.log(data.message);
    return redirect("/dashboard");
  } catch (error) {
    //     // console.log(error.response.data.message);
    return error;
  }
};
