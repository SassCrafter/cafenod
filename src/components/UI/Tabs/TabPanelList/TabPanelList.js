import React, { useState, useEffect } from "react";
import TabPanel from "../TabPanel/TabPanel";
import classes from "./TabPanelList.module.scss";
import { PRODUCT } from "../../../../constants/routes";
function TabPanelList({ items }) {
	const [listClasses, setListClasses] = useState(`${classes.List}`);

	useEffect(() => {
		setListClasses(`${classes.List} ${classes.Animate}`);

		const timer = setTimeout(() => {
			setListClasses(`${classes.List}`);
		}, 700);

		return () => {
			clearTimeout(timer);
		};
	}, [items]);
	const itemsList = items.map((menuItem) => {
		return menuItem.items.map((item) => {
			return (
				<TabPanel
					key={item.id}
					title={item.title}
					description={item.description}
					price={item.price}
					image={item.image}
					linkTo={PRODUCT}
				/>
			);
		});
	});
	return <ul className={listClasses}>{itemsList}</ul>;
}

export default TabPanelList;
