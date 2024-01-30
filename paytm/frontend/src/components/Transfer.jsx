import React from "react";

import {
  Form,
  useActionData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";

const Transfer = () => {
  const [searchParams] = useSearchParams();
  const actionData = useActionData();
  // const navigation = useNavigation();
  // const sendingMoney = navigation.state === "submitting";
  // console.log("searchparam", searchParams);
  // console.log("Search params .get name", searchParams.get("name"));
  // console.log("Search params .get id", searchParams.get("id"));
  // console.log("action data", actionData);
  return (
    <div>
      <h1 className="font-bold text-4xl mb-4 px-4">Send Money</h1>
      <div className="flex w-full items-center gap-4">
        <div className="flex items-center justify-center rounded-full bg-stone-50 w-10 h-10 text-black font-semibold text-xl">
          {searchParams.get("name")?.[0].toUpperCase()}
        </div>
        <h2 className="text-2xl font-semibold">{searchParams.get("name")}</h2>
      </div>
      <Form
        method="post"
        // action="/transfer"
        className="flex flex-col gap-2 w-full"
      >
        {/* {actionData && (
					<p className="text-red-500 font-semibold">
						{actionData} :(
					</p>
				)} */}
        <label className="w-full" htmlFor="amount">
          Enter amount (in Rs.)
        </label>
        <input
          className="px-2 py-2 rounded-md shadow-lg w-full"
          type="number"
          name="amount"
          id="amount"
          required
          step="1"
          min="1"
          placeholder="Positive Integer"
        />
        <button className="bg-white font-bold w-full text-black rounded-md py-2 transition-all transform hover:bg-emerald-300 active:translate-y-0.5 shadow-none">
          Initiate Transfer
        </button>
      </Form>
    </div>
  );
};

export default Transfer;
