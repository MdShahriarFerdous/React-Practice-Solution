import React from "react";
import Card from "./components/Card";
import contacts from "../src/contact";

const createCard = (contact, index) => {
	return (
		<div>
			<Card
				key={index}
				name={contact.name}
				url={contact.imgURL}
				phone={contact.phone}
				email={contact.email}
			/>
		</div>
	);
};

function App() {
	return (
		<div>
			<h1 className="heading">My Contacts</h1>
			{/* solution 1
			<Card
				name={contacts[0].name}
				url={contacts[0].imgURL}
				phone={contacts[0].phone}
				email={contacts[0].email}
			/>
			<Card
				name={contacts[1].name}
				url={contacts[1].imgURL}
				phone={contacts[1].phone}
				email={contacts[1].email}
			/>
			<Card
				name={contacts[2].name}
				url={contacts[2].imgURL}
				phone={contacts[2].phone}
				email={contacts[2].email}
			/> */}

			{/* Solution 2
			{contacts.map((contact, index) => {
				return (
					<Card
						key={index}
						name={contact.name}
						url={contact.imgURL}
						phone={contact.phone}
						email={contact.email}
					/>
				);
			})} */}

			{contacts.map(createCard)}
		</div>
	);
}

export default App;
