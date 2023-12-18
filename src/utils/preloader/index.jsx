import React from "react";
import classNames from "classnames";
import { HashLoader } from "react-spinners";
import usePreloader from "../../hook/usePreloader";
import "./style.scss";

const Preloader = () => {
	const { isLoading } = usePreloader();
	return (
		isLoading && (
			<div className={classNames('P-isLoading', 'G-flex', 'G-flex-column', 'G-justify-center', 'G-align-center')}>
				<HashLoader size={66} color={"#6B85BF"} loading={isLoading} />
			</div>
		)
	);
};

export default Preloader;
