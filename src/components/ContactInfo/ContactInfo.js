import React from "react";
import classes from "./ContactInfo.module.scss";
import ContactItem from "./ContactItem/ContactItem";

function ContactInfo() {
	return (
		<div className={classes.Container}>
			<ul className={classes.List}>
				<ContactItem iconClass="fas fa-phone">
					<p>
						(008) 01869018907 <br /> +897 989 543 2344
					</p>
				</ContactItem>
				<ContactItem iconClass="fas fa-envelope">
					<p>
						info.@webmail.com <br /> cofenod@gmail.com
					</p>
				</ContactItem>
				<ContactItem iconClass="fas fa-fax">
					<p>
						65023 Odessa <br /> 65023 Odessa
					</p>
				</ContactItem>
			</ul>
		</div>
	);
}

export default ContactInfo;
