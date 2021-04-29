import React from "react";
import classes from "./ProductDescription.module.scss";
import { Tabs, Card } from "../../../index";
import productDescriptionData from "../../../../fixtures/productDescription.json";

function ProductDescription() {
	const tabs = productDescriptionData.map((item) => ({
		id: item.id,
		name: item.name,
	}));

	const renderPanel = (id) => {
		const panelData = productDescriptionData.find((el) => el.id === id);
		return <p className={classes.Text}>{panelData.text}</p>;
	};

	return (
		<Card className={classes.Container}>
			<Tabs
				tabItems={tabs}
				tabListClass={classes.TabList}
				tabTextName="name"
				renderPanels={renderPanel}
			/>
		</Card>
	);
}

export default ProductDescription;
