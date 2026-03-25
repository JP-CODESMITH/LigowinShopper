"use client";
import React, { useState } from "react";
import { ChevronDownOutline } from "react-ionicons";
import * as motion from "motion/react-client";

const Faq = () => {
	const [open, setOpen] = useState(false);
	return (
		<div className="w-80 sm:w-[70%] flex flex-col gap-2">
			<button
				className="flex flex-row justify-between"
				onClick={() => setOpen(!open ? true : false)}
			>
				<p className="text-lg font-semibold text-gold-premium">What is ligowinshopper</p>
				<ChevronDownOutline
					color={"#D4AF37"}
					title={""}
					height="25px"
					width="25px"
					className={
						open
							? "rotate-180 transition-all ease-in-out transform = 'rotate(180)'"
							: " transition-all ease-linear transform = 'rotate(180)"
					}
				/>
			</button>{" "}
			<hr className="w-full border-border-light" />
			{open && (
				<motion.div
					className="gap-8 flex flex-col mt-2 transition-all ease-in-out"
					initial={{ opacity: -5, y: -5 }}
					animate={{ y: 1, opacity: 1 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 3, ease: [0, 0.71, 0.2, 1.01] }}
					layout
				>
					<p className="text-text-soft">
						Flowbite is an open-source library of interactive
						components built on top of Tailwind CSS including
						buttons, dropdowns, modals, navbars, and more. Check out
						this guide to learn how to get started and start
						developing websites even faster with components on top
						of Tailwind CSS.
					</p>
					<hr className="w-full border-border-light" />
				</motion.div>
			)}
		</div>
	);
};

export default Faq;
